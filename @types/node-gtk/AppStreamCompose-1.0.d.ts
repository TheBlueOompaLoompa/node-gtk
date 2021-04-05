/**
 * AppStreamCompose-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="AppStream-1.0.d.ts" />

declare namespace AppStreamCompose {

export enum CanvasError {
    FAILED,
    DRAWING,
    FONT,
    LAST,
}
export enum ComposeError {
    FAILED,
    LAST,
}
export enum FontError {
    FAILED,
    LAST,
}
export enum ImageError {
    FAILED,
    LAST,
}
export enum ImageFormat {
    UNKNOWN,
    PNG,
    JPEG,
    GIF,
    SVG,
    SVGZ,
    WEBP,
    AVIF,
    XPM,
    LAST,
}
export enum ImageLoadFlags {
    NONE,
    SHARPEN,
    ALLOW_UNSUPPORTED,
    ALWAYS_RESIZE,
    LAST,
}
export enum ImageSaveFlags {
    NONE,
    OPTIMIZE,
    PAD_16_9,
    SHARPEN,
    BLUR,
    LAST,
}
export function buildComponentGlobalId(componentId: string, checksum: string): string
export function canvasErrorQuark(): GLib.Quark
export function composeErrorQuark(): GLib.Quark
export function fontErrorQuark(): GLib.Quark
export function globalsAddHintTag(tag: string, severity: AppStream.IssueSeverity, explanation: string): boolean
export function globalsGetHintTags(): string[]
export function globalsGetOptipngBinary(): string
export function globalsGetTmpDir(): string
export function globalsGetTmpDirCreate(): string
export function globalsGetUseOptipng(): boolean
export function globalsHintTagExplanation(tag: string): string
export function globalsHintTagSeverity(tag: string): AppStream.IssueSeverity
export function globalsSetOptipngBinary(path: string): void
export function globalsSetTmpDir(path: string): void
export function globalsSetUseOptipng(enabled: boolean): void
export function imageErrorQuark(): GLib.Quark
export function imageFormatFromFilename(fname: string): ImageFormat
export function imageFormatFromString(str: string): ImageFormat
export function imageFormatToString(format: ImageFormat): string
export function optimizePng(fname: string): boolean
export function parseMetainfoData(cres: Result, mdata: AppStream.Metadata, bytes: any, miBasename: string): AppStream.Component
export function parseMetainfoDataSimple(cres: Result, bytes: any, miBasename: string): AppStream.Component
export function pixbufBlur(src: GdkPixbuf.Pixbuf, radius: number, iterations: number): void
export function pixbufSharpen(src: GdkPixbuf.Pixbuf, radius: number, amount: number): void
export function validateMetainfoDataForComponent(cres: Result, validator: AppStream.Validator, cpt: AppStream.Component, bytes: any, miBasename: string): void
export interface Canvas_ConstructProps extends GObject.Object_ConstructProps {
}
export class Canvas {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamCompose.Canvas */
    drawText(font: Font, text: string, borderWidth: number, linePad: number): boolean
    drawTextLine(font: Font, text: string, borderWidth: number): boolean
    getHeight(): number
    getWidth(): number
    renderSvg(stream: Gio.InputStream): boolean
    savePng(fname: string): boolean
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Canvas_ConstructProps)
    _init (config?: Canvas_ConstructProps): void
    static new(width: number, height: number): Canvas
    static $gtype: GObject.Type
}
export interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
export class Font {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamCompose.Font */
    addLanguage(lang: string): void
    getDescription(): string
    getFamily(): string
    getFullname(): string
    getHomepage(): string
    getId(): string
    getLanguageList(): string[]
    getPreferredLanguage(): string
    getSampleIconText(): string
    getSampleText(): string
    getStyle(): string
    setPreferredLanguage(lang: string): void
    setSampleIconText(text: string): void
    setSampleText(text: string): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    static newFromData(data: object | null, len: number, fileBasename: string): Font
    static newFromFile(fname: string): Font
    static $gtype: GObject.Type
}
export interface Hint_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hint {
    /* Fields of AppStreamCompose.Hint */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamCompose.Hint */
    addExplanationVar(varName: string, text: string): void
    formatExplanation(): string
    getExplanationTemplate(): string
    getExplanationVarsList(): string[]
    getSeverity(): AppStream.IssueSeverity
    getTag(): string
    isError(): boolean
    isValid(): boolean
    setExplanationTemplate(explanationTmpl: string): void
    setSeverity(severity: AppStream.IssueSeverity): void
    setTag(tag: string): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Hint_ConstructProps)
    _init (config?: Hint_ConstructProps): void
    static new(): Hint
    static newForTag(tag: string): Hint
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamCompose.Image */
    getHeight(): number
    getPixbuf(): GdkPixbuf.Pixbuf
    getWidth(): number
    loadFilename(filename: string, destSize: number, srcSizeMin: number, flags: ImageLoadFlags): boolean
    saveFilename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean
    savePixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf
    scale(newWidth: number, newHeight: number): void
    scaleToFit(size: number): void
    scaleToHeight(newHeight: number): void
    scaleToWidth(newWidth: number): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    static new(): Image
    static newFromData(data: object | null, len: number, destSize: number, flags: ImageLoadFlags): Image
    static newFromFile(fname: string, destSize: number, flags: ImageLoadFlags): Image
    static supportedFormatNames(): GLib.HashTable
    static $gtype: GObject.Type
}
export interface Result_ConstructProps extends GObject.Object_ConstructProps {
}
export class Result {
    /* Fields of AppStreamCompose.Result */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamCompose.Result */
    addComponent(cpt: AppStream.Component, bytes: any): boolean
    addComponentWithString(cpt: AppStream.Component, data: string): boolean
    addHintByCid(componentId: string, tag: string, kv: string): boolean
    addHint(cpt: AppStream.Component, tag: string, kv: string): boolean
    componentsCount(): number
    fetchComponents(): AppStream.Component[]
    gcidForCid(cid: string): string
    gcidForComponent(cpt: AppStream.Component): string
    getBundleId(): string
    getBundleKind(): AppStream.BundleKind
    getComponent(cid: string): AppStream.Component
    getComponentGcids(): string[]
    getComponentIdsWithHints(): string[]
    getHints(cid: string): Hint[]
    hintsCount(): number
    removeComponent(cpt: AppStream.Component): boolean
    removeComponentById(cid: string): boolean
    setBundleId(id: string): void
    setBundleKind(kind: AppStream.BundleKind): void
    unitIgnored(): boolean
    updateComponentGcid(cpt: AppStream.Component, bytes?: any): boolean
    updateComponentGcidWithString(cpt: AppStream.Component, data?: string | null): boolean
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    static new(): Result
    static $gtype: GObject.Type
}
export abstract class CanvasClass {
    /* Fields of AppStreamCompose.CanvasClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FontClass {
    /* Fields of AppStreamCompose.FontClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class HintClass {
    /* Fields of AppStreamCompose.HintClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of AppStreamCompose.ImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ResultClass {
    /* Fields of AppStreamCompose.ResultClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}