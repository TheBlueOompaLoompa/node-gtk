/**
 * GstRtp-1.0
 */

/// <reference types="node" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GstRtp {

export enum RTCPFBType {
    FB_TYPE_INVALID,
    RTPFB_TYPE_NACK,
    RTPFB_TYPE_TMMBR,
    RTPFB_TYPE_TMMBN,
    RTPFB_TYPE_RTCP_SR_REQ,
    RTPFB_TYPE_TWCC,
    PSFB_TYPE_PLI,
    PSFB_TYPE_SLI,
    PSFB_TYPE_RPSI,
    PSFB_TYPE_AFB,
    PSFB_TYPE_FIR,
    PSFB_TYPE_TSTR,
    PSFB_TYPE_TSTN,
    PSFB_TYPE_VBCN,
}
export enum RTCPSDESType {
    INVALID,
    END,
    CNAME,
    NAME,
    EMAIL,
    PHONE,
    LOC,
    TOOL,
    NOTE,
    PRIV,
}
export enum RTCPType {
    INVALID,
    SR,
    RR,
    SDES,
    BYE,
    APP,
    RTPFB,
    PSFB,
    XR,
}
export enum RTCPXRType {
    INVALID,
    LRLE,
    DRLE,
    PRT,
    RRT,
    DLRR,
    SSUMM,
    VOIP_METRICS,
}
export enum RTPPayload {
    PCMU,
    /* 1016 (invalid, starts with a number) */
    G721,
    GSM,
    G723,
    DVI4_8000,
    DVI4_16000,
    LPC,
    PCMA,
    G722,
    L16_STEREO,
    L16_MONO,
    QCELP,
    CN,
    MPA,
    G728,
    DVI4_11025,
    DVI4_22050,
    G729,
    CELLB,
    JPEG,
    NV,
    H261,
    MPV,
    MP2T,
    H263,
}
export enum RTPProfile {
    UNKNOWN,
    AVP,
    SAVP,
    AVPF,
    SAVPF,
}
export enum RTPBufferFlags {
    RETRANSMISSION,
    REDUNDANT,
    LAST,
}
export enum RTPBufferMapFlags {
    SKIP_PADDING,
    LAST,
}
export const RTCP_MAX_BYE_SSRC_COUNT: number
export const RTCP_MAX_RB_COUNT: number
export const RTCP_MAX_SDES: number
export const RTCP_MAX_SDES_ITEM_COUNT: number
export const RTCP_REDUCED_SIZE_VALID_MASK: number
export const RTCP_VALID_MASK: number
export const RTCP_VALID_VALUE: number
export const RTCP_VERSION: number
export const RTP_HDREXT_BASE: string
export const RTP_HDREXT_NTP_56: string
export const RTP_HDREXT_NTP_56_SIZE: number
export const RTP_HDREXT_NTP_64: string
export const RTP_HDREXT_NTP_64_SIZE: number
export const RTP_PAYLOAD_1016_STRING: string
export const RTP_PAYLOAD_CELLB_STRING: string
export const RTP_PAYLOAD_CN_STRING: string
export const RTP_PAYLOAD_DVI4_11025_STRING: string
export const RTP_PAYLOAD_DVI4_16000_STRING: string
export const RTP_PAYLOAD_DVI4_22050_STRING: string
export const RTP_PAYLOAD_DVI4_8000_STRING: string
export const RTP_PAYLOAD_DYNAMIC_STRING: string
export const RTP_PAYLOAD_G721_STRING: string
export const RTP_PAYLOAD_G722_STRING: string
export const RTP_PAYLOAD_G723_53: number
export const RTP_PAYLOAD_G723_53_STRING: string
export const RTP_PAYLOAD_G723_63: number
export const RTP_PAYLOAD_G723_63_STRING: string
export const RTP_PAYLOAD_G723_STRING: string
export const RTP_PAYLOAD_G728_STRING: string
export const RTP_PAYLOAD_G729_STRING: string
export const RTP_PAYLOAD_GSM_STRING: string
export const RTP_PAYLOAD_H261_STRING: string
export const RTP_PAYLOAD_H263_STRING: string
export const RTP_PAYLOAD_JPEG_STRING: string
export const RTP_PAYLOAD_L16_MONO_STRING: string
export const RTP_PAYLOAD_L16_STEREO_STRING: string
export const RTP_PAYLOAD_LPC_STRING: string
export const RTP_PAYLOAD_MP2T_STRING: string
export const RTP_PAYLOAD_MPA_STRING: string
export const RTP_PAYLOAD_MPV_STRING: string
export const RTP_PAYLOAD_NV_STRING: string
export const RTP_PAYLOAD_PCMA_STRING: string
export const RTP_PAYLOAD_PCMU_STRING: string
export const RTP_PAYLOAD_QCELP_STRING: string
export const RTP_PAYLOAD_TS41: number
export const RTP_PAYLOAD_TS41_STRING: string
export const RTP_PAYLOAD_TS48: number
export const RTP_PAYLOAD_TS48_STRING: string
export const RTP_SOURCE_META_MAX_CSRC_COUNT: number
export const RTP_VERSION: number
export function bufferAddRtpSourceMeta(buffer: Gst.Buffer, ssrc: number | null, csrc: number | null, csrcCount: number): RTPSourceMeta
export function bufferGetRtpSourceMeta(buffer: Gst.Buffer): RTPSourceMeta
export function rtcpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
export function rtcpBufferNew(mtu: number): Gst.Buffer
export function rtcpBufferNewCopyData(data: any): Gst.Buffer
export function rtcpBufferNewTakeData(data: any): Gst.Buffer
export function rtcpBufferValidate(buffer: Gst.Buffer): boolean
export function rtcpBufferValidateData(data: any): boolean
export function rtcpBufferValidateDataReduced(data: any): boolean
export function rtcpBufferValidateReduced(buffer: Gst.Buffer): boolean
export function rtcpNtpToUnix(ntptime: number): number
export function rtcpSdesNameToType(name: string): RTCPSDESType
export function rtcpSdesTypeToName(type: RTCPSDESType): string
export function rtcpUnixToNtp(unixtime: number): number
export function rtpBufferAllocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
export function rtpBufferCalcHeaderLen(csrcCount: number): number
export function rtpBufferCalcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
export function rtpBufferCalcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
export function rtpBufferCompareSeqnum(seqnum1: number, seqnum2: number): number
export function rtpBufferDefaultClockRate(payloadType: number): number
export function rtpBufferExtTimestamp(exttimestamp: number, timestamp: number): number
export function rtpBufferGetExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ any ]
export function rtpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
export function rtpBufferNewAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
export function rtpBufferNewAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
export function rtpBufferNewCopyData(data: any): Gst.Buffer
export function rtpBufferNewTakeData(data: any): Gst.Buffer
export function rtpHdrextGetNtp56(data: any): [ /* returnType */ boolean, /* ntptime */ number ]
export function rtpHdrextGetNtp64(data: any): [ /* returnType */ boolean, /* ntptime */ number ]
export function rtpHdrextSetNtp56(data: object | null, size: number, ntptime: number): boolean
export function rtpHdrextSetNtp64(data: object | null, size: number, ntptime: number): boolean
export function rtpPayloadInfoForName(media: string, encodingName: string): RTPPayloadInfo
export function rtpPayloadInfoForPt(payloadType: number): RTPPayloadInfo
export function rtpSourceMetaApiGetType(): GObject.Type
export function rtpSourceMetaGetInfo(): Gst.MetaInfo
export interface RTPBaseAudioPayload_ConstructProps extends RTPBasePayload_ConstructProps {
    bufferList?: boolean
}
export class RTPBaseAudioPayload {
    /* Properties of GstRtp.RTPBaseAudioPayload */
    bufferList: boolean
    /* Properties of GstRtp.RTPBasePayload */
    maxPtime: number
    minPtime: number
    mtu: number
    onvifNoRateControl: boolean
    perfectRtptime: boolean
    pt: number
    ptimeMultiple: number
    scaleRtptime: boolean
    readonly seqnum: number
    seqnumOffset: number
    sourceInfo: boolean
    ssrc: number
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestampOffset: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstRtp.RTPBaseAudioPayload */
    payload: RTPBasePayload
    priv: RTPBaseAudioPayloadPrivate
    baseTs: Gst.ClockTime
    frameSize: number
    frameDuration: number
    sampleSize: number
    /* Fields of GstRtp.RTPBasePayload */
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
    /* Methods of GstRtp.RTPBaseAudioPayload */
    flush(payloadLen: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    getAdapter(): GstBase.Adapter
    push(data: any, timestamp: Gst.ClockTime): Gst.FlowReturn
    setFrameBased(): void
    setFrameOptions(frameDuration: number, frameSize: number): void
    setSampleBased(): void
    setSampleOptions(sampleSize: number): void
    setSamplebitsOptions(sampleSize: number): void
    /* Methods of GstRtp.RTPBasePayload */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    getSourceCount(buffer: Gst.Buffer): number
    isFilled(size: number, duration: Gst.ClockTime): boolean
    isSourceInfoEnabled(): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    setOptions(media: string, dynamic: boolean, encodingName: string, clockRate: number): void
    setSourceInfoEnabled(enable: boolean): void
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
    /* Virtual methods of GstRtp.RTPBasePayload */
    vfuncGetCaps?(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfuncHandleBuffer?(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncQuery?(pad: Gst.Pad, query: Gst.Query): boolean
    vfuncSetCaps?(caps: Gst.Caps): boolean
    vfuncSinkEvent?(event: Gst.Event): boolean
    vfuncSrcEvent?(event: Gst.Event): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
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
    connect(sigName: "no-more-pads", callback: (($obj: RTPBaseAudioPayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBaseAudioPayload) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: RTPBaseAudioPayload, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBaseAudioPayload, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: RTPBaseAudioPayload, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBaseAudioPayload, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPBaseAudioPayload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBaseAudioPayload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RTPBaseAudioPayload_ConstructProps)
    _init (config?: RTPBaseAudioPayload_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RTPBaseDepayload_ConstructProps extends Gst.Element_ConstructProps {
    maxReorder?: number
    sourceInfo?: boolean
}
export class RTPBaseDepayload {
    /* Properties of GstRtp.RTPBaseDepayload */
    maxReorder: number
    sourceInfo: boolean
    readonly stats: Gst.Structure
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstRtp.RTPBaseDepayload */
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    clockRate: number
    segment: Gst.Segment
    needNewsegment: boolean
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
    /* Methods of GstRtp.RTPBaseDepayload */
    isSourceInfoEnabled(): boolean
    push(outBuf: Gst.Buffer): Gst.FlowReturn
    pushList(outList: Gst.BufferList): Gst.FlowReturn
    setSourceInfoEnabled(enable: boolean): void
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
    /* Virtual methods of GstRtp.RTPBaseDepayload */
    vfuncHandleEvent?(event: Gst.Event): boolean
    vfuncPacketLost?(event: Gst.Event): boolean
    vfuncProcess?(in_: Gst.Buffer): Gst.Buffer
    vfuncProcessRtpPacket?(rtpBuffer: RTPBuffer): Gst.Buffer
    vfuncSetCaps?(caps: Gst.Caps): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: RTPBaseDepayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBaseDepayload) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: RTPBaseDepayload, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBaseDepayload, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: RTPBaseDepayload, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBaseDepayload, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPBaseDepayload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBaseDepayload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RTPBaseDepayload_ConstructProps)
    _init (config?: RTPBaseDepayload_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RTPBasePayload_ConstructProps extends Gst.Element_ConstructProps {
    maxPtime?: number
    minPtime?: number
    mtu?: number
    onvifNoRateControl?: boolean
    perfectRtptime?: boolean
    pt?: number
    ptimeMultiple?: number
    scaleRtptime?: boolean
    seqnumOffset?: number
    sourceInfo?: boolean
    ssrc?: number
    timestampOffset?: number
}
export class RTPBasePayload {
    /* Properties of GstRtp.RTPBasePayload */
    maxPtime: number
    minPtime: number
    mtu: number
    onvifNoRateControl: boolean
    perfectRtptime: boolean
    pt: number
    ptimeMultiple: number
    scaleRtptime: boolean
    readonly seqnum: number
    seqnumOffset: number
    sourceInfo: boolean
    ssrc: number
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestampOffset: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstRtp.RTPBasePayload */
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
    /* Methods of GstRtp.RTPBasePayload */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    getSourceCount(buffer: Gst.Buffer): number
    isFilled(size: number, duration: Gst.ClockTime): boolean
    isSourceInfoEnabled(): boolean
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushList(list: Gst.BufferList): Gst.FlowReturn
    setOptions(media: string, dynamic: boolean, encodingName: string, clockRate: number): void
    setSourceInfoEnabled(enable: boolean): void
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
    /* Virtual methods of GstRtp.RTPBasePayload */
    vfuncGetCaps?(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfuncHandleBuffer?(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncQuery?(pad: Gst.Pad, query: Gst.Query): boolean
    vfuncSetCaps?(caps: Gst.Caps): boolean
    vfuncSinkEvent?(event: Gst.Event): boolean
    vfuncSrcEvent?(event: Gst.Event): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
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
    connect(sigName: "no-more-pads", callback: (($obj: RTPBasePayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBasePayload) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: RTPBasePayload, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBasePayload, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: RTPBasePayload, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBasePayload, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPBasePayload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBasePayload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RTPBasePayload_ConstructProps)
    _init (config?: RTPBasePayload_ConstructProps): void
    static $gtype: GObject.Type
}
export class RTCPBuffer {
    /* Fields of GstRtp.RTCPBuffer */
    buffer: Gst.Buffer
    map: Gst.MapInfo
    /* Methods of GstRtp.RTCPBuffer */
    addPacket(type: RTCPType, packet: RTCPPacket): boolean
    getFirstPacket(packet: RTCPPacket): boolean
    getPacketCount(): number
    unmap(): boolean
    static name: string
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
    static newCopyData(data: any): Gst.Buffer
    static newTakeData(data: any): Gst.Buffer
    static validate(buffer: Gst.Buffer): boolean
    static validateData(data: any): boolean
    static validateDataReduced(data: any): boolean
    static validateReduced(buffer: Gst.Buffer): boolean
}
export class RTCPPacket {
    /* Fields of GstRtp.RTCPPacket */
    rtcp: RTCPBuffer
    offset: number
    /* Methods of GstRtp.RTCPPacket */
    addProfileSpecificExt(data: any): boolean
    addRb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    appGetData(): number
    appGetDataLength(): number
    appGetName(): string
    appGetSsrc(): number
    appGetSubtype(): number
    appSetDataLength(wordlen: number): boolean
    appSetName(name: string): void
    appSetSsrc(ssrc: number): void
    appSetSubtype(subtype: number): void
    byeAddSsrc(ssrc: number): boolean
    byeAddSsrcs(ssrc: number[]): boolean
    byeGetNthSsrc(nth: number): number
    byeGetReason(): string
    byeGetReasonLen(): number
    byeGetSsrcCount(): number
    byeSetReason(reason: string): boolean
    copyProfileSpecificExt(): [ /* returnType */ boolean, /* data */ any ]
    fbGetFci(): number
    fbGetFciLength(): number
    fbGetMediaSsrc(): number
    fbGetSenderSsrc(): number
    fbGetType(): RTCPFBType
    fbSetFciLength(wordlen: number): boolean
    fbSetMediaSsrc(ssrc: number): void
    fbSetSenderSsrc(ssrc: number): void
    fbSetType(type: RTCPFBType): void
    getCount(): number
    getLength(): number
    getPadding(): boolean
    getProfileSpecificExt(): [ /* returnType */ boolean, /* data */ any ]
    getProfileSpecificExtLength(): number
    getRb(nth: number): [ /* ssrc */ number, /* fractionlost */ number, /* packetslost */ number, /* exthighestseq */ number, /* jitter */ number, /* lsr */ number, /* dlsr */ number ]
    getRbCount(): number
    getType(): RTCPType
    moveToNext(): boolean
    remove(): boolean
    rrGetSsrc(): number
    rrSetSsrc(ssrc: number): void
    sdesAddEntry(type: RTCPSDESType, data: any): boolean
    sdesAddItem(ssrc: number): boolean
    sdesCopyEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ any ]
    sdesFirstEntry(): boolean
    sdesFirstItem(): boolean
    sdesGetEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ any ]
    sdesGetItemCount(): number
    sdesGetSsrc(): number
    sdesNextEntry(): boolean
    sdesNextItem(): boolean
    setRb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void
    srGetSenderInfo(): [ /* ssrc */ number, /* ntptime */ number, /* rtptime */ number, /* packetCount */ number, /* octetCount */ number ]
    srSetSenderInfo(ssrc: number, ntptime: number, rtptime: number, packetCount: number, octetCount: number): void
    xrFirstRb(): boolean
    xrGetBlockLength(): number
    xrGetBlockType(): RTCPXRType
    xrGetDlrrBlock(nth: number, ssrc: number, lastRr: number, delay: number): boolean
    xrGetPrtBySeq(seq: number, receiptTime: number): boolean
    xrGetPrtInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number): boolean
    xrGetRleInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number, chunkCount: number): boolean
    xrGetRleNthChunk(nth: number, chunk: number): boolean
    xrGetRrt(timestamp: number): boolean
    xrGetSsrc(): number
    xrGetSummaryInfo(ssrc: number, beginSeq: number, endSeq: number): boolean
    xrGetSummaryJitter(minJitter: number, maxJitter: number, meanJitter: number, devJitter: number): boolean
    xrGetSummaryPkt(lostPackets: number, dupPackets: number): boolean
    xrGetSummaryTtl(isIpv4: boolean, minTtl: number, maxTtl: number, meanTtl: number, devTtl: number): boolean
    xrGetVoipBurstMetrics(burstDensity: number, gapDensity: number, burstDuration: number, gapDuration: number): boolean
    xrGetVoipConfigurationParams(gmin: number, rxConfig: number): boolean
    xrGetVoipDelayMetrics(roundtripDelay: number, endSystemDelay: number): boolean
    xrGetVoipJitterBufferParams(jbNominal: number, jbMaximum: number, jbAbsMax: number): boolean
    xrGetVoipMetricsSsrc(ssrc: number): boolean
    xrGetVoipPacketMetrics(lossRate: number, discardRate: number): boolean
    xrGetVoipQualityMetrics(rFactor: number, extRFactor: number, mosLq: number, mosCq: number): boolean
    xrGetVoipSignalMetrics(signalLevel: number, noiseLevel: number, rerl: number, gmin: number): boolean
    xrNextRb(): boolean
    static name: string
}
export abstract class RTPBaseAudioPayloadClass {
    /* Fields of GstRtp.RTPBaseAudioPayloadClass */
    parentClass: RTPBasePayloadClass
    static name: string
}
export class RTPBaseAudioPayloadPrivate {
    static name: string
}
export abstract class RTPBaseDepayloadClass {
    /* Fields of GstRtp.RTPBaseDepayloadClass */
    parentClass: Gst.ElementClass
    setCaps: any
    process: any
    packetLost: any
    handleEvent: any
    processRtpPacket: any
    static name: string
}
export class RTPBaseDepayloadPrivate {
    static name: string
}
export abstract class RTPBasePayloadClass {
    /* Fields of GstRtp.RTPBasePayloadClass */
    parentClass: Gst.ElementClass
    getCaps: any
    setCaps: any
    handleBuffer: any
    sinkEvent: any
    srcEvent: any
    query: any
    static name: string
}
export class RTPBasePayloadPrivate {
    static name: string
}
export class RTPBuffer {
    /* Fields of GstRtp.RTPBuffer */
    buffer: Gst.Buffer
    state: number
    data: object[]
    size: number[]
    map: Gst.MapInfo[]
    /* Methods of GstRtp.RTPBuffer */
    addExtensionOnebyteHeader(id: number, data: any): boolean
    addExtensionTwobytesHeader(appbits: number, id: number, data: any): boolean
    getCsrc(idx: number): number
    getCsrcCount(): number
    getExtension(): boolean
    getExtensionData(): [ /* returnType */ any, /* bits */ number ]
    getExtensionOnebyteHeader(id: number, nth: number): [ /* returnType */ boolean, /* data */ any ]
    getExtensionTwobytesHeader(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number, /* data */ any ]
    getHeaderLen(): number
    getMarker(): boolean
    getPacketLen(): number
    getPadding(): boolean
    getPayloadBuffer(): Gst.Buffer
    getPayload(): any
    getPayloadLen(): number
    getPayloadSubbuffer(offset: number, len: number): Gst.Buffer
    getPayloadType(): number
    getSeq(): number
    getSsrc(): number
    getTimestamp(): number
    getVersion(): number
    padTo(len: number): void
    setCsrc(idx: number, csrc: number): void
    setExtension(extension: boolean): void
    setExtensionData(bits: number, length: number): boolean
    setMarker(marker: boolean): void
    setPacketLen(len: number): void
    setPadding(padding: boolean): void
    setPayloadType(payloadType: number): void
    setSeq(seq: number): void
    setSsrc(ssrc: number): void
    setTimestamp(timestamp: number): void
    setVersion(version: number): void
    unmap(): void
    static name: string
    static allocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
    static calcHeaderLen(csrcCount: number): number
    static calcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
    static calcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
    static compareSeqnum(seqnum1: number, seqnum2: number): number
    static defaultClockRate(payloadType: number): number
    static extTimestamp(exttimestamp: number, timestamp: number): number
    static getExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ any ]
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
    static newAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    static newAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
    static newCopyData(data: any): Gst.Buffer
    static newTakeData(data: any): Gst.Buffer
}
export class RTPPayloadInfo {
    /* Fields of GstRtp.RTPPayloadInfo */
    payloadType: number
    media: string
    encodingName: string
    clockRate: number
    encodingParameters: string
    bitrate: number
    static name: string
    static forName(media: string, encodingName: string): RTPPayloadInfo
    static forPt(payloadType: number): RTPPayloadInfo
}
export class RTPSourceMeta {
    /* Fields of GstRtp.RTPSourceMeta */
    meta: Gst.Meta
    ssrc: number
    ssrcValid: boolean
    csrc: number[]
    csrcCount: number
    /* Methods of GstRtp.RTPSourceMeta */
    appendCsrc(csrc: number, csrcCount: number): boolean
    getSourceCount(): number
    setSsrc(ssrc?: number | null): boolean
    static name: string
    static getInfo(): Gst.MetaInfo
}
}