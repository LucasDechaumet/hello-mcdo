import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const Vert = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{green.900}',
          inverseColor: '#ffffff',
          hoverColor: '{green.800}',
          activeColor: '{green.700}',
        },
        surface: {
          background: '#ffffff',
          color: '#334155',
        },
        highlight: {
          background: '{zinc.900}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{green.400}',
          inverseColor: '#000000',
          hoverColor: '{green.300}',
          activeColor: '{green.200}',
        },
        surface: {
          background: '#09090b',
          color: '#ffffff',
        },
        highlight: {
          background: '{zinc.100}',
          focusBackground: '{zinc.300}',
          color: '#000000',
          focusColor: '#000000',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Vert,
      },
    }),
  ],
};
