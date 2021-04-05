/**
 * GeocodeGlib-1.0
 */

/// <reference types="node" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />

declare namespace GeocodeGlib {

export enum Error {
    PARSE,
    NOT_SUPPORTED,
    NO_MATCHES,
    INVALID_ARGUMENTS,
    INTERNAL_SERVER,
}
export enum LocationCRS {
    WGS84,
}
export enum LocationURIScheme {
    GEO,
}
export enum PlaceOsmType {
    UNKNOWN,
    NODE,
    RELATION,
    WAY,
}
export enum PlaceType {
    UNKNOWN,
    BUILDING,
    STREET,
    TOWN,
    STATE,
    COUNTY,
    LOCAL_ADMINISTRATIVE_AREA,
    POSTAL_CODE,
    COUNTRY,
    ISLAND,
    AIRPORT,
    RAILWAY_STATION,
    BUS_STOP,
    MOTORWAY,
    DRAINAGE,
    LAND_FEATURE,
    MISCELLANEOUS,
    SUPERNAME,
    POINT_OF_INTEREST,
    SUBURB,
    COLLOQUIAL,
    ZONE,
    HISTORICAL_STATE,
    HISTORICAL_COUNTY,
    CONTINENT,
    TIME_ZONE,
    ESTATE,
    HISTORICAL_TOWN,
    OCEAN,
    SEA,
    SCHOOL,
    PLACE_OF_WORSHIP,
    RESTAURANT,
    BAR,
    LIGHT_RAIL_STATION,
}
export const LOCATION_ACCURACY_CITY: number
export const LOCATION_ACCURACY_CONTINENT: number
export const LOCATION_ACCURACY_COUNTRY: number
export const LOCATION_ACCURACY_REGION: number
export const LOCATION_ACCURACY_STREET: number
export const LOCATION_ACCURACY_UNKNOWN: number
export function errorQuark(): GLib.Quark
export class Backend {
    /* Methods of GeocodeGlib.Backend */
    forwardSearch(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forwardSearchAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardSearchFinish(result: Gio.AsyncResult): Place[]
    reverseResolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverseResolveAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverseResolveFinish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib.Backend */
    vfuncForwardSearch?(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfuncForwardSearchAsync?(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncForwardSearchFinish?(result: Gio.AsyncResult): Place[]
    vfuncReverseResolve?(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfuncReverseResolveAsync?(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncReverseResolveFinish?(result: Gio.AsyncResult): Place[]
    static name: string
}
export interface BoundingBox_ConstructProps extends GObject.Object_ConstructProps {
    bottom?: number
    left?: number
    right?: number
    top?: number
}
export class BoundingBox {
    /* Properties of GeocodeGlib.BoundingBox */
    /* Fields of GeocodeGlib.BoundingBox */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib.BoundingBox */
    equal(b: BoundingBox): boolean
    getBottom(): number
    getLeft(): number
    getRight(): number
    getTop(): number
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
    connect(sigName: "notify", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BoundingBox_ConstructProps)
    _init (config?: BoundingBox_ConstructProps): void
    static new(top: number, bottom: number, left: number, right: number): BoundingBox
    static $gtype: GObject.Type
}
export interface Forward_ConstructProps extends GObject.Object_ConstructProps {
    answerCount?: number
    bounded?: boolean
    searchArea?: BoundingBox
}
export class Forward {
    /* Properties of GeocodeGlib.Forward */
    answerCount: number
    bounded: boolean
    searchArea: BoundingBox
    /* Fields of GeocodeGlib.Forward */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib.Forward */
    getAnswerCount(): number
    getBounded(): boolean
    getSearchArea(): BoundingBox | null
    search(): Place[]
    searchAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): Place[]
    setAnswerCount(count: number): void
    setBackend(backend?: Backend | null): void
    setBounded(bounded: boolean): void
    setSearchArea(box: BoundingBox): void
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
    connect(sigName: "notify", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::answer-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::answer-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::answer-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Forward_ConstructProps)
    _init (config?: Forward_ConstructProps): void
    static newForParams(params: GLib.HashTable): Forward
    static newForString(str: string): Forward
    static $gtype: GObject.Type
}
export interface Location_ConstructProps extends GObject.Object_ConstructProps {
    accuracy?: number
    altitude?: number
    crs?: LocationCRS
    description?: string
    latitude?: number
    longitude?: number
    timestamp?: number
}
export class Location {
    /* Properties of GeocodeGlib.Location */
    accuracy: number
    altitude: number
    description: string
    latitude: number
    longitude: number
    /* Fields of GeocodeGlib.Location */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib.Location */
    equal(b: Location): boolean
    getAccuracy(): number
    getAltitude(): number
    getCrs(): LocationCRS
    getDescription(): string
    getDistanceFrom(locb: Location): number
    getLatitude(): number
    getLongitude(): number
    getTimestamp(): number
    setDescription(description: string): void
    setFromUri(uri: string): boolean
    toUri(scheme: LocationURIScheme): string
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
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    static new(latitude: number, longitude: number, accuracy: number): Location
    static newWithDescription(latitude: number, longitude: number, accuracy: number, description: string): Location
    static $gtype: GObject.Type
}
export interface MockBackend_ConstructProps extends GObject.Object_ConstructProps {
}
export class MockBackend {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib.MockBackend */
    addForwardResult(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
    addReverseResult(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
    clear(): void
    getQueryLog(): MockBackendQuery[]
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
    /* Methods of GeocodeGlib.Backend */
    forwardSearch(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forwardSearchAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardSearchFinish(result: Gio.AsyncResult): Place[]
    reverseResolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverseResolveAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverseResolveFinish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MockBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MockBackend, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MockBackend_ConstructProps)
    _init (config?: MockBackend_ConstructProps): void
    static new(): MockBackend
    static $gtype: GObject.Type
}
export interface Nominatim_ConstructProps extends GObject.Object_ConstructProps {
    baseUrl?: string
    maintainerEmailAddress?: string
    userAgent?: string
}
export class Nominatim {
    /* Properties of GeocodeGlib.Nominatim */
    userAgent: string
    /* Fields of GeocodeGlib.Nominatim */
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
    /* Methods of GeocodeGlib.Backend */
    forwardSearch(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forwardSearchAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardSearchFinish(result: Gio.AsyncResult): Place[]
    reverseResolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverseResolveAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverseResolveFinish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib.Nominatim */
    vfuncQuery?(uri: string, cancellable?: Gio.Cancellable | null): string
    vfuncQueryAsync?(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncQueryFinish?(res: Gio.AsyncResult): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Nominatim_ConstructProps)
    _init (config?: Nominatim_ConstructProps): void
    static new(baseUrl: string, maintainerEmailAddress: string): Nominatim
    static getGnome(): Nominatim
    static $gtype: GObject.Type
}
export interface Place_ConstructProps extends GObject.Object_ConstructProps {
    administrativeArea?: string
    area?: string
    boundingBox?: BoundingBox
    building?: string
    continent?: string
    country?: string
    countryCode?: string
    county?: string
    location?: Location
    name?: string
    osmId?: string
    osmType?: PlaceOsmType
    placeType?: PlaceType
    postalCode?: string
    state?: string
    street?: string
    streetAddress?: string
    town?: string
}
export class Place {
    /* Properties of GeocodeGlib.Place */
    administrativeArea: string
    area: string
    boundingBox: BoundingBox
    building: string
    continent: string
    country: string
    countryCode: string
    county: string
    readonly icon: Gio.Icon
    location: Location
    name: string
    osmId: string
    osmType: PlaceOsmType
    postalCode: string
    state: string
    street: string
    streetAddress: string
    town: string
    /* Fields of GeocodeGlib.Place */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib.Place */
    equal(b: Place): boolean
    getAdministrativeArea(): string
    getArea(): string
    getBoundingBox(): BoundingBox
    getBuilding(): string
    getContinent(): string
    getCountry(): string
    getCountryCode(): string
    getCounty(): string
    getIcon(): Gio.Icon
    getLocation(): Location
    getName(): string
    getOsmId(): string
    getOsmType(): PlaceOsmType
    getPlaceType(): PlaceType
    getPostalCode(): string
    getState(): string
    getStreet(): string
    getStreetAddress(): string
    getTown(): string
    setAdministrativeArea(adminArea: string): void
    setArea(area: string): void
    setBoundingBox(bbox: BoundingBox): void
    setBuilding(building: string): void
    setContinent(continent: string): void
    setCountry(country: string): void
    setCountryCode(countryCode: string): void
    setCounty(county: string): void
    setLocation(location: Location): void
    setName(name: string): void
    setPostalCode(postalCode: string): void
    setState(state: string): void
    setStreet(street: string): void
    setStreetAddress(streetAddress: string): void
    setTown(town: string): void
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
    connect(sigName: "notify", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::administrative-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::administrative-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::administrative-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::building", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::building", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::building", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::continent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::continent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::continent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::county", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::county", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::county", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::osm-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::osm-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::osm-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::osm-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::osm-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::osm-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::town", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::town", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::town", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Place_ConstructProps)
    _init (config?: Place_ConstructProps): void
    static new(name: string, placeType: PlaceType): Place
    static newWithLocation(name: string, placeType: PlaceType, location: Location): Place
    static $gtype: GObject.Type
}
export interface Reverse_ConstructProps extends GObject.Object_ConstructProps {
}
export class Reverse {
    /* Fields of GeocodeGlib.Reverse */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib.Reverse */
    resolve(): Place
    resolveAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(res: Gio.AsyncResult): Place
    setBackend(backend?: Backend | null): void
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
    connect(sigName: "notify", callback: (($obj: Reverse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reverse, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Reverse_ConstructProps)
    _init (config?: Reverse_ConstructProps): void
    static newForLocation(location: Location): Reverse
    static $gtype: GObject.Type
}
export abstract class BackendInterface {
    /* Fields of GeocodeGlib.BackendInterface */
    forwardSearch: any
    forwardSearchAsync: any
    forwardSearchFinish: any
    reverseResolve: any
    reverseResolveAsync: any
    reverseResolveFinish: any
    static name: string
}
export abstract class BoundingBoxClass {
    /* Fields of GeocodeGlib.BoundingBoxClass */
    static name: string
}
export class BoundingBoxPrivate {
    static name: string
}
export abstract class ForwardClass {
    /* Fields of GeocodeGlib.ForwardClass */
    static name: string
}
export class ForwardPrivate {
    static name: string
}
export abstract class LocationClass {
    /* Fields of GeocodeGlib.LocationClass */
    static name: string
}
export class LocationPrivate {
    static name: string
}
export abstract class MockBackendClass {
    /* Fields of GeocodeGlib.MockBackendClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MockBackendQuery {
    /* Fields of GeocodeGlib.MockBackendQuery */
    params: GLib.HashTable
    isForward: boolean
    results: Place[]
    error: GLib.Error
    static name: string
}
export abstract class NominatimClass {
    /* Fields of GeocodeGlib.NominatimClass */
    parentClass: GObject.ObjectClass
    query: any
    queryAsync: any
    queryFinish: any
    static name: string
}
export abstract class PlaceClass {
    /* Fields of GeocodeGlib.PlaceClass */
    static name: string
}
export class PlacePrivate {
    static name: string
}
export abstract class ReverseClass {
    /* Fields of GeocodeGlib.ReverseClass */
    static name: string
}
export class ReversePrivate {
    static name: string
}
}