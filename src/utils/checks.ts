import { isArray, isPlainObject } from '@thi.ng/checks'
export const isFile = (path: string) => {
    const parts = path.split('/')
    const [last] = parts.slice(-1)
    return last.includes('.')
}
const allNulls = (obj: any) => {
    const entries = Object.entries(obj)
    return entries.every(([, v]) => v === null)
}
export const isEmpty = (x: any) => {
    if (isPlainObject(x)) {
        if (!Object.keys(x).length) return true
        if (allNulls(x)) return true
        return false
    } else if (isArray(x)) {
        if (!x.length) return true
        if (x.every((v) => v === null || isEmpty(v))) return true
        return false
    } else {
        return false
    }
}

export const cleanNullEntries = (obj: any) =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (v === null) {
            return a
        } else {
            return { ...a, [k]: v }
        }
    }, {})

    
export const dedupArrayMembers = (arr: any[]) => [...new Set(arr)]