/// <reference lib="webworker" />

import { version } from '$service-worker';
const worker = self ;

worker.addEventListener('install', (event) => {});
worker.addEventListener('activate', (event) => {});

worker.addEventListener('fetch', (event) => {
	return;
});