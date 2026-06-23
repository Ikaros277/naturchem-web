"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/lib/i18n/locale-context";
import {
  getCompanyOfficeMapPoints,
  officeAddressLine,
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

type LeafletMap = {
  remove: () => void;
  fitBounds: (bounds: LeafletLatLngBounds, options?: { padding: [number, number] }) => void;
  flyTo: (latlng: [number, number], zoom: number, options?: { duration?: number }) => void;
  invalidateSize?: () => void;
};

type LeafletLatLngBounds = {
  extend: (latlng: [number, number]) => LeafletLatLngBounds;
};

type LeafletMarker = {
  addTo: (map: LeafletMap) => LeafletMarker;
  bindPopup: (content: string) => LeafletMarker;
  openPopup: () => void;
};

type LeafletNamespace = {
  map: (element: HTMLElement, options?: { scrollWheelZoom?: boolean }) => LeafletMap;
  tileLayer: (
    url: string,
    options: { attribution: string }
  ) => { addTo: (map: LeafletMap) => void };
  marker: (latlng: [number, number]) => LeafletMarker;
  latLngBounds: (latlngs: [number, number][]) => LeafletLatLngBounds;
};

declare global {
  interface Window {
    google?: GoogleMapsNamespace;
    L?: LeafletNamespace;
  }
}

let mapsScriptPromise: Promise<void> | null = null;
let leafletAssetsPromise: Promise<void> | null = null;

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

function loadLeafletAssets(): Promise<void> {
  if (window.L) return Promise.resolve();
  if (leafletAssetsPromise) return leafletAssetsPromise;

  leafletAssetsPromise = new Promise((resolve, reject) => {
    if (!document.querySelector('link[data-leaflet="true"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.dataset.leaflet = "true";
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-leaflet="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Leaflet failed to load")), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.defer = true;
    script.dataset.leaflet = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Leaflet failed to load"));
    document.head.appendChild(script);
  });

  return leafletAssetsPromise;
}

function officeInfoContent(office: CompanyOfficeMapPoint, openInGoogleMaps: string): string {
  const address = officeAddressLine(office);
  const mapsUrl = officeMapsSearchUrl(office);
  return `<div class="contact-map-infowindow"><strong>${office.label}</strong><br>${address}<br><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${openInGoogleMaps}</a></div>`;
}

function officePopupContent(office: CompanyOfficeMapPoint, navigateInGoogleMaps: string): string {
  const mapsUrl = officeMapsSearchUrl(office);
  return `<strong>${office.label}</strong><br>${officeAddressLine(office)}<br><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${navigateInGoogleMaps}</a>`;
}

function OfficePicker({
  variant,
  activeIndex,
  onSelect,
  selectOfficeAria
}: {
  variant: "hero" | "panel";
  activeIndex: number;
  onSelect: (index: number) => void;
  selectOfficeAria: string;
}) {
  return (
    <div className="contact-offices-map-picker" role="tablist" aria-label={selectOfficeAria}>
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
            className={`contact-offices-map-tab${isActive ? " is-active" : ""}`}
            onClick={() => onSelect(index)}
          >
            {office.label}
          </button>
        );
      })}
    </div>
  );
}

type MapLabels = {
  mapAria: string;
  openInGoogleMaps: string;
  navigateInGoogleMaps: string;
  selectOfficeAria: string;
};

function ContactOfficesMapInteractive({
  apiKey,
  variant,
  labels
}: {
  apiKey: string;
  variant: "hero" | "panel";
  labels: MapLabels;
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
            content: officeInfoContent(office, labels.openInGoogleMaps)
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
  }, [apiKey, labels.openInGoogleMaps]);

  if (loadError) {
    return <ContactOfficesMapLeaflet variant={variant} labels={labels} />;
  }

  return (
    <div
      ref={mapContainerRef}
      className="contact-offices-map-canvas"
      role="application"
      aria-label={labels.mapAria}
    />
  );
}

/** Plně posuvná mapa bez API klíče (OpenStreetMap + Leaflet, zdarma). */
function ContactOfficesMapLeaflet({
  variant,
  labels
}: {
  variant: "hero" | "panel";
  labels: MapLabels;
}) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = offices[activeIndex];

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    let cancelled = false;

    loadLeafletAssets()
      .then(() => {
        if (cancelled || !mapContainerRef.current || !window.L) return;

        const L = window.L;
        const map = L.map(mapContainerRef.current, { scrollWheelZoom: true });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const bounds = L.latLngBounds(
          offices.map((office) => [office.lat, office.lng] as [number, number])
        );

        const markers = offices.map((office) => {
          const marker = L.marker([office.lat, office.lng])
            .addTo(map)
            .bindPopup(officePopupContent(office, labels.navigateInGoogleMaps));
          return marker;
        });

        map.fitBounds(bounds, { padding: [48, 48] });
        window.setTimeout(() => {
          map.invalidateSize?.();
        }, 120);
        mapRef.current = map;
        markersRef.current = markers;
      })
      .catch(() => {
        /* tichý fallback — mapa zůstane prázdná */
      });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, [labels.navigateInGoogleMaps]);

  const focusOffice = (index: number) => {
    setActiveIndex(index);
    const map = mapRef.current;
    const marker = markersRef.current[index];
    const office = offices[index];
    if (!map) return;

    map.flyTo([office.lat, office.lng], 14, { duration: 0.6 });
    marker?.openPopup();
  };

  return (
    <div className={`contact-offices-map-leaflet contact-offices-map-embed--${variant}`}>
      <OfficePicker
        variant={variant}
        activeIndex={activeIndex}
        onSelect={focusOffice}
        selectOfficeAria={labels.selectOfficeAria}
      />
      <div className="contact-offices-map-frame-wrap">
        <div
          ref={mapContainerRef}
          className="contact-offices-map-canvas contact-offices-map-canvas--leaflet"
          role="application"
          aria-label={labels.mapAria}
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
          {labels.openInGoogleMaps}
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
  const contact = useTranslations("contact");
  const labels: MapLabels = {
    mapAria: contact.mapLabel,
    openInGoogleMaps: contact.openInGoogleMaps,
    navigateInGoogleMaps: contact.navigateInGoogleMaps,
    selectOfficeAria: contact.selectOfficeAria
  };

  const content = mapsApiKey ? (
    <ContactOfficesMapInteractive apiKey={mapsApiKey} variant={variant} labels={labels} />
  ) : (
    <ContactOfficesMapLeaflet variant={variant} labels={labels} />
  );

  return <div className={`contact-offices-map contact-offices-map--${variant}`}>{content}</div>;
}
