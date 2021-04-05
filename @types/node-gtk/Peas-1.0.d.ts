/**
 * Peas-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="GIRepository-2.0.d.ts" />

declare namespace Peas {

export enum PluginInfoError {
    LOADING_FAILED,
    LOADER_NOT_FOUND,
    DEP_NOT_FOUND,
    DEP_LOADING_FAILED,
}
export function cclosureMarshalVOIDBOXEDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function pluginInfoErrorQuark(): GLib.Quark
export interface ExtensionSetForeachFunc {
    (set: ExtensionSet, info: PluginInfo, exten: Extension, data?: object | null): void
}
export interface FactoryFunc {
    (parameters: GObject.Parameter[]): GObject.Object
}
export class Activatable {
    /* Properties of Peas.Activatable */
    /* Methods of Peas.Activatable */
    activate(): void
    deactivate(): void
    updateState(): void
    /* Virtual methods of Peas.Activatable */
    vfuncActivate?(): void
    vfuncDeactivate?(): void
    vfuncUpdateState?(): void
    static name: string
}
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
    loadedPlugins?: string[]
    nonglobalLoaders?: boolean
}
export class Engine {
    /* Properties of Peas.Engine */
    loadedPlugins: string[]
    readonly pluginList: object
    /* Fields of Peas.Engine */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Peas.Engine */
    addSearchPath(moduleDir: string, dataDir?: string | null): void
    createExtension(info: PluginInfo, extensionType: GObject.Type, propNames: string[], propValues: any): Extension
    enableLoader(loaderName: string): void
    garbageCollect(): void
    getLoadedPlugins(): string[]
    getPluginInfo(pluginName: string): PluginInfo
    getPluginList(): PluginInfo[]
    loadPlugin(info: PluginInfo): boolean
    prependSearchPath(moduleDir: string, dataDir?: string | null): void
    providesExtension(info: PluginInfo, extensionType: GObject.Type): boolean
    rescanPlugins(): void
    setLoadedPlugins(pluginNames?: string[] | null): void
    unloadPlugin(info: PluginInfo): boolean
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
    /* Virtual methods of Peas.Engine */
    vfuncLoadPlugin?(info: PluginInfo): void
    vfuncUnloadPlugin?(info: PluginInfo): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Peas.Engine */
    connect(sigName: "load-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    connect_after(sigName: "load-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    emit(sigName: "load-plugin", info: PluginInfo): void
    on(sigName: "load-plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unload-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    connect_after(sigName: "unload-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    emit(sigName: "unload-plugin", info: PluginInfo): void
    on(sigName: "unload-plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unload-plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unload-plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loaded-plugins", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded-plugins", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin-list", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-list", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Engine
    static newWithNonglobalLoaders(): Engine
    static getDefault(): Engine
    static $gtype: GObject.Type
}
export interface ExtensionBase_ConstructProps extends GObject.Object_ConstructProps {
    pluginInfo?: PluginInfo
}
export class ExtensionBase {
    /* Properties of Peas.ExtensionBase */
    readonly dataDir: string
    /* Fields of Peas.ExtensionBase */
    parent: GObject.Object
    priv: ExtensionBasePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Peas.ExtensionBase */
    getDataDir(): string
    getPluginInfo(): PluginInfo
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
    connect(sigName: "notify", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-dir", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-dir", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExtensionBase_ConstructProps)
    _init (config?: ExtensionBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtensionSet_ConstructProps extends GObject.Object_ConstructProps {
    constructProperties?: object
    engine?: Engine
    extensionType?: GObject.Type
}
export class ExtensionSet {
    /* Properties of Peas.ExtensionSet */
    /* Fields of Peas.ExtensionSet */
    parent: GObject.Object
    priv: ExtensionSetPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Peas.ExtensionSet */
    foreach(func: ExtensionSetForeachFunc): void
    getExtension(info: PluginInfo): Extension
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
    /* Virtual methods of Peas.ExtensionSet */
    vfuncCall?(methodName: string, args: GIRepository.Argument): boolean
    vfuncExtensionAdded?(info: PluginInfo, exten: Extension): void
    vfuncExtensionRemoved?(info: PluginInfo, exten: Extension): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Peas.ExtensionSet */
    connect(sigName: "extension-added", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    connect_after(sigName: "extension-added", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    emit(sigName: "extension-added", info: PluginInfo, exten: GObject.Object): void
    on(sigName: "extension-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "extension-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "extension-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "extension-removed", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    connect_after(sigName: "extension-removed", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    emit(sigName: "extension-removed", info: PluginInfo, exten: GObject.Object): void
    on(sigName: "extension-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "extension-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "extension-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ExtensionSet_ConstructProps)
    _init (config?: ExtensionSet_ConstructProps): void
    static new(engine: Engine | null, extenType: GObject.Type, propNames: string[], propValues: any): ExtensionSet
    static $gtype: GObject.Type
}
export interface ObjectModule_ConstructProps extends GObject.TypeModule_ConstructProps {
    localLinkage?: boolean
    moduleName?: string
    path?: string
    resident?: boolean
    symbol?: string
}
export class ObjectModule {
    /* Properties of Peas.ObjectModule */
    /* Fields of Peas.ObjectModule */
    parent: GObject.TypeModule
    priv: ObjectModulePrivate
    /* Fields of GObject.TypeModule */
    parentInstance: GObject.Object
    useCount: number
    typeInfos: object[]
    interfaceInfos: object[]
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Peas.ObjectModule */
    registerExtensionFactory(extenType: GObject.Type, factoryFunc: FactoryFunc): void
    registerExtensionType(extenType: GObject.Type, implType: GObject.Type): void
    /* Methods of GObject.TypeModule */
    addInterface(instanceType: GObject.Type, interfaceType: GObject.Type, interfaceInfo: GObject.InterfaceInfo): void
    registerEnum(name: string, constStaticValues: GObject.EnumValue): GObject.Type
    registerFlags(name: string, constStaticValues: GObject.FlagsValue): GObject.Type
    registerType(parentType: GObject.Type, typeName: string, typeInfo: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    setName(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject.TypePlugin */
    completeInterfaceInfo(instanceType: GObject.Type, interfaceType: GObject.Type, info: GObject.InterfaceInfo): void
    completeTypeInfo(gType: GObject.Type, info: GObject.TypeInfo, valueTable: GObject.TypeValueTable): void
    /* Virtual methods of GObject.TypeModule */
    vfuncLoad?(): boolean
    vfuncUnload?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectModule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectModule, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectModule_ConstructProps)
    _init (config?: ObjectModule_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ActivatableInterface {
    /* Fields of Peas.ActivatableInterface */
    gIface: GObject.TypeInterface
    activate: any
    deactivate: any
    updateState: any
    static name: string
}
export abstract class EngineClass {
    /* Fields of Peas.EngineClass */
    parentClass: GObject.ObjectClass
    loadPlugin: any
    unloadPlugin: any
    static name: string
}
export class EnginePrivate {
    static name: string
}
export abstract class ExtensionBaseClass {
    /* Fields of Peas.ExtensionBaseClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ExtensionBasePrivate {
    static name: string
}
export abstract class ExtensionSetClass {
    /* Fields of Peas.ExtensionSetClass */
    parentClass: GObject.ObjectClass
    call: any
    extensionAdded: any
    extensionRemoved: any
    static name: string
}
export class ExtensionSetPrivate {
    static name: string
}
export abstract class ObjectModuleClass {
    /* Fields of Peas.ObjectModuleClass */
    parentClass: GObject.TypeModuleClass
    static name: string
}
export class ObjectModulePrivate {
    static name: string
}
export class PluginInfo {
    /* Methods of Peas.PluginInfo */
    getAuthors(): string[]
    getCopyright(): string
    getDataDir(): string
    getDependencies(): string[]
    getDescription(): string
    getExternalData(key: string): string
    getHelpUri(): string
    getIconName(): string
    getModuleDir(): string
    getModuleName(): string
    getName(): string
    getSettings(schemaId?: string | null): Gio.Settings
    getVersion(): string
    getWebsite(): string
    hasDependency(moduleName: string): boolean
    isAvailable(): boolean
    isBuiltin(): boolean
    isHidden(): boolean
    isLoaded(): boolean
    static name: string
    static errorQuark(): GLib.Quark
}
type Extension = GObject.Object
}