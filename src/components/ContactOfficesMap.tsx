"use client";

import "./contact-offices-map.css";
import { useEffect, useRef, useState } from "react";
import { useCookieConsentState } from "@/components/CookieConsentBanner";
import { ContactMapFallback } from "@/components/ContactMapFallback";
import { useTranslations } from "@/lib/i18n/locale-context";
import {
  getCompanyOfficeMapPoints,
  officeAddressLine,
  officeMapsSearchUrl,
  type CompanyOfficeMapPoint
} from "@/lib/company-offices-map";

const offices = getCompanyOfficeMapPoints();
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";

function useMapsAllowed() {
  const consent = useCookieConsentState();
  return consent.updatedAt !== "" && consent.statistics;
}

type GoogleMapsNamespace = {
  maps: {
    Map: new (
      element: HTMLElement,
      options: {
        mapTypeControl?: boolean;
        streetViewControl?: boolean;
        fullscreenControl?: boolean;
        gestureHandling?: string;
        scrollwheel?: boolean;
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
  setCenter: (position: { lat: number; lng: number }) => void;
  setZoom: (zoom: number) => void;
};

type GoogleMarker = {
  addListener: (event: string, handler: () => void) => void;
};

type GoogleInfoWindow = {
  open: (options: { map: GoogleMap; anchor: GoogleMarker }) => void;
  close: () => void;
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
  return `<div class="contact-map-infowindow"><strong>${office.label}</strong><br>${officeAddressLine(office)}<br><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${navigateInGoogleMaps}</a></div>`;
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
    <div className="contact-offices-map-picker" role="group" aria-label={selectOfficeAria}>
      {offices.map((office, index) => {
        const tabId = `contact-map-tab-${variant}-${index}`;
        const isActive = index === activeIndex;
        return (
          <button
            key={office.label}
            type="button"
            id={tabId}
            aria-pressed={isActive}
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

function MapFrame({ variant, labels, activeIndex, onSelect, children }: {
  variant: "hero" | "panel";
  labels: MapLabels;
  activeIndex: number;
  onSelect: (index: number) => void;
  children: React.ReactNode;
}) {
  const active = offices[activeIndex];
  return (
    <div className={`contact-offices-map-leaflet contact-offices-map-embed--${variant}`}>
      <OfficePicker variant={variant} activeIndex={activeIndex} onSelect={onSelect} selectOfficeAria={labels.selectOfficeAria} />
      <div className="contact-offices-map-frame-wrap">{children}</div>
      <div className="contact-offices-map-embed-foot">
        <p className="contact-offices-map-address">{officeAddressLine(active)}</p>
        <a className="contact-offices-map-external" href={officeMapsSearchUrl(active)} target="_blank" rel="noopener noreferrer">
          {labels.openInGoogleMaps}
        </a>
      </div>
    </div>
  );
}

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
  const mapRef = useRef<GoogleMap | null>(null);
  const selectedOfficeRef = useRef<number | null>(null);
  const markersRef = useRef<GoogleMarker[]>([]);
  const infoRef = useRef<GoogleInfoWindow[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const focusOffice = (index: number) => {
    setActiveIndex(index);
    selectedOfficeRef.current = index;
    const map = mapRef.current;
    if (!map) return;
    const office = offices[index];
    map.setCenter({ lat: office.lat, lng: office.lng });
    map.setZoom(14);
    infoRef.current.forEach(info => info.close());
    infoRef.current[index]?.open({ map, anchor: markersRef.current[index] });
  };

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
          fullscreenControl: true,
          gestureHandling: "cooperative",
          scrollwheel: false
        });
        const bounds = new LatLngBounds();

        offices.forEach((office, index) => {
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
            setActiveIndex(index);
            infoRef.current.forEach(other => other.close());
            info.open({ map, anchor: marker });
          });
          markersRef.current.push(marker);
          infoRef.current.push(info);
        });

        map.fitBounds(bounds, 56);
        mapRef.current = map;
        if (selectedOfficeRef.current !== null) {
          const index = selectedOfficeRef.current;
          const office = offices[index];
          map.setCenter({ lat: office.lat, lng: office.lng });
          map.setZoom(14);
          infoRef.current[index]?.open({ map, anchor: markersRef.current[index] });
        }
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
      infoRef.current.forEach(info => info.close());
      infoRef.current = [];
      markersRef.current = [];
      mapRef.current = null;
    };
  }, [apiKey, labels.openInGoogleMaps]);

  if (loadError) {
    return <ContactOfficesMapLeaflet variant={variant} labels={labels} />;
  }

  return (
    <MapFrame variant={variant} labels={labels} activeIndex={activeIndex} onSelect={focusOffice}>
      <div ref={mapContainerRef} className="contact-offices-map-canvas" role="region" aria-label={labels.mapAria} />
    </MapFrame>
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
  const selectedOfficeRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    let cancelled = false;
    let resizeTimer: number | undefined;

    loadLeafletAssets()
      .then(() => {
        if (cancelled || !mapContainerRef.current || !window.L) return;

        const L = window.L;
        const map = L.map(mapContainerRef.current, { scrollWheelZoom: false });
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
        resizeTimer = window.setTimeout(() => {
          map.invalidateSize?.();
        }, 120);
        mapRef.current = map;
        markersRef.current = markers;
        if (selectedOfficeRef.current !== null) {
          const selected = offices[selectedOfficeRef.current];
          map.flyTo([selected.lat, selected.lng], 14, { duration: 0 });
          markers[selectedOfficeRef.current]?.openPopup();
        }
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimer);
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, [labels.navigateInGoogleMaps]);

  const focusOffice = (index: number) => {
    setActiveIndex(index);
    selectedOfficeRef.current = index;
    const map = mapRef.current;
    const marker = markersRef.current[index];
    const office = offices[index];
    if (!map) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    map.flyTo([office.lat, office.lng], 14, { duration: reducedMotion ? 0 : 0.6 });
    marker?.openPopup();
  };

  if (loadError) return <ContactMapFallback variant={variant} loading />;

  return (
    <MapFrame variant={variant} labels={labels} activeIndex={activeIndex} onSelect={focusOffice}>
        <div
          ref={mapContainerRef}
          className="contact-offices-map-canvas contact-offices-map-canvas--leaflet"
          role="region"
          aria-label={labels.mapAria}
        />
    </MapFrame>
  );
}

type Props = {
  /** hero = v hero pruhu stránky; panel = viditelný blok pod provozovnami */
  variant?: "hero" | "panel";
};

export function ContactOfficesMap({ variant = "hero" }: Props) {
  const mapsAllowed = useMapsAllowed();
  const contact = useTranslations("contact");
  const labels: MapLabels = {
    mapAria: contact.mapLabel,
    openInGoogleMaps: contact.openInGoogleMaps,
    navigateInGoogleMaps: contact.navigateInGoogleMaps,
    selectOfficeAria: contact.selectOfficeAria
  };

  if (!mapsAllowed) {
    return <ContactMapFallback variant={variant} />;
  }

  const content = mapsApiKey ? (
    <ContactOfficesMapInteractive apiKey={mapsApiKey} variant={variant} labels={labels} />
  ) : (
    <ContactOfficesMapLeaflet variant={variant} labels={labels} />
  );

  return <div className={`contact-offices-map contact-offices-map--${variant}`}>{content}</div>;
}
