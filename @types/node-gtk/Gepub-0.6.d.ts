/**
 * Gepub-0.6
 */

/// <reference types="node" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="WebKit2-4.0.d.ts" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="JavaScriptCore-4.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace Gepub {

export enum TextChunkType {
    EPUBTEXTHEADER,
    EPUBTEXTBOLD,
    EPUBTEXTITALIC,
    EPUBTEXTNORMAL,
}
export const META_AUTHOR: string
export const META_DESC: string
export const META_ID: string
export const META_LANG: string
export const META_TITLE: string
export function utilsGetProp(node: libxml2.Node, prop: string): string
export function utilsGetTextElements(node: libxml2.Node): TextChunk[]
export function utilsReplaceResources(content: any, path: string): any
export interface Archive_ConstructProps extends GObject.Object_ConstructProps {
}
export class Archive {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gepub.Archive */
    getRootFile(): string
    listFiles(): string[]
    readEntry(path: string): any
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
    connect(sigName: "notify", callback: (($obj: Archive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Archive, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Archive_ConstructProps)
    _init (config?: Archive_ConstructProps): void
    static new(path: string): Archive
    static $gtype: GObject.Type
}
export interface Doc_ConstructProps extends GObject.Object_ConstructProps {
    chapter?: number
    path?: string
}
export class Doc {
    /* Properties of Gepub.Doc */
    chapter: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gepub.Doc */
    getChapter(): number
    getContent(): any
    getCover(): string
    getCurrent(): any
    getCurrentId(): string
    getCurrentMime(): string
    getCurrentPath(): string
    getCurrentWithEpubUris(): any
    getMetadata(mdata: string): string
    getNChapters(): number
    getResource(path: string): any
    getResourceById(id: string): any
    getResourceMime(path: string): string
    getResourceMimeById(id: string): string
    getResourcePath(id: string): string
    getResources(): GLib.HashTable
    getText(): TextChunk[]
    getTextById(id: string): TextChunk[]
    goNext(): boolean
    goPrev(): boolean
    setChapter(index: number): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chapter", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chapter", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Doc_ConstructProps)
    _init (config?: Doc_ConstructProps): void
    static new(path: string): Doc
    static $gtype: GObject.Type
}
export interface TextChunk_ConstructProps extends GObject.Object_ConstructProps {
}
export class TextChunk {
    /* Fields of Gepub.TextChunk */
    parent: GObject.Object
    type: TextChunkType
    text: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gepub.TextChunk */
    typeStr(): string
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
    connect(sigName: "notify", callback: (($obj: TextChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextChunk, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TextChunk_ConstructProps)
    _init (config?: TextChunk_ConstructProps): void
    static new(type: TextChunkType, text: string): TextChunk
    static $gtype: GObject.Type
}
export class Widget {
    /* Properties of Gepub.Widget */
    chapter: number
    chapterPos: number
    doc: Doc
    readonly nchapters: number
    paginate: boolean
    /* Properties of WebKit2.WebView */
    editable: boolean
    readonly estimatedLoadProgress: number
    readonly favicon: object
    readonly isLoading: boolean
    isMuted: boolean
    readonly isPlayingAudio: boolean
    readonly pageId: number
    settings: WebKit2.Settings
    readonly title: string
    readonly uri: string
    zoomLevel: number
    /* Fields of WebKit2.WebView */
    parent: WebKit2.WebViewBase
    /* Fields of WebKit2.WebViewBase */
    parentInstance: any
    /* Methods of Gepub.Widget */
    chapterNext(): boolean
    chapterPrev(): boolean
    getChapter(): number
    getChapterLength(): number
    getDoc(): Doc
    getFontfamily(): string
    getFontsize(): number
    getLineheight(): number
    getMargin(): number
    getNChapters(): number
    getPaginate(): boolean
    getPos(): number
    pageNext(): boolean
    pagePrev(): boolean
    setChapter(index: number): void
    setDoc(doc?: Doc | null): void
    setFontfamily(family: string): void
    setFontsize(size: number): void
    setLineheight(size: number): void
    setMargin(margin: number): void
    setPaginate(p: boolean): void
    setPos(index: number): void
    /* Methods of WebKit2.WebView */
    canExecuteEditingCommand(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean
    canGoBack(): boolean
    canGoForward(): boolean
    canShowMimeType(mimeType: string): boolean
    downloadUri(uri: string): WebKit2.Download
    executeEditingCommand(command: string): void
    executeEditingCommandWithArgument(command: string, argument: string): void
    getAutomationPresentationType(): WebKit2.AutomationBrowsingContextPresentation
    getBackForwardList(): WebKit2.BackForwardList
    getBackgroundColor(): /* rgba */ Gdk.RGBA
    getContext(): WebKit2.WebContext
    getCustomCharset(): string
    getEditorState(): WebKit2.EditorState
    getEstimatedLoadProgress(): number
    getFavicon(): cairo.Surface
    getFindController(): WebKit2.FindController
    getInputMethodContext(): WebKit2.InputMethodContext | null
    getInspector(): WebKit2.WebInspector
    getIsMuted(): boolean
    getMainResource(): WebKit2.WebResource
    getPageId(): number
    getSessionState(): WebKit2.WebViewSessionState
    getSettings(): WebKit2.Settings
    getSnapshot(region: WebKit2.SnapshotRegion, options: WebKit2.SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapshotFinish(result: Gio.AsyncResult): cairo.Surface
    getTitle(): string
    getTlsInfo(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getUri(): string
    getUserContentManager(): WebKit2.UserContentManager
    getWebsiteDataManager(): WebKit2.WebsiteDataManager
    getWebsitePolicies(): WebKit2.WebsitePolicies
    getWindowProperties(): WebKit2.WindowProperties
    getZoomLevel(): number
    goBack(): void
    goForward(): void
    goToBackForwardListItem(listItem: WebKit2.BackForwardListItem): void
    isControlledByAutomation(): boolean
    isEditable(): boolean
    isEphemeral(): boolean
    loadAlternateHtml(content: string, contentUri: string, baseUri?: string | null): void
    loadBytes(bytes: any, mimeType?: string | null, encoding?: string | null, baseUri?: string | null): void
    loadHtml(content: string, baseUri?: string | null): void
    loadPlainText(plainText: string): void
    loadRequest(request: WebKit2.URIRequest): void
    loadUri(uri: string): void
    reload(): void
    reloadBypassCache(): void
    restoreSessionState(state: WebKit2.WebViewSessionState): void
    runJavascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFinish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    runJavascriptFromGresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFromGresourceFinish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    runJavascriptInWorld(script: string, worldName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptInWorldFinish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    save(saveMode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): Gio.InputStream
    saveToFile(file: Gio.File, saveMode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveToFileFinish(result: Gio.AsyncResult): boolean
    sendMessageToPage(message: WebKit2.UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendMessageToPageFinish(result: Gio.AsyncResult): WebKit2.UserMessage
    setBackgroundColor(rgba: Gdk.RGBA): void
    setCustomCharset(charset?: string | null): void
    setEditable(editable: boolean): void
    setInputMethodContext(context?: WebKit2.InputMethodContext | null): void
    setIsMuted(muted: boolean): void
    setSettings(settings: WebKit2.Settings): void
    setZoomLevel(zoomLevel: number): void
    stopLoading(): void
    tryClose(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of WebKit2.WebView */
    vfuncAuthenticate?(request: WebKit2.AuthenticationRequest): boolean
    vfuncClose?(): void
    vfuncContextMenu?(contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult): boolean
    vfuncContextMenuDismissed?(): void
    vfuncDecidePolicy?(decision: WebKit2.PolicyDecision, type: WebKit2.PolicyDecisionType): boolean
    vfuncEnterFullscreen?(): boolean
    vfuncInsecureContentDetected?(event: WebKit2.InsecureContentEvent): void
    vfuncLeaveFullscreen?(): boolean
    vfuncLoadChanged?(loadEvent: WebKit2.LoadEvent): void
    vfuncLoadFailed?(loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error): boolean
    vfuncLoadFailedWithTlsErrors?(failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfuncMouseTargetChanged?(hitTestResult: WebKit2.HitTestResult, modifiers: number): void
    vfuncPermissionRequest?(permissionRequest: WebKit2.PermissionRequest): boolean
    vfuncPrint?(printOperation: WebKit2.PrintOperation): boolean
    vfuncReadyToShow?(): void
    vfuncResourceLoadStarted?(resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    vfuncRunAsModal?(): void
    vfuncRunColorChooser?(request: WebKit2.ColorChooserRequest): boolean
    vfuncRunFileChooser?(request: WebKit2.FileChooserRequest): boolean
    vfuncScriptDialog?(dialog: WebKit2.ScriptDialog): boolean
    vfuncShowNotification?(notification: WebKit2.Notification): boolean
    vfuncShowOptionMenu?(rectangle: Gdk.Rectangle, menu: WebKit2.OptionMenu): boolean
    vfuncSubmitForm?(request: WebKit2.FormSubmissionRequest): void
    vfuncUserMessageReceived?(message: WebKit2.UserMessage): boolean
    vfuncWebProcessCrashed?(): boolean
    vfuncWebProcessTerminated?(reason: WebKit2.WebProcessTerminationReason): void
    /* Signals of WebKit2.WebView */
    connect(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    emit(sigName: "authenticate", request: WebKit2.AuthenticationRequest): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "close", callback: (($obj: Widget) => void)): number
    emit(sigName: "close"): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "context-menu", callback: (($obj: Widget, contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult) => boolean)): number
    connect_after(sigName: "context-menu", callback: (($obj: Widget, contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult) => boolean)): number
    emit(sigName: "context-menu", contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult): void
    on(sigName: "context-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    emit(sigName: "context-menu-dismissed"): void
    on(sigName: "context-menu-dismissed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-menu-dismissed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-menu-dismissed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: (($obj: Widget, navigationAction: WebKit2.NavigationAction) => Gtk.Widget)): number
    connect_after(sigName: "create", callback: (($obj: Widget, navigationAction: WebKit2.NavigationAction) => Gtk.Widget)): number
    emit(sigName: "create", navigationAction: WebKit2.NavigationAction): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decisionType: WebKit2.PolicyDecisionType) => boolean)): number
    connect_after(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decisionType: WebKit2.PolicyDecisionType) => boolean)): number
    emit(sigName: "decide-policy", decision: WebKit2.PolicyDecision, decisionType: WebKit2.PolicyDecisionType): void
    on(sigName: "decide-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "decide-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "decide-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "enter-fullscreen"): void
    on(sigName: "enter-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    connect_after(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    emit(sigName: "insecure-content-detected", event: WebKit2.InsecureContentEvent): void
    on(sigName: "insecure-content-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insecure-content-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insecure-content-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "leave-fullscreen"): void
    on(sigName: "leave-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-changed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent) => void)): number
    connect_after(sigName: "load-changed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent) => void)): number
    emit(sigName: "load-changed", loadEvent: WebKit2.LoadEvent): void
    on(sigName: "load-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-failed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error) => boolean)): number
    connect_after(sigName: "load-failed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error) => boolean)): number
    emit(sigName: "load-failed", loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error): void
    on(sigName: "load-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "load-failed-with-tls-errors", failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    on(sigName: "load-failed-with-tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-failed-with-tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-failed-with-tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mouse-target-changed", callback: (($obj: Widget, hitTestResult: WebKit2.HitTestResult, modifiers: number) => void)): number
    connect_after(sigName: "mouse-target-changed", callback: (($obj: Widget, hitTestResult: WebKit2.HitTestResult, modifiers: number) => void)): number
    emit(sigName: "mouse-target-changed", hitTestResult: WebKit2.HitTestResult, modifiers: number): void
    on(sigName: "mouse-target-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mouse-target-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mouse-target-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    connect_after(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    emit(sigName: "permission-request", request: WebKit2.PermissionRequest): void
    on(sigName: "permission-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "permission-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "permission-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "print", callback: (($obj: Widget, printOperation: WebKit2.PrintOperation) => boolean)): number
    connect_after(sigName: "print", callback: (($obj: Widget, printOperation: WebKit2.PrintOperation) => boolean)): number
    emit(sigName: "print", printOperation: WebKit2.PrintOperation): void
    on(sigName: "print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    emit(sigName: "ready-to-show"): void
    on(sigName: "ready-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ready-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ready-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    connect_after(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    emit(sigName: "resource-load-started", resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    on(sigName: "resource-load-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-load-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-load-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    emit(sigName: "run-as-modal"): void
    on(sigName: "run-as-modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-as-modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-as-modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    connect_after(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    emit(sigName: "run-color-chooser", request: WebKit2.ColorChooserRequest): void
    on(sigName: "run-color-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-color-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-color-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    connect_after(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    emit(sigName: "run-file-chooser", request: WebKit2.FileChooserRequest): void
    on(sigName: "run-file-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-file-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-file-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    connect_after(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    emit(sigName: "script-dialog", dialog: WebKit2.ScriptDialog): void
    on(sigName: "script-dialog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "script-dialog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "script-dialog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    connect_after(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    emit(sigName: "show-notification", notification: WebKit2.Notification): void
    on(sigName: "show-notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-option-menu", callback: (($obj: Widget, object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "show-option-menu", callback: (($obj: Widget, object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean)): number
    emit(sigName: "show-option-menu", object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle): void
    on(sigName: "show-option-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-option-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-option-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    connect_after(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    emit(sigName: "submit-form", request: WebKit2.FormSubmissionRequest): void
    on(sigName: "submit-form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "submit-form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "submit-form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    connect_after(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    emit(sigName: "user-message-received", message: WebKit2.UserMessage): void
    on(sigName: "user-message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "web-process-crashed"): void
    on(sigName: "web-process-crashed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "web-process-crashed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "web-process-crashed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    connect_after(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    emit(sigName: "web-process-terminated", reason: WebKit2.WebProcessTerminationReason): void
    on(sigName: "web-process-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "web-process-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "web-process-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(): Widget
    constructor()
    static new(): Widget
}
export abstract class ArchiveClass {
    static name: string
}
export abstract class DocClass {
    static name: string
}
export class Resource {
    /* Fields of Gepub.Resource */
    mime: string
    uri: string
    static name: string
}
export abstract class TextChunkClass {
    /* Fields of Gepub.TextChunkClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class WidgetClass {
    static name: string
}
}