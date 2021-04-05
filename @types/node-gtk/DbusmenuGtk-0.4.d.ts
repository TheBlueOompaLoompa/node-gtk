/**
 * DbusmenuGtk-0.4
 */

/// <reference types="node" />
/// <reference path="Gtk-2.0.d.ts" />
/// <reference path="Gdk-2.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="Dbusmenu-0.4.d.ts" />

declare namespace DbusmenuGtk {

export const GTK_MENUITEM_H__: number
export function gtkParseGetCachedItem(widget: Gtk.Widget): Dbusmenu.Menuitem
export function gtkParseMenuStructure(widget: Gtk.Widget): Dbusmenu.Menuitem
export function menuitemPropertyGetImage(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf
export function menuitemPropertyGetShortcut(menuitem: Dbusmenu.Menuitem): [ /* key */ number, /* modifier */ Gdk.ModifierType ]
export function menuitemPropertySetImage(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean
export function menuitemPropertySetShortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean
export function menuitemPropertySetShortcutMenuitem(menuitem: Dbusmenu.Menuitem, gmi: any): boolean
export function menuitemPropertySetShortcutString(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean
export interface Client_ConstructProps extends Dbusmenu.Client_ConstructProps {
}
export class Client {
    /* Properties of Dbusmenu.Client */
    groupEvents: boolean
    /* Fields of DbusmenuGtk.Client */
    /* Fields of Dbusmenu.Client */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DbusmenuGtk.Client */
    getAccelGroup(): any
    menuitemGet(item: Dbusmenu.Menuitem): any
    menuitemGetSubmenu(item: Dbusmenu.Menuitem): any
    newitemBase(item: Dbusmenu.Menuitem, gmi: any, parent: Dbusmenu.Menuitem): void
    setAccelGroup(agroup: any): void
    /* Methods of Dbusmenu.Client */
    addTypeHandler(type: string, newfunc: Dbusmenu.ClientTypeHandler): boolean
    addTypeHandlerFull(type: string, newfunc: Dbusmenu.ClientTypeHandler): boolean
    getIconPaths(): string[]
    getRoot(): Dbusmenu.Menuitem
    getStatus(): Dbusmenu.Status
    getTextDirection(): Dbusmenu.TextDirection
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu.Client */
    connect(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    connect_after(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null): void
    on(sigName: "event-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    connect_after(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    emit(sigName: "icon-theme-dirs-changed", arg1?: object | null): void
    on(sigName: "icon-theme-dirs-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-theme-dirs-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-theme-dirs-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number): void
    on(sigName: "item-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    emit(sigName: "layout-updated"): void
    on(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "new-menuitem", arg1: GObject.Object): void
    on(sigName: "new-menuitem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-menuitem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-menuitem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "root-changed", arg1: GObject.Object): void
    on(sigName: "root-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "root-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "root-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    static new(dbusName: string, dbusObject: string): Client
    static $gtype: GObject.Type
}
export class Menu {
    /* Properties of DbusmenuGtk.Menu */
    /* Fields of DbusmenuGtk.Menu */
    parent: any
    priv: MenuPrivate
    /* Methods of DbusmenuGtk.Menu */
    getClient(): Client
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    static name: string
    static new(dbusName: string, dbusObject: string): Menu
    constructor(dbusName: string, dbusObject: string)
    static new(dbusName: string, dbusObject: string): Menu
}
export abstract class ClientClass {
    /* Fields of DbusmenuGtk.ClientClass */
    parentClass: Dbusmenu.ClientClass
    rootChanged: any
    reserved1: any
    reserved2: any
    reserved3: any
    reserved4: any
    reserved5: any
    reserved6: any
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class MenuClass {
    /* Fields of DbusmenuGtk.MenuClass */
    parentClass: any
    reserved1: any
    reserved2: any
    reserved3: any
    reserved4: any
    reserved5: any
    reserved6: any
    static name: string
}
export class MenuPrivate {
    static name: string
}
}