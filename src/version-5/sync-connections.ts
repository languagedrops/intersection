
interface PayloadConnectionRequestV5 {
    readonly connectionUserId: string
}

interface PayloadConnectionResponseV5 {
    readonly connectionUserId: string
    readonly name: string
    readonly profilePicLink: string
}

export interface PayloadSyncConnectionsRequestV5 {
    readonly connections: PayloadConnectionRequestV5[]
    readonly lastSyncDate: number
}

export interface PayloadSyncConnectionsResponseV5 {
    readonly connections: PayloadConnectionResponseV5[]
    readonly lastSyncDate: number
}
