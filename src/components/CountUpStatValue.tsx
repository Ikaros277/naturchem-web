"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./count-up-stat.module.css";

type Props = {
  value: string;
};

type ParsedValue = {
  target: number;
  suffix: string;
  thousandsSeparator: string;
};

function parseValue(value: string): ParsedValue | null {
  const match = value.match(/^([\d\s,.\u00a0\u202f]*\d)(.*)$/u);

  if (!match) return null;

  const target = Number(match[1].replace(/\D/g, ""));

  if (!Number.isFinite(target)) return null;

  return {
    target,
    suffix: match[2],
    thousandsSeparator: match[1].includes(",")
      ? ","
      : /[\s\u00a0\u202f]/u.test(match[1])
        ? "\u00a0"
        : ""
  };
}

function formatValue(value: number, parsed: ParsedValue) {
  const digits = Math.floor(value).toString();
  const grouped = parsed.thousandsSeparator
    ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, parsed.thousandsSeparator)
    : digits;

  return `${grouped}${parsed.suffix}`;
}

export function CountUpStatValue({ value }: Props) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const visibleRef = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    const element = elementRef.current;
    const visible = visibleRef.current;

    if (!element || !visible || !parsed || parsed.target <= 0) return;
    visible.textContent = value;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;
    let hasStarted = false;

    const startAnimation = () => {
      if (hasStarted) return;

      hasStarted = true;
      const duration = 1500;
      visible.textContent = formatValue(0, parsed);

      const startedAt = performance.now();
      let lastPaint = 0;

      const update = (now: number) => {
        const progress = Math.max(0, Math.min((now - startedAt) / duration, 1));
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        // Only paint the decorative node; keep layout and accessible text fixed.
        // Flooring also keeps small values (e.g. 36) counting until the end.
        if (now - lastPaint >= 32 || progress === 1) {
          const text = progress === 1 ? value : formatValue(parsed.target * easedProgress, parsed);
          if (visible.textContent !== text) visible.textContent = text;
          lastPaint = now;
        }

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(update);
        }
      };

      animationFrame = window.requestAnimationFrame(update);
    };

    if (!("IntersectionObserver" in window)) {
      startAnimation();
      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          startAnimation();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [parsed, value]);

  return (
    <span ref={elementRef} className={`stat-value ${styles.value}`}>
      <span className={styles.reserve} aria-hidden="true">
        {value}
      </span>
      <span ref={visibleRef} className={styles.visible} aria-hidden="true">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
