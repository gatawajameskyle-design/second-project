// src/declarations.d.ts

/**
 * Declares all imports ending in .module.css.
 * The 'content' constant defines the expected type as an object 
 * where keys are class names (strings) and values are the resulting 
 * unique class strings (strings).
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }