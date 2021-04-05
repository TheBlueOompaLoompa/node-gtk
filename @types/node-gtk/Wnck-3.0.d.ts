/**
 * Wnck-3.0
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

declare namespace Wnck {

export enum ClientType {
    APPLICATION,
    PAGER,
}
export enum MotionDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum PagerDisplayMode {
    NAME,
    CONTENT,
}
export enum PagerScrollMode {
    /* 2D (invalid, starts with a number) */
    /* 1D (invalid, starts with a number) */
}
export enum TasklistGroupingType {
    NEVER_GROUP,
    AUTO_GROUP,
    ALWAYS_GROUP,
}
export enum WindowGravity {
    CURRENT,
    NORTHWEST,
    NORTH,
    NORTHEAST,
    WEST,
    CENTER,
    EAST,
    SOUTHWEST,
    SOUTH,
    SOUTHEAST,
    STATIC,
}
export enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
}
export enum _LayoutCorner {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMRIGHT,
    BOTTOMLEFT,
}
export enum _LayoutOrientation {
    HORIZONTAL,
    VERTICAL,
}
export enum WindowActions {
    MOVE,
    RESIZE,
    SHADE,
    STICK,
    MAXIMIZE_HORIZONTALLY,
    MAXIMIZE_VERTICALLY,
    CHANGE_WORKSPACE,
    CLOSE,
    UNMAXIMIZE_HORIZONTALLY,
    UNMAXIMIZE_VERTICALLY,
    UNSHADE,
    UNSTICK,
    MINIMIZE,
    UNMINIMIZE,
    MAXIMIZE,
    UNMAXIMIZE,
    FULLSCREEN,
    ABOVE,
    BELOW,
}
export enum WindowMoveResizeMask {
    X,
    Y,
    WIDTH,
    HEIGHT,
}
export enum WindowState {
    MINIMIZED,
    MAXIMIZED_HORIZONTALLY,
    MAXIMIZED_VERTICALLY,
    SHADED,
    SKIP_PAGER,
    SKIP_TASKLIST,
    STICKY,
    HIDDEN,
    FULLSCREEN,
    DEMANDS_ATTENTION,
    URGENT,
    ABOVE,
    BELOW,
}
export const DEFAULT_ICON_SIZE: number
export const DEFAULT_MINI_ICON_SIZE: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function pidReadResourceUsage(gdkDisplay: Gdk.Display, pid: number, usage: ResourceUsage): void
export function setClientType(ewmhSourceindicationClientType: ClientType): void
export function setDefaultIconSize(size: number): void
export function setDefaultMiniIconSize(size: number): void
export function shutdown(): void
export function xidReadResourceUsage(gdkDisplay: Gdk.Display, xid: number, usage: ResourceUsage): void
export class ActionMenu {
    /* Properties of Wnck.ActionMenu */
    /* Fields of Wnck.ActionMenu */
    parentInstance: any
    priv: ActionMenuPrivate
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    static name: string
    static new(window: Window): ActionMenu
    constructor(window: Window)
    static new(window: Window): ActionMenu
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
}
export class Application {
    /* Fields of Wnck.Application */
    parentInstance: GObject.Object
    priv: ApplicationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Wnck.Application */
    getIcon(): GdkPixbuf.Pixbuf
    getIconIsFallback(): boolean
    getIconName(): string
    getMiniIcon(): GdkPixbuf.Pixbuf
    getNWindows(): number
    getName(): string
    getPid(): number
    getStartupId(): string
    getWindows(): Window[]
    getXid(): number
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
    /* Virtual methods of Wnck.Application */
    vfuncIconChanged?(): void
    vfuncNameChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Application */
    connect(sigName: "icon-changed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Application) => void)): number
    emit(sigName: "icon-changed"): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Application) => void)): number
    emit(sigName: "name-changed"): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static get(xwindow: number): Application
    static $gtype: GObject.Type
}
export interface ClassGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class ClassGroup {
    /* Fields of Wnck.ClassGroup */
    parentInstance: GObject.Object
    priv: ClassGroupPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Wnck.ClassGroup */
    getIcon(): GdkPixbuf.Pixbuf
    getId(): string
    getMiniIcon(): GdkPixbuf.Pixbuf
    getName(): string
    getResClass(): string
    getWindows(): Window[]
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
    /* Virtual methods of Wnck.ClassGroup */
    vfuncIconChanged?(): void
    vfuncNameChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.ClassGroup */
    connect(sigName: "icon-changed", callback: (($obj: ClassGroup) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: ClassGroup) => void)): number
    emit(sigName: "icon-changed"): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: ClassGroup) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: ClassGroup) => void)): number
    emit(sigName: "name-changed"): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClassGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClassGroup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ClassGroup_ConstructProps)
    _init (config?: ClassGroup_ConstructProps): void
    static get(id: string): ClassGroup
    static $gtype: GObject.Type
}
export class ImageMenuItem {
    /* Properties of Gtk.Actionable */
    actionName: string
    actionTarget: GLib.Variant
    /* Methods of Wnck.ImageMenuItem */
    makeLabelBold(): void
    makeLabelNormal(): void
    setImageFromIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setImageFromWindow(window: Window): void
    /* Methods of Gtk.Actionable */
    getActionName(): string | null
    getActionTargetValue(): GLib.Variant | null
    setActionName(actionName?: string | null): void
    setActionTargetValue(targetValue?: GLib.Variant | null): void
    setDetailedActionName(detailedActionName: string): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    static name: string
    static new(): ImageMenuItem
    constructor()
    static new(): ImageMenuItem
    static newWithLabel(label: string): ImageMenuItem
}
export interface Pager_ConstructProps extends Gtk.Widget_ConstructProps {
}
export class Pager {
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Fields of Wnck.Pager */
    parentInstance: any
    priv: PagerPrivate
    /* Fields of Gtk.Widget */
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Wnck.Pager */
    getWrapOnScroll(): boolean
    setDisplayMode(mode: PagerDisplayMode): void
    setNRows(nRows: number): boolean
    setOrientation(orientation: Gtk.Orientation): boolean
    setScrollMode(scrollMode: PagerScrollMode): void
    setShadowType(shadowType: any): void
    setShowAll(showAllWorkspaces: boolean): void
    setWrapOnScroll(wrapOnScroll: boolean): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand?(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains?(x: number, y: number): boolean
    vfuncCssChanged?(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged?(previousDirection: Gtk.TextDirection): void
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabFocus?(): boolean
    vfuncHide?(): void
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncMap?(): void
    vfuncMeasure?(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate?(groupCycling: boolean): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncQueryTooltip?(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize?(): void
    vfuncRoot?(): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    vfuncShow?(): void
    vfuncSizeAllocate?(width: number, height: number, baseline: number): void
    vfuncSnapshot?(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged?(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged?(settings: Gtk.SystemSetting): void
    vfuncUnmap?(): void
    vfuncUnrealize?(): void
    vfuncUnroot?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Pager) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Pager, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Pager, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Pager) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Pager, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Pager, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "map", callback: (($obj: Pager) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Pager, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Pager, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Pager, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Pager, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Pager, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Pager, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Pager) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "show", callback: (($obj: Pager) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Pager, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Pager, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Pager) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Pager) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pager_ConstructProps)
    _init (config?: Pager_ConstructProps): void
    static new(): Pager
    static $gtype: GObject.Type
}
export interface Screen_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screen {
    /* Fields of Wnck.Screen */
    parentInstance: GObject.Object
    priv: ScreenPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Wnck.Screen */
    calcWorkspaceLayout(numWorkspaces: number, spaceIndex: number, layout: WorkspaceLayout): void
    changeWorkspaceCount(count: number): void
    forceUpdate(): void
    getActiveWindow(): Window
    getActiveWorkspace(): Workspace
    getBackgroundPixmap(): number
    getHeight(): number
    getNumber(): number
    getPreviouslyActiveWindow(): Window
    getShowingDesktop(): boolean
    getWidth(): number
    getWindowManagerName(): string
    getWindows(): Window[]
    getWindowsStacked(): Window[]
    getWorkspace(workspace: number): Workspace
    getWorkspaceCount(): number
    getWorkspaces(): Workspace[]
    moveViewport(x: number, y: number): void
    netWmSupports(atom: string): boolean
    releaseWorkspaceLayout(currentToken: number): void
    toggleShowingDesktop(show: boolean): void
    trySetWorkspaceLayout(currentToken: number, rows: number, columns: number): number
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
    /* Virtual methods of Wnck.Screen */
    vfuncActiveWindowChanged?(previousWindow: Window): void
    vfuncActiveWorkspaceChanged?(previousWorkspace: Workspace): void
    vfuncApplicationClosed?(app: Application): void
    vfuncApplicationOpened?(app: Application): void
    vfuncBackgroundChanged?(): void
    vfuncClassGroupClosed?(classGroup: ClassGroup): void
    vfuncClassGroupOpened?(classGroup: ClassGroup): void
    vfuncShowingDesktopChanged?(): void
    vfuncViewportsChanged?(): void
    vfuncWindowClosed?(window: Window): void
    vfuncWindowManagerChanged?(): void
    vfuncWindowOpened?(window: Window): void
    vfuncWindowStackingChanged?(): void
    vfuncWorkspaceCreated?(space: Workspace): void
    vfuncWorkspaceDestroyed?(space: Workspace): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Screen */
    connect(sigName: "active-window-changed", callback: (($obj: Screen, previouslyActiveWindow: Window) => void)): number
    connect_after(sigName: "active-window-changed", callback: (($obj: Screen, previouslyActiveWindow: Window) => void)): number
    emit(sigName: "active-window-changed", previouslyActiveWindow: Window): void
    on(sigName: "active-window-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "active-workspace-changed", callback: (($obj: Screen, previouslyActiveSpace: Workspace) => void)): number
    connect_after(sigName: "active-workspace-changed", callback: (($obj: Screen, previouslyActiveSpace: Workspace) => void)): number
    emit(sigName: "active-workspace-changed", previouslyActiveSpace: Workspace): void
    on(sigName: "active-workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "application-closed", callback: (($obj: Screen, app: Application) => void)): number
    connect_after(sigName: "application-closed", callback: (($obj: Screen, app: Application) => void)): number
    emit(sigName: "application-closed", app: Application): void
    on(sigName: "application-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "application-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "application-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "application-opened", callback: (($obj: Screen, app: Application) => void)): number
    connect_after(sigName: "application-opened", callback: (($obj: Screen, app: Application) => void)): number
    emit(sigName: "application-opened", app: Application): void
    on(sigName: "application-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "application-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "application-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "background-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "background-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "background-changed"): void
    on(sigName: "background-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "background-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "background-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "class-group-closed", callback: (($obj: Screen, classGroup: ClassGroup) => void)): number
    connect_after(sigName: "class-group-closed", callback: (($obj: Screen, classGroup: ClassGroup) => void)): number
    emit(sigName: "class-group-closed", classGroup: ClassGroup): void
    on(sigName: "class-group-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "class-group-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "class-group-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "class-group-opened", callback: (($obj: Screen, classGroup: ClassGroup) => void)): number
    connect_after(sigName: "class-group-opened", callback: (($obj: Screen, classGroup: ClassGroup) => void)): number
    emit(sigName: "class-group-opened", classGroup: ClassGroup): void
    on(sigName: "class-group-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "class-group-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "class-group-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "showing-desktop-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "showing-desktop-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "showing-desktop-changed"): void
    on(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "viewports-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "viewports-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "viewports-changed"): void
    on(sigName: "viewports-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "viewports-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "viewports-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-closed", callback: (($obj: Screen, window: Window) => void)): number
    connect_after(sigName: "window-closed", callback: (($obj: Screen, window: Window) => void)): number
    emit(sigName: "window-closed", window: Window): void
    on(sigName: "window-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-manager-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    on(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-opened", callback: (($obj: Screen, window: Window) => void)): number
    connect_after(sigName: "window-opened", callback: (($obj: Screen, window: Window) => void)): number
    emit(sigName: "window-opened", window: Window): void
    on(sigName: "window-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-stacking-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "window-stacking-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "window-stacking-changed"): void
    on(sigName: "window-stacking-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-stacking-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-stacking-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-created", callback: (($obj: Screen, space: Workspace) => void)): number
    connect_after(sigName: "workspace-created", callback: (($obj: Screen, space: Workspace) => void)): number
    emit(sigName: "workspace-created", space: Workspace): void
    on(sigName: "workspace-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-destroyed", callback: (($obj: Screen, space: Workspace) => void)): number
    connect_after(sigName: "workspace-destroyed", callback: (($obj: Screen, space: Workspace) => void)): number
    emit(sigName: "workspace-destroyed", space: Workspace): void
    on(sigName: "workspace-destroyed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-destroyed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-destroyed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    static freeWorkspaceLayout(layout: WorkspaceLayout): void
    static get(index: number): Screen
    static getDefault(): Screen | null
    static getForRoot(rootWindowId: number): Screen
    static $gtype: GObject.Type
}
export class Selector {
    /* Fields of Wnck.Selector */
    parentInstance: any
    priv: SelectorPrivate
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    static name: string
    static new(): Selector
    constructor()
    static new(): Selector
}
export class Tasklist {
    /* Fields of Wnck.Tasklist */
    parentInstance: any
    priv: TasklistPrivate
    /* Methods of Wnck.Tasklist */
    getScrollEnabled(): boolean
    getSizeHintList(nElements: number): number
    setButtonRelief(relief: any): void
    setGrouping(grouping: TasklistGroupingType): void
    setGroupingLimit(limit: number): void
    setIncludeAllWorkspaces(includeAllWorkspaces: boolean): void
    setMiddleClickClose(middleClickClose: boolean): void
    setOrientation(orient: Gtk.Orientation): void
    setScrollEnabled(scrollEnabled: boolean): void
    setSwitchWorkspaceOnUnminimize(switchWorkspaceOnUnminimize: boolean): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Signals of Wnck.Tasklist */
    connect(sigName: "task-enter-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    connect_after(sigName: "task-enter-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    emit(sigName: "task-enter-notify", windows?: object | null): void
    on(sigName: "task-enter-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "task-enter-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "task-enter-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "task-leave-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    connect_after(sigName: "task-leave-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    emit(sigName: "task-leave-notify", windows?: object | null): void
    on(sigName: "task-leave-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "task-leave-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "task-leave-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(): Tasklist
    constructor()
    static new(): Tasklist
}
export interface Window_ConstructProps extends GObject.Object_ConstructProps {
}
export class Window {
    /* Fields of Wnck.Window */
    parentInstance: GObject.Object
    priv: WindowPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Wnck.Window */
    activate(timestamp: number): void
    activateTransient(timestamp: number): void
    close(timestamp: number): void
    getActions(): WindowActions
    getApplication(): Application
    getClassGroup(): ClassGroup
    getClassGroupName(): string
    getClassInstanceName(): string
    getClientWindowGeometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
    getGeometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
    getGroupLeader(): number
    getIcon(): GdkPixbuf.Pixbuf
    getIconIsFallback(): boolean
    getIconName(): string
    getMiniIcon(): GdkPixbuf.Pixbuf
    getName(): string
    getPid(): number
    getRole(): string
    getScreen(): Screen
    getSessionId(): string
    getSessionIdUtf8(): string
    getSortOrder(): number
    getState(): WindowState
    getTransient(): Window
    getWindowType(): WindowType
    getWorkspace(): Workspace
    getXid(): number
    hasIconName(): boolean
    hasName(): boolean
    isAbove(): boolean
    isActive(): boolean
    isBelow(): boolean
    isFullscreen(): boolean
    isInViewport(workspace: Workspace): boolean
    isMaximized(): boolean
    isMaximizedHorizontally(): boolean
    isMaximizedVertically(): boolean
    isMinimized(): boolean
    isMostRecentlyActivated(): boolean
    isOnWorkspace(workspace: Workspace): boolean
    isPinned(): boolean
    isShaded(): boolean
    isSkipPager(): boolean
    isSkipTasklist(): boolean
    isSticky(): boolean
    isVisibleOnWorkspace(workspace: Workspace): boolean
    keyboardMove(): void
    keyboardSize(): void
    makeAbove(): void
    makeBelow(): void
    maximize(): void
    maximizeHorizontally(): void
    maximizeVertically(): void
    minimize(): void
    moveToWorkspace(space: Workspace): void
    needsAttention(): boolean
    orTransientNeedsAttention(): boolean
    pin(): void
    setFullscreen(fullscreen: boolean): void
    setGeometry(gravity: WindowGravity, geometryMask: WindowMoveResizeMask, x: number, y: number, width: number, height: number): void
    setIconGeometry(x: number, y: number, width: number, height: number): void
    setSkipPager(skip: boolean): void
    setSkipTasklist(skip: boolean): void
    setSortOrder(order: number): void
    setWindowType(wintype: WindowType): void
    shade(): void
    stick(): void
    transientIsMostRecentlyActivated(): boolean
    unmakeAbove(): void
    unmakeBelow(): void
    unmaximize(): void
    unmaximizeHorizontally(): void
    unmaximizeVertically(): void
    unminimize(timestamp: number): void
    unpin(): void
    unshade(): void
    unstick(): void
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
    /* Virtual methods of Wnck.Window */
    vfuncActionsChanged?(changedMask: WindowActions, newActions: WindowActions): void
    vfuncClassChanged?(): void
    vfuncGeometryChanged?(): void
    vfuncIconChanged?(): void
    vfuncNameChanged?(): void
    vfuncRoleChanged?(): void
    vfuncStateChanged?(changedMask: WindowState, newState: WindowState): void
    vfuncTypeChanged?(): void
    vfuncWorkspaceChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Window */
    connect(sigName: "actions-changed", callback: (($obj: Window, changedMask: WindowActions, newState: WindowActions) => void)): number
    connect_after(sigName: "actions-changed", callback: (($obj: Window, changedMask: WindowActions, newState: WindowActions) => void)): number
    emit(sigName: "actions-changed", changedMask: WindowActions, newState: WindowActions): void
    on(sigName: "actions-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actions-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actions-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "class-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "class-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "class-changed"): void
    on(sigName: "class-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "class-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "class-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "geometry-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "geometry-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "geometry-changed"): void
    on(sigName: "geometry-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "geometry-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "geometry-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "icon-changed"): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "name-changed"): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "role-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "role-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "role-changed"): void
    on(sigName: "role-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "role-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "role-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: Window, changedMask: WindowState, newState: WindowState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Window, changedMask: WindowState, newState: WindowState) => void)): number
    emit(sigName: "state-changed", changedMask: WindowState, newState: WindowState): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "type-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "type-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "type-changed"): void
    on(sigName: "type-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "type-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "type-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "workspace-changed"): void
    on(sigName: "workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static get(xwindow: number): Window
    static $gtype: GObject.Type
}
export interface Workspace_ConstructProps extends GObject.Object_ConstructProps {
}
export class Workspace {
    /* Fields of Wnck.Workspace */
    parentInstance: GObject.Object
    priv: WorkspacePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Wnck.Workspace */
    activate(timestamp: number): void
    changeName(name: string): void
    getHeight(): number
    getLayoutColumn(): number
    getLayoutRow(): number
    getName(): string
    getNeighbor(direction: MotionDirection): Workspace
    getNumber(): number
    getScreen(): Screen
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    isVirtual(): boolean
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
    /* Virtual methods of Wnck.Workspace */
    vfuncNameChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Workspace */
    connect(sigName: "name-changed", callback: (($obj: Workspace) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Workspace) => void)): number
    emit(sigName: "name-changed"): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Workspace_ConstructProps)
    _init (config?: Workspace_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ActionMenuClass {
    /* Fields of Wnck.ActionMenuClass */
    parentClass: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class ActionMenuPrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Wnck.ApplicationClass */
    parentClass: GObject.ObjectClass
    nameChanged: any
    iconChanged: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class ClassGroupClass {
    /* Fields of Wnck.ClassGroupClass */
    parentClass: GObject.ObjectClass
    nameChanged: any
    iconChanged: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class ClassGroupPrivate {
    static name: string
}
export abstract class ImageMenuItemClass {
    /* Fields of Wnck.ImageMenuItemClass */
    parentClass: any
    static name: string
}
export abstract class PagerClass {
    /* Fields of Wnck.PagerClass */
    parentClass: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class PagerPrivate {
    static name: string
}
export class ResourceUsage {
    /* Fields of Wnck.ResourceUsage */
    totalBytesEstimate: number
    pixmapBytes: number
    nPixmaps: number
    nWindows: number
    nGcs: number
    nPictures: number
    nGlyphsets: number
    nFonts: number
    nColormapEntries: number
    nPassiveGrabs: number
    nCursors: number
    nOther: number
    static name: string
}
export abstract class ScreenClass {
    /* Fields of Wnck.ScreenClass */
    parentClass: GObject.ObjectClass
    activeWindowChanged: any
    activeWorkspaceChanged: any
    windowStackingChanged: any
    windowOpened: any
    windowClosed: any
    workspaceCreated: any
    workspaceDestroyed: any
    applicationOpened: any
    applicationClosed: any
    backgroundChanged: any
    classGroupOpened: any
    classGroupClosed: any
    showingDesktopChanged: any
    viewportsChanged: any
    windowManagerChanged: any
    pad2: any
    pad3: any
    pad4: any
    pad5: any
    pad6: any
    static name: string
}
export class ScreenPrivate {
    static name: string
}
export abstract class SelectorClass {
    /* Fields of Wnck.SelectorClass */
    parentClass: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class SelectorPrivate {
    static name: string
}
export abstract class TasklistClass {
    /* Fields of Wnck.TasklistClass */
    parentClass: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class TasklistPrivate {
    static name: string
}
export abstract class WindowClass {
    /* Fields of Wnck.WindowClass */
    parentClass: GObject.ObjectClass
    nameChanged: any
    stateChanged: any
    workspaceChanged: any
    iconChanged: any
    actionsChanged: any
    geometryChanged: any
    classChanged: any
    roleChanged: any
    typeChanged: any
    pad1: any
    static name: string
}
export class WindowPrivate {
    static name: string
}
export abstract class WorkspaceClass {
    /* Fields of Wnck.WorkspaceClass */
    parentClass: GObject.ObjectClass
    nameChanged: any
    pad1: any
    pad2: any
    pad3: any
    pad4: any
    static name: string
}
export class WorkspaceLayout {
    /* Fields of Wnck.WorkspaceLayout */
    rows: number
    cols: number
    grid: number
    gridArea: number
    currentRow: number
    currentCol: number
    static name: string
}
export class WorkspacePrivate {
    static name: string
}
}