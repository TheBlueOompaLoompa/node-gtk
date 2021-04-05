/**
 * RygelCore-2.6
 */

/// <reference types="node" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gee-0.8.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GUPnP-1.2.d.ts" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="GSSDP-1.2.d.ts" />

declare namespace RygelCore {

export enum LogLevel {
    INVALID,
    ERROR,
    CRITICAL,
    WARNING,
    INFO,
    DEFAULT,
    DEBUG,
}
export enum ConfigurationEntry {
    INTERFACE,
    PORT,
    TRANSCODING,
    ALLOW_UPLOAD,
    ALLOW_DELETION,
    LOG_LEVELS,
    PLUGIN_PATH,
    VIDEO_UPLOAD_FOLDER,
    MUSIC_UPLOAD_FOLDER,
    PICTURE_UPLOAD_FOLDER,
}
export enum SectionEntry {
    TITLE,
    ENABLED,
}
export enum ConfigurationError {
    NO_VALUE_SET,
    VALUE_OUT_OF_RANGE,
}
export enum CmdlineConfigError {
    VERSION_ONLY,
}
export enum PluginCapabilities {
    NONE,
    IMAGE_UPLOAD,
    VIDEO_UPLOAD,
    AUDIO_UPLOAD,
    UPLOAD,
    TRACK_CHANGES,
    CREATE_CONTAINERS,
    DIAGNOSTICS,
    ENERGY_MANAGEMENT,
}
export function getPrettyHostName(): string
export class DBusInterface {
    /* Methods of RygelCore.DBusInterface */
    shutdown(): void
    /* Virtual methods of RygelCore.DBusInterface */
    vfuncShutdown?(): void
    static name: string
}
export class DBusAclProvider {
    /* Methods of RygelCore.DBusAclProvider */
    isAllowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean
    /* Virtual methods of RygelCore.DBusAclProvider */
    vfuncIsAllowed?(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncIsAllowedFinish?(res: Gio.AsyncResult): boolean
    static name: string
}
export class Configuration {
    /* Methods of RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Virtual methods of RygelCore.Configuration */
    vfuncGetInterface?(): string
    vfuncGetInterfaces?(): string[]
    vfuncGetPort?(): number
    vfuncGetTranscoding?(): boolean
    vfuncGetAllowUpload?(): boolean
    vfuncGetAllowDeletion?(): boolean
    vfuncGetLogLevels?(): string
    vfuncGetPluginPath?(): string
    vfuncGetEnginePath?(): string
    vfuncGetMediaEngine?(): string
    vfuncGetVideoUploadFolder?(): string | null
    vfuncGetMusicUploadFolder?(): string | null
    vfuncGetPictureUploadFolder?(): string | null
    vfuncGetEnabled?(section: string): boolean
    vfuncGetTitle?(section: string): string
    vfuncGetString?(section: string, key: string): string
    vfuncGetStringList?(section: string, key: string): Gee.ArrayList
    vfuncGetInt?(section: string, key: string, min: number, max: number): number
    vfuncGetIntList?(section: string, key: string): Gee.ArrayList
    vfuncGetBool?(section: string, key: string): boolean
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class StateMachine {
    /* Properties of RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Methods of RygelCore.StateMachine */
    run(callback?: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
    /* Virtual methods of RygelCore.StateMachine */
    vfuncRun?(callback?: Gio.AsyncReadyCallback | null): void
    vfuncRunFinish?(res: Gio.AsyncResult): void
    vfuncGetCancellable?(): Gio.Cancellable
    vfuncSetCancellable?(value: Gio.Cancellable): void
    /* Signals of RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    connect_after(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    emit(sigName: "completed"): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface ConnectionManager_ConstructProps extends GUPnP.Service_ConstructProps {
}
export class ConnectionManager {
    /* Properties of GUPnP.Service */
    /* Properties of GUPnP.ServiceInfo */
    /* Fields of RygelCore.ConnectionManager */
    sinkProtocolInfo: string
    connectionIds: string
    sourceProtocolInfo: string
    rcsId: number
    avTransportId: number
    direction: string
    /* Fields of GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GUPnP.ServiceInfo */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.ConnectionManager */
    getCurrentProtocolInfo(): string
    /* Methods of GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.ConnectionManager */
    vfuncGetCurrentProtocolInfo?(): string
    /* Virtual methods of GUPnP.Service */
    vfuncActionInvoked?(action: GUPnP.ServiceAction): void
    vfuncQueryVariable?(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    on(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify-failed", callback: (($obj: ConnectionManager, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: ConnectionManager, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    on(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    on(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConnectionManager_ConstructProps)
    _init (config?: ConnectionManager_ConstructProps): void
    static new(): ConnectionManager
    static $gtype: GObject.Type
}
export interface BasicManagement_ConstructProps extends GUPnP.Service_ConstructProps {
    maxHistorySize?: number
}
export class BasicManagement {
    /* Properties of RygelCore.BasicManagement */
    maxHistorySize: number
    /* Properties of GUPnP.Service */
    /* Properties of GUPnP.ServiceInfo */
    /* Fields of RygelCore.BasicManagement */
    deviceStatus: string
    /* Fields of GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GUPnP.ServiceInfo */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.BasicManagement */
    getMaxHistorySize(): number
    setMaxHistorySize(value: number): void
    /* Methods of GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GUPnP.Service */
    vfuncActionInvoked?(action: GUPnP.ServiceAction): void
    vfuncQueryVariable?(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    on(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify-failed", callback: (($obj: BasicManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: BasicManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    on(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    on(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BasicManagement_ConstructProps)
    _init (config?: BasicManagement_ConstructProps): void
    static new(): BasicManagement
    static $gtype: GObject.Type
}
export interface DescriptionFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class DescriptionFile {
    /* Fields of RygelCore.DescriptionFile */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.DescriptionFile */
    setDeviceType(deviceType: string): void
    setModelDescription(modelDescription: string): void
    setModelName(modelName: string): void
    setModelNumber(modelNumber: string): void
    setFriendlyName(friendlyName: string): void
    getFriendlyName(): string
    setUdn(udn: string): void
    getUdn(): string | null
    setSerialNumber(serial: string): void
    setDlnaCaps(capabilities: PluginCapabilities): void
    clearServiceList(): void
    addDlnaDocElement(dlnadocXpath: string, dlnadocNonXpath: string, devCap: string): void
    removeDlnaDocElement(dlnadocXpath: string): void
    addService(deviceName: string, resourceInfo: ResourceInfo): void
    clearIconList(): void
    addIcon(deviceName: string, iconInfo: IconInfo, url: string): void
    modifyServiceType(oldType: string, newType: string): void
    save(path: string): void
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
    connect(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DescriptionFile_ConstructProps)
    _init (config?: DescriptionFile_ConstructProps): void
    static new(templateFile: string): DescriptionFile
    static fromXmlDocument(doc: GUPnP.XMLDoc): DescriptionFile
    static $gtype: GObject.Type
}
export class DLNAProfile {
    /* Fields of RygelCore.DLNAProfile */
    refCount: number
    mime: string
    name: string
    static name: string
    static new(name: string, mime: string): DLNAProfile
    constructor(name: string, mime: string)
    static new(name: string, mime: string): DLNAProfile
    static compareByName(a: DLNAProfile, b: DLNAProfile): number
}
export interface EnergyManagement_ConstructProps extends GUPnP.Service_ConstructProps {
}
export class EnergyManagement {
    /* Properties of GUPnP.Service */
    /* Properties of GUPnP.ServiceInfo */
    /* Fields of RygelCore.EnergyManagement */
    /* Fields of GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GUPnP.ServiceInfo */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GUPnP.Service */
    vfuncActionInvoked?(action: GUPnP.ServiceAction): void
    vfuncQueryVariable?(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: EnergyManagement, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: EnergyManagement, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    on(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify-failed", callback: (($obj: EnergyManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: EnergyManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    on(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-variable", callback: (($obj: EnergyManagement, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: EnergyManagement, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    on(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EnergyManagement_ConstructProps)
    _init (config?: EnergyManagement_ConstructProps): void
    static new(): EnergyManagement
    static $gtype: GObject.Type
}
export interface RootDevice_ConstructProps extends GUPnP.RootDevice_ConstructProps {
    services?: Gee.ArrayList
}
export class RootDevice {
    /* Properties of RygelCore.RootDevice */
    services: Gee.ArrayList
    /* Properties of GUPnP.RootDevice */
    available: boolean
    /* Properties of GUPnP.Device */
    /* Properties of GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of RygelCore.RootDevice */
    /* Fields of GUPnP.RootDevice */
    parentInstance: GUPnP.Device
    /* Fields of GUPnP.Device */
    /* Fields of GUPnP.DeviceInfo */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.RootDevice */
    getServices(): Gee.ArrayList
    /* Methods of GUPnP.RootDevice */
    getAvailable(): boolean
    getDescriptionDir(): string
    getDescriptionPath(): string
    getRelativeLocation(): string
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    setAvailable(available: boolean): void
    /* Methods of GUPnP.DeviceInfo */
    getContext(): GUPnP.Context
    getDescriptionValue(element: string): string
    getDevice(type: string): GUPnP.DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    getLocation(): string
    getManufacturer(): string
    getManufacturerUrl(): string
    getModelDescription(): string
    getModelName(): string
    getModelNumber(): string
    getModelUrl(): string
    getPresentationUrl(): string
    getResourceFactory(): GUPnP.ResourceFactory
    getSerialNumber(): string
    getService(type: string): GUPnP.ServiceInfo
    getUdn(): string
    getUpc(): string
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[]
    listDevices(): GUPnP.DeviceInfo[]
    listDlnaCapabilities(): string[]
    listDlnaDeviceClassIdentifier(): string[]
    listServiceTypes(): string[]
    listServices(): GUPnP.ServiceInfo[]
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
    /* Virtual methods of GUPnP.DeviceInfo */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    static new(context: GUPnP.Context, plugin: Plugin, descriptionDoc: GUPnP.XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice
    static $gtype: GObject.Type
}
export interface RootDeviceFactory_ConstructProps extends GObject.Object_ConstructProps {
    context?: GUPnP.Context
}
export class RootDeviceFactory {
    /* Properties of RygelCore.RootDeviceFactory */
    /* Fields of RygelCore.RootDeviceFactory */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.RootDeviceFactory */
    create(plugin: Plugin): RootDevice
    getContext(): GUPnP.Context
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
    connect(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RootDeviceFactory_ConstructProps)
    _init (config?: RootDeviceFactory_ConstructProps): void
    static new(context: GUPnP.Context): RootDeviceFactory
    static $gtype: GObject.Type
}
export interface LogHandler_ConstructProps extends GObject.Object_ConstructProps {
}
export class LogHandler {
    /* Fields of RygelCore.LogHandler */
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
    connect(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LogHandler_ConstructProps)
    _init (config?: LogHandler_ConstructProps): void
    static getDefault(): LogHandler
    static $gtype: GObject.Type
}
export interface MetaConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class MetaConfig {
    /* Fields of RygelCore.MetaConfig */
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
    /* Methods of RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetaConfig_ConstructProps)
    _init (config?: MetaConfig_ConstructProps): void
    static new(): MetaConfig
    static getDefault(): MetaConfig
    static registerConfiguration(config: Configuration): void
    static cleanup(): void
    static $gtype: GObject.Type
}
export interface PluginLoader_ConstructProps extends RecursiveModuleLoader_ConstructProps {
}
export class PluginLoader {
    /* Properties of RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of RygelCore.PluginLoader */
    /* Fields of RygelCore.RecursiveModuleLoader */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.PluginLoader */
    pluginDisabled(name: string): boolean
    addPlugin(plugin: Plugin): void
    getPluginByName(name: string): Plugin | null
    listPlugins(): Gee.Collection
    /* Methods of RygelCore.RecursiveModuleLoader */
    loadModules(): void
    loadModulesSync(cancellable?: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void
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
    /* Virtual methods of RygelCore.RecursiveModuleLoader */
    vfuncLoadModuleFromFile?(file: Gio.File): boolean
    vfuncLoadModuleFromInfo?(info: PluginInformation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.PluginLoader */
    connect(sigName: "plugin-available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    connect_after(sigName: "plugin-available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    emit(sigName: "plugin-available", plugin: Plugin): void
    on(sigName: "plugin-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "plugin-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "plugin-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PluginLoader_ConstructProps)
    _init (config?: PluginLoader_ConstructProps): void
    static new(): PluginLoader
    static $gtype: GObject.Type
}
export interface RecursiveModuleLoader_ConstructProps extends GObject.Object_ConstructProps {
    basePath?: string
}
export class RecursiveModuleLoader {
    /* Properties of RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of RygelCore.RecursiveModuleLoader */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.RecursiveModuleLoader */
    loadModules(): void
    loadModulesSync(cancellable?: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void
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
    /* Virtual methods of RygelCore.RecursiveModuleLoader */
    vfuncLoadModuleFromFile?(file: Gio.File): boolean
    vfuncLoadModuleFromInfo?(info: PluginInformation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecursiveModuleLoader_ConstructProps)
    _init (config?: RecursiveModuleLoader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GUPnP.ResourceFactory_ConstructProps {
    capabilities?: PluginCapabilities
    name?: string
    title?: string
    description?: string
    descPath?: string
    active?: boolean
    resourceInfos?: Gee.ArrayList
    iconInfos?: Gee.ArrayList
    defaultIcons?: Gee.ArrayList
}
export class Plugin {
    /* Properties of RygelCore.Plugin */
    capabilities: PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    /* Fields of RygelCore.Plugin */
    /* Fields of GUPnP.ResourceFactory */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.Plugin */
    addResource(resourceInfo: ResourceInfo): void
    addIcon(iconInfo: IconInfo): void
    applyHacks(device: RootDevice, descriptionPath: string): void
    getCapabilities(): PluginCapabilities
    setCapabilities(value: PluginCapabilities): void
    getName(): string
    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    getDescPath(): string
    getActive(): boolean
    setActive(value: boolean): void
    getResourceInfos(): Gee.ArrayList
    getIconInfos(): Gee.ArrayList
    getDefaultIcons(): Gee.ArrayList
    /* Methods of GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    /* Virtual methods of RygelCore.Plugin */
    vfuncApplyHacks?(device: RootDevice, descriptionPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin
    static $gtype: GObject.Type
}
export class ResourceInfo {
    /* Fields of RygelCore.ResourceInfo */
    refCount: number
    upnpType: string
    upnpId: string
    descriptionPath: string
    type: GObject.Type
    static name: string
    static new(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.Type): ResourceInfo
    constructor(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.Type)
    static new(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.Type): ResourceInfo
}
export interface MediaDevice_ConstructProps extends GObject.Object_ConstructProps {
    plugin?: Plugin
    title?: string
    capabilities?: PluginCapabilities
}
export class MediaDevice {
    /* Properties of RygelCore.MediaDevice */
    plugin: Plugin
    /* Fields of RygelCore.MediaDevice */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.MediaDevice */
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): Plugin
    setPlugin(value: Plugin): void
    getTitle(): string
    getCapabilities(): PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaDevice_ConstructProps)
    _init (config?: MediaDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseConfiguration_ConstructProps extends GObject.Object_ConstructProps {
}
export class BaseConfiguration {
    /* Fields of RygelCore.BaseConfiguration */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.BaseConfiguration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
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
    /* Methods of RygelCore.Configuration */
    /* Virtual methods of RygelCore.BaseConfiguration */
    vfuncGetInterface?(): string
    vfuncGetInterfaces?(): string[]
    vfuncGetPort?(): number
    vfuncGetTranscoding?(): boolean
    vfuncGetAllowUpload?(): boolean
    vfuncGetAllowDeletion?(): boolean
    vfuncGetLogLevels?(): string
    vfuncGetPluginPath?(): string
    vfuncGetEnginePath?(): string
    vfuncGetMediaEngine?(): string
    vfuncGetVideoUploadFolder?(): string | null
    vfuncGetMusicUploadFolder?(): string | null
    vfuncGetPictureUploadFolder?(): string | null
    vfuncGetEnabled?(section: string): boolean
    vfuncGetTitle?(section: string): string
    vfuncGetString?(section: string, key: string): string
    vfuncGetStringList?(section: string, key: string): Gee.ArrayList
    vfuncGetInt?(section: string, key: string, min: number, max: number): number
    vfuncGetIntList?(section: string, key: string): Gee.ArrayList
    vfuncGetBool?(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseConfiguration_ConstructProps)
    _init (config?: BaseConfiguration_ConstructProps): void
    static new(): BaseConfiguration
    static $gtype: GObject.Type
}
export interface CmdlineConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class CmdlineConfig {
    /* Fields of RygelCore.CmdlineConfig */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.CmdlineConfig */
    getConfigFile(): string
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
    /* Methods of RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CmdlineConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CmdlineConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: CmdlineConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: CmdlineConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: CmdlineConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: CmdlineConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: CmdlineConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: CmdlineConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CmdlineConfig_ConstructProps)
    _init (config?: CmdlineConfig_ConstructProps): void
    static new(): CmdlineConfig
    static getDefault(): CmdlineConfig
    static parseArgs(args: string[]): void
    static $gtype: GObject.Type
}
export interface EnvironmentConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class EnvironmentConfig {
    /* Fields of RygelCore.EnvironmentConfig */
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
    /* Methods of RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EnvironmentConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EnvironmentConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: EnvironmentConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: EnvironmentConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: EnvironmentConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: EnvironmentConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: EnvironmentConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: EnvironmentConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EnvironmentConfig_ConstructProps)
    _init (config?: EnvironmentConfig_ConstructProps): void
    static new(): EnvironmentConfig
    static getDefault(): EnvironmentConfig
    static $gtype: GObject.Type
}
export interface UserConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserConfig {
    /* Fields of RygelCore.UserConfig */
    keyFile: GLib.KeyFile
    sysKeyFile: GLib.KeyFile
    keyFileMonitor: Gio.FileMonitor
    sysKeyFileMonitor: Gio.FileMonitor
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
    /* Methods of RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: UserConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: UserConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: UserConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: UserConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: UserConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: UserConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserConfig_ConstructProps)
    _init (config?: UserConfig_ConstructProps): void
    static new(localPath: string): UserConfig
    static withPaths(localPath: string, systemPath: string): UserConfig
    static getDefault(): UserConfig
    static $gtype: GObject.Type
}
export interface V1Hacks_ConstructProps extends GObject.Object_ConstructProps {
    deviceType?: string
    serviceTypes?: string[]
}
export class V1Hacks {
    /* Properties of RygelCore.V1Hacks */
    deviceType: string
    /* Fields of RygelCore.V1Hacks */
    descriptionPath: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.V1Hacks */
    applyOnDevice(device: RootDevice, templatePath?: string | null): void
    getDeviceType(): string
    setDeviceType(value: string): void
    getServiceTypes(): string[]
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
    connect(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: V1Hacks_ConstructProps)
    _init (config?: V1Hacks_ConstructProps): void
    static new(deviceType: string, serviceTypes: string[]): V1Hacks
    static $gtype: GObject.Type
}
export class IconInfo {
    /* Fields of RygelCore.IconInfo */
    refCount: number
    mimeType: string
    uri: string
    fileExtension: string
    size: number
    width: number
    height: number
    depth: number
    static name: string
    static new(mimeType: string, fileExtension: string): IconInfo
    constructor(mimeType: string, fileExtension: string)
    static new(mimeType: string, fileExtension: string): IconInfo
}
export class XMLUtils {
    /* Fields of RygelCore.XMLUtils */
    refCount: number
    static name: string
    static new(): XMLUtils
    constructor()
    static new(): XMLUtils
}
export class XMLUtilsIterator {
    /* Fields of RygelCore.XMLUtilsIterator */
    refCount: number
    /* Methods of RygelCore.XMLUtilsIterator */
    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
    static name: string
    static new(node?: object | null): XMLUtilsIterator
    constructor(node?: object | null)
    static new(node?: object | null): XMLUtilsIterator
}
export class XMLUtilsChildIterator {
    /* Fields of RygelCore.XMLUtilsChildIterator */
    /* Fields of RygelCore.XMLUtilsIterator */
    refCount: number
    /* Methods of RygelCore.XMLUtilsIterator */
    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
    static name: string
    static new(node?: object | null): XMLUtilsChildIterator
    constructor(node?: object | null)
    static new(node?: object | null): XMLUtilsChildIterator
}
export interface PluginInformation_ConstructProps extends GObject.Object_ConstructProps {
    modulePath?: string
    name?: string
    conflicts?: any
    moduleLoaded?: boolean
}
export class PluginInformation {
    /* Properties of RygelCore.PluginInformation */
    moduleLoaded: boolean
    /* Fields of RygelCore.PluginInformation */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.PluginInformation */
    getModulePath(): string
    getName(): string
    getConflicts(): any
    getModuleLoaded(): boolean
    setModuleLoaded(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PluginInformation_ConstructProps)
    _init (config?: PluginInformation_ConstructProps): void
    static newFromFile(file: Gio.File): PluginInformation
    static $gtype: GObject.Type
}
export abstract class ConnectionManagerClass {
    /* Fields of RygelCore.ConnectionManagerClass */
    getCurrentProtocolInfo: any
    static name: string
}
export class ConnectionManagerPrivate {
    static name: string
}
export abstract class BasicManagementClass {
    /* Fields of RygelCore.BasicManagementClass */
    static name: string
}
export class BasicManagementPrivate {
    static name: string
}
export abstract class DescriptionFileClass {
    /* Fields of RygelCore.DescriptionFileClass */
    static name: string
}
export class DescriptionFilePrivate {
    static name: string
}
export abstract class DLNAProfileClass {
    /* Fields of RygelCore.DLNAProfileClass */
    static name: string
}
export class DLNAProfilePrivate {
    static name: string
}
export abstract class EnergyManagementClass {
    /* Fields of RygelCore.EnergyManagementClass */
    static name: string
}
export class EnergyManagementPrivate {
    static name: string
}
export abstract class RootDeviceClass {
    /* Fields of RygelCore.RootDeviceClass */
    static name: string
}
export class RootDevicePrivate {
    static name: string
}
export abstract class RootDeviceFactoryClass {
    /* Fields of RygelCore.RootDeviceFactoryClass */
    static name: string
}
export class RootDeviceFactoryPrivate {
    static name: string
}
export abstract class LogHandlerClass {
    /* Fields of RygelCore.LogHandlerClass */
    static name: string
}
export class LogHandlerPrivate {
    static name: string
}
export abstract class MetaConfigClass {
    /* Fields of RygelCore.MetaConfigClass */
    static name: string
}
export class MetaConfigPrivate {
    static name: string
}
export abstract class PluginLoaderClass {
    /* Fields of RygelCore.PluginLoaderClass */
    static name: string
}
export class PluginLoaderPrivate {
    static name: string
}
export abstract class RecursiveModuleLoaderClass {
    /* Fields of RygelCore.RecursiveModuleLoaderClass */
    loadModuleFromFile: any
    loadModuleFromInfo: any
    static name: string
}
export class RecursiveModuleLoaderPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of RygelCore.PluginClass */
    applyHacks: any
    static name: string
}
export class PluginPrivate {
    static name: string
}
export abstract class ResourceInfoClass {
    /* Fields of RygelCore.ResourceInfoClass */
    static name: string
}
export class ResourceInfoPrivate {
    static name: string
}
export abstract class MediaDeviceClass {
    /* Fields of RygelCore.MediaDeviceClass */
    static name: string
}
export class MediaDevicePrivate {
    static name: string
}
export abstract class BaseConfigurationClass {
    /* Fields of RygelCore.BaseConfigurationClass */
    getInterface: any
    getInterfaces: any
    getPort: any
    getTranscoding: any
    getAllowUpload: any
    getAllowDeletion: any
    getLogLevels: any
    getPluginPath: any
    getEnginePath: any
    getMediaEngine: any
    getVideoUploadFolder: any
    getMusicUploadFolder: any
    getPictureUploadFolder: any
    getEnabled: any
    getTitle: any
    getString: any
    getStringList: any
    getInt: any
    getIntList: any
    getBool: any
    static name: string
}
export class BaseConfigurationPrivate {
    static name: string
}
export abstract class CmdlineConfigClass {
    /* Fields of RygelCore.CmdlineConfigClass */
    static name: string
}
export class CmdlineConfigPrivate {
    static name: string
}
export abstract class EnvironmentConfigClass {
    /* Fields of RygelCore.EnvironmentConfigClass */
    static name: string
}
export class EnvironmentConfigPrivate {
    static name: string
}
export abstract class UserConfigClass {
    /* Fields of RygelCore.UserConfigClass */
    static name: string
}
export class UserConfigPrivate {
    static name: string
}
export abstract class V1HacksClass {
    /* Fields of RygelCore.V1HacksClass */
    static name: string
}
export class V1HacksPrivate {
    static name: string
}
export abstract class IconInfoClass {
    /* Fields of RygelCore.IconInfoClass */
    static name: string
}
export class IconInfoPrivate {
    static name: string
}
export abstract class XMLUtilsClass {
    /* Fields of RygelCore.XMLUtilsClass */
    static name: string
}
export class XMLUtilsPrivate {
    static name: string
}
export abstract class XMLUtilsIteratorClass {
    /* Fields of RygelCore.XMLUtilsIteratorClass */
    static name: string
}
export class XMLUtilsIteratorPrivate {
    static name: string
}
export abstract class XMLUtilsChildIteratorClass {
    /* Fields of RygelCore.XMLUtilsChildIteratorClass */
    static name: string
}
export class XMLUtilsChildIteratorPrivate {
    static name: string
}
export abstract class PluginInformationClass {
    /* Fields of RygelCore.PluginInformationClass */
    static name: string
}
export class PluginInformationPrivate {
    static name: string
}
export abstract class DBusInterfaceIface {
    /* Fields of RygelCore.DBusInterfaceIface */
    shutdown: any
    static name: string
}
export abstract class DBusAclProviderIface {
    /* Fields of RygelCore.DBusAclProviderIface */
    isAllowed: any
    isAllowedFinish: any
    static name: string
}
export abstract class ConfigurationIface {
    /* Fields of RygelCore.ConfigurationIface */
    getInterface: any
    getInterfaces: any
    getPort: any
    getTranscoding: any
    getAllowUpload: any
    getAllowDeletion: any
    getLogLevels: any
    getPluginPath: any
    getEnginePath: any
    getMediaEngine: any
    getVideoUploadFolder: any
    getMusicUploadFolder: any
    getPictureUploadFolder: any
    getEnabled: any
    getTitle: any
    getString: any
    getStringList: any
    getInt: any
    getIntList: any
    getBool: any
    static name: string
}
export abstract class StateMachineIface {
    /* Fields of RygelCore.StateMachineIface */
    run: any
    runFinish: any
    getCancellable: any
    setCancellable: any
    static name: string
}
}