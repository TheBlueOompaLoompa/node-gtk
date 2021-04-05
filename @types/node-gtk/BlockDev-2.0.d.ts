/**
 * BlockDev-2.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace BlockDev {

export enum BtrfsError {
    DEVICE,
    PARSE,
    TECH_UNAVAIL,
}
export enum BtrfsTech {
    FS,
    MULTI_DEV,
    SUBVOL,
    SNAPSHOT,
}
export enum CryptoError {
    DEVICE,
    STATE,
    INVALID_SPEC,
    FORMAT_FAILED,
    RESIZE_FAILED,
    RESIZE_PERM,
    ADD_KEY,
    REMOVE_KEY,
    NO_KEY,
    KEY_SLOT,
    NSS_INIT_FAILED,
    CERT_DECODE,
    ESCROW_FAILED,
    INVALID_PARAMS,
    TECH_UNAVAIL,
}
export enum CryptoLUKSVersion {
    LUKS1,
    LUKS2,
}
export enum CryptoTech {
    LUKS,
    LUKS2,
    TRUECRYPT,
    ESCROW,
    INTEGRITY,
    BITLK,
}
export enum DMError {
    SYS,
    NOT_ROOT,
    TASK,
    RAID_FAIL,
    RAID_NO_DEVS,
    TECH_UNAVAIL,
}
export enum DMTech {
    MAP,
    RAID,
}
export enum FSTech {
    GENERIC,
    MOUNT,
    EXT2,
    EXT3,
    EXT4,
    XFS,
    VFAT,
    NTFS,
}
export enum FsError {
    INVAL,
    PARSE,
    FAIL,
    NOFS,
    PIPE,
    UNMOUNT_FAIL,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    AUTH,
    TECH_UNAVAIL,
}
export enum InitError {
    PLUGINS_FAILED,
    NOT_IMPLEMENTED,
    FAILED,
}
export enum KBDBcacheMode {
    WRITETHROUGH,
    WRITEBACK,
    WRITEAROUND,
    NONE,
    UNKNOWN,
}
export enum KBDError {
    INVAL,
    KMOD_INIT_FAIL,
    MODULE_FAIL,
    MODULE_NOEXIST,
    ZRAM_NOEXIST,
    ZRAM_INVAL,
    BCACHE_PARSE,
    BCACHE_SETUP_FAIL,
    BCACHE_DETACH_FAIL,
    BCACHE_NOT_ATTACHED,
    BCACHE_UUID,
    BCACHE_MODE_FAIL,
    BCACHE_MODE_INVAL,
    BCACHE_NOEXIST,
    BCACHE_INVAL,
    TECH_UNAVAIL,
}
export enum KBDTech {
    ZRAM,
    BCACHE,
}
export enum LVMCacheMode {
    WRITETHROUGH,
    WRITEBACK,
    UNKNOWN,
}
export enum LVMError {
    PARSE,
    NOEXIST,
    DM_ERROR,
    NOT_ROOT,
    CACHE_INVAL,
    CACHE_NOCACHE,
    TECH_UNAVAIL,
    FAIL,
    NOT_SUPPORTED,
    VDO_POLICY_INVAL,
}
export enum LVMTech {
    BASIC,
    BASIC_SNAP,
    THIN,
    CACHE,
    CALCS,
    THIN_CALCS,
    CACHE_CALCS,
    GLOB_CONF,
    VDO,
}
export enum LVMVDOCompressionState {
    ONLINE,
    OFFLINE,
    UNKNOWN,
}
export enum LVMVDOIndexState {
    ERROR,
    CLOSED,
    OPENING,
    CLOSING,
    OFFLINE,
    ONLINE,
    UNKNOWN,
}
export enum LVMVDOOperatingMode {
    RECOVERING,
    READ_ONLY,
    NORMAL,
    UNKNOWN,
}
export enum LVMVDOWritePolicy {
    AUTO,
    SYNC,
    ASYNC,
    UNKNOWN,
}
export enum LoopError {
    DEVICE,
    FAIL,
    TECH_UNAVAIL,
}
export enum LoopTech {
    LOOP_TECH_LOOP,
}
export enum MDError {
    PARSE,
    BAD_FORMAT,
    NO_MATCH,
    INVAL,
    FAIL,
    TECH_UNAVAIL,
}
export enum MDTech {
    MD_TECH_MDRAID,
}
export enum MpathError {
    FLUSH,
    NOT_ROOT,
    DM_ERROR,
    INVAL,
    TECH_UNAVAIL,
}
export enum MpathTech {
    BASE,
    FRIENDLY_NAMES,
}
export enum NVDIMMError {
    PARSE,
    FAIL,
    NOEXIST,
    MODE_INVAL,
}
export enum NVDIMMNamespaceMode {
    RAW,
    SECTOR,
    MEMORY,
    DAX,
    FSDAX,
    DEVDAX,
    UNKNOWN,
}
export enum NVDIMMTech {
    NVDIMM_TECH_NAMESPACE,
}
export enum PartAlign {
    MINIMAL,
    OPTIMAL,
    NONE,
}
export enum PartDiskFlag {
    PART_DISK_FLAG_GPT_PMBR_BOOT,
}
export enum PartError {
    EXISTS,
    INVAL,
    FAIL,
    TECH_UNAVAIL,
}
export enum PartTableType {
    MSDOS,
    GPT,
    UNDEF,
}
export enum PartTech {
    MBR,
    GPT,
}
export enum PartType {
    NORMAL,
    LOGICAL,
    EXTENDED,
    FREESPACE,
    METADATA,
    PROTECTED,
}
export enum PartTypeReq {
    NORMAL,
    LOGICAL,
    EXTENDED,
    NEXT,
}
export enum Plugin {
    LVM,
    BTRFS,
    SWAP,
    LOOP,
    CRYPTO,
    MPATH,
    DM,
    MDRAID,
    KBD,
    S390,
    PART,
    FS,
    NVDIMM,
    VDO,
    UNDEF,
}
export enum SwapError {
    UNKNOWN_STATE,
    ACTIVATE,
    TECH_UNAVAIL,
    ACTIVATE_OLD,
    ACTIVATE_SUSPEND,
    ACTIVATE_UNKNOWN,
    ACTIVATE_PAGESIZE,
}
export enum SwapTech {
    SWAP_TECH_SWAP,
}
export enum UtilsDBusError {
    FAIL,
    NOEXIST,
}
export enum UtilsDevUtilsError {
    UTILS_DEV_UTILS_ERROR_FAILED,
}
export enum UtilsExecError {
    FAILED,
    NOOUT,
    INVAL_VER,
    UTIL_UNAVAILABLE,
    UTIL_UNKNOWN_VER,
    UTIL_LOW_VER,
    UTIL_CHECK_ERROR,
    UTIL_FEATURE_CHECK_ERROR,
    UTIL_FEATURE_UNAVAILABLE,
}
export enum UtilsModuleError {
    KMOD_INIT_FAIL,
    FAIL,
    NOEXIST,
    MODULE_CHECK_ERROR,
    INVALID_PLATFORM,
}
export enum UtilsProgStatus {
    STARTED,
    PROGRESS,
    FINISHED,
}
export enum VDOError {
    VDO_ERROR_FAIL,
}
export enum VDOTech {
    VDO_TECH_VDO,
}
export enum VDOWritePolicy {
    SYNC,
    ASYNC,
    AUTO,
    UNKNOWN,
}
export enum BtrfsTechMode {
    CREATE,
    DELETE,
    MODIFY,
    QUERY,
}
export enum CryptoTechMode {
    CREATE,
    OPEN_CLOSE,
    QUERY,
    ADD_KEY,
    REMOVE_KEY,
    RESIZE,
    SUSPEND_RESUME,
    BACKUP_RESTORE,
}
export enum DMTechMode {
    CREATE_ACTIVATE,
    REMOVE_DEACTIVATE,
    QUERY,
}
export enum FSTechMode {
    MKFS,
    WIPE,
    CHECK,
    REPAIR,
    SET_LABEL,
    QUERY,
    RESIZE,
}
export enum FsResizeFlags {
    OFFLINE_SHRINK,
    OFFLINE_GROW,
    ONLINE_SHRINK,
    ONLINE_GROW,
}
export enum KBDTechMode {
    CREATE,
    DESTROY,
    MODIFY,
    QUERY,
}
export enum LVMCachePoolFlags {
    STRIPED,
    RAID1,
    RAID5,
    RAID6,
    RAID10,
    META_STRIPED,
    META_RAID1,
    META_RAID5,
    META_RAID6,
    META_RAID10,
}
export enum LVMTechMode {
    CREATE,
    REMOVE,
    MODIFY,
    QUERY,
}
export enum LoopTechMode {
    CREATE,
    DESTROY,
    MODIFY,
    QUERY,
}
export enum MDTechMode {
    CREATE,
    DELETE,
    MODIFY,
    QUERY,
}
export enum MpathTechMode {
    QUERY,
    MODIFY,
}
export enum NVDIMMTechMode {
    CREATE,
    REMOVE,
    ACTIVATE_DEACTIVATE,
    QUERY,
    RECONFIGURE,
}
export enum PartFlag {
    BOOT,
    ROOT,
    SWAP,
    HIDDEN,
    RAID,
    LVM,
    LBA,
    HPSERVICE,
    CPALO,
    PREP,
    MSFT_RESERVED,
    BIOS_GRUB,
    APPLE_TV_RECOVERY,
    DIAG,
    LEGACY_BOOT,
    MSFT_DATA,
    IRST,
    ESP,
    GPT_SYSTEM_PART,
    GPT_READ_ONLY,
    GPT_HIDDEN,
    GPT_NO_AUTOMOUNT,
}
export enum PartTechMode {
    CREATE_TABLE,
    MODIFY_TABLE,
    QUERY_TABLE,
    MODIFY_PART,
    QUERY_PART,
}
export enum SwapTechMode {
    CREATE,
    ACTIVATE_DEACTIVATE,
    QUERY,
    SET_LABEL,
}
export enum VDOTechMode {
    CREATE,
    REMOVE,
    MODIFY,
    ACTIVATE_DEACTIVATE,
    START_STOP,
    QUERY,
    GROW,
}
export const BTRFS_MAIN_VOLUME_ID: number
export const BTRFS_MIN_MEMBER_SIZE: number
export const CRYPTO_LUKS_METADATA_SIZE: number
export const LVM_DEFAULT_CHUNK_SIZE: number
export const LVM_DEFAULT_PE_SIZE: number
export const LVM_DEFAULT_PE_START: number
export const LVM_MAX_LV_SIZE: number
export const LVM_MAX_PE_SIZE: number
export const LVM_MAX_THPOOL_CHUNK_SIZE: number
export const LVM_MAX_THPOOL_MD_SIZE: number
export const LVM_MIN_CACHE_MD_SIZE: number
export const LVM_MIN_PE_SIZE: number
export const LVM_MIN_THPOOL_CHUNK_SIZE: number
export const LVM_MIN_THPOOL_MD_SIZE: number
export const MD_CHUNK_SIZE: number
export const MD_SUPERBLOCK_SIZE: number
export function btrfsAddDevice(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean
export function btrfsChangeLabel(mountpoint: string, label: string, extra?: ExtraArg[] | null): boolean
export function btrfsCheck(device: string, extra?: ExtraArg[] | null): boolean
export function btrfsCreateSnapshot(source: string, dest: string, ro: boolean, extra?: ExtraArg[] | null): boolean
export function btrfsCreateSubvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean
export function btrfsCreateVolume(devices: string[], label?: string | null, dataLevel?: string | null, mdLevel?: string | null, extra?: ExtraArg[] | null): boolean
export function btrfsDeleteSubvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean
export function btrfsErrorQuark(): GLib.Quark
export function btrfsFilesystemInfo(device: string): BtrfsFilesystemInfo
export function btrfsGetDefaultSubvolumeId(mountpoint: string): number
export function btrfsIsTechAvail(tech: BtrfsTech, mode: number): boolean
export function btrfsListDevices(device: string): BtrfsDeviceInfo[]
export function btrfsListSubvolumes(mountpoint: string, snapshotsOnly: boolean): BtrfsSubvolumeInfo[]
export function btrfsMkfs(devices: string[], label?: string | null, dataLevel?: string | null, mdLevel?: string | null, extra?: ExtraArg[] | null): boolean
export function btrfsRemoveDevice(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean
export function btrfsRepair(device: string, extra?: ExtraArg[] | null): boolean
export function btrfsResize(mountpoint: string, size: number, extra?: ExtraArg[] | null): boolean
export function btrfsSetDefaultSubvolume(mountpoint: string, subvolId: number, extra?: ExtraArg[] | null): boolean
export function cryptoBitlkClose(bitlkDevice: string): boolean
export function cryptoBitlkOpen(device: string, name: string, passData: any, readOnly: boolean): boolean
export function cryptoDeviceIsLuks(device: string): boolean
export function cryptoDeviceSeemsEncrypted(device: string): boolean
export function cryptoErrorQuark(): GLib.Quark
export function cryptoEscrowDevice(device: string, passphrase: string, certData: number[], directory: string, backupPassphrase?: string | null): boolean
export function cryptoGenerateBackupPassphrase(): string
export function cryptoIntegrityInfo(device: string): CryptoIntegrityInfo
export function cryptoIsTechAvail(tech: CryptoTech, mode: number): boolean
export function cryptoLuksAddKey(device: string, pass?: string | null, keyFile?: string | null, npass?: string | null, nkeyFile?: string | null): boolean
export function cryptoLuksAddKeyBlob(device: string, passData: any, npassData: any): boolean
export function cryptoLuksChangeKey(device: string, pass: string, npass: string): boolean
export function cryptoLuksChangeKeyBlob(device: string, passData: any, npassData: any): boolean
export function cryptoLuksClose(luksDevice: string): boolean
export function cryptoLuksFormat(device: string, cipher: string | null, keySize: number, passphrase: string | null, keyFile: string | null, minEntropy: number): boolean
export function cryptoLuksFormatBlob(device: string, cipher: string | null, keySize: number, passData: any, minEntropy: number): boolean
export function cryptoLuksFormatLuks2(device: string, cipher: string | null, keySize: number, passphrase: string | null, keyFile: string | null, minEntropy: number, luksVersion: CryptoLUKSVersion, extra?: CryptoLUKSExtra | null): boolean
export function cryptoLuksFormatLuks2Blob(device: string, cipher: string | null, keySize: number, passData: any, minEntropy: number, luksVersion: CryptoLUKSVersion, extra?: CryptoLUKSExtra | null): boolean
export function cryptoLuksGetMetadataSize(device: string): number
export function cryptoLuksHeaderBackup(device: string, backupFile: string): boolean
export function cryptoLuksHeaderRestore(device: string, backupFile: string): boolean
export function cryptoLuksInfo(luksDevice: string): CryptoLUKSInfo
export function cryptoLuksKillSlot(device: string, slot: number): boolean
export function cryptoLuksOpen(device: string, name: string, passphrase: string | null, keyFile: string | null, readOnly: boolean): boolean
export function cryptoLuksOpenBlob(device: string, name: string, passData: any, readOnly: boolean): boolean
export function cryptoLuksRemoveKey(device: string, pass?: string | null, keyFile?: string | null): boolean
export function cryptoLuksRemoveKeyBlob(device: string, passData: any): boolean
export function cryptoLuksResize(luksDevice: string, size: number): boolean
export function cryptoLuksResizeLuks2(luksDevice: string, size: number, passphrase?: string | null, keyFile?: string | null): boolean
export function cryptoLuksResizeLuks2Blob(luksDevice: string, size: number, passData: any): boolean
export function cryptoLuksResume(luksDevice: string, passphrase?: string | null, keyFile?: string | null): boolean
export function cryptoLuksResumeBlob(luksDevice: string, passData: any): boolean
export function cryptoLuksStatus(luksDevice: string): string
export function cryptoLuksSuspend(luksDevice: string): boolean
export function cryptoLuksUuid(device: string): string
export function cryptoTcClose(tcDevice: string): boolean
export function cryptoTcOpen(device: string, name: string, passData: any, readOnly: boolean): boolean
export function cryptoTcOpenFull(device: string, name: string, passData: any, keyfiles: string[] | null, hidden: boolean, system: boolean, veracrypt: boolean, veracryptPim: number, readOnly: boolean): boolean
export function dmActivateRaidSet(name: string): boolean
export function dmCreateLinear(mapName: string, device: string, length: number, uuid?: string | null): boolean
export function dmDeactivateRaidSet(name: string): boolean
export function dmErrorQuark(): GLib.Quark
export function dmGetMemberRaidSets(name: string | null, uuid: string | null, major: number, minor: number): string[]
export function dmGetRaidSetType(name: string): string
export function dmGetSubsystemFromName(deviceName: string): string
export function dmIsTechAvail(tech: DMTech, mode: number): boolean
export function dmMapExists(mapName: string, liveOnly: boolean, activeOnly: boolean): boolean
export function dmNameFromNode(dmNode: string): string
export function dmNodeFromName(mapName: string): string
export function dmRemove(mapName: string): boolean
export function ensureInit(requirePlugins?: PluginSpec[] | null, logFunc?: UtilsLogFunc | null): boolean
export function fsCanCheck(type: string): [ /* returnType */ boolean, /* requiredUtility */ string ]
export function fsCanRepair(type: string): [ /* returnType */ boolean, /* requiredUtility */ string ]
export function fsCanResize(type: string): [ /* returnType */ boolean, /* mode */ FsResizeFlags, /* requiredUtility */ string ]
export function fsCanSetLabel(type: string): [ /* returnType */ boolean, /* requiredUtility */ string ]
export function fsCheck(device: string): boolean
export function fsClean(device: string): boolean
export function fsErrorQuark(): GLib.Quark
export function fsExt2Check(device: string, extra?: ExtraArg[] | null): boolean
export function fsExt2GetInfo(device: string): FSExt2Info
export function fsExt2Mkfs(device: string, extra?: ExtraArg[] | null): boolean
export function fsExt2Repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean
export function fsExt2Resize(device: string, newSize: number, extra?: ExtraArg[] | null): boolean
export function fsExt2SetLabel(device: string, label: string): boolean
export function fsExt2Wipe(device: string): boolean
export function fsExt3Check(device: string, extra?: ExtraArg[] | null): boolean
export function fsExt3GetInfo(device: string): FSExt3Info
export function fsExt3Mkfs(device: string, extra?: ExtraArg[] | null): boolean
export function fsExt3Repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean
export function fsExt3Resize(device: string, newSize: number, extra?: ExtraArg[] | null): boolean
export function fsExt3SetLabel(device: string, label: string): boolean
export function fsExt3Wipe(device: string): boolean
export function fsExt4Check(device: string, extra?: ExtraArg[] | null): boolean
export function fsExt4GetInfo(device: string): FSExt4Info
export function fsExt4Mkfs(device: string, extra?: ExtraArg[] | null): boolean
export function fsExt4Repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean
export function fsExt4Resize(device: string, newSize: number, extra?: ExtraArg[] | null): boolean
export function fsExt4SetLabel(device: string, label: string): boolean
export function fsExt4Wipe(device: string): boolean
export function fsFreeze(mountpoint: string): boolean
export function fsGetFstype(device: string): string
export function fsGetMountpoint(device: string): string
export function fsIsMountpoint(path: string): boolean
export function fsIsTechAvail(tech: FSTech, mode: number): boolean
export function fsMount(device?: string | null, mountpoint?: string | null, fstype?: string | null, options?: string | null, extra?: ExtraArg[] | null): boolean
export function fsNtfsCheck(device: string): boolean
export function fsNtfsGetInfo(device: string): FSNtfsInfo
export function fsNtfsMkfs(device: string, extra?: ExtraArg[] | null): boolean
export function fsNtfsRepair(device: string): boolean
export function fsNtfsResize(device: string, newSize: number): boolean
export function fsNtfsSetLabel(device: string, label: string): boolean
export function fsNtfsWipe(device: string): boolean
export function fsRepair(device: string): boolean
export function fsResize(device: string, newSize: number): boolean
export function fsSetLabel(device: string, label: string): boolean
export function fsUnfreeze(mountpoint: string): boolean
export function fsUnmount(spec: string, lazy: boolean, force: boolean, extra?: ExtraArg[] | null): boolean
export function fsVfatCheck(device: string, extra?: ExtraArg[] | null): boolean
export function fsVfatGetInfo(device: string): FSVfatInfo
export function fsVfatMkfs(device: string, extra?: ExtraArg[] | null): boolean
export function fsVfatRepair(device: string, extra?: ExtraArg[] | null): boolean
export function fsVfatResize(device: string, newSize: number): boolean
export function fsVfatSetLabel(device: string, label: string): boolean
export function fsVfatWipe(device: string): boolean
export function fsWipe(device: string, all: boolean): boolean
export function fsWipeForce(device: string, all: boolean, force: boolean): boolean
export function fsXfsCheck(device: string): boolean
export function fsXfsGetInfo(device: string): FSXfsInfo
export function fsXfsMkfs(device: string, extra?: ExtraArg[] | null): boolean
export function fsXfsRepair(device: string, extra?: ExtraArg[] | null): boolean
export function fsXfsResize(mpoint: string, newSize: number, extra?: ExtraArg[] | null): boolean
export function fsXfsSetLabel(device: string, label: string): boolean
export function fsXfsWipe(device: string): boolean
export function getAvailablePluginNames(): string[]
export function getPluginName(plugin: Plugin): string
export function getPluginSoname(plugin: Plugin): string
export function init(requirePlugins?: PluginSpec[] | null, logFunc?: UtilsLogFunc | null): boolean
export function isInitialized(): boolean
export function isPluginAvailable(plugin: Plugin): boolean
export function kbdBcacheAttach(cSetUuid: string, bcacheDevice: string): boolean
export function kbdBcacheCreate(backingDevice: string, cacheDevice: string, extra?: ExtraArg[] | null): [ /* returnType */ boolean, /* bcacheDevice */ string | null ]
export function kbdBcacheDestroy(bcacheDevice: string): boolean
export function kbdBcacheDetach(bcacheDevice: string): [ /* returnType */ boolean, /* cSetUuid */ string | null ]
export function kbdBcacheGetBackingDevice(bcacheDevice: string): string
export function kbdBcacheGetCacheDevice(bcacheDevice: string): string
export function kbdBcacheGetMode(bcacheDevice: string): KBDBcacheMode
export function kbdBcacheGetModeFromStr(modeStr: string): KBDBcacheMode
export function kbdBcacheGetModeStr(mode: KBDBcacheMode): string
export function kbdBcacheSetMode(bcacheDevice: string, mode: KBDBcacheMode): boolean
export function kbdBcacheStatus(bcacheDevice: string): KBDBcacheStats
export function kbdErrorQuark(): GLib.Quark
export function kbdIsTechAvail(tech: KBDTech, mode: number): boolean
export function kbdZramAddDevice(size: number, nstreams: number): [ /* returnType */ boolean, /* device */ string | null ]
export function kbdZramCreateDevices(numDevices: number, sizes: number[], nstreams?: number[] | null): boolean
export function kbdZramDestroyDevices(): boolean
export function kbdZramGetStats(device: string): KBDZramStats
export function kbdZramRemoveDevice(device: string): boolean
export function loopErrorQuark(): GLib.Quark
export function loopGetAutoclear(loop: string): boolean
export function loopGetBackingFile(devName: string): string
export function loopGetLoopName(file: string): string
export function loopIsTechAvail(tech: LoopTech, mode: number): boolean
export function loopSetAutoclear(loop: string, autoclear: boolean): boolean
export function loopSetup(file: string, offset: number, size: number, readOnly: boolean, partScan: boolean): [ /* returnType */ boolean, /* loopName */ string | null ]
export function loopSetupFromFd(fd: number, offset: number, size: number, readOnly: boolean, partScan: boolean): [ /* returnType */ boolean, /* loopName */ string | null ]
export function loopTeardown(loop: string): boolean
export function lvmCacheAttach(vgName: string, dataLv: string, cachePoolLv: string, extra?: ExtraArg[] | null): boolean
export function lvmCacheCreateCachedLv(vgName: string, lvName: string, dataSize: number, cacheSize: number, mdSize: number, mode: LVMCacheMode, flags: LVMCachePoolFlags, slowPvs: string[], fastPvs: string[]): boolean
export function lvmCacheCreatePool(vgName: string, poolName: string, poolSize: number, mdSize: number, mode: LVMCacheMode, flags: LVMCachePoolFlags, fastPvs: string[]): boolean
export function lvmCacheDetach(vgName: string, cachedLv: string, destroy: boolean, extra?: ExtraArg[] | null): boolean
export function lvmCacheGetDefaultMdSize(cacheSize: number): number
export function lvmCacheGetModeFromStr(modeStr: string): LVMCacheMode
export function lvmCacheGetModeStr(mode: LVMCacheMode): string
export function lvmCachePoolConvert(vgName: string, dataLv: string, metadataLv: string, name?: string | null, extra?: ExtraArg[] | null): boolean
export function lvmCachePoolName(vgName: string, cachedLv: string): string
export function lvmCacheStats(vgName: string, cachedLv: string): LVMCacheStats
export function lvmDataLvName(vgName: string, lvName: string): string
export function lvmErrorQuark(): GLib.Quark
export function lvmGetGlobalConfig(): string
export function lvmGetLvPhysicalSize(lvSize: number, peSize: number): number
export function lvmGetMaxLvSize(): number
export function lvmGetSupportedPeSizes(): number[]
export function lvmGetThpoolMetaSize(size: number, chunkSize: number, nSnapshots: number): number
export function lvmGetThpoolPadding(size: number, peSize: number, included: boolean): number
export function lvmGetVdoCompressionStateStr(state: LVMVDOCompressionState): string
export function lvmGetVdoIndexStateStr(state: LVMVDOIndexState): string
export function lvmGetVdoOperatingModeStr(mode: LVMVDOOperatingMode): string
export function lvmGetVdoWritePolicyFromStr(policyStr: string): LVMVDOWritePolicy
export function lvmGetVdoWritePolicyStr(policy: LVMVDOWritePolicy): string
export function lvmIsSupportedPeSize(size: number): boolean
export function lvmIsTechAvail(tech: LVMTech, mode: number): boolean
export function lvmIsValidThpoolChunkSize(size: number, discard: boolean): boolean
export function lvmIsValidThpoolMdSize(size: number): boolean
export function lvmLvactivate(vgName: string, lvName: string, ignoreSkip: boolean, extra?: ExtraArg[] | null): boolean
export function lvmLvcreate(vgName: string, lvName: string, size: number, type?: string | null, pvList?: string[] | null, extra?: ExtraArg[] | null): boolean
export function lvmLvdeactivate(vgName: string, lvName: string, extra?: ExtraArg[] | null): boolean
export function lvmLvinfo(vgName: string, lvName: string): LVMLVdata
export function lvmLvorigin(vgName: string, lvName: string): string
export function lvmLvremove(vgName: string, lvName: string, force: boolean, extra?: ExtraArg[] | null): boolean
export function lvmLvrename(vgName: string, lvName: string, newName: string, extra?: ExtraArg[] | null): boolean
export function lvmLvresize(vgName: string, lvName: string, size: number, extra?: ExtraArg[] | null): boolean
export function lvmLvs(vgName?: string | null): LVMLVdata[]
export function lvmLvsnapshotcreate(vgName: string, originName: string, snapshotName: string, size: number, extra?: ExtraArg[] | null): boolean
export function lvmLvsnapshotmerge(vgName: string, snapshotName: string, extra?: ExtraArg[] | null): boolean
export function lvmMetadataLvName(vgName: string, lvName: string): string
export function lvmPvcreate(device: string, dataAlignment: number, metadataSize: number, extra?: ExtraArg[] | null): boolean
export function lvmPvinfo(device: string): LVMPVdata
export function lvmPvmove(src: string, dest?: string | null, extra?: ExtraArg[] | null): boolean
export function lvmPvremove(device: string, extra?: ExtraArg[] | null): boolean
export function lvmPvresize(device: string, size: number, extra?: ExtraArg[] | null): boolean
export function lvmPvs(): LVMPVdata[]
export function lvmPvscan(device: string | null, updateCache: boolean, extra?: ExtraArg[] | null): boolean
export function lvmRoundSizeToPe(size: number, peSize: number, roundup: boolean): number
export function lvmSetGlobalConfig(newConfig?: string | null): boolean
export function lvmThlvcreate(vgName: string, poolName: string, lvName: string, size: number, extra?: ExtraArg[] | null): boolean
export function lvmThlvpoolname(vgName: string, lvName: string): string
export function lvmThpoolConvert(vgName: string, dataLv: string, metadataLv: string, name?: string | null, extra?: ExtraArg[] | null): boolean
export function lvmThpoolcreate(vgName: string, lvName: string, size: number, mdSize: number, chunkSize: number, profile?: string | null, extra?: ExtraArg[] | null): boolean
export function lvmThsnapshotcreate(vgName: string, originName: string, snapshotName: string, poolName?: string | null, extra?: ExtraArg[] | null): boolean
export function lvmVdoDisableCompression(vgName: string, poolName: string, extra?: ExtraArg[] | null): boolean
export function lvmVdoDisableDeduplication(vgName: string, poolName: string, extra?: ExtraArg[] | null): boolean
export function lvmVdoEnableCompression(vgName: string, poolName: string, extra?: ExtraArg[] | null): boolean
export function lvmVdoEnableDeduplication(vgName: string, poolName: string, extra?: ExtraArg[] | null): boolean
export function lvmVdoGetStats(vgName: string, poolName: string): LVMVDOStats
export function lvmVdoGetStatsFull(vgName: string, poolName: string): GLib.HashTable
export function lvmVdoInfo(vgName: string, lvName: string): LVMVDOPooldata
export function lvmVdoPoolConvert(vgName: string, poolLv: string, name: string | null, virtualSize: number, indexMemory: number, compression: boolean, deduplication: boolean, writePolicy: LVMVDOWritePolicy, extra?: ExtraArg[] | null): boolean
export function lvmVdoPoolCreate(vgName: string, lvName: string, poolName: string, dataSize: number, virtualSize: number, indexMemory: number, compression: boolean, deduplication: boolean, writePolicy: LVMVDOWritePolicy, extra?: ExtraArg[] | null): boolean
export function lvmVdoPoolResize(vgName: string, poolName: string, size: number, extra?: ExtraArg[] | null): boolean
export function lvmVdoResize(vgName: string, lvName: string, size: number, extra?: ExtraArg[] | null): boolean
export function lvmVdolvpoolname(vgName: string, lvName: string): string
export function lvmVgactivate(vgName: string, extra?: ExtraArg[] | null): boolean
export function lvmVgcreate(name: string, pvList: string[], peSize: number, extra?: ExtraArg[] | null): boolean
export function lvmVgdeactivate(vgName: string, extra?: ExtraArg[] | null): boolean
export function lvmVgextend(vgName: string, device: string, extra?: ExtraArg[] | null): boolean
export function lvmVginfo(vgName: string): LVMVGdata
export function lvmVgreduce(vgName: string, device?: string | null, extra?: ExtraArg[] | null): boolean
export function lvmVgremove(vgName: string, extra?: ExtraArg[] | null): boolean
export function lvmVgrename(oldVgName: string, newVgName: string, extra?: ExtraArg[] | null): boolean
export function lvmVgs(): LVMVGdata[]
export function mdActivate(raidSpec: string | null, members: string[] | null, uuid: string | null, startDegraded: boolean, extra?: ExtraArg[] | null): boolean
export function mdAdd(raidSpec: string, device: string, raidDevs: number, extra?: ExtraArg[] | null): boolean
export function mdCanonicalizeUuid(uuid: string): string
export function mdCreate(deviceName: string, level: string, disks: string[], spares: number, version: string | null, bitmap: boolean, chunkSize: number, extra?: ExtraArg[] | null): boolean
export function mdDeactivate(raidSpec: string): boolean
export function mdDenominate(device: string): boolean
export function mdDestroy(device: string): boolean
export function mdDetail(raidSpec: string): MDDetailData
export function mdErrorQuark(): GLib.Quark
export function mdExamine(device: string): MDExamineData
export function mdGetBitmapLocation(raidSpec: string): string
export function mdGetMdUuid(uuid: string): string
export function mdGetStatus(raidSpec: string): string
export function mdGetSuperblockSize(memberSize: number, version?: string | null): number
export function mdIsTechAvail(tech: MDTech, mode: number): boolean
export function mdNameFromNode(node: string): string
export function mdNodeFromName(name: string): string
export function mdNominate(device: string): boolean
export function mdRemove(raidSpec: string, device: string, fail: boolean, extra?: ExtraArg[] | null): boolean
export function mdRequestSyncAction(raidSpec: string, action: string): boolean
export function mdRun(raidSpec: string): boolean
export function mdSetBitmapLocation(raidSpec: string, location: string): boolean
export function mpathErrorQuark(): GLib.Quark
export function mpathFlushMpaths(): boolean
export function mpathGetMpathMembers(): string[]
export function mpathIsMpathMember(device: string): boolean
export function mpathIsTechAvail(tech: MpathTech, mode: number): boolean
export function mpathSetFriendlyNames(enabled: boolean): boolean
export function nvdimmErrorQuark(): GLib.Quark
export function nvdimmIsTechAvail(tech: NVDIMMTech, mode: number): boolean
export function nvdimmListNamespaces(bus: string | null, region: string | null, idle: boolean, extra?: ExtraArg[] | null): NVDIMMNamespaceInfo[]
export function nvdimmNamepaceGetSupportedSectorSizes(mode: NVDIMMNamespaceMode): number[]
export function nvdimmNamespaceDisable(namespace: string, extra?: ExtraArg[] | null): boolean
export function nvdimmNamespaceEnable(namespace: string, extra?: ExtraArg[] | null): boolean
export function nvdimmNamespaceGetDevname(device: string): string
export function nvdimmNamespaceGetModeFromStr(modeStr: string): NVDIMMNamespaceMode
export function nvdimmNamespaceGetModeStr(mode: NVDIMMNamespaceMode): string
export function nvdimmNamespaceInfo(namespace: string, extra?: ExtraArg[] | null): NVDIMMNamespaceInfo
export function nvdimmNamespaceReconfigure(namespace: string, mode: NVDIMMNamespaceMode, force: boolean, extra?: ExtraArg[] | null): boolean
export function partCreatePart(disk: string, type: PartTypeReq, start: number, size: number, align: PartAlign): PartSpec
export function partCreateTable(disk: string, type: PartTableType, ignoreExisting: boolean): boolean
export function partDeletePart(disk: string, part: string): boolean
export function partErrorQuark(): GLib.Quark
export function partGetBestFreeRegion(disk: string, type: PartType, size: number): PartSpec
export function partGetDiskFreeRegions(disk: string): PartSpec[]
export function partGetDiskParts(disk: string): PartSpec[]
export function partGetDiskSpec(disk: string): PartDiskSpec
export function partGetFlagStr(flag: PartFlag): string
export function partGetPartByPos(disk: string, position: number): PartSpec
export function partGetPartId(disk: string, part: string): string
export function partGetPartSpec(disk: string, part: string): PartSpec
export function partGetPartTableTypeStr(type: PartTableType): string
export function partGetTypeStr(type: PartType): string
export function partIsTechAvail(tech: PartTech, mode: number): boolean
export function partResizePart(disk: string, part: string, size: number, align: PartAlign): boolean
export function partSetDiskFlag(disk: string, flag: PartDiskFlag, state: boolean): boolean
export function partSetPartFlag(disk: string, part: string, flag: PartFlag, state: boolean): boolean
export function partSetPartFlags(disk: string, part: string, flags: number): boolean
export function partSetPartId(disk: string, part: string, partId: string): boolean
export function partSetPartName(disk: string, part: string, name: string): boolean
export function partSetPartType(disk: string, part: string, typeGuid: string): boolean
export function reinit(requirePlugins: PluginSpec[] | null, reload: boolean, logFunc?: UtilsLogFunc | null): boolean
export function swapErrorQuark(): GLib.Quark
export function swapIsTechAvail(tech: SwapTech, mode: number): boolean
export function swapMkswap(device: string, label?: string | null, extra?: ExtraArg[] | null): boolean
export function swapSetLabel(device: string, label: string): boolean
export function swapSwapoff(device: string): boolean
export function swapSwapon(device: string, priority: number): boolean
export function swapSwapstatus(device: string): boolean
export function switchInitChecks(enable: boolean): boolean
export function tryInit(requestPlugins?: PluginSpec[] | null, logFunc?: UtilsLogFunc | null): [ /* returnType */ boolean, /* loadedPluginNames */ string[] | null ]
export function tryReinit(requirePlugins: PluginSpec[] | null, reload: boolean, logFunc?: UtilsLogFunc | null): [ /* returnType */ boolean, /* loadedPluginNames */ string[] | null ]
export function utilsCheckLinuxVersion(major: number, minor: number, micro: number): number
export function utilsCheckUtilVersion(util: string, version?: string | null, versionArg?: string | null, versionRegexp?: string | null): boolean
export function utilsDbusServiceAvailable(connection: Gio.DBusConnection | null, busType: Gio.BusType, busName: string, objPrefix: string): boolean
export function utilsEchoStrToFile(str: string, filePath: string): boolean
export function utilsExecAndCaptureOutput(argv: string[], extra?: ExtraArg[] | null): [ /* returnType */ boolean, /* output */ string ]
export function utilsExecAndReportError(argv: string[], extra?: ExtraArg[] | null): boolean
export function utilsExecAndReportErrorNoProgress(argv: string[], extra?: ExtraArg[] | null): boolean
export function utilsExecAndReportProgress(argv: string[], extra?: ExtraArg[] | null, progExtract?: UtilsProgExtract | null): [ /* returnType */ boolean, /* procStatus */ number ]
export function utilsExecAndReportStatusError(argv: string[], extra?: ExtraArg[] | null): [ /* returnType */ boolean, /* status */ number ]
export function utilsGetDeviceSymlinks(devSpec: string): string[]
export function utilsGetLinuxVersion(): UtilsLinuxVersion
export function utilsHaveKernelModule(moduleName: string): boolean
export function utilsInitLogging(newLogFunc?: UtilsLogFunc | null): boolean
export function utilsInitProgReporting(newProgFunc?: UtilsProgFunc | null): boolean
export function utilsInitProgReportingThread(newProgFunc?: UtilsProgFunc | null): boolean
export function utilsLoadKernelModule(moduleName: string, options?: string | null): boolean
export function utilsLog(level: number, msg: string): void
export function utilsMuteProgReportingThread(): boolean
export function utilsProgReportingInitialized(): boolean
export function utilsReportFinished(taskId: number, msg: string): void
export function utilsReportProgress(taskId: number, completion: number, msg: string): void
export function utilsReportStarted(msg: string): number
export function utilsResolveDevice(devSpec: string): string
export function utilsUnloadKernelModule(moduleName: string): boolean
export function utilsVersionCmp(verString1: string, verString2: string): number
export function vdoActivate(name: string, extra?: ExtraArg[] | null): boolean
export function vdoChangeWritePolicy(name: string, writePolicy: VDOWritePolicy, extra?: ExtraArg[] | null): boolean
export function vdoCreate(name: string, backingDevice: string, logicalSize: number, indexMemory: number, compression: boolean, deduplication: boolean, writePolicy: VDOWritePolicy, extra?: ExtraArg[] | null): boolean
export function vdoDeactivate(name: string, extra?: ExtraArg[] | null): boolean
export function vdoDisableCompression(name: string, extra?: ExtraArg[] | null): boolean
export function vdoDisableDeduplication(name: string, extra?: ExtraArg[] | null): boolean
export function vdoEnableCompression(name: string, extra?: ExtraArg[] | null): boolean
export function vdoEnableDeduplication(name: string, extra?: ExtraArg[] | null): boolean
export function vdoErrorQuark(): GLib.Quark
export function vdoGetStats(name: string): VDOStats
export function vdoGetStatsFull(name: string): GLib.HashTable
export function vdoGetWritePolicyFromStr(policyStr: string): VDOWritePolicy
export function vdoGetWritePolicyStr(policy: VDOWritePolicy): string
export function vdoGrowLogical(name: string, size: number, extra?: ExtraArg[] | null): boolean
export function vdoGrowPhysical(name: string, extra?: ExtraArg[] | null): boolean
export function vdoInfo(name: string): VDOInfo
export function vdoIsTechAvail(tech: VDOTech, mode: number): boolean
export function vdoRemove(name: string, force: boolean, extra?: ExtraArg[] | null): boolean
export function vdoStart(name: string, rebuild: boolean, extra?: ExtraArg[] | null): boolean
export function vdoStop(name: string, force: boolean, extra?: ExtraArg[] | null): boolean
export interface UtilsLogFunc {
    (level: number, msg: string): void
}
export interface UtilsProgExtract {
    (line: string): boolean
}
export interface UtilsProgFunc {
    (taskId: number, status: UtilsProgStatus, completion: number, msg?: string | null): void
}
export class BtrfsDeviceInfo {
    /* Fields of BlockDev.BtrfsDeviceInfo */
    id: number
    path: string
    size: number
    used: number
    /* Methods of BlockDev.BtrfsDeviceInfo */
    static name: string
}
export class BtrfsFilesystemInfo {
    /* Fields of BlockDev.BtrfsFilesystemInfo */
    label: string
    uuid: string
    numDevices: number
    used: number
    /* Methods of BlockDev.BtrfsFilesystemInfo */
    static name: string
}
export class BtrfsSubvolumeInfo {
    /* Fields of BlockDev.BtrfsSubvolumeInfo */
    id: number
    parentId: number
    path: string
    /* Methods of BlockDev.BtrfsSubvolumeInfo */
    static name: string
}
export class CryptoIntegrityInfo {
    /* Fields of BlockDev.CryptoIntegrityInfo */
    algorithm: string
    keySize: number
    sectorSize: number
    tagSize: number
    interleaveSectors: number
    journalSize: number
    journalCrypt: string
    journalIntegrity: string
    /* Methods of BlockDev.CryptoIntegrityInfo */
    copy(): CryptoIntegrityInfo
    static name: string
}
export class CryptoLUKSExtra {
    /* Fields of BlockDev.CryptoLUKSExtra */
    dataAlignment: number
    dataDevice: string
    integrity: string
    sectorSize: number
    label: string
    subsystem: string
    pbkdf: CryptoLUKSPBKDF
    /* Methods of BlockDev.CryptoLUKSExtra */
    static name: string
    static new(dataAlignment: number, dataDevice: string | null, integrity: string | null, sectorSize: number, label?: string | null, subsystem?: string | null, pbkdf?: CryptoLUKSPBKDF | null): CryptoLUKSExtra
    constructor(dataAlignment: number, dataDevice: string | null, integrity: string | null, sectorSize: number, label?: string | null, subsystem?: string | null, pbkdf?: CryptoLUKSPBKDF | null)
    static new(dataAlignment: number, dataDevice: string | null, integrity: string | null, sectorSize: number, label?: string | null, subsystem?: string | null, pbkdf?: CryptoLUKSPBKDF | null): CryptoLUKSExtra
}
export class CryptoLUKSInfo {
    /* Fields of BlockDev.CryptoLUKSInfo */
    version: CryptoLUKSVersion
    cipher: string
    mode: string
    uuid: string
    backingDevice: string
    sectorSize: number
    /* Methods of BlockDev.CryptoLUKSInfo */
    static name: string
}
export class CryptoLUKSPBKDF {
    /* Fields of BlockDev.CryptoLUKSPBKDF */
    type: string
    hash: string
    maxMemoryKb: number
    iterations: number
    timeMs: number
    parallelThreads: number
    /* Methods of BlockDev.CryptoLUKSPBKDF */
    static name: string
    static new(type: string | null, hash: string | null, maxMemoryKb: number, iterations: number, timeMs: number, parallelThreads: number): CryptoLUKSPBKDF
    constructor(type: string | null, hash: string | null, maxMemoryKb: number, iterations: number, timeMs: number, parallelThreads: number)
    static new(type: string | null, hash: string | null, maxMemoryKb: number, iterations: number, timeMs: number, parallelThreads: number): CryptoLUKSPBKDF
}
export class ExtraArg {
    /* Fields of BlockDev.ExtraArg */
    opt: string
    val: string
    /* Methods of BlockDev.ExtraArg */
    copy(): ExtraArg
    free(): void
    static name: string
    static new(opt: string, val: string): ExtraArg
    constructor(opt: string, val: string)
    static new(opt: string, val: string): ExtraArg
}
export class FSExt2Info {
    /* Fields of BlockDev.FSExt2Info */
    label: string
    uuid: string
    state: string
    blockSize: number
    blockCount: number
    freeBlocks: number
    /* Methods of BlockDev.FSExt2Info */
    static name: string
}
export class FSExt3Info {
    /* Fields of BlockDev.FSExt3Info */
    label: string
    uuid: string
    state: string
    blockSize: number
    blockCount: number
    freeBlocks: number
    /* Methods of BlockDev.FSExt3Info */
    static name: string
}
export class FSExt4Info {
    /* Fields of BlockDev.FSExt4Info */
    label: string
    uuid: string
    state: string
    blockSize: number
    blockCount: number
    freeBlocks: number
    /* Methods of BlockDev.FSExt4Info */
    static name: string
}
export class FSExtInfo {
    /* Fields of BlockDev.FSExtInfo */
    label: string
    uuid: string
    state: string
    blockSize: number
    blockCount: number
    freeBlocks: number
    static name: string
}
export class FSNtfsInfo {
    /* Fields of BlockDev.FSNtfsInfo */
    size: number
    freeSpace: number
    /* Methods of BlockDev.FSNtfsInfo */
    static name: string
}
export class FSVfatInfo {
    /* Fields of BlockDev.FSVfatInfo */
    label: string
    uuid: string
    clusterSize: number
    clusterCount: number
    freeClusterCount: number
    /* Methods of BlockDev.FSVfatInfo */
    static name: string
}
export class FSXfsInfo {
    /* Fields of BlockDev.FSXfsInfo */
    label: string
    uuid: string
    blockSize: number
    blockCount: number
    /* Methods of BlockDev.FSXfsInfo */
    static name: string
}
export class KBDBcacheStats {
    /* Fields of BlockDev.KBDBcacheStats */
    state: string
    blockSize: number
    cacheSize: number
    cacheUsed: number
    hits: number
    misses: number
    bypassHits: number
    bypassMisses: number
    /* Methods of BlockDev.KBDBcacheStats */
    static name: string
}
export class KBDZramStats {
    /* Fields of BlockDev.KBDZramStats */
    disksize: number
    numReads: number
    numWrites: number
    invalidIo: number
    zeroPages: number
    maxCompStreams: number
    compAlgorithm: string
    origDataSize: number
    comprDataSize: number
    memUsedTotal: number
    /* Methods of BlockDev.KBDZramStats */
    static name: string
}
export class LVMCacheStats {
    /* Fields of BlockDev.LVMCacheStats */
    blockSize: number
    cacheSize: number
    cacheUsed: number
    mdBlockSize: number
    mdSize: number
    mdUsed: number
    readHits: number
    readMisses: number
    writeHits: number
    writeMisses: number
    mode: LVMCacheMode
    /* Methods of BlockDev.LVMCacheStats */
    static name: string
}
export class LVMLVdata {
    /* Fields of BlockDev.LVMLVdata */
    lvName: string
    vgName: string
    uuid: string
    size: number
    attr: string
    segtype: string
    origin: string
    poolLv: string
    dataLv: string
    metadataLv: string
    roles: string
    movePv: string
    dataPercent: number
    metadataPercent: number
    copyPercent: number
    /* Methods of BlockDev.LVMLVdata */
    static name: string
}
export class LVMPVdata {
    /* Fields of BlockDev.LVMPVdata */
    pvName: string
    pvUuid: string
    pvFree: number
    pvSize: number
    peStart: number
    vgName: string
    vgUuid: string
    vgSize: number
    vgFree: number
    vgExtentSize: number
    vgExtentCount: number
    vgFreeCount: number
    vgPvCount: number
    /* Methods of BlockDev.LVMPVdata */
    static name: string
}
export class LVMVDOPooldata {
    /* Fields of BlockDev.LVMVDOPooldata */
    operatingMode: LVMVDOOperatingMode
    compressionState: LVMVDOCompressionState
    indexState: LVMVDOIndexState
    writePolicy: LVMVDOWritePolicy
    usedSize: number
    savingPercent: number
    indexMemorySize: number
    deduplication: boolean
    compression: boolean
    /* Methods of BlockDev.LVMVDOPooldata */
    static name: string
}
export class LVMVDOStats {
    /* Fields of BlockDev.LVMVDOStats */
    blockSize: number
    logicalBlockSize: number
    physicalBlocks: number
    dataBlocksUsed: number
    overheadBlocksUsed: number
    logicalBlocksUsed: number
    usedPercent: number
    savingPercent: number
    writeAmplificationRatio: number
    /* Methods of BlockDev.LVMVDOStats */
    static name: string
}
export class LVMVGdata {
    /* Fields of BlockDev.LVMVGdata */
    name: string
    uuid: string
    size: number
    free: number
    extentSize: number
    extentCount: number
    freeCount: number
    pvCount: number
    /* Methods of BlockDev.LVMVGdata */
    static name: string
}
export class MDDetailData {
    /* Fields of BlockDev.MDDetailData */
    device: string
    metadata: string
    creationTime: string
    level: string
    name: string
    arraySize: number
    useDevSize: number
    raidDevices: number
    totalDevices: number
    activeDevices: number
    workingDevices: number
    failedDevices: number
    spareDevices: number
    clean: boolean
    uuid: string
    /* Methods of BlockDev.MDDetailData */
    static name: string
}
export class MDExamineData {
    /* Fields of BlockDev.MDExamineData */
    device: string
    level: string
    numDevices: number
    name: string
    size: number
    uuid: string
    updateTime: number
    devUuid: string
    events: number
    metadata: string
    chunkSize: number
    /* Methods of BlockDev.MDExamineData */
    static name: string
}
export class NVDIMMNamespaceInfo {
    /* Fields of BlockDev.NVDIMMNamespaceInfo */
    dev: string
    mode: number
    size: number
    uuid: string
    sectorSize: number
    blockdev: string
    enabled: boolean
    /* Methods of BlockDev.NVDIMMNamespaceInfo */
    static name: string
}
export class PartDiskSpec {
    /* Fields of BlockDev.PartDiskSpec */
    path: string
    tableType: PartTableType
    size: number
    sectorSize: number
    flags: number
    /* Methods of BlockDev.PartDiskSpec */
    copy(): PartDiskSpec
    free(): void
    static name: string
}
export class PartSpec {
    /* Fields of BlockDev.PartSpec */
    path: string
    name: string
    typeGuid: string
    type: number
    start: number
    size: number
    flags: number
    /* Methods of BlockDev.PartSpec */
    copy(): PartSpec
    free(): void
    static name: string
}
export class PluginSpec {
    /* Fields of BlockDev.PluginSpec */
    name: Plugin
    soName: string
    /* Methods of BlockDev.PluginSpec */
    static name: string
}
export class UtilsLinuxVersion {
    /* Fields of BlockDev.UtilsLinuxVersion */
    major: number
    minor: number
    micro: number
    static name: string
}
export class VDOInfo {
    /* Fields of BlockDev.VDOInfo */
    name: string
    device: string
    active: boolean
    deduplication: boolean
    compression: boolean
    logicalSize: number
    physicalSize: number
    indexMemory: number
    writePolicy: VDOWritePolicy
    /* Methods of BlockDev.VDOInfo */
    static name: string
}
export class VDOStats {
    /* Fields of BlockDev.VDOStats */
    blockSize: number
    logicalBlockSize: number
    physicalBlocks: number
    dataBlocksUsed: number
    overheadBlocksUsed: number
    logicalBlocksUsed: number
    usedPercent: number
    savingPercent: number
    writeAmplificationRatio: number
    /* Methods of BlockDev.VDOStats */
    static name: string
}
}