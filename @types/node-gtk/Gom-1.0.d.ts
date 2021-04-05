/**
 * Gom-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Gom {

export enum Error {
    ADAPTER_OPEN,
    COMMAND_NO_SQL,
    COMMAND_SQLITE,
    REPOSITORY_EMPTY_RESULT,
    RESOURCE_CURSOR,
}
export enum FilterMode {
    SQL,
    OR,
    AND,
    EQ,
    NEQ,
    GT,
    GTE,
    LT,
    LTE,
    LIKE,
    GLOB,
    IS_NULL,
    IS_NOT_NULL,
}
export enum SortingMode {
    ASCENDING,
    DESCENDING,
}
export function errorQuark(): GLib.Quark
export interface AdapterCallback {
    (adapter: Adapter): void
}
export interface RepositoryMigrator {
    (repository: Repository, adapter: Adapter, version: number): boolean
}
export interface ResourceFromBytesFunc {
    (bytes: any, value: any): void
}
export interface ResourceToBytesFunc {
    (value: any): any
}
export interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class Adapter {
    /* Fields of Gom.Adapter */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.Adapter */
    closeAsync(callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    closeSync(): boolean
    executeSql(sql: string): boolean
    getHandle(): object | null
    openAsync(uri: string, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(uri: string): boolean
    queueRead(callback: AdapterCallback): void
    queueWrite(callback: AdapterCallback): void
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
    connect(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Adapter_ConstructProps)
    _init (config?: Adapter_ConstructProps): void
    static new(): Adapter
    static $gtype: GObject.Type
}
export interface Command_ConstructProps extends GObject.Object_ConstructProps {
    adapter?: Adapter
    sql?: string
}
export class Command {
    /* Properties of Gom.Command */
    sql: string
    /* Fields of Gom.Command */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.Command */
    execute(cursor: Cursor): boolean
    getParamIndex(paramName: string): number
    reset(): void
    setParam(param: number, value: any): void
    setParamDouble(param: number, value: number): void
    setParamFloat(param: number, value: number): void
    setParamInt(param: number, value: number): void
    setParamInt64(param: number, value: number): void
    setParamString(param: number, value: string): void
    setParamUint(param: number, value: number): void
    setParamUint64(param: number, value: number): void
    setSql(sql: string): void
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
    connect(sigName: "notify", callback: (($obj: Command, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Command, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sql", callback: (($obj: Command, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: Command, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Command_ConstructProps)
    _init (config?: Command_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandBuilder_ConstructProps extends GObject.Object_ConstructProps {
    adapter?: Adapter
    filter?: Filter
    limit?: number
    m2mTable?: string
    m2mType?: GObject.Type
    offset?: number
    resourceType?: GObject.Type
    sorting?: Sorting
}
export class CommandBuilder {
    /* Properties of Gom.CommandBuilder */
    filter: Filter
    limit: number
    offset: number
    resourceType: GObject.Type
    sorting: Sorting
    /* Fields of Gom.CommandBuilder */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.CommandBuilder */
    buildCount(): Command
    buildCreate(version: number): Command[]
    buildDelete(): Command
    buildInsert(resource: Resource): Command
    buildSelect(): Command
    buildUpdate(resource: Resource): Command
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
    connect(sigName: "notify", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::limit", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-type", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-type", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sorting", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sorting", callback: (($obj: CommandBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sorting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sorting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sorting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CommandBuilder_ConstructProps)
    _init (config?: CommandBuilder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    statement?: object
}
export class Cursor {
    /* Properties of Gom.Cursor */
    /* Fields of Gom.Cursor */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.Cursor */
    getColumn(column: number, value: any): void
    getColumnBoolean(column: number): boolean
    getColumnDouble(column: number): number
    getColumnFloat(column: number): number
    getColumnInt(column: number): number
    getColumnInt64(column: number): number
    getColumnName(column: number): string
    getColumnString(column: number): string
    getColumnUint(column: number): number
    getColumnUint64(column: number): number
    getNColumns(): number
    next(): boolean
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
    connect(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    mode?: FilterMode
    sql?: string
}
export class Filter {
    /* Properties of Gom.Filter */
    /* Fields of Gom.Filter */
    parent: GObject.Object
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gom.Filter */
    getSql(tableMap: GLib.HashTable): string
    getValues(): any
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
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static newAnd(left: Filter, right: Filter): Filter
    static newAndFullv(filterArray: Filter): Filter
    static newEq(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newGlob(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newGt(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newGte(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newIsNotNull(resourceType: GObject.Type, propertyName: string): Filter
    static newIsNull(resourceType: GObject.Type, propertyName: string): Filter
    static newLike(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newLt(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newLte(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newNeq(resourceType: GObject.Type, propertyName: string, value: any): Filter
    static newOr(left: Filter, right: Filter): Filter
    static newOrFullv(filterArray: Filter): Filter
    static newSql(sql: string, values: any): Filter
    static $gtype: GObject.Type
}
export interface Repository_ConstructProps extends GObject.Object_ConstructProps {
    adapter?: Adapter
}
export class Repository {
    /* Properties of Gom.Repository */
    /* Fields of Gom.Repository */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.Repository */
    automaticMigrateAsync(version: number, objectTypes: any[], callback?: Gio.AsyncReadyCallback | null): void
    automaticMigrateFinish(result: Gio.AsyncResult): boolean
    automaticMigrateSync(version: number, objectTypes: any[]): boolean
    findAsync(resourceType: GObject.Type, filter: Filter, callback?: Gio.AsyncReadyCallback | null): void
    findFinish(result: Gio.AsyncResult): ResourceGroup
    findOneAsync(resourceType: GObject.Type, filter: Filter, callback?: Gio.AsyncReadyCallback | null): void
    findOneFinish(result: Gio.AsyncResult): Resource
    findOneSync(resourceType: GObject.Type, filter?: Filter | null): Resource
    findSortedAsync(resourceType: GObject.Type, filter: Filter, sorting: Sorting, callback?: Gio.AsyncReadyCallback | null): void
    findSortedSync(resourceType: GObject.Type, filter?: Filter | null, sorting?: Sorting | null): ResourceGroup
    findSync(resourceType: GObject.Type, filter?: Filter | null): ResourceGroup
    getAdapter(): Adapter
    migrateAsync(version: number, migrator: RepositoryMigrator, callback?: Gio.AsyncReadyCallback | null): void
    migrateFinish(result: Gio.AsyncResult): boolean
    migrateSync(version: number, migrator: RepositoryMigrator): boolean
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
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    static new(adapter: Adapter): Repository
    static $gtype: GObject.Type
}
export interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    repository?: Repository
}
export class Resource {
    /* Properties of Gom.Resource */
    repository: Repository
    /* Fields of Gom.Resource */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.Resource */
    deleteAsync(callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(): boolean
    fetchM2mAsync(resourceType: GObject.Type, m2mTable: string, filter: Filter, callback?: Gio.AsyncReadyCallback | null): void
    fetchM2mFinish(result: Gio.AsyncResult): ResourceGroup
    saveAsync(callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    saveSync(): boolean
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
    connect(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repository", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Resource_ConstructProps)
    _init (config?: Resource_ConstructProps): void
    static fromBytesFuncQuark(): GLib.Quark
    static newInVersionQuark(): GLib.Quark
    static notMappedQuark(): GLib.Quark
    static notnull(): GLib.Quark
    static refPropertyName(): GLib.Quark
    static refTableClass(): GLib.Quark
    static toBytesFuncQuark(): GLib.Quark
    static unique(): GLib.Quark
    static $gtype: GObject.Type
}
export interface ResourceGroup_ConstructProps extends GObject.Object_ConstructProps {
    count?: number
    filter?: Filter
    isWritable?: boolean
    m2mTable?: string
    m2mType?: GObject.Type
    repository?: Repository
    resourceType?: GObject.Type
    sorting?: Sorting
}
export class ResourceGroup {
    /* Properties of Gom.ResourceGroup */
    /* Fields of Gom.ResourceGroup */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gom.ResourceGroup */
    append(resource: Resource): boolean
    deleteAsync(callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(): boolean
    fetchAsync(index: number, count: number, callback?: Gio.AsyncReadyCallback | null): void
    fetchFinish(result: Gio.AsyncResult): boolean
    fetchSync(index: number, count: number): boolean
    getCount(): number
    getIndex(index: number): Resource
    getM2mTable(): string
    writeAsync(callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): boolean
    writeSync(): boolean
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
    connect(sigName: "notify", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ResourceGroup_ConstructProps)
    _init (config?: ResourceGroup_ConstructProps): void
    static new(repository: Repository): ResourceGroup
    static $gtype: GObject.Type
}
export interface Sorting_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class Sorting {
    /* Fields of Gom.Sorting */
    parent: GObject.Object
    priv: SortingPrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gom.Sorting */
    add(resourceType: GObject.Type, propertyName: string, sortingMode: SortingMode): void
    getSql(tableMap: GLib.HashTable): string
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
    connect(sigName: "notify", callback: (($obj: Sorting, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sorting, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Sorting_ConstructProps)
    _init (config?: Sorting_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AdapterClass {
    /* Fields of Gom.AdapterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AdapterPrivate {
    static name: string
}
export abstract class CommandBuilderClass {
    /* Fields of Gom.CommandBuilderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CommandBuilderPrivate {
    static name: string
}
export abstract class CommandClass {
    /* Fields of Gom.CommandClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CommandPrivate {
    static name: string
}
export abstract class CursorClass {
    /* Fields of Gom.CursorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CursorPrivate {
    static name: string
}
export abstract class FilterClass {
    /* Fields of Gom.FilterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class FilterPrivate {
    static name: string
}
export abstract class RepositoryClass {
    /* Fields of Gom.RepositoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RepositoryPrivate {
    static name: string
}
export abstract class ResourceClass {
    /* Fields of Gom.ResourceClass */
    parentClass: GObject.ObjectClass
    primaryKey: number[]
    table: number[]
    /* Methods of Gom.ResourceClass */
    setNotnull(propertyName: string): void
    setPrimaryKey(primaryKey: string): void
    setPropertyFromBytes(propertyName: string, fromBytesFunc: ResourceFromBytesFunc): void
    setPropertyNewInVersion(propertyName: string, version: number): void
    setPropertySetMapped(propertyName: string, isMapped: boolean): void
    setPropertyToBytes(propertyName: string, toBytesFunc: ResourceToBytesFunc): void
    setReference(propertyName: string, refTableName: string, refPropertyName: string): void
    setTable(table: string): void
    setUnique(propertyName: string): void
    static name: string
}
export abstract class ResourceGroupClass {
    /* Fields of Gom.ResourceGroupClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ResourceGroupPrivate {
    static name: string
}
export class ResourcePrivate {
    static name: string
}
export abstract class SortingClass {
    /* Fields of Gom.SortingClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SortingPrivate {
    static name: string
}
}