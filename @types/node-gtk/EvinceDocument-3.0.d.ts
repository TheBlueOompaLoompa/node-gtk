/**
 * EvinceDocument-3.0
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

declare namespace EvinceDocument {

export enum AnnotationTextIcon {
    NOTE,
    COMMENT,
    KEY,
    HELP,
    NEW_PARAGRAPH,
    PARAGRAPH,
    INSERT,
    CROSS,
    CIRCLE,
    UNKNOWN,
}
export enum AnnotationTextMarkupType {
    HIGHLIGHT,
    STRIKE_OUT,
    UNDERLINE,
    SQUIGGLY,
}
export enum AnnotationType {
    UNKNOWN,
    TEXT,
    ATTACHMENT,
    TEXT_MARKUP,
}
export enum AnnotationsOverMarkup {
    NOT_IMPLEMENTED,
    UNKNOWN,
    YES,
    NOT,
}
export enum CompressionType {
    NONE,
    BZIP2,
    GZIP,
    LZMA,
}
export enum DocumentContainsJS {
    UNKNOWN,
    NO,
    YES,
}
export enum DocumentError {
    INVALID,
    UNSUPPORTED_CONTENT,
    ENCRYPTED,
}
export enum DocumentLayout {
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
export enum DocumentMode {
    NONE,
    USE_OC,
    USE_THUMBS,
    FULL_SCREEN,
    USE_ATTACHMENTS,
    PRESENTATION,
}
export enum FileExporterFormat {
    UNKNOWN,
    PS,
    PDF,
}
export enum FormFieldButtonType {
    PUSH,
    CHECK,
    RADIO,
}
export enum FormFieldChoiceType {
    COMBO,
    LIST,
}
export enum FormFieldTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
export enum LinkActionType {
    GOTO_DEST,
    GOTO_REMOTE,
    EXTERNAL_URI,
    LAUNCH,
    NAMED,
    LAYERS_STATE,
    RESET_FORM,
}
export enum LinkDestType {
    PAGE,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    NAMED,
    PAGE_LABEL,
    UNKNOWN,
}
export enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
export enum TransitionEffectAlignment {
    HORIZONTAL,
    VERTICAL,
}
export enum TransitionEffectDirection {
    INWARD,
    OUTWARD,
}
export enum TransitionEffectType {
    REPLACE,
    SPLIT,
    BLINDS,
    BOX,
    WIPE,
    DISSOLVE,
    GLITTER,
    FLY,
    PUSH,
    COVER,
    UNCOVER,
    FADE,
}
export enum AnnotationsSaveMask {
    NONE,
    CONTENTS,
    COLOR,
    AREA,
    LABEL,
    OPACITY,
    POPUP_RECT,
    POPUP_IS_OPEN,
    TEXT_IS_OPEN,
    TEXT_ICON,
    ATTACHMENT,
    TEXT_MARKUP_TYPE,
    ALL,
}
export enum DocumentInfoFields {
    TITLE,
    FORMAT,
    AUTHOR,
    SUBJECT,
    KEYWORDS,
    LAYOUT,
    CREATOR,
    PRODUCER,
    CREATION_DATE,
    MOD_DATE,
    LINEARIZED,
    START_MODE,
    UI_HINTS,
    PERMISSIONS,
    N_PAGES,
    SECURITY,
    PAPER_SIZE,
    LICENSE,
    CONTAINS_JS,
}
export enum DocumentLoadFlags {
    NONE,
    NO_CACHE,
}
export enum DocumentPermissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    FULL,
}
export enum DocumentUIHints {
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
export enum FileExporterCapabilities {
    PAGE_SET,
    COPIES,
    COLLATE,
    REVERSE,
    SCALE,
    GENERATE_PDF,
    GENERATE_PS,
    PREVIEW,
    NUMBER_UP,
}
export enum FindOptions {
    DEFAULT,
    CASE_SENSITIVE,
    WHOLE_WORDS_ONLY,
}
export const MAJOR_VERSION: number
export const MINOR_VERSION: number
export function backendsManagerGetDocument(mimeType: string): Document
export function backendsManagerGetDocumentModuleName(document: Document): string
export function documentErrorQuark(): GLib.Quark
export function fileCompress(uri: string, type: CompressionType): string
export function fileCopyMetadata(from: string, to: string): boolean
export function fileGetMimeType(uri: string, fast: boolean): string
export function fileIsTemp(file: Gio.File): boolean
export function fileUncompress(uri: string, type: CompressionType): string
export function getLocaleDir(): string
export function init(): boolean
export function mkdtemp(tmpl: string): string
export function mkstemp(tmpl: string, fileName: string): number
export function mkstempFile(tmpl: string): Gio.File
export function rectCmp(a: Rectangle, b: Rectangle): number
export function shutdown(): void
export function tmpFileUnlink(file: Gio.File): void
export function tmpFilenameUnlink(filename: string): void
export function tmpUriUnlink(uri: string): void
export function xferUriSimple(from: string, to: string): boolean
export class AnnotationMarkup {
    /* Properties of EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Methods of EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    static name: string
}
export class AsyncRenderer {
    /* Methods of EvinceDocument.AsyncRenderer */
    renderPixbuf(page: number, scale: number, rotation: number): void
    /* Virtual methods of EvinceDocument.AsyncRenderer */
    vfuncRenderFinished?(pixbuf: GdkPixbuf.Pixbuf): void
    vfuncRenderPixbuf?(page: number, scale: number, rotation: number): void
    /* Signals of EvinceDocument.AsyncRenderer */
    connect(sigName: "render-finished", callback: (($obj: AsyncRenderer, object: GdkPixbuf.Pixbuf) => void)): number
    connect_after(sigName: "render-finished", callback: (($obj: AsyncRenderer, object: GdkPixbuf.Pixbuf) => void)): number
    emit(sigName: "render-finished", object: GdkPixbuf.Pixbuf): void
    on(sigName: "render-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "render-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "render-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DocumentAnnotations {
    /* Methods of EvinceDocument.DocumentAnnotations */
    addAnnotation(annot: Annotation, rect: Rectangle): void
    canAddAnnotation(): boolean
    canRemoveAnnotation(): boolean
    documentIsModified(): boolean
    getAnnotations(page: Page): MappingList
    overMarkup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    removeAnnotation(annot: Annotation): void
    saveAnnotation(annot: Annotation, mask: AnnotationsSaveMask): void
    /* Virtual methods of EvinceDocument.DocumentAnnotations */
    vfuncAddAnnotation?(annot: Annotation, rect: Rectangle): void
    vfuncDocumentIsModified?(): boolean
    vfuncGetAnnotations?(page: Page): MappingList
    vfuncOverMarkup?(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    vfuncRemoveAnnotation?(annot: Annotation): void
    vfuncSaveAnnotation?(annot: Annotation, mask: AnnotationsSaveMask): void
    static name: string
}
export class DocumentAttachments {
    /* Methods of EvinceDocument.DocumentAttachments */
    getAttachments(): Attachment[]
    hasAttachments(): boolean
    /* Virtual methods of EvinceDocument.DocumentAttachments */
    vfuncGetAttachments?(): Attachment[]
    vfuncHasAttachments?(): boolean
    static name: string
}
export class DocumentFind {
    /* Methods of EvinceDocument.DocumentFind */
    findText(page: Page, text: string, caseSensitive: boolean): Rectangle[]
    findTextWithOptions(page: Page, text: string, options: FindOptions): Rectangle[]
    getSupportedOptions(): FindOptions
    /* Virtual methods of EvinceDocument.DocumentFind */
    vfuncFindText?(page: Page, text: string, caseSensitive: boolean): Rectangle[]
    vfuncFindTextWithOptions?(page: Page, text: string, options: FindOptions): Rectangle[]
    vfuncGetSupportedOptions?(): FindOptions
    static name: string
}
export class DocumentFonts {
    /* Methods of EvinceDocument.DocumentFonts */
    fillModel(model: Gtk.TreeModel): void
    getFontsSummary(): string
    getProgress(): number
    scan(nPages: number): boolean
    /* Virtual methods of EvinceDocument.DocumentFonts */
    vfuncFillModel?(model: Gtk.TreeModel): void
    vfuncGetFontsSummary?(): string
    vfuncGetProgress?(): number
    vfuncScan?(nPages: number): boolean
    static name: string
}
export class DocumentForms {
    /* Methods of EvinceDocument.DocumentForms */
    documentIsModified(): boolean
    formFieldButtonGetState(field: FormField): boolean
    formFieldButtonSetState(field: FormField, state: boolean): void
    formFieldChoiceGetItem(field: FormField, index: number): string
    formFieldChoiceGetNItems(field: FormField): number
    formFieldChoiceGetText(field: FormField): string
    formFieldChoiceIsItemSelected(field: FormField, index: number): boolean
    formFieldChoiceSelectItem(field: FormField, index: number): void
    formFieldChoiceSetText(field: FormField, text: string): void
    formFieldChoiceToggleItem(field: FormField, index: number): void
    formFieldChoiceUnselectAll(field: FormField): void
    formFieldTextGetText(field: FormField): string
    formFieldTextSetText(field: FormField, text: string): void
    getFormFields(page: Page): MappingList
    resetForm(action: LinkAction): void
    /* Virtual methods of EvinceDocument.DocumentForms */
    vfuncDocumentIsModified?(): boolean
    vfuncFormFieldButtonGetState?(field: FormField): boolean
    vfuncFormFieldButtonSetState?(field: FormField, state: boolean): void
    vfuncFormFieldChoiceGetItem?(field: FormField, index: number): string
    vfuncFormFieldChoiceGetNItems?(field: FormField): number
    vfuncFormFieldChoiceGetText?(field: FormField): string
    vfuncFormFieldChoiceIsItemSelected?(field: FormField, index: number): boolean
    vfuncFormFieldChoiceSelectItem?(field: FormField, index: number): void
    vfuncFormFieldChoiceSetText?(field: FormField, text: string): void
    vfuncFormFieldChoiceToggleItem?(field: FormField, index: number): void
    vfuncFormFieldChoiceUnselectAll?(field: FormField): void
    vfuncFormFieldTextGetText?(field: FormField): string
    vfuncFormFieldTextSetText?(field: FormField, text: string): void
    vfuncGetFormFields?(page: Page): MappingList
    vfuncResetForm?(action: LinkAction): void
    static name: string
}
export class DocumentImages {
    /* Methods of EvinceDocument.DocumentImages */
    getImage(image: Image): GdkPixbuf.Pixbuf
    getImageMapping(page: Page): MappingList
    /* Virtual methods of EvinceDocument.DocumentImages */
    vfuncGetImage?(image: Image): GdkPixbuf.Pixbuf
    vfuncGetImageMapping?(page: Page): MappingList
    static name: string
}
export class DocumentLayers {
    /* Methods of EvinceDocument.DocumentLayers */
    getLayers(): Gtk.TreeModel
    hasLayers(): boolean
    hideLayer(layer: Layer): void
    layerIsVisible(layer: Layer): boolean
    showLayer(layer: Layer): void
    /* Virtual methods of EvinceDocument.DocumentLayers */
    vfuncGetLayers?(): Gtk.TreeModel
    vfuncHasLayers?(): boolean
    vfuncHideLayer?(layer: Layer): void
    vfuncLayerIsVisible?(layer: Layer): boolean
    vfuncShowLayer?(layer: Layer): void
    static name: string
}
export class DocumentLinks {
    /* Methods of EvinceDocument.DocumentLinks */
    findLinkDest(linkName: string): LinkDest
    findLinkPage(linkName: string): number
    getDestPage(dest: LinkDest): number
    getDestPageLabel(dest: LinkDest): string
    getLinkPage(link: Link): number
    getLinkPageLabel(link: Link): string
    getLinks(page: Page): MappingList
    getLinksModel(): Gtk.TreeModel
    hasDocumentLinks(): boolean
    /* Virtual methods of EvinceDocument.DocumentLinks */
    vfuncFindLinkDest?(linkName: string): LinkDest
    vfuncFindLinkPage?(linkName: string): number
    vfuncGetLinks?(page: Page): MappingList
    vfuncGetLinksModel?(): Gtk.TreeModel
    vfuncHasDocumentLinks?(): boolean
    static name: string
}
export class DocumentMedia {
    /* Methods of EvinceDocument.DocumentMedia */
    getMediaMapping(page: Page): MappingList
    /* Virtual methods of EvinceDocument.DocumentMedia */
    vfuncGetMediaMapping?(page: Page): MappingList
    static name: string
}
export class DocumentPrint {
    /* Methods of EvinceDocument.DocumentPrint */
    printPage(page: Page, cr: cairo.Context): void
    /* Virtual methods of EvinceDocument.DocumentPrint */
    vfuncPrintPage?(page: Page, cr: cairo.Context): void
    static name: string
}
export class DocumentSecurity {
    /* Methods of EvinceDocument.DocumentSecurity */
    hasDocumentSecurity(): boolean
    setPassword(password: string): void
    /* Virtual methods of EvinceDocument.DocumentSecurity */
    vfuncHasDocumentSecurity?(): boolean
    vfuncSetPassword?(password: string): void
    static name: string
}
export class DocumentText {
    /* Methods of EvinceDocument.DocumentText */
    getText(page: Page): string
    getTextAttrs(page: Page): Pango.AttrList
    getTextLayout(page: Page, areas: Rectangle, nAreas: number): boolean
    getTextMapping(page: Page): cairo.Region
    /* Virtual methods of EvinceDocument.DocumentText */
    vfuncGetText?(page: Page): string
    vfuncGetTextAttrs?(page: Page): Pango.AttrList
    vfuncGetTextLayout?(page: Page, areas: Rectangle, nAreas: number): boolean
    vfuncGetTextMapping?(page: Page): cairo.Region
    static name: string
}
export class DocumentTransition {
    /* Methods of EvinceDocument.DocumentTransition */
    getEffect(page: number): TransitionEffect
    getPageDuration(page: number): number
    /* Virtual methods of EvinceDocument.DocumentTransition */
    vfuncGetEffect?(page: number): TransitionEffect
    vfuncGetPageDuration?(page: number): number
    static name: string
}
export class FileExporter {
    /* Methods of EvinceDocument.FileExporter */
    begin(fc: FileExporterContext): void
    beginPage(): void
    doPage(rc: RenderContext): void
    end(): void
    endPage(): void
    getCapabilities(): FileExporterCapabilities
    /* Virtual methods of EvinceDocument.FileExporter */
    vfuncBegin?(fc: FileExporterContext): void
    vfuncBeginPage?(): void
    vfuncDoPage?(rc: RenderContext): void
    vfuncEnd?(): void
    vfuncEndPage?(): void
    vfuncGetCapabilities?(): FileExporterCapabilities
    static name: string
}
export class Selection {
    /* Methods of EvinceDocument.Selection */
    getSelectedText(page: Page, style: SelectionStyle, points: Rectangle): string
    getSelectionRegion(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    renderSelection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: any, base: any): void
    /* Virtual methods of EvinceDocument.Selection */
    vfuncGetSelectedText?(page: Page, style: SelectionStyle, points: Rectangle): string
    vfuncGetSelectionRegion?(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    vfuncRenderSelection?(rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: any, base: any): void
    static name: string
}
export interface Annotation_ConstructProps extends GObject.Object_ConstructProps {
    area?: Rectangle
    color?: object
    contents?: string
    modified?: string
    name?: string
    page?: Page
    rgba?: Gdk.RGBA
}
export class Annotation {
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ any
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: any): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    connect(sigName: "notify", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Annotation_ConstructProps)
    _init (config?: Annotation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotationAttachment_ConstructProps extends Annotation_ConstructProps {
    attachment?: Attachment
}
export class AnnotationAttachment {
    /* Properties of EvinceDocument.AnnotationAttachment */
    attachment: Attachment
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationAttachment */
    getAttachment(): Attachment
    setAttachment(attachment: Attachment): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ any
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: any): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationAttachment_ConstructProps)
    _init (config?: AnnotationAttachment_ConstructProps): void
    static new(page: Page, attachment: Attachment): AnnotationAttachment
    static $gtype: GObject.Type
}
export interface AnnotationText_ConstructProps extends Annotation_ConstructProps {
    icon?: AnnotationTextIcon
    isOpen?: boolean
}
export class AnnotationText {
    /* Properties of EvinceDocument.AnnotationText */
    icon: AnnotationTextIcon
    isOpen: boolean
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationText */
    getIcon(): AnnotationTextIcon
    getIsOpen(): boolean
    setIcon(icon: AnnotationTextIcon): boolean
    setIsOpen(isOpen: boolean): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ any
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: any): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationText_ConstructProps)
    _init (config?: AnnotationText_ConstructProps): void
    static new(page: Page): AnnotationText
    static $gtype: GObject.Type
}
export interface AnnotationTextMarkup_ConstructProps extends Annotation_ConstructProps {
    type?: AnnotationTextMarkupType
}
export class AnnotationTextMarkup {
    /* Properties of EvinceDocument.AnnotationTextMarkup */
    type: AnnotationTextMarkupType
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationTextMarkup */
    getMarkupType(): AnnotationTextMarkupType
    setMarkupType(markupType: AnnotationTextMarkupType): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ any
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: any): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationTextMarkup_ConstructProps)
    _init (config?: AnnotationTextMarkup_ConstructProps): void
    static highlightNew(page: Page): AnnotationTextMarkup
    static squigglyNew(page: Page): AnnotationTextMarkup
    static strikeOutNew(page: Page): AnnotationTextMarkup
    static underlineNew(page: Page): AnnotationTextMarkup
    static $gtype: GObject.Type
}
export interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
    ctime?: number
    data?: object
    description?: string
    mtime?: number
    name?: string
    size?: number
}
export class Attachment {
    /* Properties of EvinceDocument.Attachment */
    /* Fields of EvinceDocument.Attachment */
    baseInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Attachment */
    getCreationDate(): GLib.Time
    getDescription(): string
    getMimeType(): string
    getModificationDate(): GLib.Time
    getName(): string
    open(screen: any, timestamp: number): boolean
    save(file: Gio.File): boolean
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
    connect(sigName: "notify", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Attachment_ConstructProps)
    _init (config?: Attachment_ConstructProps): void
    static new(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data?: object | null): Attachment
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    modified?: boolean
}
export class Document {
    /* Properties of EvinceDocument.Document */
    modified: boolean
    /* Fields of EvinceDocument.Document */
    base: GObject.Object
    priv: DocumentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Document */
    checkDimensions(): boolean
    findPageByLabel(pageLabel: string, pageIndex: number): boolean
    getBackendInfo(info: DocumentBackendInfo): boolean
    getInfo(): DocumentInfo
    getMaxLabelLen(): number
    getMaxPageSize(width: number, height: number): void
    getMinPageSize(width: number, height: number): void
    getModified(): boolean
    getNPages(): number
    getPage(index: number): Page
    getPageLabel(pageIndex: number): string
    getPageSize(pageIndex: number): [ /* width */ number | null, /* height */ number | null ]
    getSize(): number
    getThumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    getThumbnailSurface(rc: RenderContext): cairo.Surface
    getTitle(): string
    getUri(): string
    hasSynctex(): boolean
    hasTextPageLabels(): boolean
    isPageSizeUniform(): boolean
    load(uri: string): boolean
    loadFull(uri: string, flags: DocumentLoadFlags): boolean
    loadGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    loadStream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    render(rc: RenderContext): cairo.Surface
    save(uri: string): boolean
    setModified(modified: boolean): void
    synctexBackwardSearch(pageIndex: number, x: number, y: number): SourceLink
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
    /* Virtual methods of EvinceDocument.Document */
    vfuncGetBackendInfo?(info: DocumentBackendInfo): boolean
    vfuncGetInfo?(): DocumentInfo
    vfuncGetNPages?(): number
    vfuncGetPage?(index: number): Page
    vfuncGetPageLabel?(page: Page): string
    vfuncGetPageSize?(page: Page): [ /* width */ number | null, /* height */ number | null ]
    vfuncGetThumbnail?(rc: RenderContext): GdkPixbuf.Pixbuf
    vfuncGetThumbnailSurface?(rc: RenderContext): cairo.Surface
    vfuncLoad?(uri: string): boolean
    vfuncLoadGfile?(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    vfuncLoadStream?(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    vfuncRender?(rc: RenderContext): cairo.Surface
    vfuncSave?(uri: string): boolean
    vfuncSupportSynctex?(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    static docMutexLock(): void
    static docMutexTrylock(): boolean
    static docMutexUnlock(): void
    static factoryAddFilters(chooser: Gtk.Widget, document: Document): void
    static factoryGetDocument(uri: string): Document
    static factoryGetDocumentForGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factoryGetDocumentForStream(stream: Gio.InputStream, mimeType: string | null, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factoryGetDocumentFull(uri: string, flags: DocumentLoadFlags): Document
    static fcMutexLock(): void
    static fcMutexTrylock(): boolean
    static fcMutexUnlock(): void
    static miscFormatDate(utime: GLib.Time): string
    static miscFormatDatetime(dt: GLib.DateTime): string
    static miscGetLoadingThumbnail(width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscGetPageBorderSize(pageWidth: number, pageHeight: number, border: Gtk.Border): void
    static miscGetPointerPosition(widget: Gtk.Widget): [ /* x */ number, /* y */ number ]
    static miscGetScreenDpi(screen: any): number
    static miscGetThumbnailFrame(width: number, height: number, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static miscGetWidgetDpi(widget: Gtk.Widget): number
    static miscInvertPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static miscInvertSurface(surface: cairo.Surface): void
    static miscPaintOnePage(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, invertedColors: boolean): void
    static miscPixbufFromSurface(surface: cairo.Surface): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnail(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnailSurface(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): cairo.Surface
    static miscRenderThumbnailSurfaceWithFrame(widget: Gtk.Widget, sourceSurface: cairo.Surface, width: number, height: number): cairo.Surface
    static miscRenderThumbnailWithFrame(widget: Gtk.Widget, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static miscSurfaceFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static miscSurfaceRotateAndScale(surface: cairo.Surface, destWidth: number, destHeight: number, destRotation: number): cairo.Surface
    static $gtype: GObject.Type
}
export interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}
export class FormField {
    /* Fields of EvinceDocument.FormField */
    parent: GObject.Object
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    getAlternateName(): string
    setAlternateName(alternativeText: string): void
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
    connect(sigName: "notify", callback: (($obj: FormField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormField, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FormField_ConstructProps)
    _init (config?: FormField_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FormFieldButton_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldButton {
    /* Fields of EvinceDocument.FormFieldButton */
    parent: FormField
    type: FormFieldButtonType
    state: boolean
    /* Fields of EvinceDocument.FormField */
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    getAlternateName(): string
    setAlternateName(alternativeText: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldButton, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FormFieldButton_ConstructProps)
    _init (config?: FormFieldButton_ConstructProps): void
    static new(id: number, type: FormFieldButtonType): FormFieldButton
    static $gtype: GObject.Type
}
export interface FormFieldChoice_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldChoice {
    /* Fields of EvinceDocument.FormFieldChoice */
    parent: FormField
    type: FormFieldChoiceType
    multiSelect: boolean
    isEditable: boolean
    doSpellCheck: boolean
    commitOnSelChange: boolean
    selectedItems: object[]
    text: string
    /* Fields of EvinceDocument.FormField */
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    getAlternateName(): string
    setAlternateName(alternativeText: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldChoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldChoice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FormFieldChoice_ConstructProps)
    _init (config?: FormFieldChoice_ConstructProps): void
    static new(id: number, type: FormFieldChoiceType): FormFieldChoice
    static $gtype: GObject.Type
}
export interface FormFieldSignature_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldSignature {
    /* Fields of EvinceDocument.FormFieldSignature */
    parent: FormField
    /* Fields of EvinceDocument.FormField */
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    getAlternateName(): string
    setAlternateName(alternativeText: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldSignature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldSignature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FormFieldSignature_ConstructProps)
    _init (config?: FormFieldSignature_ConstructProps): void
    static new(id: number): FormFieldSignature
    static $gtype: GObject.Type
}
export interface FormFieldText_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldText {
    /* Fields of EvinceDocument.FormFieldText */
    parent: FormField
    type: FormFieldTextType
    doSpellCheck: boolean
    doScroll: boolean
    comb: boolean
    isRichText: boolean
    isPassword: boolean
    maxLen: number
    text: string
    /* Fields of EvinceDocument.FormField */
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    getAlternateName(): string
    setAlternateName(alternativeText: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldText, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FormFieldText_ConstructProps)
    _init (config?: FormFieldText_ConstructProps): void
    static new(id: number, type: FormFieldTextType): FormFieldText
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of EvinceDocument.Image */
    baseInstance: GObject.Object
    priv: ImagePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Image */
    getId(): number
    getPage(): number
    getPixbuf(): GdkPixbuf.Pixbuf
    getTmpUri(): string
    saveTmp(pixbuf: GdkPixbuf.Pixbuf): string
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
    static new(page: number, imgId: number): Image
    static newFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Layer {
    /* Fields of EvinceDocument.Layer */
    baseInstance: GObject.Object
    priv: LayerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Layer */
    getRbGroup(): number
    isParent(): boolean
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
    connect(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    static new(isParent: boolean, rbGroup: number): Layer
    static $gtype: GObject.Type
}
export interface Link_ConstructProps extends GObject.Object_ConstructProps {
    action?: LinkAction
    title?: string
}
export class Link {
    /* Properties of EvinceDocument.Link */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Link */
    getAction(): LinkAction
    getTitle(): string
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
    connect(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Link_ConstructProps)
    _init (config?: Link_ConstructProps): void
    static new(title: string, action: LinkAction): Link
    static $gtype: GObject.Type
}
export interface LinkAction_ConstructProps extends GObject.Object_ConstructProps {
    dest?: LinkDest
    excludeResetFields?: boolean
    filename?: string
    hideList?: object
    name?: string
    params?: string
    resetFields?: object
    showList?: object
    toggleList?: object
    type?: LinkActionType
    uri?: string
}
export class LinkAction {
    /* Properties of EvinceDocument.LinkAction */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.LinkAction */
    equal(b: LinkAction): boolean
    getActionType(): LinkActionType
    getDest(): LinkDest
    getExcludeResetFields(): boolean
    getFilename(): string
    getHideList(): Layer[]
    getName(): string
    getParams(): string
    getShowList(): Layer[]
    getToggleList(): Layer[]
    getUri(): string
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
    connect(sigName: "notify", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LinkAction_ConstructProps)
    _init (config?: LinkAction_ConstructProps): void
    static newDest(dest: LinkDest): LinkAction
    static newExternalUri(uri: string): LinkAction
    static newLaunch(filename: string, params: string): LinkAction
    static newLayersState(showList: Layer[], hideList: Layer[], toggleList: Layer[]): LinkAction
    static newNamed(name: string): LinkAction
    static newRemote(dest: LinkDest, filename: string): LinkAction
    static $gtype: GObject.Type
}
export interface LinkDest_ConstructProps extends GObject.Object_ConstructProps {
    bottom?: number
    change?: number
    left?: number
    named?: string
    page?: number
    pageLabel?: string
    right?: number
    top?: number
    type?: LinkDestType
    zoom?: number
}
export class LinkDest {
    /* Properties of EvinceDocument.LinkDest */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.LinkDest */
    equal(b: LinkDest): boolean
    getBottom(): number
    getDestType(): LinkDestType
    getLeft(changeLeft: boolean): number
    getNamedDest(): string
    getPage(): number
    getPageLabel(): string
    getRight(): number
    getTop(changeTop: boolean): number
    getZoom(changeZoom: boolean): number
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
    connect(sigName: "notify", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LinkDest_ConstructProps)
    _init (config?: LinkDest_ConstructProps): void
    static newFit(page: number): LinkDest
    static newFith(page: number, top: number, changeTop: boolean): LinkDest
    static newFitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static newFitv(page: number, left: number, changeLeft: boolean): LinkDest
    static newNamed(namedDest: string): LinkDest
    static newPage(page: number): LinkDest
    static newPageLabel(pageLabel: string): LinkDest
    static newXyz(page: number, left: number, top: number, zoom: number, changeLeft: boolean, changeTop: boolean, changeZoom: boolean): LinkDest
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
export class Media {
    /* Fields of EvinceDocument.Media */
    baseInstance: GObject.Object
    priv: MediaPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.Media */
    getPageIndex(): number
    getShowControls(): boolean
    getUri(): string
    setShowControls(showControls: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static newForUri(page: Page, uri: string): Media
    static $gtype: GObject.Type
}
export interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
export class Page {
    /* Fields of EvinceDocument.Page */
    baseInstance: GObject.Object
    index: number
    backendPage: BackendPage
    backendDestroyFunc: BackendPageDestroyFunc
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    static new(index: number): Page
    static $gtype: GObject.Type
}
export interface RenderContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class RenderContext {
    /* Fields of EvinceDocument.RenderContext */
    parent: GObject.Object
    page: Page
    rotation: number
    scale: number
    targetWidth: number
    targetHeight: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument.RenderContext */
    computeScaledSize(widthPoints: number, heightPoints: number, scaledWidth: number, scaledHeight: number): void
    computeScales(widthPoints: number, heightPoints: number, scaleX: number, scaleY: number): void
    computeTransformedSize(widthPoints: number, heightPoints: number, transformedWidth: number, transformedHeight: number): void
    setPage(page: Page): void
    setRotation(rotation: number): void
    setScale(scale: number): void
    setTargetSize(targetWidth: number, targetHeight: number): void
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
    connect(sigName: "notify", callback: (($obj: RenderContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RenderContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RenderContext_ConstructProps)
    _init (config?: RenderContext_ConstructProps): void
    static new(page: Page, rotation: number, scale: number): RenderContext
    static $gtype: GObject.Type
}
export interface TransitionEffect_ConstructProps extends GObject.Object_ConstructProps {
    alignment?: TransitionEffectAlignment
    angle?: number
    direction?: TransitionEffectDirection
    duration?: number
    rectangular?: boolean
    scale?: number
    type?: TransitionEffectType
}
export class TransitionEffect {
    /* Properties of EvinceDocument.TransitionEffect */
    alignment: TransitionEffectAlignment
    angle: number
    direction: TransitionEffectDirection
    duration: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType
    /* Fields of EvinceDocument.TransitionEffect */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TransitionEffect_ConstructProps)
    _init (config?: TransitionEffect_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AnnotationAttachmentClass {
    static name: string
}
export abstract class AnnotationClass {
    static name: string
}
export abstract class AnnotationMarkupInterface {
    static name: string
}
export abstract class AnnotationTextClass {
    static name: string
}
export abstract class AnnotationTextMarkupClass {
    static name: string
}
export abstract class AsyncRendererInterface {
    /* Fields of EvinceDocument.AsyncRendererInterface */
    baseIface: GObject.TypeInterface
    renderFinished: any
    renderPixbuf: any
    static name: string
}
export abstract class AttachmentClass {
    /* Fields of EvinceDocument.AttachmentClass */
    baseClass: GObject.ObjectClass
    static name: string
}
export abstract class DocumentAnnotationsInterface {
    /* Fields of EvinceDocument.DocumentAnnotationsInterface */
    baseIface: GObject.TypeInterface
    getAnnotations: any
    documentIsModified: any
    addAnnotation: any
    saveAnnotation: any
    removeAnnotation: any
    overMarkup: any
    static name: string
}
export abstract class DocumentAttachmentsInterface {
    /* Fields of EvinceDocument.DocumentAttachmentsInterface */
    baseIface: GObject.TypeInterface
    hasAttachments: any
    getAttachments: any
    static name: string
}
export class DocumentBackendInfo {
    /* Fields of EvinceDocument.DocumentBackendInfo */
    name: string
    version: string
    static name: string
}
export abstract class DocumentClass {
    /* Fields of EvinceDocument.DocumentClass */
    baseClass: GObject.ObjectClass
    load: any
    save: any
    getNPages: any
    getPage: any
    getPageSize: any
    getPageLabel: any
    render: any
    getThumbnail: any
    getInfo: any
    getBackendInfo: any
    supportSynctex: any
    loadStream: any
    loadGfile: any
    getThumbnailSurface: any
    static name: string
}
export abstract class DocumentFindInterface {
    /* Fields of EvinceDocument.DocumentFindInterface */
    baseIface: GObject.TypeInterface
    findText: any
    findTextWithOptions: any
    getSupportedOptions: any
    static name: string
}
export abstract class DocumentFontsInterface {
    /* Fields of EvinceDocument.DocumentFontsInterface */
    baseIface: GObject.TypeInterface
    scan: any
    getProgress: any
    fillModel: any
    getFontsSummary: any
    static name: string
}
export abstract class DocumentFormsInterface {
    /* Fields of EvinceDocument.DocumentFormsInterface */
    baseIface: GObject.TypeInterface
    getFormFields: any
    documentIsModified: any
    formFieldTextGetText: any
    formFieldTextSetText: any
    formFieldButtonGetState: any
    formFieldButtonSetState: any
    formFieldChoiceGetItem: any
    formFieldChoiceGetNItems: any
    formFieldChoiceIsItemSelected: any
    formFieldChoiceSelectItem: any
    formFieldChoiceToggleItem: any
    formFieldChoiceUnselectAll: any
    formFieldChoiceSetText: any
    formFieldChoiceGetText: any
    resetForm: any
    static name: string
}
export abstract class DocumentImagesInterface {
    /* Fields of EvinceDocument.DocumentImagesInterface */
    baseIface: GObject.TypeInterface
    getImageMapping: any
    getImage: any
    static name: string
}
export class DocumentInfo {
    /* Fields of EvinceDocument.DocumentInfo */
    title: string
    format: string
    author: string
    subject: string
    keywords: string
    creator: string
    producer: string
    linearized: string
    security: string
    creationDate: GLib.Time
    modifiedDate: GLib.Time
    layout: DocumentLayout
    mode: DocumentMode
    uiHints: number
    permissions: number
    nPages: number
    paperHeight: number
    paperWidth: number
    license: DocumentLicense
    containsJs: DocumentContainsJS
    fieldsMask: number
    /* Methods of EvinceDocument.DocumentInfo */
    copy(): DocumentInfo
    free(): void
    static name: string
}
export abstract class DocumentLayersInterface {
    /* Fields of EvinceDocument.DocumentLayersInterface */
    baseIface: GObject.TypeInterface
    hasLayers: any
    getLayers: any
    showLayer: any
    hideLayer: any
    layerIsVisible: any
    static name: string
}
export class DocumentLicense {
    /* Fields of EvinceDocument.DocumentLicense */
    text: string
    uri: string
    webStatement: string
    /* Methods of EvinceDocument.DocumentLicense */
    copy(): DocumentLicense
    free(): void
    getText(): string
    getUri(): string
    getWebStatement(): string
    static name: string
    static new(): DocumentLicense
    constructor()
    static new(): DocumentLicense
}
export abstract class DocumentLinksInterface {
    /* Fields of EvinceDocument.DocumentLinksInterface */
    baseIface: GObject.TypeInterface
    hasDocumentLinks: any
    getLinksModel: any
    getLinks: any
    findLinkDest: any
    findLinkPage: any
    static name: string
}
export abstract class DocumentMediaInterface {
    /* Fields of EvinceDocument.DocumentMediaInterface */
    baseIface: GObject.TypeInterface
    getMediaMapping: any
    static name: string
}
export abstract class DocumentPrintInterface {
    /* Fields of EvinceDocument.DocumentPrintInterface */
    baseIface: GObject.TypeInterface
    printPage: any
    static name: string
}
export class DocumentPrivate {
    static name: string
}
export abstract class DocumentSecurityInterface {
    /* Fields of EvinceDocument.DocumentSecurityInterface */
    baseIface: GObject.TypeInterface
    hasDocumentSecurity: any
    setPassword: any
    static name: string
}
export abstract class DocumentTextInterface {
    /* Fields of EvinceDocument.DocumentTextInterface */
    baseIface: GObject.TypeInterface
    getTextMapping: any
    getText: any
    getTextLayout: any
    getTextAttrs: any
    static name: string
}
export abstract class DocumentTransitionInterface {
    /* Fields of EvinceDocument.DocumentTransitionInterface */
    baseIface: GObject.TypeInterface
    getPageDuration: any
    getEffect: any
    static name: string
}
export class FileExporterContext {
    /* Fields of EvinceDocument.FileExporterContext */
    format: FileExporterFormat
    filename: string
    firstPage: number
    lastPage: number
    paperWidth: number
    paperHeight: number
    duplex: boolean
    pagesPerSheet: number
    static name: string
}
export abstract class FileExporterInterface {
    /* Fields of EvinceDocument.FileExporterInterface */
    baseIface: GObject.TypeInterface
    begin: any
    beginPage: any
    doPage: any
    endPage: any
    end: any
    getCapabilities: any
    static name: string
}
export abstract class FormFieldButtonClass {
    /* Fields of EvinceDocument.FormFieldButtonClass */
    parentClass: FormFieldClass
    static name: string
}
export abstract class FormFieldChoiceClass {
    /* Fields of EvinceDocument.FormFieldChoiceClass */
    parentClass: FormFieldClass
    static name: string
}
export abstract class FormFieldClass {
    /* Fields of EvinceDocument.FormFieldClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FormFieldSignatureClass {
    /* Fields of EvinceDocument.FormFieldSignatureClass */
    parentClass: FormFieldClass
    static name: string
}
export abstract class FormFieldTextClass {
    /* Fields of EvinceDocument.FormFieldTextClass */
    parentClass: FormFieldClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of EvinceDocument.ImageClass */
    baseClass: GObject.ObjectClass
    static name: string
}
export class ImagePrivate {
    static name: string
}
export abstract class LayerClass {
    /* Fields of EvinceDocument.LayerClass */
    baseClass: GObject.ObjectClass
    static name: string
}
export class LayerPrivate {
    static name: string
}
export abstract class LinkActionClass {
    static name: string
}
export class LinkActionPrivate {
    static name: string
}
export abstract class LinkClass {
    static name: string
}
export abstract class LinkDestClass {
    static name: string
}
export class LinkDestPrivate {
    static name: string
}
export class LinkPrivate {
    static name: string
}
export class Mapping {
    /* Fields of EvinceDocument.Mapping */
    area: Rectangle
    data: object
    static name: string
}
export class MappingList {
    /* Methods of EvinceDocument.MappingList */
    find(data?: object | null): Mapping
    findCustom(data: object | null, func: GLib.CompareFunc): Mapping
    get(x: number, y: number): Mapping
    getData(x: number, y: number): object | null
    getList(): Mapping[]
    getPage(): number
    length(): number
    nth(n: number): Mapping
    ref(): MappingList
    remove(mapping: Mapping): void
    unref(): void
    static name: string
    static new(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify): MappingList
    constructor(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify)
    static new(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify): MappingList
}
export abstract class MediaClass {
    /* Fields of EvinceDocument.MediaClass */
    baseClass: GObject.ObjectClass
    static name: string
}
export class MediaPrivate {
    static name: string
}
export abstract class PageClass {
    /* Fields of EvinceDocument.PageClass */
    baseClass: GObject.ObjectClass
    static name: string
}
export class Point {
    /* Fields of EvinceDocument.Point */
    x: number
    y: number
    static name: string
}
export class Rectangle {
    /* Fields of EvinceDocument.Rectangle */
    x1: number
    y1: number
    x2: number
    y2: number
    /* Methods of EvinceDocument.Rectangle */
    copy(): Rectangle
    free(): void
    static name: string
    static new(): Rectangle
    constructor()
    static new(): Rectangle
}
export abstract class RenderContextClass {
    /* Fields of EvinceDocument.RenderContextClass */
    klass: GObject.ObjectClass
    static name: string
}
export abstract class SelectionInterface {
    /* Fields of EvinceDocument.SelectionInterface */
    baseIface: GObject.TypeInterface
    renderSelection: any
    getSelectedText: any
    getSelectionRegion: any
    static name: string
}
export class SourceLink {
    /* Fields of EvinceDocument.SourceLink */
    filename: string
    line: number
    col: number
    /* Methods of EvinceDocument.SourceLink */
    copy(): SourceLink
    free(): void
    static name: string
    static new(filename: string, line: number, col: number): SourceLink
    constructor(filename: string, line: number, col: number)
    static new(filename: string, line: number, col: number): SourceLink
}
export abstract class TransitionEffectClass {
    /* Fields of EvinceDocument.TransitionEffectClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class TypeInfo {
    /* Fields of EvinceDocument.TypeInfo */
    desc: string
    mimeTypes: string
    static name: string
}
type BackendPage = object
type BackendPageDestroyFunc = GLib.DestroyNotify
}