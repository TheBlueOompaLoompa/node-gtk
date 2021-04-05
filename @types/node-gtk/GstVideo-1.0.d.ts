/**
 * GstVideo-1.0
 */

/// <reference types="node" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GstVideo {

export enum ColorBalanceType {
    HARDWARE,
    SOFTWARE,
}
export enum NavigationCommand {
    INVALID,
    MENU1,
    MENU2,
    MENU3,
    MENU4,
    MENU5,
    MENU6,
    MENU7,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    ACTIVATE,
    PREV_ANGLE,
    NEXT_ANGLE,
}
export enum NavigationEventType {
    INVALID,
    KEY_PRESS,
    KEY_RELEASE,
    MOUSE_BUTTON_PRESS,
    MOUSE_BUTTON_RELEASE,
    MOUSE_MOVE,
    COMMAND,
    MOUSE_SCROLL,
}
export enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
    EVENT,
}
export enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
export enum VideoAFDSpec {
    DVB_ETSI,
    ATSC_A53,
    SMPTE_ST2016_1,
}
export enum VideoAFDValue {
    UNAVAILABLE,
    /* 16_9_TOP_ALIGNED (invalid, starts with a number) */
    /* 14_9_TOP_ALIGNED (invalid, starts with a number) */
    GREATER_THAN_16_9,
    /* 4_3_FULL_16_9_FULL (invalid, starts with a number) */
    /* 4_3_FULL_4_3_PILLAR (invalid, starts with a number) */
    /* 16_9_LETTER_16_9_FULL (invalid, starts with a number) */
    /* 14_9_LETTER_14_9_PILLAR (invalid, starts with a number) */
    /* 4_3_FULL_14_9_CENTER (invalid, starts with a number) */
    /* 16_9_LETTER_14_9_CENTER (invalid, starts with a number) */
    /* 16_9_LETTER_4_3_CENTER (invalid, starts with a number) */
}
export enum VideoAlphaMode {
    COPY,
    SET,
    MULT,
}
export enum VideoAncillaryDID {
    UNDEFINED,
    DELETION,
    HANC_3G_AUDIO_DATA_FIRST,
    HANC_3G_AUDIO_DATA_LAST,
    HANC_HDTV_AUDIO_DATA_FIRST,
    HANC_HDTV_AUDIO_DATA_LAST,
    HANC_SDTV_AUDIO_DATA_1_FIRST,
    HANC_SDTV_AUDIO_DATA_1_LAST,
    CAMERA_POSITION,
    HANC_ERROR_DETECTION,
    HANC_SDTV_AUDIO_DATA_2_FIRST,
    HANC_SDTV_AUDIO_DATA_2_LAST,
}
export enum VideoAncillaryDID16 {
    S334_EIA_708,
    S334_EIA_608,
    S2016_3_AFD_BAR,
}
export enum VideoCaptionType {
    UNKNOWN,
    CEA608_RAW,
    CEA608_S334_1A,
    CEA708_RAW,
    CEA708_CDP,
}
export enum VideoChromaMethod {
    NEAREST,
    LINEAR,
}
export enum VideoChromaMode {
    FULL,
    UPSAMPLE_ONLY,
    DOWNSAMPLE_ONLY,
    NONE,
}
export enum VideoColorMatrix {
    UNKNOWN,
    RGB,
    FCC,
    BT709,
    BT601,
    SMPTE240M,
    BT2020,
}
export enum VideoColorPrimaries {
    UNKNOWN,
    BT709,
    BT470M,
    BT470BG,
    SMPTE170M,
    SMPTE240M,
    FILM,
    BT2020,
    ADOBERGB,
    SMPTEST428,
    SMPTERP431,
    SMPTEEG432,
    EBU3213,
}
export enum VideoColorRange {
    UNKNOWN,
    /* 0_255 (invalid, starts with a number) */
    /* 16_235 (invalid, starts with a number) */
}
export enum VideoDitherMethod {
    NONE,
    VERTERR,
    FLOYD_STEINBERG,
    SIERRA_LITE,
    BAYER,
}
export enum VideoFieldOrder {
    UNKNOWN,
    TOP_FIELD_FIRST,
    BOTTOM_FIELD_FIRST,
}
export enum VideoFormat {
    UNKNOWN,
    ENCODED,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
    GRAY8,
    GRAY16_BE,
    GRAY16_LE,
    V308,
    RGB16,
    BGR16,
    RGB15,
    BGR15,
    UYVP,
    A420,
    RGB8P,
    YUV9,
    YVU9,
    IYU1,
    ARGB64,
    AYUV64,
    R210,
    I420_10BE,
    I420_10LE,
    I422_10BE,
    I422_10LE,
    Y444_10BE,
    Y444_10LE,
    GBR,
    GBR_10BE,
    GBR_10LE,
    NV16,
    NV24,
    NV12_64Z32,
    A420_10BE,
    A420_10LE,
    A422_10BE,
    A422_10LE,
    A444_10BE,
    A444_10LE,
    NV61,
    P010_10BE,
    P010_10LE,
    IYU2,
    VYUY,
    GBRA,
    GBRA_10BE,
    GBRA_10LE,
    GBR_12BE,
    GBR_12LE,
    GBRA_12BE,
    GBRA_12LE,
    I420_12BE,
    I420_12LE,
    I422_12BE,
    I422_12LE,
    Y444_12BE,
    Y444_12LE,
    GRAY10_LE32,
    NV12_10LE32,
    NV16_10LE32,
    NV12_10LE40,
    Y210,
    Y410,
    VUYA,
    BGR10A2_LE,
    RGB10A2_LE,
    Y444_16BE,
    Y444_16LE,
    P016_BE,
    P016_LE,
    P012_BE,
    P012_LE,
    Y212_BE,
    Y212_LE,
    Y412_BE,
    Y412_LE,
    NV12_4L4,
    NV12_32L32,
}
export enum VideoGLTextureOrientation {
    NORMAL_Y_NORMAL,
    NORMAL_Y_FLIP,
    FLIP_Y_NORMAL,
    FLIP_Y_FLIP,
}
export enum VideoGLTextureType {
    LUMINANCE,
    LUMINANCE_ALPHA,
    RGB16,
    RGB,
    RGBA,
    R,
    RG,
}
export enum VideoGammaMode {
    NONE,
    REMAP,
}
export enum VideoInterlaceMode {
    PROGRESSIVE,
    INTERLEAVED,
    MIXED,
    FIELDS,
    ALTERNATE,
}
export enum VideoMatrixMode {
    FULL,
    INPUT_ONLY,
    OUTPUT_ONLY,
    NONE,
}
export enum VideoMultiviewFramePacking {
    NONE,
    MONO,
    LEFT,
    RIGHT,
    SIDE_BY_SIDE,
    SIDE_BY_SIDE_QUINCUNX,
    COLUMN_INTERLEAVED,
    ROW_INTERLEAVED,
    TOP_BOTTOM,
    CHECKERBOARD,
}
export enum VideoMultiviewMode {
    NONE,
    MONO,
    LEFT,
    RIGHT,
    SIDE_BY_SIDE,
    SIDE_BY_SIDE_QUINCUNX,
    COLUMN_INTERLEAVED,
    ROW_INTERLEAVED,
    TOP_BOTTOM,
    CHECKERBOARD,
    FRAME_BY_FRAME,
    MULTIVIEW_FRAME_BY_FRAME,
    SEPARATED,
}
export enum VideoOrientationMethod {
    IDENTITY,
    /* 90R (invalid, starts with a number) */
    /* 180 (invalid, starts with a number) */
    /* 90L (invalid, starts with a number) */
    HORIZ,
    VERT,
    UL_LR,
    UR_LL,
    AUTO,
    CUSTOM,
}
export enum VideoPrimariesMode {
    NONE,
    MERGE_ONLY,
    FAST,
}
export enum VideoResamplerMethod {
    NEAREST,
    LINEAR,
    CUBIC,
    SINC,
    LANCZOS,
}
export enum VideoTileMode {
    UNKNOWN,
    ZFLIPZ_2X2,
    LINEAR,
}
export enum VideoTileType {
    INDEXED,
}
export enum VideoTransferFunction {
    UNKNOWN,
    GAMMA10,
    GAMMA18,
    GAMMA20,
    GAMMA22,
    BT709,
    SMPTE240M,
    SRGB,
    GAMMA28,
    LOG100,
    LOG316,
    BT2020_12,
    ADOBERGB,
    BT2020_10,
    SMPTE2084,
    ARIB_STD_B67,
    BT601,
}
export enum VideoVBIParserResult {
    DONE,
    OK,
    ERROR,
}
export enum VideoBufferFlags {
    INTERLACED,
    TFF,
    RFF,
    ONEFIELD,
    MULTIPLE_VIEW,
    FIRST_IN_BUNDLE,
    TOP_FIELD,
    ONEFIELD,
    BOTTOM_FIELD,
    MARKER,
    LAST,
}
export enum VideoChromaFlags {
    NONE,
    INTERLACED,
}
export enum VideoChromaSite {
    UNKNOWN,
    NONE,
    H_COSITED,
    V_COSITED,
    ALT_LINE,
    COSITED,
    JPEG,
    MPEG2,
    DV,
}
export enum VideoCodecFrameFlags {
    DECODE_ONLY,
    SYNC_POINT,
    FORCE_KEYFRAME,
    FORCE_KEYFRAME_HEADERS,
}
export enum VideoDitherFlags {
    NONE,
    INTERLACED,
    QUANTIZE,
}
export enum VideoFlags {
    NONE,
    VARIABLE_FPS,
    PREMULTIPLIED_ALPHA,
}
export enum VideoFormatFlags {
    YUV,
    RGB,
    GRAY,
    ALPHA,
    LE,
    PALETTE,
    COMPLEX,
    UNPACK,
    TILED,
}
export enum VideoFrameFlags {
    NONE,
    INTERLACED,
    TFF,
    RFF,
    ONEFIELD,
    MULTIPLE_VIEW,
    FIRST_IN_BUNDLE,
    TOP_FIELD,
    ONEFIELD,
    BOTTOM_FIELD,
}
export enum VideoFrameMapFlags {
    NO_REF,
    LAST,
}
export enum VideoMultiviewFlags {
    NONE,
    RIGHT_VIEW_FIRST,
    LEFT_FLIPPED,
    LEFT_FLOPPED,
    RIGHT_FLIPPED,
    RIGHT_FLOPPED,
    HALF_ASPECT,
    MIXED_MONO,
}
export enum VideoOverlayFormatFlags {
    NONE,
    PREMULTIPLIED_ALPHA,
    GLOBAL_ALPHA,
}
export enum VideoPackFlags {
    NONE,
    TRUNCATE_RANGE,
    INTERLACED,
}
export enum VideoResamplerFlags {
    NONE,
    HALF_TAPS,
}
export enum VideoScalerFlags {
    NONE,
    INTERLACED,
}
export enum VideoTimeCodeFlags {
    NONE,
    DROP_FRAME,
    INTERLACED,
}
export const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string
export const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string
export const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string
export const BUFFER_POOL_OPTION_VIDEO_META: string
export const CAPS_FEATURE_FORMAT_INTERLACED: string
export const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string
export const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string
export const CAPS_FEATURE_META_GST_VIDEO_META: string
export const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string
export const META_TAG_VIDEO_COLORSPACE_STR: string
export const META_TAG_VIDEO_ORIENTATION_STR: string
export const META_TAG_VIDEO_SIZE_STR: string
export const META_TAG_VIDEO_STR: string
export const VIDEO_COLORIMETRY_BT2020: string
export const VIDEO_COLORIMETRY_BT2020_10: string
export const VIDEO_COLORIMETRY_BT2100_HLG: string
export const VIDEO_COLORIMETRY_BT2100_PQ: string
export const VIDEO_COLORIMETRY_BT601: string
export const VIDEO_COLORIMETRY_BT709: string
export const VIDEO_COLORIMETRY_SMPTE240M: string
export const VIDEO_COLORIMETRY_SRGB: string
export const VIDEO_COMP_A: number
export const VIDEO_COMP_B: number
export const VIDEO_COMP_G: number
export const VIDEO_COMP_INDEX: number
export const VIDEO_COMP_PALETTE: number
export const VIDEO_COMP_R: number
export const VIDEO_COMP_U: number
export const VIDEO_COMP_V: number
export const VIDEO_COMP_Y: number
export const VIDEO_CONVERTER_OPT_ALPHA_MODE: string
export const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string
export const VIDEO_CONVERTER_OPT_BORDER_ARGB: string
export const VIDEO_CONVERTER_OPT_CHROMA_MODE: string
export const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string
export const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string
export const VIDEO_CONVERTER_OPT_DEST_WIDTH: string
export const VIDEO_CONVERTER_OPT_DEST_X: string
export const VIDEO_CONVERTER_OPT_DEST_Y: string
export const VIDEO_CONVERTER_OPT_DITHER_METHOD: string
export const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string
export const VIDEO_CONVERTER_OPT_FILL_BORDER: string
export const VIDEO_CONVERTER_OPT_GAMMA_MODE: string
export const VIDEO_CONVERTER_OPT_MATRIX_MODE: string
export const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string
export const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string
export const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string
export const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string
export const VIDEO_CONVERTER_OPT_SRC_WIDTH: string
export const VIDEO_CONVERTER_OPT_SRC_X: string
export const VIDEO_CONVERTER_OPT_SRC_Y: string
export const VIDEO_CONVERTER_OPT_THREADS: string
export const VIDEO_DECODER_MAX_ERRORS: number
export const VIDEO_DECODER_SINK_NAME: string
export const VIDEO_DECODER_SRC_NAME: string
export const VIDEO_ENCODER_SINK_NAME: string
export const VIDEO_ENCODER_SRC_NAME: string
export const VIDEO_FORMATS_ALL: string
export const VIDEO_FPS_RANGE: string
export const VIDEO_MAX_COMPONENTS: number
export const VIDEO_MAX_PLANES: number
export const VIDEO_RESAMPLER_OPT_CUBIC_B: string
export const VIDEO_RESAMPLER_OPT_CUBIC_C: string
export const VIDEO_RESAMPLER_OPT_ENVELOPE: string
export const VIDEO_RESAMPLER_OPT_MAX_TAPS: string
export const VIDEO_RESAMPLER_OPT_SHARPEN: string
export const VIDEO_RESAMPLER_OPT_SHARPNESS: string
export const VIDEO_SCALER_OPT_DITHER_METHOD: string
export const VIDEO_SIZE_RANGE: string
export const VIDEO_TILE_TYPE_MASK: number
export const VIDEO_TILE_TYPE_SHIFT: number
export const VIDEO_TILE_X_TILES_MASK: number
export const VIDEO_TILE_Y_TILES_SHIFT: number
export function bufferAddVideoAfdMeta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta
export function bufferAddVideoAffineTransformationMeta(buffer: Gst.Buffer): VideoAffineTransformationMeta
export function bufferAddVideoBarMeta(buffer: Gst.Buffer, field: number, isLetterbox: boolean, barData1: number, barData2: number): VideoBarMeta
export function bufferAddVideoCaptionMeta(buffer: Gst.Buffer, captionType: VideoCaptionType, data: any): VideoCaptionMeta
export function bufferAddVideoGlTextureUploadMeta(buffer: Gst.Buffer, textureOrientation: VideoGLTextureOrientation, nTextures: number, textureType: VideoGLTextureType, upload: VideoGLTextureUpload, userDataCopy: GObject.BoxedCopyFunc, userDataFree: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta
export function bufferAddVideoMeta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta
export function bufferAddVideoMetaFull(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, nPlanes: number, offset: number[], stride: number[]): VideoMeta
export function bufferAddVideoOverlayCompositionMeta(buf: Gst.Buffer, comp?: VideoOverlayComposition | null): VideoOverlayCompositionMeta
export function bufferAddVideoRegionOfInterestMeta(buffer: Gst.Buffer, roiType: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
export function bufferAddVideoRegionOfInterestMetaId(buffer: Gst.Buffer, roiType: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
export function bufferAddVideoTimeCodeMeta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null
export function bufferAddVideoTimeCodeMetaFull(buffer: Gst.Buffer, fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCodeMeta
export function bufferGetVideoMeta(buffer: Gst.Buffer): VideoMeta
export function bufferGetVideoMetaId(buffer: Gst.Buffer, id: number): VideoMeta
export function bufferGetVideoRegionOfInterestMetaId(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta
export function bufferPoolConfigGetVideoAlignment(config: Gst.Structure, align: VideoAlignment): boolean
export function bufferPoolConfigSetVideoAlignment(config: Gst.Structure, align: VideoAlignment): void
export function isVideoOverlayPrepareWindowHandleMessage(msg: Gst.Message): boolean
export function navigationEventGetType(event: Gst.Event): NavigationEventType
export function navigationEventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
export function navigationEventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
export function navigationEventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
export function navigationEventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
export function navigationEventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
export function navigationMessageGetType(message: Gst.Message): NavigationMessageType
export function navigationMessageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
export function navigationMessageNewCommandsChanged(src: Gst.Object): Gst.Message
export function navigationMessageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
export function navigationMessageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
export function navigationMessageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
export function navigationMessageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
export function navigationMessageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
export function navigationQueryGetType(query: Gst.Query): NavigationQueryType
export function navigationQueryNewAngles(): Gst.Query
export function navigationQueryNewCommands(): Gst.Query
export function navigationQueryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
export function navigationQueryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
export function navigationQueryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
export function navigationQuerySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
export function navigationQuerySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
export function videoAfdMetaApiGetType(): GObject.Type
export function videoAfdMetaGetInfo(): Gst.MetaInfo
export function videoAffineTransformationMetaApiGetType(): GObject.Type
export function videoAffineTransformationMetaGetInfo(): Gst.MetaInfo
export function videoBarMetaApiGetType(): GObject.Type
export function videoBarMetaGetInfo(): Gst.MetaInfo
export function videoBlend(dest: VideoFrame, src: VideoFrame, x: number, y: number, globalAlpha: number): boolean
export function videoBlendScaleLinearRGBA(src: VideoInfo, srcBuffer: Gst.Buffer, destHeight: number, destWidth: number): [ /* dest */ VideoInfo, /* destBuffer */ Gst.Buffer ]
export function videoCalculateDisplayRatio(videoWidth: number, videoHeight: number, videoParN: number, videoParD: number, displayParN: number, displayParD: number): [ /* returnType */ boolean, /* darN */ number, /* darD */ number ]
export function videoCaptionMetaApiGetType(): GObject.Type
export function videoCaptionMetaGetInfo(): Gst.MetaInfo
export function videoCaptionTypeFromCaps(caps: Gst.Caps): VideoCaptionType
export function videoCaptionTypeToCaps(type: VideoCaptionType): Gst.Caps
export function videoChromaFromString(s: string): VideoChromaSite
export function videoChromaResample(resample: VideoChromaResample, lines: object | null, width: number): void
export function videoChromaToString(site: VideoChromaSite): string
export function videoColorMatrixFromIso(value: number): VideoColorMatrix
export function videoColorMatrixGetKrKb(matrix: VideoColorMatrix): [ /* returnType */ boolean, /* kr */ number, /* kb */ number ]
export function videoColorMatrixToIso(matrix: VideoColorMatrix): number
export function videoColorPrimariesFromIso(value: number): VideoColorPrimaries
export function videoColorPrimariesGetInfo(primaries: VideoColorPrimaries): VideoColorPrimariesInfo
export function videoColorPrimariesToIso(primaries: VideoColorPrimaries): number
export function videoColorRangeOffsets(range: VideoColorRange, info: VideoFormatInfo): [ /* offset */ number[], /* scale */ number[] ]
export function videoColorTransferDecode(func: VideoTransferFunction, val: number): number
export function videoColorTransferEncode(func: VideoTransferFunction, val: number): number
export function videoConvertSample(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample
export function videoConvertSampleAsync(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void
export function videoCropMetaApiGetType(): GObject.Type
export function videoCropMetaGetInfo(): Gst.MetaInfo
export function videoEventIsForceKeyUnit(event: Gst.Event): boolean
export function videoEventNewDownstreamForceKeyUnit(timestamp: Gst.ClockTime, streamTime: Gst.ClockTime, runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
export function videoEventNewStillFrame(inStill: boolean): Gst.Event
export function videoEventNewUpstreamForceKeyUnit(runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
export function videoEventParseDownstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* timestamp */ Gst.ClockTime, /* streamTime */ Gst.ClockTime, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
export function videoEventParseStillFrame(event: Gst.Event): [ /* returnType */ boolean, /* inStill */ boolean ]
export function videoEventParseUpstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
export function videoFieldOrderFromString(order: string): VideoFieldOrder
export function videoFieldOrderToString(order: VideoFieldOrder): string
export function videoFormatFromFourcc(fourcc: number): VideoFormat
export function videoFormatFromMasks(depth: number, bpp: number, endianness: number, redMask: number, greenMask: number, blueMask: number, alphaMask: number): VideoFormat
export function videoFormatFromString(format: string): VideoFormat
export function videoFormatGetInfo(format: VideoFormat): VideoFormatInfo
export function videoFormatGetPalette(format: VideoFormat): [ /* returnType */ object | null, /* size */ number ]
export function videoFormatToFourcc(format: VideoFormat): number
export function videoFormatToString(format: VideoFormat): string
export function videoFormatsRaw(): VideoFormat[]
export function videoGlTextureUploadMetaApiGetType(): GObject.Type
export function videoGlTextureUploadMetaGetInfo(): Gst.MetaInfo
export function videoGuessFramerate(duration: Gst.ClockTime): [ /* returnType */ boolean, /* destN */ number | null, /* destD */ number | null ]
export function videoInterlaceModeFromString(mode: string): VideoInterlaceMode
export function videoInterlaceModeToString(mode: VideoInterlaceMode): string
export function videoMakeRawCaps(formats: VideoFormat[] | null): Gst.Caps
export function videoMakeRawCapsWithFeatures(formats: VideoFormat[] | null, features?: Gst.CapsFeatures | null): Gst.Caps
export function videoMasteringDisplayInfoFromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
export function videoMetaApiGetType(): GObject.Type
export function videoMetaGetInfo(): Gst.MetaInfo
export function videoMetaTransformScaleGetQuark(): GLib.Quark
export function videoMultiviewGetDoubledHeightModes(): any
export function videoMultiviewGetDoubledSizeModes(): any
export function videoMultiviewGetDoubledWidthModes(): any
export function videoMultiviewGetMonoModes(): any
export function videoMultiviewGetUnpackedModes(): any
export function videoMultiviewGuessHalfAspect(mvMode: VideoMultiviewMode, width: number, height: number, parN: number, parD: number): boolean
export function videoMultiviewModeFromCapsString(capsMviewMode: string): VideoMultiviewMode
export function videoMultiviewModeToCapsString(mviewMode: VideoMultiviewMode): string
export function videoMultiviewVideoInfoChangeMode(info: VideoInfo, outMviewMode: VideoMultiviewMode, outMviewFlags: VideoMultiviewFlags): void
export function videoOverlayCompositionMetaApiGetType(): GObject.Type
export function videoOverlayCompositionMetaGetInfo(): Gst.MetaInfo
export function videoOverlayInstallProperties(oclass: GObject.ObjectClass, lastPropId: number): void
export function videoOverlaySetProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
export function videoRegionOfInterestMetaApiGetType(): GObject.Type
export function videoRegionOfInterestMetaGetInfo(): Gst.MetaInfo
export function videoTileGetIndex(mode: VideoTileMode, x: number, y: number, xTiles: number, yTiles: number): number
export function videoTimeCodeMetaApiGetType(): GObject.Type
export function videoTimeCodeMetaGetInfo(): Gst.MetaInfo
export function videoTransferFunctionFromIso(value: number): VideoTransferFunction
export function videoTransferFunctionIsEquivalent(fromFunc: VideoTransferFunction, fromBpp: number, toFunc: VideoTransferFunction, toBpp: number): boolean
export function videoTransferFunctionToIso(func: VideoTransferFunction): number
export interface VideoAffineTransformationGetMatrix {
    (meta: VideoAffineTransformationMeta, matrix: number): boolean
}
export interface VideoConvertSampleCallback {
    (sample: Gst.Sample, error: GLib.Error): void
}
export interface VideoFormatPack {
    (info: VideoFormatInfo, flags: VideoPackFlags, src: object | null, sstride: number, data: object | null, stride: number, chromaSite: VideoChromaSite, y: number, width: number): void
}
export interface VideoFormatUnpack {
    (info: VideoFormatInfo, flags: VideoPackFlags, dest: object | null, data: object | null, stride: number, x: number, y: number, width: number): void
}
export interface VideoGLTextureUpload {
    (meta: VideoGLTextureUploadMeta, textureId: number): boolean
}
export class ColorBalance {
    /* Methods of GstVideo.ColorBalance */
    getBalanceType(): ColorBalanceType
    getValue(channel: ColorBalanceChannel): number
    listChannels(): ColorBalanceChannel[]
    setValue(channel: ColorBalanceChannel, value: number): void
    valueChanged(channel: ColorBalanceChannel, value: number): void
    /* Virtual methods of GstVideo.ColorBalance */
    vfuncGetBalanceType?(): ColorBalanceType
    vfuncGetValue?(channel: ColorBalanceChannel): number
    vfuncListChannels?(): ColorBalanceChannel[]
    vfuncSetValue?(channel: ColorBalanceChannel, value: number): void
    vfuncValueChanged?(channel: ColorBalanceChannel, value: number): void
    /* Signals of GstVideo.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: ColorBalance, channel: ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalance, channel: ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", channel: ColorBalanceChannel, value: number): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Navigation {
    /* Methods of GstVideo.Navigation */
    sendCommand(command: NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    sendMouseScrollEvent(x: number, y: number, deltaX: number, deltaY: number): void
    /* Virtual methods of GstVideo.Navigation */
    vfuncSendEvent?(structure: Gst.Structure): void
    static name: string
    static eventGetType(event: Gst.Event): NavigationEventType
    static eventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
    static eventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    static eventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    static eventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    static eventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
    static messageGetType(message: Gst.Message): NavigationMessageType
    static messageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
    static messageNewCommandsChanged(src: Gst.Object): Gst.Message
    static messageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
    static messageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
    static messageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    static messageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    static messageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    static queryGetType(query: Gst.Query): NavigationQueryType
    static queryNewAngles(): Gst.Query
    static queryNewCommands(): Gst.Query
    static queryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    static queryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
    static queryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
    static querySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
    static querySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
}
export class VideoDirection {
    /* Properties of GstVideo.VideoDirection */
    videoDirection: VideoOrientationMethod
    static name: string
}
export class VideoOrientation {
    /* Methods of GstVideo.VideoOrientation */
    getHcenter(): [ /* returnType */ boolean, /* center */ number ]
    getHflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    getVcenter(): [ /* returnType */ boolean, /* center */ number ]
    getVflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    setHcenter(center: number): boolean
    setHflip(flip: boolean): boolean
    setVcenter(center: number): boolean
    setVflip(flip: boolean): boolean
    /* Virtual methods of GstVideo.VideoOrientation */
    vfuncGetHcenter?(): [ /* returnType */ boolean, /* center */ number ]
    vfuncGetHflip?(): [ /* returnType */ boolean, /* flip */ boolean ]
    vfuncGetVcenter?(): [ /* returnType */ boolean, /* center */ number ]
    vfuncGetVflip?(): [ /* returnType */ boolean, /* flip */ boolean ]
    vfuncSetHcenter?(center: number): boolean
    vfuncSetHflip?(flip: boolean): boolean
    vfuncSetVcenter?(center: number): boolean
    vfuncSetVflip?(flip: boolean): boolean
    static name: string
}
export class VideoOverlay {
    /* Methods of GstVideo.VideoOverlay */
    expose(): void
    gotWindowHandle(handle: any): void
    handleEvents(handleEvents: boolean): void
    prepareWindowHandle(): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setWindowHandle(handle: any): void
    /* Virtual methods of GstVideo.VideoOverlay */
    vfuncExpose?(): void
    vfuncHandleEvents?(handleEvents: boolean): void
    vfuncSetRenderRectangle?(x: number, y: number, width: number, height: number): void
    vfuncSetWindowHandle?(handle: any): void
    static name: string
    static installProperties(oclass: GObject.ObjectClass, lastPropId: number): void
    static setProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
}
export interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
export class ColorBalanceChannel {
    /* Fields of GstVideo.ColorBalanceChannel */
    parent: GObject.Object
    label: string
    minValue: number
    maxValue: number
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
    /* Virtual methods of GstVideo.ColorBalanceChannel */
    vfuncValueChanged?(value: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstVideo.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", value: number): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
}
export class VideoAggregator {
    /* Properties of GstBase.Aggregator */
    emitSignals: boolean
    latency: number
    minUpstreamLatency: number
    startTime: number
    startTimeSelection: GstBase.AggregatorStartTimeSelection
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoAggregator */
    aggregator: GstBase.Aggregator
    info: VideoInfo
    /* Fields of GstBase.Aggregator */
    srcpad: Gst.Pad
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstBase.Aggregator */
    finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    getLatency(): Gst.ClockTime
    negotiate(): boolean
    peekNextSample(pad: GstBase.AggregatorPad): Gst.Sample | null
    selectedSamples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setSrcCaps(caps: Gst.Caps): void
    simpleGetNextTime(): Gst.ClockTime
    updateSegment(segment: Gst.Segment): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoAggregator */
    vfuncAggregateFrames?(outbuffer: Gst.Buffer): Gst.FlowReturn
    vfuncCreateOutputBuffer?(outbuffer: Gst.Buffer): Gst.FlowReturn
    vfuncFindBestFormat?(downstreamCaps: Gst.Caps, bestInfo: VideoInfo, atLeastOneAlpha: boolean): void
    vfuncUpdateCaps?(caps: Gst.Caps): Gst.Caps
    /* Virtual methods of GstBase.Aggregator */
    vfuncAggregate?(timeout: boolean): Gst.FlowReturn
    vfuncClip?(aggregatorPad: GstBase.AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    vfuncDecideAllocation?(query: Gst.Query): boolean
    vfuncFinishBuffer?(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncFinishBufferList?(bufferlist: Gst.BufferList): Gst.FlowReturn
    vfuncFixateSrcCaps?(caps: Gst.Caps): Gst.Caps
    vfuncFlush?(): Gst.FlowReturn
    vfuncGetNextTime?(): Gst.ClockTime
    vfuncNegotiate?(): boolean
    vfuncNegotiatedSrcCaps?(caps: Gst.Caps): boolean
    vfuncPeekNextSample?(aggregatorPad: GstBase.AggregatorPad): Gst.Sample | null
    vfuncProposeAllocation?(pad: GstBase.AggregatorPad, decideQuery: Gst.Query, query: Gst.Query): boolean
    vfuncSinkEvent?(aggregatorPad: GstBase.AggregatorPad, event: Gst.Event): boolean
    vfuncSinkEventPreQueue?(aggregatorPad: GstBase.AggregatorPad, event: Gst.Event): Gst.FlowReturn
    vfuncSinkQuery?(aggregatorPad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfuncSinkQueryPreQueue?(aggregatorPad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfuncSrcActivate?(mode: Gst.PadMode, active: boolean): boolean
    vfuncSrcEvent?(event: Gst.Event): boolean
    vfuncSrcQuery?(query: Gst.Query): boolean
    vfuncStart?(): boolean
    vfuncStop?(): boolean
    vfuncUpdateSrcCaps?(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncQuery?(query: Gst.Query): boolean
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: VideoAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    connect_after(sigName: "samples-selected", callback: (($obj: VideoAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    on(sigName: "samples-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "samples-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "samples-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoAggregator) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoAggregator) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: VideoAggregator, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoAggregator, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: VideoAggregator, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoAggregator, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time-selection", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregator_ConstructProps)
    _init (config?: VideoAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoAggregatorConvertPad_ConstructProps extends VideoAggregatorPad_ConstructProps {
    converterConfig?: Gst.Structure
}
export class VideoAggregatorConvertPad {
    /* Properties of GstVideo.VideoAggregatorConvertPad */
    converterConfig: Gst.Structure
    /* Properties of GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase.AggregatorPad */
    emitSignals: boolean
    /* Properties of Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoAggregatorConvertPad */
    /* Fields of GstVideo.VideoAggregatorPad */
    info: VideoInfo
    /* Fields of GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst.Pad */
    object: Gst.Object
    elementPrivate: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstVideo.VideoAggregatorConvertPad */
    updateConversionInfo(): void
    /* Methods of GstVideo.VideoAggregatorPad */
    getCurrentBuffer(): Gst.Buffer
    getPreparedFrame(): VideoFrame
    hasCurrentBuffer(): boolean
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoAggregatorConvertPad */
    vfuncCreateConversionInfo?(agg: VideoAggregator, conversionInfo: VideoInfo): void
    /* Virtual methods of GstVideo.VideoAggregatorPad */
    vfuncCleanFrame?(videoaggregator: VideoAggregator, preparedFrame: VideoFrame): void
    vfuncPrepareFrame?(videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame): boolean
    vfuncUpdateConversionInfo?(): void
    /* Virtual methods of GstBase.AggregatorPad */
    vfuncFlush?(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfuncSkipBuffer?(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst.Pad */
    vfuncLinked?(peer: Gst.Pad): void
    vfuncUnlinked?(peer: Gst.Pad): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorConvertPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorConvertPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    on(sigName: "buffer-consumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    on(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    on(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorConvertPad, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorConvertPad, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorConvertPad_ConstructProps)
    _init (config?: VideoAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
    maxLastBufferRepeat?: number
    repeatAfterEos?: boolean
    zorder?: number
}
export class VideoAggregatorPad {
    /* Properties of GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase.AggregatorPad */
    emitSignals: boolean
    /* Properties of Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoAggregatorPad */
    info: VideoInfo
    /* Fields of GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst.Pad */
    object: Gst.Object
    elementPrivate: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstVideo.VideoAggregatorPad */
    getCurrentBuffer(): Gst.Buffer
    getPreparedFrame(): VideoFrame
    hasCurrentBuffer(): boolean
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoAggregatorPad */
    vfuncCleanFrame?(videoaggregator: VideoAggregator, preparedFrame: VideoFrame): void
    vfuncPrepareFrame?(videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame): boolean
    vfuncUpdateConversionInfo?(): void
    /* Virtual methods of GstBase.AggregatorPad */
    vfuncFlush?(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfuncSkipBuffer?(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst.Pad */
    vfuncLinked?(peer: Gst.Pad): void
    vfuncUnlinked?(peer: Gst.Pad): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    on(sigName: "buffer-consumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    on(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    on(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorPad, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorPad, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorPad_ConstructProps)
    _init (config?: VideoAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
export class VideoBufferPool {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoBufferPool */
    bufferpool: Gst.BufferPool
    priv: VideoBufferPoolPrivate
    /* Fields of Gst.BufferPool */
    object: Gst.Object
    flushing: number
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gst.BufferPool */
    acquireBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getConfig(): Gst.Structure
    getOptions(): string[]
    hasOption(option: string): boolean
    isActive(): boolean
    releaseBuffer(buffer: Gst.Buffer): void
    setActive(active: boolean): boolean
    setConfig(config: Gst.Structure): boolean
    setFlushing(flushing: boolean): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.BufferPool */
    vfuncAcquireBuffer?(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfuncAllocBuffer?(buffer: Gst.Buffer, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    vfuncFlushStart?(): void
    vfuncFlushStop?(): void
    vfuncFreeBuffer?(buffer: Gst.Buffer): void
    vfuncGetOptions?(): string[]
    vfuncReleaseBuffer?(buffer: Gst.Buffer): void
    vfuncResetBuffer?(buffer: Gst.Buffer): void
    vfuncSetConfig?(config: Gst.Structure): boolean
    vfuncStart?(): boolean
    vfuncStop?(): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoBufferPool, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoBufferPool, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoBufferPool_ConstructProps)
    _init (config?: VideoBufferPool_ConstructProps): void
    static new(): VideoBufferPool
    static $gtype: GObject.Type
}
export interface VideoDecoder_ConstructProps extends Gst.Element_ConstructProps {
    maxErrors?: number
    qos?: boolean
}
export class VideoDecoder {
    /* Properties of GstVideo.VideoDecoder */
    maxErrors: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoDecoder */
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): VideoCodecFrame
    getFrames(): VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getOldestFrame(): VideoCodecFrame
    getOutputState(): VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getQosProportion(): number
    haveFrame(): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: VideoCodecFrame): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: VideoFormat, interlaceMode: VideoInterlaceMode, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setOutputState(fmt: VideoFormat, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    setPacketized(packetized: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoDecoder */
    vfuncClose?(): boolean
    vfuncDecideAllocation?(query: Gst.Query): boolean
    vfuncDrain?(): Gst.FlowReturn
    vfuncFinish?(): Gst.FlowReturn
    vfuncFlush?(): boolean
    vfuncGetcaps?(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame?(frame: VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate?(): boolean
    vfuncOpen?(): boolean
    vfuncParse?(frame: VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    vfuncProposeAllocation?(query: Gst.Query): boolean
    vfuncReset?(hard: boolean): boolean
    vfuncSetFormat?(state: VideoCodecState): boolean
    vfuncSinkEvent?(event: Gst.Event): boolean
    vfuncSinkQuery?(query: Gst.Query): boolean
    vfuncSrcEvent?(event: Gst.Event): boolean
    vfuncSrcQuery?(query: Gst.Query): boolean
    vfuncStart?(): boolean
    vfuncStop?(): boolean
    vfuncTransformMeta?(frame: VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncQuery?(query: Gst.Query): boolean
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoDecoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoDecoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: VideoDecoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoDecoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: VideoDecoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoDecoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoDecoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoDecoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoDecoder_ConstructProps)
    _init (config?: VideoDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoEncoder_ConstructProps extends Gst.Element_ConstructProps {
    minForceKeyUnitInterval?: number
    qos?: boolean
}
export class VideoEncoder {
    /* Properties of GstVideo.VideoEncoder */
    minForceKeyUnitInterval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoEncoder */
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstVideo.VideoEncoder */
    allocateOutputBuffer(size: number): Gst.Buffer
    allocateOutputFrame(frame: VideoCodecFrame, size: number): Gst.FlowReturn
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getFrame(frameNumber: number): VideoCodecFrame
    getFrames(): VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxEncodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    getMinForceKeyUnitInterval(): Gst.ClockTime
    getOldestFrame(): VideoCodecFrame
    getOutputState(): VideoCodecState
    isQosEnabled(): boolean
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    setHeaders(headers: Gst.Buffer[]): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMinForceKeyUnitInterval(interval: Gst.ClockTime): void
    setMinPts(minPts: Gst.ClockTime): void
    setOutputState(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState
    setQosEnabled(enabled: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gst.Preset */
    deletePreset(name: string): boolean
    getMeta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    getPresetNames(): string[]
    getPropertyNames(): string[]
    isEditable(): boolean
    loadPreset(name: string): boolean
    renamePreset(oldName: string, newName: string): boolean
    savePreset(name: string): boolean
    setMeta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of GstVideo.VideoEncoder */
    vfuncClose?(): boolean
    vfuncDecideAllocation?(query: Gst.Query): boolean
    vfuncFinish?(): Gst.FlowReturn
    vfuncFlush?(): boolean
    vfuncGetcaps?(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame?(frame: VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate?(): boolean
    vfuncOpen?(): boolean
    vfuncPrePush?(frame: VideoCodecFrame): Gst.FlowReturn
    vfuncProposeAllocation?(query: Gst.Query): boolean
    vfuncReset?(hard: boolean): boolean
    vfuncSetFormat?(state: VideoCodecState): boolean
    vfuncSinkEvent?(event: Gst.Event): boolean
    vfuncSinkQuery?(query: Gst.Query): boolean
    vfuncSrcEvent?(event: Gst.Event): boolean
    vfuncSrcQuery?(query: Gst.Query): boolean
    vfuncStart?(): boolean
    vfuncStop?(): boolean
    vfuncTransformMeta?(frame: VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncQuery?(query: Gst.Query): boolean
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoEncoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoEncoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: VideoEncoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoEncoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: VideoEncoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoEncoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoEncoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoEncoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoEncoder_ConstructProps)
    _init (config?: VideoEncoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
export class VideoFilter {
    /* Properties of GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoFilter */
    element: GstBase.BaseTransform
    negotiated: boolean
    inInfo: VideoInfo
    outInfo: VideoInfo
    /* Fields of GstBase.BaseTransform */
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    haveSegment: boolean
    segment: Gst.Segment
    queuedBuf: Gst.Buffer
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstBase.BaseTransform */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    isInPlace(): boolean
    isPassthrough(): boolean
    isQosEnabled(): boolean
    reconfigure(): boolean
    reconfigureSink(): void
    reconfigureSrc(): void
    setGapAware(gapAware: boolean): void
    setInPlace(inPlace: boolean): void
    setPassthrough(passthrough: boolean): void
    setPreferPassthrough(preferPassthrough: boolean): void
    setQosEnabled(enabled: boolean): void
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    updateSrcCaps(updatedCaps: Gst.Caps): boolean
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoFilter */
    vfuncSetInfo?(incaps: Gst.Caps, inInfo: VideoInfo, outcaps: Gst.Caps, outInfo: VideoInfo): boolean
    vfuncTransformFrame?(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn
    vfuncTransformFrameIp?(frame: VideoFrame): Gst.FlowReturn
    /* Virtual methods of GstBase.BaseTransform */
    vfuncAcceptCaps?(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfuncBeforeTransform?(buffer: Gst.Buffer): void
    vfuncCopyMetadata?(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfuncDecideAllocation?(query: Gst.Query): boolean
    vfuncFilterMeta?(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfuncFixateCaps?(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfuncGenerateOutput?(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfuncGetUnitSize?(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfuncPrepareOutputBuffer?(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfuncProposeAllocation?(decideQuery: Gst.Query, query: Gst.Query): boolean
    vfuncQuery?(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfuncSetCaps?(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfuncSinkEvent?(event: Gst.Event): boolean
    vfuncSrcEvent?(event: Gst.Event): boolean
    vfuncStart?(): boolean
    vfuncStop?(): boolean
    vfuncSubmitInputBuffer?(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfuncTransform?(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfuncTransformCaps?(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfuncTransformIp?(buf: Gst.Buffer): Gst.FlowReturn
    vfuncTransformMeta?(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfuncTransformSize?(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: VideoFilter, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoFilter, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: VideoFilter, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoFilter, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoFilter_ConstructProps)
    _init (config?: VideoFilter_ConstructProps): void
    static $gtype: GObject.Type
}
export class VideoMultiviewFlagsSet {
    static name: string
}
export interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    showPrerollFrame?: boolean
}
export class VideoSink {
    /* Properties of GstVideo.VideoSink */
    showPrerollFrame: boolean
    /* Properties of GstBase.BaseSink */
    async: boolean
    blocksize: number
    enableLastSample: boolean
    readonly lastSample: Gst.Sample
    maxBitrate: number
    maxLateness: number
    processingDeadline: number
    qos: boolean
    renderDelay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttleTime: number
    tsOffset: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoSink */
    element: GstBase.BaseSink
    width: number
    height: number
    /* Fields of GstBase.BaseSink */
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    eos: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GstBase.BaseSink */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    getBlocksize(): number
    getDropOutOfSegment(): boolean
    getLastSample(): Gst.Sample | null
    getLatency(): Gst.ClockTime
    getMaxBitrate(): number
    getMaxLateness(): number
    getProcessingDeadline(): Gst.ClockTime
    getRenderDelay(): Gst.ClockTime
    getStats(): Gst.Structure
    getSync(): boolean
    getThrottleTime(): number
    getTsOffset(): Gst.ClockTimeDiff
    isAsyncEnabled(): boolean
    isLastSampleEnabled(): boolean
    isQosEnabled(): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstreamLive */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsyncEnabled(enabled: boolean): void
    setBlocksize(blocksize: number): void
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    setLastSampleEnabled(enabled: boolean): void
    setMaxBitrate(maxBitrate: number): void
    setMaxLateness(maxLateness: number): void
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    setQosEnabled(enabled: boolean): void
    setRenderDelay(delay: Gst.ClockTime): void
    setSync(sync: boolean): void
    setThrottleTime(throttle: number): void
    setTsOffset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitPreroll(): Gst.FlowReturn
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoSink */
    vfuncShowFrame?(buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase.BaseSink */
    vfuncActivatePull?(active: boolean): boolean
    vfuncEvent?(event: Gst.Event): boolean
    vfuncFixate?(caps: Gst.Caps): Gst.Caps
    vfuncGetCaps?(filter: Gst.Caps): Gst.Caps
    vfuncGetTimes?(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfuncPrepare?(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncPrepareList?(bufferList: Gst.BufferList): Gst.FlowReturn
    vfuncPreroll?(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncProposeAllocation?(query: Gst.Query): boolean
    vfuncQuery?(query: Gst.Query): boolean
    vfuncRender?(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncRenderList?(bufferList: Gst.BufferList): Gst.FlowReturn
    vfuncSetCaps?(caps: Gst.Caps): boolean
    vfuncStart?(): boolean
    vfuncStop?(): boolean
    vfuncUnlock?(): boolean
    vfuncUnlockStop?(): boolean
    vfuncWaitEvent?(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst.Element */
    vfuncChangeState?(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState?(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads?(): void
    vfuncPadAdded?(pad: Gst.Pad): void
    vfuncPadRemoved?(pad: Gst.Pad): void
    vfuncPostMessage?(message: Gst.Message): boolean
    vfuncProvideClock?(): Gst.Clock | null
    vfuncReleasePad?(pad: Gst.Pad): void
    vfuncRequestNewPad?(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent?(event: Gst.Event): boolean
    vfuncSetBus?(bus?: Gst.Bus | null): void
    vfuncSetClock?(clock?: Gst.Clock | null): boolean
    vfuncSetContext?(context: Gst.Context): void
    vfuncSetState?(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged?(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify?(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: VideoSink, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoSink, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoSink, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    static centerRect(src: VideoRectangle, dst: VideoRectangle, result: VideoRectangle, scaling: boolean): void
    static $gtype: GObject.Type
}
export abstract class ColorBalanceChannelClass {
    /* Fields of GstVideo.ColorBalanceChannelClass */
    parent: GObject.ObjectClass
    valueChanged: any
    static name: string
}
export abstract class ColorBalanceInterface {
    /* Fields of GstVideo.ColorBalanceInterface */
    iface: GObject.TypeInterface
    listChannels: any
    setValue: any
    getValue: any
    getBalanceType: any
    valueChanged: any
    static name: string
}
export abstract class NavigationInterface {
    /* Fields of GstVideo.NavigationInterface */
    iface: GObject.TypeInterface
    sendEvent: any
    static name: string
}
export class VideoAFDMeta {
    /* Fields of GstVideo.VideoAFDMeta */
    meta: Gst.Meta
    field: number
    spec: VideoAFDSpec
    afd: VideoAFDValue
    static name: string
    static getInfo(): Gst.MetaInfo
}
export class VideoAffineTransformationMeta {
    /* Fields of GstVideo.VideoAffineTransformationMeta */
    meta: Gst.Meta
    matrix: number[]
    /* Methods of GstVideo.VideoAffineTransformationMeta */
    applyMatrix(matrix: number[]): void
    static name: string
    static getInfo(): Gst.MetaInfo
}
export abstract class VideoAggregatorClass {
    /* Fields of GstVideo.VideoAggregatorClass */
    updateCaps: any
    aggregateFrames: any
    createOutputBuffer: any
    findBestFormat: any
    static name: string
}
export abstract class VideoAggregatorConvertPadClass {
    /* Fields of GstVideo.VideoAggregatorConvertPadClass */
    parentClass: VideoAggregatorPadClass
    createConversionInfo: any
    static name: string
}
export class VideoAggregatorConvertPadPrivate {
    static name: string
}
export abstract class VideoAggregatorPadClass {
    /* Fields of GstVideo.VideoAggregatorPadClass */
    parentClass: GstBase.AggregatorPadClass
    updateConversionInfo: any
    prepareFrame: any
    cleanFrame: any
    gstReserved: object[]
    static name: string
}
export class VideoAggregatorPadPrivate {
    static name: string
}
export class VideoAggregatorPrivate {
    static name: string
}
export class VideoAlignment {
    /* Fields of GstVideo.VideoAlignment */
    paddingTop: number
    paddingBottom: number
    paddingLeft: number
    paddingRight: number
    strideAlign: number[]
    /* Methods of GstVideo.VideoAlignment */
    reset(): void
    static name: string
}
export class VideoAncillary {
    /* Fields of GstVideo.VideoAncillary */
    dID: number
    sDIDBlockNumber: number
    dataCount: number
    data: any
    static name: string
}
export class VideoBarMeta {
    /* Fields of GstVideo.VideoBarMeta */
    meta: Gst.Meta
    field: number
    isLetterbox: boolean
    barData1: number
    barData2: number
    static name: string
    static getInfo(): Gst.MetaInfo
}
export abstract class VideoBufferPoolClass {
    /* Fields of GstVideo.VideoBufferPoolClass */
    parentClass: Gst.BufferPoolClass
    static name: string
}
export class VideoBufferPoolPrivate {
    static name: string
}
export class VideoCaptionMeta {
    /* Fields of GstVideo.VideoCaptionMeta */
    meta: Gst.Meta
    captionType: VideoCaptionType
    data: any
    size: number
    static name: string
    static getInfo(): Gst.MetaInfo
}
export class VideoChromaResample {
    /* Methods of GstVideo.VideoChromaResample */
    free(): void
    getInfo(nLines: number, offset: number): void
    static name: string
}
export class VideoCodecFrame {
    /* Fields of GstVideo.VideoCodecFrame */
    systemFrameNumber: number
    dts: Gst.ClockTime
    pts: Gst.ClockTime
    duration: Gst.ClockTime
    distanceFromSync: number
    inputBuffer: Gst.Buffer
    outputBuffer: Gst.Buffer
    deadline: Gst.ClockTime
    /* Methods of GstVideo.VideoCodecFrame */
    getUserData(): object | null
    ref(): VideoCodecFrame
    setUserData(notify: GLib.DestroyNotify): void
    unref(): void
    static name: string
}
export class VideoCodecState {
    /* Fields of GstVideo.VideoCodecState */
    info: VideoInfo
    caps: Gst.Caps
    codecData: Gst.Buffer
    allocationCaps: Gst.Caps
    /* Methods of GstVideo.VideoCodecState */
    ref(): VideoCodecState
    unref(): void
    static name: string
}
export class VideoColorPrimariesInfo {
    /* Fields of GstVideo.VideoColorPrimariesInfo */
    primaries: VideoColorPrimaries
    wx: number
    wy: number
    rx: number
    ry: number
    gx: number
    gy: number
    bx: number
    by: number
    static name: string
}
export class VideoColorimetry {
    /* Fields of GstVideo.VideoColorimetry */
    range: VideoColorRange
    matrix: VideoColorMatrix
    transfer: VideoTransferFunction
    primaries: VideoColorPrimaries
    /* Methods of GstVideo.VideoColorimetry */
    fromString(color: string): boolean
    isEqual(other: VideoColorimetry): boolean
    matches(color: string): boolean
    static name: string
}
export class VideoContentLightLevel {
    /* Fields of GstVideo.VideoContentLightLevel */
    maxContentLightLevel: number
    maxFrameAverageLightLevel: number
    /* Methods of GstVideo.VideoContentLightLevel */
    addToCaps(caps: Gst.Caps): boolean
    fromCaps(caps: Gst.Caps): boolean
    fromString(level: string): boolean
    init(): void
    static name: string
}
export class VideoConverter {
    /* Methods of GstVideo.VideoConverter */
    frame(src: VideoFrame, dest: VideoFrame): void
    free(): void
    getConfig(): Gst.Structure
    setConfig(config: Gst.Structure): boolean
    static name: string
}
export class VideoCropMeta {
    /* Fields of GstVideo.VideoCropMeta */
    meta: Gst.Meta
    x: number
    y: number
    width: number
    height: number
    static name: string
    static getInfo(): Gst.MetaInfo
}
export abstract class VideoDecoderClass {
    /* Fields of GstVideo.VideoDecoderClass */
    open: any
    close: any
    start: any
    stop: any
    parse: any
    setFormat: any
    reset: any
    finish: any
    handleFrame: any
    sinkEvent: any
    srcEvent: any
    negotiate: any
    decideAllocation: any
    proposeAllocation: any
    flush: any
    sinkQuery: any
    srcQuery: any
    getcaps: any
    drain: any
    transformMeta: any
    static name: string
}
export class VideoDecoderPrivate {
    static name: string
}
export abstract class VideoDirectionInterface {
    /* Fields of GstVideo.VideoDirectionInterface */
    iface: GObject.TypeInterface
    static name: string
}
export class VideoDither {
    /* Methods of GstVideo.VideoDither */
    free(): void
    line(line: object | null, x: number, y: number, width: number): void
    static name: string
}
export abstract class VideoEncoderClass {
    /* Fields of GstVideo.VideoEncoderClass */
    open: any
    close: any
    start: any
    stop: any
    setFormat: any
    handleFrame: any
    reset: any
    finish: any
    prePush: any
    getcaps: any
    sinkEvent: any
    srcEvent: any
    negotiate: any
    decideAllocation: any
    proposeAllocation: any
    flush: any
    sinkQuery: any
    srcQuery: any
    transformMeta: any
    static name: string
}
export class VideoEncoderPrivate {
    static name: string
}
export abstract class VideoFilterClass {
    /* Fields of GstVideo.VideoFilterClass */
    parentClass: GstBase.BaseTransformClass
    setInfo: any
    transformFrame: any
    transformFrameIp: any
    static name: string
}
export class VideoFormatInfo {
    /* Fields of GstVideo.VideoFormatInfo */
    format: VideoFormat
    name: string
    description: string
    flags: VideoFormatFlags
    bits: number
    nComponents: number
    shift: number[]
    depth: number[]
    pixelStride: number[]
    nPlanes: number
    plane: number[]
    poffset: number[]
    wSub: number[]
    hSub: number[]
    unpackFormat: VideoFormat
    unpackFunc: VideoFormatUnpack
    packLines: number
    packFunc: VideoFormatPack
    tileMode: VideoTileMode
    tileWs: number
    tileHs: number
    /* Methods of GstVideo.VideoFormatInfo */
    component(plane: number): /* components */ number
    static name: string
}
export class VideoFrame {
    /* Fields of GstVideo.VideoFrame */
    info: VideoInfo
    flags: VideoFrameFlags
    buffer: Gst.Buffer
    meta: object
    id: number
    data: object[]
    map: Gst.MapInfo[]
    /* Methods of GstVideo.VideoFrame */
    copy(src: VideoFrame): boolean
    copyPlane(src: VideoFrame, plane: number): boolean
    mapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): boolean
    unmap(): void
    static name: string
}
export class VideoGLTextureUploadMeta {
    /* Fields of GstVideo.VideoGLTextureUploadMeta */
    meta: Gst.Meta
    textureOrientation: VideoGLTextureOrientation
    nTextures: number
    textureType: VideoGLTextureType[]
    /* Methods of GstVideo.VideoGLTextureUploadMeta */
    upload(textureId: number): boolean
    static name: string
    static getInfo(): Gst.MetaInfo
}
export class VideoInfo {
    /* Fields of GstVideo.VideoInfo */
    finfo: VideoFormatInfo
    interlaceMode: VideoInterlaceMode
    flags: VideoFlags
    width: number
    height: number
    size: number
    views: number
    chromaSite: VideoChromaSite
    colorimetry: VideoColorimetry
    parN: number
    parD: number
    fpsN: number
    fpsD: number
    offset: number[]
    stride: number[]
    /* Methods of GstVideo.VideoInfo */
    align(align: VideoAlignment): boolean
    alignFull(align: VideoAlignment): [ /* returnType */ boolean, /* planeSize */ number | null ]
    convert(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
    copy(): VideoInfo
    free(): void
    fromCaps(caps: Gst.Caps): boolean
    init(): void
    isEqual(other: VideoInfo): boolean
    setFormat(format: VideoFormat, width: number, height: number): boolean
    setInterlacedFormat(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean
    toCaps(): Gst.Caps
    static name: string
    static new(): VideoInfo
    constructor()
    static new(): VideoInfo
}
export class VideoMasteringDisplayInfo {
    /* Fields of GstVideo.VideoMasteringDisplayInfo */
    displayPrimaries: VideoMasteringDisplayInfoCoordinates[]
    whitePoint: VideoMasteringDisplayInfoCoordinates
    maxDisplayMasteringLuminance: number
    minDisplayMasteringLuminance: number
    /* Methods of GstVideo.VideoMasteringDisplayInfo */
    addToCaps(caps: Gst.Caps): boolean
    fromCaps(caps: Gst.Caps): boolean
    init(): void
    isEqual(other: VideoMasteringDisplayInfo): boolean
    static name: string
    static fromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
}
export class VideoMasteringDisplayInfoCoordinates {
    /* Fields of GstVideo.VideoMasteringDisplayInfoCoordinates */
    x: number
    y: number
    static name: string
}
export class VideoMeta {
    /* Fields of GstVideo.VideoMeta */
    meta: Gst.Meta
    buffer: Gst.Buffer
    flags: VideoFrameFlags
    format: VideoFormat
    id: number
    width: number
    height: number
    nPlanes: number
    offset: number[]
    stride: number[]
    map: any
    unmap: any
    alignment: VideoAlignment
    /* Methods of GstVideo.VideoMeta */
    getPlaneHeight(): [ /* returnType */ boolean, /* planeHeight */ number[] ]
    getPlaneSize(): [ /* returnType */ boolean, /* planeSize */ number[] ]
    setAlignment(alignment: VideoAlignment): boolean
    static name: string
    static getInfo(): Gst.MetaInfo
}
export class VideoMetaTransform {
    /* Fields of GstVideo.VideoMetaTransform */
    inInfo: VideoInfo
    outInfo: VideoInfo
    static name: string
    static scaleGetQuark(): GLib.Quark
}
export abstract class VideoOrientationInterface {
    /* Fields of GstVideo.VideoOrientationInterface */
    iface: GObject.TypeInterface
    getHflip: any
    getVflip: any
    getHcenter: any
    getVcenter: any
    setHflip: any
    setVflip: any
    setHcenter: any
    setVcenter: any
    static name: string
}
export class VideoOverlayComposition {
    /* Methods of GstVideo.VideoOverlayComposition */
    addRectangle(rectangle: VideoOverlayRectangle): void
    blend(videoBuf: VideoFrame): boolean
    copy(): VideoOverlayComposition
    getRectangle(n: number): VideoOverlayRectangle
    getSeqnum(): number
    makeWritable(): VideoOverlayComposition
    nRectangles(): number
    static name: string
    static new(rectangle: VideoOverlayRectangle): VideoOverlayComposition
    constructor(rectangle: VideoOverlayRectangle)
    static new(rectangle: VideoOverlayRectangle): VideoOverlayComposition
}
export class VideoOverlayCompositionMeta {
    /* Fields of GstVideo.VideoOverlayCompositionMeta */
    meta: Gst.Meta
    overlay: VideoOverlayComposition
    static name: string
    static getInfo(): Gst.MetaInfo
}
export abstract class VideoOverlayInterface {
    /* Fields of GstVideo.VideoOverlayInterface */
    iface: GObject.TypeInterface
    expose: any
    handleEvents: any
    setRenderRectangle: any
    setWindowHandle: any
    static name: string
}
export class VideoOverlayRectangle {
    /* Methods of GstVideo.VideoOverlayRectangle */
    copy(): VideoOverlayRectangle
    getFlags(): VideoOverlayFormatFlags
    getGlobalAlpha(): number
    getPixelsArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsUnscaledArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsUnscaledAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsUnscaledRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    getRenderRectangle(): [ /* returnType */ boolean, /* renderX */ number | null, /* renderY */ number | null, /* renderWidth */ number | null, /* renderHeight */ number | null ]
    getSeqnum(): number
    setGlobalAlpha(globalAlpha: number): void
    setRenderRectangle(renderX: number, renderY: number, renderWidth: number, renderHeight: number): void
    static name: string
    static newRaw(pixels: Gst.Buffer, renderX: number, renderY: number, renderWidth: number, renderHeight: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle
}
export class VideoRectangle {
    /* Fields of GstVideo.VideoRectangle */
    x: number
    y: number
    w: number
    h: number
    static name: string
}
export class VideoRegionOfInterestMeta {
    /* Fields of GstVideo.VideoRegionOfInterestMeta */
    meta: Gst.Meta
    roiType: GLib.Quark
    id: number
    parentId: number
    x: number
    y: number
    w: number
    h: number
    params: object[]
    /* Methods of GstVideo.VideoRegionOfInterestMeta */
    addParam(s: Gst.Structure): void
    getParam(name: string): Gst.Structure | null
    static name: string
    static getInfo(): Gst.MetaInfo
}
export class VideoResampler {
    /* Fields of GstVideo.VideoResampler */
    inSize: number
    outSize: number
    maxTaps: number
    nPhases: number
    offset: number
    phase: number
    nTaps: number
    taps: number
    /* Methods of GstVideo.VideoResampler */
    clear(): void
    init(method: VideoResamplerMethod, flags: VideoResamplerFlags, nPhases: number, nTaps: number, shift: number, inSize: number, outSize: number, options: Gst.Structure): boolean
    static name: string
}
export class VideoScaler {
    /* Methods of GstVideo.VideoScaler */
    TODO_2d(vscale: VideoScaler, format: VideoFormat, src: object | null, srcStride: number, dest: object | null, destStride: number, x: number, y: number, width: number, height: number): void
    free(): void
    getCoeff(outOffset: number, inOffset: number, nTaps: number): number
    getMaxTaps(): number
    horizontal(format: VideoFormat, src: object | null, dest: object | null, destOffset: number, width: number): void
    vertical(format: VideoFormat, srcLines: object | null, dest: object | null, destOffset: number, width: number): void
    static name: string
}
export abstract class VideoSinkClass {
    /* Fields of GstVideo.VideoSinkClass */
    parentClass: GstBase.BaseSinkClass
    showFrame: any
    static name: string
}
export class VideoSinkPrivate {
    static name: string
}
export class VideoTimeCode {
    /* Fields of GstVideo.VideoTimeCode */
    config: VideoTimeCodeConfig
    hours: number
    minutes: number
    seconds: number
    frames: number
    fieldCount: number
    /* Methods of GstVideo.VideoTimeCode */
    addFrames(frames: number): void
    addInterval(tcInter: VideoTimeCodeInterval): VideoTimeCode | null
    clear(): void
    compare(tc2: VideoTimeCode): number
    copy(): VideoTimeCode
    framesSinceDailyJam(): number
    free(): void
    incrementFrame(): void
    init(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): void
    initFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): void
    initFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): boolean
    isValid(): boolean
    nsecSinceDailyJam(): number
    toDateTime(): GLib.DateTime | null
    static name: string
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    constructor(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number)
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    static newEmpty(): VideoTimeCode
    static newFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromString(tcStr: string): VideoTimeCode | null
}
export class VideoTimeCodeConfig {
    /* Fields of GstVideo.VideoTimeCodeConfig */
    fpsN: number
    fpsD: number
    flags: VideoTimeCodeFlags
    latestDailyJam: GLib.DateTime
    static name: string
}
export class VideoTimeCodeInterval {
    /* Fields of GstVideo.VideoTimeCodeInterval */
    hours: number
    minutes: number
    seconds: number
    frames: number
    /* Methods of GstVideo.VideoTimeCodeInterval */
    clear(): void
    copy(): VideoTimeCodeInterval
    free(): void
    init(hours: number, minutes: number, seconds: number, frames: number): void
    static name: string
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    constructor(hours: number, minutes: number, seconds: number, frames: number)
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    static newFromString(tcInterStr: string): VideoTimeCodeInterval | null
}
export class VideoTimeCodeMeta {
    /* Fields of GstVideo.VideoTimeCodeMeta */
    meta: Gst.Meta
    tc: VideoTimeCode
    static name: string
    static getInfo(): Gst.MetaInfo
}
export class VideoVBIEncoder {
    /* Methods of GstVideo.VideoVBIEncoder */
    addAncillary(composite: boolean, dID: number, sDIDBlockNumber: number, data: any): boolean
    copy(): VideoVBIEncoder
    free(): void
    writeLine(data: number): void
    static name: string
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
    constructor(format: VideoFormat, pixelWidth: number)
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
}
export class VideoVBIParser {
    /* Methods of GstVideo.VideoVBIParser */
    addLine(data: any): void
    copy(): VideoVBIParser
    free(): void
    getAncillary(): [ /* returnType */ VideoVBIParserResult, /* anc */ VideoAncillary ]
    static name: string
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
    constructor(format: VideoFormat, pixelWidth: number)
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
}
}