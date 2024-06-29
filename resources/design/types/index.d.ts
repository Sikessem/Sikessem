import type { Alpine } from 'alpinejs';
import type Axios from 'axios';
import type Echo from 'laravel-echo';
import type Pusher from 'pusher-js';

declare global {
  interface Window {
    Alpine: Alpine;
    axios: Axios;
    Pusher: Pusher;
    Echo: Echo;
  }
}
