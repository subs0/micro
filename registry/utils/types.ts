export type NestedObject = { [key: string]: NestedObject | string }

export interface Resource {
    args: NestedObject
    attrs: NestedObject
}

export interface ProviderJson {
    data: { [key: string]: Resource }
    resource: { [key: string]: Resource }
}

export interface MergedJson {
    data: { [key: string]: NestedObject }
    resource: { [key: string]: NestedObject }
}

export type TFJsonDocPayload = {
    attributes: {
        category: string
        title: string
        slug: string
    }
    links: { self: string }
}

export enum Category {
    'resources' = 'resources',
    'data-sources' = 'data-sources',
    'guides' = 'guides',
    'overview' = 'overview',
    'resource' = 'resource',
    'data' = 'data',
}

!!'' //?
!!null //?
!!1 //?
!!-1 //?
!!0 //?
!!-0 //?
!!2 //?
!!-2 //?
!!'1' //?
!!'0' //?
!!'2' //?
!![] //?
!!{} //?
!!undefined //?
!!NaN //?
!!Infinity //?
!!-Infinity //?
