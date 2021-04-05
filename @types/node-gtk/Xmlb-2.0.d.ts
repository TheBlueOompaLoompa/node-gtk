/**
 * Xmlb-2.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Xmlb {

export enum OpcodeKind {
    UNKNOWN,
    INTEGER,
    TEXT,
    FUNCTION,
    BOUND_UNSET,
    BOUND_INTEGER,
    BOUND_TEXT,
    INDEXED_TEXT,
    BOOLEAN,
}
export enum BuilderCompileFlags {
    NONE,
    NATIVE_LANGS,
    IGNORE_INVALID,
    SINGLE_LANG,
    WATCH_BLOB,
    IGNORE_GUID,
}
export enum BuilderNodeFlags {
    NONE,
    IGNORE,
    LITERAL_TEXT,
    HAS_TEXT,
    HAS_TAIL,
    TOKENIZE_TEXT,
}
export enum BuilderSourceFlags {
    NONE,
    LITERAL_TEXT,
    WATCH_FILE,
    WATCH_DIRECTORY,
}
export enum MachineDebugFlags {
    NONE,
    SHOW_STACK,
    SHOW_PARSING,
    SHOW_OPTIMIZER,
}
export enum MachineParseFlags {
    NONE,
    OPTIMIZE,
}
export enum NodeExportFlags {
    NONE,
    ADD_HEADER,
    FORMAT_MULTILINE,
    FORMAT_INDENT,
    INCLUDE_SIBLINGS,
    ONLY_CHILDREN,
    COLLAPSE_EMPTY,
}
export enum OpcodeFlags {
    UNKNOWN,
    INTEGER,
    TEXT,
    FUNCTION,
    BOUND,
    BOOLEAN,
    TOKENIZED,
}
export enum QueryFlags {
    NONE,
    OPTIMIZE,
    USE_INDEXES,
    REVERSE,
    FORCE_NODE_CACHE,
}
export enum SiloLoadFlags {
    NONE,
    NO_MAGIC,
    WATCH_BLOB,
}
export enum SiloProfileFlags {
    NONE,
    DEBUG,
    APPEND,
    XPATH,
}
export function opcodeKindFromString(str: string): OpcodeKind
export function opcodeKindToString(kind: OpcodeKind): string
export function stringEscape(str: string): string
export interface BuilderFixupFunc {
    (self: BuilderFixup, bn: BuilderNode): boolean
}
export interface BuilderNodeSortFunc {
    (bn1: BuilderNode, bn2: BuilderNode): number
}
export interface BuilderNodeTraverseFunc {
    (bn: BuilderNode): boolean
}
export interface BuilderSourceNodeFunc {
    (self: BuilderSource, bn: BuilderNode): boolean
}
export interface MachineMethodFunc {
    (self: Machine, stack: Stack, resultUnused: boolean, execData?: object | null): boolean
}
export interface MachineOpcodeFixupFunc {
    (self: Machine, opcodes: Stack): boolean
}
export interface MachineTextHandlerFunc {
    (self: Machine, opcodes: Stack, text: string, handled: boolean): boolean
}
export interface NodeTransmogrifyFunc {
    (self: Node): boolean
}
export interface Builder_ConstructProps extends GObject.Object_ConstructProps {
}
export class Builder {
    /* Fields of Xmlb.Builder */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.Builder */
    addFixup(fixup: BuilderFixup): void
    addLocale(locale: string): void
    appendGuid(guid: string): void
    compile(flags: BuilderCompileFlags, cancellable?: Gio.Cancellable | null): Silo
    ensure(file: Gio.File, flags: BuilderCompileFlags, cancellable?: Gio.Cancellable | null): Silo
    importNode(bn: BuilderNode): void
    importSource(source: BuilderSource): void
    setProfileFlags(profileFlags: SiloProfileFlags): void
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
    connect(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Builder_ConstructProps)
    _init (config?: Builder_ConstructProps): void
    static new(): Builder
    static $gtype: GObject.Type
}
export interface BuilderFixup_ConstructProps extends GObject.Object_ConstructProps {
}
export class BuilderFixup {
    /* Fields of Xmlb.BuilderFixup */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.BuilderFixup */
    getMaxDepth(): number
    setMaxDepth(maxDepth: number): void
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
    connect(sigName: "notify", callback: (($obj: BuilderFixup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BuilderFixup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BuilderFixup_ConstructProps)
    _init (config?: BuilderFixup_ConstructProps): void
    static new(id: string, func: BuilderFixupFunc): BuilderFixup
    static $gtype: GObject.Type
}
export interface BuilderNode_ConstructProps extends GObject.Object_ConstructProps {
}
export class BuilderNode {
    /* Fields of Xmlb.BuilderNode */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.BuilderNode */
    addChild(child: BuilderNode): void
    addFlag(flag: BuilderNodeFlags): void
    addToken(token: string): void
    depth(): number
    export(flags: NodeExportFlags): string
    getAttr(name: string): string
    getAttrAsUint(name: string): number
    getChild(element: string, text?: string | null): BuilderNode
    getChildren(): BuilderNode[]
    getElement(): string
    getFirstChild(): BuilderNode
    getLastChild(): BuilderNode
    getParent(): BuilderNode
    getTail(): string
    getText(): string
    getTextAsUint(): number
    getTokens(): string[] | null
    hasFlag(flag: BuilderNodeFlags): boolean
    removeAttr(name: string): void
    removeChild(child: BuilderNode): void
    setAttr(name: string, value: string): void
    setElement(element: string): void
    setTail(tail: string, tailLen: number): void
    setText(text: string, textLen: number): void
    sortChildren(func: BuilderNodeSortFunc): void
    tokenizeText(): void
    traverse(order: GLib.TraverseType, flags: GLib.TraverseFlags, maxDepth: number, func: BuilderNodeTraverseFunc): void
    unlink(): void
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
    connect(sigName: "notify", callback: (($obj: BuilderNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BuilderNode, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BuilderNode_ConstructProps)
    _init (config?: BuilderNode_ConstructProps): void
    static new(element: string): BuilderNode
    static $gtype: GObject.Type
}
export interface BuilderSource_ConstructProps extends GObject.Object_ConstructProps {
}
export class BuilderSource {
    /* Fields of Xmlb.BuilderSource */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.BuilderSource */
    addFixup(fixup: BuilderFixup): void
    loadBytes(bytes: any, flags: BuilderSourceFlags): boolean
    loadFile(file: Gio.File, flags: BuilderSourceFlags, cancellable?: Gio.Cancellable | null): boolean
    loadXml(xml: string, flags: BuilderSourceFlags): boolean
    setInfo(info?: BuilderNode | null): void
    setPrefix(prefix?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: BuilderSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BuilderSource, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BuilderSource_ConstructProps)
    _init (config?: BuilderSource_ConstructProps): void
    static new(): BuilderSource
    static $gtype: GObject.Type
}
export interface BuilderSourceCtx_ConstructProps extends GObject.Object_ConstructProps {
}
export class BuilderSourceCtx {
    /* Fields of Xmlb.BuilderSourceCtx */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.BuilderSourceCtx */
    getBytes(cancellable?: Gio.Cancellable | null): any
    getFilename(): string | null
    getStream(): Gio.InputStream
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
    connect(sigName: "notify", callback: (($obj: BuilderSourceCtx, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BuilderSourceCtx, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BuilderSourceCtx_ConstructProps)
    _init (config?: BuilderSourceCtx_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Machine_ConstructProps extends GObject.Object_ConstructProps {
}
export class Machine {
    /* Fields of Xmlb.Machine */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.Machine */
    addMethod(name: string, nOpcodes: number, methodCb: MachineMethodFunc): void
    addOpcodeFixup(opcodesSig: string, fixupCb: MachineOpcodeFixupFunc): void
    addOperator(str: string, name: string): void
    addTextHandler(handlerCb: MachineTextHandlerFunc): void
    getStackSize(): number
    opcodeFuncInit(funcName: string): [ /* returnType */ boolean, /* opcode */ Opcode ]
    parse(text: string, textLen: number): Stack
    parseFull(text: string, textLen: number, flags: MachineParseFlags): Stack
    run(opcodes: Stack, execData?: object | null): [ /* returnType */ boolean, /* result */ boolean ]
    runWithBindings(opcodes: Stack, bindings?: ValueBindings | null, execData?: object | null): [ /* returnType */ boolean, /* result */ boolean ]
    setDebugFlags(flags: MachineDebugFlags): void
    setStackSize(stackSize: number): void
    stackPop(stack: Stack): [ /* returnType */ boolean, /* opcodeOut */ Opcode | null ]
    stackPush(stack: Stack): [ /* returnType */ boolean, /* opcodeOut */ Opcode | null ]
    stackPushInteger(stack: Stack, val: number): boolean
    stackPushText(stack: Stack, str: string): boolean
    stackPushTextStatic(stack: Stack, str: string): boolean
    stackPushTextSteal(stack: Stack, str: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Machine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Machine, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Machine_ConstructProps)
    _init (config?: Machine_ConstructProps): void
    static new(): Machine
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
}
export class Node {
    /* Fields of Xmlb.Node */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.Node */
    export(flags: NodeExportFlags): string
    getAttr(name: string): string
    getAttrAsUint(name: string): number
    getChild(): Node
    getChildren(): Node[]
    getData(key: string): any
    getDepth(): number
    getElement(): string
    getNext(): Node
    getParent(): Node
    getRoot(): Node
    getSilo(): Silo
    getTail(): string
    getText(): string
    getTextAsUint(): number
    query(xpath: string, limit: number): Node[]
    queryAttr(xpath: string, name: string): string
    queryAttrAsUint(xpath: string, name: string): number
    queryExport(xpath: string): string
    queryFirst(xpath: string): Node
    queryFirstFull(query: Query): Node
    queryFirstWithContext(query: Query, context?: QueryContext | null): Node
    queryFull(query: Query): Node[]
    queryText(xpath: string): string
    queryTextAsUint(xpath: string): number
    queryWithContext(query: Query, context?: QueryContext | null): Node[]
    setData(key: string, data: any): void
    transmogrify(funcText: NodeTransmogrifyFunc, funcTail: NodeTransmogrifyFunc): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
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
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Query_ConstructProps extends GObject.Object_ConstructProps {
}
export class Query {
    /* Fields of Xmlb.Query */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.Query */
    bindStr(idx: number, str: string): boolean
    bindVal(idx: number, val: number): boolean
    getFlags(): QueryFlags
    getLimit(): number
    getXpath(): string
    setFlags(flags: QueryFlags): void
    setLimit(limit: number): void
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
    connect(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Query_ConstructProps)
    _init (config?: Query_ConstructProps): void
    static new(silo: Silo, xpath: string): Query
    static newFull(silo: Silo, xpath: string, flags: QueryFlags): Query
    static $gtype: GObject.Type
}
export interface Silo_ConstructProps extends GObject.Object_ConstructProps {
    enableNodeCache?: boolean
    guid?: string
}
export class Silo {
    /* Properties of Xmlb.Silo */
    enableNodeCache: boolean
    guid: string
    readonly valid: boolean
    /* Fields of Xmlb.Silo */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xmlb.Silo */
    export(flags: NodeExportFlags): string
    exportFile(file: Gio.File, flags: NodeExportFlags, cancellable?: Gio.Cancellable | null): boolean
    getBytes(): any
    getEnableNodeCache(): boolean
    getGuid(): string
    getProfileString(): string
    getRoot(): Node
    getSize(): number
    invalidate(): void
    isValid(): boolean
    loadFromBytes(blob: any, flags: SiloLoadFlags): boolean
    loadFromFile(file: Gio.File, flags: SiloLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    lookupQuery(xpath: string): Query
    query(xpath: string, limit: number): Node[]
    queryBuildIndex(xpath: string, attr?: string | null): boolean
    queryFirst(xpath: string): Node
    queryFirstFull(query: Query): Node
    queryFirstWithContext(query: Query, context?: QueryContext | null): Node
    queryFull(query: Query): Node[]
    queryWithContext(query: Query, context?: QueryContext | null): Node[]
    saveToFile(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    setEnableNodeCache(enableNodeCache: boolean): void
    setProfileFlags(profileFlags: SiloProfileFlags): void
    watchFile(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-node-cache", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-node-cache", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-node-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-node-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-node-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guid", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guid", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: Silo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Silo_ConstructProps)
    _init (config?: Silo_ConstructProps): void
    static new(): Silo
    static newFromXml(xml: string): Silo
    static $gtype: GObject.Type
}
export abstract class BuilderClass {
    /* Fields of Xmlb.BuilderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BuilderFixupClass {
    /* Fields of Xmlb.BuilderFixupClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BuilderNodeClass {
    /* Fields of Xmlb.BuilderNodeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BuilderSourceClass {
    /* Fields of Xmlb.BuilderSourceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BuilderSourceCtxClass {
    /* Fields of Xmlb.BuilderSourceCtxClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MachineClass {
    /* Fields of Xmlb.MachineClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class NodeClass {
    /* Fields of Xmlb.NodeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Opcode {
    /* Methods of Xmlb.Opcode */
    cmpStr(): boolean
    cmpVal(): boolean
    funcInit(func: number): void
    getKind(): OpcodeKind
    getStr(): string
    getVal(): number
    integerInit(val: number): void
    textInit(str: string): void
    textInitStatic(str: string): void
    textInitSteal(str: string): void
    static name: string
    static kindFromString(str: string): OpcodeKind
    static kindToString(kind: OpcodeKind): string
}
export abstract class QueryClass {
    /* Fields of Xmlb.QueryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class QueryContext {
    /* Fields of Xmlb.QueryContext */
    /* Methods of Xmlb.QueryContext */
    clear(): void
    copy(): QueryContext
    free(): void
    getBindings(): ValueBindings
    getFlags(): QueryFlags
    getLimit(): number
    init(): void
    setFlags(flags: QueryFlags): void
    setLimit(limit: number): void
    static name: string
}
export abstract class SiloClass {
    /* Fields of Xmlb.SiloClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Stack {
    /* Methods of Xmlb.Stack */
    pop(): [ /* returnType */ boolean, /* opcodeOut */ Opcode | null ]
    push(): [ /* returnType */ boolean, /* opcodeOut */ Opcode | null ]
    static name: string
}
export class ValueBindings {
    /* Fields of Xmlb.ValueBindings */
    /* Methods of Xmlb.ValueBindings */
    bindStr(idx: number, str: string, destroyFunc?: GLib.DestroyNotify | null): void
    bindVal(idx: number, val: number): void
    clear(): void
    copy(): ValueBindings
    copyBinding(idx: number, dest: ValueBindings, destIdx: number): boolean
    free(): void
    init(): void
    isBound(idx: number): boolean
    lookupOpcode(idx: number): [ /* returnType */ boolean, /* opcodeOut */ Opcode ]
    static name: string
}
}