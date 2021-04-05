/**
 * AvahiCore-0.6
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace AvahiCore {

export enum Protocol {
    INET,
    INET6,
    UNSPEC,
}
export enum PublishFlags {
    UNIQUE,
    NO_PROBE,
    NO_ANNOUNCE,
    ALLOW_MULTIPLE,
    NO_REVERSE,
    NO_COOKIE,
    UPDATE,
    USE_WIDE_AREA,
    USE_MULTICAST,
}
export function serverGetHostName(): string
export class StringList {
    static name: string
}
export class Address {
    static name: string
}
export class Client {
    static name: string
}
type IfIndex = number
}