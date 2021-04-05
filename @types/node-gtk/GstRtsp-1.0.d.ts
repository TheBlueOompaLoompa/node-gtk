/**
 * GstRtsp-1.0
 */

/// <reference types="node" />
/// <reference path="GstSdp-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />

declare namespace GstRtsp {

export enum RTSPAuthMethod {
    NONE,
    BASIC,
    DIGEST,
}
export enum RTSPFamily {
    NONE,
    INET,
    INET6,
}
export enum RTSPHeaderField {
    INVALID,
    ACCEPT,
    ACCEPT_ENCODING,
    ACCEPT_LANGUAGE,
    ALLOW,
    AUTHORIZATION,
    BANDWIDTH,
    BLOCKSIZE,
    CACHE_CONTROL,
    CONFERENCE,
    CONNECTION,
    CONTENT_BASE,
    CONTENT_ENCODING,
    CONTENT_LANGUAGE,
    CONTENT_LENGTH,
    CONTENT_LOCATION,
    CONTENT_TYPE,
    CSEQ,
    DATE,
    EXPIRES,
    FROM,
    IF_MODIFIED_SINCE,
    LAST_MODIFIED,
    PROXY_AUTHENTICATE,
    PROXY_REQUIRE,
    PUBLIC,
    RANGE,
    REFERER,
    REQUIRE,
    RETRY_AFTER,
    RTP_INFO,
    SCALE,
    SESSION,
    SERVER,
    SPEED,
    TRANSPORT,
    UNSUPPORTED,
    USER_AGENT,
    VIA,
    WWW_AUTHENTICATE,
    CLIENT_CHALLENGE,
    REAL_CHALLENGE1,
    REAL_CHALLENGE2,
    REAL_CHALLENGE3,
    SUBSCRIBE,
    ALERT,
    CLIENT_ID,
    COMPANY_ID,
    GUID,
    REGION_DATA,
    MAX_ASM_WIDTH,
    LANGUAGE,
    PLAYER_START_TIME,
    LOCATION,
    ETAG,
    IF_MATCH,
    ACCEPT_CHARSET,
    SUPPORTED,
    VARY,
    X_ACCELERATE_STREAMING,
    X_ACCEPT_AUTHENT,
    X_ACCEPT_PROXY_AUTHENT,
    X_BROADCAST_ID,
    X_BURST_STREAMING,
    X_NOTICE,
    X_PLAYER_LAG_TIME,
    X_PLAYLIST,
    X_PLAYLIST_CHANGE_NOTICE,
    X_PLAYLIST_GEN_ID,
    X_PLAYLIST_SEEK_ID,
    X_PROXY_CLIENT_AGENT,
    X_PROXY_CLIENT_VERB,
    X_RECEDING_PLAYLISTCHANGE,
    X_RTP_INFO,
    X_STARTUPPROFILE,
    TIMESTAMP,
    AUTHENTICATION_INFO,
    HOST,
    PRAGMA,
    X_SERVER_IP_ADDRESS,
    X_SESSIONCOOKIE,
    RTCP_INTERVAL,
    KEYMGMT,
    PIPELINED_REQUESTS,
    MEDIA_PROPERTIES,
    SEEK_STYLE,
    ACCEPT_RANGES,
    FRAMES,
    RATE_CONTROL,
    LAST,
}
export enum RTSPMsgType {
    INVALID,
    REQUEST,
    RESPONSE,
    HTTP_REQUEST,
    HTTP_RESPONSE,
    DATA,
}
export enum RTSPRangeUnit {
    SMPTE,
    SMPTE_30_DROP,
    SMPTE_25,
    NPT,
    CLOCK,
}
export enum RTSPResult {
    OK,
    ERROR,
    EINVAL,
    EINTR,
    ENOMEM,
    ERESOLV,
    ENOTIMPL,
    ESYS,
    EPARSE,
    EWSASTART,
    EWSAVERSION,
    EEOF,
    ENET,
    ENOTIP,
    ETIMEOUT,
    ETGET,
    ETPOST,
    ELAST,
}
export enum RTSPState {
    INVALID,
    INIT,
    READY,
    SEEKING,
    PLAYING,
    RECORDING,
}
export enum RTSPStatusCode {
    INVALID,
    CONTINUE,
    OK,
    CREATED,
    LOW_ON_STORAGE,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    MOVE_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTH_REQUIRED,
    REQUEST_TIMEOUT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LARGE,
    UNSUPPORTED_MEDIA_TYPE,
    PARAMETER_NOT_UNDERSTOOD,
    CONFERENCE_NOT_FOUND,
    NOT_ENOUGH_BANDWIDTH,
    SESSION_NOT_FOUND,
    METHOD_NOT_VALID_IN_THIS_STATE,
    HEADER_FIELD_NOT_VALID_FOR_RESOURCE,
    INVALID_RANGE,
    PARAMETER_IS_READONLY,
    AGGREGATE_OPERATION_NOT_ALLOWED,
    ONLY_AGGREGATE_OPERATION_ALLOWED,
    UNSUPPORTED_TRANSPORT,
    DESTINATION_UNREACHABLE,
    KEY_MANAGEMENT_FAILURE,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    RTSP_VERSION_NOT_SUPPORTED,
    OPTION_NOT_SUPPORTED,
}
export enum RTSPTimeType {
    SECONDS,
    NOW,
    END,
    FRAMES,
    UTC,
}
export enum RTSPVersion {
    INVALID,
    /* 1_0 (invalid, starts with a number) */
    /* 1_1 (invalid, starts with a number) */
    /* 2_0 (invalid, starts with a number) */
}
export enum RTSPEvent {
    READ,
    WRITE,
}
export enum RTSPLowerTrans {
    UNKNOWN,
    UDP,
    UDP_MCAST,
    TCP,
    HTTP,
    TLS,
}
export enum RTSPMethod {
    INVALID,
    DESCRIBE,
    ANNOUNCE,
    GET_PARAMETER,
    OPTIONS,
    PAUSE,
    PLAY,
    RECORD,
    REDIRECT,
    SETUP,
    SET_PARAMETER,
    TEARDOWN,
    GET,
    POST,
}
export enum RTSPProfile {
    UNKNOWN,
    AVP,
    SAVP,
    AVPF,
    SAVPF,
}
export enum RTSPTransMode {
    UNKNOWN,
    RTP,
    RDT,
}
export const RTSP_DEFAULT_PORT: number
export function rtspAuthCredentialsFree(credentials: RTSPAuthCredential): void
export function rtspConnectionAccept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
export function rtspConnectionCreate(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
export function rtspConnectionCreateFromSocket(socket: Gio.Socket, ip: string, port: number, initialBuffer: string): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
export function rtspFindHeaderField(header: string): RTSPHeaderField
export function rtspFindMethod(method: string): RTSPMethod
export function rtspGenerateDigestAuthResponse(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string
export function rtspGenerateDigestAuthResponseFromMd5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string
export function rtspHeaderAllowMultiple(field: RTSPHeaderField): boolean
export function rtspHeaderAsText(field: RTSPHeaderField): string
export function rtspMessageNew(): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtspMessageNewData(channel: number): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtspMessageNewRequest(method: RTSPMethod, uri: string): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtspMessageNewResponse(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtspMethodAsText(method: RTSPMethod): string
export function rtspOptionsAsText(options: RTSPMethod): string
export function rtspOptionsFromText(options: string): RTSPMethod
export function rtspRangeConvertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
export function rtspRangeFree(range: RTSPTimeRange): void
export function rtspRangeGetTimes(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
export function rtspRangeParse(rangestr: string): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
export function rtspRangeToString(range: RTSPTimeRange): string
export function rtspStatusAsText(code: RTSPStatusCode): string
export function rtspStrresult(result: RTSPResult): string
export function rtspTransportGetManager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
export function rtspTransportGetMime(trans: RTSPTransMode, mime: string): RTSPResult
export function rtspTransportNew(transport: RTSPTransport): RTSPResult
export function rtspTransportParse(str: string, transport: RTSPTransport): RTSPResult
export function rtspUrlParse(urlstr: string): [ /* returnType */ RTSPResult, /* url */ RTSPUrl ]
export function rtspVersionAsText(version: RTSPVersion): string
export interface RTSPConnectionAcceptCertificateFunc {
    (conn: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}
export class RTSPExtension {
    /* Methods of GstRtsp.RTSPExtension */
    afterSend(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    beforeSend(req: RTSPMessage): RTSPResult
    configureStream(caps: Gst.Caps): boolean
    detectServer(resp: RTSPMessage): boolean
    getTransports(protocols: RTSPLowerTrans, transport: string): RTSPResult
    parseSdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    receiveRequest(req: RTSPMessage): RTSPResult
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    setupMedia(media: GstSdp.SDPMedia): RTSPResult
    streamSelect(url: RTSPUrl): RTSPResult
    /* Virtual methods of GstRtsp.RTSPExtension */
    vfuncAfterSend?(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    vfuncBeforeSend?(req: RTSPMessage): RTSPResult
    vfuncConfigureStream?(caps: Gst.Caps): boolean
    vfuncDetectServer?(resp: RTSPMessage): boolean
    vfuncGetTransports?(protocols: RTSPLowerTrans, transport: string): RTSPResult
    vfuncParseSdp?(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    vfuncReceiveRequest?(req: RTSPMessage): RTSPResult
    vfuncSend?(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    vfuncSetupMedia?(media: GstSdp.SDPMedia): RTSPResult
    vfuncStreamSelect?(url: RTSPUrl): RTSPResult
    /* Signals of GstRtsp.RTSPExtension */
    connect(sigName: "send", callback: (($obj: RTSPExtension, object?: object | null, p0?: object | null) => RTSPResult)): number
    connect_after(sigName: "send", callback: (($obj: RTSPExtension, object?: object | null, p0?: object | null) => RTSPResult)): number
    emit(sigName: "send", object?: object | null, p0?: object | null): void
    on(sigName: "send", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "send", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "send", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class RTSPAuthCredential {
    /* Fields of GstRtsp.RTSPAuthCredential */
    scheme: RTSPAuthMethod
    params: RTSPAuthParam
    authorization: string
    static name: string
}
export class RTSPAuthParam {
    /* Fields of GstRtsp.RTSPAuthParam */
    name: string
    value: string
    /* Methods of GstRtsp.RTSPAuthParam */
    copy(): RTSPAuthParam
    free(): void
    static name: string
}
export class RTSPConnection {
    /* Methods of GstRtsp.RTSPConnection */
    clearAuthParams(): void
    close(): RTSPResult
    connect(timeout: GLib.TimeVal): RTSPResult
    connectUsec(timeout: number): RTSPResult
    connectWithResponse(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult
    connectWithResponseUsec(timeout: number, response: RTSPMessage): RTSPResult
    doTunnel(conn2: RTSPConnection): RTSPResult
    flush(flush: boolean): RTSPResult
    free(): RTSPResult
    getIp(): string
    getReadSocket(): Gio.Socket
    getRememberSessionId(): boolean
    getTls(): Gio.TlsConnection
    getTlsDatabase(): Gio.TlsDatabase
    getTlsInteraction(): Gio.TlsInteraction
    getTlsValidationFlags(): Gio.TlsCertificateFlags
    getTunnelid(): string
    getUrl(): RTSPUrl
    getWriteSocket(): Gio.Socket
    isTunneled(): boolean
    nextTimeout(timeout: GLib.TimeVal): RTSPResult
    nextTimeoutUsec(): number
    poll(events: RTSPEvent, revents: RTSPEvent, timeout: GLib.TimeVal): RTSPResult
    pollUsec(events: RTSPEvent, revents: RTSPEvent, timeout: number): RTSPResult
    read(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    readUsec(data: number, size: number, timeout: number): RTSPResult
    receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    receiveUsec(message: RTSPMessage, timeout: number): RTSPResult
    resetTimeout(): RTSPResult
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    sendMessages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult
    sendMessagesUsec(messages: RTSPMessage[], timeout: number): RTSPResult
    sendUsec(message: RTSPMessage, timeout: number): RTSPResult
    setAcceptCertificateFunc(func: RTSPConnectionAcceptCertificateFunc): void
    setAuth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult
    setAuthParam(param: string, value: string): void
    setContentLengthLimit(limit: number): void
    setHttpMode(enable: boolean): void
    setIp(ip: string): void
    setProxy(host: string, port: number): RTSPResult
    setQosDscp(qosDscp: number): RTSPResult
    setRememberSessionId(remember: boolean): void
    setTlsDatabase(database: Gio.TlsDatabase): void
    setTlsInteraction(interaction: Gio.TlsInteraction): void
    setTlsValidationFlags(flags: Gio.TlsCertificateFlags): boolean
    setTunneled(tunneled: boolean): void
    write(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    writeUsec(data: number, size: number, timeout: number): RTSPResult
    static name: string
    static accept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    static create(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    static createFromSocket(socket: Gio.Socket, ip: string, port: number, initialBuffer: string): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
}
export abstract class RTSPExtensionInterface {
    /* Fields of GstRtsp.RTSPExtensionInterface */
    parent: GObject.TypeInterface
    detectServer: any
    beforeSend: any
    afterSend: any
    parseSdp: any
    setupMedia: any
    configureStream: any
    getTransports: any
    streamSelect: any
    send: any
    receiveRequest: any
    static name: string
}
export class RTSPMessage {
    /* Fields of GstRtsp.RTSPMessage */
    type: RTSPMsgType
    /* Methods of GstRtsp.RTSPMessage */
    addHeader(field: RTSPHeaderField, value: string): RTSPResult
    addHeaderByName(header: string, value: string): RTSPResult
    appendHeaders(str: GLib.String): RTSPResult
    copy(): [ /* returnType */ RTSPResult, /* copy */ RTSPMessage ]
    dump(): RTSPResult
    free(): RTSPResult
    getBody(): [ /* returnType */ RTSPResult, /* data */ any ]
    getBodyBuffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    getHeader(field: RTSPHeaderField, indx: number): [ /* returnType */ RTSPResult, /* value */ string ]
    getHeaderByName(header: string, index: number): [ /* returnType */ RTSPResult, /* value */ string ]
    getType(): RTSPMsgType
    hasBodyBuffer(): boolean
    init(): RTSPResult
    initData(channel: number): RTSPResult
    initRequest(method: RTSPMethod, uri: string): RTSPResult
    initResponse(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): RTSPResult
    parseAuthCredentials(field: RTSPHeaderField): RTSPAuthCredential[]
    parseData(): [ /* returnType */ RTSPResult, /* channel */ number ]
    parseRequest(): [ /* returnType */ RTSPResult, /* method */ RTSPMethod | null, /* uri */ string | null, /* version */ RTSPVersion | null ]
    parseResponse(): [ /* returnType */ RTSPResult, /* code */ RTSPStatusCode | null, /* reason */ string | null, /* version */ RTSPVersion | null ]
    removeHeader(field: RTSPHeaderField, indx: number): RTSPResult
    removeHeaderByName(header: string, index: number): RTSPResult
    setBody(data: any): RTSPResult
    setBodyBuffer(buffer: Gst.Buffer): RTSPResult
    stealBody(): [ /* returnType */ RTSPResult, /* data */ any ]
    stealBodyBuffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    takeBody(data: any): RTSPResult
    takeBodyBuffer(buffer: Gst.Buffer): RTSPResult
    takeHeader(field: RTSPHeaderField, value: string): RTSPResult
    takeHeaderByName(header: string, value: string): RTSPResult
    unset(): RTSPResult
    static name: string
}
export class RTSPRange {
    /* Fields of GstRtsp.RTSPRange */
    min: number
    max: number
    static name: string
    static convertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
    static free(range: RTSPTimeRange): void
    static getTimes(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
    static parse(rangestr: string): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
    static toString(range: RTSPTimeRange): string
}
export class RTSPTime {
    /* Fields of GstRtsp.RTSPTime */
    type: RTSPTimeType
    seconds: number
    static name: string
}
export class RTSPTime2 {
    /* Fields of GstRtsp.RTSPTime2 */
    frames: number
    year: number
    month: number
    day: number
    static name: string
}
export class RTSPTimeRange {
    /* Fields of GstRtsp.RTSPTimeRange */
    unit: RTSPRangeUnit
    min: RTSPTime
    max: RTSPTime
    min2: RTSPTime2
    max2: RTSPTime2
    static name: string
}
export class RTSPTransport {
    /* Fields of GstRtsp.RTSPTransport */
    trans: RTSPTransMode
    profile: RTSPProfile
    lowerTransport: RTSPLowerTrans
    destination: string
    source: string
    layers: number
    modePlay: boolean
    modeRecord: boolean
    append: boolean
    interleaved: RTSPRange
    ttl: number
    port: RTSPRange
    clientPort: RTSPRange
    serverPort: RTSPRange
    ssrc: number
    /* Methods of GstRtsp.RTSPTransport */
    asText(): string
    free(): RTSPResult
    getMediaType(): [ /* returnType */ RTSPResult, /* mediaType */ string ]
    init(): RTSPResult
    static name: string
    static getManager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
    static getMime(trans: RTSPTransMode, mime: string): RTSPResult
    static parse(str: string, transport: RTSPTransport): RTSPResult
}
export class RTSPUrl {
    /* Fields of GstRtsp.RTSPUrl */
    transports: RTSPLowerTrans
    family: RTSPFamily
    user: string
    passwd: string
    host: string
    port: number
    abspath: string
    query: string
    /* Methods of GstRtsp.RTSPUrl */
    copy(): RTSPUrl
    decodePathComponents(): string[]
    free(): void
    getPort(): [ /* returnType */ RTSPResult, /* port */ number ]
    getRequestUri(): string
    getRequestUriWithControl(controlPath: string): string
    setPort(port: number): RTSPResult
    static name: string
    static parse(urlstr: string): [ /* returnType */ RTSPResult, /* url */ RTSPUrl ]
}
export class RTSPWatch {
    /* Methods of GstRtsp.RTSPWatch */
    attach(context: GLib.MainContext): number
    getSendBacklog(): [ /* bytes */ number | null, /* messages */ number | null ]
    reset(): void
    sendMessage(message: RTSPMessage): [ /* returnType */ RTSPResult, /* id */ number | null ]
    sendMessages(messages: RTSPMessage[]): [ /* returnType */ RTSPResult, /* id */ number | null ]
    setFlushing(flushing: boolean): void
    setSendBacklog(bytes: number, messages: number): void
    unref(): void
    waitBacklog(timeout: GLib.TimeVal): RTSPResult
    waitBacklogUsec(timeout: number): RTSPResult
    writeData(data: any): [ /* returnType */ RTSPResult, /* id */ number | null ]
    static name: string
}
export class RTSPWatchFuncs {
    /* Fields of GstRtsp.RTSPWatchFuncs */
    messageReceived: any
    messageSent: any
    closed: any
    error: any
    tunnelStart: any
    tunnelComplete: any
    errorFull: any
    tunnelLost: any
    tunnelHttpResponse: any
    static name: string
}
}