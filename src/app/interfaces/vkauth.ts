export interface IVKAuth {
    client_id: string;
    redirect_uri: string;
    display: string;
    scope: string;
    response_type: string;
    v: string;
    state?: string;
    revoke?: string;
}