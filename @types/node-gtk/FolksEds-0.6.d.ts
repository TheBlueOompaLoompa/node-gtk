/**
 * FolksEds-0.6
 */

/// <reference types="node" />
/// <reference path="EBookContacts-1.2.d.ts" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="EDataServer-1.2.d.ts" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Camel-1.2.d.ts" />
/// <reference path="Gee-0.8.d.ts" />
/// <reference path="Folks-0.6.d.ts" />

declare namespace FolksEds {

export interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {
    source?: EDataServer.Source
}
export class PersonaStore {
    /* Properties of FolksEds.PersonaStore */
    /* Properties of Folks.PersonaStore */
    readonly typeId: string
    readonly personas: Gee.Map
    readonly canAddPersonas: Folks.MaybeBool
    readonly canAliasPersonas: Folks.MaybeBool
    readonly canGroupPersonas: Folks.MaybeBool
    readonly canRemovePersonas: Folks.MaybeBool
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    isWriteable: boolean
    trustLevel: Folks.PersonaStoreTrust
    readonly alwaysWriteableProperties: string[]
    isPrimaryStore: boolean
    isUserSetDefault: boolean
    /* Fields of FolksEds.PersonaStore */
    /* Fields of Folks.PersonaStore */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of FolksEds.PersonaStore */
    getSource(): EDataServer.Source
    /* Methods of Folks.PersonaStore */
    emitPersonasChanged(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    flush(callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(res: Gio.AsyncResult): void
    addPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Folks.Persona | null
    removePersona(persona: Folks.Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getDisplayName(): string
    getId(): string
    getPersonas(): Gee.Map
    getCanAddPersonas(): Folks.MaybeBool
    getCanAliasPersonas(): Folks.MaybeBool
    getCanGroupPersonas(): Folks.MaybeBool
    getCanRemovePersonas(): Folks.MaybeBool
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getIsWriteable(): boolean
    setIsWriteable(value: boolean): void
    getTrustLevel(): Folks.PersonaStoreTrust
    setTrustLevel(value: Folks.PersonaStoreTrust): void
    getAlwaysWriteableProperties(): string[]
    getIsPrimaryStore(): boolean
    getIsUserSetDefault(): boolean
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
    /* Virtual methods of Folks.PersonaStore */
    vfuncPrepare?(callback?: Gio.AsyncReadyCallback | null): void
    vfuncPrepareFinish?(res: Gio.AsyncResult): void
    vfuncFlush?(callback?: Gio.AsyncReadyCallback | null): void
    vfuncFlushFinish?(res: Gio.AsyncResult): void
    vfuncAddPersonaFromDetails?(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    vfuncAddPersonaFromDetailsFinish?(res: Gio.AsyncResult): Folks.Persona | null
    vfuncRemovePersona?(persona: Folks.Persona, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemovePersonaFinish?(res: Gio.AsyncResult): void
    vfuncGetTypeId?(): string
    vfuncGetPersonas?(): Gee.Map
    vfuncGetCanAddPersonas?(): Folks.MaybeBool
    vfuncGetCanAliasPersonas?(): Folks.MaybeBool
    vfuncGetCanGroupPersonas?(): Folks.MaybeBool
    vfuncGetCanRemovePersonas?(): Folks.MaybeBool
    vfuncGetIsPrepared?(): boolean
    vfuncGetIsQuiescent?(): boolean
    vfuncGetAlwaysWriteableProperties?(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    on(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    connect_after(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    emit(sigName: "removed"): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PersonaStore_ConstructProps)
    _init (config?: PersonaStore_ConstructProps): void
    static new(s: EDataServer.Source): PersonaStore
    static withSourceRegistry(r: EDataServer.SourceRegistry, s: EDataServer.Source): PersonaStore
    static createAddressBook(id: string, callback?: Gio.AsyncReadyCallback | null): void
    static createAddressBookFinish(res: Gio.AsyncResult): void
    static removeAddressBook(store: PersonaStore, callback?: Gio.AsyncReadyCallback | null): void
    static removeAddressBookFinish(res: Gio.AsyncResult): void
    static $gtype: GObject.Type
}
export interface Persona_ConstructProps extends Folks.Persona_ConstructProps {
    contact?: EBookContacts.Contact
    contactId?: string
    systemGroups?: Gee.Set
    inGooglePersonalGroup?: boolean
}
export class Persona {
    /* Properties of FolksEds.Persona */
    systemGroups: Gee.Set
    inGooglePersonalGroup: boolean
    /* Properties of Folks.Persona */
    individual: Folks.Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]
    /* Properties of Folks.AntiLinkable */
    antiLinks: Gee.Set
    /* Properties of Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendarEventId: string
    /* Properties of Folks.EmailDetails */
    emailAddresses: Gee.Set
    /* Properties of Folks.FavouriteDetails */
    isFavourite: boolean
    /* Properties of Folks.GenderDetails */
    gender: Folks.Gender
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks.ImDetails */
    imAddresses: Gee.MultiMap
    /* Properties of Folks.LocalIdDetails */
    localIds: Gee.Set
    /* Properties of Folks.LocationDetails */
    location: Folks.Location
    /* Properties of Folks.NameDetails */
    structuredName: Folks.StructuredName
    fullName: string
    nickname: string
    /* Properties of Folks.NoteDetails */
    notes: Gee.Set
    /* Properties of Folks.PhoneDetails */
    phoneNumbers: Gee.Set
    /* Properties of Folks.RoleDetails */
    roles: Gee.Set
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Properties of Folks.PostalAddressDetails */
    postalAddresses: Gee.Set
    /* Properties of Folks.WebServiceDetails */
    webServiceAddresses: Gee.MultiMap
    /* Fields of FolksEds.Persona */
    /* Fields of Folks.Persona */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of FolksEds.Persona */
    changeSystemGroups(systemGroups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeSystemGroupsFinish(res: Gio.AsyncResult): void
    changeInGooglePersonalGroup(inPersonal: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeInGooglePersonalGroupFinish(res: Gio.AsyncResult): void
    getContact(): EBookContacts.Contact
    getContactId(): string
    getSystemGroups(): Gee.Set | null
    setSystemGroups(value?: Gee.Set | null): void
    getInGooglePersonalGroup(): boolean
    setInGooglePersonalGroup(value: boolean): void
    /* Methods of Folks.Persona */
    linkablePropertyToLinks(propName: string, callback: any): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): Folks.PersonaStore
    getIndividual(): Folks.Individual | null
    getLinkableProperties(): string[]
    getWriteableProperties(): string[]
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
    /* Methods of Folks.AntiLinkable */
    changeAntiLinks(antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeAntiLinksFinish(res: Gio.AsyncResult): void
    hasAntiLinkWithPersona(otherPersona: Folks.Persona): boolean
    addAntiLinks(otherPersonas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    addAntiLinksFinish(res: Gio.AsyncResult): void
    removeAntiLinks(otherPersonas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    removeAntiLinksFinish(res: Gio.AsyncResult): void
    addGlobalAntiLink(callback?: Gio.AsyncReadyCallback | null): void
    addGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    removeGlobalAntiLink(callback?: Gio.AsyncReadyCallback | null): void
    removeGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    hasGlobalAntiLink(): boolean
    getAntiLinks(): Gee.Set
    setAntiLinks(value: Gee.Set): void
    /* Methods of Folks.AvatarDetails */
    changeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    changeAvatarFinish(res: Gio.AsyncResult): void
    getAvatar(): Gio.LoadableIcon | null
    setAvatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks.BirthdayDetails */
    changeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    changeBirthdayFinish(res: Gio.AsyncResult): void
    changeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    getBirthday(): GLib.DateTime | null
    setBirthday(value?: GLib.DateTime | null): void
    getCalendarEventId(): string | null
    setCalendarEventId(value?: string | null): void
    /* Methods of Folks.EmailDetails */
    changeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeEmailAddressesFinish(res: Gio.AsyncResult): void
    getEmailAddresses(): Gee.Set
    setEmailAddresses(value: Gee.Set): void
    /* Methods of Folks.ExtendedInfo */
    getExtendedField(name: string): Folks.ExtendedFieldDetails | null
    changeExtendedField(name: string, value: Folks.ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    changeExtendedFieldFinish(res: Gio.AsyncResult): void
    removeExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    removeExtendedFieldFinish(res: Gio.AsyncResult): void
    /* Methods of Folks.FavouriteDetails */
    changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void
    /* Methods of Folks.GenderDetails */
    changeGender(gender: Folks.Gender, callback?: Gio.AsyncReadyCallback | null): void
    changeGenderFinish(res: Gio.AsyncResult): void
    getGender(): Folks.Gender
    setGender(value: Folks.Gender): void
    /* Methods of Folks.GroupDetails */
    changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void
    /* Methods of Folks.ImDetails */
    changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void
    /* Methods of Folks.LocalIdDetails */
    changeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeLocalIdsFinish(res: Gio.AsyncResult): void
    getLocalIds(): Gee.Set
    setLocalIds(value: Gee.Set): void
    /* Methods of Folks.LocationDetails */
    changeLocation(location?: Folks.Location | null, callback?: Gio.AsyncReadyCallback | null): void
    changeLocationFinish(res: Gio.AsyncResult): void
    getLocation(): Folks.Location | null
    setLocation(value?: Folks.Location | null): void
    /* Methods of Folks.NameDetails */
    changeStructuredName(name?: Folks.StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): Folks.StructuredName | null
    setStructuredName(value?: Folks.StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void
    /* Methods of Folks.NoteDetails */
    changeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeNotesFinish(res: Gio.AsyncResult): void
    getNotes(): Gee.Set
    setNotes(value: Gee.Set): void
    /* Methods of Folks.PhoneDetails */
    changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void
    /* Methods of Folks.RoleDetails */
    changeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeRolesFinish(res: Gio.AsyncResult): void
    getRoles(): Gee.Set
    setRoles(value: Gee.Set): void
    /* Methods of Folks.UrlDetails */
    changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void
    /* Methods of Folks.PostalAddressDetails */
    changePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePostalAddressesFinish(res: Gio.AsyncResult): void
    getPostalAddresses(): Gee.Set
    setPostalAddresses(value: Gee.Set): void
    /* Methods of Folks.WebServiceDetails */
    changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    getWebServiceAddresses(): Gee.MultiMap
    setWebServiceAddresses(value: Gee.MultiMap): void
    /* Virtual methods of Folks.Persona */
    vfuncLinkablePropertyToLinks?(propName: string, callback: any): void
    vfuncGetLinkableProperties?(): string[]
    vfuncGetWriteableProperties?(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Persona, group: string, isMember: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Persona, group: string, isMember: boolean) => void)): number
    emit(sigName: "group-changed", group: string, isMember: boolean): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-google-personal-group", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-google-personal-group", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anti-links", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anti-links", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gender", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-ids", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notes", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::roles", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postal-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::web-service-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    static new(store: PersonaStore, contact: EBookContacts.Contact): Persona
    static $gtype: GObject.Type
}
export abstract class PersonaStoreClass {
    /* Fields of FolksEds.PersonaStoreClass */
    static name: string
}
export class PersonaStorePrivate {
    static name: string
}
export abstract class PersonaClass {
    /* Fields of FolksEds.PersonaClass */
    static name: string
}
export class PersonaPrivate {
    static name: string
}
}