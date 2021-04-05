/**
 * Lfb-0.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Lfb {

export enum EventEndReason {
    NOT_FOUND,
    NATURAL,
    EXPIRED,
    EXPLICIT,
}
export enum EventState {
    ERRORED,
    NONE,
    RUNNING,
    ENDED,
}
export function gdbusFeedbackInterfaceInfo(): Gio.DBusInterfaceInfo
export function gdbusFeedbackOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function getAppId(): string
export function getFeedbackProfile(): string
export function getProxy(): GdbusFeedback
export function init(appId: string): boolean
export function isInitted(): boolean
export function setAppId(appId: string): void
export function setFeedbackProfile(profile: string): void
export function uninit(): void
export class GdbusFeedback {
    /* Properties of Lfb.GdbusFeedback */
    profile: string
    /* Methods of Lfb.GdbusFeedback */
    callEndFeedback(argId: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEndFeedbackFinish(res: Gio.AsyncResult): boolean
    callEndFeedbackSync(argId: number, cancellable?: Gio.Cancellable | null): boolean
    callTriggerFeedback(argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callTriggerFeedbackFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outId */ number | null ]
    callTriggerFeedbackSync(argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outId */ number | null ]
    completeEndFeedback(invocation: Gio.DBusMethodInvocation): void
    completeTriggerFeedback(invocation: Gio.DBusMethodInvocation, id: number): void
    emitFeedbackEnded(argId: number, argReason: number): void
    /* Virtual methods of Lfb.GdbusFeedback */
    vfuncFeedbackEnded?(argId: number, argReason: number): void
    vfuncHandleEndFeedback?(invocation: Gio.DBusMethodInvocation, argId: number): boolean
    vfuncHandleTriggerFeedback?(invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number): boolean
    /* Signals of Lfb.GdbusFeedback */
    connect(sigName: "feedback-ended", callback: (($obj: GdbusFeedback, argId: number, argReason: number) => void)): number
    connect_after(sigName: "feedback-ended", callback: (($obj: GdbusFeedback, argId: number, argReason: number) => void)): number
    emit(sigName: "feedback-ended", argId: number, argReason: number): void
    on(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-end-feedback", callback: (($obj: GdbusFeedback, invocation: Gio.DBusMethodInvocation, argId: number) => boolean)): number
    connect_after(sigName: "handle-end-feedback", callback: (($obj: GdbusFeedback, invocation: Gio.DBusMethodInvocation, argId: number) => boolean)): number
    emit(sigName: "handle-end-feedback", invocation: Gio.DBusMethodInvocation, argId: number): void
    on(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-trigger-feedback", callback: (($obj: GdbusFeedback, invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number) => boolean)): number
    connect_after(sigName: "handle-trigger-feedback", callback: (($obj: GdbusFeedback, invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number) => boolean)): number
    emit(sigName: "handle-trigger-feedback", invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number): void
    on(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface Event_ConstructProps extends GObject.Object_ConstructProps {
    event?: string
    feedbackProfile?: string
    timeout?: number
}
export class Event {
    /* Properties of Lfb.Event */
    readonly endReason: EventEndReason
    feedbackProfile: string
    readonly state: EventState
    timeout: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Lfb.Event */
    endFeedback(): boolean
    endFeedbackAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    endFeedbackFinish(res: Gio.AsyncResult): boolean
    getEndReason(): EventEndReason
    getEvent(): string
    getFeedbackProfile(): string
    getState(): EventState
    getTimeout(): number
    setFeedbackProfile(profile: string): void
    setTimeout(timeout: number): void
    triggerFeedback(): boolean
    triggerFeedbackAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    triggerFeedbackFinish(res: Gio.AsyncResult): boolean
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
    /* Signals of Lfb.Event */
    connect(sigName: "feedback-ended", callback: (($obj: Event) => void)): number
    connect_after(sigName: "feedback-ended", callback: (($obj: Event) => void)): number
    emit(sigName: "feedback-ended"): void
    on(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-reason", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-reason", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::feedback-profile", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::feedback-profile", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::feedback-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::feedback-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::feedback-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    static new(event: string): Event
    static $gtype: GObject.Type
}
export interface GdbusFeedbackProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class GdbusFeedbackProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Lfb.GdbusFeedback */
    profile: string
    /* Fields of Lfb.GdbusFeedbackProxy */
    /* Fields of Gio.DBusProxy */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Lfb.GdbusFeedback */
    callEndFeedback(argId: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEndFeedbackFinish(res: Gio.AsyncResult): boolean
    callEndFeedbackSync(argId: number, cancellable?: Gio.Cancellable | null): boolean
    callTriggerFeedback(argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callTriggerFeedbackFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outId */ number | null ]
    callTriggerFeedbackSync(argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outId */ number | null ]
    completeEndFeedback(invocation: Gio.DBusMethodInvocation): void
    completeTriggerFeedback(invocation: Gio.DBusMethodInvocation, id: number): void
    emitFeedbackEnded(argId: number, argReason: number): void
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged?(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal?(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusFeedbackProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusFeedbackProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: GdbusFeedbackProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusFeedbackProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Lfb.GdbusFeedback */
    connect(sigName: "feedback-ended", callback: (($obj: GdbusFeedbackProxy, argId: number, argReason: number) => void)): number
    connect_after(sigName: "feedback-ended", callback: (($obj: GdbusFeedbackProxy, argId: number, argReason: number) => void)): number
    emit(sigName: "feedback-ended", argId: number, argReason: number): void
    on(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-end-feedback", callback: (($obj: GdbusFeedbackProxy, invocation: Gio.DBusMethodInvocation, argId: number) => boolean)): number
    connect_after(sigName: "handle-end-feedback", callback: (($obj: GdbusFeedbackProxy, invocation: Gio.DBusMethodInvocation, argId: number) => boolean)): number
    emit(sigName: "handle-end-feedback", invocation: Gio.DBusMethodInvocation, argId: number): void
    on(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-trigger-feedback", callback: (($obj: GdbusFeedbackProxy, invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number) => boolean)): number
    connect_after(sigName: "handle-trigger-feedback", callback: (($obj: GdbusFeedbackProxy, invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number) => boolean)): number
    emit(sigName: "handle-trigger-feedback", invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number): void
    on(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profile", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: GdbusFeedbackProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GdbusFeedbackProxy_ConstructProps)
    _init (config?: GdbusFeedbackProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): GdbusFeedbackProxy
    static newForBusFinish(res: Gio.AsyncResult): GdbusFeedbackProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): GdbusFeedbackProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): GdbusFeedbackProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface GdbusFeedbackSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class GdbusFeedbackSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Lfb.GdbusFeedback */
    profile: string
    /* Fields of Lfb.GdbusFeedbackSkeleton */
    /* Fields of Gio.DBusInterfaceSkeleton */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Lfb.GdbusFeedback */
    callEndFeedback(argId: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEndFeedbackFinish(res: Gio.AsyncResult): boolean
    callEndFeedbackSync(argId: number, cancellable?: Gio.Cancellable | null): boolean
    callTriggerFeedback(argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callTriggerFeedbackFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outId */ number | null ]
    callTriggerFeedbackSync(argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outId */ number | null ]
    completeEndFeedback(invocation: Gio.DBusMethodInvocation): void
    completeTriggerFeedback(invocation: Gio.DBusMethodInvocation, id: number): void
    emitFeedbackEnded(argId: number, argReason: number): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush?(): void
    vfuncGAuthorizeMethod?(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo?(): Gio.DBusInterfaceInfo
    vfuncGetProperties?(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusFeedbackSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusFeedbackSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusFeedbackSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusFeedbackSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Lfb.GdbusFeedback */
    connect(sigName: "feedback-ended", callback: (($obj: GdbusFeedbackSkeleton, argId: number, argReason: number) => void)): number
    connect_after(sigName: "feedback-ended", callback: (($obj: GdbusFeedbackSkeleton, argId: number, argReason: number) => void)): number
    emit(sigName: "feedback-ended", argId: number, argReason: number): void
    on(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "feedback-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-end-feedback", callback: (($obj: GdbusFeedbackSkeleton, invocation: Gio.DBusMethodInvocation, argId: number) => boolean)): number
    connect_after(sigName: "handle-end-feedback", callback: (($obj: GdbusFeedbackSkeleton, invocation: Gio.DBusMethodInvocation, argId: number) => boolean)): number
    emit(sigName: "handle-end-feedback", invocation: Gio.DBusMethodInvocation, argId: number): void
    on(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-end-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-trigger-feedback", callback: (($obj: GdbusFeedbackSkeleton, invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number) => boolean)): number
    connect_after(sigName: "handle-trigger-feedback", callback: (($obj: GdbusFeedbackSkeleton, invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number) => boolean)): number
    emit(sigName: "handle-trigger-feedback", invocation: Gio.DBusMethodInvocation, argAppId: string, argEvent: string, argHints: GLib.Variant, argTimeout: number): void
    on(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-trigger-feedback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusFeedbackSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusFeedbackSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profile", callback: (($obj: GdbusFeedbackSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: GdbusFeedbackSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GdbusFeedbackSkeleton_ConstructProps)
    _init (config?: GdbusFeedbackSkeleton_ConstructProps): void
    static new(): GdbusFeedbackSkeleton
    static $gtype: GObject.Type
}
export abstract class EventClass {
    /* Fields of Lfb.EventClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class GdbusFeedbackIface {
    /* Fields of Lfb.GdbusFeedbackIface */
    parentIface: GObject.TypeInterface
    handleEndFeedback: any
    handleTriggerFeedback: any
    getProfile: any
    feedbackEnded: any
    static name: string
}
export abstract class GdbusFeedbackProxyClass {
    /* Fields of Lfb.GdbusFeedbackProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class GdbusFeedbackProxyPrivate {
    static name: string
}
export abstract class GdbusFeedbackSkeletonClass {
    /* Fields of Lfb.GdbusFeedbackSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusFeedbackSkeletonPrivate {
    static name: string
}
}