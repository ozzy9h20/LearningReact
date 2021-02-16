// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

function init() {
  // Sentry.init({
  //   dsn:
  //     'https://1c71ac15daf546859a6796ef025f92b5@o524697.ingest.sentry.io/5637491',
  //   integrations: [new Integrations.BrowserTracing()],
  //   // We recommend adjusting this value in production, or using tracesSampler
  //   // for finer control
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default { init, log };
