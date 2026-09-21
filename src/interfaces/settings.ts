export interface SaveTagRequest {
    tagName: string
    tagColor: string
    isActive: string
}

export interface Tag extends SaveTagRequest {
    id?: string
    created_at?: string,
    user: string
}