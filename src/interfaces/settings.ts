export interface SaveTagRequest {
    tagName: string
    tagColor: string
    isActive: string
}

export interface Tag extends SaveTagRequest {
    id: number
    created_at?: string,
    user: number
}