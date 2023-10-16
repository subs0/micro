import { NestedObject, MergedJson } from './constants';
export declare const cleanKey: (str: string) => string;
/**
 * Tailored to the input requirements of quicktype, this function removes all
 * optional properties from a JSON objection (denoted by a '!' on the key) and
 * returns a new object with only the required properties.
 *
 * This payload is paired with a payload containing all properties, and the
 * result allows quicktype to generate a typescript interface properly annotated
 * optional interface properties.
 */
export declare const triageQTSampleProps: (input: object, max_depth?: number, depth?: number, output?: {}) => NestedObject;
export declare const generateInterfacesForProvider: (merged: MergedJson, provider?: string, version?: string, refresh?: boolean, jsonPath?: string, typePath?: string) => Promise<string[]>;
export declare const compileTypes: (provider?: string, version?: string, refresh?: boolean, reload?: boolean, typePath?: string) => Promise<void>;
//# sourceMappingURL=typify-provider.d.ts.map