export interface SearchResult {
    name: string
    ownerProfile: string
    starCount: number
    forkCount: number
    issueCount: number
    url: string
    description: string
    licenseInfo: string | null
}