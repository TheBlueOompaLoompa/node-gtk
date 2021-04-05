/**
 * OSTree-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace OSTree {

export enum DeploymentUnlockedState {
    NONE,
    DEVELOPMENT,
    HOTFIX,
    TRANSIENT,
}
export enum GpgError {
    NO_SIGNATURE,
    INVALID_SIGNATURE,
    MISSING_KEY,
    EXPIRED_SIGNATURE,
    EXPIRED_KEY,
    REVOKED_KEY,
}
export enum GpgSignatureAttr {
    VALID,
    SIG_EXPIRED,
    KEY_EXPIRED,
    KEY_REVOKED,
    KEY_MISSING,
    FINGERPRINT,
    TIMESTAMP,
    EXP_TIMESTAMP,
    PUBKEY_ALGO_NAME,
    HASH_ALGO_NAME,
    USER_NAME,
    USER_EMAIL,
    FINGERPRINT_PRIMARY,
    KEY_EXP_TIMESTAMP,
    KEY_EXP_TIMESTAMP_PRIMARY,
}
export enum ObjectType {
    FILE,
    DIR_TREE,
    DIR_META,
    COMMIT,
    TOMBSTONE_COMMIT,
    COMMIT_META,
    PAYLOAD_LINK,
}
export enum RepoCheckoutFilterResult {
    ALLOW,
    SKIP,
}
export enum RepoCheckoutMode {
    NONE,
    USER,
}
export enum RepoCheckoutOverwriteMode {
    NONE,
    UNION_FILES,
    ADD_FILES,
    UNION_IDENTICAL,
}
export enum RepoCommitFilterResult {
    ALLOW,
    SKIP,
}
export enum RepoCommitIterResult {
    ERROR,
    END,
    FILE,
    DIR,
}
export enum RepoMode {
    BARE,
    ARCHIVE,
    ARCHIVE_Z2,
    BARE_USER,
    BARE_USER_ONLY,
}
export enum RepoRemoteChange {
    ADD,
    ADD_IF_NOT_EXISTS,
    DELETE,
    DELETE_IF_EXISTS,
    REPLACE,
}
export enum StaticDeltaGenerateOpt {
    LOWLATENCY,
    MAJOR,
}
export enum StaticDeltaIndexFlags {
    STATIC_DELTA_INDEX_FLAGS_NONE,
}
export enum ChecksumFlags {
    NONE,
    IGNORE_XATTRS,
}
export enum DiffFlags {
    NONE,
    IGNORE_XATTRS,
}
export enum GpgSignatureFormatFlags {
    GPG_SIGNATURE_FORMAT_DEFAULT,
}
export enum RepoCommitModifierFlags {
    NONE,
    SKIP_XATTRS,
    GENERATE_SIZES,
    CANONICAL_PERMISSIONS,
    ERROR_ON_UNLABELED,
    CONSUME,
    DEVINO_CANONICAL,
}
export enum RepoCommitState {
    NORMAL,
    PARTIAL,
    FSCK_PARTIAL,
}
export enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE,
}
export enum RepoListObjectsFlags {
    LOOSE,
    PACKED,
    ALL,
    NO_PARENTS,
}
export enum RepoListRefsExtFlags {
    NONE,
    ALIASES,
    EXCLUDE_REMOTES,
    EXCLUDE_MIRRORS,
}
export enum RepoPruneFlags {
    NONE,
    NO_PRUNE,
    REFS_ONLY,
}
export enum RepoPullFlags {
    NONE,
    MIRROR,
    COMMIT_ONLY,
    UNTRUSTED,
    BAREUSERONLY_FILES,
    TRUSTED_HTTP,
}
export enum RepoResolveRevExtFlags {
    NONE,
    LOCAL_ONLY,
}
export enum SePolicyRestoreconFlags {
    NONE,
    ALLOW_NOLABEL,
    KEEP_EXISTING,
}
export enum SysrootSimpleWriteDeploymentFlags {
    NONE,
    RETAIN,
    NOT_DEFAULT,
    NO_CLEAN,
    RETAIN_PENDING,
    RETAIN_ROLLBACK,
}
export enum SysrootUpgraderFlags {
    IGNORE_UNCONFIGURED,
}
export enum SysrootUpgraderPullFlags {
    NONE,
    ALLOW_OLDER,
    SYNTHETIC,
}
export const BUILT_FEATURES: string
export const COMMIT_GVARIANT_STRING: string
export const COMMIT_META_KEY_ARCHITECTURE: string
export const COMMIT_META_KEY_COLLECTION_BINDING: string
export const COMMIT_META_KEY_ENDOFLIFE: string
export const COMMIT_META_KEY_ENDOFLIFE_REBASE: string
export const COMMIT_META_KEY_REF_BINDING: string
export const COMMIT_META_KEY_SOURCE_TITLE: string
export const COMMIT_META_KEY_VERSION: string
export const DIRMETA_GVARIANT_STRING: string
export const FILEMETA_GVARIANT_STRING: string
export const MAX_METADATA_SIZE: number
export const MAX_METADATA_WARN_SIZE: number
export const METADATA_KEY_BOOTABLE: string
export const METADATA_KEY_LINUX: string
export const META_KEY_DEPLOY_COLLECTION_ID: string
export const ORIGIN_TRANSIENT_GROUP: string
export const RELEASE_VERSION: number
export const REPO_METADATA_REF: string
export const SHA256_DIGEST_LEN: number
export const SHA256_STRING_LEN: number
export const SIGN_NAME_ED25519: string
export const SUMMARY_GVARIANT_STRING: string
export const SUMMARY_SIG_GVARIANT_STRING: string
export const TIMESTAMP: number
export const TREE_GVARIANT_STRING: string
export const VERSION: number
export const VERSION_S: string
export const YEAR_VERSION: number
export function breakHardlink(dfd: number, path: string, skipXattrs: boolean, cancellable?: Gio.Cancellable | null): boolean
export function checkVersion(requiredYear: number, requiredRelease: number): boolean
export function checksumB64FromBytes(csum: any): string
export function checksumB64ToBytes(checksum: string): any
export function checksumBytesPeek(bytes: GLib.Variant): any
export function checksumBytesPeekValidate(bytes: GLib.Variant): any
export function checksumFile(f: Gio.File, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ any ]
export function checksumFileAsync(f: Gio.File, objtype: ObjectType, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function checksumFileAsyncFinish(f: Gio.File, result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ any ]
export function checksumFileAt(dfd: number, path: string, stbuf: object | null, objtype: ObjectType, flags: ChecksumFlags, outChecksum: string, cancellable?: Gio.Cancellable | null): boolean
export function checksumFileFromInput(fileInfo: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ any ]
export function checksumFromBytes(csum: any): string
export function checksumFromBytesV(csumV: GLib.Variant): string
export function checksumInplaceToBytes(checksum: string, buf: number): void
export function checksumToBytes(checksum: string): any
export function checksumToBytesV(checksum: string): GLib.Variant
export function cmdprivate(): CmdPrivateVTable
export function cmpChecksumBytes(a: number, b: number): number
export function collectionRefDupv(refs: CollectionRef[]): CollectionRef[]
export function collectionRefEqual(ref1: object, ref2: object): boolean
export function collectionRefFreev(refs: CollectionRef[]): void
export function collectionRefHash(ref: object): number
export function commitGetContentChecksum(commitVariant: GLib.Variant): string | null
export function commitGetObjectSizes(commitVariant: GLib.Variant): [ /* returnType */ boolean, /* outSizesEntries */ CommitSizesEntry[] | null ]
export function commitGetParent(commitVariant: GLib.Variant): string
export function commitGetTimestamp(commitVariant: GLib.Variant): number
export function commitMetadataForBootable(root: Gio.File, dict: GLib.VariantDict, cancellable?: Gio.Cancellable | null): boolean
export function contentFileParse(compressed: boolean, contentPath: Gio.File, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
export function contentFileParseAt(compressed: boolean, parentDfd: number, path: string, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
export function contentStreamParse(compressed: boolean, input: Gio.InputStream, inputLength: number, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
export function createDirectoryMetadata(dirInfo: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant
export function diffDirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable?: Gio.Cancellable | null): boolean
export function diffDirsWithOptions(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], options?: DiffDirsOptions | null, cancellable?: Gio.Cancellable | null): boolean
export function diffPrint(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
export function gpgErrorQuark(): GLib.Quark
export function hashObjectName(a?: object | null): number
export function kernelArgsCleanup(loc?: object | null): void
export function metadataVariantType(objtype: ObjectType): GLib.VariantType
export function objectFromString(str: string): [ /* outChecksum */ string, /* outObjtype */ ObjectType ]
export function objectNameDeserialize(variant: GLib.Variant): [ /* outChecksum */ string, /* outObjtype */ ObjectType ]
export function objectNameSerialize(checksum: string, objtype: ObjectType): GLib.Variant
export function objectToString(checksum: string, objtype: ObjectType): string
export function objectTypeFromString(str: string): ObjectType
export function objectTypeToString(objtype: ObjectType): string
export function parseRefspec(refspec: string): [ /* returnType */ boolean, /* outRemote */ string | null, /* outRef */ string | null ]
export function rawFileToArchiveZ2Stream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream ]
export function rawFileToArchiveZ2StreamWithOptions(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream ]
export function rawFileToContentStream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outLength */ number ]
export function repoCommitTraverseIterCleanup(p?: object | null): void
export function repoFinderResolveAllAsync(finders: RepoFinder[], refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function repoFinderResolveAllFinish(result: Gio.AsyncResult): RepoFinderResult[]
export function repoFinderResultFreev(results: RepoFinderResult[]): void
export function signGetAll(): Sign[]
export function signGetByName(name: string): Sign
export function validateChecksumString(sha256: string): boolean
export function validateCollectionId(collectionId?: string | null): boolean
export function validateRemoteName(remoteName: string): boolean
export function validateRev(rev: string): boolean
export function validateStructureofChecksumString(checksum: string): boolean
export function validateStructureofCommit(commit: GLib.Variant): boolean
export function validateStructureofCsumV(checksum: GLib.Variant): boolean
export function validateStructureofDirmeta(dirmeta: GLib.Variant): boolean
export function validateStructureofDirtree(dirtree: GLib.Variant): boolean
export function validateStructureofFileMode(mode: number): boolean
export function validateStructureofObjtype(objtype: number): boolean
export interface RepoCheckoutFilter {
    (repo: Repo, path: string, stbuf?: object | null): RepoCheckoutFilterResult
}
export interface RepoCommitFilter {
    (repo: Repo, path: string, fileInfo: Gio.FileInfo): RepoCommitFilterResult
}
export interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string, fileInfo: Gio.FileInfo): GLib.Variant
}
export interface RepoImportArchiveTranslatePathname {
    (repo: Repo, stbuf: object | null, srcPath: string): string
}
export class RepoFinder {
    /* Methods of OSTree.RepoFinder */
    resolveAsync(refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(result: Gio.AsyncResult): RepoFinderResult[]
    /* Virtual methods of OSTree.RepoFinder */
    vfuncResolveAsync?(refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncResolveFinish?(result: Gio.AsyncResult): RepoFinderResult[]
    static name: string
    static resolveAllAsync(finders: RepoFinder[], refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static resolveAllFinish(result: Gio.AsyncResult): RepoFinderResult[]
}
export class Sign {
    /* Methods of OSTree.Sign */
    addPk(publicKey: GLib.Variant): boolean
    clearKeys(): boolean
    commit(repo: Repo, commitChecksum: string, cancellable?: Gio.Cancellable | null): boolean
    commitVerify(repo: Repo, commitChecksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSuccessMessage */ string | null ]
    data(data: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* signature */ any ]
    dataVerify(data: any, signatures: GLib.Variant): [ /* returnType */ boolean, /* outSuccessMessage */ string | null ]
    dummyAddPk(key: GLib.Variant): boolean
    dummyData(data: any, signature: any, cancellable?: Gio.Cancellable | null): boolean
    dummyDataVerify(data: any, signatures: GLib.Variant, successMessage: string): boolean
    dummyGetName(): string
    dummyMetadataFormat(): string
    dummyMetadataKey(): string
    dummySetPk(key: GLib.Variant): boolean
    dummySetSk(key: GLib.Variant): boolean
    ed25519AddPk(publicKey: GLib.Variant): boolean
    ed25519ClearKeys(): boolean
    ed25519Data(data: any, signature: any, cancellable?: Gio.Cancellable | null): boolean
    ed25519DataVerify(data: any, signatures: GLib.Variant, outSuccessMessage: string): boolean
    ed25519GetName(): string
    ed25519LoadPk(options: GLib.Variant): boolean
    ed25519MetadataFormat(): string
    ed25519MetadataKey(): string
    ed25519SetPk(publicKey: GLib.Variant): boolean
    ed25519SetSk(secretKey: GLib.Variant): boolean
    getName(): string
    loadPk(options: GLib.Variant): boolean
    metadataFormat(): string
    metadataKey(): string
    setPk(publicKey: GLib.Variant): boolean
    setSk(secretKey: GLib.Variant): boolean
    summary(repo: Repo, keys: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of OSTree.Sign */
    vfuncAddPk?(publicKey: GLib.Variant): boolean
    vfuncClearKeys?(): boolean
    vfuncData?(data: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* signature */ any ]
    vfuncDataVerify?(data: any, signatures: GLib.Variant): [ /* returnType */ boolean, /* outSuccessMessage */ string | null ]
    vfuncGetName?(): string
    vfuncLoadPk?(options: GLib.Variant): boolean
    vfuncMetadataFormat?(): string
    vfuncMetadataKey?(): string
    vfuncSetPk?(publicKey: GLib.Variant): boolean
    vfuncSetSk?(secretKey: GLib.Variant): boolean
    static name: string
    static getAll(): Sign[]
    static getByName(name: string): Sign
}
export interface AsyncProgress_ConstructProps extends GObject.Object_ConstructProps {
}
export class AsyncProgress {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.AsyncProgress */
    copyState(dest: AsyncProgress): void
    finish(): void
    getStatus(): string | null
    getUint(key: string): number
    getUint64(key: string): number
    getVariant(key: string): GLib.Variant | null
    setStatus(status?: string | null): void
    setUint(key: string, value: number): void
    setUint64(key: string, value: number): void
    setVariant(key: string, value: GLib.Variant): void
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
    /* Virtual methods of OSTree.AsyncProgress */
    vfuncChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of OSTree.AsyncProgress */
    connect(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AsyncProgress_ConstructProps)
    _init (config?: AsyncProgress_ConstructProps): void
    static new(): AsyncProgress
    static newAndConnect(changed?: object | null, userData?: object | null): AsyncProgress
    static $gtype: GObject.Type
}
export interface BootconfigParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class BootconfigParser {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.BootconfigParser */
    clone(): BootconfigParser
    get(key: string): string
    getOverlayInitrds(): string[] | null
    parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    parseAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    set(key: string, value: string): void
    setOverlayInitrds(initrds?: string[] | null): void
    write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    writeAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BootconfigParser_ConstructProps)
    _init (config?: BootconfigParser_ConstructProps): void
    static new(): BootconfigParser
    static $gtype: GObject.Type
}
export interface ChecksumInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    checksum?: object
}
export class ChecksumInputStream {
    /* Properties of OSTree.ChecksumInputStream */
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of OSTree.ChecksumInputStream */
    parentInstance: Gio.FilterInputStream
    /* Fields of Gio.FilterInputStream */
    baseStream: Gio.InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: Gio.AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Gio.Cancellable | null): boolean
    vfuncReadAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: Gio.AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkipAsync?(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChecksumInputStream_ConstructProps)
    _init (config?: ChecksumInputStream_ConstructProps): void
    static new(stream: Gio.InputStream, checksum: GLib.Checksum): ChecksumInputStream
    static $gtype: GObject.Type
}
export interface Deployment_ConstructProps extends GObject.Object_ConstructProps {
}
export class Deployment {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.Deployment */
    clone(): Deployment
    equal(bp: Deployment): boolean
    getBootconfig(): BootconfigParser
    getBootcsum(): string
    getBootserial(): number
    getCsum(): string
    getDeployserial(): number
    getIndex(): number
    getOrigin(): GLib.KeyFile
    getOriginRelpath(): string
    getOsname(): string
    getUnlocked(): DeploymentUnlockedState
    hash(): number
    isPinned(): boolean
    isStaged(): boolean
    setBootconfig(bootconfig?: BootconfigParser | null): void
    setBootserial(index: number): void
    setIndex(index: number): void
    setOrigin(origin?: GLib.KeyFile | null): void
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
    connect(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    static new(index: number, osname: string, csum: string, deployserial: number, bootcsum: string | null, bootserial: number): Deployment
    static originRemoveTransientState(origin: GLib.KeyFile): void
    static unlockedStateToString(state: DeploymentUnlockedState): string
    static $gtype: GObject.Type
}
export interface GpgVerifyResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class GpgVerifyResult {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.GpgVerifyResult */
    countAll(): number
    countValid(): number
    describe(signatureIndex: number, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    get(signatureIndex: number, attrs: GpgSignatureAttr[]): GLib.Variant
    getAll(signatureIndex: number): GLib.Variant
    lookup(keyId: string): [ /* returnType */ boolean, /* outSignatureIndex */ number ]
    requireValidSignature(): boolean
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
    connect(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GpgVerifyResult_ConstructProps)
    _init (config?: GpgVerifyResult_ConstructProps): void
    static describeVariant(variant: GLib.Variant, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    static $gtype: GObject.Type
}
export interface MutableTree_ConstructProps extends GObject.Object_ConstructProps {
}
export class MutableTree {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.MutableTree */
    checkError(): boolean
    ensureDir(name: string): [ /* returnType */ boolean, /* outSubdir */ MutableTree ]
    ensureParentDirs(splitPath: string[], metadataChecksum: string): [ /* returnType */ boolean, /* outParent */ MutableTree ]
    fillEmptyFromDirtree(repo: Repo, contentsChecksum: string, metadataChecksum: string): boolean
    getContentsChecksum(): string
    getFiles(): GLib.HashTable
    getMetadataChecksum(): string
    getSubdirs(): GLib.HashTable
    lookup(name: string): [ /* returnType */ boolean, /* outFileChecksum */ string, /* outSubdir */ MutableTree ]
    remove(name: string, allowNoent: boolean): boolean
    replaceFile(name: string, checksum: string): boolean
    setContentsChecksum(checksum: string): void
    setMetadataChecksum(checksum: string): void
    walk(splitPath: string[], start: number): [ /* returnType */ boolean, /* outSubdir */ MutableTree ]
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
    connect(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MutableTree_ConstructProps)
    _init (config?: MutableTree_ConstructProps): void
    static new(): MutableTree
    static newFromChecksum(repo: Repo, contentsChecksum: string, metadataChecksum: string): MutableTree
    static $gtype: GObject.Type
}
export interface Repo_ConstructProps extends GObject.Object_ConstructProps {
    path?: Gio.File
    remotesConfigDir?: string
    sysrootPath?: Gio.File
}
export class Repo {
    /* Properties of OSTree.Repo */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.Repo */
    abortTransaction(cancellable?: Gio.Cancellable | null): boolean
    addGpgSignatureSummary(keyId: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    appendGpgSignature(commitChecksum: string, signatureBytes: any, cancellable?: Gio.Cancellable | null): boolean
    checkoutAt(options: RepoCheckoutAtOptions | null, destinationDfd: number, destinationPath: string, commit: string, cancellable?: Gio.Cancellable | null): boolean
    checkoutGc(cancellable?: Gio.Cancellable | null): boolean
    checkoutTree(mode: RepoCheckoutMode, overwriteMode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, sourceInfo: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    commitTransaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outStats */ RepoTransactionStats | null ]
    copyConfig(): GLib.KeyFile
    create(mode: RepoMode, cancellable?: Gio.Cancellable | null): boolean
    deleteObject(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean
    equal(b: Repo): boolean
    findRemotesAsync(refs: CollectionRef[], options: GLib.Variant | null, finders: RepoFinder[], progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findRemotesFinish(result: Gio.AsyncResult): RepoFinderResult[]
    fsckObject(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean
    getBootloader(): string
    getCollectionId(): string | null
    getConfig(): GLib.KeyFile
    getDefaultRepoFinders(): string[]
    getDfd(): number
    getDisableFsync(): boolean
    getMinFreeSpaceBytes(): [ /* returnType */ boolean, /* outReservedBytes */ number ]
    getMode(): RepoMode
    getParent(): Repo
    getPath(): Gio.File
    getRemoteBooleanOption(remoteName: string, optionName: string, defaultValue: boolean): [ /* returnType */ boolean, /* outValue */ boolean ]
    getRemoteListOption(remoteName: string, optionName: string): [ /* returnType */ boolean, /* outValue */ string[] ]
    getRemoteOption(remoteName: string, optionName: string, defaultValue?: string | null): [ /* returnType */ boolean, /* outValue */ string ]
    gpgSignData(data: any, oldSignatures: any, keyId: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSignatures */ any ]
    gpgVerifyData(remoteName: string | null, data: any, signatures: any, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    hasObject(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHaveObject */ boolean ]
    hash(): number
    importObjectFrom(source: Repo, objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): boolean
    importObjectFromWithTrust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable?: Gio.Cancellable | null): boolean
    isSystem(): boolean
    isWritable(): boolean
    listCollectionRefs(matchCollectionId: string | null, flags: RepoListRefsExtFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    listCommitObjectsStartingWith(start: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommits */ GLib.HashTable ]
    listObjects(flags: RepoListObjectsFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ GLib.HashTable ]
    listRefs(refspecPrefix?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    listRefsExt(refspecPrefix: string | null, flags: RepoListRefsExtFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    listStaticDeltaIndexes(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIndexes */ string[] ]
    listStaticDeltaNames(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDeltas */ string[] ]
    loadCommit(checksum: string): [ /* returnType */ boolean, /* outCommit */ GLib.Variant | null, /* outState */ RepoCommitState | null ]
    loadFile(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream | null, /* outFileInfo */ Gio.FileInfo | null, /* outXattrs */ GLib.Variant | null ]
    loadObjectStream(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outSize */ number ]
    loadVariant(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* outVariant */ GLib.Variant ]
    loadVariantIfExists(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* outVariant */ GLib.Variant ]
    markCommitPartial(checksum: string, isPartial: boolean): boolean
    markCommitPartialReason(checksum: string, isPartial: boolean, inState: RepoCommitState): boolean
    open(cancellable?: Gio.Cancellable | null): boolean
    prepareTransaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTransactionResume */ boolean | null ]
    prune(flags: RepoPruneFlags, depth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjectsTotal */ number, /* outObjectsPruned */ number, /* outPrunedObjectSizeTotal */ number ]
    pruneFromReachable(options: RepoPruneOptions, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjectsTotal */ number, /* outObjectsPruned */ number, /* outPrunedObjectSizeTotal */ number ]
    pruneStaticDeltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    pull(remoteName: string, refsToFetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    pullFromRemotesAsync(results: RepoFinderResult[], options?: GLib.Variant | null, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    pullFromRemotesFinish(result: Gio.AsyncResult): boolean
    pullOneDir(remoteName: string, dirToPull: string, refsToFetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    pullWithOptions(remoteNameOrBaseurl: string, options: GLib.Variant, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    queryObjectStorageSize(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSize */ number ]
    readCommit(ref: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRoot */ Gio.File, /* outCommit */ string ]
    readCommitDetachedMetadata(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMetadata */ GLib.Variant ]
    regenerateSummary(additionalMetadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    reloadConfig(cancellable?: Gio.Cancellable | null): boolean
    remoteAdd(name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remoteChange(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remoteDelete(name: string, cancellable?: Gio.Cancellable | null): boolean
    remoteFetchSummary(name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSummary */ any, /* outSignatures */ any ]
    remoteFetchSummaryWithOptions(name: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSummary */ any, /* outSignatures */ any ]
    remoteGetGpgVerify(name: string): [ /* returnType */ boolean, /* outGpgVerify */ boolean | null ]
    remoteGetGpgVerifySummary(name: string): [ /* returnType */ boolean, /* outGpgVerifySummary */ boolean | null ]
    remoteGetUrl(name: string): [ /* returnType */ boolean, /* outUrl */ string | null ]
    remoteGpgImport(name: string, sourceStream?: Gio.InputStream | null, keyIds?: string[] | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outImported */ number | null ]
    remoteList(): string[]
    remoteListCollectionRefs(remoteName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    remoteListRefs(remoteName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    resolveCollectionRef(ref: CollectionRef, allowNoent: boolean, flags: RepoResolveRevExtFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRev */ string | null ]
    resolveKeyringForCollection(collectionId: string, cancellable?: Gio.Cancellable | null): Remote
    resolveRev(refspec: string, allowNoent: boolean): [ /* returnType */ boolean, /* outRev */ string | null ]
    resolveRevExt(refspec: string, allowNoent: boolean, flags: RepoResolveRevExtFlags): [ /* returnType */ boolean, /* outRev */ string | null ]
    scanHardlinks(cancellable?: Gio.Cancellable | null): boolean
    setAliasRefImmediate(remote: string | null, ref: string, target?: string | null, cancellable?: Gio.Cancellable | null): boolean
    setCacheDir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    setCollectionId(collectionId?: string | null): boolean
    setCollectionRefImmediate(ref: CollectionRef, checksum?: string | null, cancellable?: Gio.Cancellable | null): boolean
    setDisableFsync(disableFsync: boolean): void
    setRefImmediate(remote: string | null, ref: string, checksum?: string | null, cancellable?: Gio.Cancellable | null): boolean
    signCommit(commitChecksum: string, keyId: string, homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    signDelta(fromCommit: string, toCommit: string, keyId: string, homedir: string, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaExecuteOffline(dirOrFile: Gio.File, skipValidation: boolean, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaExecuteOfflineWithSignature(dirOrFile: Gio.File, sign: Sign, skipValidation: boolean, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaGenerate(opt: StaticDeltaGenerateOpt, from: string | null, to: string, metadata?: GLib.Variant | null, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaReindex(flags: StaticDeltaIndexFlags, optToCommit: string, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaVerifySignature(deltaId: string, sign: Sign): [ /* returnType */ boolean, /* outSuccessMessage */ string | null ]
    transactionSetCollectionRef(ref: CollectionRef, checksum?: string | null): void
    transactionSetRef(remote: string | null, ref: string, checksum?: string | null): void
    transactionSetRefspec(refspec: string, checksum?: string | null): void
    traverseCommit(commitChecksum: string, maxdepth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReachable */ GLib.HashTable ]
    traverseReachableRefs(depth: number, reachable: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    verifyCommit(commitChecksum: string, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): boolean
    verifyCommitExt(commitChecksum: string, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    verifyCommitForRemote(commitChecksum: string, remoteName: string, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    verifySummary(remoteName: string, summary: any, signatures: any, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    writeArchiveToMtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreateParents: boolean, cancellable?: Gio.Cancellable | null): boolean
    writeArchiveToMtreeFromFd(fd: number, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreateParents: boolean, cancellable?: Gio.Cancellable | null): boolean
    writeCommit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommit */ string ]
    writeCommitDetachedMetadata(checksum: string, metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    writeCommitWithTime(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommit */ string ]
    writeConfig(newConfig: GLib.KeyFile): boolean
    writeContent(expectedChecksum: string | null, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ any | null ]
    writeContentAsync(expectedChecksum: string | null, object: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeContentFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ number ]
    writeContentTrusted(checksum: string, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    writeDfdToMtree(dfd: number, path: string, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    writeDirectoryToMtree(dir: Gio.File, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    writeMetadata(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ any | null ]
    writeMetadataAsync(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeMetadataFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ any ]
    writeMetadataStreamTrusted(objtype: ObjectType, checksum: string, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    writeMetadataTrusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    writeMtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFile */ Gio.File ]
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
    /* Signals of OSTree.Repo */
    connect(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    connect_after(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    emit(sigName: "gpg-verify-result", checksum: string, result: GpgVerifyResult): void
    on(sigName: "gpg-verify-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gpg-verify-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gpg-verify-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Repo_ConstructProps)
    _init (config?: Repo_ConstructProps): void
    static new(path: Gio.File): Repo
    static newDefault(): Repo
    static newForSysrootPath(repoPath: Gio.File, sysrootPath: Gio.File): Repo
    static createAt(dfd: number, path: string, mode: RepoMode, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): Repo
    static modeFromString(mode: string): [ /* returnType */ boolean, /* outMode */ RepoMode ]
    static openAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): Repo
    static pullDefaultConsoleProgressChanged(progress: AsyncProgress, userData?: object | null): void
    static traverseNewParents(): GLib.HashTable
    static traverseNewReachable(): GLib.HashTable
    static traverseParentsGetCommits(parents: GLib.HashTable, object: GLib.Variant): string[]
    static $gtype: GObject.Type
}
export interface RepoFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class RepoFile {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.RepoFile */
    ensureResolved(): boolean
    getChecksum(): string
    getRepo(): Repo
    getRoot(): RepoFile
    getXattrs(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outXattrs */ GLib.Variant | null ]
    treeFindChild(name: string): [ /* returnType */ number, /* isDir */ boolean, /* outContainer */ GLib.Variant ]
    treeGetContents(): GLib.Variant
    treeGetContentsChecksum(): string
    treeGetMetadata(): GLib.Variant
    treeGetMetadataChecksum(): string
    treeQueryChild(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInfo */ Gio.FileInfo ]
    treeSetMetadata(checksum: string, metadata: GLib.Variant): void
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
    /* Methods of Gio.File */
    appendTo(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    appendToAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    appendToFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    buildAttributeListForCopy(flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): string
    copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null): boolean
    copyAsync(destination: Gio.File, flags: Gio.FileCopyFlags, ioPriority: number, cancellable?: Gio.Cancellable | null): void
    copyAttributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
    copyFinish(res: Gio.AsyncResult): boolean
    create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    createAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    createReadwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    createReadwriteAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    delete(cancellable?: Gio.Cancellable | null): boolean
    deleteAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    dup(): Gio.File
    ejectMountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ejectMountableFinish(result: Gio.AsyncResult): boolean
    ejectMountableWithOperation(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ejectMountableWithOperationFinish(result: Gio.AsyncResult): boolean
    enumerateChildren(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    enumerateChildrenAsync(attributes: string, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerateChildrenFinish(res: Gio.AsyncResult): Gio.FileEnumerator
    equal(file2: Gio.File): boolean
    findEnclosingMount(cancellable?: Gio.Cancellable | null): Gio.Mount
    findEnclosingMountAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findEnclosingMountFinish(res: Gio.AsyncResult): Gio.Mount
    getBasename(): string | null
    getChild(name: string): Gio.File
    getChildForDisplayName(displayName: string): Gio.File
    getParent(): Gio.File | null
    getParseName(): string
    getPath(): string | null
    getRelativePath(descendant: Gio.File): string | null
    getUri(): string
    getUriScheme(): string | null
    hasParent(parent?: Gio.File | null): boolean
    hasPrefix(prefix: Gio.File): boolean
    hasUriScheme(uriScheme: string): boolean
    hash(): number
    isNative(): boolean
    loadBytes(cancellable?: Gio.Cancellable | null): [ /* returnType */ any, /* etagOut */ string | null ]
    loadBytesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadBytesFinish(result: Gio.AsyncResult): [ /* returnType */ any, /* etagOut */ string | null ]
    loadContents(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ any, /* etagOut */ string | null ]
    loadContentsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadContentsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ any, /* etagOut */ string | null ]
    loadPartialContentsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ any, /* etagOut */ string | null ]
    makeDirectory(cancellable?: Gio.Cancellable | null): boolean
    makeDirectoryAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    makeDirectoryFinish(result: Gio.AsyncResult): boolean
    makeDirectoryWithParents(cancellable?: Gio.Cancellable | null): boolean
    makeSymbolicLink(symlinkValue: string, cancellable?: Gio.Cancellable | null): boolean
    measureDiskUsageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    monitor(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    monitorDirectory(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    monitorFile(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    mountEnclosingVolume(flags: Gio.MountMountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mountEnclosingVolumeFinish(result: Gio.AsyncResult): boolean
    mountMountable(flags: Gio.MountMountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mountMountableFinish(result: Gio.AsyncResult): Gio.File
    move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null): boolean
    openReadwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    openReadwriteAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    peekPath(): string | null
    pollMountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    pollMountableFinish(result: Gio.AsyncResult): boolean
    queryDefaultHandler(cancellable?: Gio.Cancellable | null): Gio.AppInfo
    queryDefaultHandlerAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryDefaultHandlerFinish(result: Gio.AsyncResult): Gio.AppInfo
    queryExists(cancellable?: Gio.Cancellable | null): boolean
    queryFileType(flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileType
    queryFilesystemInfo(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFilesystemInfoFinish(res: Gio.AsyncResult): Gio.FileInfo
    queryInfo(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    queryInfoAsync(attributes: string, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryInfoFinish(res: Gio.AsyncResult): Gio.FileInfo
    querySettableAttributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    queryWritableNamespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    read(cancellable?: Gio.Cancellable | null): Gio.FileInputStream
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readFinish(res: Gio.AsyncResult): Gio.FileInputStream
    replace(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    replaceAsync(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceContents(contents: any, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* newEtag */ string | null ]
    replaceContentsAsync(contents: any, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceContentsBytesAsync(contents: any, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceContentsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* newEtag */ string | null ]
    replaceFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    replaceReadwrite(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    replaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    resolveRelativePath(relativePath: string): Gio.File
    setAttribute(attribute: string, type: Gio.FileAttributeType, valueP: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeByteString(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeInt32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeInt64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeString(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeUint32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeUint64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributesAsync(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAttributesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* info */ Gio.FileInfo ]
    setAttributesFromInfo(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setDisplayName(displayName: string, cancellable?: Gio.Cancellable | null): Gio.File
    setDisplayNameAsync(displayName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDisplayNameFinish(res: Gio.AsyncResult): Gio.File
    startMountable(flags: Gio.DriveStartFlags, startOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startMountableFinish(result: Gio.AsyncResult): boolean
    stopMountable(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stopMountableFinish(result: Gio.AsyncResult): boolean
    supportsThreadContexts(): boolean
    trash(cancellable?: Gio.Cancellable | null): boolean
    trashAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trashFinish(result: Gio.AsyncResult): boolean
    unmountMountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unmountMountableFinish(result: Gio.AsyncResult): boolean
    unmountMountableWithOperation(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unmountMountableWithOperationFinish(result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RepoFile_ConstructProps)
    _init (config?: RepoFile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RepoFinderAvahi_ConstructProps extends GObject.Object_ConstructProps {
}
export class RepoFinderAvahi {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.RepoFinderAvahi */
    start(): void
    stop(): void
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
    /* Methods of OSTree.RepoFinder */
    resolveAsync(refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(result: Gio.AsyncResult): RepoFinderResult[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFinderAvahi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFinderAvahi, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RepoFinderAvahi_ConstructProps)
    _init (config?: RepoFinderAvahi_ConstructProps): void
    static new(context?: GLib.MainContext | null): RepoFinderAvahi
    static $gtype: GObject.Type
}
export interface RepoFinderConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class RepoFinderConfig {
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
    /* Methods of OSTree.RepoFinder */
    resolveAsync(refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(result: Gio.AsyncResult): RepoFinderResult[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFinderConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFinderConfig, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RepoFinderConfig_ConstructProps)
    _init (config?: RepoFinderConfig_ConstructProps): void
    static new(): RepoFinderConfig
    static $gtype: GObject.Type
}
export interface RepoFinderMount_ConstructProps extends GObject.Object_ConstructProps {
    monitor?: Gio.VolumeMonitor
}
export class RepoFinderMount {
    /* Properties of OSTree.RepoFinderMount */
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
    /* Methods of OSTree.RepoFinder */
    resolveAsync(refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(result: Gio.AsyncResult): RepoFinderResult[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFinderMount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFinderMount, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RepoFinderMount_ConstructProps)
    _init (config?: RepoFinderMount_ConstructProps): void
    static new(monitor?: Gio.VolumeMonitor | null): RepoFinderMount
    static $gtype: GObject.Type
}
export interface RepoFinderOverride_ConstructProps extends GObject.Object_ConstructProps {
}
export class RepoFinderOverride {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.RepoFinderOverride */
    addUri(uri: string): void
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
    /* Methods of OSTree.RepoFinder */
    resolveAsync(refs: CollectionRef[], parentRepo: Repo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(result: Gio.AsyncResult): RepoFinderResult[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFinderOverride, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFinderOverride, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RepoFinderOverride_ConstructProps)
    _init (config?: RepoFinderOverride_ConstructProps): void
    static new(): RepoFinderOverride
    static $gtype: GObject.Type
}
export interface SePolicy_ConstructProps extends GObject.Object_ConstructProps {
    path?: Gio.File
    rootfsDfd?: number
}
export class SePolicy {
    /* Properties of OSTree.SePolicy */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.SePolicy */
    getCsum(): string
    getLabel(relpath: string, unixMode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLabel */ string | null ]
    getName(): string
    getPath(): Gio.File
    restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewLabel */ string | null ]
    setfscreatecon(path: string, mode: number): boolean
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
    connect(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SePolicy_ConstructProps)
    _init (config?: SePolicy_ConstructProps): void
    static new(path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy
    static newAt(rootfsDfd: number, cancellable?: Gio.Cancellable | null): SePolicy
    static fscreateconCleanup(unused?: object | null): void
    static $gtype: GObject.Type
}
export interface Sysroot_ConstructProps extends GObject.Object_ConstructProps {
    path?: Gio.File
}
export class Sysroot {
    /* Properties of OSTree.Sysroot */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.Sysroot */
    cleanup(cancellable?: Gio.Cancellable | null): boolean
    cleanupPruneRepo(options: RepoPruneOptions, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjectsTotal */ number, /* outObjectsPruned */ number, /* outPrunedObjectSizeTotal */ number ]
    deployTree(osname: string | null, revision: string, origin?: GLib.KeyFile | null, providedMergeDeployment?: Deployment | null, overrideKernelArgv?: string[] | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewDeployment */ Deployment ]
    deployTreeWithOptions(osname: string | null, revision: string, origin?: GLib.KeyFile | null, providedMergeDeployment?: Deployment | null, opts?: SysrootDeployTreeOpts | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewDeployment */ Deployment ]
    deploymentSetKargs(deployment: Deployment, newKargs: string[], cancellable?: Gio.Cancellable | null): boolean
    deploymentSetMutable(deployment: Deployment, isMutable: boolean, cancellable?: Gio.Cancellable | null): boolean
    deploymentSetPinned(deployment: Deployment, isPinned: boolean): boolean
    deploymentUnlock(deployment: Deployment, unlockedState: DeploymentUnlockedState, cancellable?: Gio.Cancellable | null): boolean
    ensureInitialized(cancellable?: Gio.Cancellable | null): boolean
    getBootedDeployment(): Deployment | null
    getBootversion(): number
    getDeploymentDirectory(deployment: Deployment): Gio.File
    getDeploymentDirpath(deployment: Deployment): string
    getDeployments(): Deployment[]
    getFd(): number
    getMergeDeployment(osname?: string | null): Deployment | null
    getPath(): Gio.File
    getRepo(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRepo */ Repo | null ]
    getStagedDeployment(): Deployment | null
    getSubbootversion(): number
    initOsname(osname: string, cancellable?: Gio.Cancellable | null): boolean
    initialize(): boolean
    isBooted(): boolean
    load(cancellable?: Gio.Cancellable | null): boolean
    loadIfChanged(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outChanged */ boolean ]
    lock(): boolean
    lockAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(result: Gio.AsyncResult): boolean
    originNewFromRefspec(refspec: string): GLib.KeyFile
    prepareCleanup(cancellable?: Gio.Cancellable | null): boolean
    queryDeploymentsFor(osname?: string | null): [ /* outPending */ Deployment | null, /* outRollback */ Deployment | null ]
    repo(): Repo
    requireBootedDeployment(): Deployment
    setMountNamespaceInUse(): void
    simpleWriteDeployment(osname: string | null, newDeployment: Deployment, mergeDeployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable?: Gio.Cancellable | null): boolean
    stageOverlayInitrd(fd: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outChecksum */ string ]
    stageTree(osname: string | null, revision: string, origin?: GLib.KeyFile | null, mergeDeployment?: Deployment | null, overrideKernelArgv?: string[] | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewDeployment */ Deployment ]
    stageTreeWithOptions(osname: string | null, revision: string, origin: GLib.KeyFile | null, mergeDeployment: Deployment | null, opts: SysrootDeployTreeOpts, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewDeployment */ Deployment ]
    tryLock(): [ /* returnType */ boolean, /* outAcquired */ boolean ]
    unload(): void
    unlock(): void
    writeDeployments(newDeployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean
    writeDeploymentsWithOptions(newDeployments: Deployment[], opts: SysrootWriteDeploymentsOpts, cancellable?: Gio.Cancellable | null): boolean
    writeOriginFile(deployment: Deployment, newOrigin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of OSTree.Sysroot */
    connect(sigName: "journal-msg", callback: (($obj: Sysroot, msg: string) => void)): number
    connect_after(sigName: "journal-msg", callback: (($obj: Sysroot, msg: string) => void)): number
    emit(sigName: "journal-msg", msg: string): void
    on(sigName: "journal-msg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "journal-msg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "journal-msg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Sysroot_ConstructProps)
    _init (config?: Sysroot_ConstructProps): void
    static new(path?: Gio.File | null): Sysroot
    static newDefault(): Sysroot
    static getDeploymentOriginPath(deploymentPath: Gio.File): Gio.File
    static $gtype: GObject.Type
}
export interface SysrootUpgrader_ConstructProps extends GObject.Object_ConstructProps {
    flags?: SysrootUpgraderFlags
    osname?: string
    sysroot?: Sysroot
}
export class SysrootUpgrader {
    /* Properties of OSTree.SysrootUpgrader */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree.SysrootUpgrader */
    deploy(cancellable?: Gio.Cancellable | null): boolean
    dupOrigin(): GLib.KeyFile
    getOrigin(): GLib.KeyFile
    getOriginDescription(): string
    pull(flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outChanged */ boolean ]
    pullOneDir(dirToPull: string, flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outChanged */ boolean ]
    setOrigin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SysrootUpgrader_ConstructProps)
    _init (config?: SysrootUpgrader_ConstructProps): void
    static new(sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static newForOs(sysroot: Sysroot, osname?: string | null, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static newForOsWithFlags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static checkTimestamps(repo: Repo, fromRev: string, toRev: string): boolean
    static $gtype: GObject.Type
}
export abstract class AsyncProgressClass {
    /* Fields of OSTree.AsyncProgressClass */
    parentClass: GObject.ObjectClass
    changed: any
    static name: string
}
export class Bootloader {
    static name: string
}
export class BootloaderGrub2 {
    static name: string
}
export class BootloaderInterface {
    /* Fields of OSTree.BootloaderInterface */
    gIface: GObject.TypeInterface
    query: any
    getName: any
    postBlsSync: any
    isAtomic: any
    static name: string
}
export class BootloaderSyslinux {
    static name: string
}
export class BootloaderUboot {
    static name: string
}
export class BootloaderZipl {
    static name: string
}
export abstract class ChecksumInputStreamClass {
    /* Fields of OSTree.ChecksumInputStreamClass */
    parentClass: Gio.FilterInputStreamClass
    static name: string
}
export class ChecksumInputStreamPrivate {
    static name: string
}
export class CmdPrivateVTable {
    /* Fields of OSTree.CmdPrivateVTable */
    ostreeSystemGenerator: any
    ostreeGenerateGrub2Config: any
    ostreeStaticDeltaDump: any
    ostreeStaticDeltaQueryExists: any
    ostreeStaticDeltaDelete: any
    ostreeRepoVerifyBindings: any
    ostreeFinalizeStaged: any
    static name: string
}
export class CollectionRef {
    /* Fields of OSTree.CollectionRef */
    collectionId: string
    refName: string
    /* Methods of OSTree.CollectionRef */
    dup(): CollectionRef
    free(): void
    static name: string
    static new(collectionId: string | null, refName: string): CollectionRef | null
    constructor(collectionId: string | null, refName: string)
    static new(collectionId: string | null, refName: string): CollectionRef | null
    static dupv(refs: CollectionRef[]): CollectionRef[]
    static equal(ref1: object, ref2: object): boolean
    static freev(refs: CollectionRef[]): void
    static hash(ref: object): number
}
export class CommitSizesEntry {
    /* Fields of OSTree.CommitSizesEntry */
    checksum: string
    objtype: ObjectType
    unpacked: number
    archived: number
    /* Methods of OSTree.CommitSizesEntry */
    copy(): CommitSizesEntry | null
    free(): void
    static name: string
    static new(checksum: string, objtype: ObjectType, unpacked: number, archived: number): CommitSizesEntry | null
    constructor(checksum: string, objtype: ObjectType, unpacked: number, archived: number)
    static new(checksum: string, objtype: ObjectType, unpacked: number, archived: number): CommitSizesEntry | null
}
export class DiffDirsOptions {
    /* Fields of OSTree.DiffDirsOptions */
    ownerUid: number
    ownerGid: number
    devinoToCsumCache: RepoDevInoCache
    unusedBools: boolean[]
    unusedInts: number[]
    unusedPtrs: object[]
    static name: string
}
export class DiffItem {
    /* Fields of OSTree.DiffItem */
    refcount: number
    src: Gio.File
    target: Gio.File
    srcInfo: Gio.FileInfo
    targetInfo: Gio.FileInfo
    srcChecksum: string
    targetChecksum: string
    /* Methods of OSTree.DiffItem */
    ref(): DiffItem
    unref(): void
    static name: string
}
export class GpgVerifier {
    static name: string
}
export class KernelArgs {
    /* Methods of OSTree.KernelArgs */
    append(arg: string): void
    appendArgv(argv: string): void
    appendArgvFiltered(argv: string, prefixes: string): void
    appendProcCmdline(cancellable?: Gio.Cancellable | null): boolean
    delete(arg: string): boolean
    deleteKeyEntry(key: string): boolean
    free(): void
    getLastValue(key: string): string
    newReplace(arg: string): boolean
    parseAppend(options: string): void
    replace(arg: string): void
    replaceArgv(argv: string): void
    replaceTake(arg: string): void
    toStrv(): string[]
    static name: string
    static cleanup(loc?: object | null): void
}
export class KernelArgsEntry {
    static name: string
}
export class LibarchiveInputStream {
    /* Fields of OSTree.LibarchiveInputStream */
    parentInstance: Gio.InputStream
    static name: string
}
export class LibarchiveInputStreamClass {
    /* Fields of OSTree.LibarchiveInputStreamClass */
    parentClass: Gio.InputStreamClass
    static name: string
}
export class LibarchiveInputStreamPrivate {
    static name: string
}
export class LzmaCompressor {
    static name: string
}
export class LzmaCompressorClass {
    /* Fields of OSTree.LzmaCompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LzmaDecompressor {
    static name: string
}
export class LzmaDecompressorClass {
    /* Fields of OSTree.LzmaDecompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MutableTreeClass {
    /* Fields of OSTree.MutableTreeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MutableTreeIter {
    /* Fields of OSTree.MutableTreeIter */
    inFiles: boolean
    iter: GLib.HashTableIter
    static name: string
}
export class Remote {
    /* Methods of OSTree.Remote */
    getName(): string
    getUrl(): string
    ref(): Remote
    unref(): void
    static name: string
}
export class RepoCheckoutAtOptions {
    /* Fields of OSTree.RepoCheckoutAtOptions */
    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: boolean
    enableFsync: boolean
    processWhiteouts: boolean
    noCopyFallback: boolean
    forceCopy: boolean
    bareuseronlyDirs: boolean
    forceCopyZerosized: boolean
    unusedBools: boolean[]
    subpath: string
    devinoToCsumCache: RepoDevInoCache
    unusedInts: number[]
    unusedPtrs: object[]
    filter: RepoCheckoutFilter
    filterUserData: object
    sepolicy: SePolicy
    sepolicyPrefix: string
    /* Methods of OSTree.RepoCheckoutAtOptions */
    setDevino(cache?: RepoDevInoCache | null): void
    static name: string
}
export class RepoCheckoutOptions {
    /* Fields of OSTree.RepoCheckoutOptions */
    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: number
    disableFsync: number
    processWhiteouts: number
    noCopyFallback: number
    reserved: number
    subpath: string
    devinoToCsumCache: RepoDevInoCache
    unusedUints: number[]
    unusedPtrs: object[]
    static name: string
}
export class RepoCommitModifier {
    /* Methods of OSTree.RepoCommitModifier */
    ref(): RepoCommitModifier
    setDevinoCache(cache: RepoDevInoCache): void
    setSepolicy(sepolicy?: SePolicy | null): void
    setSepolicyFromCommit(repo: Repo, rev: string, cancellable?: Gio.Cancellable | null): boolean
    setXattrCallback(callback: RepoCommitModifierXattrCallback): void
    unref(): void
    static name: string
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
    constructor(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null)
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
}
export class RepoCommitTraverseIter {
    /* Fields of OSTree.RepoCommitTraverseIter */
    initialized: boolean
    dummy: object[]
    dummyChecksumData: number[]
    /* Methods of OSTree.RepoCommitTraverseIter */
    clear(): void
    getDir(): [ /* outName */ string, /* outContentChecksum */ string, /* outMetaChecksum */ string ]
    getFile(): [ /* outName */ string, /* outChecksum */ string ]
    initCommit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    initDirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    next(cancellable?: Gio.Cancellable | null): RepoCommitIterResult
    static name: string
    static cleanup(p?: object | null): void
}
export class RepoDevInoCache {
    /* Methods of OSTree.RepoDevInoCache */
    ref(): RepoDevInoCache
    unref(): void
    static name: string
    static new(): RepoDevInoCache
    constructor()
    static new(): RepoDevInoCache
}
export class RepoExportArchiveOptions {
    /* Fields of OSTree.RepoExportArchiveOptions */
    disableXattrs: number
    reserved: number
    timestampSecs: number
    unusedUint: number[]
    pathPrefix: string
    unusedPtrs: object[]
    static name: string
}
export abstract class RepoFileClass {
    /* Fields of OSTree.RepoFileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RepoFileEnumerator {
    static name: string
}
export class RepoFileEnumeratorClass {
    /* Fields of OSTree.RepoFileEnumeratorClass */
    parentClass: Gio.FileEnumeratorClass
    static name: string
}
export abstract class RepoFinderAvahiClass {
    /* Fields of OSTree.RepoFinderAvahiClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RepoFinderConfigClass {
    /* Fields of OSTree.RepoFinderConfigClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RepoFinderInterface {
    /* Fields of OSTree.RepoFinderInterface */
    gIface: GObject.TypeInterface
    resolveAsync: any
    resolveFinish: any
    static name: string
}
export abstract class RepoFinderMountClass {
    /* Fields of OSTree.RepoFinderMountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RepoFinderOverrideClass {
    /* Fields of OSTree.RepoFinderOverrideClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RepoFinderResult {
    /* Fields of OSTree.RepoFinderResult */
    remote: Remote
    finder: RepoFinder
    priority: number
    refToChecksum: GLib.HashTable
    summaryLastModified: number
    refToTimestamp: GLib.HashTable
    /* Methods of OSTree.RepoFinderResult */
    compare(b: RepoFinderResult): number
    dup(): RepoFinderResult
    free(): void
    static name: string
    static new(remote: Remote, finder: RepoFinder, priority: number, refToChecksum: GLib.HashTable, refToTimestamp: GLib.HashTable | null, summaryLastModified: number): RepoFinderResult
    constructor(remote: Remote, finder: RepoFinder, priority: number, refToChecksum: GLib.HashTable, refToTimestamp: GLib.HashTable | null, summaryLastModified: number)
    static new(remote: Remote, finder: RepoFinder, priority: number, refToChecksum: GLib.HashTable, refToTimestamp: GLib.HashTable | null, summaryLastModified: number): RepoFinderResult
    static freev(results: RepoFinderResult[]): void
}
export class RepoImportArchiveOptions {
    /* Fields of OSTree.RepoImportArchiveOptions */
    ignoreUnsupportedContent: number
    autocreateParents: number
    useOstreeConvention: number
    callbackWithEntryPathname: number
    reserved: number
    unusedUint: number[]
    translatePathname: RepoImportArchiveTranslatePathname
    translatePathnameUserData: object
    unusedPtrs: object[]
    static name: string
}
export class RepoPruneOptions {
    /* Fields of OSTree.RepoPruneOptions */
    flags: RepoPruneFlags
    reachable: GLib.HashTable
    unusedBools: boolean[]
    unusedInts: number[]
    unusedPtrs: object[]
    static name: string
}
export class RepoTransactionStats {
    /* Fields of OSTree.RepoTransactionStats */
    metadataObjectsTotal: number
    metadataObjectsWritten: number
    contentObjectsTotal: number
    contentObjectsWritten: number
    contentBytesWritten: number
    devinoCacheHits: number
    padding1: number
    padding2: number
    padding3: number
    padding4: number
    static name: string
}
export class RollsumMatches {
    /* Fields of OSTree.RollsumMatches */
    fromRollsums: GLib.HashTable
    toRollsums: GLib.HashTable
    crcmatches: number
    bufmatches: number
    total: number
    matchSize: number
    matches: object[]
    static name: string
}
export class SignDummy {
    static name: string
}
export class SignDummyClass {
    /* Fields of OSTree.SignDummyClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SignEd25519 {
    static name: string
}
export class SignEd25519Class {
    /* Fields of OSTree.SignEd25519Class */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SignInterface {
    /* Fields of OSTree.SignInterface */
    gIface: GObject.TypeInterface
    getName: any
    data: any
    dataVerify: any
    metadataKey: any
    metadataFormat: any
    clearKeys: any
    setSk: any
    setPk: any
    addPk: any
    loadPk: any
    static name: string
}
export class SysrootDeployTreeOpts {
    /* Fields of OSTree.SysrootDeployTreeOpts */
    unusedBools: boolean[]
    unusedInts: number[]
    overrideKernelArgv: string
    overlayInitrds: string
    unusedPtrs: object[]
    static name: string
}
export class SysrootWriteDeploymentsOpts {
    /* Fields of OSTree.SysrootWriteDeploymentsOpts */
    doPostclean: boolean
    unusedBools: boolean[]
    unusedInts: number[]
    unusedPtrs: object[]
    static name: string
}
export class TlsCertInteraction {
    static name: string
}
export class TlsCertInteractionClass {
    static name: string
}
type CollectionRefv = CollectionRef
type RepoFinderResultv = RepoFinderResult
}