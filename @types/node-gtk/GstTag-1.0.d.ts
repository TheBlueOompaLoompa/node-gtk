/**
 * GstTag-1.0
 */

/// <reference types="node" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GstTag {

export enum TagDemuxResult {
    BROKEN_TAG,
    AGAIN,
    OK,
}
export enum TagImageType {
    NONE,
    UNDEFINED,
    FRONT_COVER,
    BACK_COVER,
    LEAFLET_PAGE,
    MEDIUM,
    LEAD_ARTIST,
    ARTIST,
    CONDUCTOR,
    BAND_ORCHESTRA,
    COMPOSER,
    LYRICIST,
    RECORDING_LOCATION,
    DURING_RECORDING,
    DURING_PERFORMANCE,
    VIDEO_CAPTURE,
    FISH,
    ILLUSTRATION,
    BAND_ARTIST_LOGO,
    PUBLISHER_STUDIO_LOGO,
}
export enum TagLicenseFlags {
    PERMITS_REPRODUCTION,
    PERMITS_DISTRIBUTION,
    PERMITS_DERIVATIVE_WORKS,
    PERMITS_SHARING,
    REQUIRES_NOTICE,
    REQUIRES_ATTRIBUTION,
    REQUIRES_SHARE_ALIKE,
    REQUIRES_SOURCE_CODE,
    REQUIRES_COPYLEFT,
    REQUIRES_LESSER_COPYLEFT,
    PROHIBITS_COMMERCIAL_USE,
    PROHIBITS_HIGH_INCOME_NATION_USE,
    CREATIVE_COMMONS_LICENSE,
    FREE_SOFTWARE_FOUNDATION_LICENSE,
}
export const TAG_ACOUSTID_FINGERPRINT: string
export const TAG_ACOUSTID_ID: string
export const TAG_CAPTURING_CONTRAST: string
export const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string
export const TAG_CAPTURING_EXPOSURE_COMPENSATION: string
export const TAG_CAPTURING_EXPOSURE_MODE: string
export const TAG_CAPTURING_EXPOSURE_PROGRAM: string
export const TAG_CAPTURING_FLASH_FIRED: string
export const TAG_CAPTURING_FLASH_MODE: string
export const TAG_CAPTURING_FOCAL_LENGTH: string
export const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string
export const TAG_CAPTURING_FOCAL_RATIO: string
export const TAG_CAPTURING_GAIN_ADJUSTMENT: string
export const TAG_CAPTURING_ISO_SPEED: string
export const TAG_CAPTURING_METERING_MODE: string
export const TAG_CAPTURING_SATURATION: string
export const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string
export const TAG_CAPTURING_SHARPNESS: string
export const TAG_CAPTURING_SHUTTER_SPEED: string
export const TAG_CAPTURING_SOURCE: string
export const TAG_CAPTURING_WHITE_BALANCE: string
export const TAG_CDDA_CDDB_DISCID: string
export const TAG_CDDA_CDDB_DISCID_FULL: string
export const TAG_CDDA_MUSICBRAINZ_DISCID: string
export const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string
export const TAG_CMML_CLIP: string
export const TAG_CMML_HEAD: string
export const TAG_CMML_STREAM: string
export const TAG_ID3V2_HEADER_SIZE: number
export const TAG_IMAGE_HORIZONTAL_PPI: string
export const TAG_IMAGE_VERTICAL_PPI: string
export const TAG_MUSICAL_KEY: string
export const TAG_MUSICBRAINZ_ALBUMARTISTID: string
export const TAG_MUSICBRAINZ_ALBUMID: string
export const TAG_MUSICBRAINZ_ARTISTID: string
export const TAG_MUSICBRAINZ_RELEASEGROUPID: string
export const TAG_MUSICBRAINZ_RELEASETRACKID: string
export const TAG_MUSICBRAINZ_TRACKID: string
export const TAG_MUSICBRAINZ_TRMID: string
export function tagCheckLanguageCode(langCode: string): boolean
export function tagFreeformStringToUtf8(data: number[], envVars: string[]): string
export function tagFromId3Tag(id3Tag: string): string
export function tagFromId3UserTag(type: string, id3UserTag: string): string
export function tagFromVorbisTag(vorbisTag: string): string
export function tagGetId3v2TagSize(buffer: Gst.Buffer): number
export function tagGetLanguageCodeIso6391(langCode: string): string
export function tagGetLanguageCodeIso6392B(langCode: string): string
export function tagGetLanguageCodeIso6392T(langCode: string): string
export function tagGetLanguageCodes(): string[]
export function tagGetLanguageName(languageCode: string): string
export function tagGetLicenseDescription(licenseRef: string): string
export function tagGetLicenseFlags(licenseRef: string): TagLicenseFlags
export function tagGetLicenseJurisdiction(licenseRef: string): string
export function tagGetLicenseNick(licenseRef: string): string
export function tagGetLicenseTitle(licenseRef: string): string
export function tagGetLicenseVersion(licenseRef: string): string
export function tagGetLicenses(): string[]
export function tagId3GenreCount(): number
export function tagId3GenreGet(id: number): string
export function tagImageDataToImageSample(imageData: any, imageType: TagImageType): Gst.Sample
export function tagListAddId3Image(tagList: Gst.TagList, imageData: any, id3PictureType: number): boolean
export function tagListFromExifBuffer(buffer: Gst.Buffer, byteOrder: number, baseOffset: number): Gst.TagList
export function tagListFromExifBufferWithTiffHeader(buffer: Gst.Buffer): Gst.TagList
export function tagListFromId3v2Tag(buffer: Gst.Buffer): Gst.TagList
export function tagListFromVorbiscomment(data: any, idData: any): [ /* returnType */ Gst.TagList, /* vendorString */ string | null ]
export function tagListFromVorbiscommentBuffer(buffer: Gst.Buffer, idData: any): [ /* returnType */ Gst.TagList, /* vendorString */ string | null ]
export function tagListFromXmpBuffer(buffer: Gst.Buffer): Gst.TagList
export function tagListNewFromId3v1(data: any): Gst.TagList
export function tagListToExifBuffer(taglist: Gst.TagList, byteOrder: number, baseOffset: number): Gst.Buffer
export function tagListToExifBufferWithTiffHeader(taglist: Gst.TagList): Gst.Buffer
export function tagListToVorbiscommentBuffer(list: Gst.TagList, idData: any, vendorString?: string | null): Gst.Buffer
export function tagListToXmpBuffer(list: Gst.TagList, readOnly: boolean, schemas: string[]): Gst.Buffer
export function tagParseExtendedComment(extComment: string, failIfNoKey: boolean): [ /* returnType */ boolean, /* key */ string | null, /* lang */ string | null, /* value */ string ]
export function tagRegisterMusicbrainzTags(): void
export function tagToId3Tag(gstTag: string): string
export function tagToVorbisComments(list: Gst.TagList, tag: string): string[]
export function tagToVorbisTag(gstTag: string): string
export function tagXmpListSchemas(): string[]
export function vorbisTagAdd(list: Gst.TagList, tag: string, value: string): void
export class TagXmpWriter {
    /* Methods of GstTag.TagXmpWriter */
    addAllSchemas(): void
    addSchema(schema: string): void
    hasSchema(schema: string): boolean
    removeAllSchemas(): void
    removeSchema(schema: string): void
    tagListToXmpBuffer(taglist: Gst.TagList, readOnly: boolean): Gst.Buffer
    static name: string
}
export interface TagDemux_ConstructProps extends Gst.Element_ConstructProps {
}
export class TagDemux {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstTag.TagDemux */
    element: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstTag.TagDemux */
    vfuncIdentifyTag?(buffer: Gst.Buffer, startTag: boolean, tagSize: number): boolean
    vfuncMergeTags?(startTags: Gst.TagList, endTags: Gst.TagList): Gst.TagList
    vfuncParseTag?(buffer: Gst.Buffer, startTag: boolean, tagSize: number, tags: Gst.TagList): TagDemuxResult
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncQuery?(query: Gst.Query): boolean
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagDemux) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TagDemux) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: TagDemux, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TagDemux, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: TagDemux, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TagDemux, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagDemux, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TagDemux, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TagDemux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TagDemux, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TagDemux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TagDemux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TagDemux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TagDemux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TagDemux_ConstructProps)
    _init (config?: TagDemux_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TagMux_ConstructProps extends Gst.Element_ConstructProps {
}
export class TagMux {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstTag.TagMux */
    element: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gst.TagSetter */
    addTagValue(mode: Gst.TagMergeMode, tag: string, value: any): void
    getTagList(): Gst.TagList | null
    getTagMergeMode(): Gst.TagMergeMode
    mergeTags(list: Gst.TagList, mode: Gst.TagMergeMode): void
    resetTags(): void
    setTagMergeMode(mode: Gst.TagMergeMode): void
    /* Virtual methods of GstTag.TagMux */
    vfuncRenderEndTag?(tagList: Gst.TagList): Gst.Buffer
    vfuncRenderStartTag?(tagList: Gst.TagList): Gst.Buffer
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncQuery?(query: Gst.Query): boolean
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagMux) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TagMux) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: TagMux, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TagMux, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: TagMux, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TagMux, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagMux, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TagMux, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TagMux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TagMux, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TagMux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TagMux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TagMux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TagMux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TagMux_ConstructProps)
    _init (config?: TagMux_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class TagDemuxClass {
    /* Fields of GstTag.TagDemuxClass */
    parentClass: Gst.ElementClass
    minStartSize: number
    minEndSize: number
    identifyTag: any
    parseTag: any
    mergeTags: any
    static name: string
}
export class TagDemuxPrivate {
    static name: string
}
export abstract class TagMuxClass {
    /* Fields of GstTag.TagMuxClass */
    parentClass: Gst.ElementClass
    renderStartTag: any
    renderEndTag: any
    static name: string
}
export class TagMuxPrivate {
    static name: string
}
export abstract class TagXmpWriterInterface {
    /* Fields of GstTag.TagXmpWriterInterface */
    parent: GObject.TypeInterface
    static name: string
}
}