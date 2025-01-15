// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

// Store a flag to check if feedback has been initialized
let feedbackInitialized = false;

Sentry.init({
  dsn: 'https://fe6e8a34c2a4d8942e31a668e04d7855@o4508647788314624.ingest.de.sentry.io/4508647794671696',

  // Other Sentry configurations
  integrations: [
    Sentry.replayIntegration(),
    // Do not add feedbackIntegration here; it will be added dynamically
  ],

  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

// Function to dynamically initialize the feedback button
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
