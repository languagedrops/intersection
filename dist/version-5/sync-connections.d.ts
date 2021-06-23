import { PayloadRequestBaseV5 } from './base';
export declare enum PayloadConnectionStatus {
    connected = "connected",
    disconnected = "disconnected"
}
export interface PayloadConnectionV5 {
    readonly connectionUserId: string;
    readonly name: string;
    readonly profilePicLink: string;
    readonly status: PayloadConnectionStatus;
    readonly lastModified: Date;
}
export declare enum PayloadConnectionRequestType {
    sync = "sync",
    initiateConnection = "initiateConnection",
    removeConnection = "removeConnection"
}
interface PayloadConnectionBaseV5<T extends PayloadConnectionRequestType> extends PayloadRequestBaseV5 {
    readonly type: T;
}
export interface PayloadConnectionsSyncRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.sync> {
    readonly connections: PayloadConnectionV5[];
    readonly lastSyncDate: number;
}
export interface PayloadConnectionsInitiateRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.initiateConnection> {
    readonly link: string;
}
export interface PayloadConnectionsRemoveRequestV5 extends PayloadConnectionBaseV5<PayloadConnectionRequestType.removeConnection> {
    readonly connectionUserId: string;
}
export declare type PayloadSyncConnectionsRequestV5 = PayloadConnectionsInitiateRequestV5 | PayloadConnectionsSyncRequestV5 | PayloadConnectionsRemoveRequestV5;
export interface PayloadSyncConnectionsResponseV5 {
    readonly connections: PayloadConnectionV5[];
}
export {};
