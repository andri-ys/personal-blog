/// <reference types="astro/client" />
/// <reference path="node_modules/astro/astro-jsx.d.ts" />

// Expose Astro's JSX types globally so TS can type-check JSX in .astro files.
declare global {
  namespace JSX {
    interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements {}
  }
}

export {};
