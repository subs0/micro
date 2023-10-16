/**
 * Iterates through the type lines and adds comments from the JSON payload.
 * Keeps track of the current interface name as a cursor into a dict, whose
 * values are arrays of keys that lead to the property in the JSON payload.
 * These values are aggregated as we traverse the type lines.
 *
 * checks:
 * - if the line starts with export, it's an interface definition
 * - if the line starts with 4 spaces, it's a property (key - value pair)
 * - if the value is a string, it's terminal (add comment above line)
 */
export declare const typeLinesAugmenter: (typeLines: string[], json: {}, indent?: number) => string[];
//# sourceMappingURL=decorate-types.d.ts.map