export interface IItem {
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: Date | string,
    updatedAt: Date | string,
    featured: boolean,
    launches: [],
    events: []
}
