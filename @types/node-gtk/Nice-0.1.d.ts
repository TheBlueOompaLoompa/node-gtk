/**
 * Nice-0.1
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Nice {

export enum CandidateTransport {
    UDP,
    TCP_ACTIVE,
    TCP_PASSIVE,
    TCP_SO,
}
export enum CandidateType {
    HOST,
    SERVER_REFLEXIVE,
    PEER_REFLEXIVE,
    RELAYED,
}
export enum Compatibility {
    RFC5245,
    DRAFT19,
    GOOGLE,
    MSN,
    WLM2009,
    OC2007,
    OC2007R2,
    LAST,
}
export enum ComponentState {
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
    FAILED,
    LAST,
}
export enum ComponentType {
    RTP,
    RTCP,
}
export enum NominationMode {
    REGULAR,
    AGGRESSIVE,
}
export enum ProxyType {
    NONE,
    SOCKS5,
    HTTP,
    LAST,
}
export enum PseudoTcpDebugLevel {
    NONE,
    NORMAL,
    VERBOSE,
}
export enum PseudoTcpShutdown {
    RD,
    WR,
    RDWR,
}
export enum PseudoTcpState {
    LISTEN,
    SYN_SENT,
    SYN_RECEIVED,
    ESTABLISHED,
    CLOSED,
    FIN_WAIT_1,
    FIN_WAIT_2,
    CLOSING,
    TIME_WAIT,
    CLOSE_WAIT,
    LAST_ACK,
}
export enum PseudoTcpWriteResult {
    SUCCESS,
    TOO_LARGE,
    FAIL,
}
export enum RelayType {
    UDP,
    TCP,
    TLS,
}
export enum AgentOption {
    REGULAR_NOMINATION,
    RELIABLE,
    LITE_MODE,
    ICE_TRICKLE,
    SUPPORT_RENOMINATION,
}
export const AGENT_MAX_REMOTE_CANDIDATES: number
export const CANDIDATE_MAX_FOUNDATION: number
export const CANDIDATE_MAX_LOCAL_ADDRESSES: number
export const CANDIDATE_MAX_TURN_SERVERS: number
export function candidateTransportToString(transport: CandidateTransport): string
export function candidateTypeToString(type: CandidateType): string
export function componentStateToString(state: ComponentState): string
export function debugDisable(withStun: boolean): void
export function debugEnable(withStun: boolean): void
export function interfacesGetIpForInterface(interfaceName: string): string | null
export function interfacesGetLocalInterfaces(): string[]
export function interfacesGetLocalIps(includeLoopback: boolean): string[]
export function pseudoTcpSetDebugLevel(level: PseudoTcpDebugLevel): void
export interface AgentRecvFunc {
    (agent: Agent, streamId: number, componentId: number, len: number, buf: string): void
}
export interface Agent_ConstructProps extends GObject.Object_ConstructProps {
    compatibility?: number
    controllingMode?: boolean
    forceRelay?: boolean
    fullMode?: boolean
    iceTcp?: boolean
    iceTrickle?: boolean
    iceUdp?: boolean
    idleTimeout?: number
    keepaliveConncheck?: boolean
    mainContext?: object
    maxConnectivityChecks?: number
    proxyIp?: string
    proxyPassword?: string
    proxyPort?: number
    proxyType?: number
    proxyUsername?: string
    reliable?: boolean
    stunInitialTimeout?: number
    stunMaxRetransmissions?: number
    stunPacingTimer?: number
    stunReliableTimeout?: number
    stunServer?: string
    stunServerPort?: number
    supportRenomination?: boolean
    upnp?: boolean
    upnpTimeout?: number
}
export class Agent {
    /* Properties of Nice.Agent */
    readonly bytestreamTcp: boolean
    controllingMode: boolean
    forceRelay: boolean
    iceTcp: boolean
    iceTrickle: boolean
    iceUdp: boolean
    idleTimeout: number
    keepaliveConncheck: boolean
    maxConnectivityChecks: number
    proxyIp: string
    proxyPassword: string
    proxyPort: number
    proxyType: number
    proxyUsername: string
    stunInitialTimeout: number
    stunMaxRetransmissions: number
    stunPacingTimer: number
    stunReliableTimeout: number
    stunServer: string
    stunServerPort: number
    supportRenomination: boolean
    upnp: boolean
    upnpTimeout: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Nice.Agent */
    addLocalAddress(addr: Address): boolean
    addStream(nComponents: number): number
    closeAsync(callback?: Gio.AsyncReadyCallback | null): void
    forgetRelays(streamId: number, componentId: number): boolean
    gatherCandidates(streamId: number): boolean
    generateLocalCandidateSdp(candidate: Candidate): string
    generateLocalSdp(): string
    generateLocalStreamSdp(streamId: number, includeNonIce: boolean): string
    getComponentState(streamId: number, componentId: number): ComponentState
    getDefaultLocalCandidate(streamId: number, componentId: number): Candidate
    getIoStream(streamId: number, componentId: number): Gio.IOStream
    getLocalCandidates(streamId: number, componentId: number): Candidate[]
    getLocalCredentials(streamId: number): [ /* returnType */ boolean, /* ufrag */ string, /* pwd */ string ]
    getRemoteCandidates(streamId: number, componentId: number): Candidate[]
    getSelectedPair(streamId: number, componentId: number, local: Candidate, remote: Candidate): boolean
    getSelectedSocket(streamId: number, componentId: number): Gio.Socket | null
    getSockets(streamId: number, componentId: number): Gio.Socket[]
    getStreamName(streamId: number): string
    parseRemoteCandidateSdp(streamId: number, sdp: string): Candidate
    parseRemoteSdp(sdp: string): number
    parseRemoteStreamSdp(streamId: number, sdp: string, ufrag: string, pwd: string): Candidate[]
    peerCandidateGatheringDone(streamId: number): boolean
    recv(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ any ]
    recvMessages(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    recvMessagesNonblocking(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    recvNonblocking(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ any ]
    removeStream(streamId: number): void
    restart(): boolean
    restartStream(streamId: number): boolean
    send(streamId: number, componentId: number, len: number, buf: string): number
    sendMessagesNonblocking(streamId: number, componentId: number, messages: OutputMessage[], cancellable?: Gio.Cancellable | null): number
    setLocalCredentials(streamId: number, ufrag: string, pwd: string): boolean
    setPortRange(streamId: number, componentId: number, minPort: number, maxPort: number): void
    setRelayInfo(streamId: number, componentId: number, serverIp: string, serverPort: number, username: string, password: string, type: RelayType): boolean
    setRemoteCandidates(streamId: number, componentId: number, candidates: Candidate[]): number
    setRemoteCredentials(streamId: number, ufrag: string, pwd: string): boolean
    setSelectedPair(streamId: number, componentId: number, lfoundation: string, rfoundation: string): boolean
    setSelectedRemoteCandidate(streamId: number, componentId: number, candidate: Candidate): boolean
    setSoftware(software: string): void
    setStreamName(streamId: number, name: string): boolean
    setStreamTos(streamId: number, tos: number): void
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
    /* Signals of Nice.Agent */
    connect(sigName: "candidate-gathering-done", callback: (($obj: Agent, streamId: number) => void)): number
    connect_after(sigName: "candidate-gathering-done", callback: (($obj: Agent, streamId: number) => void)): number
    emit(sigName: "candidate-gathering-done", streamId: number): void
    on(sigName: "candidate-gathering-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "candidate-gathering-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "candidate-gathering-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "component-state-changed", callback: (($obj: Agent, streamId: number, componentId: number, state: number) => void)): number
    connect_after(sigName: "component-state-changed", callback: (($obj: Agent, streamId: number, componentId: number, state: number) => void)): number
    emit(sigName: "component-state-changed", streamId: number, componentId: number, state: number): void
    on(sigName: "component-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "component-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "component-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "initial-binding-request-received", callback: (($obj: Agent, streamId: number) => void)): number
    connect_after(sigName: "initial-binding-request-received", callback: (($obj: Agent, streamId: number) => void)): number
    emit(sigName: "initial-binding-request-received", streamId: number): void
    on(sigName: "initial-binding-request-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "initial-binding-request-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "initial-binding-request-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-candidate", callback: (($obj: Agent, streamId: number, componentId: number, foundation: string) => void)): number
    connect_after(sigName: "new-candidate", callback: (($obj: Agent, streamId: number, componentId: number, foundation: string) => void)): number
    emit(sigName: "new-candidate", streamId: number, componentId: number, foundation: string): void
    on(sigName: "new-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    connect_after(sigName: "new-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    emit(sigName: "new-candidate-full", candidate: Candidate): void
    on(sigName: "new-candidate-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-candidate-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-candidate-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-remote-candidate", callback: (($obj: Agent, streamId: number, componentId: number, foundation: string) => void)): number
    connect_after(sigName: "new-remote-candidate", callback: (($obj: Agent, streamId: number, componentId: number, foundation: string) => void)): number
    emit(sigName: "new-remote-candidate", streamId: number, componentId: number, foundation: string): void
    on(sigName: "new-remote-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-remote-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-remote-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-remote-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    connect_after(sigName: "new-remote-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    emit(sigName: "new-remote-candidate-full", candidate: Candidate): void
    on(sigName: "new-remote-candidate-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-remote-candidate-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-remote-candidate-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-selected-pair", callback: (($obj: Agent, streamId: number, componentId: number, lfoundation: string, rfoundation: string) => void)): number
    connect_after(sigName: "new-selected-pair", callback: (($obj: Agent, streamId: number, componentId: number, lfoundation: string, rfoundation: string) => void)): number
    emit(sigName: "new-selected-pair", streamId: number, componentId: number, lfoundation: string, rfoundation: string): void
    on(sigName: "new-selected-pair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-selected-pair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-selected-pair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-selected-pair-full", callback: (($obj: Agent, streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate) => void)): number
    connect_after(sigName: "new-selected-pair-full", callback: (($obj: Agent, streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate) => void)): number
    emit(sigName: "new-selected-pair-full", streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate): void
    on(sigName: "new-selected-pair-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-selected-pair-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-selected-pair-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reliable-transport-writable", callback: (($obj: Agent, streamId: number, componentId: number) => void)): number
    connect_after(sigName: "reliable-transport-writable", callback: (($obj: Agent, streamId: number, componentId: number) => void)): number
    emit(sigName: "reliable-transport-writable", streamId: number, componentId: number): void
    on(sigName: "reliable-transport-writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reliable-transport-writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reliable-transport-writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "streams-removed", callback: (($obj: Agent, streamIds: number[]) => void)): number
    connect_after(sigName: "streams-removed", callback: (($obj: Agent, streamIds: number[]) => void)): number
    emit(sigName: "streams-removed", streamIds: number[]): void
    on(sigName: "streams-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "streams-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "streams-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytestream-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytestream-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytestream-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytestream-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytestream-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::controlling-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::controlling-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::controlling-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::controlling-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::controlling-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force-relay", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-relay", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force-relay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force-relay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force-relay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ice-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ice-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ice-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ice-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ice-trickle", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-trickle", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ice-trickle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ice-trickle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ice-trickle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ice-udp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-udp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ice-udp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ice-udp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ice-udp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keepalive-conncheck", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-conncheck", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keepalive-conncheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keepalive-conncheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keepalive-conncheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-connectivity-checks", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-connectivity-checks", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-connectivity-checks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-connectivity-checks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-connectivity-checks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-ip", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-ip", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-password", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-password", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-type", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-type", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-username", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-username", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-initial-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-initial-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-initial-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-initial-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-initial-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-max-retransmissions", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-max-retransmissions", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-max-retransmissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-max-retransmissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-max-retransmissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-pacing-timer", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-pacing-timer", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-pacing-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-pacing-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-pacing-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-reliable-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-reliable-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-reliable-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-reliable-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-reliable-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-server", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-server-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-server-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-server-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-server-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::support-renomination", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-renomination", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::support-renomination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::support-renomination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::support-renomination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Agent_ConstructProps)
    _init (config?: Agent_ConstructProps): void
    static new(ctx: GLib.MainContext, compat: Compatibility): Agent
    static newFull(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent
    static newReliable(ctx: GLib.MainContext, compat: Compatibility): Agent
    static $gtype: GObject.Type
}
export interface PseudoTcpSocket_ConstructProps extends GObject.Object_ConstructProps {
    ackDelay?: number
    callbacks?: object
    conversation?: number
    noDelay?: boolean
    rcvBuf?: number
    sndBuf?: number
    supportFinAck?: boolean
}
export class PseudoTcpSocket {
    /* Properties of Nice.PseudoTcpSocket */
    ackDelay: number
    callbacks: object
    noDelay: boolean
    rcvBuf: number
    sndBuf: number
    readonly state: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Nice.PseudoTcpSocket */
    canSend(): boolean
    close(force: boolean): void
    connect(): boolean
    getAvailableBytes(): number
    getAvailableSendSpace(): number
    getError(): number
    getNextClock(timeout: number): boolean
    isClosed(): boolean
    isClosedRemotely(): boolean
    notifyClock(): void
    notifyMessage(message: InputMessage): boolean
    notifyMtu(mtu: number): void
    notifyPacket(buffer: string, len: number): boolean
    recv(buffer: string, len: number): number
    send(buffer: string, len: number): number
    setTime(currentTime: number): void
    shutdown(how: PseudoTcpShutdown): void
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
    connect(sigName: "notify", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ack-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ack-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ack-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ack-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ack-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::callbacks", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rcv-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rcv-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rcv-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rcv-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rcv-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snd-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snd-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snd-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snd-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snd-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PseudoTcpSocket_ConstructProps)
    _init (config?: PseudoTcpSocket_ConstructProps): void
    static new(conversation: number, callbacks: PseudoTcpCallbacks): PseudoTcpSocket
    static $gtype: GObject.Type
}
export class Address {
    /* Methods of Nice.Address */
    copyToSockaddr(sin?: object | null): void
    equal(b: Address): boolean
    equalNoPort(b: Address): boolean
    free(): void
    getPort(): number
    init(): void
    ipVersion(): number
    isPrivate(): boolean
    isValid(): boolean
    setFromSockaddr(sin?: object | null): void
    setFromString(str: string): boolean
    setIpv4(addrIpv4: number): void
    setIpv6(addrIpv6: number): void
    setPort(port: number): void
    static name: string
}
export abstract class AgentClass {
    /* Fields of Nice.AgentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Candidate {
    /* Fields of Nice.Candidate */
    type: CandidateType
    transport: CandidateTransport
    addr: Address
    baseAddr: Address
    priority: number
    streamId: number
    componentId: number
    foundation: number[]
    username: string
    password: string
    /* Methods of Nice.Candidate */
    copy(): Candidate
    equalTarget(candidate2: Candidate): boolean
    free(): void
    static name: string
    static new(type: CandidateType): Candidate
    constructor(type: CandidateType)
    static new(type: CandidateType): Candidate
    static transportToString(transport: CandidateTransport): string
    static typeToString(type: CandidateType): string
}
export class InputMessage {
    /* Fields of Nice.InputMessage */
    buffers: Gio.InputVector[]
    nBuffers: number
    from: Address
    length: number
    static name: string
}
export class OutputMessage {
    /* Fields of Nice.OutputMessage */
    buffers: Gio.OutputVector[]
    nBuffers: number
    static name: string
}
export class PseudoTcpCallbacks {
    /* Fields of Nice.PseudoTcpCallbacks */
    userData: object
    pseudoTcpOpened: any
    pseudoTcpReadable: any
    pseudoTcpWritable: any
    pseudoTcpClosed: any
    writePacket: any
    static name: string
}
export abstract class PseudoTcpSocketClass {
    static name: string
}
}