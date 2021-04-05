/**
 * NMClient-1.0
 */

/// <reference types="node" />
/// <reference path="NetworkManager-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="DBusGLib-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />

declare namespace NMClient {

export enum ClientError {
    UNKNOWNERROR,
    MANAGERNOTRUNNING,
}
export enum ClientPermission {
    NONE,
    ENABLE_DISABLE_NETWORK,
    ENABLE_DISABLE_WIFI,
    ENABLE_DISABLE_WWAN,
    ENABLE_DISABLE_WIMAX,
    SLEEP_WAKE,
    NETWORK_CONTROL,
    WIFI_SHARE_PROTECTED,
    WIFI_SHARE_OPEN,
    SETTINGS_MODIFY_SYSTEM,
    SETTINGS_MODIFY_OWN,
    SETTINGS_MODIFY_HOSTNAME,
    SETTINGS_MODIFY_GLOBAL_DNS,
    RELOAD,
    CHECKPOINT_ROLLBACK,
    ENABLE_DISABLE_STATISTICS,
    LAST,
}
export enum ClientPermissionResult {
    UNKNOWN,
    YES,
    AUTH,
    NO,
}
export enum DeviceAdslError {
    UNKNOWNERROR,
    NOTADSLCONNECTION,
    INVALIDADSLCONNECTION,
}
export enum DeviceBondError {
    UNKNOWNERROR,
    NOTBONDCONNECTION,
    INVALIDBONDCONNECTION,
    INTERFACEMISMATCH,
}
export enum DeviceBridgeError {
    UNKNOWNERROR,
    NOTBRIDGECONNECTION,
    INVALIDBRIDGECONNECTION,
    INTERFACEMISMATCH,
}
export enum DeviceBtError {
    UNKNOWNERROR,
    NOTBTCONNECTION,
    INVALIDBTCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
    MISSINGDEVICECAPS,
}
export enum DeviceError {
    UNKNOWNERROR,
    INTERFACEMISMATCH,
}
export enum DeviceEthernetError {
    UNKNOWNERROR,
    NOTETHERNETCONNECTION,
    INVALIDETHERNETCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
export enum DeviceGenericError {
    UNKNOWNERROR,
    NOTGENERICCONNECTION,
    MISSINGINTERFACENAME,
}
export enum DeviceInfinibandError {
    UNKNOWNERROR,
    NOTINFINIBANDCONNECTION,
    INVALIDINFINIBANDCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
export enum DeviceModemError {
    UNKNOWNERROR,
    NOTMODEMCONNECTION,
    INVALIDMODEMCONNECTION,
    MISSINGDEVICECAPS,
}
export enum DeviceOlpcMeshError {
    UNKNOWNERROR,
    NOTOLPCMESHCONNECTION,
    INVALIDOLPCMESHCONNECTION,
}
export enum DeviceTeamError {
    UNKNOWNERROR,
    NOTTEAMCONNECTION,
    INVALIDTEAMCONNECTION,
    INTERFACEMISMATCH,
}
export enum DeviceVlanError {
    UNKNOWNERROR,
    NOTVLANCONNECTION,
    INVALIDVLANCONNECTION,
    IDMISMATCH,
    INTERFACEMISMATCH,
    MACMISMATCH,
}
export enum DeviceWifiError {
    UNKNOWNERROR,
    NOTWIFICONNECTION,
    INVALIDWIFICONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
    MISSINGDEVICEWPACAPS,
    MISSINGDEVICERSNCAPS,
}
export enum DeviceWimaxError {
    UNKNOWNERROR,
    NOTWIMAXCONNECTION,
    INVALIDWIMAXCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
export enum ObjectError {
    UNKNOWN,
    OBJECT_CREATION_FAILURE,
}
export enum RemoteConnectionError {
    UNKNOWNERROR,
    DISCONNECTED,
}
export enum RemoteSettingsError {
    UNKNOWNERROR,
    CONNECTIONREMOVED,
    CONNECTIONUNAVAILABLE,
    SERVICEUNAVAILABLE,
}
export enum SecretAgentError {
    NOTAUTHORIZED,
    INVALIDCONNECTION,
    USERCANCELED,
    AGENTCANCELED,
    INTERNALERROR,
    NOSECRETS,
}
export enum WimaxNspNetworkType {
    UNKNOWN,
    HOME,
    PARTNER,
    ROAMING_PARTNER,
}
export enum SecretAgentCapabilities {
    NONE,
    VPN_HINTS,
    LAST,
}
export enum SecretAgentGetSecretsFlags {
    NONE,
    ALLOW_INTERACTION,
    REQUEST_NEW,
    USER_REQUESTED,
}
export const ACCESS_POINT_BSSID: string
export const ACCESS_POINT_FLAGS: string
export const ACCESS_POINT_FREQUENCY: string
export const ACCESS_POINT_HW_ADDRESS: string
export const ACCESS_POINT_LAST_SEEN: string
export const ACCESS_POINT_MAX_BITRATE: string
export const ACCESS_POINT_MODE: string
export const ACCESS_POINT_RSN_FLAGS: string
export const ACCESS_POINT_SSID: string
export const ACCESS_POINT_STRENGTH: string
export const ACCESS_POINT_WPA_FLAGS: string
export const ACTIVE_CONNECTION_CONNECTION: string
export const ACTIVE_CONNECTION_DEFAULT: string
export const ACTIVE_CONNECTION_DEFAULT6: string
export const ACTIVE_CONNECTION_DEVICES: string
export const ACTIVE_CONNECTION_DHCP4_CONFIG: string
export const ACTIVE_CONNECTION_DHCP6_CONFIG: string
export const ACTIVE_CONNECTION_ID: string
export const ACTIVE_CONNECTION_IP4_CONFIG: string
export const ACTIVE_CONNECTION_IP6_CONFIG: string
export const ACTIVE_CONNECTION_MASTER: string
export const ACTIVE_CONNECTION_SPECIFIC_OBJECT: string
export const ACTIVE_CONNECTION_STATE: string
export const ACTIVE_CONNECTION_TYPE: string
export const ACTIVE_CONNECTION_UUID: string
export const ACTIVE_CONNECTION_VPN: string
export const CLIENT_ACTIVATING_CONNECTION: string
export const CLIENT_ACTIVE_CONNECTIONS: string
export const CLIENT_ALL_DEVICES: string
export const CLIENT_CONNECTIVITY: string
export const CLIENT_DEVICES: string
export const CLIENT_MANAGER_RUNNING: string
export const CLIENT_NETWORKING_ENABLED: string
export const CLIENT_PRIMARY_CONNECTION: string
export const CLIENT_STARTUP: string
export const CLIENT_STATE: string
export const CLIENT_VERSION: string
export const CLIENT_WIMAX_ENABLED: string
export const CLIENT_WIMAX_HARDWARE_ENABLED: string
export const CLIENT_WIRELESS_ENABLED: string
export const CLIENT_WIRELESS_HARDWARE_ENABLED: string
export const CLIENT_WWAN_ENABLED: string
export const CLIENT_WWAN_HARDWARE_ENABLED: string
export const DEVICE_ACTIVE_CONNECTION: string
export const DEVICE_ADSL_CARRIER: string
export const DEVICE_AUTOCONNECT: string
export const DEVICE_AVAILABLE_CONNECTIONS: string
export const DEVICE_BOND_CARRIER: string
export const DEVICE_BOND_HW_ADDRESS: string
export const DEVICE_BOND_SLAVES: string
export const DEVICE_BRIDGE_CARRIER: string
export const DEVICE_BRIDGE_HW_ADDRESS: string
export const DEVICE_BRIDGE_SLAVES: string
export const DEVICE_BT_CAPABILITIES: string
export const DEVICE_BT_HW_ADDRESS: string
export const DEVICE_BT_NAME: string
export const DEVICE_CAPABILITIES: string
export const DEVICE_DEVICE_TYPE: string
export const DEVICE_DHCP4_CONFIG: string
export const DEVICE_DHCP6_CONFIG: string
export const DEVICE_DRIVER: string
export const DEVICE_DRIVER_VERSION: string
export const DEVICE_ETHERNET_CARRIER: string
export const DEVICE_ETHERNET_HW_ADDRESS: string
export const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string
export const DEVICE_ETHERNET_SPEED: string
export const DEVICE_FIRMWARE_MISSING: string
export const DEVICE_FIRMWARE_VERSION: string
export const DEVICE_GENERIC_HW_ADDRESS: string
export const DEVICE_GENERIC_TYPE_DESCRIPTION: string
export const DEVICE_INFINIBAND_CARRIER: string
export const DEVICE_INFINIBAND_HW_ADDRESS: string
export const DEVICE_INTERFACE: string
export const DEVICE_IP4_CONFIG: string
export const DEVICE_IP6_CONFIG: string
export const DEVICE_IP_INTERFACE: string
export const DEVICE_MANAGED: string
export const DEVICE_MODEM_CURRENT_CAPABILITIES: string
export const DEVICE_MODEM_MODEM_CAPABILITIES: string
export const DEVICE_MTU: string
export const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string
export const DEVICE_OLPC_MESH_COMPANION: string
export const DEVICE_OLPC_MESH_HW_ADDRESS: string
export const DEVICE_PHYSICAL_PORT_ID: string
export const DEVICE_PRODUCT: string
export const DEVICE_REAL: string
export const DEVICE_STATE: string
export const DEVICE_STATE_REASON: string
export const DEVICE_TEAM_CARRIER: string
export const DEVICE_TEAM_HW_ADDRESS: string
export const DEVICE_TEAM_SLAVES: string
export const DEVICE_UDI: string
export const DEVICE_VENDOR: string
export const DEVICE_VLAN_CARRIER: string
export const DEVICE_VLAN_HW_ADDRESS: string
export const DEVICE_VLAN_PARENT: string
export const DEVICE_VLAN_VLAN_ID: string
export const DEVICE_WIFI_ACCESS_POINTS: string
export const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string
export const DEVICE_WIFI_BITRATE: string
export const DEVICE_WIFI_CAPABILITIES: string
export const DEVICE_WIFI_HW_ADDRESS: string
export const DEVICE_WIFI_MODE: string
export const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string
export const DEVICE_WIMAX_ACTIVE_NSP: string
export const DEVICE_WIMAX_BSID: string
export const DEVICE_WIMAX_CENTER_FREQUENCY: string
export const DEVICE_WIMAX_CINR: string
export const DEVICE_WIMAX_HW_ADDRESS: string
export const DEVICE_WIMAX_NSPS: string
export const DEVICE_WIMAX_RSSI: string
export const DEVICE_WIMAX_TX_POWER: string
export const DHCP4_CONFIG_OPTIONS: string
export const DHCP6_CONFIG_OPTIONS: string
export const IP4_CONFIG_ADDRESSES: string
export const IP4_CONFIG_DOMAINS: string
export const IP4_CONFIG_GATEWAY: string
export const IP4_CONFIG_NAMESERVERS: string
export const IP4_CONFIG_ROUTES: string
export const IP4_CONFIG_SEARCHES: string
export const IP4_CONFIG_WINS_SERVERS: string
export const IP6_CONFIG_ADDRESSES: string
export const IP6_CONFIG_DOMAINS: string
export const IP6_CONFIG_GATEWAY: string
export const IP6_CONFIG_NAMESERVERS: string
export const IP6_CONFIG_ROUTES: string
export const IP6_CONFIG_SEARCHES: string
export const OBJECT_DBUS_CONNECTION: string
export const OBJECT_DBUS_PATH: string
export const REMOTE_CONNECTION_REMOVED: string
export const REMOTE_CONNECTION_UNSAVED: string
export const REMOTE_CONNECTION_UPDATED: string
export const REMOTE_SETTINGS_BUS: string
export const REMOTE_SETTINGS_CAN_MODIFY: string
export const REMOTE_SETTINGS_CONNECTIONS_READ: string
export const REMOTE_SETTINGS_HOSTNAME: string
export const REMOTE_SETTINGS_NEW_CONNECTION: string
export const REMOTE_SETTINGS_SERVICE_RUNNING: string
export const SECRET_AGENT_AUTO_REGISTER: string
export const SECRET_AGENT_CAPABILITIES: string
export const SECRET_AGENT_IDENTIFIER: string
export const SECRET_AGENT_REGISTERED: string
export const SECRET_AGENT_REGISTRATION_RESULT: string
export const VPN_CONNECTION_BANNER: string
export const VPN_CONNECTION_VPN_STATE: string
export const WIMAX_NSP_NAME: string
export const WIMAX_NSP_NETWORK_TYPE: string
export const WIMAX_NSP_SIGNAL_QUALITY: string
export function clientErrorQuark(): GLib.Quark
export function deviceAdslErrorQuark(): GLib.Quark
export function deviceBondErrorQuark(): GLib.Quark
export function deviceBridgeErrorQuark(): GLib.Quark
export function deviceBtErrorQuark(): GLib.Quark
export function deviceErrorQuark(): GLib.Quark
export function deviceEthernetErrorQuark(): GLib.Quark
export function deviceGenericErrorQuark(): GLib.Quark
export function deviceInfinibandErrorQuark(): GLib.Quark
export function deviceModemErrorQuark(): GLib.Quark
export function deviceOlpcMeshErrorQuark(): GLib.Quark
export function deviceTeamErrorQuark(): GLib.Quark
export function deviceVlanErrorQuark(): GLib.Quark
export function deviceWifiErrorQuark(): GLib.Quark
export function deviceWimaxErrorQuark(): GLib.Quark
export function objectErrorQuark(): GLib.Quark
export function remoteConnectionErrorQuark(): GLib.Quark
export function remoteSettingsErrorQuark(): GLib.Quark
export function secretAgentErrorQuark(): GLib.Quark
export interface ClientActivateFn {
    (client: Client, activeConnection: ActiveConnection, error: GLib.Error): void
}
export interface ClientAddActivateFn {
    (client: Client, connection: ActiveConnection, newConnectionPath: string, error: GLib.Error): void
}
export interface DeviceCallbackFn {
    (device: Device, error: GLib.Error): void
}
export interface DeviceDeactivateFn {
    (device: Device, error: GLib.Error): void
}
export interface DeviceWifiRequestScanFn {
    (device: DeviceWifi, error: GLib.Error): void
}
export interface RemoteConnectionGetSecretsFunc {
    (connection: RemoteConnection, secrets: GLib.HashTable, error: GLib.Error): void
}
export interface RemoteConnectionResultFunc {
    (connection: RemoteConnection, error: GLib.Error): void
}
export interface RemoteSettingsAddConnectionFunc {
    (settings: RemoteSettings, connection: RemoteConnection, error: GLib.Error): void
}
export interface RemoteSettingsLoadConnectionsFunc {
    (settings: RemoteSettings, failures: string, error: GLib.Error): void
}
export interface RemoteSettingsSaveHostnameFunc {
    (settings: RemoteSettings, error: GLib.Error): void
}
export interface SecretAgentDeleteSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
export interface SecretAgentGetSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, secrets: GLib.HashTable, error: GLib.Error): void
}
export interface SecretAgentSaveSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
export interface AccessPoint_ConstructProps extends Object_ConstructProps {
}
export class AccessPoint {
    /* Properties of NMClient.AccessPoint */
    readonly bssid: string
    readonly flags: number
    readonly frequency: number
    readonly hwAddress: string
    readonly lastSeen: number
    readonly maxBitrate: number
    readonly mode: number
    readonly rsnFlags: number
    readonly ssid: any
    readonly strength: number
    readonly wpaFlags: number
    /* Properties of NMClient.Object */
    /* Fields of NMClient.AccessPoint */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.AccessPoint */
    connectionValid(connection: NetworkManager.Connection): boolean
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getBssid(): string
    getFlags(): NetworkManager.TODO_80211ApFlags
    getFrequency(): number
    getHwAddress(): string
    getLastSeen(): number
    getMaxBitrate(): number
    getMode(): NetworkManager.TODO_80211Mode
    getRsnFlags(): NetworkManager.TODO_80211ApSecurityFlags
    getSsid(): any
    getStrength(): number
    getWpaFlags(): NetworkManager.TODO_80211ApSecurityFlags
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: AccessPoint, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: AccessPoint, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::frequency", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frequency", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-seen", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-seen", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rsn-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rsn-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strength", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strength", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wpa-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wpa-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccessPoint_ConstructProps)
    _init (config?: AccessPoint_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): AccessPoint
    static $gtype: GObject.Type
}
export interface ActiveConnection_ConstructProps extends Object_ConstructProps {
}
export class ActiveConnection {
    /* Properties of NMClient.ActiveConnection */
    readonly connection: string
    readonly "default": boolean
    readonly default6: boolean
    readonly devices: any
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly id: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly master: string
    readonly specificObject: string
    readonly state: number
    readonly type: string
    readonly uuid: string
    readonly vpn: boolean
    /* Properties of NMClient.Object */
    /* Fields of NMClient.ActiveConnection */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.ActiveConnection */
    getConnection(): string
    getConnectionType(): string
    getDefault(): boolean
    getDefault6(): boolean
    getDevices(): Device[]
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getId(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getMaster(): string
    getSpecificObject(): string
    getState(): NetworkManager.ActiveConnectionState
    getUuid(): string
    getVpn(): boolean
    /* Methods of NMClient.Object */
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: ActiveConnection, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: ActiveConnection, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default6", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default6", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devices", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::specific-object", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specific-object", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpn", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ActiveConnection_ConstructProps)
    _init (config?: ActiveConnection_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): ActiveConnection
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends Object_ConstructProps {
    networkingEnabled?: boolean
    wimaxEnabled?: boolean
    wirelessEnabled?: boolean
    wwanEnabled?: boolean
}
export class Client {
    /* Properties of NMClient.Client */
    readonly activatingConnection: ActiveConnection
    readonly activeConnections: object[]
    readonly allDevices: any
    readonly connectivity: number
    readonly devices: any
    readonly managerRunning: boolean
    networkingEnabled: boolean
    readonly primaryConnection: ActiveConnection
    readonly startup: boolean
    readonly state: number
    readonly version: string
    wimaxEnabled: boolean
    readonly wimaxHardwareEnabled: boolean
    wirelessEnabled: boolean
    readonly wirelessHardwareEnabled: boolean
    wwanEnabled: boolean
    readonly wwanHardwareEnabled: boolean
    /* Properties of NMClient.Object */
    /* Fields of NMClient.Client */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.Client */
    activateConnection(connection?: NetworkManager.Connection | null, device?: Device | null, specificObject?: string | null, callback?: ClientActivateFn | null): void
    addAndActivateConnection(partial: NetworkManager.Connection | null, device: Device, specificObject?: string | null, callback?: ClientAddActivateFn | null): void
    checkConnectivity(cancellable?: Gio.Cancellable | null): NetworkManager.ConnectivityState
    checkConnectivityAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    checkConnectivityFinish(result: Gio.AsyncResult): NetworkManager.ConnectivityState
    deactivateConnection(active: ActiveConnection): void
    getActivatingConnection(): ActiveConnection
    getActiveConnections(): ActiveConnection[]
    getAllDevices(): Device[]
    getConnectivity(): NetworkManager.ConnectivityState
    getDeviceByIface(iface: string): Device
    getDeviceByPath(objectPath: string): Device
    getDevices(): Device[]
    getLogging(level?: string | null, domains?: string | null): boolean
    getManagerRunning(): boolean
    getPermissionResult(permission: ClientPermission): ClientPermissionResult
    getPrimaryConnection(): ActiveConnection
    getStartup(): boolean
    getState(): NetworkManager.State
    getVersion(): string
    networkingGetEnabled(): boolean
    networkingSetEnabled(enabled: boolean): void
    setLogging(level?: string | null, domains?: string | null): boolean
    sleep(sleep: boolean): void
    wimaxGetEnabled(): boolean
    wimaxHardwareGetEnabled(): boolean
    wimaxSetEnabled(enabled: boolean): void
    wirelessGetEnabled(): boolean
    wirelessHardwareGetEnabled(): boolean
    wirelessSetEnabled(enabled: boolean): void
    wwanGetEnabled(): boolean
    wwanHardwareGetEnabled(): boolean
    wwanSetEnabled(enabled: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Client */
    vfuncDeviceAdded?(device: Device): void
    vfuncDeviceRemoved?(device: Device): void
    vfuncPermissionChanged?(permission: ClientPermission, result: ClientPermissionResult): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Client */
    connect(sigName: "any-device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "any-device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "any-device-added", device: Device): void
    on(sigName: "any-device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "any-device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "any-device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "any-device-removed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "any-device-removed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "any-device-removed", device: Device): void
    on(sigName: "any-device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "any-device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "any-device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "permission-changed", callback: (($obj: Client, permission: number, result: number) => void)): number
    connect_after(sigName: "permission-changed", callback: (($obj: Client, permission: number, result: number) => void)): number
    emit(sigName: "permission-changed", permission: number, result: number): void
    on(sigName: "permission-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "permission-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "permission-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: Client, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: Client, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::activating-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activating-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connections", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connections", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectivity", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectivity", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager-running", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager-running", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::networking-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::networking-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wimax-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wimax-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wimax-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wimax-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wireless-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wireless-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wwan-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwan-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wwan-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwan-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Client
    static newFinish(result: Gio.AsyncResult): Client
    static newAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface DHCP4Config_ConstructProps extends Object_ConstructProps {
}
export class DHCP4Config {
    /* Properties of NMClient.DHCP4Config */
    readonly options: GLib.HashTable
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DHCP4Config */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DHCP4Config */
    getOneOption(option: string): string
    getOptions(): GLib.HashTable
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DHCP4Config, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DHCP4Config, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::options", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DHCP4Config_ConstructProps)
    _init (config?: DHCP4Config_ConstructProps): void
    static new(connection: DBusGLib.Connection, objectPath: string): DHCP4Config
    static $gtype: GObject.Type
}
export interface DHCP6Config_ConstructProps extends Object_ConstructProps {
}
export class DHCP6Config {
    /* Properties of NMClient.DHCP6Config */
    readonly options: GLib.HashTable
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DHCP6Config */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DHCP6Config */
    getOneOption(option: string): string
    getOptions(): GLib.HashTable
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DHCP6Config, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DHCP6Config, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::options", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DHCP6Config_ConstructProps)
    _init (config?: DHCP6Config_ConstructProps): void
    static new(connection: DBusGLib.Connection, objectPath: string): DHCP6Config
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends Object_ConstructProps {
    autoconnect?: boolean
}
export class Device {
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.Device */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getHwAddress(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: Device, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Device, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: Device, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: Device, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): Device
    static disambiguateNames(devices: Device[]): string[]
    static $gtype: GObject.Type
}
export interface DeviceAdsl_ConstructProps extends Device_ConstructProps {
}
export class DeviceAdsl {
    /* Properties of NMClient.DeviceAdsl */
    readonly carrier: boolean
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceAdsl */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceAdsl */
    getCarrier(): boolean
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getHwAddress(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceAdsl, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceAdsl, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceAdsl, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceAdsl, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceAdsl_ConstructProps)
    _init (config?: DeviceAdsl_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceAdsl
    static $gtype: GObject.Type
}
export interface DeviceBond_ConstructProps extends Device_ConstructProps {
}
export class DeviceBond {
    /* Properties of NMClient.DeviceBond */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly slaves: any
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceBond */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceBond */
    getCarrier(): boolean
    getHwAddress(): string
    getSlaves(): Device[]
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceBond, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceBond, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceBond, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceBond, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slaves", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceBond_ConstructProps)
    _init (config?: DeviceBond_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceBond
    static $gtype: GObject.Type
}
export interface DeviceBridge_ConstructProps extends Device_ConstructProps {
}
export class DeviceBridge {
    /* Properties of NMClient.DeviceBridge */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly slaves: any
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceBridge */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceBridge */
    getCarrier(): boolean
    getHwAddress(): string
    getSlaves(): Device[]
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceBridge, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceBridge, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceBridge, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceBridge, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slaves", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceBridge_ConstructProps)
    _init (config?: DeviceBridge_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceBridge
    static $gtype: GObject.Type
}
export interface DeviceBt_ConstructProps extends Device_ConstructProps {
}
export class DeviceBt {
    /* Properties of NMClient.DeviceBt */
    readonly btCapabilities: number
    readonly hwAddress: string
    readonly name: string
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceBt */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceBt */
    getCapabilities(): NetworkManager.BluetoothCapabilities
    getHwAddress(): string
    getName(): string
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceBt, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceBt, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceBt, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceBt, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bt-capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bt-capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceBt_ConstructProps)
    _init (config?: DeviceBt_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceBt
    static $gtype: GObject.Type
}
export interface DeviceEthernet_ConstructProps extends Device_ConstructProps {
}
export class DeviceEthernet {
    /* Properties of NMClient.DeviceEthernet */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly permHwAddress: string
    readonly speed: number
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceEthernet */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceEthernet */
    getCarrier(): boolean
    getHwAddress(): string
    getPermanentHwAddress(): string
    getSpeed(): number
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceEthernet, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceEthernet, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceEthernet, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceEthernet, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perm-hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perm-hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceEthernet_ConstructProps)
    _init (config?: DeviceEthernet_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceEthernet
    static $gtype: GObject.Type
}
export interface DeviceGeneric_ConstructProps extends Device_ConstructProps {
}
export class DeviceGeneric {
    /* Properties of NMClient.DeviceGeneric */
    readonly hwAddress: string
    readonly typeDescription: string
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceGeneric */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceGeneric */
    getHwAddress(): string
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceGeneric, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceGeneric, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceGeneric, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceGeneric, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-description", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-description", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceGeneric_ConstructProps)
    _init (config?: DeviceGeneric_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceGeneric
    static $gtype: GObject.Type
}
export interface DeviceInfiniband_ConstructProps extends Device_ConstructProps {
}
export class DeviceInfiniband {
    /* Properties of NMClient.DeviceInfiniband */
    readonly carrier: boolean
    readonly hwAddress: string
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceInfiniband */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceInfiniband */
    getCarrier(): boolean
    getHwAddress(): string
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceInfiniband, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceInfiniband, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceInfiniband, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceInfiniband, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceInfiniband_ConstructProps)
    _init (config?: DeviceInfiniband_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceInfiniband
    static $gtype: GObject.Type
}
export interface DeviceModem_ConstructProps extends Device_ConstructProps {
}
export class DeviceModem {
    /* Properties of NMClient.DeviceModem */
    readonly currentCapabilities: number
    readonly modemCapabilities: number
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceModem */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceModem */
    getCurrentCapabilities(): NetworkManager.DeviceModemCapabilities
    getModemCapabilities(): NetworkManager.DeviceModemCapabilities
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getHwAddress(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceModem, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceModem, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceModem, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceModem, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modem-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceModem_ConstructProps)
    _init (config?: DeviceModem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceOlpcMesh_ConstructProps extends Device_ConstructProps {
}
export class DeviceOlpcMesh {
    /* Properties of NMClient.DeviceOlpcMesh */
    readonly activeChannel: number
    readonly companion: DeviceWifi
    readonly hwAddress: string
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceOlpcMesh */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceOlpcMesh */
    getActiveChannel(): number
    getCompanion(): DeviceWifi
    getHwAddress(): string
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceOlpcMesh, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceOlpcMesh, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceOlpcMesh, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceOlpcMesh, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-channel", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-channel", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::companion", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::companion", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceOlpcMesh_ConstructProps)
    _init (config?: DeviceOlpcMesh_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceOlpcMesh
    static $gtype: GObject.Type
}
export interface DeviceTeam_ConstructProps extends Device_ConstructProps {
}
export class DeviceTeam {
    /* Properties of NMClient.DeviceTeam */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly slaves: any
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceTeam */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceTeam */
    getCarrier(): boolean
    getHwAddress(): string
    getSlaves(): Device[]
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceTeam, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceTeam, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceTeam, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceTeam, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slaves", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceTeam_ConstructProps)
    _init (config?: DeviceTeam_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceTeam
    static $gtype: GObject.Type
}
export interface DeviceVlan_ConstructProps extends Device_ConstructProps {
}
export class DeviceVlan {
    /* Properties of NMClient.DeviceVlan */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly parent: Device
    readonly vlanId: number
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceVlan */
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceVlan */
    getCarrier(): boolean
    getHwAddress(): string
    getParent(): Device
    getVlanId(): number
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceVlan, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceVlan, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceVlan, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceVlan, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::carrier", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vlan-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vlan-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceVlan_ConstructProps)
    _init (config?: DeviceVlan_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceVlan
    static $gtype: GObject.Type
}
export interface DeviceWifi_ConstructProps extends Device_ConstructProps {
}
export class DeviceWifi {
    /* Properties of NMClient.DeviceWifi */
    readonly accessPoints: any
    readonly activeAccessPoint: AccessPoint
    readonly bitrate: number
    readonly hwAddress: string
    readonly mode: number
    readonly permHwAddress: string
    readonly wirelessCapabilities: number
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceWifi */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceWifi */
    getAccessPointByPath(path: string): AccessPoint
    getAccessPoints(): AccessPoint[]
    getActiveAccessPoint(): AccessPoint
    getBitrate(): number
    getCapabilities(): NetworkManager.DeviceWifiCapabilities
    getHwAddress(): string
    getMode(): NetworkManager.TODO_80211Mode
    getPermanentHwAddress(): string
    requestScanSimple(callback?: DeviceWifiRequestScanFn | null): void
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.DeviceWifi */
    vfuncAccessPointAdded?(ap: AccessPoint): void
    vfuncAccessPointRemoved?(ap: AccessPoint): void
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.DeviceWifi */
    connect(sigName: "access-point-added", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    connect_after(sigName: "access-point-added", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    emit(sigName: "access-point-added", ap: GObject.Object): void
    on(sigName: "access-point-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "access-point-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "access-point-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "access-point-removed", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    connect_after(sigName: "access-point-removed", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    emit(sigName: "access-point-removed", ap: GObject.Object): void
    on(sigName: "access-point-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "access-point-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "access-point-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceWifi, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceWifi, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceWifi, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceWifi, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::access-points", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-points", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-access-point", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-access-point", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perm-hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perm-hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wireless-capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceWifi_ConstructProps)
    _init (config?: DeviceWifi_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceWifi
    static $gtype: GObject.Type
}
export interface DeviceWimax_ConstructProps extends Device_ConstructProps {
}
export class DeviceWimax {
    /* Properties of NMClient.DeviceWimax */
    readonly activeNsp: WimaxNsp
    readonly bsid: string
    readonly centerFrequency: number
    readonly cinr: number
    readonly hwAddress: string
    readonly nsps: any
    readonly rssi: number
    readonly txPower: number
    /* Properties of NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Properties of NMClient.Object */
    /* Fields of NMClient.DeviceWimax */
    parent: Device
    /* Fields of NMClient.Device */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.DeviceWimax */
    getActiveNsp(): WimaxNsp
    getBsid(): string
    getCenterFrequency(): number
    getCinr(): number
    getHwAddress(): string
    getNspByPath(path: string): WimaxNsp
    getNsps(): WimaxNsp[]
    getRssi(): number
    getTxPower(): number
    /* Methods of NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.DeviceWimax */
    vfuncNspAdded?(nsp: WimaxNsp): void
    vfuncNspRemoved?(nsp: WimaxNsp): void
    /* Virtual methods of NMClient.Device */
    vfuncConnectionCompatible?(connection: NetworkManager.Connection): boolean
    vfuncGetHwAddress?(): string
    vfuncGetSettingType?(): GObject.Type
    vfuncGetTypeDescription?(): string
    vfuncStateChanged?(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.DeviceWimax */
    connect(sigName: "nsp-added", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    connect_after(sigName: "nsp-added", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    emit(sigName: "nsp-added", nsp: GObject.Object): void
    on(sigName: "nsp-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "nsp-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "nsp-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "nsp-removed", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    connect_after(sigName: "nsp-removed", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    emit(sigName: "nsp-removed", nsp: GObject.Object): void
    on(sigName: "nsp-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "nsp-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "nsp-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceWimax, newState: number, oldState: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceWimax, newState: number, oldState: number, reason: number) => void)): number
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceWimax, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceWimax, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-nsp", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-nsp", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bsid", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bsid", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-frequency", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-frequency", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cinr", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cinr", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nsps", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nsps", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rssi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rssi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tx-power", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceWimax_ConstructProps)
    _init (config?: DeviceWimax_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): DeviceWimax
    static $gtype: GObject.Type
}
export interface IP4Config_ConstructProps extends Object_ConstructProps {
}
export class IP4Config {
    /* Properties of NMClient.IP4Config */
    readonly addresses: object
    readonly domains: any
    readonly gateway: string
    readonly nameservers: any
    readonly routes: object
    readonly searches: any
    readonly winsServers: any
    /* Properties of NMClient.Object */
    /* Fields of NMClient.IP4Config */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.IP4Config */
    getAddresses(): NetworkManager.IP4Address[]
    getDomains(): string[]
    getGateway(): string
    getNameservers(): number[]
    getRoutes(): NetworkManager.IP4Route[]
    getSearches(): string[]
    getWinsServers(): number[]
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: IP4Config, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: IP4Config, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::addresses", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::addresses", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domains", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domains", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nameservers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nameservers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::routes", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::routes", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searches", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searches", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wins-servers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wins-servers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IP4Config_ConstructProps)
    _init (config?: IP4Config_ConstructProps): void
    static new(connection: DBusGLib.Connection, objectPath: string): IP4Config
    static $gtype: GObject.Type
}
export interface IP6Config_ConstructProps extends Object_ConstructProps {
}
export class IP6Config {
    /* Properties of NMClient.IP6Config */
    readonly addresses: any
    readonly domains: any
    readonly gateway: string
    readonly nameservers: any
    readonly routes: any
    readonly searches: any
    /* Properties of NMClient.Object */
    /* Fields of NMClient.IP6Config */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.IP6Config */
    getAddresses(): NetworkManager.IP6Address[]
    getDomains(): string[]
    getGateway(): string
    getNameserver(idx: number): any
    getNumNameservers(): number
    getRoutes(): NetworkManager.IP6Route[]
    getSearches(): string[]
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: IP6Config, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: IP6Config, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::addresses", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::addresses", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domains", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domains", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nameservers", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nameservers", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::routes", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::routes", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searches", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searches", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IP6Config_ConstructProps)
    _init (config?: IP6Config_ConstructProps): void
    static new(connection: DBusGLib.Connection, objectPath: string): IP6Config
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    dbusPath?: string
}
export class Object {
    /* Properties of NMClient.Object */
    /* Fields of NMClient.Object */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: Object, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: Object, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface RemoteConnection_ConstructProps extends NetworkManager.Connection_ConstructProps {
    dbusPath?: string
}
export class RemoteConnection {
    /* Properties of NMClient.RemoteConnection */
    readonly unsaved: boolean
    /* Properties of NetworkManager.Connection */
    path: string
    /* Fields of NMClient.RemoteConnection */
    parent: NetworkManager.Connection
    /* Fields of NetworkManager.Connection */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.RemoteConnection */
    commitChanges(callback?: RemoteConnectionResultFunc | null): void
    commitChangesUnsaved(callback?: RemoteConnectionResultFunc | null): void
    delete(callback?: RemoteConnectionResultFunc | null): void
    getSecrets(settingName: string, callback: RemoteConnectionGetSecretsFunc): void
    getUnsaved(): boolean
    save(callback?: RemoteConnectionResultFunc | null): void
    /* Methods of NetworkManager.Connection */
    addSetting(setting: NetworkManager.Setting): void
    clearSecrets(): void
    clearSecretsWithFlags(func: NetworkManager.SettingClearSecretsWithFlagsFn): void
    compare(b: NetworkManager.Connection, flags: NetworkManager.SettingCompareFlags): boolean
    diff(b: NetworkManager.Connection, flags: NetworkManager.SettingCompareFlags, outSettings: GLib.HashTable): boolean
    dump(): void
    duplicate(): NetworkManager.Connection
    forEachSettingValue(func: NetworkManager.SettingValueIterFn): void
    getConnectionType(): string
    getId(): string
    getInterfaceName(): string
    getPath(): string
    getSetting(settingType: GObject.Type): NetworkManager.Setting
    getSetting8021x(): NetworkManager.Setting8021x
    getSettingAdsl(): NetworkManager.SettingAdsl
    getSettingBluetooth(): NetworkManager.SettingBluetooth
    getSettingBond(): NetworkManager.SettingBond
    getSettingBridge(): NetworkManager.SettingBridge
    getSettingBridgePort(): NetworkManager.SettingBridgePort
    getSettingByName(name: string): NetworkManager.Setting
    getSettingCdma(): NetworkManager.SettingCdma
    getSettingConnection(): NetworkManager.SettingConnection
    getSettingDcb(): NetworkManager.SettingDcb
    getSettingGeneric(): NetworkManager.SettingGeneric
    getSettingGsm(): NetworkManager.SettingGsm
    getSettingInfiniband(): NetworkManager.SettingInfiniband
    getSettingIp4Config(): NetworkManager.SettingIP4Config
    getSettingIp6Config(): NetworkManager.SettingIP6Config
    getSettingOlpcMesh(): NetworkManager.SettingOlpcMesh
    getSettingPpp(): NetworkManager.SettingPPP
    getSettingPppoe(): NetworkManager.SettingPPPOE
    getSettingSerial(): NetworkManager.SettingSerial
    getSettingTeam(): NetworkManager.SettingTeam
    getSettingTeamPort(): NetworkManager.SettingTeamPort
    getSettingVlan(): NetworkManager.SettingVlan
    getSettingVpn(): NetworkManager.SettingVPN
    getSettingWimax(): NetworkManager.SettingWimax
    getSettingWired(): NetworkManager.SettingWired
    getSettingWireless(): NetworkManager.SettingWireless
    getSettingWirelessSecurity(): NetworkManager.SettingWirelessSecurity
    getUuid(): string
    getVirtualDeviceDescription(): string
    getVirtualIfaceName(): string
    isType(type: string): boolean
    needSecrets(): [ /* returnType */ string, /* hints */ string[] | null ]
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    removeSetting(settingType: GObject.Type): void
    replaceSettings(newSettings: GLib.HashTable): boolean
    replaceSettingsFromConnection(newConnection: NetworkManager.Connection): boolean
    setPath(path: string): void
    toHash(flags: NetworkManager.SettingHashFlags): GLib.HashTable
    updateSecrets(settingName: string, secrets: GLib.HashTable): boolean
    verify(): boolean
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
    /* Virtual methods of NMClient.RemoteConnection */
    vfuncRemoved?(): void
    vfuncUpdated?(newSettings: GLib.HashTable): void
    /* Virtual methods of NetworkManager.Connection */
    vfuncSecretsUpdated?(setting: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.RemoteConnection */
    connect(sigName: "removed", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "removed", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "removed"): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "updated", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "updated", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "updated"): void
    on(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible", callback: (($obj: RemoteConnection, object: boolean) => void)): number
    connect_after(sigName: "visible", callback: (($obj: RemoteConnection, object: boolean) => void)): number
    emit(sigName: "visible", object: boolean): void
    on(sigName: "visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NetworkManager.Connection */
    connect(sigName: "changed", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "secrets-cleared", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "secrets-cleared", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "secrets-cleared"): void
    on(sigName: "secrets-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "secrets-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "secrets-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "secrets-updated", callback: (($obj: RemoteConnection, settingName: string) => void)): number
    connect_after(sigName: "secrets-updated", callback: (($obj: RemoteConnection, settingName: string) => void)): number
    emit(sigName: "secrets-updated", settingName: string): void
    on(sigName: "secrets-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "secrets-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "secrets-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unsaved", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsaved", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteConnection_ConstructProps)
    _init (config?: RemoteConnection_ConstructProps): void
    static new(bus: DBusGLib.Connection, path: string): RemoteConnection
    static $gtype: GObject.Type
}
export interface RemoteSettings_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteSettings {
    /* Properties of NMClient.RemoteSettings */
    readonly canModify: boolean
    readonly hostname: string
    readonly serviceRunning: boolean
    /* Fields of NMClient.RemoteSettings */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.RemoteSettings */
    addConnection(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    addConnectionUnsaved(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    getConnectionById(id: string): RemoteConnection
    getConnectionByPath(path: string): RemoteConnection
    getConnectionByUuid(uuid: string): RemoteConnection
    listConnections(): RemoteConnection[]
    loadConnections(filenames: string): [ /* returnType */ boolean, /* failures */ string ]
    reloadConnections(): boolean
    saveHostname(hostname: string, callback?: RemoteSettingsSaveHostnameFunc | null): boolean
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
    /* Virtual methods of NMClient.RemoteSettings */
    vfuncConnectionsRead?(): void
    vfuncNewConnection?(connection: RemoteConnection): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.RemoteSettings */
    connect(sigName: "connections-read", callback: (($obj: RemoteSettings) => void)): number
    connect_after(sigName: "connections-read", callback: (($obj: RemoteSettings) => void)): number
    emit(sigName: "connections-read"): void
    on(sigName: "connections-read", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connections-read", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connections-read", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-connection", callback: (($obj: RemoteSettings, object: GObject.Object) => void)): number
    connect_after(sigName: "new-connection", callback: (($obj: RemoteSettings, object: GObject.Object) => void)): number
    emit(sigName: "new-connection", object: GObject.Object): void
    on(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-modify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-modify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hostname", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-running", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-running", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteSettings_ConstructProps)
    _init (config?: RemoteSettings_ConstructProps): void
    static new(bus?: DBusGLib.Connection | null): RemoteSettings
    static newFinish(result: Gio.AsyncResult): RemoteSettings
    static newAsync(bus?: DBusGLib.Connection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface SecretAgent_ConstructProps extends GObject.Object_ConstructProps {
    autoRegister?: boolean
    capabilities?: SecretAgentCapabilities
    identifier?: string
}
export class SecretAgent {
    /* Properties of NMClient.SecretAgent */
    autoRegister: boolean
    capabilities: SecretAgentCapabilities
    readonly registered: boolean
    /* Fields of NMClient.SecretAgent */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.SecretAgent */
    deleteSecrets(connection: NetworkManager.Connection, callback: SecretAgentDeleteSecretsFunc): void
    getRegistered(): boolean
    getSecrets(connection: NetworkManager.Connection, settingName: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    register(): boolean
    saveSecrets(connection: NetworkManager.Connection, callback: SecretAgentSaveSecretsFunc): void
    unregister(): boolean
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
    /* Virtual methods of NMClient.SecretAgent */
    vfuncCancelGetSecrets?(connectionPath: string, settingName: string): void
    vfuncDeleteSecrets?(connection: NetworkManager.Connection, connectionPath: string, callback: SecretAgentDeleteSecretsFunc): void
    vfuncGetSecrets?(connection: NetworkManager.Connection, connectionPath: string, settingName: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    vfuncRegistrationResult?(error: GLib.Error): void
    vfuncSaveSecrets?(connection: NetworkManager.Connection, connectionPath: string, callback: SecretAgentSaveSecretsFunc): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.SecretAgent */
    connect(sigName: "registration-result", callback: (($obj: SecretAgent, error?: object | null) => void)): number
    connect_after(sigName: "registration-result", callback: (($obj: SecretAgent, error?: object | null) => void)): number
    emit(sigName: "registration-result", error?: object | null): void
    on(sigName: "registration-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "registration-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "registration-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-register", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-register", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registered", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registered", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SecretAgent_ConstructProps)
    _init (config?: SecretAgent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VPNConnection_ConstructProps extends ActiveConnection_ConstructProps {
}
export class VPNConnection {
    /* Properties of NMClient.VPNConnection */
    readonly banner: string
    readonly vpnState: number
    /* Properties of NMClient.ActiveConnection */
    readonly connection: string
    readonly "default": boolean
    readonly default6: boolean
    readonly devices: any
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly id: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly master: string
    readonly specificObject: string
    readonly state: number
    readonly type: string
    readonly uuid: string
    readonly vpn: boolean
    /* Properties of NMClient.Object */
    /* Fields of NMClient.VPNConnection */
    parent: ActiveConnection
    /* Fields of NMClient.ActiveConnection */
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.VPNConnection */
    getBanner(): string
    getVpnState(): NetworkManager.VPNConnectionState
    /* Methods of NMClient.ActiveConnection */
    getConnection(): string
    getConnectionType(): string
    getDefault(): boolean
    getDefault6(): boolean
    getDevices(): Device[]
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getId(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getMaster(): string
    getSpecificObject(): string
    getState(): NetworkManager.ActiveConnectionState
    getUuid(): string
    getVpn(): boolean
    /* Methods of NMClient.Object */
    getPath(): string
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
    /* Virtual methods of NMClient.VPNConnection */
    vfuncVpnStateChanged?(state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason): void
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.VPNConnection */
    connect(sigName: "vpn-state-changed", callback: (($obj: VPNConnection, object: number, p0: number) => void)): number
    connect_after(sigName: "vpn-state-changed", callback: (($obj: VPNConnection, object: number, p0: number) => void)): number
    emit(sigName: "vpn-state-changed", object: number, p0: number): void
    on(sigName: "vpn-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vpn-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vpn-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: VPNConnection, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: VPNConnection, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::banner", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::banner", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpn-state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn-state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default6", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default6", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devices", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::specific-object", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specific-object", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpn", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VPNConnection_ConstructProps)
    _init (config?: VPNConnection_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): VPNConnection
    static $gtype: GObject.Type
}
export interface WimaxNsp_ConstructProps extends Object_ConstructProps {
}
export class WimaxNsp {
    /* Properties of NMClient.WimaxNsp */
    readonly name: string
    readonly networkType: number
    readonly signalQuality: number
    /* Properties of NMClient.Object */
    /* Fields of NMClient.WimaxNsp */
    parent: Object
    /* Fields of NMClient.Object */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient.WimaxNsp */
    connectionValid(connection: NetworkManager.Connection): boolean
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getName(): string
    getNetworkType(): WimaxNspNetworkType
    getSignalQuality(): number
    /* Methods of NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Virtual methods of NMClient.Object */
    vfuncObjectCreationFailed?(error: GLib.Error, failedPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: WimaxNsp, error?: object | null, failedPath?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: WimaxNsp, error?: object | null, failedPath?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    on(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-type", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signal-quality", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WimaxNsp_ConstructProps)
    _init (config?: WimaxNsp_ConstructProps): void
    static new(connection: DBusGLib.Connection, path: string): WimaxNsp
    static $gtype: GObject.Type
}
export abstract class AccessPointClass {
    /* Fields of NMClient.AccessPointClass */
    parent: ObjectClass
    static name: string
}
export abstract class ActiveConnectionClass {
    /* Fields of NMClient.ActiveConnectionClass */
    parent: ObjectClass
    static name: string
}
export abstract class ClientClass {
    /* Fields of NMClient.ClientClass */
    parent: ObjectClass
    deviceAdded: any
    deviceRemoved: any
    permissionChanged: any
    static name: string
}
export abstract class DHCP4ConfigClass {
    /* Fields of NMClient.DHCP4ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class DHCP6ConfigClass {
    /* Fields of NMClient.DHCP6ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class DeviceAdslClass {
    /* Fields of NMClient.DeviceAdslClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceBondClass {
    /* Fields of NMClient.DeviceBondClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceBridgeClass {
    /* Fields of NMClient.DeviceBridgeClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceBtClass {
    /* Fields of NMClient.DeviceBtClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceClass {
    /* Fields of NMClient.DeviceClass */
    parent: ObjectClass
    stateChanged: any
    connectionCompatible: any
    getTypeDescription: any
    getHwAddress: any
    getSettingType: any
    static name: string
}
export abstract class DeviceEthernetClass {
    /* Fields of NMClient.DeviceEthernetClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceGenericClass {
    /* Fields of NMClient.DeviceGenericClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceInfinibandClass {
    /* Fields of NMClient.DeviceInfinibandClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceModemClass {
    /* Fields of NMClient.DeviceModemClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceOlpcMeshClass {
    /* Fields of NMClient.DeviceOlpcMeshClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceTeamClass {
    /* Fields of NMClient.DeviceTeamClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceVlanClass {
    /* Fields of NMClient.DeviceVlanClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceWifiClass {
    /* Fields of NMClient.DeviceWifiClass */
    parent: DeviceClass
    accessPointAdded: any
    accessPointRemoved: any
    static name: string
}
export abstract class DeviceWimaxClass {
    /* Fields of NMClient.DeviceWimaxClass */
    parent: DeviceClass
    nspAdded: any
    nspRemoved: any
    static name: string
}
export abstract class IP4ConfigClass {
    /* Fields of NMClient.IP4ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class IP6ConfigClass {
    /* Fields of NMClient.IP6ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of NMClient.ObjectClass */
    parent: GObject.ObjectClass
    objectCreationFailed: any
    static name: string
}
export abstract class RemoteConnectionClass {
    /* Fields of NMClient.RemoteConnectionClass */
    parentClass: NetworkManager.ConnectionClass
    updated: any
    removed: any
    static name: string
}
export abstract class RemoteSettingsClass {
    /* Fields of NMClient.RemoteSettingsClass */
    parent: GObject.ObjectClass
    newConnection: any
    connectionsRead: any
    static name: string
}
export abstract class SecretAgentClass {
    /* Fields of NMClient.SecretAgentClass */
    parent: GObject.ObjectClass
    getSecrets: any
    cancelGetSecrets: any
    saveSecrets: any
    deleteSecrets: any
    registrationResult: any
    static name: string
}
export abstract class VPNConnectionClass {
    /* Fields of NMClient.VPNConnectionClass */
    parent: ActiveConnectionClass
    vpnStateChanged: any
    static name: string
}
export abstract class WimaxNspClass {
    /* Fields of NMClient.WimaxNspClass */
    parent: ObjectClass
    static name: string
}
type RemoteConnectionCommitFunc = RemoteConnectionResultFunc
type RemoteConnectionDeleteFunc = RemoteConnectionResultFunc
}