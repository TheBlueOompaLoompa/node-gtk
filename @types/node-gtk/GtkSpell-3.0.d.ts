/**
 * GtkSpell-3.0
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

declare namespace GtkSpell {

export enum Error {
    BACKEND,
}
export function errorQuark(): GLib.Quark
export interface Checker_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    decodeLanguageCodes?: boolean
}
export class Checker {
    /* Properties of GtkSpell.Checker */
    decodeLanguageCodes: boolean
    /* Fields of GtkSpell.Checker */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSpell.Checker */
    addToDictionary(word: string): void
    attach(view: Gtk.TextView): boolean
    checkWord(word: string): boolean
    detach(): void
    getLanguage(): string
    getSuggestions(word: string): string[]
    getSuggestionsMenu(iter: Gtk.TextIter): Gtk.Widget
    ignoreWord(word: string): void
    recheckAll(): void
    setLanguage(lang?: string | null): boolean
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
    /* Virtual methods of GtkSpell.Checker */
    vfuncLanguageChanged?(newLang: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSpell.Checker */
    connect(sigName: "language-changed", callback: (($obj: Checker, lang: string) => void)): number
    connect_after(sigName: "language-changed", callback: (($obj: Checker, lang: string) => void)): number
    emit(sigName: "language-changed", lang: string): void
    on(sigName: "language-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "language-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "language-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Checker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Checker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decode-language-codes", callback: (($obj: Checker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decode-language-codes", callback: (($obj: Checker, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decode-language-codes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decode-language-codes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decode-language-codes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Checker_ConstructProps)
    _init (config?: Checker_ConstructProps): void
    static new(): Checker
    static decodeLanguageCode(lang: string): string
    static getFromTextView(view: Gtk.TextView): Checker
    static getLanguageList(): string[]
    static $gtype: GObject.Type
}
export abstract class CheckerClass {
    /* Fields of GtkSpell.CheckerClass */
    parentClass: GObject.InitiallyUnownedClass
    languageChanged: any
    static name: string
}
export class CheckerPrivate {
    static name: string
}
}