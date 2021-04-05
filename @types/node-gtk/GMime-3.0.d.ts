/**
 * GMime-3.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GMime {

export enum AddressType {
    SENDER,
    FROM,
    REPLY_TO,
    TO,
    CC,
    BCC,
}
export enum AutocryptPreferEncrypt {
    NONE,
    MUTUAL,
}
export enum CipherAlgo {
    DEFAULT,
    IDEA,
    /* 3DES (invalid, starts with a number) */
    CAST5,
    BLOWFISH,
    AES,
    AES192,
    AES256,
    TWOFISH,
    CAMELLIA128,
    CAMELLIA192,
    CAMELLIA256,
}
export enum ContentEncoding {
    DEFAULT,
    /* 7BIT (invalid, starts with a number) */
    /* 8BIT (invalid, starts with a number) */
    BINARY,
    BASE64,
    QUOTEDPRINTABLE,
    UUENCODE,
}
export enum DigestAlgo {
    DEFAULT,
    MD5,
    SHA1,
    RIPEMD160,
    MD2,
    TIGER192,
    HAVAL5160,
    SHA256,
    SHA384,
    SHA512,
    SHA224,
    MD4,
    CRC32,
    CRC32_RFC1510,
    CRC32_RFC2440,
}
export enum EncodingConstraint {
    /* 7BIT (invalid, starts with a number) */
    /* 8BIT (invalid, starts with a number) */
    BINARY,
}
export enum EncryptFlags {
    NONE,
    ALWAYS_TRUST,
    NO_COMPRESS,
    SYMMETRIC,
    THROW_KEYIDS,
}
export enum FilterFromMode {
    DEFAULT,
    ESCAPE,
    ARMOR,
}
export enum FilterGZipMode {
    ZIP,
    UNZIP,
}
export enum Format {
    MESSAGE,
    MBOX,
    MMDF,
}
export enum NewLineFormat {
    UNIX,
    DOS,
}
export enum OpenPGPData {
    NONE,
    ENCRYPTED,
    SIGNED,
    PUBLIC_KEY,
    PRIVATE_KEY,
}
export enum ParamEncodingMethod {
    DEFAULT,
    RFC2231,
    RFC2047,
}
export enum ParserWarning {
    WARN_DUPLICATED_HEADER,
    WARN_DUPLICATED_PARAMETER,
    WARN_UNENCODED_8BIT_HEADER,
    WARN_INVALID_CONTENT_TYPE,
    WARN_INVALID_RFC2047_HEADER_VALUE,
    WARN_MALFORMED_MULTIPART,
    WARN_TRUNCATED_MESSAGE,
    WARN_MALFORMED_MESSAGE,
    CRIT_INVALID_HEADER_NAME,
    CRIT_CONFLICTING_HEADER,
    CRIT_CONFLICTING_PARAMETER,
    CRIT_MULTIPART_WITHOUT_BOUNDARY,
    WARN_INVALID_PARAMETER,
    WARN_INVALID_ADDRESS_LIST,
    CRIT_NESTING_OVERFLOW,
}
export enum PubKeyAlgo {
    DEFAULT,
    RSA,
    RSA_E,
    RSA_S,
    ELG_E,
    DSA,
    ECC,
    ELG,
    ECDSA,
    ECDH,
    EDDSA,
}
export enum RfcComplianceMode {
    LOOSE,
    STRICT,
}
export enum SecureMimeType {
    COMPRESSED_DATA,
    ENVELOPED_DATA,
    SIGNED_DATA,
    CERTS_ONLY,
    UNKNOWN,
}
export enum SeekWhence {
    SET,
    CUR,
    END,
}
export enum SignatureStatus {
    VALID,
    GREEN,
    RED,
    KEY_REVOKED,
    KEY_EXPIRED,
    SIG_EXPIRED,
    KEY_MISSING,
    CRL_MISSING,
    CRL_TOO_OLD,
    BAD_POLICY,
    SYS_ERROR,
    TOFU_CONFLICT,
}
export enum StreamBufferMode {
    READ,
    WRITE,
}
export enum Trust {
    UNKNOWN,
    UNDEFINED,
    NEVER,
    MARGINAL,
    FULL,
    ULTIMATE,
}
export enum Validity {
    UNKNOWN,
    UNDEFINED,
    NEVER,
    MARGINAL,
    FULL,
    ULTIMATE,
}
export enum DecryptFlags {
    NONE,
    EXPORT_SESSION_KEY,
    NO_VERIFY,
    ENABLE_KEYSERVER_LOOKUPS,
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
export enum FilterBestFlags {
    CHARSET,
    ENCODING,
}
export enum OpenPGPState {
    NONE,
    BEGIN_PGP_MESSAGE,
    END_PGP_MESSAGE,
    BEGIN_PGP_SIGNED_MESSAGE,
    BEGIN_PGP_SIGNATURE,
    END_PGP_SIGNATURE,
    BEGIN_PGP_PUBLIC_KEY_BLOCK,
    END_PGP_PUBLIC_KEY_BLOCK,
    BEGIN_PGP_PRIVATE_KEY_BLOCK,
    END_PGP_PRIVATE_KEY_BLOCK,
}
export enum VerifyFlags {
    NONE,
    ENABLE_KEYSERVER_LOOKUPS,
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
export const BINARY_AGE: number
export const DISPOSITION_ATTACHMENT: string
export const DISPOSITION_INLINE: string
export const FILTER_ENRICHED_IS_RICHTEXT: number
export const FILTER_HTML_BLOCKQUOTE_CITATION: number
export const FILTER_HTML_CITE: number
export const FILTER_HTML_CONVERT_ADDRESSES: number
export const FILTER_HTML_CONVERT_NL: number
export const FILTER_HTML_CONVERT_SPACES: number
export const FILTER_HTML_CONVERT_URLS: number
export const FILTER_HTML_ESCAPE_8BIT: number
export const FILTER_HTML_MARK_CITATION: number
export const FILTER_HTML_PRE: number
export const INTERFACE_AGE: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const SIGNATURE_STATUS_ERROR_MASK: number
export const UUDECODE_STATE_BEGIN: number
export const UUDECODE_STATE_END: number
export const UUDECODE_STATE_INIT: number
export const UUDECODE_STATE_MASK: number
export const YDECODE_STATE_BEGIN: number
export const YDECODE_STATE_DECODE: number
export const YDECODE_STATE_END: number
export const YDECODE_STATE_EOLN: number
export const YDECODE_STATE_ESCAPE: number
export const YDECODE_STATE_INIT: number
export const YDECODE_STATE_PART: number
export const YENCODE_CRC_INIT: number
export const YENCODE_STATE_INIT: number
export function charsetBest(inbuf: string, inlen: number): string | null
export function charsetCanonName(charset: string): string
export function charsetIconvName(charset: string): string
export function charsetIsoToWindows(isocharset: string): string
export function charsetLanguage(charset: string): string | null
export function charsetLocaleName(): string
export function charsetMapInit(): void
export function charsetMapShutdown(): void
export function charsetName(charset: string): string
export function checkVersion(major: number, minor: number, micro: number): boolean
export function contentEncodingFromString(str: string): ContentEncoding
export function contentEncodingToString(encoding: ContentEncoding): string
export function encodingBase64DecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingBase64EncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingBase64EncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingQuotedDecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingQuotedEncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingQuotedEncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingUudecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encodingUuencodeClose(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
export function encodingUuencodeStep(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
export function formatOptionsGetDefault(): FormatOptions
export function iconvLocaleToUtf8(str: string): string
export function iconvLocaleToUtf8Length(str: string, n: number): string
export function iconvUtf8ToLocale(str: string): string
export function iconvUtf8ToLocaleLength(str: string, n: number): string
export function init(): void
export function localeCharset(): string
export function localeLanguage(): string | null
export function parserOptionsGetDefault(): ParserOptions
export function referencesParse(options: ParserOptions | null, text: string): References
export function shutdown(): void
export function utilsBestEncoding(text: any): ContentEncoding
export function utilsDecode8bit(options: ParserOptions | null, text: any): string
export function utilsDecodeMessageId(messageId: string): string
export function utilsGenerateMessageId(fqdn: string): string
export function utilsHeaderDecodeDate(str: string): GLib.DateTime | null
export function utilsHeaderDecodePhrase(options: ParserOptions | null, phrase: string): string
export function utilsHeaderDecodeText(options: ParserOptions | null, text: string): string
export function utilsHeaderEncodePhrase(options: FormatOptions | null, phrase: string, charset?: string | null): string
export function utilsHeaderEncodeText(options: FormatOptions | null, text: string, charset?: string | null): string
export function utilsHeaderFormatDate(date: GLib.DateTime): string
export function utilsHeaderUnfold(value: string): string
export function utilsQuoteString(str: string): string
export function utilsStructuredHeaderFold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
export function utilsTextIs8bit(text: any): boolean
export function utilsUnquoteString(str: string): void
export function utilsUnstructuredHeaderFold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
export function ydecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
export function yencodeClose(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
export function yencodeStep(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
export interface HeaderRawValueFormatter {
    (header: Header, options: FormatOptions, value: string, charset: string): string
}
export interface ObjectForeachFunc {
    (parent: Object, part: Object): void
}
export interface ParserHeaderRegexFunc {
    (parser: Parser, header: string, value: string, offset: number): void
}
export interface ParserWarningFunc {
    (offset: number, errcode: ParserWarning, item: string): void
}
export interface PasswordRequestFunc {
    (ctx: CryptoContext, userId: string, prompt: string, reprompt: boolean, response: Stream): boolean
}
export interface ApplicationPkcs7Mime_ConstructProps extends Part_ConstructProps {
}
export class ApplicationPkcs7Mime {
    /* Fields of GMime.ApplicationPkcs7Mime */
    parentObject: Part
    smimeType: SecureMimeType
    /* Fields of GMime.Part */
    encoding: ContentEncoding
    openpgp: OpenPGPData
    contentDescription: string
    contentLocation: string
    contentMd5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.ApplicationPkcs7Mime */
    decrypt(flags: DecryptFlags, sessionKey: string, result: DecryptResult): Object | null
    getSmimeType(): SecureMimeType
    verify(flags: VerifyFlags): [ /* returnType */ SignatureList | null, /* entity */ Object ]
    /* Methods of GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfuncSetContent?(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPkcs7Mime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationPkcs7Mime, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ApplicationPkcs7Mime_ConstructProps)
    _init (config?: ApplicationPkcs7Mime_ConstructProps): void
    static new(type: SecureMimeType): ApplicationPkcs7Mime
    static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null
    static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null
    static $gtype: GObject.Type
}
export interface AutocryptHeader_ConstructProps extends GObject.Object_ConstructProps {
}
export class AutocryptHeader {
    /* Fields of GMime.AutocryptHeader */
    parentObject: GObject.Object
    address: InternetAddressMailbox
    preferEncrypt: AutocryptPreferEncrypt
    keydata: any
    effectiveDate: GLib.DateTime
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.AutocryptHeader */
    clone(src: AutocryptHeader): void
    compare(ah2: AutocryptHeader): number
    getAddress(): InternetAddressMailbox
    getAddressAsString(): string
    getEffectiveDate(): GLib.DateTime
    getKeydata(): any
    getPreferEncrypt(): AutocryptPreferEncrypt
    isComplete(): boolean
    setAddress(address: InternetAddressMailbox): void
    setAddressFromString(address: string): void
    setEffectiveDate(effectiveDate: GLib.DateTime): void
    setKeydata(data: any): void
    setPreferEncrypt(pref: AutocryptPreferEncrypt): void
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
    connect(sigName: "notify", callback: (($obj: AutocryptHeader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutocryptHeader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AutocryptHeader_ConstructProps)
    _init (config?: AutocryptHeader_ConstructProps): void
    static new(): AutocryptHeader
    static newFromString(string: string): AutocryptHeader
    static $gtype: GObject.Type
}
export interface AutocryptHeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
export class AutocryptHeaderList {
    /* Fields of GMime.AutocryptHeaderList */
    parentObject: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.AutocryptHeaderList */
    add(header: AutocryptHeader): void
    addMissingAddresses(addresses: InternetAddressList): number
    getCount(): number
    getHeaderAt(index: number): AutocryptHeader
    getHeaderForAddress(mailbox: InternetAddressMailbox): AutocryptHeader
    removeIncomplete(): void
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
    connect(sigName: "notify", callback: (($obj: AutocryptHeaderList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutocryptHeaderList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AutocryptHeaderList_ConstructProps)
    _init (config?: AutocryptHeaderList_ConstructProps): void
    static new(): AutocryptHeaderList
    static $gtype: GObject.Type
}
export interface Certificate_ConstructProps extends GObject.Object_ConstructProps {
}
export class Certificate {
    /* Fields of GMime.Certificate */
    parentObject: GObject.Object
    pubkeyAlgo: PubKeyAlgo
    digestAlgo: DigestAlgo
    trust: Trust
    issuerSerial: string
    issuerName: string
    fingerprint: string
    created: number
    expires: number
    keyid: string
    email: string
    name: string
    userId: string
    idValidity: Validity
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Certificate */
    getCreated(): number
    getCreated64(): number
    getDigestAlgo(): DigestAlgo
    getEmail(): string
    getExpires(): number
    getExpires64(): number
    getFingerprint(): string
    getIdValidity(): Validity
    getIssuerName(): string
    getIssuerSerial(): string
    getKeyId(): string
    getName(): string
    getPubkeyAlgo(): PubKeyAlgo
    getTrust(): Trust
    getUserId(): string
    setCreated(created: number): void
    setDigestAlgo(algo: DigestAlgo): void
    setEmail(email: string): void
    setExpires(expires: number): void
    setFingerprint(fingerprint: string): void
    setIdValidity(validity: Validity): void
    setIssuerName(issuerName: string): void
    setIssuerSerial(issuerSerial: string): void
    setKeyId(keyId: string): void
    setName(name: string): void
    setPubkeyAlgo(algo: PubKeyAlgo): void
    setTrust(trust: Trust): void
    setUserId(userId: string): void
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
    connect(sigName: "notify", callback: (($obj: Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Certificate, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Certificate_ConstructProps)
    _init (config?: Certificate_ConstructProps): void
    static new(): Certificate
    static $gtype: GObject.Type
}
export interface CertificateList_ConstructProps extends GObject.Object_ConstructProps {
}
export class CertificateList {
    /* Fields of GMime.CertificateList */
    parentObject: GObject.Object
    array: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.CertificateList */
    add(cert: Certificate): number
    clear(): void
    contains(cert: Certificate): boolean
    getCertificate(index: number): Certificate
    indexOf(cert: Certificate): number
    insert(index: number, cert: Certificate): void
    length(): number
    remove(cert: Certificate): boolean
    removeAt(index: number): boolean
    setCertificate(index: number, cert: Certificate): void
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
    connect(sigName: "notify", callback: (($obj: CertificateList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CertificateList_ConstructProps)
    _init (config?: CertificateList_ConstructProps): void
    static new(): CertificateList
    static $gtype: GObject.Type
}
export interface ContentDisposition_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentDisposition {
    /* Fields of GMime.ContentDisposition */
    parentObject: GObject.Object
    disposition: string
    params: ParamList
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.ContentDisposition */
    encode(options?: FormatOptions | null): string
    getDisposition(): string
    getParameter(name: string): string
    getParameters(): ParamList
    isAttachment(): boolean
    setDisposition(value: string): void
    setParameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentDisposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDisposition, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ContentDisposition_ConstructProps)
    _init (config?: ContentDisposition_ConstructProps): void
    static new(): ContentDisposition
    static parse(options: ParserOptions | null, str: string): ContentDisposition
    static $gtype: GObject.Type
}
export interface ContentType_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentType {
    /* Fields of GMime.ContentType */
    parentObject: GObject.Object
    type: string
    subtype: string
    params: ParamList
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.ContentType */
    encode(options?: FormatOptions | null): string
    getMediaSubtype(): string
    getMediaType(): string
    getMimeType(): string
    getParameter(name: string): string
    getParameters(): ParamList
    isType(type: string, subtype: string): boolean
    setMediaSubtype(subtype: string): void
    setMediaType(type: string): void
    setParameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentType, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ContentType_ConstructProps)
    _init (config?: ContentType_ConstructProps): void
    static new(type: string, subtype: string): ContentType
    static parse(options: ParserOptions | null, str: string): ContentType
    static $gtype: GObject.Type
}
export interface CryptoContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class CryptoContext {
    /* Fields of GMime.CryptoContext */
    parentObject: GObject.Object
    requestPasswd: PasswordRequestFunc
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.CryptoContext */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    digestId(name: string): DigestAlgo
    digestName(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    exportKeys(keys: string, ostream: Stream): number
    getEncryptionProtocol(): string | null
    getKeyExchangeProtocol(): string | null
    getSignatureProtocol(): string | null
    importKeys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime.CryptoContext */
    vfuncDecrypt?(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfuncDigestId?(name: string): DigestAlgo
    vfuncDigestName?(digest: DigestAlgo): string | null
    vfuncEncrypt?(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfuncExportKeys?(keys: string, ostream: Stream): number
    vfuncGetEncryptionProtocol?(): string | null
    vfuncGetKeyExchangeProtocol?(): string | null
    vfuncGetSignatureProtocol?(): string | null
    vfuncImportKeys?(istream: Stream): number
    vfuncSign?(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfuncVerify?(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CryptoContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CryptoContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CryptoContext_ConstructProps)
    _init (config?: CryptoContext_ConstructProps): void
    static new(protocol: string): CryptoContext | null
    static $gtype: GObject.Type
}
export interface DataWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataWrapper {
    /* Fields of GMime.DataWrapper */
    parentObject: GObject.Object
    encoding: ContentEncoding
    stream: Stream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.DataWrapper */
    getEncoding(): ContentEncoding
    getStream(): Stream
    setEncoding(encoding: ContentEncoding): void
    setStream(stream: Stream): void
    writeToStream(stream: Stream): number
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
    /* Virtual methods of GMime.DataWrapper */
    vfuncWriteToStream?(stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataWrapper, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DataWrapper_ConstructProps)
    _init (config?: DataWrapper_ConstructProps): void
    static new(): DataWrapper
    static newWithStream(stream: Stream, encoding: ContentEncoding): DataWrapper
    static $gtype: GObject.Type
}
export interface DecryptResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class DecryptResult {
    /* Fields of GMime.DecryptResult */
    parentObject: GObject.Object
    recipients: CertificateList
    signatures: SignatureList
    cipher: CipherAlgo
    mdc: DigestAlgo
    sessionKey: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.DecryptResult */
    getCipher(): CipherAlgo
    getMdc(): DigestAlgo
    getRecipients(): CertificateList
    getSessionKey(): string | null
    getSignatures(): SignatureList | null
    setCipher(cipher: CipherAlgo): void
    setMdc(mdc: DigestAlgo): void
    setRecipients(recipients: CertificateList): void
    setSessionKey(sessionKey?: string | null): void
    setSignatures(signatures: SignatureList): void
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
    connect(sigName: "notify", callback: (($obj: DecryptResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecryptResult, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DecryptResult_ConstructProps)
    _init (config?: DecryptResult_ConstructProps): void
    static new(): DecryptResult
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}
export class Filter {
    /* Fields of GMime.Filter */
    parentObject: GObject.Object
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilterBasic_ConstructProps extends Filter_ConstructProps {
}
export class FilterBasic {
    /* Fields of GMime.FilterBasic */
    parentObject: Filter
    encoder: Encoding
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterBasic, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterBasic_ConstructProps)
    _init (config?: FilterBasic_ConstructProps): void
    static new(encoding: ContentEncoding, encode: boolean): FilterBasic
    static $gtype: GObject.Type
}
export interface FilterBest_ConstructProps extends Filter_ConstructProps {
}
export class FilterBest {
    /* Fields of GMime.FilterBest */
    parentObject: Filter
    flags: FilterBestFlags
    charset: Charset
    count0: number
    count8: number
    total: number
    maxline: number
    linelen: number
    frombuf: any
    fromlen: number
    hadfrom: number
    startline: number
    midline: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.FilterBest */
    encoding(constraint: EncodingConstraint): ContentEncoding
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterBest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterBest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterBest_ConstructProps)
    _init (config?: FilterBest_ConstructProps): void
    static new(flags: FilterBestFlags): FilterBest
    static $gtype: GObject.Type
}
export interface FilterCharset_ConstructProps extends Filter_ConstructProps {
}
export class FilterCharset {
    /* Fields of GMime.FilterCharset */
    parentObject: Filter
    fromCharset: string
    toCharset: string
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterCharset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterCharset, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterCharset_ConstructProps)
    _init (config?: FilterCharset_ConstructProps): void
    static new(fromCharset: string, toCharset: string): FilterCharset
    static $gtype: GObject.Type
}
export interface FilterChecksum_ConstructProps extends Filter_ConstructProps {
}
export class FilterChecksum {
    /* Fields of GMime.FilterChecksum */
    parentObject: Filter
    checksum: GLib.Checksum
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.FilterChecksum */
    getDigest(digest: number, len: number): number
    getString(): string
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterChecksum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterChecksum, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterChecksum_ConstructProps)
    _init (config?: FilterChecksum_ConstructProps): void
    static new(type: GLib.ChecksumType): FilterChecksum
    static $gtype: GObject.Type
}
export interface FilterDos2Unix_ConstructProps extends Filter_ConstructProps {
}
export class FilterDos2Unix {
    /* Fields of GMime.FilterDos2Unix */
    parentObject: Filter
    ensureNewline: boolean
    pc: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterDos2Unix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterDos2Unix, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterDos2Unix_ConstructProps)
    _init (config?: FilterDos2Unix_ConstructProps): void
    static new(ensureNewline: boolean): FilterDos2Unix
    static $gtype: GObject.Type
}
export interface FilterEnriched_ConstructProps extends Filter_ConstructProps {
}
export class FilterEnriched {
    /* Fields of GMime.FilterEnriched */
    parentObject: Filter
    flags: number
    nofill: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterEnriched, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterEnriched, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterEnriched_ConstructProps)
    _init (config?: FilterEnriched_ConstructProps): void
    static new(flags: number): FilterEnriched
    static $gtype: GObject.Type
}
export interface FilterFrom_ConstructProps extends Filter_ConstructProps {
}
export class FilterFrom {
    /* Fields of GMime.FilterFrom */
    parentObject: Filter
    mode: FilterFromMode
    midline: boolean
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterFrom, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterFrom_ConstructProps)
    _init (config?: FilterFrom_ConstructProps): void
    static new(mode: FilterFromMode): FilterFrom
    static $gtype: GObject.Type
}
export interface FilterGZip_ConstructProps extends Filter_ConstructProps {
}
export class FilterGZip {
    /* Fields of GMime.FilterGZip */
    parentObject: Filter
    priv: object
    mode: FilterGZipMode
    level: number
    /* Fields of GMime.Filter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.FilterGZip */
    getComment(): string
    getFilename(): string
    setComment(comment: string): void
    setFilename(filename: string): void
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterGZip, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterGZip_ConstructProps)
    _init (config?: FilterGZip_ConstructProps): void
    static new(mode: FilterGZipMode, level: number): FilterGZip
    static $gtype: GObject.Type
}
export interface FilterHTML_ConstructProps extends Filter_ConstructProps {
}
export class FilterHTML {
    /* Fields of GMime.FilterHTML */
    parentObject: Filter
    scanner: object
    flags: number
    colour: number
    column: number
    preOpen: number
    citationDepth: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterHTML, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterHTML_ConstructProps)
    _init (config?: FilterHTML_ConstructProps): void
    static new(flags: number, colour: number): FilterHTML
    static $gtype: GObject.Type
}
export interface FilterOpenPGP_ConstructProps extends Filter_ConstructProps {
}
export class FilterOpenPGP {
    /* Fields of GMime.FilterOpenPGP */
    parentObject: Filter
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.FilterOpenPGP */
    getBeginOffset(): number
    getDataType(): OpenPGPData
    getEndOffset(): number
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOpenPGP, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterOpenPGP_ConstructProps)
    _init (config?: FilterOpenPGP_ConstructProps): void
    static new(): FilterOpenPGP
    static $gtype: GObject.Type
}
export interface FilterSmtpData_ConstructProps extends Filter_ConstructProps {
}
export class FilterSmtpData {
    /* Fields of GMime.FilterSmtpData */
    parentObject: Filter
    bol: boolean
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterSmtpData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterSmtpData, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterSmtpData_ConstructProps)
    _init (config?: FilterSmtpData_ConstructProps): void
    static new(): FilterSmtpData
    static $gtype: GObject.Type
}
export interface FilterStrip_ConstructProps extends Filter_ConstructProps {
}
export class FilterStrip {
    /* Fields of GMime.FilterStrip */
    parentObject: Filter
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterStrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterStrip, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterStrip_ConstructProps)
    _init (config?: FilterStrip_ConstructProps): void
    static new(): FilterStrip
    static $gtype: GObject.Type
}
export interface FilterUnix2Dos_ConstructProps extends Filter_ConstructProps {
}
export class FilterUnix2Dos {
    /* Fields of GMime.FilterUnix2Dos */
    parentObject: Filter
    ensureNewline: boolean
    pc: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterUnix2Dos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterUnix2Dos, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterUnix2Dos_ConstructProps)
    _init (config?: FilterUnix2Dos_ConstructProps): void
    static new(ensureNewline: boolean): FilterUnix2Dos
    static $gtype: GObject.Type
}
export interface FilterWindows_ConstructProps extends Filter_ConstructProps {
}
export class FilterWindows {
    /* Fields of GMime.FilterWindows */
    parentObject: Filter
    isWindows: boolean
    claimedCharset: string
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.FilterWindows */
    isWindowsCharset(): boolean
    realCharset(): string
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterWindows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterWindows, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterWindows_ConstructProps)
    _init (config?: FilterWindows_ConstructProps): void
    static new(claimedCharset: string): FilterWindows
    static $gtype: GObject.Type
}
export interface FilterYenc_ConstructProps extends Filter_ConstructProps {
}
export class FilterYenc {
    /* Fields of GMime.FilterYenc */
    parentObject: Filter
    encode: boolean
    part: number
    state: number
    pcrc: number
    crc: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.FilterYenc */
    getCrc(): number
    getPcrc(): number
    setCrc(crc: number): void
    setState(state: number): void
    /* Methods of GMime.Filter */
    backup(data: any): void
    complete(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfuncComplete?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncCopy?(): Filter
    vfuncFilter?(inbuf: any, prespace: number): [ /* outbuf */ any, /* outprespace */ number ]
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterYenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterYenc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterYenc_ConstructProps)
    _init (config?: FilterYenc_ConstructProps): void
    static new(encode: boolean): FilterYenc
    static $gtype: GObject.Type
}
export interface GpgContext_ConstructProps extends CryptoContext_ConstructProps {
}
export class GpgContext {
    /* Fields of GMime.CryptoContext */
    parentObject: GObject.Object
    requestPasswd: PasswordRequestFunc
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.CryptoContext */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    digestId(name: string): DigestAlgo
    digestName(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    exportKeys(keys: string, ostream: Stream): number
    getEncryptionProtocol(): string | null
    getKeyExchangeProtocol(): string | null
    getSignatureProtocol(): string | null
    importKeys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime.CryptoContext */
    vfuncDecrypt?(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfuncDigestId?(name: string): DigestAlgo
    vfuncDigestName?(digest: DigestAlgo): string | null
    vfuncEncrypt?(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfuncExportKeys?(keys: string, ostream: Stream): number
    vfuncGetEncryptionProtocol?(): string | null
    vfuncGetKeyExchangeProtocol?(): string | null
    vfuncGetSignatureProtocol?(): string | null
    vfuncImportKeys?(istream: Stream): number
    vfuncSign?(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfuncVerify?(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GpgContext_ConstructProps)
    _init (config?: GpgContext_ConstructProps): void
    static new(): GpgContext
    static $gtype: GObject.Type
}
export interface Header_ConstructProps extends GObject.Object_ConstructProps {
}
export class Header {
    /* Fields of GMime.Header */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Header */
    formatAddrlist(options: FormatOptions | null, value: string, charset: string): string
    formatContentDisposition(options: FormatOptions | null, value: string, charset: string): string
    formatContentType(options: FormatOptions | null, value: string, charset: string): string
    formatDefault(options: FormatOptions | null, value: string, charset: string): string
    formatMessageId(options: FormatOptions | null, value: string, charset: string): string
    formatReceived(options: FormatOptions | null, value: string, charset: string): string
    formatReferences(options: FormatOptions | null, value: string, charset: string): string
    getName(): string
    getOffset(): number
    getRawName(): string
    getRawValue(): string
    getValue(): string
    setRawValue(rawValue: string): void
    setValue(options: FormatOptions | null, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    connect(sigName: "notify", callback: (($obj: Header, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Header, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Header_ConstructProps)
    _init (config?: Header_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
export class HeaderList {
    /* Fields of GMime.HeaderList */
    parentObject: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.HeaderList */
    append(name: string, value: string, charset: string): void
    clear(): void
    contains(name: string): boolean
    getCount(): number
    getHeader(name: string): Header
    getHeaderAt(index: number): Header
    prepend(name: string, value: string, charset: string): void
    remove(name: string): boolean
    removeAt(index: number): void
    set(name: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    connect(sigName: "notify", callback: (($obj: HeaderList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HeaderList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HeaderList_ConstructProps)
    _init (config?: HeaderList_ConstructProps): void
    static new(options?: ParserOptions | null): HeaderList
    static $gtype: GObject.Type
}
export interface InternetAddress_ConstructProps extends GObject.Object_ConstructProps {
}
export class InternetAddress {
    /* Fields of GMime.InternetAddress */
    parentObject: GObject.Object
    charset: string
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.InternetAddress */
    getCharset(): string | null
    getName(): string | null
    setCharset(charset?: string | null): void
    setName(name: string): void
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
    /* Virtual methods of GMime.InternetAddress */
    vfuncToString?(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddress, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InternetAddress_ConstructProps)
    _init (config?: InternetAddress_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InternetAddressGroup_ConstructProps extends InternetAddress_ConstructProps {
}
export class InternetAddressGroup {
    /* Fields of GMime.InternetAddressGroup */
    parentObject: InternetAddress
    members: InternetAddressList
    /* Fields of GMime.InternetAddress */
    charset: string
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.InternetAddressGroup */
    addMember(member: InternetAddress): number
    getMembers(): InternetAddressList
    setMembers(members: InternetAddressList): void
    /* Methods of GMime.InternetAddress */
    getCharset(): string | null
    getName(): string | null
    setCharset(charset?: string | null): void
    setName(name: string): void
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
    /* Virtual methods of GMime.InternetAddress */
    vfuncToString?(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddressGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressGroup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InternetAddressGroup_ConstructProps)
    _init (config?: InternetAddressGroup_ConstructProps): void
    static new(name: string): InternetAddressGroup
    static $gtype: GObject.Type
}
export interface InternetAddressList_ConstructProps extends GObject.Object_ConstructProps {
}
export class InternetAddressList {
    /* Fields of GMime.InternetAddressList */
    parentObject: GObject.Object
    array: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.InternetAddressList */
    add(ia: InternetAddress): number
    append(append: InternetAddressList): void
    clear(): void
    contains(ia: InternetAddress): boolean
    encode(options: FormatOptions | null, str: GLib.String): void
    getAddress(index: number): InternetAddress
    indexOf(ia: InternetAddress): number
    insert(index: number, ia: InternetAddress): void
    length(): number
    prepend(prepend: InternetAddressList): void
    remove(ia: InternetAddress): boolean
    removeAt(index: number): boolean
    setAddress(index: number, ia: InternetAddress): void
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
    connect(sigName: "notify", callback: (($obj: InternetAddressList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InternetAddressList_ConstructProps)
    _init (config?: InternetAddressList_ConstructProps): void
    static new(): InternetAddressList
    static parse(options: ParserOptions | null, str: string): InternetAddressList | null
    static $gtype: GObject.Type
}
export interface InternetAddressMailbox_ConstructProps extends InternetAddress_ConstructProps {
}
export class InternetAddressMailbox {
    /* Fields of GMime.InternetAddressMailbox */
    parentObject: InternetAddress
    idnAddr: string
    addr: string
    at: number
    /* Fields of GMime.InternetAddress */
    charset: string
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.InternetAddressMailbox */
    getAddr(): string
    getIdnAddr(): string
    setAddr(addr: string): void
    /* Methods of GMime.InternetAddress */
    getCharset(): string | null
    getName(): string | null
    setCharset(charset?: string | null): void
    setName(name: string): void
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
    /* Virtual methods of GMime.InternetAddress */
    vfuncToString?(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddressMailbox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressMailbox, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InternetAddressMailbox_ConstructProps)
    _init (config?: InternetAddressMailbox_ConstructProps): void
    static new(name: string, addr: string): InternetAddressMailbox
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends Object_ConstructProps {
}
export class Message {
    /* Fields of GMime.Message */
    parentObject: Object
    addrlists: InternetAddressList
    mimePart: Object
    messageId: string
    date: GLib.DateTime
    subject: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Message */
    addMailbox(type: AddressType, name: string, addr: string): void
    foreach(callback: ObjectForeachFunc): void
    getAddresses(type: AddressType): InternetAddressList
    getAllRecipients(): InternetAddressList
    getAutocryptGossipHeaders(now: GLib.DateTime, flags: DecryptFlags, sessionKey: string): AutocryptHeaderList
    getAutocryptGossipHeadersFromInnerPart(now: GLib.DateTime, innerPart: Object): AutocryptHeaderList
    getAutocryptHeader(now: GLib.DateTime): AutocryptHeader
    getBcc(): InternetAddressList
    getBody(): Object
    getCc(): InternetAddressList
    getDate(): GLib.DateTime
    getFrom(): InternetAddressList
    getMessageId(): string
    getMimePart(): Object
    getReplyTo(): InternetAddressList
    getSender(): InternetAddressList
    getSubject(): string
    getTo(): InternetAddressList
    partialSplitMessage(maxSize: number): [ /* returnType */ Message | null, /* nparts */ number ]
    setDate(date: GLib.DateTime): void
    setMessageId(messageId: string): void
    setMimePart(mimePart: Object): void
    setSubject(subject: string, charset: string): void
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
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
    static new(prettyHeaders: boolean): Message
    static $gtype: GObject.Type
}
export interface MessagePart_ConstructProps extends Object_ConstructProps {
}
export class MessagePart {
    /* Fields of GMime.MessagePart */
    parentObject: Object
    message: Message
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.MessagePart */
    getMessage(): Message
    setMessage(message: Message): void
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessagePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessagePart, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MessagePart_ConstructProps)
    _init (config?: MessagePart_ConstructProps): void
    static new(subtype: string): MessagePart
    static newWithMessage(subtype: string, message: Message): MessagePart
    static $gtype: GObject.Type
}
export interface MessagePartial_ConstructProps extends Part_ConstructProps {
}
export class MessagePartial {
    /* Fields of GMime.MessagePartial */
    parentObject: Part
    number: number
    total: number
    id: string
    /* Fields of GMime.Part */
    encoding: ContentEncoding
    openpgp: OpenPGPData
    contentDescription: string
    contentLocation: string
    contentMd5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.MessagePartial */
    getId(): string
    getNumber(): number
    getTotal(): number
    /* Methods of GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfuncSetContent?(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessagePartial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessagePartial, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MessagePartial_ConstructProps)
    _init (config?: MessagePartial_ConstructProps): void
    static new(id: string, number: number, total: number): MessagePartial
    static reconstructMessage(partials: MessagePartial, num: number): Message
    static $gtype: GObject.Type
}
export interface Multipart_ConstructProps extends Object_ConstructProps {
}
export class Multipart {
    /* Fields of GMime.Multipart */
    parentObject: Object
    children: object[]
    boundary: string
    prologue: string
    epilogue: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    getBoundary(): string
    getCount(): number
    getEpilogue(): string
    getPart(index: number): Object
    getPrologue(): string
    getSubpartFromContentId(contentId: string): Object
    indexOf(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    removeAt(index: number): Object
    replace(index: number, replacement: Object): Object
    setBoundary(boundary: string): void
    setEpilogue(epilogue: string): void
    setPrologue(prologue: string): void
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Multipart */
    vfuncAdd?(part: Object): void
    vfuncClear?(): void
    vfuncContains?(part: Object): boolean
    vfuncGetBoundary?(): string
    vfuncGetCount?(): number
    vfuncGetPart?(index: number): Object
    vfuncIndexOf?(part: Object): number
    vfuncInsert?(index: number, part: Object): void
    vfuncRemove?(part: Object): boolean
    vfuncRemoveAt?(index: number): Object
    vfuncSetBoundary?(boundary: string): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Multipart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Multipart, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Multipart_ConstructProps)
    _init (config?: Multipart_ConstructProps): void
    static new(): Multipart
    static newWithSubtype(subtype: string): Multipart
    static $gtype: GObject.Type
}
export interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}
export class MultipartEncrypted {
    /* Fields of GMime.MultipartEncrypted */
    parentObject: Multipart
    /* Fields of GMime.Multipart */
    children: object[]
    boundary: string
    prologue: string
    epilogue: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.MultipartEncrypted */
    decrypt(flags: DecryptFlags, sessionKey: string): [ /* returnType */ Object | null, /* result */ DecryptResult ]
    /* Methods of GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    getBoundary(): string
    getCount(): number
    getEpilogue(): string
    getPart(index: number): Object
    getPrologue(): string
    getSubpartFromContentId(contentId: string): Object
    indexOf(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    removeAt(index: number): Object
    replace(index: number, replacement: Object): Object
    setBoundary(boundary: string): void
    setEpilogue(epilogue: string): void
    setPrologue(prologue: string): void
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Multipart */
    vfuncAdd?(part: Object): void
    vfuncClear?(): void
    vfuncContains?(part: Object): boolean
    vfuncGetBoundary?(): string
    vfuncGetCount?(): number
    vfuncGetPart?(index: number): Object
    vfuncIndexOf?(part: Object): number
    vfuncInsert?(index: number, part: Object): void
    vfuncRemove?(part: Object): boolean
    vfuncRemoveAt?(index: number): Object
    vfuncSetBoundary?(boundary: string): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartEncrypted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartEncrypted, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MultipartEncrypted_ConstructProps)
    _init (config?: MultipartEncrypted_ConstructProps): void
    static new(): MultipartEncrypted
    static encrypt(ctx: CryptoContext, entity: Object, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): MultipartEncrypted | null
    static $gtype: GObject.Type
}
export interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}
export class MultipartSigned {
    /* Fields of GMime.MultipartSigned */
    parentObject: Multipart
    /* Fields of GMime.Multipart */
    children: object[]
    boundary: string
    prologue: string
    epilogue: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.MultipartSigned */
    verify(flags: VerifyFlags): SignatureList | null
    /* Methods of GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    getBoundary(): string
    getCount(): number
    getEpilogue(): string
    getPart(index: number): Object
    getPrologue(): string
    getSubpartFromContentId(contentId: string): Object
    indexOf(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    removeAt(index: number): Object
    replace(index: number, replacement: Object): Object
    setBoundary(boundary: string): void
    setEpilogue(epilogue: string): void
    setPrologue(prologue: string): void
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Multipart */
    vfuncAdd?(part: Object): void
    vfuncClear?(): void
    vfuncContains?(part: Object): boolean
    vfuncGetBoundary?(): string
    vfuncGetCount?(): number
    vfuncGetPart?(index: number): Object
    vfuncIndexOf?(part: Object): number
    vfuncInsert?(index: number, part: Object): void
    vfuncRemove?(part: Object): boolean
    vfuncRemoveAt?(index: number): Object
    vfuncSetBoundary?(boundary: string): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartSigned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartSigned, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MultipartSigned_ConstructProps)
    _init (config?: MultipartSigned_ConstructProps): void
    static new(): MultipartSigned
    static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
export class Object {
    /* Fields of GMime.Object */
    parentObject: GObject.Object
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static new(options: ParserOptions | null, contentType: ContentType): Object
    static newType(options: ParserOptions | null, type: string, subtype: string): Object
    static registerType(type: string, subtype: string, objectType: GObject.Type): void
    static typeRegistryInit(): void
    static typeRegistryShutdown(): void
    static $gtype: GObject.Type
}
export interface Param_ConstructProps extends GObject.Object_ConstructProps {
}
export class Param {
    /* Fields of GMime.Param */
    parentObject: GObject.Object
    method: ParamEncodingMethod
    charset: string
    lang: string
    name: string
    value: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Param */
    getCharset(): string
    getEncodingMethod(): ParamEncodingMethod
    getLang(): string
    getName(): string
    getValue(): string
    setCharset(charset: string): void
    setEncodingMethod(method: ParamEncodingMethod): void
    setLang(lang: string): void
    setValue(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Param, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Param, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Param_ConstructProps)
    _init (config?: Param_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ParamList_ConstructProps extends GObject.Object_ConstructProps {
}
export class ParamList {
    /* Fields of GMime.ParamList */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.ParamList */
    clear(): void
    encode(options: FormatOptions, fold: boolean, str: GLib.String): void
    getParameter(name: string): Param
    getParameterAt(index: number): Param
    length(): number
    remove(name: string): boolean
    removeAt(index: number): boolean
    setParameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ParamList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ParamList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ParamList_ConstructProps)
    _init (config?: ParamList_ConstructProps): void
    static new(): ParamList
    static parse(options: ParserOptions, str: string): ParamList
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
export class Parser {
    /* Fields of GMime.Parser */
    parentObject: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Parser */
    constructMessage(options?: ParserOptions | null): Message | null
    constructPart(options?: ParserOptions | null): Object | null
    eos(): boolean
    getFormat(): Format
    getHeadersBegin(): number
    getHeadersEnd(): number
    getMboxMarker(): string | null
    getMboxMarkerOffset(): number
    getPersistStream(): boolean
    getRespectContentLength(): boolean
    initWithStream(stream: Stream): void
    setFormat(format: Format): void
    setPersistStream(persist: boolean): void
    setRespectContentLength(respectContentLength: boolean): void
    tell(): number
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    static new(): Parser
    static newWithStream(stream: Stream): Parser
    static $gtype: GObject.Type
}
export interface Part_ConstructProps extends Object_ConstructProps {
}
export class Part {
    /* Fields of GMime.Part */
    parentObject: Object
    encoding: ContentEncoding
    openpgp: OpenPGPData
    contentDescription: string
    contentLocation: string
    contentMd5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfuncSetContent?(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Part, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Part, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Part_ConstructProps)
    _init (config?: Part_ConstructProps): void
    static new(): Part
    static newWithType(type: string, subtype: string): Part
    static $gtype: GObject.Type
}
export interface Pkcs7Context_ConstructProps extends CryptoContext_ConstructProps {
}
export class Pkcs7Context {
    /* Fields of GMime.CryptoContext */
    parentObject: GObject.Object
    requestPasswd: PasswordRequestFunc
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.CryptoContext */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    digestId(name: string): DigestAlgo
    digestName(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    exportKeys(keys: string, ostream: Stream): number
    getEncryptionProtocol(): string | null
    getKeyExchangeProtocol(): string | null
    getSignatureProtocol(): string | null
    importKeys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime.CryptoContext */
    vfuncDecrypt?(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfuncDigestId?(name: string): DigestAlgo
    vfuncDigestName?(digest: DigestAlgo): string | null
    vfuncEncrypt?(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfuncExportKeys?(keys: string, ostream: Stream): number
    vfuncGetEncryptionProtocol?(): string | null
    vfuncGetKeyExchangeProtocol?(): string | null
    vfuncGetSignatureProtocol?(): string | null
    vfuncImportKeys?(istream: Stream): number
    vfuncSign?(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfuncVerify?(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pkcs7Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pkcs7Context, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Pkcs7Context_ConstructProps)
    _init (config?: Pkcs7Context_ConstructProps): void
    static new(): Pkcs7Context
    static $gtype: GObject.Type
}
export interface Signature_ConstructProps extends GObject.Object_ConstructProps {
}
export class Signature {
    /* Fields of GMime.Signature */
    parentObject: GObject.Object
    status: SignatureStatus
    cert: Certificate
    created: number
    expires: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Signature */
    getCertificate(): Certificate
    getCreated(): number
    getCreated64(): number
    getExpires(): number
    getExpires64(): number
    getStatus(): SignatureStatus
    setCertificate(cert: Certificate): void
    setCreated(created: number): void
    setExpires(expires: number): void
    setStatus(status: SignatureStatus): void
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
    connect(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Signature_ConstructProps)
    _init (config?: Signature_ConstructProps): void
    static new(): Signature
    static $gtype: GObject.Type
}
export interface SignatureList_ConstructProps extends GObject.Object_ConstructProps {
}
export class SignatureList {
    /* Fields of GMime.SignatureList */
    parentObject: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.SignatureList */
    add(sig: Signature): number
    clear(): void
    contains(sig: Signature): boolean
    getSignature(index: number): Signature
    indexOf(sig: Signature): number
    insert(index: number, sig: Signature): void
    length(): number
    remove(sig: Signature): boolean
    removeAt(index: number): boolean
    setSignature(index: number, sig: Signature): void
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
    connect(sigName: "notify", callback: (($obj: SignatureList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignatureList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SignatureList_ConstructProps)
    _init (config?: SignatureList_ConstructProps): void
    static new(): SignatureList
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends GObject.Object_ConstructProps {
}
export class Stream {
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
export class StreamBuffer {
    /* Fields of GMime.StreamBuffer */
    parentObject: Stream
    mode: StreamBufferMode
    source: Stream
    buffer: string
    bufptr: string
    bufend: string
    buflen: number
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamBuffer_ConstructProps)
    _init (config?: StreamBuffer_ConstructProps): void
    static new(source: Stream, mode: StreamBufferMode): StreamBuffer
    static $gtype: GObject.Type
}
export interface StreamCat_ConstructProps extends Stream_ConstructProps {
}
export class StreamCat {
    /* Fields of GMime.StreamCat */
    parentObject: Stream
    sources: object
    current: object
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamCat */
    addSource(source: Stream): number
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamCat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamCat, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamCat_ConstructProps)
    _init (config?: StreamCat_ConstructProps): void
    static new(): StreamCat
    static $gtype: GObject.Type
}
export interface StreamFile_ConstructProps extends Stream_ConstructProps {
}
export class StreamFile {
    /* Fields of GMime.StreamFile */
    parentObject: Stream
    owner: boolean
    fp: object
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamFile */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFile, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamFile_ConstructProps)
    _init (config?: StreamFile_ConstructProps): void
    static new(fp?: object | null): StreamFile
    static newWithBounds(fp: object | null, start: number, end: number): StreamFile
    static open(path: string, mode: string): Stream
    static $gtype: GObject.Type
}
export interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
export class StreamFilter {
    /* Fields of GMime.StreamFilter */
    parentObject: Stream
    priv: object
    source: Stream
    owner: boolean
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamFilter */
    add(filter: Filter): number
    getOwner(): boolean
    remove(id: number): void
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamFilter_ConstructProps)
    _init (config?: StreamFilter_ConstructProps): void
    static new(stream: Stream): StreamFilter
    static $gtype: GObject.Type
}
export interface StreamFs_ConstructProps extends Stream_ConstructProps {
}
export class StreamFs {
    /* Fields of GMime.StreamFs */
    parentObject: Stream
    owner: boolean
    eos: boolean
    fd: number
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamFs */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    static new(fd: number): StreamFs
    static newWithBounds(fd: number, start: number, end: number): StreamFs
    static open(path: string, flags: number, mode: number): Stream
    static $gtype: GObject.Type
}
export interface StreamGIO_ConstructProps extends Stream_ConstructProps {
}
export class StreamGIO {
    /* Fields of GMime.StreamGIO */
    parentObject: Stream
    ostream: Gio.OutputStream
    istream: Gio.InputStream
    file: Gio.File
    owner: boolean
    eos: boolean
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamGIO */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamGIO, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamGIO, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamGIO_ConstructProps)
    _init (config?: StreamGIO_ConstructProps): void
    static new(file: Gio.File): StreamGIO
    static newWithBounds(file: Gio.File, start: number, end: number): StreamGIO
    static $gtype: GObject.Type
}
export interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
export class StreamMem {
    /* Fields of GMime.StreamMem */
    parentObject: Stream
    buffer: any
    owner: boolean
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamMem */
    getByteArray(): any
    getOwner(): boolean
    setByteArray(array: any): void
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    static new(): StreamMem
    static newWithBuffer(buffer: any): StreamMem
    static newWithByteArray(array: any): StreamMem
    static $gtype: GObject.Type
}
export interface StreamMmap_ConstructProps extends Stream_ConstructProps {
}
export class StreamMmap {
    /* Fields of GMime.StreamMmap */
    parentObject: Stream
    owner: boolean
    eos: boolean
    fd: number
    map: string
    maplen: number
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamMmap */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMmap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamMmap_ConstructProps)
    _init (config?: StreamMmap_ConstructProps): void
    static new(fd: number, prot: number, flags: number): StreamMmap
    static newWithBounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap
    static $gtype: GObject.Type
}
export interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
export class StreamNull {
    /* Fields of GMime.StreamNull */
    parentObject: Stream
    written: number
    newlines: number
    countNewlines: boolean
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamNull */
    getCountNewlines(): boolean
    setCountNewlines(count: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamNull_ConstructProps)
    _init (config?: StreamNull_ConstructProps): void
    static new(): StreamNull
    static $gtype: GObject.Type
}
export interface StreamPipe_ConstructProps extends Stream_ConstructProps {
}
export class StreamPipe {
    /* Fields of GMime.StreamPipe */
    parentObject: Stream
    owner: boolean
    eos: boolean
    fd: number
    /* Fields of GMime.Stream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.StreamPipe */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime.Stream */
    bufferGets(buf: string, max: number): number
    bufferReadln(buffer: any): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: any): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfuncClose?(): number
    vfuncEos?(): boolean
    vfuncFlush?(): number
    vfuncLength?(): number
    vfuncRead?(buf: any): number
    vfuncReset?(): number
    vfuncSeek?(offset: number, whence: SeekWhence): number
    vfuncSubstream?(start: number, end: number): Stream
    vfuncTell?(): number
    vfuncWrite?(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamPipe, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamPipe, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StreamPipe_ConstructProps)
    _init (config?: StreamPipe_ConstructProps): void
    static new(fd: number): StreamPipe
    static $gtype: GObject.Type
}
export interface TextPart_ConstructProps extends Part_ConstructProps {
}
export class TextPart {
    /* Fields of GMime.TextPart */
    parentObject: Part
    /* Fields of GMime.Part */
    encoding: ContentEncoding
    openpgp: OpenPGPData
    contentDescription: string
    contentLocation: string
    contentMd5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    contentType: ContentType
    headers: HeaderList
    contentId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMime.TextPart */
    getCharset(): string
    getText(): string
    setCharset(charset: string): void
    setText(text: string): void
    /* Methods of GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfuncSetContent?(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfuncEncode?(constraint: EncodingConstraint): void
    vfuncGetHeaders?(options?: FormatOptions | null): string
    vfuncHeaderAdded?(header: Header): void
    vfuncHeaderChanged?(header: Header): void
    vfuncHeaderRemoved?(header: Header): void
    vfuncHeadersCleared?(): void
    vfuncSetContentType?(contentType: ContentType): void
    vfuncWriteToStream?(options: FormatOptions, contentOnly: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextPart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextPart, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TextPart_ConstructProps)
    _init (config?: TextPart_ConstructProps): void
    static new(): TextPart
    static newWithSubtype(subtype: string): TextPart
    static $gtype: GObject.Type
}
export abstract class ApplicationPkcs7MimeClass {
    /* Fields of GMime.ApplicationPkcs7MimeClass */
    parentClass: PartClass
    static name: string
}
export abstract class AutocryptHeaderClass {
    /* Fields of GMime.AutocryptHeaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class AutocryptHeaderListClass {
    /* Fields of GMime.AutocryptHeaderListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CertificateClass {
    /* Fields of GMime.CertificateClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CertificateListClass {
    /* Fields of GMime.CertificateListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Charset {
    /* Fields of GMime.Charset */
    mask: number
    level: number
    /* Methods of GMime.Charset */
    bestName(): string | null
    canEncode(charset: string, text: string, len: number): boolean
    init(): void
    step(inbuf: string, inlen: number): void
    static best(inbuf: string, inlen: number): string | null
    static canonName(charset: string): string
    static iconvName(charset: string): string
    static isoToWindows(isocharset: string): string
    static language(charset: string): string | null
    static localeName(): string
    static mapInit(): void
    static mapShutdown(): void
    static name(charset: string): string
}
export abstract class ContentDispositionClass {
    /* Fields of GMime.ContentDispositionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ContentTypeClass {
    /* Fields of GMime.ContentTypeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CryptoContextClass {
    /* Fields of GMime.CryptoContextClass */
    parentClass: GObject.ObjectClass
    digestId: any
    digestName: any
    getSignatureProtocol: any
    getEncryptionProtocol: any
    getKeyExchangeProtocol: any
    sign: any
    verify: any
    encrypt: any
    decrypt: any
    importKeys: any
    exportKeys: any
    static name: string
}
export abstract class DataWrapperClass {
    /* Fields of GMime.DataWrapperClass */
    parentClass: GObject.ObjectClass
    writeToStream: any
    static name: string
}
export abstract class DecryptResultClass {
    /* Fields of GMime.DecryptResultClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Encoding {
    /* Fields of GMime.Encoding */
    encoding: ContentEncoding
    uubuf: any
    encode: boolean
    save: number
    state: number
    /* Methods of GMime.Encoding */
    flush(inbuf: string, inlen: number, outbuf: string): number
    initDecode(encoding: ContentEncoding): void
    initEncode(encoding: ContentEncoding): void
    outlen(inlen: number): number
    reset(): void
    step(inbuf: string, inlen: number, outbuf: string): number
    static name: string
    static base64DecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64EncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64EncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quotedDecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quotedEncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quotedEncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uudecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uuencodeClose(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
    static uuencodeStep(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
}
export abstract class FilterBasicClass {
    /* Fields of GMime.FilterBasicClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterBestClass {
    /* Fields of GMime.FilterBestClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterCharsetClass {
    /* Fields of GMime.FilterCharsetClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterChecksumClass {
    /* Fields of GMime.FilterChecksumClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterClass {
    /* Fields of GMime.FilterClass */
    parentClass: GObject.ObjectClass
    copy: any
    filter: any
    complete: any
    reset: any
    static name: string
}
export abstract class FilterDos2UnixClass {
    /* Fields of GMime.FilterDos2UnixClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterEnrichedClass {
    /* Fields of GMime.FilterEnrichedClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterFromClass {
    /* Fields of GMime.FilterFromClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterGZipClass {
    /* Fields of GMime.FilterGZipClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterHTMLClass {
    /* Fields of GMime.FilterHTMLClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterOpenPGPClass {
    /* Fields of GMime.FilterOpenPGPClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterSmtpDataClass {
    /* Fields of GMime.FilterSmtpDataClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterStripClass {
    /* Fields of GMime.FilterStripClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterUnix2DosClass {
    /* Fields of GMime.FilterUnix2DosClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterWindowsClass {
    /* Fields of GMime.FilterWindowsClass */
    parentClass: FilterClass
    static name: string
}
export abstract class FilterYencClass {
    /* Fields of GMime.FilterYencClass */
    parentClass: FilterClass
    static name: string
}
export class FormatOptions {
    /* Methods of GMime.FormatOptions */
    addHiddenHeader(header: string): void
    clearHiddenHeaders(): void
    clone(): FormatOptions
    createNewlineFilter(ensureNewline: boolean): Filter
    free(): void
    getNewline(): string
    getNewlineFormat(): NewLineFormat
    getParamEncodingMethod(): ParamEncodingMethod
    isHiddenHeader(header: string): boolean
    removeHiddenHeader(header: string): void
    setNewlineFormat(newline: NewLineFormat): void
    setParamEncodingMethod(method: ParamEncodingMethod): void
    static name: string
    static new(): FormatOptions
    constructor()
    static new(): FormatOptions
    static getDefault(): FormatOptions
}
export abstract class GpgContextClass {
    static name: string
}
export abstract class HeaderClass {
    /* Fields of GMime.HeaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class HeaderListClass {
    /* Fields of GMime.HeaderListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class InternetAddressClass {
    /* Fields of GMime.InternetAddressClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class InternetAddressGroupClass {
    /* Fields of GMime.InternetAddressGroupClass */
    parentClass: InternetAddressClass
    static name: string
}
export abstract class InternetAddressListClass {
    /* Fields of GMime.InternetAddressListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class InternetAddressMailboxClass {
    /* Fields of GMime.InternetAddressMailboxClass */
    parentClass: InternetAddressClass
    static name: string
}
export abstract class MessageClass {
    /* Fields of GMime.MessageClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class MessagePartClass {
    /* Fields of GMime.MessagePartClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class MessagePartialClass {
    /* Fields of GMime.MessagePartialClass */
    parentClass: PartClass
    static name: string
}
export abstract class MultipartClass {
    /* Fields of GMime.MultipartClass */
    parentClass: ObjectClass
    clear: any
    add: any
    insert: any
    remove: any
    removeAt: any
    getPart: any
    contains: any
    indexOf: any
    getCount: any
    setBoundary: any
    getBoundary: any
    static name: string
}
export abstract class MultipartEncryptedClass {
    /* Fields of GMime.MultipartEncryptedClass */
    parentClass: MultipartClass
    static name: string
}
export abstract class MultipartSignedClass {
    /* Fields of GMime.MultipartSignedClass */
    parentClass: MultipartClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of GMime.ObjectClass */
    parentClass: GObject.ObjectClass
    headerAdded: any
    headerChanged: any
    headerRemoved: any
    headersCleared: any
    setContentType: any
    getHeaders: any
    writeToStream: any
    encode: any
    static name: string
}
export class OpenPGPMarker {
    /* Fields of GMime.OpenPGPMarker */
    marker: string
    len: number
    before: OpenPGPState
    after: OpenPGPState
    isEndMarker: boolean
    static name: string
}
export abstract class ParamClass {
    /* Fields of GMime.ParamClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ParamListClass {
    /* Fields of GMime.ParamListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ParserClass {
    /* Fields of GMime.ParserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ParserOptions {
    /* Methods of GMime.ParserOptions */
    clone(): ParserOptions
    free(): void
    getAddressComplianceMode(): RfcComplianceMode
    getAllowAddressesWithoutDomain(): boolean
    getFallbackCharsets(): string[]
    getParameterComplianceMode(): RfcComplianceMode
    getRfc2047ComplianceMode(): RfcComplianceMode
    setAddressComplianceMode(mode: RfcComplianceMode): void
    setAllowAddressesWithoutDomain(allow: boolean): void
    setFallbackCharsets(charsets: string): void
    setParameterComplianceMode(mode: RfcComplianceMode): void
    setRfc2047ComplianceMode(mode: RfcComplianceMode): void
    static name: string
    static new(): ParserOptions
    constructor()
    static new(): ParserOptions
    static getDefault(): ParserOptions
}
export abstract class PartClass {
    /* Fields of GMime.PartClass */
    parentClass: ObjectClass
    setContent: any
    static name: string
}
export class PartIter {
    /* Methods of GMime.PartIter */
    clone(): PartIter
    free(): void
    getCurrent(): Object
    getParent(): Object
    getPath(): string
    getToplevel(): Object
    isValid(): boolean
    jumpTo(path: string): boolean
    next(): boolean
    prev(): boolean
    remove(): boolean
    replace(replacement: Object): boolean
    reset(): void
    static name: string
    static new(toplevel: Object): PartIter
    constructor(toplevel: Object)
    static new(toplevel: Object): PartIter
}
export abstract class Pkcs7ContextClass {
    static name: string
}
export class References {
    /* Fields of GMime.References */
    array: object[]
    /* Methods of GMime.References */
    append(msgid: string): void
    clear(): void
    copy(): References
    free(): void
    getMessageId(index: number): string
    length(): number
    setMessageId(index: number, msgid: string): void
    static name: string
    static new(): References
    constructor()
    static new(): References
    static parse(options: ParserOptions | null, text: string): References
}
export abstract class SignatureClass {
    /* Fields of GMime.SignatureClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SignatureListClass {
    /* Fields of GMime.SignatureListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class StreamBufferClass {
    /* Fields of GMime.StreamBufferClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamCatClass {
    /* Fields of GMime.StreamCatClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamClass {
    /* Fields of GMime.StreamClass */
    parentClass: GObject.ObjectClass
    read: any
    write: any
    flush: any
    close: any
    eos: any
    reset: any
    seek: any
    tell: any
    length: any
    substream: any
    static name: string
}
export abstract class StreamFileClass {
    /* Fields of GMime.StreamFileClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamFilterClass {
    /* Fields of GMime.StreamFilterClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamFsClass {
    /* Fields of GMime.StreamFsClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamGIOClass {
    /* Fields of GMime.StreamGIOClass */
    parentClass: StreamClass
    static name: string
}
export class StreamIOVector {
    /* Fields of GMime.StreamIOVector */
    data: object
    len: number
    static name: string
}
export abstract class StreamMemClass {
    /* Fields of GMime.StreamMemClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamMmapClass {
    /* Fields of GMime.StreamMmapClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamNullClass {
    /* Fields of GMime.StreamNullClass */
    parentClass: StreamClass
    static name: string
}
export abstract class StreamPipeClass {
    /* Fields of GMime.StreamPipeClass */
    parentClass: StreamClass
    static name: string
}
export abstract class TextPartClass {
    /* Fields of GMime.TextPartClass */
    parentClass: PartClass
    static name: string
}
}