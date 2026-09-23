export interface UserProfile {
    id: number
    email: string
    password: string
    created_at: string
}

export interface UserLoginResponse {
    token: string,
    user: Omit<UserProfile, 'password'>
}