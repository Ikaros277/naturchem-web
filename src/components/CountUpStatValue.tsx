"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const digits = Math.round(value).toString();
  const grouped = parsed.thousandsSeparator
    ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, parsed.thousandsSeparator)
    : digits;

  return `${grouped}${parsed.suffix}`;
}

export function CountUpStatValue({ value }: Props) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || !parsed || parsed.target <= 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;
    let animationTimer = 0;
    let hasStarted = false;

    const startAnimation = () => {
      if (hasStarted) return;

      hasStarted = true;
      const duration = 1400;
      setDisplayValue(formatValue(0, parsed));

      animationTimer = window.setTimeout(() => {
        const startedAt = performance.now();

        const update = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(formatValue(parsed.target * easedProgress, parsed));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(update);
          } else {
            setDisplayValue(value);
          }
        };

        animationFrame = window.requestAnimationFrame(update);
      }, 350);
    };

    if (!("IntersectionObserver" in window)) {
      startAnimation();
      return () => {
        window.clearTimeout(animationTimer);
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
      window.clearTimeout(animationTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [parsed, value]);

  return (
    <span ref={elementRef} className={`stat-value ${styles.value}`}>
      <span className={styles.reserve} aria-hidden="true">
        {value}
      </span>
      <span className={styles.visible} aria-hidden="true">
        {displayValue}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
