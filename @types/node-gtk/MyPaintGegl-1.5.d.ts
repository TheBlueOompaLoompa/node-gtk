/**
 * MyPaintGegl-1.5
 */

/// <reference types="node" />
/// <reference path="MyPaint-1.5.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gegl-0.4.d.ts" />
/// <reference path="Babl-0.1.d.ts" />

declare namespace MyPaintGegl {

export class TiledSurface {
    /* Methods of MyPaintGegl.TiledSurface */
    getBuffer(): Gegl.Buffer
    interface(): MyPaint.Surface
    setBuffer(buffer: Gegl.Buffer): void
    static name: string
    static new(): TiledSurface
    constructor()
    static new(): TiledSurface
}
}