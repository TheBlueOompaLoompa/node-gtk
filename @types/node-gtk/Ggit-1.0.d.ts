/**
 * Ggit-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Ggit {

export enum BranchType {
    LOCAL,
    REMOTE,
}
export enum CloneLocal {
    AUTO,
    LOCAL,
    NO_LOCAL,
    NO_LINKS,
}
export enum ConfigLevel {
    PROGRAMDATA,
    SYSTEM,
    XDG,
    GLOBAL,
    LOCAL,
    APP,
    HIGHEST,
}
export enum DeltaType {
    UNMODIFIED,
    ADDED,
    DELETED,
    MODIFIED,
    RENAMED,
    COPIED,
    IGNORED,
    UNTRACKED,
}
export enum DiffBinaryType {
    NONE,
    LITERAL,
    DELTA,
}
export enum DiffFormatType {
    PATCH,
    PATCH_HEADER,
    RAW,
    NAME_ONLY,
    NAME_STATUS,
}
export enum DiffLineType {
    CONTEXT,
    ADDITION,
    DELETION,
    CONTEXT_EOFNL,
    ADD_EOFNL,
    DEL_EOFNL,
    FILE_HDR,
    HUNK_HDR,
    BINARY,
}
export enum Direction {
    FETCH,
    PUSH,
}
export enum Error {
    GIT_ERROR,
    NOTFOUND,
    EXISTS,
    AMBIGUOUS,
    BUFS,
    PASSTHROUGH,
    ITEROVER,
}
export enum FileMode {
    UNREADABLE,
    TREE,
    BLOB,
    BLOB_EXECUTABLE,
    LINK,
    COMMIT,
}
export enum MergeFileFavor {
    NORMAL,
    OURS,
    THEIRS,
    UNION,
}
export enum PackbuilderStage {
    ADDING_OBJECTS,
    DELTAFICATION,
}
export enum ProxyType {
    NONE,
    AUTO,
    SPECIFIED,
}
export enum RebaseOperationType {
    PICK,
    REWORD,
    EDIT,
    SQUASH,
    FIXUP,
    EXEC,
}
export enum RefType {
    INVALID,
    OID,
    SYMBOLIC,
    LISTALL,
}
export enum RemoteCompletionType {
    DOWNLOAD,
    INDEXING,
    ERROR,
}
export enum RemoteDownloadTagsType {
    UNSPECIFIED,
    AUTO,
    NONE,
    ALL,
}
export enum ResetType {
    SOFT,
    MIXED,
    HARD,
}
export enum StatusShow {
    INDEX_AND_WORKDIR,
    INDEX_ONLY,
    WORKDIR_ONLY,
}
export enum SubmoduleIgnore {
    UNSPECIFIED,
    NONE,
    UNTRACKED,
    DIRTY,
    ALL,
}
export enum SubmoduleRecurse {
    NO,
    YES,
    ONDEMAND,
}
export enum SubmoduleUpdate {
    CHECKOUT,
    REBASE,
    MERGE,
    NONE,
    DEFAULT,
}
export enum TreeWalkMode {
    PRE,
    POST,
}
export enum AttributeCheckFlags {
    FILE_THEN_INDEX,
    INDEX_THEN_FILE,
    INDEX_ONLY,
    NO_SYSTEM,
}
export enum BlameFlags {
    NORMAL,
    TRACK_COPIES_SAME_FILE,
}
export enum CheckoutNotifyFlags {
    NONE,
    CONFLICT,
    DIRTY,
    UPDATED,
    UNTRACKED,
    IGNORED,
    ALL,
}
export enum CheckoutStrategy {
    NONE,
    SAFE,
    FORCE,
    RECREATE_MISSING,
    ALLOW_CONFLICTS,
    REMOVE_UNTRACKED,
    REMOVE_IGNORED,
    UPDATE_ONLY,
    DONT_UPDATE_INDEX,
    NO_REFRESH,
    SKIP_UNMERGED,
    USE_OURS,
    USE_THEIRS,
    DISABLE_PATHSPEC_MATCH,
    SKIP_LOCKED_DIRECTORIES,
    DONT_OVERWRITE_IGNORED,
    CONFLICT_STYLE_MERGE,
    CONFLICT_STYLE_DIFF3,
    DONT_REMOVE_EXISTING,
    DONT_WRITE_INDEX,
    UPDATE_SUBMODULES,
    UPDATE_SUBMODULES_IF_CHANGED,
}
export enum CreateFlags {
    NONE,
    FORCE,
}
export enum Credtype {
    USERPASS_PLAINTEXT,
    SSH_KEY,
    SSH_CUSTOM,
    DEFAULT,
    SSH_INTERACTIVE,
}
export enum DiffFindFlags {
    FIND_BY_CONFIG,
    FIND_RENAMES,
    FIND_RENAMES_FROM_REWRITES,
    FIND_COPIES,
    FIND_COPIES_FROM_UNMODIFIED,
    FIND_REWRITES,
    BREAK_REWRITES,
    FIND_AND_BREAK_REWRITES,
    FIND_FOR_UNTRACKED,
    FIND_ALL,
    FIND_IGNORE_LEADING_WHITESPACE,
    FIND_IGNORE_WHITESPACE,
    FIND_DONT_IGNORE_WHITESPACE,
    FIND_EXACT_MATCH_ONLY,
    BREAK_REWRITES_FOR_RENAMES_ONLY,
    FIND_REMOVE_UNMODIFIED,
}
export enum DiffFlag {
    BINARY,
    NOT_BINARY,
    VALID_ID,
}
export enum DiffFormatEmailFlags {
    NONE,
    EXCLUDE_SUBJECT_PATCH_MARKER,
}
export enum DiffOption {
    NORMAL,
    REVERSE,
    INCLUDE_IGNORED,
    RECURSE_IGNORED_DIRS,
    INCLUDE_UNTRACKED,
    RECURSE_UNTRACKED_DIRS,
    INCLUDE_UNMODIFIED,
    INCLUDE_TYPECHANGE,
    INCLUDE_TYPECHANGE_TREES,
    IGNORE_FILE_MODE,
    IGNORE_SUBMODULES,
    IGNORE_CASE,
    DISABLE_PATHSPEC_MATCH,
    SKIP_BINARY_CHECK,
    ENABLE_FAST_UNTRACKED_DIRS,
    FORCE_TEXT,
    FORCE_BINARY,
    IGNORE_WHITESPACE,
    IGNORE_WHITESPACE_CHANGE,
    IGNORE_WHITESPACE_EOL,
    SHOW_UNTRACKED_CONTENT,
    SHOW_UNMODIFIED,
    PATIENCE,
    MINIMAL,
    SHOW_BINARY,
}
export enum FeatureFlags {
    THREADS,
    HTTPS,
    SSH,
}
export enum MergeFileFlags {
    DEFAULT,
    STYLE_MERGE,
    STYLE_DIFF3,
    SIMPLIFY_ALNUM,
    IGNORE_WHITESPACE,
    IGNORE_WHITESPACE_CHANGE,
    IGNORE_WHITESPACE_EOL,
    DIFF_PATIENCE,
    DIFF_MINIMAL,
}
export enum MergeFlags {
    FIND_RENAMES,
    FAIL_ON_CONFLICT,
    SKIP_REUC,
    NO_RECURSIVE,
}
export enum SortMode {
    NONE,
    TOPOLOGICAL,
    TIME,
    REVERSE,
}
export enum StashFlags {
    DEFAULT,
    KEEP_INDEX,
    INCLUDE_UNTRACKED,
    INCLUDE_IGNORED,
}
export enum StatusFlags {
    CURRENT,
    INDEX_NEW,
    INDEX_MODIFIED,
    INDEX_DELETED,
    INDEX_RENAMED,
    INDEX_TYPECHANGE,
    WORKING_TREE_NEW,
    WORKING_TREE_MODIFIED,
    WORKING_TREE_DELETED,
    WORKING_TREE_TYPECHANGE,
    IGNORED,
}
export enum StatusOption {
    INCLUDE_UNTRACKED,
    INCLUDE_IGNORED,
    INCLUDE_UNMODIFIED,
    EXCLUDE_SUBMODULES,
    RECURSE_UNTRACKED_DIRS,
    DISABLE_PATHSPEC_MATCH,
    RECURSE_IGNORED_DIRS,
    RENAMES_HEAD_TO_INDEX,
    RENAMES_INDEX_TO_WORKDIR,
    SORT_CASE_SENSITIVELY,
    SORT_CASE_INSENSITIVELY,
    DEFAULT,
}
export enum SubmoduleStatus {
    IN_HEAD,
    IN_INDEX,
    IN_CONFIG,
    IN_WD,
    INDEX_ADDED,
    INDEX_DELETED,
    INDEX_MODIFIED,
    WD_UNINITIALIZED,
    WD_ADDED,
    WD_DELETED,
    WD_MODIFIED,
    WD_INDEX_MODIFIED,
    WD_WD_MODIFIED,
    WD_UNTRACKED,
}
export function errorQuark(): GLib.Quark
export function getFeatures(): FeatureFlags
export function init(): void
export function messagePrettify(message: string, stripComments: boolean, commentChar: number): string
export interface ConfigCallback {
    (entry: ConfigEntry): number
}
export interface ConfigMatchCallback {
    (matchInfo: GLib.MatchInfo, value: string): number
}
export interface CredAcquireCallback {
    (url: string, usernameFromUrl: string | null, allowedTypes: number, cred: Cred): number
}
export interface DiffBinaryCallback {
    (delta: DiffDelta, binary: DiffBinary): number
}
export interface DiffFileCallback {
    (delta: DiffDelta, progress: number): number
}
export interface DiffHunkCallback {
    (delta: DiffDelta, hunk: DiffHunk): number
}
export interface DiffLineCallback {
    (delta: DiffDelta, hunk: DiffHunk | null, line: DiffLine): number
}
export interface DiffSimilarityMetricBufferSignatureCallback {
    (file: DiffFile, buf: string, buflen: number, out?: object | null): number
}
export interface DiffSimilarityMetricFileSignatureCallback {
    (file: DiffFile, fullpath: string, out?: object | null): number
}
export interface DiffSimilarityMetricFreeSignatureCallback {
    (signature?: object | null): void
}
export interface DiffSimilarityMetricSimilarityCallback {
    (score: number, signatureA?: object | null, signatureB?: object | null): number
}
export interface NoteCallback {
    (blobId: OId, annotatedObjectId: OId): number
}
export interface ReferencesCallback {
    (reference: Ref): number
}
export interface ReferencesNameCallback {
    (name: string): number
}
export interface RemoteListCallback {
    (name: string, oid: OId, loid: OId, local: boolean): number
}
export interface StashCallback {
    (index: number, message: string, stashOid: OId): number
}
export interface StatusCallback {
    (path: string, statusFlags: StatusFlags): number
}
export interface SubmoduleCallback {
    (submodule: Submodule, name: string): number
}
export interface TagCallback {
    (name: string, tagOid: OId): number
}
export interface TransferProgressCallback {
    (stats: TransferProgress): number
}
export interface TreeWalkCallback {
    (root: string, entry: TreeEntry): number
}
export interface Blame_ConstructProps extends Native_ConstructProps {
}
export class Blame {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Blame */
    fromBuffer(buffer: any): Blame | null
    getHunkByIndex(idx: number): BlameHunk
    getHunkByLine(line: number): BlameHunk
    getHunkCount(): number
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
    connect(sigName: "notify", callback: (($obj: Blame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Blame, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Blame_ConstructProps)
    _init (config?: Blame_ConstructProps): void
    static getFlags(blameOptions: BlameOptions): BlameFlags
    static setFlags(blameOptions: BlameOptions, flags: BlameFlags): void
    static $gtype: GObject.Type
}
export interface Blob_ConstructProps extends Object_ConstructProps {
}
export class Blob {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Object */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Blob */
    getRawContent(): any | null
    isBinary(): boolean
    /* Methods of Ggit.Object */
    getId(): OId | null
    getOwner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Blob_ConstructProps)
    _init (config?: Blob_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BlobOutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    repository?: Repository
}
export class BlobOutputStream {
    /* Properties of Ggit.BlobOutputStream */
    /* Fields of Ggit.BlobOutputStream */
    parentInstance: Gio.OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.BlobOutputStream */
    getId(): OId | null
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: any, cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: Gio.AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Gio.Cancellable | null): boolean
    vfuncFlush?(cancellable?: Gio.Cancellable | null): boolean
    vfuncFlushAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: Gio.AsyncResult): boolean
    vfuncSplice?(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfuncSpliceAsync?(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: Gio.AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: Gio.AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Gio.Cancellable | null): number
    vfuncWritevAsync?(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn?(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlobOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlobOutputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BlobOutputStream_ConstructProps)
    _init (config?: BlobOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Branch_ConstructProps extends Ref_ConstructProps {
}
export class Branch {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Branch */
    parentInstance: Ref
    /* Fields of Ggit.Ref */
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Branch */
    delete(): void
    getName(): string | null
    getUpstream(): Ref | null
    isHead(): boolean
    move(newBranchName: string, flags: CreateFlags): Branch | null
    setUpstream(upstreamBranchName: string): void
    /* Methods of Ggit.Ref */
    deleteLog(): void
    getLog(): Reflog | null
    getOwner(): Repository | null
    getReferenceType(): RefType
    getShorthand(): string | null
    getSymbolicTarget(): string | null
    getTarget(): OId | null
    hasLog(): boolean
    isBranch(): boolean
    isNote(): boolean
    isRemote(): boolean
    isTag(): boolean
    lookup(): Object | null
    rename(newName: string, force: boolean, logMessage: string): Ref | null
    resolve(): Ref | null
    setSymbolicTarget(target: string, logMessage: string): Ref | null
    setTarget(oid: OId, logMessage: string): Ref | null
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
    connect(sigName: "notify", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Branch_ConstructProps)
    _init (config?: Branch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CheckoutOptions_ConstructProps extends GObject.Object_ConstructProps {
    ancestorLabel?: string
    baseline?: Tree
    dirMode?: number
    disableFilters?: boolean
    fileMode?: number
    fileOpenFlags?: number
    notifyFlags?: CheckoutNotifyFlags
    ourLabel?: string
    strategy?: CheckoutStrategy
    targetDirectory?: string
    theirLabel?: string
}
export class CheckoutOptions {
    /* Properties of Ggit.CheckoutOptions */
    ancestorLabel: string
    baseline: Tree
    dirMode: number
    disableFilters: boolean
    fileMode: number
    fileOpenFlags: number
    notifyFlags: CheckoutNotifyFlags
    ourLabel: string
    strategy: CheckoutStrategy
    targetDirectory: string
    theirLabel: string
    /* Fields of Ggit.CheckoutOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CheckoutOptions */
    getAncestorLabel(): string | null
    getBaseline(): Tree | null
    getDirMode(): number
    getDisableFilters(): boolean
    getFileMode(): number
    getFileOpenFlags(): number
    getNotifyFlags(): CheckoutNotifyFlags
    getOurLabel(): string | null
    getPaths(): string[] | null
    getStrategy(): CheckoutStrategy
    getTargetDirectory(): string | null
    getTheirLabel(): string | null
    setAncestorLabel(label?: string | null): void
    setBaseline(tree?: Tree | null): void
    setDirMode(dirMode: number): void
    setDisableFilters(disable: boolean): void
    setFileMode(fileMode: number): void
    setFileOpenFlags(flags: number): void
    setNotifyFlags(flags: CheckoutNotifyFlags): void
    setOurLabel(label?: string | null): void
    setPaths(paths?: string[] | null): void
    setStrategy(strategy: CheckoutStrategy): void
    setTargetDirectory(directory?: string | null): void
    setTheirLabel(label?: string | null): void
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
    /* Virtual methods of Ggit.CheckoutOptions */
    vfuncNotify?(why: CheckoutNotifyFlags, path: string, baseline: DiffFile, target: DiffFile, workdir: DiffFile): number
    vfuncProgress?(path: string, completedSteps: number, totalSteps: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ancestor-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ancestor-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ancestor-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ancestor-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ancestor-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::baseline", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baseline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baseline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baseline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dir-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dir-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dir-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dir-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-filters", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-filters", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-open-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-open-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-open-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-open-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-open-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notify-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notify-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notify-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notify-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::our-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::our-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::our-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::our-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::our-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strategy", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strategy", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target-directory", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-directory", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::their-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::their-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::their-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::their-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::their-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CheckoutOptions_ConstructProps)
    _init (config?: CheckoutOptions_ConstructProps): void
    static new(): CheckoutOptions | null
    static $gtype: GObject.Type
}
export interface CherryPickOptions_ConstructProps extends GObject.Object_ConstructProps {
    checkoutOptions?: CheckoutOptions
    mainline?: number
    mergeOptions?: MergeOptions
}
export class CherryPickOptions {
    /* Properties of Ggit.CherryPickOptions */
    checkoutOptions: CheckoutOptions
    mainline: number
    mergeOptions: MergeOptions
    /* Fields of Ggit.CherryPickOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CherryPickOptions */
    getCheckoutOptions(): CheckoutOptions
    getMainline(): number
    getMergeOptions(): MergeOptions
    setCheckoutOptions(checkoutOptions?: CheckoutOptions | null): void
    setMainline(mainline: number): void
    setMergeOptions(mergeOptions?: MergeOptions | null): void
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
    connect(sigName: "notify", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::checkout-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checkout-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::checkout-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::checkout-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::checkout-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mainline", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mainline", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mainline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mainline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mainline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::merge-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::merge-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::merge-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::merge-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CherryPickOptions_ConstructProps)
    _init (config?: CherryPickOptions_ConstructProps): void
    static new(): CherryPickOptions
    static $gtype: GObject.Type
}
export interface CloneOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class CloneOptions {
    /* Fields of Ggit.CloneOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CloneOptions */
    getCheckoutBranch(): string
    getFetchOptions(): FetchOptions
    getIsBare(): boolean
    getLocal(): CloneLocal
    setCheckoutBranch(checkoutBranch?: string | null): void
    setFetchOptions(fetchOptions?: FetchOptions | null): void
    setIsBare(bare: boolean): void
    setLocal(local: CloneLocal): void
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
    /* Virtual methods of Ggit.CloneOptions */
    vfuncCreateRemote?(repository: Repository, name: string, url: string): Remote | null
    vfuncCreateRepository?(path: string, isBare: boolean): Repository | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CloneOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CloneOptions, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CloneOptions_ConstructProps)
    _init (config?: CloneOptions_ConstructProps): void
    static new(): CloneOptions
    static $gtype: GObject.Type
}
export interface Commit_ConstructProps extends Object_ConstructProps {
}
export class Commit {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Commit */
    parentInstance: Object
    /* Fields of Ggit.Object */
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Commit */
    amend(updateRef: string | null, author: Signature, committer: Signature, messageEncoding: string | null, message: string, tree: Tree): OId | null
    getAuthor(): Signature | null
    getCommitter(): Signature | null
    getMessage(): string | null
    getMessageEncoding(): string | null
    getNthAncestor(n: number): Commit | null
    getParents(): CommitParents | null
    getSubject(): string | null
    getTree(): Tree | null
    getTreeId(): OId | null
    /* Methods of Ggit.Object */
    getId(): OId | null
    getOwner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Commit_ConstructProps)
    _init (config?: Commit_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommitParents_ConstructProps extends GObject.Object_ConstructProps {
    commit?: Commit
}
export class CommitParents {
    /* Properties of Ggit.CommitParents */
    readonly size: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CommitParents */
    get(idx: number): Commit | null
    getId(idx: number): OId | null
    getSize(): number
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
    connect(sigName: "notify", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CommitParents_ConstructProps)
    _init (config?: CommitParents_ConstructProps): void
    static new(commit: Commit): CommitParents
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends Native_ConstructProps {
}
export class Config {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Config */
    addFile(file: Gio.File, level: ConfigLevel, force: boolean): void
    deleteEntry(name: string): boolean
    foreach(callback: ConfigCallback): boolean
    getBool(name: string): boolean
    getEntry(name: string): ConfigEntry
    getInt32(name: string): number
    getInt64(name: string): number
    getString(name: string): string | null
    match(regex: GLib.Regex): [ /* returnType */ string | null, /* matchInfo */ GLib.MatchInfo | null ]
    matchForeach(regex: GLib.Regex, callback: ConfigMatchCallback): boolean
    openLevel(level: ConfigLevel): Config
    setBool(name: string, value: boolean): boolean
    setInt32(name: string, value: number): boolean
    setInt64(name: string, value: number): boolean
    setString(name: string, value: string): boolean
    snapshot(): Config
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    static new(): Config
    static newDefault(): Config
    static newFromFile(file: Gio.File): Config
    static findGlobal(): Gio.File
    static findSystem(): Gio.File
    static $gtype: GObject.Type
}
export interface Cred_ConstructProps extends Native_ConstructProps {
}
export class Cred {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Cred */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
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
    connect(sigName: "notify", callback: (($obj: Cred, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cred, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cred_ConstructProps)
    _init (config?: Cred_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CredPlaintext_ConstructProps extends Cred_ConstructProps {
    password?: string
    username?: string
}
export class CredPlaintext {
    /* Properties of Ggit.CredPlaintext */
    /* Properties of Ggit.Native */
    /* Fields of Ggit.CredPlaintext */
    parentInstance: Cred
    /* Fields of Ggit.Cred */
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CredPlaintext */
    getPassword(): string
    getUsername(): string
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
    connect(sigName: "notify", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CredPlaintext_ConstructProps)
    _init (config?: CredPlaintext_ConstructProps): void
    static new(username: string, password: string): CredPlaintext
    static $gtype: GObject.Type
}
export interface CredSshInteractive_ConstructProps extends Cred_ConstructProps {
    username?: string
}
export class CredSshInteractive {
    /* Properties of Ggit.CredSshInteractive */
    /* Properties of Ggit.Native */
    /* Fields of Ggit.CredSshInteractive */
    parentInstance: Cred
    /* Fields of Ggit.Cred */
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CredSshInteractive */
    getUsername(): string
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
    /* Virtual methods of Ggit.CredSshInteractive */
    vfuncPrompt?(prompts: CredSshInteractivePrompt[]): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CredSshInteractive_ConstructProps)
    _init (config?: CredSshInteractive_ConstructProps): void
    static new(username: string): CredSshInteractive
    static $gtype: GObject.Type
}
export interface CredSshKeyFromAgent_ConstructProps extends Cred_ConstructProps {
    username?: string
}
export class CredSshKeyFromAgent {
    /* Properties of Ggit.CredSshKeyFromAgent */
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Cred */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.CredSshKeyFromAgent */
    getUsername(): string | null
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
    connect(sigName: "notify", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CredSshKeyFromAgent_ConstructProps)
    _init (config?: CredSshKeyFromAgent_ConstructProps): void
    static new(username: string): CredSshKeyFromAgent | null
    static $gtype: GObject.Type
}
export interface Diff_ConstructProps extends Native_ConstructProps {
    repository?: Repository
}
export class Diff {
    /* Properties of Ggit.Diff */
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Diff */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Diff */
    findSimilar(options?: DiffFindOptions | null): boolean
    foreach(fileCb?: DiffFileCallback | null, binaryCb?: DiffBinaryCallback | null, hunkCb?: DiffHunkCallback | null, lineCb?: DiffLineCallback | null): void
    formatEmail(options: DiffFormatEmailOptions): string | null
    getDelta(index: number): DiffDelta | null
    getNumDeltas(): number
    merge(from: Diff): void
    print(type: DiffFormatType, printCb: DiffLineCallback): void
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
    connect(sigName: "notify", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Diff_ConstructProps)
    _init (config?: Diff_ConstructProps): void
    static newBuffers(buffer1: any | null, buffer1AsPath: string | null, buffer2: any | null, buffer2AsPath?: string | null, diffOptions?: DiffOptions | null): Diff | null
    static newIndexToWorkdir(repository: Repository, index?: Index | null, diffOptions?: DiffOptions | null): Diff | null
    static newTreeToIndex(repository: Repository, oldTree?: Tree | null, index?: Index | null, diffOptions?: DiffOptions | null): Diff | null
    static newTreeToTree(repository: Repository, oldTree?: Tree | null, newTree?: Tree | null, diffOptions?: DiffOptions | null): Diff | null
    static newTreeToWorkdir(repository: Repository, oldTree?: Tree | null, diffOptions?: DiffOptions | null): Diff | null
    static blobToBuffer(oldBlob: Blob | null, oldAsPath: string | null, buffer: any | null, bufferAsPath?: string | null, diffOptions?: DiffOptions | null, fileCb?: DiffFileCallback | null, binaryCb?: DiffBinaryCallback | null, hunkCb?: DiffHunkCallback | null, lineCb?: DiffLineCallback | null): void
    static blobs(oldBlob?: Blob | null, oldAsPath?: string | null, newBlob?: Blob | null, newAsPath?: string | null, diffOptions?: DiffOptions | null, fileCb?: DiffFileCallback | null, binaryCb?: DiffBinaryCallback | null, hunkCb?: DiffHunkCallback | null, lineCb?: DiffLineCallback | null): void
    static $gtype: GObject.Type
}
export interface DiffFindOptions_ConstructProps extends GObject.Object_ConstructProps {
    copyThreshold?: number
    flags?: DiffFindFlags
    metric?: DiffSimilarityMetric
    renameFromRewriteThreshold?: number
    renameLimit?: number
    renameThreshold?: number
}
export class DiffFindOptions {
    /* Properties of Ggit.DiffFindOptions */
    copyThreshold: number
    flags: DiffFindFlags
    metric: DiffSimilarityMetric
    renameFromRewriteThreshold: number
    renameLimit: number
    renameThreshold: number
    /* Fields of Ggit.DiffFindOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.DiffFindOptions */
    getCopyThreshold(): number
    getFlags(): DiffFindFlags
    getMetric(): DiffSimilarityMetric | null
    getRenameFromRewriteThreshold(): number
    getRenameLimit(): number
    getRenameThreshold(): number
    setCopyThreshold(threshold: number): void
    setFlags(flags: DiffFindFlags): void
    setMetric(metric: DiffSimilarityMetric): void
    setRenameFromRewriteThreshold(threshold: number): void
    setRenameLimit(limit: number): void
    setRenameThreshold(threshold: number): void
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
    connect(sigName: "notify", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copy-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copy-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copy-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copy-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metric", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metric", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rename-from-rewrite-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-from-rewrite-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rename-from-rewrite-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rename-from-rewrite-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rename-from-rewrite-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rename-limit", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-limit", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rename-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rename-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rename-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rename-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rename-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rename-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rename-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DiffFindOptions_ConstructProps)
    _init (config?: DiffFindOptions_ConstructProps): void
    static new(): DiffFindOptions | null
    static $gtype: GObject.Type
}
export interface DiffFormatEmailOptions_ConstructProps extends GObject.Object_ConstructProps {
    author?: Signature
    body?: string
    flags?: DiffFormatEmailFlags
    id?: OId
    patchNumber?: number
    summary?: string
    totalPatches?: number
}
export class DiffFormatEmailOptions {
    /* Properties of Ggit.DiffFormatEmailOptions */
    author: Signature
    body: string
    flags: DiffFormatEmailFlags
    id: OId
    patchNumber: number
    summary: string
    totalPatches: number
    /* Fields of Ggit.DiffFormatEmailOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.DiffFormatEmailOptions */
    getAuthor(): Signature | null
    getBody(): string | null
    getFlags(): DiffFormatEmailFlags
    getId(): OId | null
    getPatchNumber(): number
    getSummary(): string | null
    getTotalPatches(): number
    setAuthor(author?: Signature | null): void
    setBody(body?: string | null): void
    setFlags(flags: DiffFormatEmailFlags): void
    setId(id?: OId | null): void
    setPatchNumber(number: number): void
    setSummary(summary?: string | null): void
    setTotalPatches(patches: number): void
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
    connect(sigName: "notify", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::body", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::patch-number", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::patch-number", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::patch-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::patch-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::patch-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-patches", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-patches", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-patches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-patches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-patches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DiffFormatEmailOptions_ConstructProps)
    _init (config?: DiffFormatEmailOptions_ConstructProps): void
    static new(): DiffFormatEmailOptions | null
    static $gtype: GObject.Type
}
export interface DiffOptions_ConstructProps extends GObject.Object_ConstructProps {
    flags?: DiffOption
    nContextLines?: number
    nInterhunkLines?: number
    newPrefix?: string
    oldPrefix?: string
    pathspec?: string[]
}
export class DiffOptions {
    /* Properties of Ggit.DiffOptions */
    flags: DiffOption
    nContextLines: number
    nInterhunkLines: number
    newPrefix: string
    oldPrefix: string
    pathspec: string[]
    /* Fields of Ggit.DiffOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.DiffOptions */
    getFlags(): DiffOption
    getNContextLines(): number
    getNInterhunkLines(): number
    getNewPrefix(): string | null
    getOldPrefix(): string | null
    getPathspec(): string[] | null
    setFlags(flags: DiffOption): void
    setNContextLines(n: number): void
    setNInterhunkLines(n: number): void
    setNewPrefix(prefix: string): void
    setOldPrefix(prefix: string): void
    setPathspec(pathspec?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-context-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-context-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-context-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-context-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-context-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-interhunk-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-interhunk-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-interhunk-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-interhunk-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-interhunk-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::new-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::new-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::new-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::new-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::old-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::old-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::old-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::old-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pathspec", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pathspec", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pathspec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pathspec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pathspec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DiffOptions_ConstructProps)
    _init (config?: DiffOptions_ConstructProps): void
    static new(): DiffOptions | null
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends Native_ConstructProps {
    file?: Gio.File
}
export class Index {
    /* Properties of Ggit.Index */
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Index */
    add(entry: IndexEntry): boolean
    addFile(file: Gio.File): boolean
    addPath(path: string): boolean
    getEntries(): IndexEntries | null
    getEntriesResolveUndo(): IndexEntriesResolveUndo | null
    getOwner(): Repository | null
    hasConflicts(): boolean
    read(force: boolean): boolean
    remove(file: Gio.File, stage: number): boolean
    write(): boolean
    writeTree(): OId | null
    writeTreeTo(repository: Repository): OId | null
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
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static open(file: Gio.File): Index | null
    static $gtype: GObject.Type
}
export interface Native_ConstructProps extends ObjectFactoryBase_ConstructProps {
    native?: object
}
export class Native {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
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
    connect(sigName: "notify", callback: (($obj: Native, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Native, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Native_ConstructProps)
    _init (config?: Native_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends Native_ConstructProps {
}
export class Object {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Object */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Object */
    getId(): OId | null
    getOwner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactory {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.ObjectFactory */
    construct(parentClass: GObject.ObjectClass, basetype: GObject.Type, constructProperties: GObject.ObjectConstructParam[]): GObject.Object | null
    register(basetype: GObject.Type, subtype: GObject.Type): void
    unregister(basetype: GObject.Type, subtype: GObject.Type): void
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
    connect(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    static getDefault(): ObjectFactory
    static $gtype: GObject.Type
}
export interface ObjectFactoryBase_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactoryBase {
    /* Fields of Ggit.ObjectFactoryBase */
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectFactoryBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectFactoryBase, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectFactoryBase_ConstructProps)
    _init (config?: ObjectFactoryBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProxyOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class ProxyOptions {
    /* Fields of Ggit.ProxyOptions */
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyOptions, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ProxyOptions_ConstructProps)
    _init (config?: ProxyOptions_ConstructProps): void
    static new(): ProxyOptions | null
    static $gtype: GObject.Type
}
export interface PushOptions_ConstructProps extends GObject.Object_ConstructProps {
    callbacks?: RemoteCallbacks
    parallelism?: number
}
export class PushOptions {
    /* Properties of Ggit.PushOptions */
    callbacks: RemoteCallbacks
    parallelism: number
    /* Fields of Ggit.PushOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.PushOptions */
    getParallelism(): number
    getRemoteCallbacks(): RemoteCallbacks | null
    setParallelism(parallelism: number): void
    setRemoteCallbacks(callbacks: RemoteCallbacks): void
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
    connect(sigName: "notify", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::callbacks", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parallelism", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallelism", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parallelism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parallelism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parallelism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PushOptions_ConstructProps)
    _init (config?: PushOptions_ConstructProps): void
    static new(): PushOptions | null
    static $gtype: GObject.Type
}
export interface Rebase_ConstructProps extends Native_ConstructProps {
}
export class Rebase {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Rebase */
    abort(): void
    commit(author: Signature | null, committer: Signature, message?: string | null): OId | null
    finish(signature?: Signature | null): void
    getOperationByIndex(idx: number): RebaseOperation | null
    getOperationEntryCount(): number
    getOperationIndex(): number
    next(): RebaseOperation | null
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
    connect(sigName: "notify", callback: (($obj: Rebase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Rebase, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Rebase_ConstructProps)
    _init (config?: Rebase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Ref_ConstructProps extends Native_ConstructProps {
}
export class Ref {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Ref */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Ref */
    delete(): void
    deleteLog(): void
    getLog(): Reflog | null
    getName(): string | null
    getOwner(): Repository | null
    getReferenceType(): RefType
    getShorthand(): string | null
    getSymbolicTarget(): string | null
    getTarget(): OId | null
    hasLog(): boolean
    isBranch(): boolean
    isNote(): boolean
    isRemote(): boolean
    isTag(): boolean
    lookup(): Object | null
    rename(newName: string, force: boolean, logMessage: string): Ref | null
    resolve(): Ref | null
    setSymbolicTarget(target: string, logMessage: string): Ref | null
    setTarget(oid: OId, logMessage: string): Ref | null
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
    connect(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Ref_ConstructProps)
    _init (config?: Ref_ConstructProps): void
    static isValidName(name: string): boolean
    static $gtype: GObject.Type
}
export interface Remote_ConstructProps extends Native_ConstructProps {
}
export class Remote {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Remote */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Remote */
    connect(direction: Direction, callbacks: RemoteCallbacks, proxyOptions?: ProxyOptions | null, customHeaders?: string | null): void
    disconnect(): void
    download(specs: string[] | null, fetchOptions: FetchOptions): boolean
    getConnected(): boolean
    getFetchSpecs(): string[] | null
    getName(): string | null
    getOwner(): Repository | null
    getPushSpecs(): string[] | null
    getUrl(): string | null
    list(): RemoteHead[] | null
    push(specs: string[] | null, pushOptions: PushOptions): boolean
    updateTips(callbacks: RemoteCallbacks, updateFetchHead: boolean, tagsType: RemoteDownloadTagsType, message?: string | null): boolean
    upload(specs: string[] | null, pushOptions: PushOptions): boolean
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
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    static new(repository: Repository, name: string, url: string): Remote | null
    static newAnonymous(repository: Repository, url: string): Remote | null
    static $gtype: GObject.Type
}
export interface RemoteCallbacks_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteCallbacks {
    /* Fields of Ggit.RemoteCallbacks */
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
    /* Virtual methods of Ggit.RemoteCallbacks */
    vfuncCompletion?(type: RemoteCompletionType): void
    vfuncCredentials?(url: string, usernameFromUrl: string | null, allowedTypes: Credtype): Cred | null
    vfuncProgress?(message: string): void
    vfuncTransferProgress?(stats: TransferProgress): void
    vfuncUpdateTips?(refname: string, a: OId, b: OId): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Ggit.RemoteCallbacks */
    connect(sigName: "completion", callback: (($obj: RemoteCallbacks, object: RemoteCompletionType) => void)): number
    connect_after(sigName: "completion", callback: (($obj: RemoteCallbacks, object: RemoteCompletionType) => void)): number
    emit(sigName: "completion", object: RemoteCompletionType): void
    on(sigName: "completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: RemoteCallbacks, object: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: RemoteCallbacks, object: string) => void)): number
    emit(sigName: "progress", object: string): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transfer-progress", callback: (($obj: RemoteCallbacks, object: TransferProgress) => void)): number
    connect_after(sigName: "transfer-progress", callback: (($obj: RemoteCallbacks, object: TransferProgress) => void)): number
    emit(sigName: "transfer-progress", object: TransferProgress): void
    on(sigName: "transfer-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transfer-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transfer-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "update-tips", callback: (($obj: RemoteCallbacks, object: string, p0: OId, p1: OId) => void)): number
    connect_after(sigName: "update-tips", callback: (($obj: RemoteCallbacks, object: string, p0: OId, p1: OId) => void)): number
    emit(sigName: "update-tips", object: string, p0: OId, p1: OId): void
    on(sigName: "update-tips", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "update-tips", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "update-tips", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteCallbacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteCallbacks, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteCallbacks_ConstructProps)
    _init (config?: RemoteCallbacks_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Repository_ConstructProps extends Native_ConstructProps {
    cloneOptions?: CloneOptions
    init?: boolean
    isBare?: boolean
    location?: Gio.File
    url?: string
    workdir?: Gio.File
}
export class Repository {
    /* Properties of Ggit.Repository */
    readonly head: Ref
    workdir: Gio.File
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Repository */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Repository */
    addRemoteFetch(remote: Remote, refspec: string): void
    addRemotePush(remote: Remote, refspec: string): void
    blameFile(file: Gio.File, blameOptions?: BlameOptions | null): Blame | null
    checkoutHead(options?: CheckoutOptions | null): boolean
    checkoutIndex(index?: Index | null, options?: CheckoutOptions | null): boolean
    checkoutTree(tree?: Object | null, options?: CheckoutOptions | null): boolean
    cherryPick(commit: Commit, options: CherryPickOptions): boolean
    cherryPickCommit(commit: Commit, ourCommit: Commit, mainline: number, mergeOptions?: MergeOptions | null): Index | null
    createBlob(): BlobOutputStream | null
    createBlobFromBuffer(buffer: any): OId | null
    createBlobFromFile(file: Gio.File): OId
    createBlobFromPath(path: string): OId | null
    createBranch(branchName: string, target: Object, flags: CreateFlags): Branch | null
    createCommit(updateRef: string | null, author: Signature, committer: Signature, messageEncoding: string | null, message: string, tree: Tree, parents: Commit[]): OId | null
    createCommitFromIds(updateRef: string | null, author: Signature, committer: Signature, messageEncoding: string | null, message: string, tree: OId, parents: OId[]): OId | null
    createIndexEntryForFile(file?: Gio.File | null, id?: OId | null): IndexEntry | null
    createIndexEntryForPath(path?: string | null, id?: OId | null): IndexEntry | null
    createNote(notesRef: string | null, author: Signature, committer: Signature, id: OId, note: string, force: boolean): OId | null
    createReference(name: string, oid: OId, logMessage: string): Ref | null
    createRemote(name: string, url: string): Remote | null
    createSymbolicReference(name: string, target: string, logMessage: string): Ref | null
    createTag(tagName: string, target: Object, tagger: Signature, message: string, flags: CreateFlags): OId | null
    createTagAnnotation(tagName: string, target: Object, signature: Signature, message: string): OId | null
    createTagFromBuffer(tag: string, flags: CreateFlags): OId | null
    createTagLightweight(tagName: string, target: Object, flags: CreateFlags): OId | null
    createTreeBuilder(): TreeBuilder | null
    createTreeBuilderFromTree(tree: Tree): TreeBuilder | null
    deleteTag(name: string): boolean
    dropStash(index: number): void
    enumerateBranches(listType: BranchType): BranchEnumerator | null
    fileStatus(location: Gio.File): StatusFlags
    fileStatusForeach(options: StatusOptions | null, callback: StatusCallback): boolean
    getAheadBehind(local: OId, upstream: OId): [ /* ahead */ number, /* behind */ number ]
    getAttribute(path: string, name: string, flags: AttributeCheckFlags): string | null
    getConfig(): Config | null
    getDefaultNotesRef(): string | null
    getDescendantOf(commit: OId, ancestor: OId): boolean
    getHead(): Ref | null
    getIndex(): Index | null
    getLocation(): Gio.File | null
    getSubmoduleStatus(name: string, ignore: SubmoduleIgnore): SubmoduleStatus
    getWorkdir(): Gio.File | null
    isBare(): boolean
    isEmpty(): boolean
    isHeadDetached(): boolean
    isHeadUnborn(): boolean
    listRemotes(): string[] | null
    listTags(): string[] | null
    listTagsMatch(pattern?: string | null): string[] | null
    lookup(oid: OId, gtype: GObject.Type): Object | null
    lookupBlob(oid: OId): Blob | null
    lookupBranch(branchName: string, branchType: BranchType): Branch | null
    lookupCommit(oid: OId): Commit | null
    lookupReference(name: string): Ref | null
    lookupReferenceDwim(shortName: string): Ref | null
    lookupRemote(name: string): Remote | null
    lookupSubmodule(name: string): Submodule | null
    lookupTag(oid: OId): Tag | null
    lookupTree(oid: OId): Tree | null
    merge(theirHeads: AnnotatedCommit[], mergeOpts: MergeOptions, checkoutOpts: CheckoutOptions): void
    mergeBase(oidOne: OId, oidTwo: OId): OId | null
    mergeCommits(ourCommit: Commit, theirCommit: Commit, mergeOptions: MergeOptions): Index | null
    mergeTrees(ancestorTree: Tree, ourTree: Tree, theirTree: Tree, mergeOptions: MergeOptions): Index | null
    noteForeach(notesRef: string | null, callback: NoteCallback): boolean
    pathIsIgnored(path: string): boolean
    readNote(notesRef: string | null, id: OId): Note | null
    rebaseInit(branch: AnnotatedCommit | null, upstream: AnnotatedCommit | null, onto: AnnotatedCommit | null, options: RebaseOptions): Rebase | null
    rebaseOpen(options: RebaseOptions): Rebase | null
    referencesForeach(callback: ReferencesCallback): boolean
    referencesForeachName(callback: ReferencesNameCallback): boolean
    removeNote(notesRef: string | null, author: Signature, committer: Signature, id: OId): boolean
    removeRemote(name: string): boolean
    renameRemote(name: string, newName: string): string[] | null
    reset(target: Object, resetType: ResetType, checkoutOptions: CheckoutOptions): void
    resetDefault(target: Object | null, pathspecs: string[]): void
    revert(commit: Commit, options: RevertOptions): boolean
    revparse(spec: string): Object | null
    saveStash(stasher: Signature, message: string, flags: StashFlags): OId | null
    setHead(refName: string): boolean
    setRemoteUrl(remote: string, url: string): boolean
    setSubmoduleFetchRecurse(name: string, fetchRecurseSubmodules: SubmoduleRecurse): void
    setSubmoduleIgnore(name: string, ignore: SubmoduleIgnore): void
    setSubmoduleUpdate(name: string, update: SubmoduleUpdate): void
    setSubmoduleUrl(name: string, url: string): void
    setWorkdir(workdir: Gio.File, updateGitlink: boolean): void
    stashForeach(callback: StashCallback): boolean
    submoduleForeach(callback: SubmoduleCallback): boolean
    tagForeach(callback: TagCallback): boolean
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
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::head", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::head", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::head", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::workdir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::workdir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::workdir", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static clone(url: string, location: Gio.File, options?: CloneOptions | null): Repository | null
    static discover(location: Gio.File): Gio.File | null
    static discoverFull(location: Gio.File, acrossFs: boolean, ceilingDirs?: string[] | null): Gio.File | null
    static initRepository(location: Gio.File, isBare: boolean): Repository | null
    static open(location: Gio.File): Repository | null
    static $gtype: GObject.Type
}
export interface RevisionWalker_ConstructProps extends Native_ConstructProps {
    repository?: Repository
}
export class RevisionWalker {
    /* Properties of Ggit.RevisionWalker */
    repository: Repository
    /* Properties of Ggit.Native */
    /* Fields of Ggit.RevisionWalker */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.RevisionWalker */
    getRepository(): Repository | null
    hide(oid: OId): void
    hideGlob(item: string): void
    hideHead(): void
    hideRef(item: string): void
    next(): OId | null
    push(oid: OId): void
    pushGlob(item: string): void
    pushHead(): void
    pushRange(range: string): void
    pushRef(item: string): void
    reset(): void
    setSortMode(sortMode: SortMode): void
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
    connect(sigName: "notify", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repository", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RevisionWalker_ConstructProps)
    _init (config?: RevisionWalker_ConstructProps): void
    static new(repository: Repository): RevisionWalker | null
    static $gtype: GObject.Type
}
export interface Signature_ConstructProps extends Native_ConstructProps {
    encoding?: string
}
export class Signature {
    /* Properties of Ggit.Signature */
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Native */
    parentInstance: ObjectFactoryBase
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Signature */
    copy(): Signature | null
    getEmail(): string | null
    getName(): string | null
    getTime(): GLib.DateTime | null
    getTimeZone(): GLib.TimeZone | null
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
    connect(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Signature_ConstructProps)
    _init (config?: Signature_ConstructProps): void
    static new(name: string, email: string, signatureTime: GLib.DateTime): Signature | null
    static newNow(name: string, email: string): Signature | null
    static $gtype: GObject.Type
}
export interface SubmoduleUpdateOptions_ConstructProps extends GObject.Object_ConstructProps {
    checkoutOptions?: CheckoutOptions
    fetchOptions?: FetchOptions
}
export class SubmoduleUpdateOptions {
    /* Properties of Ggit.SubmoduleUpdateOptions */
    checkoutOptions: CheckoutOptions
    fetchOptions: FetchOptions
    /* Fields of Ggit.SubmoduleUpdateOptions */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.SubmoduleUpdateOptions */
    getCheckoutOptions(): CheckoutOptions | null
    getFetchOptions(): FetchOptions
    setCheckoutOptions(checkoutOptions?: CheckoutOptions | null): void
    setFetchOptions(fetchOptions?: FetchOptions | null): void
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
    connect(sigName: "notify", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::checkout-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checkout-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::checkout-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::checkout-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::checkout-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fetch-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fetch-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fetch-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fetch-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fetch-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubmoduleUpdateOptions_ConstructProps)
    _init (config?: SubmoduleUpdateOptions_ConstructProps): void
    static new(): SubmoduleUpdateOptions | null
    static $gtype: GObject.Type
}
export interface Tag_ConstructProps extends Object_ConstructProps {
}
export class Tag {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Tag */
    parentInstance: Object
    /* Fields of Ggit.Object */
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Tag */
    getMessage(): string | null
    getName(): string | null
    getTagger(): Signature | null
    getTarget(): Object | null
    getTargetId(): OId | null
    getTargetType(): GObject.Type
    peel(): Object | null
    /* Methods of Ggit.Object */
    getId(): OId | null
    getOwner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Tag_ConstructProps)
    _init (config?: Tag_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends Object_ConstructProps {
}
export class Tree {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.Tree */
    parentInstance: Object
    /* Fields of Ggit.Object */
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.Tree */
    get(i: number): TreeEntry | null
    getByName(name: string): TreeEntry | null
    getByPath(path: string): TreeEntry | null
    getId(): OId | null
    size(): number
    walk(mode: TreeWalkMode, callback: TreeWalkCallback): void
    /* Methods of Ggit.Object */
    getOwner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TreeBuilder_ConstructProps extends Native_ConstructProps {
}
export class TreeBuilder {
    /* Properties of Ggit.Native */
    /* Fields of Ggit.TreeBuilder */
    parentInstance: Native
    /* Fields of Ggit.Native */
    /* Fields of Ggit.ObjectFactoryBase */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Ggit.TreeBuilder */
    clear(): void
    getEntry(path: string): TreeEntry | null
    insert(filename: string, oid: OId, fileMode: FileMode): TreeEntry | null
    remove(path: string): void
    write(): OId | null
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
    connect(sigName: "notify", callback: (($obj: TreeBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeBuilder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TreeBuilder_ConstructProps)
    _init (config?: TreeBuilder_ConstructProps): void
    static $gtype: GObject.Type
}
export class AnnotatedCommit {
    /* Methods of Ggit.AnnotatedCommit */
    getId(): OId | null
    ref(): AnnotatedCommit | null
    unref(): void
    static name: string
    static newFromRef(repository: Repository, ref: Ref): AnnotatedCommit
}
export abstract class BlameClass {
    /* Fields of Ggit.BlameClass */
    parentClass: NativeClass
    static name: string
}
export class BlameHunk {
    /* Methods of Ggit.BlameHunk */
    getFinalCommitId(): OId | null
    getFinalSignature(): Signature | null
    getFinalStartLineNumber(): number
    getLinesInHunk(): number
    getOrigCommitId(): OId | null
    getOrigPath(): string | null
    getOrigSignature(): Signature | null
    getOrigStartLineNumber(): number
    isBoundary(): boolean
    ref(): BlameHunk | null
    unref(): void
    static name: string
}
export class BlameOptions {
    /* Methods of Ggit.BlameOptions */
    copy(): BlameOptions | null
    free(): void
    getMaximumLine(): number
    getMinimumLine(): number
    getMinimumMatchCharacters(): number
    getNewestCommit(): OId | null
    getOldestCommit(): OId | null
    setMaximumLine(line: number): void
    setMinimumLine(line: number): void
    setMinimumMatchCharacters(characters: number): void
    setNewestCommit(oid?: OId | null): void
    setOldestCommit(oid?: OId | null): void
    static name: string
    static new(): BlameOptions
    constructor()
    static new(): BlameOptions
}
export abstract class BlobClass {
    /* Fields of Ggit.BlobClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class BlobOutputStreamClass {
    /* Fields of Ggit.BlobOutputStreamClass */
    static name: string
}
export abstract class BranchClass {
    /* Fields of Ggit.BranchClass */
    static name: string
}
export class BranchEnumerator {
    /* Methods of Ggit.BranchEnumerator */
    get(): Ref | null
    iterator(): BranchEnumerator | null
    next(): boolean
    ref(): BranchEnumerator | null
    unref(): void
    static name: string
}
export abstract class CheckoutOptionsClass {
    /* Fields of Ggit.CheckoutOptionsClass */
    parentClass: GObject.ObjectClass
    notify: any
    progress: any
    static name: string
}
export abstract class CherryPickOptionsClass {
    /* Fields of Ggit.CherryPickOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CloneOptionsClass {
    /* Fields of Ggit.CloneOptionsClass */
    parentClass: GObject.ObjectClass
    createRepository: any
    createRemote: any
    static name: string
}
export abstract class CommitClass {
    /* Fields of Ggit.CommitClass */
    static name: string
}
export abstract class CommitParentsClass {
    /* Fields of Ggit.CommitParentsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ConfigClass {
    /* Fields of Ggit.ConfigClass */
    parentClass: NativeClass
    static name: string
}
export class ConfigEntry {
    /* Methods of Ggit.ConfigEntry */
    getLevel(): ConfigLevel
    getName(): string | null
    getValue(): string | null
    ref(): ConfigEntry | null
    unref(): void
    static name: string
}
export abstract class CredClass {
    /* Fields of Ggit.CredClass */
    static name: string
}
export abstract class CredPlaintextClass {
    /* Fields of Ggit.CredPlaintextClass */
    static name: string
}
export abstract class CredSshInteractiveClass {
    /* Fields of Ggit.CredSshInteractiveClass */
    prompt: any
    static name: string
}
export class CredSshInteractivePrompt {
    /* Methods of Ggit.CredSshInteractivePrompt */
    getInstruction(): string
    getName(): string
    getResponse(): string
    getText(): string
    isMasked(): boolean
    ref(): CredSshInteractivePrompt
    setResponse(response: string): void
    unref(): void
    static name: string
    static new(name: string, instruction: string, text: string, isMasked: boolean): CredSshInteractivePrompt
    constructor(name: string, instruction: string, text: string, isMasked: boolean)
    static new(name: string, instruction: string, text: string, isMasked: boolean): CredSshInteractivePrompt
}
export abstract class CredSshKeyFromAgentClass {
    /* Fields of Ggit.CredSshKeyFromAgentClass */
    parentClass: CredClass
    static name: string
}
export class DiffBinary {
    /* Methods of Ggit.DiffBinary */
    getNewFile(): DiffBinaryFile | null
    getOldFile(): DiffBinaryFile | null
    ref(): DiffBinary | null
    unref(): void
    static name: string
}
export class DiffBinaryFile {
    /* Methods of Ggit.DiffBinaryFile */
    getBinaryType(): DiffBinaryType
    getData(size?: number | null): number
    getInflatedSize(): number
    ref(): DiffBinaryFile
    unref(): void
    static name: string
}
export abstract class DiffClass {
    /* Fields of Ggit.DiffClass */
    static name: string
}
export class DiffDelta {
    /* Methods of Ggit.DiffDelta */
    getFlags(): DiffFlag
    getNewFile(): DiffFile | null
    getOldFile(): DiffFile | null
    getSimilarity(): number
    getStatus(): DeltaType
    ref(): DiffDelta | null
    unref(): void
    static name: string
}
export class DiffFile {
    /* Methods of Ggit.DiffFile */
    getFlags(): DiffFlag
    getMode(): number
    getOid(): OId | null
    getPath(): string | null
    getSize(): number
    ref(): DiffFile | null
    unref(): void
    static name: string
}
export abstract class DiffFindOptionsClass {
    /* Fields of Ggit.DiffFindOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DiffFormatEmailOptionsClass {
    /* Fields of Ggit.DiffFormatEmailOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DiffHunk {
    /* Methods of Ggit.DiffHunk */
    getHeader(): string
    getNewLines(): number
    getNewStart(): number
    getOldLines(): number
    getOldStart(): number
    ref(): DiffHunk | null
    unref(): void
    static name: string
}
export class DiffLine {
    /* Methods of Ggit.DiffLine */
    getContent(): any
    getContentOffset(): number
    getNewLineno(): number
    getOldLineno(): number
    getOrigin(): DiffLineType
    getText(): string | null
    ref(): DiffLine | null
    unref(): void
    static name: string
}
export abstract class DiffOptionsClass {
    /* Fields of Ggit.DiffOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DiffSimilarityMetric {
    /* Methods of Ggit.DiffSimilarityMetric */
    copy(): DiffSimilarityMetric | null
    free(): void
    static name: string
    static new(fileSignature: DiffSimilarityMetricFileSignatureCallback, bufferSignature: DiffSimilarityMetricBufferSignatureCallback, freeSignature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback): DiffSimilarityMetric
    constructor(fileSignature: DiffSimilarityMetricFileSignatureCallback, bufferSignature: DiffSimilarityMetricBufferSignatureCallback, freeSignature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback)
    static new(fileSignature: DiffSimilarityMetricFileSignatureCallback, bufferSignature: DiffSimilarityMetricBufferSignatureCallback, freeSignature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback): DiffSimilarityMetric
}
export class FetchOptions {
    /* Methods of Ggit.FetchOptions */
    copy(): FetchOptions | null
    free(): void
    getDownloadTags(): RemoteDownloadTagsType
    getRemoteCallbacks(): RemoteCallbacks | null
    setDownloadTags(downloadTags: RemoteDownloadTagsType): void
    setRemoteCallbacks(callbacks?: RemoteCallbacks | null): void
    static name: string
    static new(): FetchOptions
    constructor()
    static new(): FetchOptions
}
export abstract class IndexClass {
    /* Fields of Ggit.IndexClass */
    parentClass: NativeClass
    static name: string
}
export class IndexEntries {
    /* Methods of Ggit.IndexEntries */
    getByIndex(idx: number): IndexEntry | null
    getByPath(file: Gio.File, stage: number): IndexEntry | null
    ref(): IndexEntries | null
    size(): number
    unref(): void
    static name: string
}
export class IndexEntriesResolveUndo {
    /* Methods of Ggit.IndexEntriesResolveUndo */
    get(idx: number): IndexEntryResolveUndo | null
    getByFile(file: Gio.File): IndexEntryResolveUndo | null
    ref(): IndexEntriesResolveUndo | null
    size(): number
    unref(): void
    static name: string
}
export class IndexEntry {
    /* Methods of Ggit.IndexEntry */
    getDev(): number
    getFileSize(): number
    getFlags(): number
    getFlagsExtended(): number
    getGid(): number
    getId(): OId | null
    getIno(): number
    getMode(): number
    getPath(): string
    getUid(): number
    isConflict(): boolean
    ref(): IndexEntry | null
    setCommit(commit: Commit): void
    setDev(dev: number): void
    setFileSize(fileSize: number): void
    setFlags(flags: number): void
    setFlagsExtended(flagsExtended: number): void
    setGid(gid: number): void
    setId(id?: OId | null): void
    setIno(ino: number): void
    setMode(mode: number): void
    setPath(path?: string | null): void
    setUid(uid: number): void
    stat(file: Gio.File): boolean
    unref(): void
    static name: string
}
export class IndexEntryResolveUndo {
    /* Methods of Ggit.IndexEntryResolveUndo */
    getFile(): Gio.File | null
    getId(stage: number): OId | null
    getMode(stage: number): number
    ref(): IndexEntryResolveUndo | null
    unref(): void
    static name: string
}
export class MergeOptions {
    /* Methods of Ggit.MergeOptions */
    copy(): MergeOptions | null
    free(): void
    getFileFavor(): MergeFileFavor
    getFileFlags(): MergeFileFlags
    getFlags(): MergeFlags
    getRenameThreshold(): number
    getSimilarityMetric(): DiffSimilarityMetric | null
    getTargetLimit(): number
    setFileFavor(fileFavor: MergeFileFavor): void
    setFileFlags(fileFlags: MergeFileFlags): void
    setFlags(flags: MergeFlags): void
    setRenameThreshold(renameThreshold: number): void
    setSimilarityMetric(metric: DiffSimilarityMetric): void
    setTargetLimit(targetLimit: number): void
    static name: string
    static new(): MergeOptions
    constructor()
    static new(): MergeOptions
}
export abstract class NativeClass {
    /* Fields of Ggit.NativeClass */
    static name: string
}
export class Note {
    /* Methods of Ggit.Note */
    getId(): OId | null
    getMessage(): string | null
    ref(): Note | null
    unref(): void
    static name: string
}
export class OId {
    /* Methods of Ggit.OId */
    compare(b: OId): number
    copy(): OId | null
    equal(b: OId): boolean
    free(): void
    hasPrefix(prefix: string): boolean
    hash(): number
    isZero(): boolean
    static name: string
    static newFromRaw(raw: any): OId | null
    static newFromString(str: string): OId | null
}
export abstract class ObjectClass {
    /* Fields of Ggit.ObjectClass */
    static name: string
}
export abstract class ObjectFactoryBaseClass {
    /* Fields of Ggit.ObjectFactoryBaseClass */
    static name: string
}
export abstract class ObjectFactoryClass {
    /* Fields of Ggit.ObjectFactoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Patch {
    /* Methods of Ggit.Patch */
    getDelta(): DiffDelta | null
    getHunk(idx: number): DiffHunk | null
    getLineStats(): [ /* returnType */ boolean, /* totalContext */ number | null, /* totalAdditions */ number | null, /* totalDeletions */ number | null ]
    getNumHunks(): number
    getNumLinesInHunk(hunk: number): number
    ref(): Patch | null
    toStream(stream: Gio.OutputStream): boolean
    unref(): void
    static name: string
    static newFromBlobs(oldBlob?: Blob | null, oldAsPath?: string | null, newBlob?: Blob | null, newAsPath?: string | null, diffOptions?: DiffOptions | null): Patch | null
    static newFromDiff(diff: Diff, idx: number): Patch | null
}
export abstract class ProxyOptionsClass {
    /* Fields of Ggit.ProxyOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class PushOptionsClass {
    /* Fields of Ggit.PushOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RebaseClass {
    /* Fields of Ggit.RebaseClass */
    parentClass: NativeClass
    static name: string
}
export class RebaseOperation {
    /* Methods of Ggit.RebaseOperation */
    getExec(): string | null
    getId(): OId | null
    getOperationType(): RebaseOperationType
    ref(): RebaseOperation | null
    unref(): void
    static name: string
}
export class RebaseOptions {
    /* Methods of Ggit.RebaseOptions */
    copy(): RebaseOptions | null
    free(): void
    getCheckoutOptions(): CheckoutOptions | null
    getQuiet(): boolean
    getRewriteNotesRef(): string | null
    setCheckoutOptions(checkoutOptions: CheckoutOptions): void
    setQuiet(quiet: boolean): void
    setRewriteNotesRef(rewriteNotesRef: string): void
    static name: string
    static new(): RebaseOptions
    constructor()
    static new(): RebaseOptions
}
export abstract class RefClass {
    /* Fields of Ggit.RefClass */
    static name: string
}
export class RefSpec {
    /* Methods of Ggit.RefSpec */
    getDestination(): string | null
    getSource(): string | null
    isForced(): boolean
    ref(): RefSpec | null
    unref(): void
    static name: string
}
export class Reflog {
    /* Methods of Ggit.Reflog */
    append(oid: OId, committer: Signature, message: string): boolean
    getEntryCount(): number
    getEntryFromIndex(idx: number): ReflogEntry | null
    ref(): Reflog | null
    rename(newName: string): boolean
    unref(): void
    write(): boolean
    static name: string
}
export class ReflogEntry {
    /* Methods of Ggit.ReflogEntry */
    getCommitter(): Signature | null
    getMessage(): string | null
    getNewId(): OId | null
    getOldId(): OId | null
    ref(): ReflogEntry | null
    unref(): void
    static name: string
}
export abstract class RemoteCallbacksClass {
    /* Fields of Ggit.RemoteCallbacksClass */
    parentClass: GObject.ObjectClass
    progress: any
    transferProgress: any
    updateTips: any
    completion: any
    credentials: any
    static name: string
}
export abstract class RemoteClass {
    /* Fields of Ggit.RemoteClass */
    static name: string
}
export class RemoteHead {
    /* Methods of Ggit.RemoteHead */
    getLocalOid(): OId | null
    getName(): string | null
    getOid(): OId | null
    isLocal(): boolean
    ref(): RemoteHead
    unref(): void
    static name: string
}
export abstract class RepositoryClass {
    /* Fields of Ggit.RepositoryClass */
    static name: string
}
export class RevertOptions {
    /* Methods of Ggit.RevertOptions */
    copy(): RevertOptions | null
    free(): void
    static name: string
    static new(mainline: number, mergeOptions?: MergeOptions | null, checkoutOptions?: CheckoutOptions | null): RevertOptions | null
    constructor(mainline: number, mergeOptions?: MergeOptions | null, checkoutOptions?: CheckoutOptions | null)
    static new(mainline: number, mergeOptions?: MergeOptions | null, checkoutOptions?: CheckoutOptions | null): RevertOptions | null
}
export abstract class RevisionWalkerClass {
    /* Fields of Ggit.RevisionWalkerClass */
    static name: string
}
export abstract class SignatureClass {
    /* Fields of Ggit.SignatureClass */
    parentClass: NativeClass
    static name: string
}
export class StatusOptions {
    /* Methods of Ggit.StatusOptions */
    copy(): StatusOptions | null
    free(): void
    static name: string
    static new(options: StatusOption, show: StatusShow, pathspec?: string[] | null): StatusOptions
    constructor(options: StatusOption, show: StatusShow, pathspec?: string[] | null)
    static new(options: StatusOption, show: StatusShow, pathspec?: string[] | null): StatusOptions
}
export class Submodule {
    /* Methods of Ggit.Submodule */
    getFetchRecurse(): boolean
    getHeadId(): OId
    getIgnore(): SubmoduleIgnore
    getIndexId(): OId | null
    getName(): string | null
    getOwner(): Repository | null
    getPath(): string | null
    getUpdate(): SubmoduleUpdate
    getUrl(): string | null
    getWorkdirId(): OId | null
    init(overwrite: boolean): void
    open(): Repository | null
    ref(): Submodule | null
    reload(force: boolean): void
    sync(): void
    unref(): void
    update(init: boolean, options: SubmoduleUpdateOptions): void
    static name: string
}
export abstract class SubmoduleUpdateOptionsClass {
    /* Fields of Ggit.SubmoduleUpdateOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class TagClass {
    /* Fields of Ggit.TagClass */
    static name: string
}
export class TransferProgress {
    /* Methods of Ggit.TransferProgress */
    copy(): TransferProgress | null
    free(): void
    getIndexedObjects(): number
    getReceivedBytes(): number
    getReceivedObjects(): number
    getTotalObjects(): number
    static name: string
}
export abstract class TreeBuilderClass {
    /* Fields of Ggit.TreeBuilderClass */
    static name: string
}
export abstract class TreeClass {
    /* Fields of Ggit.TreeClass */
    static name: string
}
export class TreeEntry {
    /* Methods of Ggit.TreeEntry */
    getFileMode(): FileMode
    getId(): OId | null
    getName(): string | null
    getObjectType(): GObject.Type
    ref(): TreeEntry | null
    unref(): void
    static name: string
}
}