/**
 * Gdl-3
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

declare namespace Gdl {

export enum DockBarStyle {
    ICONS,
    TEXT,
    BOTH,
    AUTO,
}
export enum DockItemButtonImageType {
    CLOSE,
    ICONIFY,
}
export enum DockPlacement {
    NONE,
    TOP,
    BOTTOM,
    RIGHT,
    LEFT,
    CENTER,
    FLOATING,
}
export enum SwitcherStyle {
    TEXT,
    ICON,
    BOTH,
    TOOLBAR,
    TABS,
    NONE,
}
export enum DockItemBehavior {
    NORMAL,
    NEVER_FLOATING,
    NEVER_VERTICAL,
    NEVER_HORIZONTAL,
    LOCKED,
    CANT_DOCK_TOP,
    CANT_DOCK_BOTTOM,
    CANT_DOCK_LEFT,
    CANT_DOCK_RIGHT,
    CANT_DOCK_CENTER,
    CANT_CLOSE,
    CANT_ICONIFY,
    NO_GRIP,
}
export enum DockItemFlags {
    IN_DRAG,
    IN_PREDRAG,
    ICONIFIED,
    USER_ACTION,
}
export enum DockObjectFlags {
    AUTOMATIC,
    ATTACHED,
    IN_REFLOW,
    IN_DETACH,
}
export enum DockParamFlags {
    EXPORT,
    AFTER,
}
export const DOCK_MASTER_PROPERTY: string
export const DOCK_NAME_PROPERTY: string
export const DOCK_OBJECT_FLAGS_SHIFT: number
export function marshalVOIDOBJECTENUMBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function marshalVOIDOBJECTINTINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function marshalVOIDUINTUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export class Dock {
    /* Properties of Gdl.Dock */
    defaultTitle: string
    floatx: number
    floaty: number
    height: number
    skipTaskbar: boolean
    width: number
    /* Properties of Gdl.DockObject */
    longName: string
    master: DockMaster
    pixbufIcon: object
    stockId: string
    /* Fields of Gdl.Dock */
    object: DockObject
    priv: DockPrivate
    /* Fields of Gdl.DockObject */
    container: any
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object
    /* Methods of Gdl.Dock */
    addFloatingItem(item: DockItem, x: number, y: number, width: number, height: number): void
    addItem(item: DockItem, placement: DockPlacement): void
    getItemByName(name: string): DockItem
    getNamedItems(): DockObject[]
    getPlaceholderByName(name: string): DockPlaceholder
    getRoot(): DockObject | null
    hidePreview(): void
    newFrom(floating: boolean): Gtk.Widget
    setSkipTaskbar(skip: boolean): void
    showPreview(rect: Gdk.Rectangle): void
    xorRect(rect: Gdk.Rectangle): void
    xorRectHide(): void
    /* Methods of Gdl.DockObject */
    bind(master: GObject.Object): void
    childPlacement(child: DockObject, placement?: DockPlacement | null): boolean
    detach(recursive: boolean): void
    dock(requestor: DockObject, position: DockPlacement, otherData?: any): void
    dockRequest(x: number, y: number, request: DockRequest): boolean
    freeze(): void
    getController(): DockObject
    getLongName(): string
    getMaster(): GObject.Object
    getName(): string
    getParentObject(): DockObject | null
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getToplevel(): Dock | null
    isAutomatic(): boolean
    isBound(): boolean
    isClosed(): boolean
    isCompound(): boolean
    isFrozen(): boolean
    layoutChangedNotify(): void
    present(child?: DockObject | null): void
    reduce(): void
    reorder(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    setLongName(name: string): void
    setManual(): void
    setName(name: string): void
    setPixbuf(icon?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string): void
    thaw(): void
    unbind(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.Dock */
    vfuncLayoutChanged?(): void
    /* Virtual methods of Gdl.DockObject */
    vfuncChildPlacement?(child: DockObject, placement?: DockPlacement | null): boolean
    vfuncDetach?(recursive: boolean): void
    vfuncDock?(requestor: DockObject, position: DockPlacement, otherData?: any): void
    vfuncDockRequest?(x: number, y: number, request: DockRequest): boolean
    vfuncPresent?(child?: DockObject | null): void
    vfuncReduce?(): void
    vfuncReorder?(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    /* Signals of Gdl.Dock */
    connect(sigName: "layout-changed", callback: (($obj: Dock) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: Dock) => void)): number
    emit(sigName: "layout-changed"): void
    on(sigName: "layout-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "layout-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "layout-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdl.DockObject */
    connect(sigName: "detach", callback: (($obj: Dock, recursive: boolean) => void)): number
    connect_after(sigName: "detach", callback: (($obj: Dock, recursive: boolean) => void)): number
    emit(sigName: "detach", recursive: boolean): void
    on(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock", callback: (($obj: Dock, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    connect_after(sigName: "dock", callback: (($obj: Dock, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, otherData?: any): void
    on(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(): Dock
    constructor()
    static new(): Dock
}
export interface DockBar_ConstructProps extends Gtk.Box_ConstructProps {
    dockbarStyle?: DockBarStyle
    master?: GObject.Object
}
export class DockBar {
    /* Properties of Gdl.DockBar */
    dockbarStyle: DockBarStyle
    master: GObject.Object
    /* Properties of Gtk.Box */
    baselinePosition: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gdl.DockBar */
    /* Fields of Gtk.Box */
    parentInstance: Gtk.Widget
    /* Fields of Gtk.Widget */
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gdl.DockBar */
    getOrientation(): Gtk.Orientation
    getStyle(): DockBarStyle
    setOrientation(orientation: Gtk.Orientation): void
    setStyle(style: DockBarStyle): void
    /* Methods of Gtk.Box */
    append(child: Gtk.Widget): void
    getBaselinePosition(): Gtk.BaselinePosition
    getHomogeneous(): boolean
    getSpacing(): number
    insertChildAfter(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorderChildAfter(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    setBaselinePosition(position: Gtk.BaselinePosition): void
    setHomogeneous(homogeneous: boolean): void
    setSpacing(spacing: number): void
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
    /* Methods of Gtk.Orientable */
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
    connect(sigName: "destroy", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DockBar) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: DockBar, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: DockBar, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DockBar) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: DockBar, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: DockBar, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "map", callback: (($obj: DockBar) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: DockBar, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: DockBar, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: DockBar, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: DockBar, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: DockBar, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: DockBar, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DockBar) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "show", callback: (($obj: DockBar) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: DockBar, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: DockBar, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: DockBar) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: DockBar) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DockBar) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dockbar-style", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dockbar-style", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dockbar-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dockbar-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dockbar-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::baseline-position", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baseline-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baseline-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baseline-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spacing", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::orientation", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DockBar_ConstructProps)
    _init (config?: DockBar_ConstructProps): void
    static new(master?: GObject.Object | null): DockBar
    static $gtype: GObject.Type
}
export class DockItem {
    /* Properties of Gdl.DockItem */
    behavior: DockItemBehavior
    closed: boolean
    iconified: boolean
    locked: boolean
    orientation: Gtk.Orientation
    preferredHeight: number
    preferredWidth: number
    resize: boolean
    /* Properties of Gdl.DockObject */
    longName: string
    master: DockMaster
    pixbufIcon: object
    stockId: string
    /* Fields of Gdl.DockItem */
    object: DockObject
    /* Fields of Gdl.DockObject */
    container: any
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object
    /* Methods of Gdl.DockItem */
    bind(dock: Gtk.Widget): void
    dockTo(target: DockItem | null, position: DockPlacement, dockingParam: number): void
    getBehaviorFlags(): DockItemBehavior
    getChild(): Gtk.Widget
    getDragArea(rect: Gdk.Rectangle): void
    getGrip(): Gtk.Widget | null
    getOrientation(): Gtk.Orientation
    getTablabel(): Gtk.Widget
    hideGrip(): void
    hideItem(): void
    iconifyItem(): void
    isClosed(): boolean
    isIconified(): boolean
    isPlaceholder(): boolean
    lock(): void
    notifyDeselected(): void
    notifySelected(): void
    orChildHasFocus(): boolean
    preferredSize(req: Gtk.Requisition): void
    setBehaviorFlags(behavior: DockItemBehavior, clear: boolean): void
    setChild(child?: Gtk.Widget | null): void
    setDefaultPosition(reference: DockObject): void
    setOrientation(orientation: Gtk.Orientation): void
    setTablabel(tablabel: Gtk.Widget): void
    showGrip(): void
    showItem(): void
    unbind(): void
    unlock(): void
    unsetBehaviorFlags(behavior: DockItemBehavior): void
    /* Methods of Gdl.DockObject */
    childPlacement(child: DockObject, placement?: DockPlacement | null): boolean
    detach(recursive: boolean): void
    dock(requestor: DockObject, position: DockPlacement, otherData?: any): void
    dockRequest(x: number, y: number, request: DockRequest): boolean
    freeze(): void
    getController(): DockObject
    getLongName(): string
    getMaster(): GObject.Object
    getName(): string
    getParentObject(): DockObject | null
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getToplevel(): Dock | null
    isAutomatic(): boolean
    isBound(): boolean
    isCompound(): boolean
    isFrozen(): boolean
    layoutChangedNotify(): void
    present(child?: DockObject | null): void
    reduce(): void
    reorder(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    setLongName(name: string): void
    setManual(): void
    setName(name: string): void
    setPixbuf(icon?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string): void
    thaw(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.DockItem */
    vfuncDockDragBegin?(): void
    vfuncDockDragEnd?(cancelled: boolean): void
    vfuncDockDragMotion?(device: Gdk.Device, x: number, y: number): void
    vfuncMoveFocusChild?(direction: Gtk.DirectionType): void
    vfuncSetOrientation?(orientation: Gtk.Orientation): void
    /* Virtual methods of Gdl.DockObject */
    vfuncChildPlacement?(child: DockObject, placement?: DockPlacement | null): boolean
    vfuncDetach?(recursive: boolean): void
    vfuncDock?(requestor: DockObject, position: DockPlacement, otherData?: any): void
    vfuncDockRequest?(x: number, y: number, request: DockRequest): boolean
    vfuncPresent?(child?: DockObject | null): void
    vfuncReduce?(): void
    vfuncReorder?(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    /* Signals of Gdl.DockItem */
    connect(sigName: "deselected", callback: (($obj: DockItem) => void)): number
    connect_after(sigName: "deselected", callback: (($obj: DockItem) => void)): number
    emit(sigName: "deselected"): void
    on(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-begin", callback: (($obj: DockItem) => void)): number
    connect_after(sigName: "dock-drag-begin", callback: (($obj: DockItem) => void)): number
    emit(sigName: "dock-drag-begin"): void
    on(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-end", callback: (($obj: DockItem, cancel: boolean) => void)): number
    connect_after(sigName: "dock-drag-end", callback: (($obj: DockItem, cancel: boolean) => void)): number
    emit(sigName: "dock-drag-end", cancel: boolean): void
    on(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-motion", callback: (($obj: DockItem, device: Gdk.Device, x: number, y: number) => void)): number
    connect_after(sigName: "dock-drag-motion", callback: (($obj: DockItem, device: Gdk.Device, x: number, y: number) => void)): number
    emit(sigName: "dock-drag-motion", device: Gdk.Device, x: number, y: number): void
    on(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus-child", callback: (($obj: DockItem, dir: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus-child", callback: (($obj: DockItem, dir: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus-child", dir: Gtk.DirectionType): void
    on(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selected", callback: (($obj: DockItem) => void)): number
    connect_after(sigName: "selected", callback: (($obj: DockItem) => void)): number
    emit(sigName: "selected"): void
    on(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdl.DockObject */
    connect(sigName: "detach", callback: (($obj: DockItem, recursive: boolean) => void)): number
    connect_after(sigName: "detach", callback: (($obj: DockItem, recursive: boolean) => void)): number
    emit(sigName: "detach", recursive: boolean): void
    on(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock", callback: (($obj: DockItem, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    connect_after(sigName: "dock", callback: (($obj: DockItem, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, otherData?: any): void
    on(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(name: string, longName: string, behavior: DockItemBehavior): DockItem
    constructor(name: string, longName: string, behavior: DockItemBehavior)
    static new(name: string, longName: string, behavior: DockItemBehavior): DockItem
    static newWithPixbufIcon(name: string, longName: string, pixbufIcon: GdkPixbuf.Pixbuf, behavior: DockItemBehavior): DockItem
    static newWithStock(name: string, longName: string, stockId: string, behavior: DockItemBehavior): DockItem
}
export interface DockItemButtonImage_ConstructProps extends Gtk.Widget_ConstructProps {
}
export class DockItemButtonImage {
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
    /* Fields of Gdl.DockItemButtonImage */
    imageType: DockItemButtonImageType
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
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
    connect(sigName: "destroy", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: DockItemButtonImage, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: DockItemButtonImage, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: DockItemButtonImage, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: DockItemButtonImage, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "map", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: DockItemButtonImage, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: DockItemButtonImage, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: DockItemButtonImage, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: DockItemButtonImage, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: DockItemButtonImage, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: DockItemButtonImage, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "show", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: DockItemButtonImage, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: DockItemButtonImage, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: DockItemButtonImage) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DockItemButtonImage) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DockItemButtonImage_ConstructProps)
    _init (config?: DockItemButtonImage_ConstructProps): void
    static new(imageType: DockItemButtonImageType): DockItemButtonImage
    static $gtype: GObject.Type
}
export class DockItemGrip {
    /* Properties of Gdl.DockItemGrip */
    /* Fields of Gdl.DockItemGrip */
    parent: any
    priv: DockItemGripPrivate
    /* Methods of Gdl.DockItemGrip */
    hasEvent(event: Gdk.Event): boolean
    hideHandle(): void
    setCursor(inDrag: boolean): void
    setLabel(label: Gtk.Widget): void
    showHandle(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    static name: string
    static new(item: DockItem): DockItemGrip
    constructor(item: DockItem)
    static new(item: DockItem): DockItemGrip
}
export interface DockLayout_ConstructProps extends GObject.Object_ConstructProps {
    master?: GObject.Object
}
export class DockLayout {
    /* Properties of Gdl.DockLayout */
    readonly dirty: boolean
    master: GObject.Object
    /* Fields of Gdl.DockLayout */
    gObject: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdl.DockLayout */
    attach(master: DockMaster): void
    deleteLayout(name: string): void
    getLayouts(includeDefault: boolean): string[]
    getMaster(): GObject.Object
    isDirty(): boolean
    loadFromFile(filename: string): boolean
    loadLayout(name?: string | null): boolean
    saveLayout(name?: string | null): void
    saveToFile(filename: string): boolean
    setMaster(master: GObject.Object): void
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
    connect(sigName: "notify", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dirty", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DockLayout_ConstructProps)
    _init (config?: DockLayout_ConstructProps): void
    static new(master: GObject.Object): DockLayout
    static $gtype: GObject.Type
}
export interface DockMaster_ConstructProps extends GObject.Object_ConstructProps {
    defaultTitle?: string
    locked?: number
    switcherStyle?: SwitcherStyle
    tabPos?: Gtk.PositionType
    tabReorderable?: boolean
}
export class DockMaster {
    /* Properties of Gdl.DockMaster */
    defaultTitle: string
    locked: number
    switcherStyle: SwitcherStyle
    tabPos: Gtk.PositionType
    tabReorderable: boolean
    /* Fields of Gdl.DockMaster */
    object: GObject.Object
    priv: DockMasterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdl.DockMaster */
    add(object: DockObject): void
    foreach(function_: GLib.Func): void
    foreachToplevel(includeController: boolean, function_: GLib.Func): void
    getController(): DockObject
    getDockName(): string
    getObject(nickName: string): DockObject | null
    remove(object: DockObject): void
    setController(newController: DockObject): void
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
    /* Virtual methods of Gdl.DockMaster */
    vfuncLayoutChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdl.DockMaster */
    connect(sigName: "layout-changed", callback: (($obj: DockMaster) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: DockMaster) => void)): number
    emit(sigName: "layout-changed"): void
    on(sigName: "layout-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "layout-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "layout-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-title", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-title", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::switcher-style", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switcher-style", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::switcher-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::switcher-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::switcher-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-pos", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-pos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-pos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-pos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-reorderable", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-reorderable", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DockMaster_ConstructProps)
    _init (config?: DockMaster_ConstructProps): void
    static $gtype: GObject.Type
}
export class DockNotebook {
    /* Properties of Gdl.DockNotebook */
    page: number
    /* Properties of Gdl.DockItem */
    behavior: DockItemBehavior
    closed: boolean
    iconified: boolean
    locked: boolean
    orientation: Gtk.Orientation
    preferredHeight: number
    preferredWidth: number
    resize: boolean
    /* Properties of Gdl.DockObject */
    longName: string
    master: DockMaster
    pixbufIcon: object
    stockId: string
    /* Fields of Gdl.DockNotebook */
    item: DockItem
    priv: DockNotebookPrivate
    /* Fields of Gdl.DockItem */
    object: DockObject
    /* Fields of Gdl.DockObject */
    container: any
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object
    /* Methods of Gdl.DockItem */
    bind(dock: Gtk.Widget): void
    dockTo(target: DockItem | null, position: DockPlacement, dockingParam: number): void
    getBehaviorFlags(): DockItemBehavior
    getChild(): Gtk.Widget
    getDragArea(rect: Gdk.Rectangle): void
    getGrip(): Gtk.Widget | null
    getOrientation(): Gtk.Orientation
    getTablabel(): Gtk.Widget
    hideGrip(): void
    hideItem(): void
    iconifyItem(): void
    isClosed(): boolean
    isIconified(): boolean
    isPlaceholder(): boolean
    lock(): void
    notifyDeselected(): void
    notifySelected(): void
    orChildHasFocus(): boolean
    preferredSize(req: Gtk.Requisition): void
    setBehaviorFlags(behavior: DockItemBehavior, clear: boolean): void
    setChild(child?: Gtk.Widget | null): void
    setDefaultPosition(reference: DockObject): void
    setOrientation(orientation: Gtk.Orientation): void
    setTablabel(tablabel: Gtk.Widget): void
    showGrip(): void
    showItem(): void
    unbind(): void
    unlock(): void
    unsetBehaviorFlags(behavior: DockItemBehavior): void
    /* Methods of Gdl.DockObject */
    childPlacement(child: DockObject, placement?: DockPlacement | null): boolean
    detach(recursive: boolean): void
    dock(requestor: DockObject, position: DockPlacement, otherData?: any): void
    dockRequest(x: number, y: number, request: DockRequest): boolean
    freeze(): void
    getController(): DockObject
    getLongName(): string
    getMaster(): GObject.Object
    getName(): string
    getParentObject(): DockObject | null
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getToplevel(): Dock | null
    isAutomatic(): boolean
    isBound(): boolean
    isCompound(): boolean
    isFrozen(): boolean
    layoutChangedNotify(): void
    present(child?: DockObject | null): void
    reduce(): void
    reorder(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    setLongName(name: string): void
    setManual(): void
    setName(name: string): void
    setPixbuf(icon?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string): void
    thaw(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.DockItem */
    vfuncDockDragBegin?(): void
    vfuncDockDragEnd?(cancelled: boolean): void
    vfuncDockDragMotion?(device: Gdk.Device, x: number, y: number): void
    vfuncMoveFocusChild?(direction: Gtk.DirectionType): void
    vfuncSetOrientation?(orientation: Gtk.Orientation): void
    /* Virtual methods of Gdl.DockObject */
    vfuncChildPlacement?(child: DockObject, placement?: DockPlacement | null): boolean
    vfuncDetach?(recursive: boolean): void
    vfuncDock?(requestor: DockObject, position: DockPlacement, otherData?: any): void
    vfuncDockRequest?(x: number, y: number, request: DockRequest): boolean
    vfuncPresent?(child?: DockObject | null): void
    vfuncReduce?(): void
    vfuncReorder?(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    /* Signals of Gdl.DockItem */
    connect(sigName: "deselected", callback: (($obj: DockNotebook) => void)): number
    connect_after(sigName: "deselected", callback: (($obj: DockNotebook) => void)): number
    emit(sigName: "deselected"): void
    on(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-begin", callback: (($obj: DockNotebook) => void)): number
    connect_after(sigName: "dock-drag-begin", callback: (($obj: DockNotebook) => void)): number
    emit(sigName: "dock-drag-begin"): void
    on(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-end", callback: (($obj: DockNotebook, cancel: boolean) => void)): number
    connect_after(sigName: "dock-drag-end", callback: (($obj: DockNotebook, cancel: boolean) => void)): number
    emit(sigName: "dock-drag-end", cancel: boolean): void
    on(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-motion", callback: (($obj: DockNotebook, device: Gdk.Device, x: number, y: number) => void)): number
    connect_after(sigName: "dock-drag-motion", callback: (($obj: DockNotebook, device: Gdk.Device, x: number, y: number) => void)): number
    emit(sigName: "dock-drag-motion", device: Gdk.Device, x: number, y: number): void
    on(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus-child", callback: (($obj: DockNotebook, dir: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus-child", callback: (($obj: DockNotebook, dir: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus-child", dir: Gtk.DirectionType): void
    on(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selected", callback: (($obj: DockNotebook) => void)): number
    connect_after(sigName: "selected", callback: (($obj: DockNotebook) => void)): number
    emit(sigName: "selected"): void
    on(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdl.DockObject */
    connect(sigName: "detach", callback: (($obj: DockNotebook, recursive: boolean) => void)): number
    connect_after(sigName: "detach", callback: (($obj: DockNotebook, recursive: boolean) => void)): number
    emit(sigName: "detach", recursive: boolean): void
    on(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock", callback: (($obj: DockNotebook, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    connect_after(sigName: "dock", callback: (($obj: DockNotebook, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, otherData?: any): void
    on(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(): DockNotebook
    constructor()
    static new(): DockNotebook
}
export class DockObject {
    /* Properties of Gdl.DockObject */
    longName: string
    master: DockMaster
    pixbufIcon: object
    stockId: string
    /* Fields of Gdl.DockObject */
    container: any
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object
    /* Methods of Gdl.DockObject */
    bind(master: GObject.Object): void
    childPlacement(child: DockObject, placement?: DockPlacement | null): boolean
    detach(recursive: boolean): void
    dock(requestor: DockObject, position: DockPlacement, otherData?: any): void
    dockRequest(x: number, y: number, request: DockRequest): boolean
    freeze(): void
    getController(): DockObject
    getLongName(): string
    getMaster(): GObject.Object
    getName(): string
    getParentObject(): DockObject | null
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getToplevel(): Dock | null
    isAutomatic(): boolean
    isBound(): boolean
    isClosed(): boolean
    isCompound(): boolean
    isFrozen(): boolean
    layoutChangedNotify(): void
    present(child?: DockObject | null): void
    reduce(): void
    reorder(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    setLongName(name: string): void
    setManual(): void
    setName(name: string): void
    setPixbuf(icon?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string): void
    thaw(): void
    unbind(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.DockObject */
    vfuncChildPlacement?(child: DockObject, placement?: DockPlacement | null): boolean
    vfuncDetach?(recursive: boolean): void
    vfuncDock?(requestor: DockObject, position: DockPlacement, otherData?: any): void
    vfuncDockRequest?(x: number, y: number, request: DockRequest): boolean
    vfuncPresent?(child?: DockObject | null): void
    vfuncReduce?(): void
    vfuncReorder?(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    /* Signals of Gdl.DockObject */
    connect(sigName: "detach", callback: (($obj: DockObject, recursive: boolean) => void)): number
    connect_after(sigName: "detach", callback: (($obj: DockObject, recursive: boolean) => void)): number
    emit(sigName: "detach", recursive: boolean): void
    on(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock", callback: (($obj: DockObject, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    connect_after(sigName: "dock", callback: (($obj: DockObject, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, otherData?: any): void
    on(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static nickFromType(type: GObject.Type): string
    static setTypeForNick(nick: string, type: GObject.Type): GObject.Type
    static typeFromNick(nick: string): GObject.Type
}
export class DockPaned {
    /* Properties of Gdl.DockPaned */
    position: number
    /* Properties of Gdl.DockItem */
    behavior: DockItemBehavior
    closed: boolean
    iconified: boolean
    locked: boolean
    orientation: Gtk.Orientation
    preferredHeight: number
    preferredWidth: number
    resize: boolean
    /* Properties of Gdl.DockObject */
    longName: string
    master: DockMaster
    pixbufIcon: object
    stockId: string
    /* Fields of Gdl.DockPaned */
    dockItem: DockItem
    priv: DockPanedPrivate
    /* Fields of Gdl.DockItem */
    object: DockObject
    /* Fields of Gdl.DockObject */
    container: any
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object
    /* Methods of Gdl.DockItem */
    bind(dock: Gtk.Widget): void
    dockTo(target: DockItem | null, position: DockPlacement, dockingParam: number): void
    getBehaviorFlags(): DockItemBehavior
    getChild(): Gtk.Widget
    getDragArea(rect: Gdk.Rectangle): void
    getGrip(): Gtk.Widget | null
    getOrientation(): Gtk.Orientation
    getTablabel(): Gtk.Widget
    hideGrip(): void
    hideItem(): void
    iconifyItem(): void
    isClosed(): boolean
    isIconified(): boolean
    isPlaceholder(): boolean
    lock(): void
    notifyDeselected(): void
    notifySelected(): void
    orChildHasFocus(): boolean
    preferredSize(req: Gtk.Requisition): void
    setBehaviorFlags(behavior: DockItemBehavior, clear: boolean): void
    setChild(child?: Gtk.Widget | null): void
    setDefaultPosition(reference: DockObject): void
    setOrientation(orientation: Gtk.Orientation): void
    setTablabel(tablabel: Gtk.Widget): void
    showGrip(): void
    showItem(): void
    unbind(): void
    unlock(): void
    unsetBehaviorFlags(behavior: DockItemBehavior): void
    /* Methods of Gdl.DockObject */
    childPlacement(child: DockObject, placement?: DockPlacement | null): boolean
    detach(recursive: boolean): void
    dock(requestor: DockObject, position: DockPlacement, otherData?: any): void
    dockRequest(x: number, y: number, request: DockRequest): boolean
    freeze(): void
    getController(): DockObject
    getLongName(): string
    getMaster(): GObject.Object
    getName(): string
    getParentObject(): DockObject | null
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getToplevel(): Dock | null
    isAutomatic(): boolean
    isBound(): boolean
    isCompound(): boolean
    isFrozen(): boolean
    layoutChangedNotify(): void
    present(child?: DockObject | null): void
    reduce(): void
    reorder(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    setLongName(name: string): void
    setManual(): void
    setName(name: string): void
    setPixbuf(icon?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string): void
    thaw(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.DockItem */
    vfuncDockDragBegin?(): void
    vfuncDockDragEnd?(cancelled: boolean): void
    vfuncDockDragMotion?(device: Gdk.Device, x: number, y: number): void
    vfuncMoveFocusChild?(direction: Gtk.DirectionType): void
    vfuncSetOrientation?(orientation: Gtk.Orientation): void
    /* Virtual methods of Gdl.DockObject */
    vfuncChildPlacement?(child: DockObject, placement?: DockPlacement | null): boolean
    vfuncDetach?(recursive: boolean): void
    vfuncDock?(requestor: DockObject, position: DockPlacement, otherData?: any): void
    vfuncDockRequest?(x: number, y: number, request: DockRequest): boolean
    vfuncPresent?(child?: DockObject | null): void
    vfuncReduce?(): void
    vfuncReorder?(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    /* Signals of Gdl.DockItem */
    connect(sigName: "deselected", callback: (($obj: DockPaned) => void)): number
    connect_after(sigName: "deselected", callback: (($obj: DockPaned) => void)): number
    emit(sigName: "deselected"): void
    on(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-begin", callback: (($obj: DockPaned) => void)): number
    connect_after(sigName: "dock-drag-begin", callback: (($obj: DockPaned) => void)): number
    emit(sigName: "dock-drag-begin"): void
    on(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-end", callback: (($obj: DockPaned, cancel: boolean) => void)): number
    connect_after(sigName: "dock-drag-end", callback: (($obj: DockPaned, cancel: boolean) => void)): number
    emit(sigName: "dock-drag-end", cancel: boolean): void
    on(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock-drag-motion", callback: (($obj: DockPaned, device: Gdk.Device, x: number, y: number) => void)): number
    connect_after(sigName: "dock-drag-motion", callback: (($obj: DockPaned, device: Gdk.Device, x: number, y: number) => void)): number
    emit(sigName: "dock-drag-motion", device: Gdk.Device, x: number, y: number): void
    on(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock-drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus-child", callback: (($obj: DockPaned, dir: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus-child", callback: (($obj: DockPaned, dir: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus-child", dir: Gtk.DirectionType): void
    on(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selected", callback: (($obj: DockPaned) => void)): number
    connect_after(sigName: "selected", callback: (($obj: DockPaned) => void)): number
    emit(sigName: "selected"): void
    on(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdl.DockObject */
    connect(sigName: "detach", callback: (($obj: DockPaned, recursive: boolean) => void)): number
    connect_after(sigName: "detach", callback: (($obj: DockPaned, recursive: boolean) => void)): number
    emit(sigName: "detach", recursive: boolean): void
    on(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock", callback: (($obj: DockPaned, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    connect_after(sigName: "dock", callback: (($obj: DockPaned, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, otherData?: any): void
    on(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(orientation: Gtk.Orientation): DockPaned
    constructor(orientation: Gtk.Orientation)
    static new(orientation: Gtk.Orientation): DockPaned
}
export class DockParam {
    static name: string
}
export class DockPlaceholder {
    /* Properties of Gdl.DockPlaceholder */
    height: number
    host: DockObject
    nextPlacement: DockPlacement
    width: number
    /* Properties of Gdl.DockObject */
    longName: string
    master: DockMaster
    pixbufIcon: object
    stockId: string
    /* Fields of Gdl.DockPlaceholder */
    object: DockObject
    priv: DockPlaceholderPrivate
    /* Fields of Gdl.DockObject */
    container: any
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object
    /* Methods of Gdl.DockPlaceholder */
    attach(object: DockObject): void
    /* Methods of Gdl.DockObject */
    bind(master: GObject.Object): void
    childPlacement(child: DockObject, placement?: DockPlacement | null): boolean
    detach(recursive: boolean): void
    dock(requestor: DockObject, position: DockPlacement, otherData?: any): void
    dockRequest(x: number, y: number, request: DockRequest): boolean
    freeze(): void
    getController(): DockObject
    getLongName(): string
    getMaster(): GObject.Object
    getName(): string
    getParentObject(): DockObject | null
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getToplevel(): Dock | null
    isAutomatic(): boolean
    isBound(): boolean
    isClosed(): boolean
    isCompound(): boolean
    isFrozen(): boolean
    layoutChangedNotify(): void
    present(child?: DockObject | null): void
    reduce(): void
    reorder(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    setLongName(name: string): void
    setManual(): void
    setName(name: string): void
    setPixbuf(icon?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string): void
    thaw(): void
    unbind(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.DockObject */
    vfuncChildPlacement?(child: DockObject, placement?: DockPlacement | null): boolean
    vfuncDetach?(recursive: boolean): void
    vfuncDock?(requestor: DockObject, position: DockPlacement, otherData?: any): void
    vfuncDockRequest?(x: number, y: number, request: DockRequest): boolean
    vfuncPresent?(child?: DockObject | null): void
    vfuncReduce?(): void
    vfuncReorder?(child: DockObject, newPosition: DockPlacement, otherData?: any): boolean
    /* Signals of Gdl.DockObject */
    connect(sigName: "detach", callback: (($obj: DockPlaceholder, recursive: boolean) => void)): number
    connect_after(sigName: "detach", callback: (($obj: DockPlaceholder, recursive: boolean) => void)): number
    emit(sigName: "detach", recursive: boolean): void
    on(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dock", callback: (($obj: DockPlaceholder, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    connect_after(sigName: "dock", callback: (($obj: DockPlaceholder, requestor: DockObject, position: DockPlacement, otherData?: any) => void)): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, otherData?: any): void
    on(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(name: string, object: DockObject, position: DockPlacement, sticky: boolean): DockPlaceholder
    constructor(name: string, object: DockObject, position: DockPlacement, sticky: boolean)
    static new(name: string, object: DockObject, position: DockPlacement, sticky: boolean): DockPlaceholder
}
export class DockTablabel {
    /* Properties of Gdl.DockTablabel */
    item: DockItem
    /* Fields of Gdl.DockTablabel */
    parent: any
    dragHandleSize: number
    eventWindow: any
    active: boolean
    dragStartEvent: any
    preDrag: boolean
    /* Methods of Gdl.DockTablabel */
    activate(): void
    deactivate(): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of Gdl.DockTablabel */
    vfuncButtonPressedHandle?(event: any): void
    /* Signals of Gdl.DockTablabel */
    connect(sigName: "button-pressed-handle", callback: (($obj: DockTablabel, event: Gdk.Event) => void)): number
    connect_after(sigName: "button-pressed-handle", callback: (($obj: DockTablabel, event: Gdk.Event) => void)): number
    emit(sigName: "button-pressed-handle", event: Gdk.Event): void
    on(sigName: "button-pressed-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-pressed-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-pressed-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static new(item: DockItem): DockTablabel
    constructor(item: DockItem)
    static new(item: DockItem): DockTablabel
}
export interface PreviewWindow_ConstructProps extends Gtk.Window_ConstructProps {
}
export class PreviewWindow {
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidget: Gtk.Widget
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    display: Gdk.Display
    focusVisible: boolean
    focusWidget: Gtk.Widget
    fullscreened: boolean
    handleMenubarAccel: boolean
    hideOnClose: boolean
    iconName: string
    readonly isActive: boolean
    maximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    startupId: string
    title: string
    transientFor: Gtk.Window
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
    /* Fields of Gdl.PreviewWindow */
    parentInstance: Gtk.Window
    /* Fields of Gtk.Window */
    /* Fields of Gtk.Widget */
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gdl.PreviewWindow */
    update(rect: Gdk.Rectangle): void
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: Gdk.Monitor): void
    getApplication(): Gtk.Application | null
    getChild(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusVisible(): boolean
    getGroup(): Gtk.WindowGroup
    getHandleMenubarAccel(): boolean
    getHideOnClose(): boolean
    getIconName(): string | null
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getResizable(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    hasGroup(): boolean
    isFullscreen(): boolean
    isMaximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    presentWithTime(timestamp: number): void
    setApplication(application?: Gtk.Application | null): void
    setChild(child?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefaultSize(width: number, height: number): void
    setDefaultWidget(defaultWidget?: Gtk.Widget | null): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setDisplay(display: Gdk.Display): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusVisible(setting: boolean): void
    setHandleMenubarAccel(handleMenubarAccel: boolean): void
    setHideOnClose(setting: boolean): void
    setIconName(name?: string | null): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setResizable(resizable: boolean): void
    setStartupId(startupId: string): void
    setTitle(title?: string | null): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
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
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault?(): void
    vfuncActivateFocus?(): void
    vfuncCloseRequest?(): boolean
    vfuncEnableDebugging?(toggle: boolean): boolean
    vfuncKeysChanged?(): void
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
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-focus", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close-request", callback: (($obj: PreviewWindow) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: PreviewWindow) => boolean)): number
    emit(sigName: "close-request"): void
    on(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enable-debugging", callback: (($obj: PreviewWindow, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: PreviewWindow, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: PreviewWindow, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: PreviewWindow, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: PreviewWindow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: PreviewWindow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "map", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: PreviewWindow, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: PreviewWindow, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: PreviewWindow, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: PreviewWindow, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: PreviewWindow, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: PreviewWindow, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "show", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: PreviewWindow, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: PreviewWindow, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: PreviewWindow) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PreviewWindow) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-widget", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-widget", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreened", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-on-close", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PreviewWindow_ConstructProps)
    _init (config?: PreviewWindow_ConstructProps): void
    static new(): PreviewWindow
    static $gtype: GObject.Type
}
export interface Switcher_ConstructProps extends Gtk.Notebook_ConstructProps {
    switcherStyle?: SwitcherStyle
    tabPos?: Gtk.PositionType
    tabReorderable?: boolean
}
export class Switcher {
    /* Properties of Gdl.Switcher */
    switcherStyle: SwitcherStyle
    tabPos: Gtk.PositionType
    tabReorderable: boolean
    /* Properties of Gtk.Notebook */
    enablePopup: boolean
    groupName: string
    page: number
    readonly pages: Gio.ListModel
    scrollable: boolean
    showBorder: boolean
    showTabs: boolean
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
    /* Fields of Gdl.Switcher */
    priv: SwitcherPrivate
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gdl.Switcher */
    insertPage(page: Gtk.Widget, tabWidget: Gtk.Widget, label: string, tooltips: string, stockId: string, pixbufIcon: GdkPixbuf.Pixbuf, position: number): number
    /* Methods of Gtk.Notebook */
    appendPage(child: Gtk.Widget, tabLabel?: Gtk.Widget | null): number
    appendPageMenu(child: Gtk.Widget, tabLabel?: Gtk.Widget | null, menuLabel?: Gtk.Widget | null): number
    detachTab(child: Gtk.Widget): void
    getActionWidget(packType: Gtk.PackType): Gtk.Widget | null
    getCurrentPage(): number
    getGroupName(): string | null
    getMenuLabel(child: Gtk.Widget): Gtk.Widget | null
    getMenuLabelText(child: Gtk.Widget): string | null
    getNPages(): number
    getNthPage(pageNum: number): Gtk.Widget | null
    getPage(child: Gtk.Widget): Gtk.NotebookPage
    getPages(): Gio.ListModel
    getScrollable(): boolean
    getShowBorder(): boolean
    getShowTabs(): boolean
    getTabDetachable(child: Gtk.Widget): boolean
    getTabLabel(child: Gtk.Widget): Gtk.Widget | null
    getTabLabelText(child: Gtk.Widget): string | null
    getTabPos(): Gtk.PositionType
    getTabReorderable(child: Gtk.Widget): boolean
    insertPageMenu(child: Gtk.Widget, tabLabel: Gtk.Widget | null, menuLabel: Gtk.Widget | null, position: number): number
    nextPage(): void
    pageNum(child: Gtk.Widget): number
    popupDisable(): void
    popupEnable(): void
    prependPage(child: Gtk.Widget, tabLabel?: Gtk.Widget | null): number
    prependPageMenu(child: Gtk.Widget, tabLabel?: Gtk.Widget | null, menuLabel?: Gtk.Widget | null): number
    prevPage(): void
    removePage(pageNum: number): void
    reorderChild(child: Gtk.Widget, position: number): void
    setActionWidget(widget: Gtk.Widget, packType: Gtk.PackType): void
    setCurrentPage(pageNum: number): void
    setGroupName(groupName?: string | null): void
    setMenuLabel(child: Gtk.Widget, menuLabel?: Gtk.Widget | null): void
    setMenuLabelText(child: Gtk.Widget, menuText: string): void
    setScrollable(scrollable: boolean): void
    setShowBorder(showBorder: boolean): void
    setShowTabs(showTabs: boolean): void
    setTabDetachable(child: Gtk.Widget, detachable: boolean): void
    setTabLabel(child: Gtk.Widget, tabLabel?: Gtk.Widget | null): void
    setTabLabelText(child: Gtk.Widget, tabText: string): void
    setTabPos(pos: Gtk.PositionType): void
    setTabReorderable(child: Gtk.Widget, reorderable: boolean): void
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
    /* Signals of Gtk.Notebook */
    connect(sigName: "change-current-page", callback: (($obj: Switcher, object: number) => boolean)): number
    connect_after(sigName: "change-current-page", callback: (($obj: Switcher, object: number) => boolean)): number
    emit(sigName: "change-current-page", object: number): void
    on(sigName: "change-current-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-current-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-current-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create-window", callback: (($obj: Switcher, page: Gtk.Widget) => Gtk.Notebook)): number
    connect_after(sigName: "create-window", callback: (($obj: Switcher, page: Gtk.Widget) => Gtk.Notebook)): number
    emit(sigName: "create-window", page: Gtk.Widget): void
    on(sigName: "create-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-tab", callback: (($obj: Switcher, object: Gtk.NotebookTab) => boolean)): number
    connect_after(sigName: "focus-tab", callback: (($obj: Switcher, object: Gtk.NotebookTab) => boolean)): number
    emit(sigName: "focus-tab", object: Gtk.NotebookTab): void
    on(sigName: "focus-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus-out", callback: (($obj: Switcher, object: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus-out", callback: (($obj: Switcher, object: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus-out", object: Gtk.DirectionType): void
    on(sigName: "move-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-added", callback: (($obj: Switcher, child: Gtk.Widget, pageNum: number) => void)): number
    connect_after(sigName: "page-added", callback: (($obj: Switcher, child: Gtk.Widget, pageNum: number) => void)): number
    emit(sigName: "page-added", child: Gtk.Widget, pageNum: number): void
    on(sigName: "page-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-removed", callback: (($obj: Switcher, child: Gtk.Widget, pageNum: number) => void)): number
    connect_after(sigName: "page-removed", callback: (($obj: Switcher, child: Gtk.Widget, pageNum: number) => void)): number
    emit(sigName: "page-removed", child: Gtk.Widget, pageNum: number): void
    on(sigName: "page-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-reordered", callback: (($obj: Switcher, child: Gtk.Widget, pageNum: number) => void)): number
    connect_after(sigName: "page-reordered", callback: (($obj: Switcher, child: Gtk.Widget, pageNum: number) => void)): number
    emit(sigName: "page-reordered", child: Gtk.Widget, pageNum: number): void
    on(sigName: "page-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reorder-tab", callback: (($obj: Switcher, object: Gtk.DirectionType, p0: boolean) => boolean)): number
    connect_after(sigName: "reorder-tab", callback: (($obj: Switcher, object: Gtk.DirectionType, p0: boolean) => boolean)): number
    emit(sigName: "reorder-tab", object: Gtk.DirectionType, p0: boolean): void
    on(sigName: "reorder-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reorder-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reorder-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "select-page", callback: (($obj: Switcher, object: boolean) => boolean)): number
    connect_after(sigName: "select-page", callback: (($obj: Switcher, object: boolean) => boolean)): number
    emit(sigName: "select-page", object: boolean): void
    on(sigName: "select-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "select-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "select-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "switch-page", callback: (($obj: Switcher, page: Gtk.Widget, pageNum: number) => void)): number
    connect_after(sigName: "switch-page", callback: (($obj: Switcher, page: Gtk.Widget, pageNum: number) => void)): number
    emit(sigName: "switch-page", page: Gtk.Widget, pageNum: number): void
    on(sigName: "switch-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "switch-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "switch-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Switcher) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Switcher, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Switcher, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Switcher) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Switcher, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Switcher, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "map", callback: (($obj: Switcher) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Switcher, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Switcher, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Switcher, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Switcher, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Switcher, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Switcher, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Switcher) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "show", callback: (($obj: Switcher) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Switcher, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Switcher, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Switcher) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Switcher) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Switcher) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::switcher-style", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switcher-style", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::switcher-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::switcher-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::switcher-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-pos", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-pos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-pos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-pos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-reorderable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-reorderable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-popup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group-name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pages", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pages", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scrollable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scrollable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scrollable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scrollable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-border", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-tabs", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Switcher_ConstructProps)
    _init (config?: Switcher_ConstructProps): void
    static new(): Switcher
    static $gtype: GObject.Type
}
export abstract class DockBarClass {
    /* Fields of Gdl.DockBarClass */
    parentClass: Gtk.BoxClass
    static name: string
}
export class DockBarPrivate {
    static name: string
}
export abstract class DockClass {
    /* Fields of Gdl.DockClass */
    layoutChanged: any
    static name: string
}
export abstract class DockItemButtonImageClass {
    /* Fields of Gdl.DockItemButtonImageClass */
    parentClass: Gtk.WidgetClass
    static name: string
}
export abstract class DockItemClass {
    /* Fields of Gdl.DockItemClass */
    parentClass: DockObjectClass
    priv: DockItemClassPrivate
    setOrientation: any
    dockDragBegin: any
    dockDragMotion: any
    dockDragEnd: any
    moveFocusChild: any
    /* Methods of Gdl.DockItemClass */
    setHasGrip(hasGrip: boolean): void
    static name: string
}
export class DockItemClassPrivate {
    static name: string
}
export abstract class DockItemGripClass {
    /* Fields of Gdl.DockItemGripClass */
    parentClass: any
    static name: string
}
export class DockItemGripPrivate {
    static name: string
}
export class DockItemPrivate {
    static name: string
}
export abstract class DockLayoutClass {
    /* Fields of Gdl.DockLayoutClass */
    gObjectClass: GObject.ObjectClass
    static name: string
}
export class DockLayoutPrivate {
    static name: string
}
export abstract class DockMasterClass {
    /* Fields of Gdl.DockMasterClass */
    parentClass: GObject.ObjectClass
    layoutChanged: any
    static name: string
}
export class DockMasterPrivate {
    static name: string
}
export abstract class DockNotebookClass {
    /* Fields of Gdl.DockNotebookClass */
    parentClass: DockItemClass
    priv: DockNotebookClassPrivate
    static name: string
}
export class DockNotebookClassPrivate {
    static name: string
}
export class DockNotebookPrivate {
    static name: string
}
export abstract class DockObjectClass {
    /* Fields of Gdl.DockObjectClass */
    parentClass: any
    priv: DockObjectClassPrivate
    detach: any
    reduce: any
    dockRequest: any
    dock: any
    reorder: any
    present: any
    childPlacement: any
    static name: string
}
export class DockObjectClassPrivate {
    static name: string
}
export class DockObjectPrivate {
    static name: string
}
export abstract class DockPanedClass {
    /* Fields of Gdl.DockPanedClass */
    parentClass: DockItemClass
    static name: string
}
export class DockPanedPrivate {
    static name: string
}
export abstract class DockPlaceholderClass {
    /* Fields of Gdl.DockPlaceholderClass */
    parentClass: DockObjectClass
    static name: string
}
export class DockPlaceholderPrivate {
    static name: string
}
export class DockPrivate {
    static name: string
}
export class DockRequest {
    /* Fields of Gdl.DockRequest */
    applicant: DockObject
    target: DockObject
    position: DockPlacement
    rect: cairo.RectangleInt
    extra: any
    static name: string
}
export abstract class DockTablabelClass {
    /* Fields of Gdl.DockTablabelClass */
    parentClass: any
    buttonPressedHandle: any
    static name: string
}
export abstract class PreviewWindowClass {
    /* Fields of Gdl.PreviewWindowClass */
    parentClass: Gtk.WindowClass
    static name: string
}
export abstract class SwitcherClass {
    /* Fields of Gdl.SwitcherClass */
    parentClass: any
    priv: SwitcherClassPrivate
    static name: string
}
export class SwitcherClassPrivate {
    static name: string
}
export class SwitcherPrivate {
    static name: string
}
}