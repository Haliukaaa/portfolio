// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
let feedbackInitialized = false;

Sentry.init({
  dsn: 'https://fe6e8a34c2a4d8942e31a668e04d7855@o4508647788314624.ingest.de.sentry.io/4508647794671696',

  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
export const initializeFeedbackButton = () => {
  if (!feedbackInitialized) {
    Sentry.addIntegration(
      Sentry.feedbackIntegration({
        colorScheme: 'system', // Match the user's system color scheme
      }),
    );
    feedbackInitialized = true; // Prevent re-initialization
  }
};
