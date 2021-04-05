/**
 * ClutterGdk-1.0
 */

/// <reference types="node" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Clutter-1.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="CoglPango-1.0.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="Cogl-1.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace ClutterGdk {

export function disableEventRetrieval(): void
export function getDefaultDisplay(): Gdk.Display
export function getStageFromWindow(window: any): Clutter.Stage
export function getStageWindow(stage: Clutter.Stage): any
export function getVisual(): any
export function handleEvent(event: Gdk.Event): any
export function setDisplay(display: Gdk.Display): void
export function setStageForeign(stage: Clutter.Stage, window: any): boolean
}