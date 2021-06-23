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

export interface PayloadConnectionsSyncRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.sync> {
    readonly lastSyncDate: number
}

export interface PayloadConnectionsInitiateRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.initiateConnection> {
    readonly link: string
}

export interface PayloadConnectionsRemoveRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.removeConnection> {
    readonly connectionUserId: string
}

export type PayloadSyncConnectionsRequestV5 = PayloadConnectionsInitiateRequestV5 | PayloadConnectionsSyncRequestV5 | PayloadConnectionsRemoveRequestV5

export interface PayloadSyncConnectionsResponseV5 {
    readonly connections: PayloadConnectionResponseV5[]
}
