/**
 * Avahi-0.6
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="AvahiCore-0.6.d.ts" />

declare namespace Avahi {

export enum BrowserEvent {
    GA_BROWSER_NEW,
    GA_BROWSER_REMOVE,
    GA_BROWSER_CACHE_EXHAUSTED,
    GA_BROWSER_ALL_FOR_NOW,
    GA_BROWSER_FAILURE,
}
export enum ClientFlags {
    GA_CLIENT_FLAG_NO_FLAGS,
    GA_CLIENT_FLAG_IGNORE_USER_CONFIG,
    GA_CLIENT_FLAG_NO_FAIL,
}
export enum ClientState {
    GA_CLIENT_STATE_NOT_STARTED,
    GA_CLIENT_STATE_S_REGISTERING,
    GA_CLIENT_STATE_S_RUNNING,
    GA_CLIENT_STATE_S_COLLISION,
    GA_CLIENT_STATE_FAILURE,
    GA_CLIENT_STATE_CONNECTING,
}
export enum EntryGroupState {
    GA_ENTRY_GROUP_STATE_UNCOMMITED,
    GA_ENTRY_GROUP_STATE_REGISTERING,
    GA_ENTRY_GROUP_STATE_ESTABLISHED,
    GA_ENTRY_GROUP_STATE_COLLISTION,
    GA_ENTRY_GROUP_STATE_FAILURE,
}
export enum LookupFlags {
    GA_LOOKUP_NO_FLAGS,
    GA_LOOKUP_USE_WIDE_AREA,
    GA_LOOKUP_USE_MULTICAST,
    GA_LOOKUP_NO_TXT,
    GA_LOOKUP_NO_ADDRESS,
}
export enum LookupResultFlags {
    GA_LOOKUP_RESULT_CACHED,
    GA_LOOKUP_RESULT_WIDE_AREA,
    GA_LOOKUP_RESULT_MULTICAST,
    GA_LOOKUP_RESULT_LOCAL,
    GA_LOOKUP_RESULT_OUR_OWN,
    GA_LOOKUP_RESULT_STATIC,
}
export enum Protocol {
    GA_PROTOCOL_INET,
    GA_PROTOCOL_INET6,
    GA_PROTOCOL_UNSPEC,
}
export enum ResolverEvent {
    GA_RESOLVER_FOUND,
    GA_RESOLVER_FAILURE,
}
export function errorQuark(): GLib.Quark
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    flags?: ClientFlags
}
export class Client {
    /* Properties of Avahi.Client */
    readonly state: ClientState
    /* Fields of Avahi.Client */
    parent: GObject.Object
    avahiClient: AvahiCore.Client
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Avahi.Client */
    start(): boolean
    startInContext(context: GLib.MainContext): boolean
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
    /* Signals of Avahi.Client */
    connect(sigName: "state-changed", callback: (($obj: Client, object: ClientState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Client, object: ClientState) => void)): number
    emit(sigName: "state-changed", object: ClientState): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    static new(flags: ClientFlags): Client
    static $gtype: GObject.Type
}
export interface EntryGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class EntryGroup {
    /* Properties of Avahi.EntryGroup */
    readonly state: EntryGroupState
    /* Fields of Avahi.EntryGroup */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Avahi.EntryGroup */
    addRecord(flags: AvahiCore.PublishFlags, name: string, type: number, ttl: number, rdata: object | null, size: number): boolean
    addRecordFull(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, flags: AvahiCore.PublishFlags, name: string, clazz: number, type: number, ttl: number, rdata: object | null, size: number): boolean
    attach(client: Client): boolean
    commit(): boolean
    reset(): boolean
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
    /* Signals of Avahi.EntryGroup */
    connect(sigName: "state-changed", callback: (($obj: EntryGroup, object: EntryGroupState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: EntryGroup, object: EntryGroupState) => void)): number
    emit(sigName: "state-changed", object: EntryGroupState): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EntryGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EntryGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: EntryGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: EntryGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EntryGroup_ConstructProps)
    _init (config?: EntryGroup_ConstructProps): void
    static new(): EntryGroup
    static $gtype: GObject.Type
}
export interface RecordBrowser_ConstructProps extends GObject.Object_ConstructProps {
    "class"?: number
    flags?: LookupFlags
    interface?: number
    name?: string
    protocol?: Protocol
    type?: number
}
export class RecordBrowser {
    /* Properties of Avahi.RecordBrowser */
    "class": number
    flags: LookupFlags
    interface: number
    name: string
    protocol: Protocol
    type: number
    /* Fields of Avahi.RecordBrowser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Avahi.RecordBrowser */
    attach(client: Client): boolean
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
    /* Signals of Avahi.RecordBrowser */
    connect(sigName: "all-for-now", callback: (($obj: RecordBrowser) => void)): number
    connect_after(sigName: "all-for-now", callback: (($obj: RecordBrowser) => void)): number
    emit(sigName: "all-for-now"): void
    on(sigName: "all-for-now", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "all-for-now", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "all-for-now", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cache-exhausted", callback: (($obj: RecordBrowser) => void)): number
    connect_after(sigName: "cache-exhausted", callback: (($obj: RecordBrowser) => void)): number
    emit(sigName: "cache-exhausted"): void
    on(sigName: "cache-exhausted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cache-exhausted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cache-exhausted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "failure", callback: (($obj: RecordBrowser, object?: object | null) => void)): number
    connect_after(sigName: "failure", callback: (($obj: RecordBrowser, object?: object | null) => void)): number
    emit(sigName: "failure", object?: object | null): void
    on(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-record", callback: (($obj: RecordBrowser, object: number, p0: Protocol, p1: string, p2: number, p3: number, p4: object | null, p5: number, p6: LookupResultFlags) => void)): number
    connect_after(sigName: "new-record", callback: (($obj: RecordBrowser, object: number, p0: Protocol, p1: string, p2: number, p3: number, p4: object | null, p5: number, p6: LookupResultFlags) => void)): number
    emit(sigName: "new-record", object: number, p0: Protocol, p1: string, p2: number, p3: number, p4: object | null, p5: number, p6: LookupResultFlags): void
    on(sigName: "new-record", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-record", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-record", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed-record", callback: (($obj: RecordBrowser, object: number, p0: Protocol, p1: string, p2: number, p3: number, p4: object | null, p5: number, p6: LookupResultFlags) => void)): number
    connect_after(sigName: "removed-record", callback: (($obj: RecordBrowser, object: number, p0: Protocol, p1: string, p2: number, p3: number, p4: object | null, p5: number, p6: LookupResultFlags) => void)): number
    emit(sigName: "removed-record", object: number, p0: Protocol, p1: string, p2: number, p3: number, p4: object | null, p5: number, p6: LookupResultFlags): void
    on(sigName: "removed-record", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed-record", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed-record", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::class", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RecordBrowser_ConstructProps)
    _init (config?: RecordBrowser_ConstructProps): void
    static new(name: string, type: number): RecordBrowser
    static newFull(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, name: string, clazz: number, type: number, flags: LookupFlags): RecordBrowser
    static $gtype: GObject.Type
}
export interface ServiceBrowser_ConstructProps extends GObject.Object_ConstructProps {
    domain?: string
    flags?: LookupFlags
    interface?: number
    protocol?: Protocol
    type?: string
}
export class ServiceBrowser {
    /* Properties of Avahi.ServiceBrowser */
    domain: string
    flags: LookupFlags
    interface: number
    protocol: Protocol
    type: string
    /* Fields of Avahi.ServiceBrowser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Avahi.ServiceBrowser */
    attach(client: Client): boolean
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
    /* Signals of Avahi.ServiceBrowser */
    connect(sigName: "all-for-now", callback: (($obj: ServiceBrowser) => void)): number
    connect_after(sigName: "all-for-now", callback: (($obj: ServiceBrowser) => void)): number
    emit(sigName: "all-for-now"): void
    on(sigName: "all-for-now", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "all-for-now", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "all-for-now", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cache-exhausted", callback: (($obj: ServiceBrowser) => void)): number
    connect_after(sigName: "cache-exhausted", callback: (($obj: ServiceBrowser) => void)): number
    emit(sigName: "cache-exhausted"): void
    on(sigName: "cache-exhausted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cache-exhausted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cache-exhausted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "failure", callback: (($obj: ServiceBrowser, object?: object | null) => void)): number
    connect_after(sigName: "failure", callback: (($obj: ServiceBrowser, object?: object | null) => void)): number
    emit(sigName: "failure", object?: object | null): void
    on(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-service", callback: (($obj: ServiceBrowser, object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags) => void)): number
    connect_after(sigName: "new-service", callback: (($obj: ServiceBrowser, object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags) => void)): number
    emit(sigName: "new-service", object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags): void
    on(sigName: "new-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed-service", callback: (($obj: ServiceBrowser, object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags) => void)): number
    connect_after(sigName: "removed-service", callback: (($obj: ServiceBrowser, object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags) => void)): number
    emit(sigName: "removed-service", object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags): void
    on(sigName: "removed-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domain", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServiceBrowser_ConstructProps)
    _init (config?: ServiceBrowser_ConstructProps): void
    static new(type: string): ServiceBrowser
    static newFull(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, type: string, domain: string, flags: LookupFlags): ServiceBrowser
    static $gtype: GObject.Type
}
export interface ServiceResolver_ConstructProps extends GObject.Object_ConstructProps {
    aprotocol?: Protocol
    domain?: string
    flags?: LookupFlags
    interface?: number
    name?: string
    protocol?: Protocol
    type?: string
}
export class ServiceResolver {
    /* Properties of Avahi.ServiceResolver */
    aprotocol: Protocol
    domain: string
    flags: LookupFlags
    interface: number
    name: string
    protocol: Protocol
    type: string
    /* Fields of Avahi.ServiceResolver */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Avahi.ServiceResolver */
    attach(client: Client): boolean
    getAddress(address: AvahiCore.Address, port: number): boolean
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
    /* Signals of Avahi.ServiceResolver */
    connect(sigName: "failure", callback: (($obj: ServiceResolver, object?: object | null) => void)): number
    connect_after(sigName: "failure", callback: (($obj: ServiceResolver, object?: object | null) => void)): number
    emit(sigName: "failure", object?: object | null): void
    on(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "found", callback: (($obj: ServiceResolver, object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: string, p5: object | null, p6: number, p7: object | null, p8: LookupResultFlags) => void)): number
    connect_after(sigName: "found", callback: (($obj: ServiceResolver, object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: string, p5: object | null, p6: number, p7: object | null, p8: LookupResultFlags) => void)): number
    emit(sigName: "found", object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: string, p5: object | null, p6: number, p7: object | null, p8: LookupResultFlags): void
    on(sigName: "found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aprotocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aprotocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aprotocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aprotocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aprotocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domain", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServiceResolver_ConstructProps)
    _init (config?: ServiceResolver_ConstructProps): void
    static new(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, name: string, type: string, domain: string, addressProtocol: AvahiCore.Protocol, flags: LookupFlags): ServiceResolver
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of Avahi.ClientClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class EntryGroupClass {
    /* Fields of Avahi.EntryGroupClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class EntryGroupService {
    /* Fields of Avahi.EntryGroupService */
    interface: AvahiCore.IfIndex
    protocol: AvahiCore.Protocol
    flags: AvahiCore.PublishFlags
    name: string
    type: string
    domain: string
    host: string
    port: number
    /* Methods of Avahi.EntryGroupService */
    freeze(): void
    removeKey(key: string): boolean
    set(key: string, value: string): boolean
    setArbitrary(key: string, value: number, size: number): boolean
    thaw(): boolean
    static name: string
}
export abstract class RecordBrowserClass {
    /* Fields of Avahi.RecordBrowserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ServiceBrowserClass {
    /* Fields of Avahi.ServiceBrowserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ServiceResolverClass {
    /* Fields of Avahi.ServiceResolverClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}