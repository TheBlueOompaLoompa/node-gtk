/**
 * Xkl-1.0
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Xkl {

export enum EngineListenModes {
    MANAGE_WINDOW_STATES,
    TRACK_KEYBOARD_STATE,
    MANAGE_LAYOUTS,
}
export enum EngineStateChange {
    GROUP_CHANGED,
    INDICATORS_CHANGED,
}
export enum EngineFeatures {
    CAN_TOGGLE_INDICATORS,
    CAN_OUTPUT_CONFIG_AS_ASCII,
    CAN_OUTPUT_CONFIG_AS_BINARY,
    MULTIPLE_LAYOUTS_SUPPORTED,
    REQUIRES_MANUAL_LAYOUT_MANAGEMENT,
    DEVICE_DISCOVERY,
}
export const MAX_CI_DESC_LENGTH: number
export const MAX_CI_NAME_LENGTH: number
export const MAX_CI_SHORT_DESC_LENGTH: number
export function getCountryName(code: string): string
export function getLanguageName(code: string): string
export function getLastError(): string
export function restoreNamesProp(engine: Engine): boolean
export function setDebugLevel(level: number): void
export interface ConfigItemProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, data?: object | null): void
}
export interface TwoConfigItemsProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, subitem: ConfigItem, data?: object | null): void
}
export interface ConfigItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class ConfigItem {
    /* Fields of Xkl.ConfigItem */
    parent: GObject.Object
    name: number[]
    shortDescription: number[]
    description: number[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xkl.ConfigItem */
    getDescription(): string
    getName(): string
    getShortDescription(): string
    setDescription(description?: string | null): void
    setName(name?: string | null): void
    setShortDescription(shortDescription?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: ConfigItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigItem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConfigItem_ConstructProps)
    _init (config?: ConfigItem_ConstructProps): void
    static new(): ConfigItem
    static $gtype: GObject.Type
}
export interface ConfigRec_ConstructProps extends GObject.Object_ConstructProps {
}
export class ConfigRec {
    /* Fields of Xkl.ConfigRec */
    parent: GObject.Object
    model: string
    layouts: string[]
    variants: string[]
    options: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xkl.ConfigRec */
    activate(engine: Engine): boolean
    equals(data2: ConfigRec): boolean
    getFromBackup(engine: Engine): boolean
    getFromRootWindowProperty(rulesAtomName: xlib.Atom, rulesFileOut: string, engine: Engine): boolean
    getFromServer(engine: Engine): boolean
    reset(): void
    setLayouts(newLayouts: string[]): void
    setModel(newModel: string): void
    setOptions(newOptions: string[]): void
    setToRootWindowProperty(rulesAtomName: xlib.Atom, rulesFile: string, engine: Engine): boolean
    setVariants(newVariants: string[]): void
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
    connect(sigName: "notify", callback: (($obj: ConfigRec, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigRec, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConfigRec_ConstructProps)
    _init (config?: ConfigRec_ConstructProps): void
    static new(): ConfigRec
    static writeToFile(engine: Engine, fileName: string, data: ConfigRec, binary: boolean): boolean
    static $gtype: GObject.Type
}
export interface ConfigRegistry_ConstructProps extends GObject.Object_ConstructProps {
    engine?: Engine
}
export class ConfigRegistry {
    /* Properties of Xkl.ConfigRegistry */
    /* Fields of Xkl.ConfigRegistry */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xkl.ConfigRegistry */
    findLayout(item: ConfigItem): boolean
    findModel(item: ConfigItem): boolean
    findOption(optionGroupName: string, item: ConfigItem): boolean
    findOptionGroup(item: ConfigItem): boolean
    findVariant(layoutName: string, item: ConfigItem): boolean
    foreachCountry(func: ConfigItemProcessFunc): void
    foreachCountryVariant(countryCode: string, func: TwoConfigItemsProcessFunc): void
    foreachLanguage(func: ConfigItemProcessFunc): void
    foreachLanguageVariant(languageCode: string, func: TwoConfigItemsProcessFunc): void
    foreachLayout(func: ConfigItemProcessFunc): void
    foreachLayoutVariant(layoutName: string, func: ConfigItemProcessFunc): void
    foreachModel(func: ConfigItemProcessFunc): void
    foreachOption(optionGroupName: string, func: ConfigItemProcessFunc): void
    foreachOptionGroup(func: ConfigItemProcessFunc): void
    load(ifExtrasNeeded: boolean): boolean
    searchByPattern(pattern: string, func: TwoConfigItemsProcessFunc): void
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
    connect(sigName: "notify", callback: (($obj: ConfigRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigRegistry, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConfigRegistry_ConstructProps)
    _init (config?: ConfigRegistry_ConstructProps): void
    static getInstance(engine: Engine): ConfigRegistry
    static $gtype: GObject.Type
}
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
    display?: object
}
export class Engine {
    /* Properties of Xkl.Engine */
    readonly backendName: string
    readonly defaultGroup: number
    readonly features: EngineFeatures
    readonly indicatorsHandling: boolean
    readonly maxNumGroups: number
    readonly numGroups: number
    readonly secondaryGroupsMask: number
    /* Fields of Xkl.Engine */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xkl.Engine */
    allowOneSwitchToSecondaryGroup(): void
    backupNamesProp(): boolean
    deleteState(win: xlib.Window): void
    filterEvents(evt: xlib.XEvent): number
    getBackendName(): string
    getCurrentState(): State
    getCurrentWindow(): xlib.Window
    getCurrentWindowGroup(): number
    getDefaultGroup(): number
    getFeatures(): number
    getGroupsNames(): string[]
    getIndicatorsHandling(): boolean
    getIndicatorsNames(): string[]
    getMaxNumGroups(): number
    getNextGroup(): number
    getNumGroups(): number
    getPrevGroup(): number
    getSecondaryGroupsMask(): number
    getState(win: xlib.Window, stateOut: State): boolean
    getWindowTitle(win: xlib.Window): string
    grabKey(keycode: number, modifiers: number): boolean
    isGroupPerToplevelWindow(): boolean
    isWindowFromSameToplevelWindow(win1: xlib.Window, win2: xlib.Window): boolean
    isWindowTransparent(win: xlib.Window): boolean
    lockGroup(group: number): void
    pauseListen(): number
    resumeListen(): number
    saveState(win: xlib.Window, state: State): void
    setDefaultGroup(group: number): void
    setGroupPerToplevelWindow(isGlobal: boolean): void
    setIndicatorsHandling(whetherHandle: boolean): void
    setSecondaryGroupsMask(mask: number): void
    setWindowTransparent(win: xlib.Window, transparent: boolean): void
    startListen(flags: number): number
    stopListen(flags: number): number
    ungrabKey(keycode: number, modifiers: number): boolean
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
    /* Virtual methods of Xkl.Engine */
    vfuncConfigNotify?(): void
    vfuncNewDeviceNotify?(): void
    vfuncNewWindowNotify?(win: xlib.Window, parent: xlib.Window): number
    vfuncStateNotify?(changeType: EngineStateChange, group: number, restore: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Xkl.Engine */
    connect(sigName: "X-config-changed", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "X-config-changed", callback: (($obj: Engine) => void)): number
    emit(sigName: "X-config-changed"): void
    on(sigName: "X-config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "X-config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "X-config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "X-new-device", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "X-new-device", callback: (($obj: Engine) => void)): number
    emit(sigName: "X-new-device"): void
    on(sigName: "X-new-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "X-new-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "X-new-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "X-state-changed", callback: (($obj: Engine, object: EngineStateChange, p0: number, p1: boolean) => void)): number
    connect_after(sigName: "X-state-changed", callback: (($obj: Engine, object: EngineStateChange, p0: number, p1: boolean) => void)): number
    emit(sigName: "X-state-changed", object: EngineStateChange, p0: number, p1: boolean): void
    on(sigName: "X-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "X-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "X-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-toplevel-window", callback: (($obj: Engine, object: number, p0: number) => number)): number
    connect_after(sigName: "new-toplevel-window", callback: (($obj: Engine, object: number, p0: number) => number)): number
    emit(sigName: "new-toplevel-window", object: number, p0: number): void
    on(sigName: "new-toplevel-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-toplevel-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-toplevel-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backendName", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backendName", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backendName", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backendName", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backendName", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-group", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-group", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::features", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indicators-handling", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicators-handling", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indicators-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indicators-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indicators-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secondary-groups-mask", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-groups-mask", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    static iNTLONGLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static vOIDENUMINTBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static getInstance(display: xlib.Display): Engine
    static $gtype: GObject.Type
}
export abstract class ConfigItemClass {
    /* Fields of Xkl.ConfigItemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ConfigRecClass {
    /* Fields of Xkl.ConfigRecClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ConfigRegistryClass {
    /* Fields of Xkl.ConfigRegistryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ConfigRegistryPrivate {
    static name: string
}
export abstract class EngineClass {
    /* Fields of Xkl.EngineClass */
    parentClass: GObject.ObjectClass
    configNotify: any
    newWindowNotify: any
    stateNotify: any
    newDeviceNotify: any
    static name: string
}
export class EnginePrivate {
    static name: string
}
export class State {
    /* Fields of Xkl.State */
    group: number
    indicators: number
    static name: string
}
}