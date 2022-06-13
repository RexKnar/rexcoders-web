export interface LoginState {
    token ?: string,
    details ?: {
        userId?: string,
        activeStatus?: number,
        name?:string
    }
}

export const initialState: LoginState = {};