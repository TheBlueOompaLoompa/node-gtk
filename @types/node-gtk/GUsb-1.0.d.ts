/**
 * GUsb-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GUsb {

export enum ContextError {
    CONTEXT_ERROR_INTERNAL,
}
export enum DeviceClassCode {
    INTERFACE_DESC,
    AUDIO,
    COMMUNICATIONS,
    HID,
    PHYSICAL,
    IMAGE,
    PRINTER,
    MASS_STORAGE,
    HUB,
    CDC_DATA,
    SMART_CARD,
    CONTENT_SECURITY,
    VIDEO,
    PERSONAL_HEALTHCARE,
    AUDIO_VIDEO,
    BILLBOARD,
    DIAGNOSTIC,
    WIRELESS_CONTROLLER,
    MISCELLANEOUS,
    APPLICATION_SPECIFIC,
    VENDOR_SPECIFIC,
}
export enum DeviceDirection {
    DEVICE_TO_HOST,
    HOST_TO_DEVICE,
}
export enum DeviceError {
    INTERNAL,
    IO,
    TIMED_OUT,
    NOT_SUPPORTED,
    NO_DEVICE,
    NOT_OPEN,
    ALREADY_OPEN,
    CANCELLED,
    FAILED,
    PERMISSION_DENIED,
    LAST,
}
export enum DeviceLangid {
    INVALID,
    ENGLISH_UNITED_STATES,
}
export enum DeviceRecipient {
    DEVICE,
    INTERFACE,
    ENDPOINT,
    OTHER,
}
export enum DeviceRequestType {
    STANDARD,
    CLASS,
    VENDOR,
    RESERVED,
}
export enum SourceError {
    SOURCE_ERROR_INTERNAL,
}
export enum ContextFlags {
    NONE,
    AUTO_OPEN_DEVICES,
}
export enum DeviceClaimInterfaceFlags {
    NONE,
    BIND_KERNEL_DRIVER,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function sourceErrorQuark(): GLib.Quark
export function strerror(errorCode: number): string
export function versionString(): string
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
    debugLevel?: number
}
export class Context {
    /* Properties of GUsb.Context */
    debugLevel: number
    readonly libusbContext: object
    /* Fields of GUsb.Context */
    parent: GObject.Object
    priv: ContextPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb.Context */
    enumerate(): void
    findByBusAddress(bus: number, address: number): Device
    findByPlatformId(platformId: string): Device
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]
    getFlags(): ContextFlags
    getMainContext(): GLib.MainContext
    getSource(mainCtx: GLib.MainContext): Source
    setDebug(flags: GLib.LogLevelFlags): void
    setFlags(flags: ContextFlags): void
    setMainContext(mainCtx: GLib.MainContext): void
    waitForReplug(device: Device, timeoutMs: number): Device
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
    /* Virtual methods of GUsb.Context */
    vfuncDeviceAdded?(device: Device): void
    vfuncDeviceRemoved?(device: Device): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUsb.Context */
    connect(sigName: "device-added", callback: (($obj: Context, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Context, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: Context, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Context, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debug-level", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-level", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::libusb-context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libusb-context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    static new(): Context
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
    libusbDevice?: object
    platformId?: string
}
export class Device {
    /* Properties of GUsb.Device */
    /* Fields of GUsb.Device */
    parent: GObject.Object
    priv: DevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb.Device */
    bulkTransfer(endpoint: number, data: any, timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number | null ]
    bulkTransferAsync(endpoint: number, data: any, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bulkTransferFinish(res: Gio.AsyncResult): number
    claimInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    close(): boolean
    controlTransfer(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: any, timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number | null ]
    controlTransferAsync(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: any, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    controlTransferFinish(res: Gio.AsyncResult): number
    getAddress(): number
    getBus(): number
    getChildren(): Device[]
    getConfiguration(): number
    getConfigurationIndex(): number
    getCustomIndex(classId: number, subclassId: number, protocolId: number): number
    getDeviceClass(): number
    getDeviceProtocol(): number
    getDeviceSubclass(): number
    getInterface(classId: number, subclassId: number, protocolId: number): Interface
    getInterfaces(): Interface[]
    getManufacturerIndex(): number
    getParent(): Device
    getPid(): number
    getPidAsStr(): string
    getPlatformId(): string
    getPortNumber(): number
    getProductIndex(): number
    getRelease(): number
    getSerialNumberIndex(): number
    getSpec(): number
    getStringDescriptor(descIndex: number): string
    getStringDescriptorBytes(descIndex: number, langid: number): any
    getVid(): number
    getVidAsStr(): string
    interruptTransfer(endpoint: number, data: any, timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number | null ]
    interruptTransferAsync(endpoint: number, data: any, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    interruptTransferFinish(res: Gio.AsyncResult): number
    open(): boolean
    releaseInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    reset(): boolean
    setConfiguration(configuration: number): boolean
    setInterfaceAlt(interface: number, alt: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DeviceList_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
}
export class DeviceList {
    /* Properties of GUsb.DeviceList */
    /* Fields of GUsb.DeviceList */
    parent: GObject.Object
    priv: DeviceListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb.DeviceList */
    coldplug(): void
    findByBusAddress(bus: number, address: number): Device
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]
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
    /* Virtual methods of GUsb.DeviceList */
    vfuncDeviceAdded?(device: Device): void
    vfuncDeviceRemoved?(device: Device): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUsb.DeviceList */
    connect(sigName: "device-added", callback: (($obj: DeviceList, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: DeviceList, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: DeviceList, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: DeviceList, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceList_ConstructProps)
    _init (config?: DeviceList_ConstructProps): void
    static new(context: Context): DeviceList
    static $gtype: GObject.Type
}
export interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
}
export class Endpoint {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb.Endpoint */
    getAddress(): number
    getDirection(): DeviceDirection
    getExtra(): any
    getKind(): number
    getMaximumPacketSize(): number
    getNumber(): number
    getPollingInterval(): number
    getRefresh(): number
    getSynchAddress(): number
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
    connect(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Endpoint_ConstructProps)
    _init (config?: Endpoint_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends GObject.Object_ConstructProps {
}
export class Interface {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb.Interface */
    getAlternate(): number
    getClass(): number
    getEndpoints(): Endpoint[]
    getExtra(): any
    getIndex(): number
    getKind(): number
    getLength(): number
    getNumber(): number
    getProtocol(): number
    getSubclass(): number
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
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ContextClass {
    /* Fields of GUsb.ContextClass */
    parentClass: GObject.ObjectClass
    deviceAdded: any
    deviceRemoved: any
    static name: string
}
export class ContextPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of GUsb.DeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DeviceListClass {
    /* Fields of GUsb.DeviceListClass */
    parentClass: GObject.ObjectClass
    deviceAdded: any
    deviceRemoved: any
    static name: string
}
export class DeviceListPrivate {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class EndpointClass {
    /* Fields of GUsb.EndpointClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class InterfaceClass {
    /* Fields of GUsb.InterfaceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Source {
    /* Methods of GUsb.Source */
    setCallback(func: GLib.SourceFunc): void
    static name: string
    static errorQuark(): GLib.Quark
}
}