/**
 * GUPnPAV-1.0
 */

/// <reference types="node" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GUPnPAV {

export enum CDSLastChangeEvent {
    INVALID,
    OBJECT_ADDED,
    OBJECT_REMOVED,
    OBJECT_MODIFIED,
    ST_DONE,
}
export enum DIDLLiteFragmentResult {
    OK,
    CURRENT_BAD_XML,
    NEW_BAD_XML,
    CURRENT_INVALID,
    NEW_INVALID,
    REQUIRED_TAG,
    READONLY_TAG,
    MISMATCH,
    UNKNOWN_ERROR,
}
export enum ProtocolError {
    INVALID_SYNTAX,
    OTHER,
}
export enum SearchCriteriaOp {
    EQ,
    NEQ,
    LESS,
    LEQ,
    GREATER,
    GEQ,
    CONTAINS,
    DOES_NOT_CONTAIN,
    DERIVED_FROM,
    EXISTS,
}
export enum SearchCriteriaParserError {
    SEARCH_CRITERIA_PARSER_ERROR_FAILED,
}
export enum DLNAConversion {
    NONE,
    TRANSCODED,
}
export enum DLNAFlags {
    NONE,
    SENDER_PACED,
    TIME_BASED_SEEK,
    BYTE_BASED_SEEK,
    PLAY_CONTAINER,
    S0_INCREASE,
    SN_INCREASE,
    RTSP_PAUSE,
    STREAMING_TRANSFER_MODE,
    INTERACTIVE_TRANSFER_MODE,
    BACKGROUND_TRANSFER_MODE,
    CONNECTION_STALL,
    DLNA_V15,
    LINK_PROTECTED_CONTENT,
    CLEARTEXT_BYTESEEK_FULL,
    LOP_CLEARTEXT_BYTESEEK,
}
export enum DLNAOperation {
    NONE,
    RANGE,
    TIMESEEK,
}
export enum OCMFlags {
    NONE,
    UPLOAD,
    CREATE_CONTAINER,
    DESTROYABLE,
    UPLOAD_DESTROYABLE,
    CHANGE_METADATA,
}
export const DIDL_LITE_WRITER_NAMESPACE_DC: string
export const DIDL_LITE_WRITER_NAMESPACE_DLNA: string
export const DIDL_LITE_WRITER_NAMESPACE_PV: string
export const DIDL_LITE_WRITER_NAMESPACE_UPNP: string
export function protocolErrorQuark(): GLib.Quark
export interface CDSLastChangeParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class CDSLastChangeParser {
    /* Fields of GUPnPAV.CDSLastChangeParser */
    parent: GObject.Object
    priv: CDSLastChangeParserPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.CDSLastChangeParser */
    parse(lastChange: string): CDSLastChangeEntry[]
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
    connect(sigName: "notify", callback: (($obj: CDSLastChangeParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CDSLastChangeParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CDSLastChangeParser_ConstructProps)
    _init (config?: CDSLastChangeParser_ConstructProps): void
    static new(): CDSLastChangeParser
    static $gtype: GObject.Type
}
export interface DIDLLiteContainer_ConstructProps extends DIDLLiteObject_ConstructProps {
    childCount?: number
    containerUpdateId?: number
    searchable?: boolean
    storageUsed?: number
    totalDeletedChildCount?: number
}
export class DIDLLiteContainer {
    /* Properties of GUPnPAV.DIDLLiteContainer */
    childCount: number
    containerUpdateId: number
    searchable: boolean
    storageUsed: number
    totalDeletedChildCount: number
    /* Properties of GUPnPAV.DIDLLiteObject */
    album: string
    albumArt: string
    artist: string
    author: string
    creator: string
    date: string
    description: string
    dlnaManaged: OCMFlags
    genre: string
    id: string
    parentId: string
    restricted: boolean
    title: string
    trackNumber: number
    updateId: number
    upnpClass: string
    writeStatus: string
    /* Fields of GUPnPAV.DIDLLiteContainer */
    parent: DIDLLiteObject
    /* Fields of GUPnPAV.DIDLLiteObject */
    priv: DIDLLiteObjectPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteContainer */
    addCreateClass(createClass: string): void
    addCreateClassFull(createClass: string, includeDerived: boolean): void
    addSearchClass(searchClass: string): void
    addSearchClassFull(searchClass: string, includeDerived: boolean): void
    containerUpdateIdIsSet(): boolean
    getChildCount(): number
    getContainerUpdateId(): number
    getCreateClasses(): string[]
    getCreateClassesFull(): DIDLLiteCreateClass[]
    getSearchClasses(): string[]
    getSearchable(): boolean
    getStorageUsed(): number
    getTotalDeletedChildCount(): number
    setChildCount(childCount: number): void
    setContainerUpdateId(updateId: number): void
    setSearchable(searchable: boolean): void
    setStorageUsed(storageUsed: number): void
    setTotalDeletedChildCount(count: number): void
    totalDeletedChildCountIsSet(): boolean
    unsetContainerUpdateId(): void
    unsetTotalDeletedChildCount(): void
    /* Methods of GUPnPAV.DIDLLiteObject */
    addArtist(): DIDLLiteContributor
    addAuthor(): DIDLLiteContributor
    addCreator(): DIDLLiteContributor
    addDescriptor(): DIDLLiteDescriptor
    addResource(): DIDLLiteResource
    applyFragments(currentFragments: string[], newFragments: string[]): DIDLLiteFragmentResult
    getAlbum(): string
    getAlbumArt(): string
    getAlbumXmlString(): string
    getArtist(): string
    getArtists(): DIDLLiteContributor[]
    getArtistsXmlString(): string
    getAuthor(): string
    getAuthors(): DIDLLiteContributor[]
    getCompatResource(sinkProtocolInfo: string, lenient: boolean): DIDLLiteResource
    getCreator(): string
    getCreators(): DIDLLiteContributor[]
    getDate(): string
    getDateXmlString(): string
    getDcNamespace(): libxml2.NsPtr
    getDescription(): string
    getDescriptors(): DIDLLiteDescriptor[]
    getDlnaManaged(): OCMFlags
    getDlnaNamespace(): libxml2.NsPtr
    getGenre(): string
    getId(): string
    getParentId(): string
    getProperties(name: string): libxml2.Node[]
    getPvNamespace(): libxml2.NsPtr
    getResources(): DIDLLiteResource[]
    getRestricted(): boolean
    getTitle(): string
    getTitleXmlString(): string
    getTrackNumber(): number
    getTrackNumberXmlString(): string
    getUpdateId(): number
    getUpnpClass(): string
    getUpnpClassXmlString(): string
    getUpnpNamespace(): libxml2.NsPtr
    getWriteStatus(): string
    getXmlNode(): libxml2.Node
    getXmlString(): string
    isRestrictedSet(): boolean
    setAlbum(album: string): void
    setAlbumArt(albumArt: string): void
    setArtist(artist: string): void
    setAuthor(author: string): void
    setCreator(creator: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDlnaManaged(dlnaManaged: OCMFlags): void
    setGenre(genre: string): void
    setId(id: string): void
    setParentId(parentId: string): void
    setRestricted(restricted: boolean): void
    setTitle(title: string): void
    setTrackNumber(trackNumber: number): void
    setUpdateId(updateId: number): void
    setUpnpClass(upnpClass: string): void
    setWriteStatus(writeStatus: string): void
    unsetArtists(): void
    unsetUpdateId(): void
    updateIdIsSet(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container-update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searchable", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searchable", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searchable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searchable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searchable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::storage-used", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-used", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::storage-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::storage-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::storage-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-deleted-child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-deleted-child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteContainer_ConstructProps)
    _init (config?: DIDLLiteContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteContributor_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    role?: string
    xmlNode?: object
}
export class DIDLLiteContributor {
    /* Properties of GUPnPAV.DIDLLiteContributor */
    name: string
    role: string
    /* Fields of GUPnPAV.DIDLLiteContributor */
    parent: GObject.Object
    priv: DIDLLiteContributorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteContributor */
    getName(): string
    getRole(): string
    getXmlNode(): libxml2.Node
    setName(name: string): void
    setRole(role: string): void
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteContributor_ConstructProps)
    _init (config?: DIDLLiteContributor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteCreateClass_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
    friendlyName?: string
    includeDerived?: boolean
    xmlNode?: object
}
export class DIDLLiteCreateClass {
    /* Properties of GUPnPAV.DIDLLiteCreateClass */
    content: string
    friendlyName: string
    includeDerived: boolean
    /* Fields of GUPnPAV.DIDLLiteCreateClass */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteCreateClass */
    getContent(): string
    getFriendlyName(): string
    getIncludeDerived(): boolean
    getXmlNode(): libxml2.Node
    setContent(content: string): void
    setFriendlyName(friendlyName: string): void
    setIncludeDerived(includeDerived: boolean): void
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::friendly-name", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::friendly-name", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::friendly-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::friendly-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::friendly-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::include-derived", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-derived", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::include-derived", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::include-derived", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::include-derived", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteCreateClass_ConstructProps)
    _init (config?: DIDLLiteCreateClass_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteDescriptor_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
    id?: string
    metadataType?: string
    nameSpace?: string
    xmlNode?: object
}
export class DIDLLiteDescriptor {
    /* Properties of GUPnPAV.DIDLLiteDescriptor */
    content: string
    id: string
    metadataType: string
    nameSpace: string
    /* Fields of GUPnPAV.DIDLLiteDescriptor */
    parent: GObject.Object
    priv: DIDLLiteDescriptorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteDescriptor */
    getContent(): string
    getId(): string
    getMetadataType(): string
    getNameSpace(): string
    getXmlNode(): libxml2.Node
    setContent(content: string): void
    setId(id: string): void
    setMetadataType(type: string): void
    setNameSpace(nameSpace: string): void
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata-type", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata-type", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-space", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-space", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-space", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-space", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-space", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteDescriptor_ConstructProps)
    _init (config?: DIDLLiteDescriptor_ConstructProps): void
    static new(): DIDLLiteDescriptor
    static $gtype: GObject.Type
}
export interface DIDLLiteItem_ConstructProps extends DIDLLiteObject_ConstructProps {
    lifetime?: number
    refId?: string
}
export class DIDLLiteItem {
    /* Properties of GUPnPAV.DIDLLiteItem */
    lifetime: number
    refId: string
    /* Properties of GUPnPAV.DIDLLiteObject */
    album: string
    albumArt: string
    artist: string
    author: string
    creator: string
    date: string
    description: string
    dlnaManaged: OCMFlags
    genre: string
    id: string
    parentId: string
    restricted: boolean
    title: string
    trackNumber: number
    updateId: number
    upnpClass: string
    writeStatus: string
    /* Fields of GUPnPAV.DIDLLiteItem */
    parent: DIDLLiteObject
    /* Fields of GUPnPAV.DIDLLiteObject */
    priv: DIDLLiteObjectPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteItem */
    getLifetime(): number
    getRefId(): string
    setLifetime(lifetime: number): void
    setRefId(refId: string): void
    /* Methods of GUPnPAV.DIDLLiteObject */
    addArtist(): DIDLLiteContributor
    addAuthor(): DIDLLiteContributor
    addCreator(): DIDLLiteContributor
    addDescriptor(): DIDLLiteDescriptor
    addResource(): DIDLLiteResource
    applyFragments(currentFragments: string[], newFragments: string[]): DIDLLiteFragmentResult
    getAlbum(): string
    getAlbumArt(): string
    getAlbumXmlString(): string
    getArtist(): string
    getArtists(): DIDLLiteContributor[]
    getArtistsXmlString(): string
    getAuthor(): string
    getAuthors(): DIDLLiteContributor[]
    getCompatResource(sinkProtocolInfo: string, lenient: boolean): DIDLLiteResource
    getCreator(): string
    getCreators(): DIDLLiteContributor[]
    getDate(): string
    getDateXmlString(): string
    getDcNamespace(): libxml2.NsPtr
    getDescription(): string
    getDescriptors(): DIDLLiteDescriptor[]
    getDlnaManaged(): OCMFlags
    getDlnaNamespace(): libxml2.NsPtr
    getGenre(): string
    getId(): string
    getParentId(): string
    getProperties(name: string): libxml2.Node[]
    getPvNamespace(): libxml2.NsPtr
    getResources(): DIDLLiteResource[]
    getRestricted(): boolean
    getTitle(): string
    getTitleXmlString(): string
    getTrackNumber(): number
    getTrackNumberXmlString(): string
    getUpdateId(): number
    getUpnpClass(): string
    getUpnpClassXmlString(): string
    getUpnpNamespace(): libxml2.NsPtr
    getWriteStatus(): string
    getXmlNode(): libxml2.Node
    getXmlString(): string
    isRestrictedSet(): boolean
    setAlbum(album: string): void
    setAlbumArt(albumArt: string): void
    setArtist(artist: string): void
    setAuthor(author: string): void
    setCreator(creator: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDlnaManaged(dlnaManaged: OCMFlags): void
    setGenre(genre: string): void
    setId(id: string): void
    setParentId(parentId: string): void
    setRestricted(restricted: boolean): void
    setTitle(title: string): void
    setTrackNumber(trackNumber: number): void
    setUpdateId(updateId: number): void
    setUpnpClass(upnpClass: string): void
    setWriteStatus(writeStatus: string): void
    unsetArtists(): void
    unsetUpdateId(): void
    updateIdIsSet(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lifetime", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lifetime", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lifetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lifetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lifetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteItem_ConstructProps)
    _init (config?: DIDLLiteItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteObject_ConstructProps extends GObject.Object_ConstructProps {
    album?: string
    albumArt?: string
    artist?: string
    author?: string
    creator?: string
    date?: string
    dcNamespace?: object
    description?: string
    dlnaManaged?: OCMFlags
    dlnaNamespace?: object
    genre?: string
    id?: string
    parentId?: string
    pvNamespace?: object
    restricted?: boolean
    title?: string
    trackNumber?: number
    updateId?: number
    upnpClass?: string
    upnpNamespace?: object
    writeStatus?: string
    xmlNode?: object
}
export class DIDLLiteObject {
    /* Properties of GUPnPAV.DIDLLiteObject */
    album: string
    albumArt: string
    artist: string
    author: string
    creator: string
    date: string
    description: string
    dlnaManaged: OCMFlags
    genre: string
    id: string
    parentId: string
    restricted: boolean
    title: string
    trackNumber: number
    updateId: number
    upnpClass: string
    writeStatus: string
    /* Fields of GUPnPAV.DIDLLiteObject */
    parent: GObject.Object
    priv: DIDLLiteObjectPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteObject */
    addArtist(): DIDLLiteContributor
    addAuthor(): DIDLLiteContributor
    addCreator(): DIDLLiteContributor
    addDescriptor(): DIDLLiteDescriptor
    addResource(): DIDLLiteResource
    applyFragments(currentFragments: string[], newFragments: string[]): DIDLLiteFragmentResult
    getAlbum(): string
    getAlbumArt(): string
    getAlbumXmlString(): string
    getArtist(): string
    getArtists(): DIDLLiteContributor[]
    getArtistsXmlString(): string
    getAuthor(): string
    getAuthors(): DIDLLiteContributor[]
    getCompatResource(sinkProtocolInfo: string, lenient: boolean): DIDLLiteResource
    getCreator(): string
    getCreators(): DIDLLiteContributor[]
    getDate(): string
    getDateXmlString(): string
    getDcNamespace(): libxml2.NsPtr
    getDescription(): string
    getDescriptors(): DIDLLiteDescriptor[]
    getDlnaManaged(): OCMFlags
    getDlnaNamespace(): libxml2.NsPtr
    getGenre(): string
    getId(): string
    getParentId(): string
    getProperties(name: string): libxml2.Node[]
    getPvNamespace(): libxml2.NsPtr
    getResources(): DIDLLiteResource[]
    getRestricted(): boolean
    getTitle(): string
    getTitleXmlString(): string
    getTrackNumber(): number
    getTrackNumberXmlString(): string
    getUpdateId(): number
    getUpnpClass(): string
    getUpnpClassXmlString(): string
    getUpnpNamespace(): libxml2.NsPtr
    getWriteStatus(): string
    getXmlNode(): libxml2.Node
    getXmlString(): string
    isRestrictedSet(): boolean
    setAlbum(album: string): void
    setAlbumArt(albumArt: string): void
    setArtist(artist: string): void
    setAuthor(author: string): void
    setCreator(creator: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDlnaManaged(dlnaManaged: OCMFlags): void
    setGenre(genre: string): void
    setId(id: string): void
    setParentId(parentId: string): void
    setRestricted(restricted: boolean): void
    setTitle(title: string): void
    setTrackNumber(trackNumber: number): void
    setUpdateId(updateId: number): void
    setUpnpClass(upnpClass: string): void
    setWriteStatus(writeStatus: string): void
    unsetArtists(): void
    unsetUpdateId(): void
    updateIdIsSet(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteObject_ConstructProps)
    _init (config?: DIDLLiteObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class DIDLLiteParser {
    /* Fields of GUPnPAV.DIDLLiteParser */
    parent: GObject.Object
    gupnpReserved: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteParser */
    parseDidl(didl: string): boolean
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
    /* Virtual methods of GUPnPAV.DIDLLiteParser */
    vfuncContainerAvailable?(container: DIDLLiteContainer): void
    vfuncItemAvailable?(item: DIDLLiteItem): void
    vfuncObjectAvailable?(object: DIDLLiteObject): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnPAV.DIDLLiteParser */
    connect(sigName: "container-available", callback: (($obj: DIDLLiteParser, container: DIDLLiteContainer) => void)): number
    connect_after(sigName: "container-available", callback: (($obj: DIDLLiteParser, container: DIDLLiteContainer) => void)): number
    emit(sigName: "container-available", container: DIDLLiteContainer): void
    on(sigName: "container-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "container-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "container-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-available", callback: (($obj: DIDLLiteParser, item: DIDLLiteItem) => void)): number
    connect_after(sigName: "item-available", callback: (($obj: DIDLLiteParser, item: DIDLLiteItem) => void)): number
    emit(sigName: "item-available", item: DIDLLiteItem): void
    on(sigName: "item-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-available", callback: (($obj: DIDLLiteParser, object: DIDLLiteObject) => void)): number
    connect_after(sigName: "object-available", callback: (($obj: DIDLLiteParser, object: DIDLLiteObject) => void)): number
    emit(sigName: "object-available", object: DIDLLiteObject): void
    on(sigName: "object-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DIDLLiteParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DIDLLiteParser_ConstructProps)
    _init (config?: DIDLLiteParser_ConstructProps): void
    static new(): DIDLLiteParser
    static $gtype: GObject.Type
}
export interface DIDLLiteResource_ConstructProps extends GObject.Object_ConstructProps {
    audioChannels?: number
    bitrate?: number
    bitsPerSample?: number
    cleartextSize?: number
    colorDepth?: number
    dlnaNamespace?: object
    duration?: number
    height?: number
    importUri?: string
    protection?: string
    protocolInfo?: ProtocolInfo
    pvNamespace?: object
    sampleFreq?: number
    size?: number
    size64?: number
    subtitleFileType?: string
    subtitleFileUri?: string
    trackTotal?: number
    updateCount?: number
    uri?: string
    width?: number
    xmlNode?: object
}
export class DIDLLiteResource {
    /* Properties of GUPnPAV.DIDLLiteResource */
    audioChannels: number
    bitrate: number
    bitsPerSample: number
    cleartextSize: number
    colorDepth: number
    duration: number
    height: number
    importUri: string
    protection: string
    protocolInfo: ProtocolInfo
    sampleFreq: number
    size: number
    size64: number
    subtitleFileType: string
    subtitleFileUri: string
    trackTotal: number
    updateCount: number
    uri: string
    width: number
    /* Fields of GUPnPAV.DIDLLiteResource */
    parent: GObject.Object
    priv: DIDLLiteResourcePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteResource */
    getAudioChannels(): number
    getBitrate(): number
    getBitsPerSample(): number
    getCleartextSize(): number
    getColorDepth(): number
    getDlnaNamespace(): libxml2.NsPtr
    getDuration(): number
    getHeight(): number
    getImportUri(): string
    getProtection(): string
    getProtocolInfo(): ProtocolInfo
    getPvNamespace(): libxml2.NsPtr
    getSampleFreq(): number
    getSize(): number
    getSize64(): number
    getSubtitleFileType(): string
    getSubtitleFileUri(): string
    getTrackTotal(): number
    getUpdateCount(): number
    getUri(): string
    getWidth(): number
    getXmlNode(): libxml2.Node
    setAudioChannels(nChannels: number): void
    setBitrate(bitrate: number): void
    setBitsPerSample(sampleSize: number): void
    setCleartextSize(cleartextSize: number): void
    setColorDepth(colorDepth: number): void
    setDuration(duration: number): void
    setHeight(height: number): void
    setImportUri(importUri: string): void
    setProtection(protection: string): void
    setProtocolInfo(info: ProtocolInfo): void
    setSampleFreq(sampleFreq: number): void
    setSize(size: number): void
    setSize64(size: number): void
    setSubtitleFileType(type?: string | null): void
    setSubtitleFileUri(uri?: string | null): void
    setTrackTotal(trackTotal: number): void
    setUpdateCount(updateCount: number): void
    setUri(uri: string): void
    setWidth(width: number): void
    trackTotalIsSet(): boolean
    unsetTrackTotal(): void
    unsetUpdateCount(): void
    updateCountIsSet(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-channels", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-channels", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits-per-sample", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cleartext-size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cleartext-size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::import-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::import-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protection", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protection", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol-info", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-info", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-freq", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size64", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size64", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-file-type", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-file-type", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-file-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-file-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-total", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-total", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-count", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-count", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteResource_ConstructProps)
    _init (config?: DIDLLiteResource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteWriter_ConstructProps extends GObject.Object_ConstructProps {
    language?: string
}
export class DIDLLiteWriter {
    /* Properties of GUPnPAV.DIDLLiteWriter */
    readonly xmlNode: object
    /* Fields of GUPnPAV.DIDLLiteWriter */
    parent: GObject.Object
    priv: DIDLLiteWriterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteWriter */
    addContainer(): DIDLLiteContainer
    addDescriptor(): DIDLLiteDescriptor
    addItem(): DIDLLiteItem
    filter(filter: string): void
    getLanguage(): string
    getString(): string
    getXmlNode(): libxml2.Node
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DIDLLiteWriter_ConstructProps)
    _init (config?: DIDLLiteWriter_ConstructProps): void
    static new(language?: string | null): DIDLLiteWriter
    static $gtype: GObject.Type
}
export interface Feature_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    objectIds?: string
    version?: string
}
export class Feature {
    /* Properties of GUPnPAV.Feature */
    /* Fields of GUPnPAV.Feature */
    parent: GObject.Object
    priv: FeaturePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.Feature */
    getName(): string
    getObjectIds(): string
    getVersion(): string
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
    connect(sigName: "notify", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Feature_ConstructProps)
    _init (config?: Feature_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FeatureListParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeatureListParser {
    /* Fields of GUPnPAV.FeatureListParser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.FeatureListParser */
    parseText(text: string): Feature[]
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
    connect(sigName: "notify", callback: (($obj: FeatureListParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeatureListParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeatureListParser_ConstructProps)
    _init (config?: FeatureListParser_ConstructProps): void
    static new(): FeatureListParser
    static $gtype: GObject.Type
}
export interface LastChangeParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class LastChangeParser {
    /* Fields of GUPnPAV.LastChangeParser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.LastChangeParser */
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
    connect(sigName: "notify", callback: (($obj: LastChangeParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LastChangeParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LastChangeParser_ConstructProps)
    _init (config?: LastChangeParser_ConstructProps): void
    static new(): LastChangeParser
    static $gtype: GObject.Type
}
export interface MediaCollection_ConstructProps extends GObject.Object_ConstructProps {
    author?: string
    data?: string
    title?: string
}
export class MediaCollection {
    /* Properties of GUPnPAV.MediaCollection */
    author: string
    readonly mutable: boolean
    title: string
    /* Fields of GUPnPAV.MediaCollection */
    parent: GObject.Object
    priv: MediaCollectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.MediaCollection */
    addItem(): DIDLLiteItem
    getAuthor(): string
    getItems(): DIDLLiteItem[]
    getMutable(): boolean
    getString(): string
    getTitle(): string
    setAuthor(author: string): void
    setTitle(title: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mutable", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaCollection_ConstructProps)
    _init (config?: MediaCollection_ConstructProps): void
    static new(): MediaCollection
    static newFromString(data: string): MediaCollection
    static $gtype: GObject.Type
}
export interface ProtocolInfo_ConstructProps extends GObject.Object_ConstructProps {
    dlnaConversion?: DLNAConversion
    dlnaFlags?: DLNAFlags
    dlnaOperation?: DLNAOperation
    dlnaProfile?: string
    mimeType?: string
    network?: string
    playSpeeds?: string[]
    protocol?: string
}
export class ProtocolInfo {
    /* Properties of GUPnPAV.ProtocolInfo */
    dlnaConversion: DLNAConversion
    dlnaFlags: DLNAFlags
    dlnaOperation: DLNAOperation
    dlnaProfile: string
    mimeType: string
    network: string
    playSpeeds: string[]
    protocol: string
    /* Fields of GUPnPAV.ProtocolInfo */
    parent: GObject.Object
    priv: ProtocolInfoPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.ProtocolInfo */
    getDlnaConversion(): DLNAConversion
    getDlnaFlags(): DLNAFlags
    getDlnaOperation(): DLNAOperation
    getDlnaProfile(): string
    getMimeType(): string
    getNetwork(): string
    getPlaySpeeds(): string[]
    getProtocol(): string
    isCompatible(info2: ProtocolInfo): boolean
    setDlnaConversion(conversion: DLNAConversion): void
    setDlnaFlags(flags: DLNAFlags): void
    setDlnaOperation(operation: DLNAOperation): void
    setDlnaProfile(profile: string): void
    setMimeType(mimeType: string): void
    setNetwork(network: string): void
    setPlaySpeeds(speeds: string): void
    setProtocol(protocol: string): void
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
    connect(sigName: "notify", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-conversion", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-conversion", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-flags", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-flags", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-operation", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-operation", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::play-speeds", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play-speeds", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::play-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::play-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::play-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProtocolInfo_ConstructProps)
    _init (config?: ProtocolInfo_ConstructProps): void
    static new(): ProtocolInfo
    static newFromString(protocolInfo: string): ProtocolInfo
    static $gtype: GObject.Type
}
export interface SearchCriteriaParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class SearchCriteriaParser {
    /* Fields of GUPnPAV.SearchCriteriaParser */
    parent: GObject.Object
    priv: SearchCriteriaParserPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPAV.SearchCriteriaParser */
    parseText(text: string): boolean
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
    /* Virtual methods of GUPnPAV.SearchCriteriaParser */
    vfuncBeginParens?(): void
    vfuncConjunction?(): void
    vfuncDisjunction?(): void
    vfuncEndParens?(): void
    vfuncExpression?(property: string, op: SearchCriteriaOp, value: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnPAV.SearchCriteriaParser */
    connect(sigName: "begin-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "begin-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "begin-parens"): void
    on(sigName: "begin-parens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "begin-parens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "begin-parens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "conjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "conjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "conjunction"): void
    on(sigName: "conjunction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conjunction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conjunction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "disjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "disjunction"): void
    on(sigName: "disjunction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disjunction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disjunction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "end-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "end-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "end-parens"): void
    on(sigName: "end-parens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "end-parens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "end-parens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "expression", callback: (($obj: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string, error?: object | null) => boolean)): number
    connect_after(sigName: "expression", callback: (($obj: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string, error?: object | null) => boolean)): number
    emit(sigName: "expression", property: string, op: SearchCriteriaOp, value: string, error?: object | null): void
    on(sigName: "expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SearchCriteriaParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchCriteriaParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SearchCriteriaParser_ConstructProps)
    _init (config?: SearchCriteriaParser_ConstructProps): void
    static new(): SearchCriteriaParser
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export class CDSLastChangeEntry {
    /* Methods of GUPnPAV.CDSLastChangeEntry */
    getClass(): string
    getEvent(): CDSLastChangeEvent
    getObjectId(): string
    getParentId(): string
    getUpdateId(): number
    isSubtreeUpdate(): boolean
    ref(): CDSLastChangeEntry
    unref(): void
    static name: string
}
export abstract class CDSLastChangeParserClass {
    /* Fields of GUPnPAV.CDSLastChangeParserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CDSLastChangeParserPrivate {
    static name: string
}
export abstract class DIDLLiteContainerClass {
    /* Fields of GUPnPAV.DIDLLiteContainerClass */
    parentClass: DIDLLiteObjectClass
    static name: string
}
export abstract class DIDLLiteContributorClass {
    /* Fields of GUPnPAV.DIDLLiteContributorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DIDLLiteContributorPrivate {
    static name: string
}
export abstract class DIDLLiteCreateClassClass {
    /* Fields of GUPnPAV.DIDLLiteCreateClassClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DIDLLiteCreateClassPrivate {
    static name: string
}
export abstract class DIDLLiteDescriptorClass {
    /* Fields of GUPnPAV.DIDLLiteDescriptorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DIDLLiteDescriptorPrivate {
    static name: string
}
export abstract class DIDLLiteItemClass {
    /* Fields of GUPnPAV.DIDLLiteItemClass */
    parentClass: DIDLLiteObjectClass
    static name: string
}
export abstract class DIDLLiteObjectClass {
    /* Fields of GUPnPAV.DIDLLiteObjectClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DIDLLiteObjectPrivate {
    static name: string
}
export abstract class DIDLLiteParserClass {
    /* Fields of GUPnPAV.DIDLLiteParserClass */
    parentClass: GObject.ObjectClass
    objectAvailable: any
    itemAvailable: any
    containerAvailable: any
    static name: string
}
export abstract class DIDLLiteResourceClass {
    /* Fields of GUPnPAV.DIDLLiteResourceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DIDLLiteResourcePrivate {
    static name: string
}
export abstract class DIDLLiteWriterClass {
    /* Fields of GUPnPAV.DIDLLiteWriterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DIDLLiteWriterPrivate {
    static name: string
}
export abstract class FeatureClass {
    /* Fields of GUPnPAV.FeatureClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FeatureListParserClass {
    /* Fields of GUPnPAV.FeatureListParserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class FeaturePrivate {
    static name: string
}
export abstract class LastChangeParserClass {
    /* Fields of GUPnPAV.LastChangeParserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MediaCollectionClass {
    /* Fields of GUPnPAV.MediaCollectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MediaCollectionPrivate {
    static name: string
}
export abstract class ProtocolInfoClass {
    /* Fields of GUPnPAV.ProtocolInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ProtocolInfoPrivate {
    static name: string
}
export abstract class SearchCriteriaParserClass {
    /* Fields of GUPnPAV.SearchCriteriaParserClass */
    parentClass: GObject.ObjectClass
    beginParens: any
    endParens: any
    conjunction: any
    disjunction: any
    expression: any
    static name: string
}
export class SearchCriteriaParserPrivate {
    static name: string
}
}