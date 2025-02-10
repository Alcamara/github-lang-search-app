export interface SearchResult {
    id: number
    name: string
    ownerProfile: string
    starCount: number
    forkCount: number
    issueCount?: number
    url: string
    description: string
    licenseInfo: string | null
}