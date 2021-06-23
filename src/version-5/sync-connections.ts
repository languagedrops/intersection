import { PayloadRequestBaseV5 } from './base'

export enum PayloadConnectionStatus {
    connected = 'connected',
    disconnected = 'disconnected',
}

export interface PayloadConnectionResponseV5 {
    readonly connectionUserId: string
    readonly name: string
    readonly profilePicLink: string
    readonly status: PayloadConnectionStatus
    readonly lastModified: Date
}

export enum PayloadConnectionRequestType {
    get = 'get',
    initiateConnection = 'initiateConnection',
    removeConnection = 'removeConnection',
}

interface PayloadConnectionBaseV5<T extends PayloadConnectionRequestType> extends PayloadRequestBaseV5 {
    readonly type: T
}

export interface PayloadConnectionsGetRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.get> {
    readonly lastGetDate: number
}

export interface PayloadConnectionsInitiateRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.initiateConnection> {
    readonly link: string
}

export interface PayloadConnectionsRemoveRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.removeConnection> {
    readonly connectionUserId: string
}

export type PayloadSyncConnectionsRequestV5 = PayloadConnectionsInitiateRequestV5 | PayloadConnectionsGetRequestV5 | PayloadConnectionsRemoveRequestV5

export interface PayloadConnectionsGetResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.get> {
    readonly connections: PayloadConnectionResponseV5[]
}

export interface PayloadConnectionsInitiateResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.initiateConnection> {
    readonly connection: PayloadConnectionResponseV5
}

export interface PayloadConnectionsRemoveResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.removeConnection> {
    readonly connection: PayloadConnectionResponseV5
}

export type PayloadSyncConnectionsResponseV5 = PayloadConnectionsGetResponseV5 | PayloadConnectionsInitiateResponseV5 | PayloadConnectionsRemoveResponseV5
