/**
 * Goa-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Goa {

export enum Error {
    FAILED,
    NOT_SUPPORTED,
    DIALOG_DISMISSED,
    ACCOUNT_EXISTS,
    NOT_AUTHORIZED,
    SSL,
}
export const ERROR_NUM_ENTRIES: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function accountInterfaceInfo(): Gio.DBusInterfaceInfo
export function accountOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function calendarInterfaceInfo(): Gio.DBusInterfaceInfo
export function calendarOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function chatInterfaceInfo(): Gio.DBusInterfaceInfo
export function chatOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
export function contactsInterfaceInfo(): Gio.DBusInterfaceInfo
export function contactsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function documentsInterfaceInfo(): Gio.DBusInterfaceInfo
export function documentsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function errorQuark(): GLib.Quark
export function exchangeInterfaceInfo(): Gio.DBusInterfaceInfo
export function exchangeOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function filesInterfaceInfo(): Gio.DBusInterfaceInfo
export function filesOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function mailInterfaceInfo(): Gio.DBusInterfaceInfo
export function mailOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function mapsInterfaceInfo(): Gio.DBusInterfaceInfo
export function mapsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function mediaServerInterfaceInfo(): Gio.DBusInterfaceInfo
export function mediaServerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function musicInterfaceInfo(): Gio.DBusInterfaceInfo
export function musicOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function oauth2BasedInterfaceInfo(): Gio.DBusInterfaceInfo
export function oauth2BasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function oauthBasedInterfaceInfo(): Gio.DBusInterfaceInfo
export function oauthBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function passwordBasedInterfaceInfo(): Gio.DBusInterfaceInfo
export function passwordBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function photosInterfaceInfo(): Gio.DBusInterfaceInfo
export function photosOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function printersInterfaceInfo(): Gio.DBusInterfaceInfo
export function printersOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function readLaterInterfaceInfo(): Gio.DBusInterfaceInfo
export function readLaterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function ticketingInterfaceInfo(): Gio.DBusInterfaceInfo
export function ticketingOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function todoInterfaceInfo(): Gio.DBusInterfaceInfo
export function todoOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export class Account {
    /* Properties of Goa.Account */
    attentionNeeded: boolean
    calendarDisabled: boolean
    chatDisabled: boolean
    contactsDisabled: boolean
    documentsDisabled: boolean
    filesDisabled: boolean
    id: string
    identity: string
    isLocked: boolean
    isTemporary: boolean
    mailDisabled: boolean
    mapsDisabled: boolean
    musicDisabled: boolean
    photosDisabled: boolean
    presentationIdentity: string
    printersDisabled: boolean
    providerIcon: string
    providerName: string
    providerType: string
    readLaterDisabled: boolean
    ticketingDisabled: boolean
    todoDisabled: boolean
    /* Methods of Goa.Account */
    callEnsureCredentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callEnsureCredentialsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveFinish(res: Gio.AsyncResult): boolean
    callRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    completeRemove(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa.Account */
    vfuncHandleEnsureCredentials?(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleRemove?(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-ensure-credentials", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-remove", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Calendar {
    /* Properties of Goa.Calendar */
    acceptSslErrors: boolean
    uri: string
    /* Methods of Goa.Calendar */
    /* Virtual methods of Goa.Calendar */
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Chat {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Contacts {
    /* Properties of Goa.Contacts */
    acceptSslErrors: boolean
    uri: string
    /* Methods of Goa.Contacts */
    /* Virtual methods of Goa.Contacts */
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Documents {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Exchange {
    /* Properties of Goa.Exchange */
    acceptSslErrors: boolean
    host: string
    /* Methods of Goa.Exchange */
    /* Virtual methods of Goa.Exchange */
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Files {
    /* Properties of Goa.Files */
    acceptSslErrors: boolean
    uri: string
    /* Methods of Goa.Files */
    /* Virtual methods of Goa.Files */
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Mail {
    /* Properties of Goa.Mail */
    emailAddress: string
    imapAcceptSslErrors: boolean
    imapHost: string
    imapSupported: boolean
    imapUseSsl: boolean
    imapUseTls: boolean
    imapUserName: string
    name: string
    smtpAcceptSslErrors: boolean
    smtpAuthLogin: boolean
    smtpAuthPlain: boolean
    smtpAuthXoauth2: boolean
    smtpHost: string
    smtpSupported: boolean
    smtpUseAuth: boolean
    smtpUseSsl: boolean
    smtpUseTls: boolean
    smtpUserName: string
    /* Methods of Goa.Mail */
    /* Virtual methods of Goa.Mail */
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Manager {
    /* Methods of Goa.Manager */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callIsSupportedProvider(argProviderType: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    callIsSupportedProviderSync(argProviderType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void
    /* Virtual methods of Goa.Manager */
    vfuncHandleAddAccount?(invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): boolean
    vfuncHandleIsSupportedProvider?(invocation: Gio.DBusMethodInvocation, argProviderType: string): boolean
    /* Signals of Goa.Manager */
    connect(sigName: "handle-add-account", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-account", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): void
    on(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-is-supported-provider", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    connect_after(sigName: "handle-is-supported-provider", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, argProviderType: string): void
    on(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Maps {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class MediaServer {
    /* Properties of Goa.MediaServer */
    dlnaSupported: boolean
    udn: string
    /* Methods of Goa.MediaServer */
    /* Virtual methods of Goa.MediaServer */
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Music {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class OAuth2Based {
    /* Properties of Goa.OAuth2Based */
    clientId: string
    clientSecret: string
    /* Methods of Goa.OAuth2Based */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void
    /* Virtual methods of Goa.OAuth2Based */
    vfuncHandleGetAccessToken?(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class OAuthBased {
    /* Properties of Goa.OAuthBased */
    consumerKey: string
    consumerSecret: string
    /* Methods of Goa.OAuthBased */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void
    /* Virtual methods of Goa.OAuthBased */
    vfuncHandleGetAccessToken?(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Object {
    /* Properties of Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    mediaServer: MediaServer
    music: Music
    oauthBased: OAuthBased
    oauth2Based: OAuth2Based
    passwordBased: PasswordBased
    photos: Photos
    printers: Printers
    readLater: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Methods of Goa.Object */
    getAccount(): Account | null
    getCalendar(): Calendar | null
    getChat(): Chat | null
    getContacts(): Contacts | null
    getDocuments(): Documents | null
    getExchange(): Exchange | null
    getFiles(): Files | null
    getMail(): Mail | null
    getManager(): Manager | null
    getMaps(): Maps | null
    getMediaServer(): MediaServer | null
    getMusic(): Music | null
    getOauth2Based(): OAuth2Based | null
    getOauthBased(): OAuthBased | null
    getPasswordBased(): PasswordBased | null
    getPhotos(): Photos | null
    getPrinters(): Printers | null
    getReadLater(): ReadLater | null
    getTicketing(): Ticketing | null
    getTodo(): Todo | null
    static name: string
}
export class PasswordBased {
    /* Methods of Goa.PasswordBased */
    callGetPassword(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    callGetPasswordSync(argId: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Virtual methods of Goa.PasswordBased */
    vfuncHandleGetPassword?(invocation: Gio.DBusMethodInvocation, argId: string): boolean
    /* Signals of Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: (($obj: PasswordBased, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    connect_after(sigName: "handle-get-password", callback: (($obj: PasswordBased, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, argId: string): void
    on(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Photos {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Printers {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class ReadLater {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Ticketing {
    /* Properties of Goa.Ticketing */
    details: GLib.Variant
    /* Methods of Goa.Ticketing */
    callGetTicket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    callGetTicketSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa.Ticketing */
    vfuncHandleGetTicket?(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: (($obj: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-ticket", callback: (($obj: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Todo {
    static name: string
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface AccountProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class AccountProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Account */
    attentionNeeded: boolean
    calendarDisabled: boolean
    chatDisabled: boolean
    contactsDisabled: boolean
    documentsDisabled: boolean
    filesDisabled: boolean
    id: string
    identity: string
    isLocked: boolean
    isTemporary: boolean
    mailDisabled: boolean
    mapsDisabled: boolean
    musicDisabled: boolean
    photosDisabled: boolean
    presentationIdentity: string
    printersDisabled: boolean
    providerIcon: string
    providerName: string
    providerType: string
    readLaterDisabled: boolean
    ticketingDisabled: boolean
    todoDisabled: boolean
    /* Fields of Goa.AccountProxy */
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
    /* Methods of Goa.Account */
    callEnsureCredentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callEnsureCredentialsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveFinish(res: Gio.AsyncResult): boolean
    callRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    completeRemove(invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: AccountProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: AccountProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: AccountProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: AccountProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-ensure-credentials", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-remove", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-needed", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-locked", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-temporary", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presentation-identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-icon", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountProxy_ConstructProps)
    _init (config?: AccountProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): AccountProxy
    static newForBusFinish(res: Gio.AsyncResult): AccountProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface AccountSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class AccountSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Account */
    attentionNeeded: boolean
    calendarDisabled: boolean
    chatDisabled: boolean
    contactsDisabled: boolean
    documentsDisabled: boolean
    filesDisabled: boolean
    id: string
    identity: string
    isLocked: boolean
    isTemporary: boolean
    mailDisabled: boolean
    mapsDisabled: boolean
    musicDisabled: boolean
    photosDisabled: boolean
    presentationIdentity: string
    printersDisabled: boolean
    providerIcon: string
    providerName: string
    providerType: string
    readLaterDisabled: boolean
    ticketingDisabled: boolean
    todoDisabled: boolean
    /* Fields of Goa.AccountSkeleton */
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
    /* Methods of Goa.Account */
    callEnsureCredentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callEnsureCredentialsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveFinish(res: Gio.AsyncResult): boolean
    callRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    completeRemove(invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-ensure-credentials", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-remove", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-needed", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-locked", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-temporary", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presentation-identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-icon", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-name", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-type", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountSkeleton_ConstructProps)
    _init (config?: AccountSkeleton_ConstructProps): void
    static new(): AccountSkeleton
    static $gtype: GObject.Type
}
export interface CalendarProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class CalendarProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Calendar */
    acceptSslErrors: boolean
    uri: string
    /* Fields of Goa.CalendarProxy */
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
    /* Methods of Goa.Calendar */
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
    connect(sigName: "g-properties-changed", callback: (($obj: CalendarProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: CalendarProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: CalendarProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: CalendarProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarProxy_ConstructProps)
    _init (config?: CalendarProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): CalendarProxy
    static newForBusFinish(res: Gio.AsyncResult): CalendarProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface CalendarSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class CalendarSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Calendar */
    acceptSslErrors: boolean
    uri: string
    /* Fields of Goa.CalendarSkeleton */
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
    /* Methods of Goa.Calendar */
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
    connect(sigName: "g-authorize-method", callback: (($obj: CalendarSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: CalendarSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarSkeleton_ConstructProps)
    _init (config?: CalendarSkeleton_ConstructProps): void
    static new(): CalendarSkeleton
    static $gtype: GObject.Type
}
export interface ChatProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ChatProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.ChatProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: ChatProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ChatProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ChatProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ChatProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChatProxy_ConstructProps)
    _init (config?: ChatProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): ChatProxy
    static newForBusFinish(res: Gio.AsyncResult): ChatProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ChatSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ChatSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.ChatSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: ChatSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ChatSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChatSkeleton_ConstructProps)
    _init (config?: ChatSkeleton_ConstructProps): void
    static new(): ChatSkeleton
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of Goa.Client */
    readonly objectManager: Gio.DBusObjectManager
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Goa.Client */
    getAccounts(): Object[]
    getManager(): Manager | null
    getObjectManager(): Gio.DBusObjectManager
    lookupById(id: string): Object
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
    /* Signals of Goa.Client */
    connect(sigName: "account-added", callback: (($obj: Client, object: Object) => void)): number
    connect_after(sigName: "account-added", callback: (($obj: Client, object: Object) => void)): number
    emit(sigName: "account-added", object: Object): void
    on(sigName: "account-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "account-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "account-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "account-changed", callback: (($obj: Client, object: Object) => void)): number
    connect_after(sigName: "account-changed", callback: (($obj: Client, object: Object) => void)): number
    emit(sigName: "account-changed", object: Object): void
    on(sigName: "account-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "account-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "account-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "account-removed", callback: (($obj: Client, object: Object) => void)): number
    connect_after(sigName: "account-removed", callback: (($obj: Client, object: Object) => void)): number
    emit(sigName: "account-removed", object: Object): void
    on(sigName: "account-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "account-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "account-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): Client
    static newSync(cancellable?: Gio.Cancellable | null): Client
    static $gtype: GObject.Type
}
export interface ContactsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ContactsProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Contacts */
    acceptSslErrors: boolean
    uri: string
    /* Fields of Goa.ContactsProxy */
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
    /* Methods of Goa.Contacts */
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
    connect(sigName: "g-properties-changed", callback: (($obj: ContactsProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ContactsProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ContactsProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ContactsProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContactsProxy_ConstructProps)
    _init (config?: ContactsProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): ContactsProxy
    static newForBusFinish(res: Gio.AsyncResult): ContactsProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ContactsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ContactsSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Contacts */
    acceptSslErrors: boolean
    uri: string
    /* Fields of Goa.ContactsSkeleton */
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
    /* Methods of Goa.Contacts */
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
    connect(sigName: "g-authorize-method", callback: (($obj: ContactsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ContactsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContactsSkeleton_ConstructProps)
    _init (config?: ContactsSkeleton_ConstructProps): void
    static new(): ContactsSkeleton
    static $gtype: GObject.Type
}
export interface DocumentsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class DocumentsProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.DocumentsProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: DocumentsProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DocumentsProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DocumentsProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DocumentsProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsProxy_ConstructProps)
    _init (config?: DocumentsProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): DocumentsProxy
    static newForBusFinish(res: Gio.AsyncResult): DocumentsProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface DocumentsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class DocumentsSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.DocumentsSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: DocumentsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DocumentsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsSkeleton_ConstructProps)
    _init (config?: DocumentsSkeleton_ConstructProps): void
    static new(): DocumentsSkeleton
    static $gtype: GObject.Type
}
export interface ExchangeProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ExchangeProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Exchange */
    acceptSslErrors: boolean
    host: string
    /* Fields of Goa.ExchangeProxy */
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
    /* Methods of Goa.Exchange */
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
    connect(sigName: "g-properties-changed", callback: (($obj: ExchangeProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ExchangeProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ExchangeProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ExchangeProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExchangeProxy_ConstructProps)
    _init (config?: ExchangeProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): ExchangeProxy
    static newForBusFinish(res: Gio.AsyncResult): ExchangeProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ExchangeSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ExchangeSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Exchange */
    acceptSslErrors: boolean
    host: string
    /* Fields of Goa.ExchangeSkeleton */
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
    /* Methods of Goa.Exchange */
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
    connect(sigName: "g-authorize-method", callback: (($obj: ExchangeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ExchangeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExchangeSkeleton_ConstructProps)
    _init (config?: ExchangeSkeleton_ConstructProps): void
    static new(): ExchangeSkeleton
    static $gtype: GObject.Type
}
export interface FilesProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class FilesProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Files */
    acceptSslErrors: boolean
    uri: string
    /* Fields of Goa.FilesProxy */
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
    /* Methods of Goa.Files */
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
    connect(sigName: "g-properties-changed", callback: (($obj: FilesProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: FilesProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: FilesProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: FilesProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilesProxy_ConstructProps)
    _init (config?: FilesProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): FilesProxy
    static newForBusFinish(res: Gio.AsyncResult): FilesProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface FilesSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class FilesSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Files */
    acceptSslErrors: boolean
    uri: string
    /* Fields of Goa.FilesSkeleton */
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
    /* Methods of Goa.Files */
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
    connect(sigName: "g-authorize-method", callback: (($obj: FilesSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: FilesSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilesSkeleton_ConstructProps)
    _init (config?: FilesSkeleton_ConstructProps): void
    static new(): FilesSkeleton
    static $gtype: GObject.Type
}
export interface MailProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class MailProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Mail */
    emailAddress: string
    imapAcceptSslErrors: boolean
    imapHost: string
    imapSupported: boolean
    imapUseSsl: boolean
    imapUseTls: boolean
    imapUserName: string
    name: string
    smtpAcceptSslErrors: boolean
    smtpAuthLogin: boolean
    smtpAuthPlain: boolean
    smtpAuthXoauth2: boolean
    smtpHost: string
    smtpSupported: boolean
    smtpUseAuth: boolean
    smtpUseSsl: boolean
    smtpUseTls: boolean
    smtpUserName: string
    /* Fields of Goa.MailProxy */
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
    /* Methods of Goa.Mail */
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
    connect(sigName: "g-properties-changed", callback: (($obj: MailProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MailProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: MailProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MailProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-address", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MailProxy_ConstructProps)
    _init (config?: MailProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): MailProxy
    static newForBusFinish(res: Gio.AsyncResult): MailProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MailProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MailProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface MailSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class MailSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Mail */
    emailAddress: string
    imapAcceptSslErrors: boolean
    imapHost: string
    imapSupported: boolean
    imapUseSsl: boolean
    imapUseTls: boolean
    imapUserName: string
    name: string
    smtpAcceptSslErrors: boolean
    smtpAuthLogin: boolean
    smtpAuthPlain: boolean
    smtpAuthXoauth2: boolean
    smtpHost: string
    smtpSupported: boolean
    smtpUseAuth: boolean
    smtpUseSsl: boolean
    smtpUseTls: boolean
    smtpUserName: string
    /* Fields of Goa.MailSkeleton */
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
    /* Methods of Goa.Mail */
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
    connect(sigName: "g-authorize-method", callback: (($obj: MailSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MailSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-address", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MailSkeleton_ConstructProps)
    _init (config?: MailSkeleton_ConstructProps): void
    static new(): MailSkeleton
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ManagerProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.ManagerProxy */
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
    /* Methods of Goa.Manager */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callIsSupportedProvider(argProviderType: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    callIsSupportedProviderSync(argProviderType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.Manager */
    connect(sigName: "handle-add-account", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-account", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): void
    on(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-is-supported-provider", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    connect_after(sigName: "handle-is-supported-provider", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, argProviderType: string): void
    on(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ManagerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.ManagerSkeleton */
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
    /* Methods of Goa.Manager */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callIsSupportedProvider(argProviderType: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    callIsSupportedProviderSync(argProviderType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.Manager */
    connect(sigName: "handle-add-account", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-account", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): void
    on(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-is-supported-provider", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    connect_after(sigName: "handle-is-supported-provider", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, argProviderType: string): void
    on(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    static new(): ManagerSkeleton
    static $gtype: GObject.Type
}
export interface MapsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class MapsProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.MapsProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: MapsProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MapsProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: MapsProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MapsProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapsProxy_ConstructProps)
    _init (config?: MapsProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): MapsProxy
    static newForBusFinish(res: Gio.AsyncResult): MapsProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface MapsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class MapsSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.MapsSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: MapsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MapsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapsSkeleton_ConstructProps)
    _init (config?: MapsSkeleton_ConstructProps): void
    static new(): MapsSkeleton
    static $gtype: GObject.Type
}
export interface MediaServerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class MediaServerProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.MediaServer */
    dlnaSupported: boolean
    udn: string
    /* Fields of Goa.MediaServerProxy */
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
    /* Methods of Goa.MediaServer */
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
    connect(sigName: "g-properties-changed", callback: (($obj: MediaServerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MediaServerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: MediaServerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MediaServerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaServerProxy_ConstructProps)
    _init (config?: MediaServerProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): MediaServerProxy
    static newForBusFinish(res: Gio.AsyncResult): MediaServerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface MediaServerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class MediaServerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.MediaServer */
    dlnaSupported: boolean
    udn: string
    /* Fields of Goa.MediaServerSkeleton */
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
    /* Methods of Goa.MediaServer */
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
    connect(sigName: "g-authorize-method", callback: (($obj: MediaServerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MediaServerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaServerSkeleton_ConstructProps)
    _init (config?: MediaServerSkeleton_ConstructProps): void
    static new(): MediaServerSkeleton
    static $gtype: GObject.Type
}
export interface MusicProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class MusicProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.MusicProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: MusicProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MusicProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: MusicProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MusicProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicProxy_ConstructProps)
    _init (config?: MusicProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): MusicProxy
    static newForBusFinish(res: Gio.AsyncResult): MusicProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface MusicSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class MusicSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.MusicSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: MusicSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MusicSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicSkeleton_ConstructProps)
    _init (config?: MusicSkeleton_ConstructProps): void
    static new(): MusicSkeleton
    static $gtype: GObject.Type
}
export interface OAuth2BasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class OAuth2BasedProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.OAuth2Based */
    clientId: string
    clientSecret: string
    /* Fields of Goa.OAuth2BasedProxy */
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
    /* Methods of Goa.OAuth2Based */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: OAuth2BasedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: OAuth2BasedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: OAuth2BasedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: OAuth2BasedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuth2BasedProxy_ConstructProps)
    _init (config?: OAuth2BasedProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): OAuth2BasedProxy
    static newForBusFinish(res: Gio.AsyncResult): OAuth2BasedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface OAuth2BasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class OAuth2BasedSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.OAuth2Based */
    clientId: string
    clientSecret: string
    /* Fields of Goa.OAuth2BasedSkeleton */
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
    /* Methods of Goa.OAuth2Based */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuth2BasedSkeleton_ConstructProps)
    _init (config?: OAuth2BasedSkeleton_ConstructProps): void
    static new(): OAuth2BasedSkeleton
    static $gtype: GObject.Type
}
export interface OAuthBasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class OAuthBasedProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.OAuthBased */
    consumerKey: string
    consumerSecret: string
    /* Fields of Goa.OAuthBasedProxy */
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
    /* Methods of Goa.OAuthBased */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: OAuthBasedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: OAuthBasedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: OAuthBasedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: OAuthBasedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuthBasedProxy_ConstructProps)
    _init (config?: OAuthBasedProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): OAuthBasedProxy
    static newForBusFinish(res: Gio.AsyncResult): OAuthBasedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface OAuthBasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class OAuthBasedSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.OAuthBased */
    consumerKey: string
    consumerSecret: string
    /* Fields of Goa.OAuthBasedSkeleton */
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
    /* Methods of Goa.OAuthBased */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuthBasedSkeleton_ConstructProps)
    _init (config?: OAuthBasedSkeleton_ConstructProps): void
    static new(): OAuthBasedSkeleton
    static $gtype: GObject.Type
}
export interface ObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class ObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly nameOwner: string
    /* Fields of Goa.ObjectManagerClient */
    /* Fields of Gio.DBusObjectManagerClient */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    getConnection(): Gio.DBusConnection
    getFlags(): Gio.DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
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
    /* Methods of Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): Gio.DBusInterface
    getObject(objectPath: string): Gio.DBusObject
    getObjectPath(): string
    getObjects(): Gio.DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfuncInterfaceProxyPropertiesChanged?(objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncInterfaceProxySignal?(objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    on(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    on(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    on(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectManagerClient_ConstructProps)
    _init (config?: ObjectManagerClient_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string, interfaceName?: string | null, userData?: object | null): GObject.Type
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
}
export class ObjectProxy {
    /* Properties of Gio.DBusObjectProxy */
    /* Properties of Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    mediaServer: MediaServer
    music: Music
    oauthBased: OAuthBased
    oauth2Based: OAuth2Based
    passwordBased: PasswordBased
    photos: Photos
    printers: Printers
    readLater: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Fields of Goa.ObjectProxy */
    /* Fields of Gio.DBusObjectProxy */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    getConnection(): Gio.DBusConnection
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
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Methods of Goa.Object */
    getAccount(): Account | null
    getCalendar(): Calendar | null
    getChat(): Chat | null
    getContacts(): Contacts | null
    getDocuments(): Documents | null
    getExchange(): Exchange | null
    getFiles(): Files | null
    getMail(): Mail | null
    getManager(): Manager | null
    getMaps(): Maps | null
    getMediaServer(): MediaServer | null
    getMusic(): Music | null
    getOauth2Based(): OAuth2Based | null
    getOauthBased(): OAuthBased | null
    getPasswordBased(): PasswordBased | null
    getPhotos(): Photos | null
    getPrinters(): Printers | null
    getReadLater(): ReadLater | null
    getTicketing(): Ticketing | null
    getTodo(): Todo | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::account", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exchange", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-server", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth2-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectProxy_ConstructProps)
    _init (config?: ObjectProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, objectPath: string): ObjectProxy
    static $gtype: GObject.Type
}
export interface ObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
}
export class ObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    gObjectPath: string
    /* Properties of Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    mediaServer: MediaServer
    music: Music
    oauthBased: OAuthBased
    oauth2Based: OAuth2Based
    passwordBased: PasswordBased
    photos: Photos
    printers: Printers
    readLater: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Fields of Goa.ObjectSkeleton */
    /* Fields of Gio.DBusObjectSkeleton */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Goa.ObjectSkeleton */
    setAccount(interface?: Account | null): void
    setCalendar(interface?: Calendar | null): void
    setChat(interface?: Chat | null): void
    setContacts(interface?: Contacts | null): void
    setDocuments(interface?: Documents | null): void
    setExchange(interface?: Exchange | null): void
    setFiles(interface?: Files | null): void
    setMail(interface?: Mail | null): void
    setManager(interface?: Manager | null): void
    setMaps(interface?: Maps | null): void
    setMediaServer(interface?: MediaServer | null): void
    setMusic(interface?: Music | null): void
    setOauth2Based(interface?: OAuth2Based | null): void
    setOauthBased(interface?: OAuthBased | null): void
    setPasswordBased(interface?: PasswordBased | null): void
    setPhotos(interface?: Photos | null): void
    setPrinters(interface?: Printers | null): void
    setReadLater(interface?: ReadLater | null): void
    setTicketing(interface?: Ticketing | null): void
    setTodo(interface?: Todo | null): void
    /* Methods of Gio.DBusObjectSkeleton */
    addInterface(interface: Gio.DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface: Gio.DBusInterfaceSkeleton): void
    removeInterfaceByName(interfaceName: string): void
    setObjectPath(objectPath: string): void
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
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Methods of Goa.Object */
    getAccount(): Account | null
    getCalendar(): Calendar | null
    getChat(): Chat | null
    getContacts(): Contacts | null
    getDocuments(): Documents | null
    getExchange(): Exchange | null
    getFiles(): Files | null
    getMail(): Mail | null
    getManager(): Manager | null
    getMaps(): Maps | null
    getMediaServer(): MediaServer | null
    getMusic(): Music | null
    getOauth2Based(): OAuth2Based | null
    getOauthBased(): OAuthBased | null
    getPasswordBased(): PasswordBased | null
    getPhotos(): Photos | null
    getPrinters(): Printers | null
    getReadLater(): ReadLater | null
    getTicketing(): Ticketing | null
    getTodo(): Todo | null
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfuncAuthorizeMethod?(interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    on(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::account", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exchange", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-server", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth2-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectSkeleton_ConstructProps)
    _init (config?: ObjectSkeleton_ConstructProps): void
    static new(objectPath: string): ObjectSkeleton
    static $gtype: GObject.Type
}
export interface PasswordBasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class PasswordBasedProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.PasswordBasedProxy */
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
    /* Methods of Goa.PasswordBased */
    callGetPassword(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    callGetPasswordSync(argId: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: PasswordBasedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PasswordBasedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: PasswordBasedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PasswordBasedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: (($obj: PasswordBasedProxy, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    connect_after(sigName: "handle-get-password", callback: (($obj: PasswordBasedProxy, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, argId: string): void
    on(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PasswordBasedProxy_ConstructProps)
    _init (config?: PasswordBasedProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): PasswordBasedProxy
    static newForBusFinish(res: Gio.AsyncResult): PasswordBasedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PasswordBasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class PasswordBasedSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.PasswordBasedSkeleton */
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
    /* Methods of Goa.PasswordBased */
    callGetPassword(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    callGetPasswordSync(argId: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    connect_after(sigName: "handle-get-password", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, argId: string): void
    on(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PasswordBasedSkeleton_ConstructProps)
    _init (config?: PasswordBasedSkeleton_ConstructProps): void
    static new(): PasswordBasedSkeleton
    static $gtype: GObject.Type
}
export interface PhotosProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class PhotosProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.PhotosProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: PhotosProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PhotosProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: PhotosProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PhotosProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhotosProxy_ConstructProps)
    _init (config?: PhotosProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): PhotosProxy
    static newForBusFinish(res: Gio.AsyncResult): PhotosProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PhotosSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class PhotosSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.PhotosSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: PhotosSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PhotosSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhotosSkeleton_ConstructProps)
    _init (config?: PhotosSkeleton_ConstructProps): void
    static new(): PhotosSkeleton
    static $gtype: GObject.Type
}
export interface PrintersProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class PrintersProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.PrintersProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: PrintersProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PrintersProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: PrintersProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PrintersProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintersProxy_ConstructProps)
    _init (config?: PrintersProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): PrintersProxy
    static newForBusFinish(res: Gio.AsyncResult): PrintersProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PrintersSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class PrintersSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.PrintersSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: PrintersSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PrintersSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintersSkeleton_ConstructProps)
    _init (config?: PrintersSkeleton_ConstructProps): void
    static new(): PrintersSkeleton
    static $gtype: GObject.Type
}
export interface ReadLaterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ReadLaterProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.ReadLaterProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: ReadLaterProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ReadLaterProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ReadLaterProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ReadLaterProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReadLaterProxy_ConstructProps)
    _init (config?: ReadLaterProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): ReadLaterProxy
    static newForBusFinish(res: Gio.AsyncResult): ReadLaterProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ReadLaterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ReadLaterSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.ReadLaterSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: ReadLaterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ReadLaterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReadLaterSkeleton_ConstructProps)
    _init (config?: ReadLaterSkeleton_ConstructProps): void
    static new(): ReadLaterSkeleton
    static $gtype: GObject.Type
}
export interface TicketingProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class TicketingProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa.Ticketing */
    details: GLib.Variant
    /* Fields of Goa.TicketingProxy */
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
    /* Methods of Goa.Ticketing */
    callGetTicket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    callGetTicketSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: TicketingProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: TicketingProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: TicketingProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: TicketingProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: (($obj: TicketingProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-ticket", callback: (($obj: TicketingProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TicketingProxy_ConstructProps)
    _init (config?: TicketingProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): TicketingProxy
    static newForBusFinish(res: Gio.AsyncResult): TicketingProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface TicketingSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class TicketingSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa.Ticketing */
    details: GLib.Variant
    /* Fields of Goa.TicketingSkeleton */
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
    /* Methods of Goa.Ticketing */
    callGetTicket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    callGetTicketSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-ticket", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TicketingSkeleton_ConstructProps)
    _init (config?: TicketingSkeleton_ConstructProps): void
    static new(): TicketingSkeleton
    static $gtype: GObject.Type
}
export interface TodoProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class TodoProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Goa.TodoProxy */
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
    connect(sigName: "g-properties-changed", callback: (($obj: TodoProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: TodoProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: TodoProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: TodoProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TodoProxy_ConstructProps)
    _init (config?: TodoProxy_ConstructProps): void
    static newFinish(res: Gio.AsyncResult): TodoProxy
    static newForBusFinish(res: Gio.AsyncResult): TodoProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface TodoSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class TodoSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of Goa.TodoSkeleton */
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
    connect(sigName: "g-authorize-method", callback: (($obj: TodoSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: TodoSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TodoSkeleton_ConstructProps)
    _init (config?: TodoSkeleton_ConstructProps): void
    static new(): TodoSkeleton
    static $gtype: GObject.Type
}
export abstract class AccountIface {
    /* Fields of Goa.AccountIface */
    parentIface: GObject.TypeInterface
    handleEnsureCredentials: any
    handleRemove: any
    getAttentionNeeded: any
    getCalendarDisabled: any
    getChatDisabled: any
    getContactsDisabled: any
    getDocumentsDisabled: any
    getId: any
    getIdentity: any
    getIsTemporary: any
    getMailDisabled: any
    getPresentationIdentity: any
    getProviderIcon: any
    getProviderName: any
    getProviderType: any
    getTicketingDisabled: any
    getFilesDisabled: any
    getPhotosDisabled: any
    getPrintersDisabled: any
    getReadLaterDisabled: any
    getMapsDisabled: any
    getIsLocked: any
    getMusicDisabled: any
    getTodoDisabled: any
    static name: string
}
export abstract class AccountProxyClass {
    /* Fields of Goa.AccountProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class AccountProxyPrivate {
    static name: string
}
export abstract class AccountSkeletonClass {
    /* Fields of Goa.AccountSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class AccountSkeletonPrivate {
    static name: string
}
export abstract class CalendarIface {
    /* Fields of Goa.CalendarIface */
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: any
    getUri: any
    static name: string
}
export abstract class CalendarProxyClass {
    /* Fields of Goa.CalendarProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class CalendarProxyPrivate {
    static name: string
}
export abstract class CalendarSkeletonClass {
    /* Fields of Goa.CalendarSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class CalendarSkeletonPrivate {
    static name: string
}
export abstract class ChatIface {
    /* Fields of Goa.ChatIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ChatProxyClass {
    /* Fields of Goa.ChatProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ChatProxyPrivate {
    static name: string
}
export abstract class ChatSkeletonClass {
    /* Fields of Goa.ChatSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ChatSkeletonPrivate {
    static name: string
}
export abstract class ClientClass {
    /* Fields of Goa.ClientClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ContactsIface {
    /* Fields of Goa.ContactsIface */
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: any
    getUri: any
    static name: string
}
export abstract class ContactsProxyClass {
    /* Fields of Goa.ContactsProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ContactsProxyPrivate {
    static name: string
}
export abstract class ContactsSkeletonClass {
    /* Fields of Goa.ContactsSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ContactsSkeletonPrivate {
    static name: string
}
export abstract class DocumentsIface {
    /* Fields of Goa.DocumentsIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class DocumentsProxyClass {
    /* Fields of Goa.DocumentsProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class DocumentsProxyPrivate {
    static name: string
}
export abstract class DocumentsSkeletonClass {
    /* Fields of Goa.DocumentsSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DocumentsSkeletonPrivate {
    static name: string
}
export abstract class ExchangeIface {
    /* Fields of Goa.ExchangeIface */
    parentIface: GObject.TypeInterface
    getHost: any
    getAcceptSslErrors: any
    static name: string
}
export abstract class ExchangeProxyClass {
    /* Fields of Goa.ExchangeProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ExchangeProxyPrivate {
    static name: string
}
export abstract class ExchangeSkeletonClass {
    /* Fields of Goa.ExchangeSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ExchangeSkeletonPrivate {
    static name: string
}
export abstract class FilesIface {
    /* Fields of Goa.FilesIface */
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: any
    getUri: any
    static name: string
}
export abstract class FilesProxyClass {
    /* Fields of Goa.FilesProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class FilesProxyPrivate {
    static name: string
}
export abstract class FilesSkeletonClass {
    /* Fields of Goa.FilesSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class FilesSkeletonPrivate {
    static name: string
}
export abstract class MailIface {
    /* Fields of Goa.MailIface */
    parentIface: GObject.TypeInterface
    getEmailAddress: any
    getImapHost: any
    getImapSupported: any
    getImapUseTls: any
    getImapUserName: any
    getSmtpHost: any
    getSmtpSupported: any
    getSmtpUseTls: any
    getSmtpUserName: any
    getImapAcceptSslErrors: any
    getImapUseSsl: any
    getName: any
    getSmtpAcceptSslErrors: any
    getSmtpUseAuth: any
    getSmtpUseSsl: any
    getSmtpAuthLogin: any
    getSmtpAuthPlain: any
    getSmtpAuthXoauth2: any
    static name: string
}
export abstract class MailProxyClass {
    /* Fields of Goa.MailProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class MailProxyPrivate {
    static name: string
}
export abstract class MailSkeletonClass {
    /* Fields of Goa.MailSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MailSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of Goa.ManagerIface */
    parentIface: GObject.TypeInterface
    handleAddAccount: any
    handleIsSupportedProvider: any
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of Goa.ManagerProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of Goa.ManagerSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class MapsIface {
    /* Fields of Goa.MapsIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class MapsProxyClass {
    /* Fields of Goa.MapsProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class MapsProxyPrivate {
    static name: string
}
export abstract class MapsSkeletonClass {
    /* Fields of Goa.MapsSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MapsSkeletonPrivate {
    static name: string
}
export abstract class MediaServerIface {
    /* Fields of Goa.MediaServerIface */
    parentIface: GObject.TypeInterface
    getDlnaSupported: any
    getUdn: any
    static name: string
}
export abstract class MediaServerProxyClass {
    /* Fields of Goa.MediaServerProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class MediaServerProxyPrivate {
    static name: string
}
export abstract class MediaServerSkeletonClass {
    /* Fields of Goa.MediaServerSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MediaServerSkeletonPrivate {
    static name: string
}
export abstract class MusicIface {
    /* Fields of Goa.MusicIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class MusicProxyClass {
    /* Fields of Goa.MusicProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class MusicProxyPrivate {
    static name: string
}
export abstract class MusicSkeletonClass {
    /* Fields of Goa.MusicSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MusicSkeletonPrivate {
    static name: string
}
export abstract class OAuth2BasedIface {
    /* Fields of Goa.OAuth2BasedIface */
    parentIface: GObject.TypeInterface
    handleGetAccessToken: any
    getClientId: any
    getClientSecret: any
    static name: string
}
export abstract class OAuth2BasedProxyClass {
    /* Fields of Goa.OAuth2BasedProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class OAuth2BasedProxyPrivate {
    static name: string
}
export abstract class OAuth2BasedSkeletonClass {
    /* Fields of Goa.OAuth2BasedSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class OAuth2BasedSkeletonPrivate {
    static name: string
}
export abstract class OAuthBasedIface {
    /* Fields of Goa.OAuthBasedIface */
    parentIface: GObject.TypeInterface
    handleGetAccessToken: any
    getConsumerKey: any
    getConsumerSecret: any
    static name: string
}
export abstract class OAuthBasedProxyClass {
    /* Fields of Goa.OAuthBasedProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class OAuthBasedProxyPrivate {
    static name: string
}
export abstract class OAuthBasedSkeletonClass {
    /* Fields of Goa.OAuthBasedSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class OAuthBasedSkeletonPrivate {
    static name: string
}
export abstract class ObjectIface {
    /* Fields of Goa.ObjectIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ObjectManagerClientClass {
    /* Fields of Goa.ObjectManagerClientClass */
    parentClass: Gio.DBusObjectManagerClientClass
    static name: string
}
export class ObjectManagerClientPrivate {
    static name: string
}
export abstract class ObjectProxyClass {
    /* Fields of Goa.ObjectProxyClass */
    parentClass: Gio.DBusObjectProxyClass
    static name: string
}
export class ObjectProxyPrivate {
    static name: string
}
export abstract class ObjectSkeletonClass {
    /* Fields of Goa.ObjectSkeletonClass */
    parentClass: Gio.DBusObjectSkeletonClass
    static name: string
}
export class ObjectSkeletonPrivate {
    static name: string
}
export abstract class PasswordBasedIface {
    /* Fields of Goa.PasswordBasedIface */
    parentIface: GObject.TypeInterface
    handleGetPassword: any
    static name: string
}
export abstract class PasswordBasedProxyClass {
    /* Fields of Goa.PasswordBasedProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PasswordBasedProxyPrivate {
    static name: string
}
export abstract class PasswordBasedSkeletonClass {
    /* Fields of Goa.PasswordBasedSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PasswordBasedSkeletonPrivate {
    static name: string
}
export abstract class PhotosIface {
    /* Fields of Goa.PhotosIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class PhotosProxyClass {
    /* Fields of Goa.PhotosProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PhotosProxyPrivate {
    static name: string
}
export abstract class PhotosSkeletonClass {
    /* Fields of Goa.PhotosSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PhotosSkeletonPrivate {
    static name: string
}
export abstract class PrintersIface {
    /* Fields of Goa.PrintersIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class PrintersProxyClass {
    /* Fields of Goa.PrintersProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PrintersProxyPrivate {
    static name: string
}
export abstract class PrintersSkeletonClass {
    /* Fields of Goa.PrintersSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PrintersSkeletonPrivate {
    static name: string
}
export abstract class ReadLaterIface {
    /* Fields of Goa.ReadLaterIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ReadLaterProxyClass {
    /* Fields of Goa.ReadLaterProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ReadLaterProxyPrivate {
    static name: string
}
export abstract class ReadLaterSkeletonClass {
    /* Fields of Goa.ReadLaterSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ReadLaterSkeletonPrivate {
    static name: string
}
export abstract class TicketingIface {
    /* Fields of Goa.TicketingIface */
    parentIface: GObject.TypeInterface
    handleGetTicket: any
    getDetails: any
    static name: string
}
export abstract class TicketingProxyClass {
    /* Fields of Goa.TicketingProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class TicketingProxyPrivate {
    static name: string
}
export abstract class TicketingSkeletonClass {
    /* Fields of Goa.TicketingSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class TicketingSkeletonPrivate {
    static name: string
}
export abstract class TodoIface {
    /* Fields of Goa.TodoIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class TodoProxyClass {
    /* Fields of Goa.TodoProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class TodoProxyPrivate {
    static name: string
}
export abstract class TodoSkeletonClass {
    /* Fields of Goa.TodoSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class TodoSkeletonPrivate {
    static name: string
}
}