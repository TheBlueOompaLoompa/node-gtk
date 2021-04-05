/**
 * LangTag-0.6
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace LangTag {

export enum ErrorType {
}
export enum TagFilter {
}
export const DIR_SEPARATOR: number
export const DIR_SEPARATOR_S: string
export const EXT_MODULE_VERSION: number
export const PATH_MAX: number
export const SEARCHPATH_SEPARATOR: number
export const SEARCHPATH_SEPARATOR_S: string
export function dbFinalize(): void
export function dbGetDatadir(): string
export function dbGetExtlang(): ExtlangDb
export function dbGetGrandfathered(): GrandfatheredDb
export function dbGetLang(): LangDb
export function dbGetRedundant(): RedundantDb
export function dbGetRegion(): RegionDb
export function dbGetRelation(): RelationDb
export function dbGetScript(): ScriptDb
export function dbGetVariant(): VariantDb
export function dbInitialize(): void
export function dbSetDatadir(path: string): void
export function dbSetVal(val: DbVal): void
export function extModulesLoad(): void
export function extModulesUnload(): void
export function iterInit(tmpl: IterTmpl): Iter
export function listFree(data: Pointer): void
export function tagConvertFromLocale(error?: Error | null): Tag
export function tagConvertFromLocaleString(locale: string, error?: Error | null): Tag
export interface CompareFunc {
    (v1: Pointer, v2: Pointer): number
}
export interface CopyFunc {
    (data: Pointer): Pointer
}
export interface DestroyFunc {
    (data: Pointer): void
}
export interface ExtModuleDataNewFunc {
    (): ExtModuleData
}
export interface ExtModuleGetFuncsFunc {
    (): ExtModuleFuncs
}
export interface ExtModuleGetTagFunc {
    (data: ExtModuleData): string
}
export interface ExtModuleParseFunc {
    (data: ExtModuleData, subtag: string, error?: Error | null): Bool
}
export interface ExtModulePrecheckFunc {
    (data: ExtModuleData, tag: Tag, error?: Error | null): Bool
}
export interface ExtModuleSingletonFunc {
    (): number
}
export interface ExtModuleValidateFunc {
    (data: ExtModuleData): Bool
}
export interface ExtModuleVersionFunc {
    (): number
}
export class DbVal {
    /* Fields of LangTag.DbVal */
    lang: LangDb
    extlang: ExtlangDb
    script: ScriptDb
    region: RegionDb
    variant: VariantDb
    grandfathered: GrandfatheredDb
    redundant: RedundantDb
    relation: RelationDb
    static name: string
}
export class Error {
    /* Methods of LangTag.Error */
    clear(): void
    isSet(type: ErrorType): Bool
    print(type: ErrorType): void
    ref(): Error
    unref(): void
    static name: string
    static new(): Error
    constructor()
    static new(): Error
}
export class ExtModule {
    /* Methods of LangTag.ExtModule */
    ref(): ExtModule
    unref(): void
    static name: string
}
export class ExtModuleData {
    /* Fields of LangTag.ExtModuleData */
    dummy: Pointer[]
    /* Methods of LangTag.ExtModuleData */
    ref(): ExtModuleData
    unref(): void
    static name: string
    static new(size: number, finalizer: DestroyFunc): ExtModuleData
    constructor(size: number, finalizer: DestroyFunc)
    static new(size: number, finalizer: DestroyFunc): ExtModuleData
}
export class ExtModuleFuncs {
    /* Fields of LangTag.ExtModuleFuncs */
    getSingleton: ExtModuleSingletonFunc
    createData: ExtModuleDataNewFunc
    precheckTag: ExtModulePrecheckFunc
    parseTag: ExtModuleParseFunc
    getTag: ExtModuleGetTagFunc
    validateTag: ExtModuleValidateFunc
    static name: string
}
export class Extension {
    /* Methods of LangTag.Extension */
    compare(v2: Extension): Bool
    dump(): void
    getCanonicalizedTag(): string
    getTag(): string
    ref(): Extension
    truncate(): Bool
    unref(): void
    static name: string
}
export class Extlang {
    /* Methods of LangTag.Extlang */
    compare(v2: Extlang): Bool
    dump(): void
    getMacroLanguage(): string
    getName(): string
    getPreferredTag(): string
    getPrefix(): string
    getTag(): string
    ref(): Extlang
    unref(): void
    static name: string
}
export class ExtlangDb {
    /* Methods of LangTag.ExtlangDb */
    lookup(subtag: string): Extlang
    ref(): ExtlangDb
    unref(): void
    static name: string
    static new(): ExtlangDb
    constructor()
    static new(): ExtlangDb
}
export class Grandfathered {
    /* Methods of LangTag.Grandfathered */
    compare(v2: Grandfathered): Bool
    dump(): void
    getBetterTag(): string
    getName(): string
    getPreferredTag(): string
    getTag(): string
    ref(): Grandfathered
    unref(): void
    static name: string
}
export class GrandfatheredDb {
    /* Methods of LangTag.GrandfatheredDb */
    lookup(tag: string): Grandfathered
    ref(): GrandfatheredDb
    unref(): void
    static name: string
    static new(): GrandfatheredDb
    constructor()
    static new(): GrandfatheredDb
}
export class Iter {
    /* Methods of LangTag.Iter */
    finish(): void
    next(key?: Pointer | null, val?: Pointer | null): Bool
    ref(): Iter
    unref(): void
    static name: string
    static init(tmpl: IterTmpl): Iter
}
export class IterTmpl {
    static name: string
}
export class Lang {
    /* Methods of LangTag.Lang */
    compare(v2: Lang): Bool
    dump(): void
    getBetterTag(): string
    getMacroLanguage(): string
    getName(): string
    getPreferredTag(): string
    getScope(): string
    getSuppressScript(): string
    getTag(): string
    ref(): Lang
    unref(): void
    static name: string
}
export class LangDb {
    /* Methods of LangTag.LangDb */
    lookup(subtag: string): Lang
    ref(): LangDb
    unref(): void
    static name: string
    static new(): LangDb
    constructor()
    static new(): LangDb
}
export class List {
    /* Methods of LangTag.List */
    append(data: Pointer, func: DestroyFunc): List
    delete(data: Pointer): List
    deleteLink(link: List): List
    find(data: Pointer): List
    findCustom(data: Pointer, func: CompareFunc): List
    first(): List
    last(): List
    length(): number
    next(): List
    pop(data: Pointer): List
    prepend(data: Pointer, func: DestroyFunc): List
    previous(): List
    ref(): List
    remove(data: Pointer): List
    sort(func: CompareFunc): List
    unref(): void
    value(): Pointer
    static name: string
    static new(): List
    constructor()
    static new(): List
    static free(data: Pointer): void
}
export class Redundant {
    /* Methods of LangTag.Redundant */
    compare(v2: Redundant): Bool
    dump(): void
    getBetterTag(): string
    getName(): string
    getPreferredTag(): string
    getTag(): string
    ref(): Redundant
    unref(): void
    static name: string
}
export class RedundantDb {
    /* Methods of LangTag.RedundantDb */
    lookup(tag: string): Redundant
    ref(): RedundantDb
    unref(): void
    static name: string
    static new(): RedundantDb
    constructor()
    static new(): RedundantDb
}
export class Region {
    /* Methods of LangTag.Region */
    compare(v2: Region): Bool
    dump(): void
    getBetterTag(): string
    getName(): string
    getPreferredTag(): string
    getTag(): string
    ref(): Region
    unref(): void
    static name: string
}
export class RegionDb {
    /* Methods of LangTag.RegionDb */
    lookup(languageOrCode: string): Region
    ref(): RegionDb
    unref(): void
    static name: string
    static new(): RegionDb
    constructor()
    static new(): RegionDb
}
export class RelationDb {
    /* Methods of LangTag.RelationDb */
    lookupLangFromScript(script: Script): List
    lookupScriptFromLang(lang: Lang): List
    ref(): RelationDb
    unref(): void
    static name: string
    static new(): RelationDb
    constructor()
    static new(): RelationDb
}
export class Script {
    /* Methods of LangTag.Script */
    compare(v2: Script): Bool
    convertToModifier(): string
    dump(): void
    getName(): string
    getTag(): string
    ref(): Script
    unref(): void
    static name: string
}
export class ScriptDb {
    /* Methods of LangTag.ScriptDb */
    lookup(subtag: string): Script
    ref(): ScriptDb
    unref(): void
    static name: string
    static new(): ScriptDb
    constructor()
    static new(): ScriptDb
}
export class String {
    /* Methods of LangTag.String */
    append(str: string): String
    appendC(c: number): String
    at(pos: number): number
    clear(): void
    free(freeSegment: Bool): string
    length(): number
    ref(): String
    replaceC(pos: number, c: number): String
    truncate(len: number): String
    unref(): void
    value(): string
    static name: string
    static new(string: string): String
    constructor(string: string)
    static new(string: string): String
}
export class Tag {
    /* Methods of LangTag.Tag */
    canonicalize(error?: Error | null): string
    canonicalizeInExtlangForm(error?: Error | null): string
    clear(): void
    compare(v2: Tag): Bool
    convertToLocale(error?: Error | null): string
    copy(): Tag
    dump(): void
    getExtension(): Extension
    getExtlang(): Extlang
    getGrandfathered(): Grandfathered
    getLanguage(): Lang
    getPrivateuse(): String
    getRegion(): Region
    getScript(): Script
    getString(): string
    getStringWithFilter(filter: number): string
    getVariants(): List
    lookup(pattern: string, error?: Error | null): string
    match(v2: string, error?: Error | null): Bool
    parse(tagString: string, error?: Error | null): Bool
    parseWithExtraToken(tagString: string, error?: Error | null): Bool
    ref(): Tag
    transform(error: Error): string
    truncate(error: Error): Bool
    unref(): void
    static name: string
    static new(): Tag
    constructor()
    static new(): Tag
    static convertFromLocale(error?: Error | null): Tag
    static convertFromLocaleString(locale: string, error?: Error | null): Tag
}
export class Variant {
    /* Methods of LangTag.Variant */
    compare(v2: Variant): Bool
    dump(): void
    getBetterTag(): string
    getName(): string
    getPreferredTag(): string
    getPrefix(): List
    getTag(): string
    ref(): Variant
    unref(): void
    static name: string
}
export class VariantDb {
    /* Methods of LangTag.VariantDb */
    lookup(subtag: string): Variant
    ref(): VariantDb
    unref(): void
    static name: string
    static new(): VariantDb
    constructor()
    static new(): VariantDb
}
type Bool = number
type Pointer = object
}