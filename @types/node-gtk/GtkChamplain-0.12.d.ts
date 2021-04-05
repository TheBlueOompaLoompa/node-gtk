/**
 * GtkChamplain-0.12
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="Clutter-1.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="CoglPango-1.0.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="Cogl-1.0.d.ts" />
/// <reference path="Champlain-0.12.d.ts" />

declare namespace GtkChamplain {

export class Embed {
    /* Properties of GtkChamplain.Embed */
    readonly champlainView: Champlain.View
    /* Fields of GtkChamplain.Embed */
    bin: any
    priv: EmbedPrivate
    /* Methods of GtkChamplain.Embed */
    getView(): Champlain.View
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    static name: string
    static new(): Embed
    constructor()
    static new(): Embed
}
export abstract class EmbedClass {
    /* Fields of GtkChamplain.EmbedClass */
    parentClass: any
    static name: string
}
export class EmbedPrivate {
    static name: string
}
}