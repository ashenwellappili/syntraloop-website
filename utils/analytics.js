/**
 * SyntraLoop Analytics & Conversion Event Dispatcher
 * Dispatches custom events to Google Analytics (gtag), PostHog, or custom trackers.
 */

export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return;

  // 1. Google Analytics / gtag support
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 2. PostHog support
  if (window.posthog && typeof window.posthog.capture === 'function') {
    window.posthog.capture(eventName, eventParams);
  }

  // 3. Custom Event on DOM (for testing / listening)
  try {
    const customEvt = new CustomEvent('syntraloop:track', {
      detail: { event: eventName, ...eventParams, timestamp: Date.now() },
    });
    window.dispatchEvent(customEvt);
  } catch (e) {
    // Ignore in non-supporting environments
  }
}
