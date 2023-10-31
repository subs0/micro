import { isArray, isPlainObject } from '@thi.ng/checks';
export const isFile = (path) => {
    const parts = path.split('/');
    const [last] = parts.slice(-1);
    return last.includes('.');
};
export const isEmpty = (x) => isPlainObject(x) && !Object.keys(x).length ? true : isArray(x) && !x.length ? true : false;
export const cleanNullEntries = (obj) => Object.entries(obj).reduce((a, c) => {
    const [k, v] = c;
    if (v === null || v === undefined) {
        return a;
    }
    else {
        return { ...a, [k]: v };
    }
}, {});
//# sourceMappingURL=checks.js.map