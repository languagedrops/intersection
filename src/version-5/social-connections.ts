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
    readonly lastModified: number
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

export interface PayloadConnectionsInitiateSuccessResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.initiateConnection> {
    readonly connection: PayloadConnectionResponseV5
}

export interface PayloadConnectionsRemoveSuccessResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.removeConnection> {
    readonly connection: PayloadConnectionResponseV5
}

export enum PayloadConnectionsErrorStatus {
    userNotFound = 'userNotFound',
    linkNotFound = 'linkNotFound',
}

export interface PayloadInitiateConnectionErrorResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.initiateConnection> {
    readonly errorStatus: PayloadConnectionsErrorStatus
}

export interface PayloadRemoveConnectionErrorResponseV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.removeConnection> {
    readonly errorStatus: PayloadConnectionsErrorStatus
}

export type PayloadConnectionsRemoveResponseV5 = PayloadConnectionsRemoveSuccessResponseV5 | PayloadRemoveConnectionErrorResponseV5

export type PayloadConnectionsInitiateResponseV5 = PayloadConnectionsInitiateSuccessResponseV5 | PayloadInitiateConnectionErrorResponseV5

export type PayloadSyncConnectionsResponseV5 = PayloadConnectionsGetResponseV5 | PayloadConnectionsInitiateResponseV5 | PayloadConnectionsRemoveResponseV5
