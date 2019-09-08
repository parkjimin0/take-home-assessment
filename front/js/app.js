/**
 * @file App main entry point.
 */

import '@babel/polyfill';

// Include the main scss file for webpack processing.
import '../css/app.scss';

import { renderApp, renderTime } from './components';

import getLogger from './utils/logger';

const log = getLogger('App');

const init = () => {
  log.info('init() :: App starts booting...');
  renderTime('#time')
  renderApp('#app')
};

// init app
init();
