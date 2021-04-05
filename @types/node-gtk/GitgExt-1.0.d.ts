/**
 * GitgExt-1.0
 */

/// <reference types="node" />
/// <reference path="Gitg-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gee-0.8.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Ggit-1.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace GitgExt {

export enum SelectionMode {
    NORMAL,
    SELECTION,
}
export enum ExternalChangeHint {
    NONE,
    REFS,
    INDEX,
}
export interface ForeachCommitSelectionFunc {
    (object: Ggit.Commit): boolean
}
export interface MessageCallback {
    (message: Message): void
}
export interface RefNameEditingDone {
    (newName: string, cancelled: boolean): void
}
export class Action {
    /* Methods of GitgExt.Action */
    populateMenu(menu: any): void
    /* Virtual methods of GitgExt.Action */
    vfuncPopulateMenu?(menu: any): void
    static name: string
}
export class Activity {
    /* Methods of GitgExt.Activity */
    isDefaultFor(action: string): boolean
    /* Virtual methods of GitgExt.Activity */
    vfuncIsDefaultFor?(action: string): boolean
    static name: string
}
export class Application {
    /* Properties of GitgExt.Application */
    repository: any
    readonly messageBus: MessageBus
    readonly currentActivity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remoteLookup: RemoteLookup
    /* Methods of GitgExt.Application */
    getVerifiedCommitter(): Ggit.Signature | null
    getActivityById(id: string): Activity | null
    setActivityById(id: string): Activity | null
    userQuery(query: UserQuery): void
    userQueryAsync(query: UserQuery, callback?: Gio.AsyncReadyCallback | null): void
    userQueryFinish(res: Gio.AsyncResult): Gtk.ResponseType
    showInfobar(primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType): void
    openNew(repository: Ggit.Repository, hint?: string | null): Application
    openRepository(path: Gio.File): void
    getRepository(): any
    setRepository(value?: any): void
    getMessageBus(): MessageBus
    getCurrentActivity(): Activity | null
    getEnvironment(): Gee.Map
    getNotifications(): Notifications
    getBusy(): boolean
    setBusy(value: boolean): void
    getRemoteLookup(): RemoteLookup
    /* Virtual methods of GitgExt.Application */
    vfuncGetVerifiedCommitter?(): Ggit.Signature | null
    vfuncGetActivityById?(id: string): Activity | null
    vfuncSetActivityById?(id: string): Activity | null
    vfuncUserQuery?(query: UserQuery): void
    vfuncUserQueryAsync?(query: UserQuery, callback?: Gio.AsyncReadyCallback | null): void
    vfuncUserQueryFinish?(res: Gio.AsyncResult): Gtk.ResponseType
    vfuncShowInfobar?(primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType): void
    vfuncOpenNew?(repository: Ggit.Repository, hint?: string | null): Application
    vfuncOpenRepository?(path: Gio.File): void
    vfuncGetRepository?(): any
    vfuncSetRepository?(value?: any): void
    vfuncGetMessageBus?(): MessageBus
    vfuncGetCurrentActivity?(): Activity | null
    vfuncGetEnvironment?(): Gee.Map
    vfuncGetNotifications?(): Notifications
    vfuncGetBusy?(): boolean
    vfuncSetBusy?(value: boolean): void
    vfuncGetRemoteLookup?(): RemoteLookup
    /* Signals of GitgExt.Application */
    connect(sigName: "repository-changed-externally", callback: (($obj: Application, hint: ExternalChangeHint) => void)): number
    connect_after(sigName: "repository-changed-externally", callback: (($obj: Application, hint: ExternalChangeHint) => void)): number
    emit(sigName: "repository-changed-externally", hint: ExternalChangeHint): void
    on(sigName: "repository-changed-externally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "repository-changed-externally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "repository-changed-externally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "repository-commits-changed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "repository-commits-changed", callback: (($obj: Application) => void)): number
    emit(sigName: "repository-commits-changed"): void
    on(sigName: "repository-commits-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "repository-commits-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "repository-commits-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class CommandLine {
    /* Methods of GitgExt.CommandLine */
    getOptionGroup(): GLib.OptionGroup
    parseFinished(): void
    apply(application: Application): void
    /* Virtual methods of GitgExt.CommandLine */
    vfuncGetOptionGroup?(): GLib.OptionGroup
    vfuncParseFinished?(): void
    vfuncApply?(application: Application): void
    static name: string
}
export class CommitAction {
    /* Properties of GitgExt.CommitAction */
    actionInterface: RefActionInterface
    commit: any
    /* Methods of GitgExt.CommitAction */
    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getCommit(): any
    setCommit(value: any): void
    /* Virtual methods of GitgExt.CommitAction */
    vfuncGetActionInterface?(): RefActionInterface
    vfuncSetActionInterface?(value: RefActionInterface): void
    vfuncGetCommit?(): any
    vfuncSetCommit?(value: any): void
    /* Signals of GitgExt.CommitAction */
    connect(sigName: "finished", callback: (($obj: CommitAction) => void)): number
    connect_after(sigName: "finished", callback: (($obj: CommitAction) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class HistoryPanel {
    /* Properties of GitgExt.HistoryPanel */
    history: History
    /* Methods of GitgExt.HistoryPanel */
    getHistory(): History | null
    setHistory(value?: History | null): void
    /* Virtual methods of GitgExt.HistoryPanel */
    vfuncGetHistory?(): History | null
    vfuncSetHistory?(value?: History | null): void
    static name: string
}
export class History {
    /* Methods of GitgExt.History */
    foreachSelected(func: ForeachCommitSelectionFunc): void
    select(commit: any): void
    /* Virtual methods of GitgExt.History */
    vfuncForeachSelected?(func: ForeachCommitSelectionFunc): void
    vfuncSelect?(commit: any): void
    /* Signals of GitgExt.History */
    connect(sigName: "selection-changed", callback: (($obj: History) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: History) => void)): number
    emit(sigName: "selection-changed"): void
    on(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Notification {
    /* Properties of GitgExt.Notification */
    readonly widget: Gtk.Widget
    /* Methods of GitgExt.Notification */
    getWidget(): Gtk.Widget | null
    /* Virtual methods of GitgExt.Notification */
    vfuncGetWidget?(): Gtk.Widget | null
    /* Signals of GitgExt.Notification */
    connect(sigName: "close", callback: (($obj: Notification, delay: number) => void)): number
    connect_after(sigName: "close", callback: (($obj: Notification, delay: number) => void)): number
    emit(sigName: "close", delay: number): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Notifications {
    /* Methods of GitgExt.Notifications */
    add(notification: Notification): void
    remove(notification: Notification, delay: number): void
    /* Virtual methods of GitgExt.Notifications */
    vfuncAdd?(notification: Notification): void
    vfuncRemove?(notification: Notification, delay: number): void
    static name: string
}
export class Preferences {
    /* Properties of GitgExt.Preferences */
    readonly id: string
    readonly displayName: string
    readonly widget: Gtk.Widget
    /* Methods of GitgExt.Preferences */
    getId(): string
    getDisplayName(): string
    getWidget(): Gtk.Widget
    /* Virtual methods of GitgExt.Preferences */
    vfuncGetId?(): string
    vfuncGetDisplayName?(): string
    vfuncGetWidget?(): Gtk.Widget
    static name: string
}
export class RefActionInterface {
    /* Properties of GitgExt.RefActionInterface */
    application: Application
    readonly references: Gee.List
    /* Methods of GitgExt.RefActionInterface */
    addRef(reference: any): void
    removeRef(reference: any): void
    replaceRef(oldRef: any, newRef: any): void
    setBusy(reference: any, busy: boolean): void
    editRefName(reference: any, callback: RefNameEditingDone): void
    refresh(): void
    getApplication(): Application
    setApplication(value: Application): void
    getReferences(): Gee.List
    /* Virtual methods of GitgExt.RefActionInterface */
    vfuncAddRef?(reference: any): void
    vfuncRemoveRef?(reference: any): void
    vfuncReplaceRef?(oldRef: any, newRef: any): void
    vfuncSetBusy?(reference: any, busy: boolean): void
    vfuncEditRefName?(reference: any, callback: RefNameEditingDone): void
    vfuncRefresh?(): void
    vfuncGetApplication?(): Application
    vfuncSetApplication?(value: Application): void
    vfuncGetReferences?(): Gee.List
    static name: string
}
export class RefAction {
    /* Properties of GitgExt.RefAction */
    actionInterface: RefActionInterface
    reference: any
    /* Methods of GitgExt.RefAction */
    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getReference(): any
    setReference(value: any): void
    /* Virtual methods of GitgExt.RefAction */
    vfuncGetActionInterface?(): RefActionInterface
    vfuncSetActionInterface?(value: RefActionInterface): void
    vfuncGetReference?(): any
    vfuncSetReference?(value: any): void
    static name: string
}
export class RemoteLookup {
    /* Methods of GitgExt.RemoteLookup */
    lookup(name: string): any
    /* Virtual methods of GitgExt.RemoteLookup */
    vfuncLookup?(name: string): any
    static name: string
}
export class Searchable {
    /* Properties of GitgExt.Searchable */
    searchText: string
    searchVisible: boolean
    readonly searchAvailable: boolean
    searchEntry: Gtk.Entry
    /* Methods of GitgExt.Searchable */
    getSearchText(): string
    setSearchText(value: string): void
    getSearchVisible(): boolean
    setSearchVisible(value: boolean): void
    getSearchAvailable(): boolean
    setSearchEntry(value?: Gtk.Entry | null): void
    /* Virtual methods of GitgExt.Searchable */
    vfuncGetSearchText?(): string
    vfuncSetSearchText?(value: string): void
    vfuncGetSearchVisible?(): boolean
    vfuncSetSearchVisible?(value: boolean): void
    vfuncGetSearchAvailable?(): boolean
    vfuncSetSearchEntry?(value?: Gtk.Entry | null): void
    static name: string
}
export class Selectable {
    /* Properties of GitgExt.Selectable */
    selectableMode: SelectionMode
    readonly selectableAvailable: boolean
    readonly selectableModeTooltip: string
    readonly actionWidget: Gtk.Widget
    /* Methods of GitgExt.Selectable */
    getSelectableMode(): SelectionMode
    setSelectableMode(value: SelectionMode): void
    getSelectableAvailable(): boolean
    getSelectableModeTooltip(): string
    getActionWidget(): Gtk.Widget | null
    /* Virtual methods of GitgExt.Selectable */
    vfuncGetSelectableMode?(): SelectionMode
    vfuncSetSelectableMode?(value: SelectionMode): void
    vfuncGetSelectableAvailable?(): boolean
    vfuncGetSelectableModeTooltip?(): string
    vfuncGetActionWidget?(): Gtk.Widget | null
    static name: string
}
export class UIElement {
    /* Properties of GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Methods of GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getAvailable(): boolean
    getEnabled(): boolean
    /* Virtual methods of GitgExt.UIElement */
    vfuncNegotiateOrder?(other: UIElement): number
    vfuncGetApplication?(): Application | null
    vfuncSetApplication?(value?: Application | null): void
    vfuncGetId?(): string
    vfuncGetDisplayName?(): string
    vfuncGetDescription?(): string
    vfuncGetIcon?(): string | null
    vfuncGetWidget?(): Gtk.Widget | null
    vfuncGetAvailable?(): boolean
    vfuncGetEnabled?(): boolean
    /* Signals of GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: UIElement) => void)): number
    connect_after(sigName: "activate", callback: (($obj: UIElement) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface CommandLines_ConstructProps extends GObject.Object_ConstructProps {
}
export class CommandLines {
    /* Fields of GitgExt.CommandLines */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt.CommandLines */
    getFor(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): object | null
    parseFinished(): void
    apply(application: Application): void
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
    connect(sigName: "notify", callback: (($obj: CommandLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommandLines, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CommandLines_ConstructProps)
    _init (config?: CommandLines_ConstructProps): void
    static new(commandLines: CommandLine[]): CommandLines
    static $gtype: GObject.Type
}
export interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}
export class MessageBus {
    /* Fields of GitgExt.MessageBus */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt.MessageBus */
    lookup(id: MessageId): GObject.Type
    register(messageType: GObject.Type, id: MessageId): void
    unregister(id: MessageId): void
    unregisterAll(objectPath: string): void
    isRegistered(id: MessageId): boolean
    connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    sendMessage(message: Message): Message
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
    /* Signals of GitgExt.MessageBus */
    connect(sigName: "registered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    connect_after(sigName: "registered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    emit(sigName: "registered", id: MessageId): void
    on(sigName: "registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unregistered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    connect_after(sigName: "unregistered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    emit(sigName: "unregistered", id: MessageId): void
    on(sigName: "unregistered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unregistered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unregistered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dispatch", callback: (($obj: MessageBus, message: Message) => void)): number
    connect_after(sigName: "dispatch", callback: (($obj: MessageBus, message: Message) => void)): number
    emit(sigName: "dispatch", message: Message): void
    on(sigName: "dispatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dispatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dispatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageBus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MessageBus_ConstructProps)
    _init (config?: MessageBus_ConstructProps): void
    static new(): MessageBus
    static getDefault(): MessageBus
    static $gtype: GObject.Type
}
export interface MessageId_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
    method?: string
}
export class MessageId {
    /* Properties of GitgExt.MessageId */
    objectPath: string
    method: string
    readonly id: string
    /* Fields of GitgExt.MessageId */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt.MessageId */
    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    getObjectPath(): string
    setObjectPath(value: string): void
    getMethod(): string
    setMethod(value: string): void
    getId(): string
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
    connect(sigName: "notify", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MessageId_ConstructProps)
    _init (config?: MessageId_ConstructProps): void
    static new(objectPath: string, method: string): MessageId
    static validObjectPath(path: string): boolean
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    id?: MessageId
}
export class Message {
    /* Properties of GitgExt.Message */
    id: MessageId
    /* Fields of GitgExt.Message */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt.Message */
    has(propname: string): boolean
    getId(): MessageId
    setId(value: MessageId): void
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
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    static typeHas(type: GObject.Type, propname: string): boolean
    static typeCheck(type: GObject.Type, propname: string, valueType: GObject.Type): boolean
    static $gtype: GObject.Type
}
export class UI {
    /* Fields of GitgExt.UI */
    refCount: number
    static name: string
    static new(): UI
    constructor()
    static new(): UI
}
export interface UserQueryResponse_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserQueryResponse {
    /* Fields of GitgExt.UserQueryResponse */
    text: string
    responseType: Gtk.ResponseType
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
    connect(sigName: "notify", callback: (($obj: UserQueryResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserQueryResponse, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UserQueryResponse_ConstructProps)
    _init (config?: UserQueryResponse_ConstructProps): void
    static new(text: string, responseType: Gtk.ResponseType): UserQueryResponse
    static $gtype: GObject.Type
}
export interface UserQuery_ConstructProps extends GObject.Object_ConstructProps {
    title?: string
    message?: string
    messageType?: Gtk.MessageType
    defaultResponse?: Gtk.ResponseType
    defaultIsDestructive?: boolean
    messageUseMarkup?: boolean
}
export class UserQuery {
    /* Properties of GitgExt.UserQuery */
    title: string
    message: string
    messageType: Gtk.MessageType
    defaultResponse: Gtk.ResponseType
    defaultIsDestructive: boolean
    messageUseMarkup: boolean
    /* Fields of GitgExt.UserQuery */
    responses: UserQueryResponse[]
    responsesLength1: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt.UserQuery */
    getResponses(): UserQueryResponse[]
    setResponses(value: UserQueryResponse[]): void
    getTitle(): string
    setTitle(value: string): void
    getMessage(): string
    setMessage(value: string): void
    getMessageType(): Gtk.MessageType
    setMessageType(value: Gtk.MessageType): void
    getDefaultResponse(): Gtk.ResponseType
    setDefaultResponse(value: Gtk.ResponseType): void
    getDefaultIsDestructive(): boolean
    setDefaultIsDestructive(value: boolean): void
    getMessageUseMarkup(): boolean
    setMessageUseMarkup(value: boolean): void
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
    /* Signals of GitgExt.UserQuery */
    connect(sigName: "quit", callback: (($obj: UserQuery) => void)): number
    connect_after(sigName: "quit", callback: (($obj: UserQuery) => void)): number
    emit(sigName: "quit"): void
    on(sigName: "quit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "quit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "quit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "response", callback: (($obj: UserQuery, responseType: Gtk.ResponseType) => boolean)): number
    connect_after(sigName: "response", callback: (($obj: UserQuery, responseType: Gtk.ResponseType) => boolean)): number
    emit(sigName: "response", responseType: Gtk.ResponseType): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserQuery_ConstructProps)
    _init (config?: UserQuery_ConstructProps): void
    static new(): UserQuery
    static $gtype: GObject.Type
}
export abstract class CommandLinesClass {
    /* Fields of GitgExt.CommandLinesClass */
    static name: string
}
export class CommandLinesPrivate {
    static name: string
}
export abstract class MessageBusClass {
    /* Fields of GitgExt.MessageBusClass */
    dispatch: any
    static name: string
}
export class MessageBusPrivate {
    static name: string
}
export abstract class MessageIdClass {
    /* Fields of GitgExt.MessageIdClass */
    static name: string
}
export class MessageIdPrivate {
    static name: string
}
export abstract class MessageClass {
    /* Fields of GitgExt.MessageClass */
    static name: string
}
export class MessagePrivate {
    static name: string
}
export abstract class UIClass {
    /* Fields of GitgExt.UIClass */
    static name: string
}
export class UIPrivate {
    static name: string
}
export abstract class UserQueryResponseClass {
    /* Fields of GitgExt.UserQueryResponseClass */
    static name: string
}
export class UserQueryResponsePrivate {
    static name: string
}
export abstract class UserQueryClass {
    /* Fields of GitgExt.UserQueryClass */
    static name: string
}
export class UserQueryPrivate {
    static name: string
}
export abstract class ActionIface {
    /* Fields of GitgExt.ActionIface */
    populateMenu: any
    static name: string
}
export abstract class ActivityIface {
    /* Fields of GitgExt.ActivityIface */
    isDefaultFor: any
    static name: string
}
export abstract class ApplicationIface {
    /* Fields of GitgExt.ApplicationIface */
    getVerifiedCommitter: any
    getActivityById: any
    setActivityById: any
    userQuery: any
    userQueryAsync: any
    userQueryFinish: any
    showInfobar: any
    openNew: any
    openRepository: any
    getRepository: any
    setRepository: any
    getMessageBus: any
    getCurrentActivity: any
    getEnvironment: any
    getNotifications: any
    getBusy: any
    setBusy: any
    getRemoteLookup: any
    static name: string
}
export abstract class CommandLineIface {
    /* Fields of GitgExt.CommandLineIface */
    getOptionGroup: any
    parseFinished: any
    apply: any
    static name: string
}
export abstract class CommitActionIface {
    /* Fields of GitgExt.CommitActionIface */
    getActionInterface: any
    setActionInterface: any
    getCommit: any
    setCommit: any
    static name: string
}
export abstract class HistoryPanelIface {
    /* Fields of GitgExt.HistoryPanelIface */
    getHistory: any
    setHistory: any
    static name: string
}
export abstract class HistoryIface {
    /* Fields of GitgExt.HistoryIface */
    foreachSelected: any
    select: any
    static name: string
}
export abstract class NotificationIface {
    /* Fields of GitgExt.NotificationIface */
    getWidget: any
    static name: string
}
export abstract class NotificationsIface {
    /* Fields of GitgExt.NotificationsIface */
    add: any
    remove: any
    static name: string
}
export abstract class PreferencesIface {
    /* Fields of GitgExt.PreferencesIface */
    getId: any
    getDisplayName: any
    getWidget: any
    static name: string
}
export abstract class RefActionInterfaceIface {
    /* Fields of GitgExt.RefActionInterfaceIface */
    addRef: any
    removeRef: any
    replaceRef: any
    setBusy: any
    editRefName: any
    refresh: any
    getApplication: any
    setApplication: any
    getReferences: any
    static name: string
}
export abstract class RefActionIface {
    /* Fields of GitgExt.RefActionIface */
    getActionInterface: any
    setActionInterface: any
    getReference: any
    setReference: any
    static name: string
}
export abstract class RemoteLookupIface {
    /* Fields of GitgExt.RemoteLookupIface */
    lookup: any
    static name: string
}
export abstract class SearchableIface {
    /* Fields of GitgExt.SearchableIface */
    getSearchText: any
    setSearchText: any
    getSearchVisible: any
    setSearchVisible: any
    getSearchAvailable: any
    setSearchEntry: any
    static name: string
}
export abstract class SelectableIface {
    /* Fields of GitgExt.SelectableIface */
    getSelectableMode: any
    setSelectableMode: any
    getSelectableAvailable: any
    getSelectableModeTooltip: any
    getActionWidget: any
    static name: string
}
export abstract class UIElementIface {
    /* Fields of GitgExt.UIElementIface */
    negotiateOrder: any
    getApplication: any
    setApplication: any
    getId: any
    getDisplayName: any
    getDescription: any
    getIcon: any
    getWidget: any
    getAvailable: any
    getEnabled: any
    static name: string
}
}