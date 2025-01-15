'use client';
import { useEffect } from 'react';

import { initializeFeedbackButton } from '@/sentry.client.config';

export default function SentryFeedbackHandler() {
  useEffect(() => {
    // Initialize the feedback button only after rendering
    initializeFeedbackButton();
  }, []);

  return null; // This component only handles initialization, no UI
}
