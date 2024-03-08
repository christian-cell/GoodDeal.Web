export interface LoginResponse {
    userId: string,
    token: string,
    mD5: string,
    expiration: string,
    lifetime: number
}