"use client";

import { useEffect, useRef, useState } from "react";
import {
  getCompanyOfficeMapPoints,
  officeAddressLine,
  officeMapsEmbedUrl,
  officeMapsSearchUrl,
  type CompanyOfficeMapPoint
} from "@/lib/company-offices-map";

const offices = getCompanyOfficeMapPoints();
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";

type GoogleMapsNamespace = {
  maps: {
    Map: new (
      element: HTMLElement,
      options: {
        mapTypeControl?: boolean;
        streetViewControl?: boolean;
        fullscreenControl?: boolean;
      }
    ) => GoogleMap;
    Marker: new (options: {
      position: { lat: number; lng: number };
      map: GoogleMap;
      title: string;
    }) => GoogleMarker;
    InfoWindow: new (options: { content: string }) => GoogleInfoWindow;
    LatLngBounds: new () => GoogleLatLngBounds;
  };
};

type GoogleMap = {
  fitBounds: (bounds: GoogleLatLngBounds, padding?: number) => void;
};

type GoogleMarker = {
  addListener: (event: string, handler: () => void) => void;
};

type GoogleInfoWindow = {
  open: (options: { map: GoogleMap; anchor: GoogleMarker }) => void;
};

type GoogleLatLngBounds = {
  extend: (position: { lat: number; lng: number }) => void;
};

declare global {
  interface Window {
    google?: GoogleMapsNamespace;
  }
}

let mapsScriptPromise: Promise<void> | null = null;

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (window.google?.maps) return Promise.resolve();
  if (mapsScriptPromise) return mapsScriptPromise;

  mapsScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Google Maps failed to load")), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });

  return mapsScriptPromise;
}

function officeInfoContent(office: CompanyOfficeMapPoint): string {
  const address = officeAddressLine(office);
  const mapsUrl = officeMapsSearchUrl(office);
  return `<div class="contact-map-infowindow"><strong>${office.label}</strong><br>${address}<br><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Otevřít v Mapách Google</a></div>`;
}

function ContactOfficesMapInteractive({
  apiKey,
  variant
}: {
  apiKey: string;
  variant: "hero" | "panel";
}) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    let cancelled = false;

    loadGoogleMapsScript(apiKey)
      .then(() => {
        if (cancelled || !mapContainerRef.current || !window.google?.maps) return;

        const { Map, Marker, InfoWindow, LatLngBounds } = window.google.maps;
        const map = new Map(mapContainerRef.current, {
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true
        });
        const bounds = new LatLngBounds();

        offices.forEach((office) => {
          const position = { lat: office.lat, lng: office.lng };
          bounds.extend(position);

          const marker = new Marker({
            position,
            map,
            title: office.label
          });

          const info = new InfoWindow({
            content: officeInfoContent(office)
          });

          marker.addListener("click", () => {
            info.open({ map, anchor: marker });
          });
        });

        map.fitBounds(bounds, 56);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey]);

  if (loadError) {
    return <ContactOfficesMapEmbed variant={variant} />;
  }

  return (
    <div
      ref={mapContainerRef}
      className="contact-offices-map-canvas"
      role="application"
      aria-label="Mapa provozoven NATURCHEM"
    />
  );
}

/** Embed přepínač poboček — funguje bez API klíče (Maps Embed je zdarma). */
function ContactOfficesMapEmbed({ variant }: { variant: "hero" | "panel" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = offices[activeIndex];
  const panelId = `contact-map-panel-${variant}`;

  return (
    <div className={`contact-offices-map-embed contact-offices-map-embed--${variant}`}>
      <div className="contact-offices-map-picker" role="tablist" aria-label="Vyberte provozovnu">
        {offices.map((office, index) => {
          const tabId = `contact-map-tab-${variant}-${index}`;
          const isActive = index === activeIndex;
          return (
            <button
              key={office.label}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={panelId}
              className={`contact-offices-map-tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {office.label}
            </button>
          );
        })}
      </div>
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`contact-map-tab-${variant}-${activeIndex}`}
        className="contact-offices-map-frame-wrap"
      >
        <iframe
          key={active.label}
          title={`Mapa provozovny ${active.label}`}
          className="contact-offices-map-iframe"
          src={officeMapsEmbedUrl(active)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="contact-offices-map-embed-foot">
        <p className="contact-offices-map-address">{officeAddressLine(active)}</p>
        <a
          className="contact-offices-map-external"
          href={officeMapsSearchUrl(active)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Otevřít v Mapách Google
        </a>
      </div>
    </div>
  );
}

type Props = {
  /** hero = v hero pruhu stránky; panel = viditelný blok pod provozovnami */
  variant?: "hero" | "panel";
};

export function ContactOfficesMap({ variant = "hero" }: Props) {
  const content = mapsApiKey ? (
    <ContactOfficesMapInteractive apiKey={mapsApiKey} variant={variant} />
  ) : (
    <ContactOfficesMapEmbed variant={variant} />
  );

  return <div className={`contact-offices-map contact-offices-map--${variant}`}>{content}</div>;
}
