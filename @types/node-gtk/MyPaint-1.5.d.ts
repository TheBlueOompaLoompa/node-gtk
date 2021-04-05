/**
 * MyPaint-1.5
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace MyPaint {

export enum BrushInput {
    INPUT_PRESSURE,
    INPUT_SPEED1,
    INPUT_SPEED2,
    INPUT_RANDOM,
    INPUT_STROKE,
    INPUT_DIRECTION,
    INPUT_TILT_DECLINATION,
    INPUT_TILT_ASCENSION,
    INPUT_CUSTOM,
    INPUT_DIRECTION_ANGLE,
    INPUT_ATTACK_ANGLE,
    INPUT_TILT_DECLINATIONX,
    INPUT_TILT_DECLINATIONY,
    INPUT_GRIDMAP_X,
    INPUT_GRIDMAP_Y,
    INPUT_VIEWZOOM,
    INPUT_BARREL_ROTATION,
    INPUT_BRUSH_RADIUS,
    INPUTS_COUNT,
}
export enum BrushSetting {
    SETTING_OPAQUE,
    SETTING_OPAQUE_MULTIPLY,
    SETTING_OPAQUE_LINEARIZE,
    SETTING_RADIUS_LOGARITHMIC,
    SETTING_HARDNESS,
    SETTING_ANTI_ALIASING,
    SETTING_DABS_PER_BASIC_RADIUS,
    SETTING_DABS_PER_ACTUAL_RADIUS,
    SETTING_DABS_PER_SECOND,
    SETTING_RADIUS_BY_RANDOM,
    SETTING_SPEED1_SLOWNESS,
    SETTING_SPEED2_SLOWNESS,
    SETTING_SPEED1_GAMMA,
    SETTING_SPEED2_GAMMA,
    SETTING_OFFSET_BY_RANDOM,
    SETTING_OFFSET_BY_SPEED,
    SETTING_OFFSET_BY_SPEED_SLOWNESS,
    SETTING_SLOW_TRACKING,
    SETTING_SLOW_TRACKING_PER_DAB,
    SETTING_TRACKING_NOISE,
    SETTING_COLOR_H,
    SETTING_COLOR_S,
    SETTING_COLOR_V,
    SETTING_RESTORE_COLOR,
    SETTING_CHANGE_COLOR_H,
    SETTING_CHANGE_COLOR_L,
    SETTING_CHANGE_COLOR_HSL_S,
    SETTING_CHANGE_COLOR_V,
    SETTING_CHANGE_COLOR_HSV_S,
    SETTING_SMUDGE,
    SETTING_SMUDGE_LENGTH,
    SETTING_SMUDGE_RADIUS_LOG,
    SETTING_ERASER,
    SETTING_STROKE_THRESHOLD,
    SETTING_STROKE_DURATION_LOGARITHMIC,
    SETTING_STROKE_HOLDTIME,
    SETTING_CUSTOM_INPUT,
    SETTING_CUSTOM_INPUT_SLOWNESS,
    SETTING_ELLIPTICAL_DAB_RATIO,
    SETTING_ELLIPTICAL_DAB_ANGLE,
    SETTING_DIRECTION_FILTER,
    SETTING_LOCK_ALPHA,
    SETTING_COLORIZE,
    SETTING_SNAP_TO_PIXEL,
    SETTING_PRESSURE_GAIN_LOG,
    SETTING_GRIDMAP_SCALE,
    SETTING_GRIDMAP_SCALE_X,
    SETTING_GRIDMAP_SCALE_Y,
    SETTING_SMUDGE_LENGTH_LOG,
    SETTING_SMUDGE_BUCKET,
    SETTING_SMUDGE_TRANSPARENCY,
    SETTING_OFFSET_Y,
    SETTING_OFFSET_X,
    SETTING_OFFSET_ANGLE,
    SETTING_OFFSET_ANGLE_ASC,
    SETTING_OFFSET_ANGLE_VIEW,
    SETTING_OFFSET_ANGLE_2,
    SETTING_OFFSET_ANGLE_2_ASC,
    SETTING_OFFSET_ANGLE_2_VIEW,
    SETTING_OFFSET_ANGLE_ADJ,
    SETTING_OFFSET_MULTIPLIER,
    SETTING_POSTERIZE,
    SETTING_POSTERIZE_NUM,
    SETTING_PAINT_MODE,
    SETTINGS_COUNT,
}
export enum BrushState {
    STATE_X,
    STATE_Y,
    STATE_PRESSURE,
    STATE_PARTIAL_DABS,
    STATE_ACTUAL_RADIUS,
    STATE_SMUDGE_RA,
    STATE_SMUDGE_GA,
    STATE_SMUDGE_BA,
    STATE_SMUDGE_A,
    STATE_LAST_GETCOLOR_R,
    STATE_LAST_GETCOLOR_G,
    STATE_LAST_GETCOLOR_B,
    STATE_LAST_GETCOLOR_A,
    STATE_LAST_GETCOLOR_RECENTNESS,
    STATE_ACTUAL_X,
    STATE_ACTUAL_Y,
    STATE_NORM_DX_SLOW,
    STATE_NORM_DY_SLOW,
    STATE_NORM_SPEED1_SLOW,
    STATE_NORM_SPEED2_SLOW,
    STATE_STROKE,
    STATE_STROKE_STARTED,
    STATE_CUSTOM_INPUT,
    STATE_RNG_SEED,
    STATE_ACTUAL_ELLIPTICAL_DAB_RATIO,
    STATE_ACTUAL_ELLIPTICAL_DAB_ANGLE,
    STATE_DIRECTION_DX,
    STATE_DIRECTION_DY,
    STATE_DECLINATION,
    STATE_ASCENSION,
    STATE_VIEWZOOM,
    STATE_VIEWROTATION,
    STATE_DIRECTION_ANGLE_DX,
    STATE_DIRECTION_ANGLE_DY,
    STATE_ATTACK_ANGLE,
    STATE_FLIP,
    STATE_GRIDMAP_X,
    STATE_GRIDMAP_Y,
    STATE_DECLINATIONX,
    STATE_DECLINATIONY,
    STATE_DABS_PER_BASIC_RADIUS,
    STATE_DABS_PER_ACTUAL_RADIUS,
    STATE_DABS_PER_SECOND,
    STATE_BARREL_ROTATION,
    STATES_COUNT,
}
export function brushInputFromCname(cname: string): BrushInput
export function brushInputInfo(id: BrushInput): BrushInputInfo
export function brushSettingFromCname(cname: string): BrushSetting
export function brushSettingInfo(id: BrushSetting): BrushSettingInfo
export interface SurfaceBeginAtomicFunction {
    (self: Surface): void
}
export interface SurfaceDestroyFunction {
    (self: Surface): void
}
export interface SurfaceDrawDabFunction {
    (self: Surface, x: number, y: number, radius: number, colorR: number, colorG: number, colorB: number, opaque: number, hardness: number, alphaEraser: number, aspectRatio: number, angle: number, lockAlpha: number, colorize: number): number
}
export interface SurfaceEndAtomicFunction {
    (self: Surface, roi: Rectangle): void
}
export interface SurfaceGetColorFunction {
    (self: Surface, x: number, y: number, radius: number, colorR: number, colorG: number, colorB: number, colorA: number): void
}
export interface SurfaceSavePngFunction {
    (self: Surface, path: string, x: number, y: number, width: number, height: number): void
}
export interface TileRequestEndFunction {
    (self: TiledSurface, request: TileRequest): void
}
export interface TileRequestStartFunction {
    (self: TiledSurface, request: TileRequest): void
}
export class Brush {
    /* Methods of MyPaint.Brush */
    fromDefaults(): void
    fromString(string: string): boolean
    getBaseValue(id: BrushSetting): number
    getInputsUsedN(id: BrushSetting): number
    getMappingN(id: BrushSetting, input: BrushInput): number
    getMappingPoint(id: BrushSetting, input: BrushInput, index: number): [ /* x */ number, /* y */ number ]
    getState(i: BrushState): number
    getTotalStrokePaintingTime(): number
    isConstant(id: BrushSetting): boolean
    newStroke(): void
    reset(): void
    setBaseValue(id: BrushSetting, value: number): void
    setMappingN(id: BrushSetting, input: BrushInput, n: number): void
    setMappingPoint(id: BrushSetting, input: BrushInput, index: number, x: number, y: number): void
    setPrintInputs(enabled: boolean): void
    setState(i: BrushState, value: number): void
    strokeTo(surface: Surface, x: number, y: number, pressure: number, xtilt: number, ytilt: number, dtime: number): number
    static name: string
    static new(): Brush
    constructor()
    static new(): Brush
    static newWithBuckets(numSmudgeBuckets: number): Brush
    static inputFromCname(cname: string): BrushInput
    static settingFromCname(cname: string): BrushSetting
}
export class BrushInputInfo {
    /* Fields of MyPaint.BrushInputInfo */
    cname: string
    hardMin: number
    softMin: number
    normal: number
    softMax: number
    hardMax: number
    name: string
    tooltip: string
    /* Methods of MyPaint.BrushInputInfo */
    getName(): string
    getTooltip(): string
    static name: string
}
export class BrushSettingInfo {
    /* Fields of MyPaint.BrushSettingInfo */
    cname: string
    name: string
    constant: boolean
    min: number
    def: number
    max: number
    tooltip: string
    /* Methods of MyPaint.BrushSettingInfo */
    getName(): string
    getTooltip(): string
    static name: string
}
export class FixedTiledSurface {
    /* Methods of MyPaint.FixedTiledSurface */
    getHeight(): number
    getWidth(): number
    interface(): Surface
    static name: string
    static new(width: number, height: number): FixedTiledSurface
    constructor(width: number, height: number)
    static new(width: number, height: number): FixedTiledSurface
}
export class Rectangle {
    /* Fields of MyPaint.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of MyPaint.Rectangle */
    copy(): Rectangle
    expandToIncludePoint(x: number, y: number): void
    expandToIncludeRect(other: Rectangle): void
    static name: string
}
export class Rectangles {
    /* Fields of MyPaint.Rectangles */
    numRectangles: number
    rectangles: Rectangle
    static name: string
}
export class Surface {
    /* Fields of MyPaint.Surface */
    drawDab: SurfaceDrawDabFunction
    getColor: SurfaceGetColorFunction
    beginAtomic: SurfaceBeginAtomicFunction
    endAtomic: SurfaceEndAtomicFunction
    destroy: SurfaceDestroyFunction
    savePng: SurfaceSavePngFunction
    refcount: number
    /* Methods of MyPaint.Surface */
    getAlpha(x: number, y: number, radius: number): number
    static name: string
}
export class Surface2 {
    /* Fields of MyPaint.Surface2 */
    parent: Surface
    drawDabPigment: any
    getColorPigment: any
    endAtomicMulti: any
    /* Methods of MyPaint.Surface2 */
    static name: string
}
export class TileRequest {
    /* Fields of MyPaint.TileRequest */
    tx: number
    ty: number
    readonly: boolean
    buffer: number
    context: object
    threadId: number
    mipmapLevel: number
    /* Methods of MyPaint.TileRequest */
    init(level: number, tx: number, ty: number, readonly: boolean): void
    static name: string
}
export class TiledSurface {
    /* Fields of MyPaint.TiledSurface */
    parent: Surface
    tileRequestStart: TileRequestStartFunction
    tileRequestEnd: TileRequestEndFunction
    surfaceDoSymmetry: boolean
    surfaceCenterX: number
    operationQueue: object
    dirtyBbox: Rectangle
    threadsafeTileRequests: boolean
    tileSize: number
    /* Methods of MyPaint.TiledSurface */
    getAlpha(x: number, y: number, radius: number): number
    setSymmetryState(active: boolean, centerX: number): void
    static name: string
}
export class TiledSurface2 {
    /* Fields of MyPaint.TiledSurface2 */
    parent: any
    tileRequestStart: any
    tileRequestEnd: any
    operationQueue: object
    threadsafeTileRequests: boolean
    tileSize: number
    symmetryData: any
    numBboxes: number
    numBboxesDirtied: number
    bboxes: Rectangle
    /* Methods of MyPaint.TiledSurface2 */
    beginAtomic(): void
    endAtomic(roi: Rectangles): void
    setSymmetryState(active: boolean, centerX: number, centerY: number, symmetryAngle: number, symmetryType: any, rotSymmetryLines: number): void
    static name: string
}
}