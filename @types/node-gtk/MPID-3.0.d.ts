/**
 * MPID-3.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace MPID {

export enum Error {
    OK,
    NO_SUCH_DEVICE,
    DEVICE_DB_FAILED,
    NOT_MEDIA_PLAYER,
    DEVICE_INFO_MISSING,
}
export enum Source {
    NONE,
    SYSTEM,
    OVERRIDE,
}
export enum SourceType {
    NO_DEVICE_INFO,
    SYSTEM_DEVICE_INFO,
    OVERRIDE_DEVICE_INFO,
}
export const PROTOCOL_GENERIC: string
export const PROTOCOL_IPOD: string
export function enableDebug(debug: boolean): void
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    inputPath?: string
    mpiFile?: string
}
export class Device {
    /* Properties of MPID.Device */
    readonly accessProtocols: string[]
    readonly audioFolders: string[]
    readonly driveType: string
    readonly error: Error
    readonly folderDepth: number
    readonly fsUuid: string
    readonly inputFormats: string[]
    readonly model: string
    readonly outputFormats: string[]
    readonly playlistFormats: string[]
    readonly playlistPath: string
    readonly requiresEject: boolean
    readonly serial: string
    readonly source: SourceType
    readonly vendor: string
    /* Fields of MPID.Device */
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::access-protocols", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-protocols", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-folders", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-folders", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::error", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::error", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-depth", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-depth", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fs-uuid", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-uuid", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fs-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fs-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fs-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-formats", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-formats", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-formats", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-formats", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playlist-formats", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playlist-formats", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playlist-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playlist-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playlist-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playlist-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playlist-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playlist-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playlist-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playlist-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::requires-eject", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requires-eject", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::requires-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::requires-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::requires-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(path: string): Device
    static newFromMpiFile(path: string): Device
    static $gtype: GObject.Type
}
export abstract class DeviceClass {
    /* Fields of MPID.DeviceClass */
    static name: string
}
}