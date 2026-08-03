import ReactGA from "react-ga4";

type AnalyticsParamValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsParamValue | undefined>;

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;

let isInitialized = false;
let lastTrackedPath: string | null = null;

function getMeasurementId(): string | undefined {
  return GA_MEASUREMENT_ID?.trim() || undefined;
}

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function definedParams(params: AnalyticsParams): Record<string, AnalyticsParamValue> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  ) as Record<string, AnalyticsParamValue>;
}

export function initializeAnalytics(): boolean {
  if (isInitialized) return true;

  const measurementId = getMeasurementId();
  if (!measurementId || !isBrowser()) return false;

  try {
    ReactGA.initialize(measurementId, {
      gtagOptions: {
        send_page_view: false,
      },
    });
    isInitialized = true;
    return true;
  } catch (error) {
    console.warn("Google Analytics failed to initialize.", error);
    return false;
  }
}

export function trackPageView(path: string): void {
  if (!initializeAnalytics()) return;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (lastTrackedPath === normalizedPath) return;

  lastTrackedPath = normalizedPath;
  ReactGA.send({
    hitType: "pageview",
    page: normalizedPath,
    title: document.title,
  });
}

export function trackEvent(
  category: string,
  action: string,
  label?: string
): void {
  if (!initializeAnalytics()) return;

  ReactGA.event(action, definedParams({
    event_category: category,
    event_label: label,
  }));
}

export function trackButtonClick(buttonName: string): void {
  if (!initializeAnalytics()) return;

  ReactGA.event("button_click", definedParams({
    event_category: "Button",
    event_label: buttonName,
    button_name: buttonName,
  }));
}

export function trackFormSubmission(formName: string): void {
  if (!initializeAnalytics()) return;

  ReactGA.event("form_submit", definedParams({
    event_category: "Form",
    event_label: formName,
    form_name: formName,
  }));
}

export function trackDownload(fileName: string): void {
  if (!initializeAnalytics()) return;

  ReactGA.event("file_download", definedParams({
    event_category: "Download",
    event_label: fileName,
    file_name: fileName,
  }));
}
