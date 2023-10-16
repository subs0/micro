import { NestedObject } from './constants';
/**
 * Three phase duduplicator:
 * 1. runs a recursive lookup for entries with definitions defined elsewhere in
 *    the document and replaces the entry with the definition. This step also
 *    includes deleting any redundant references to either the definition or
 *    other duplicated entries.
 * 2. a second pass of the same process as step 1, to account for newly nested
 *    definitions
 * 3. a final pass to remove any empty objects that were created in step 1,
 *    including the removal of linked references in the root (also due to the
 *    same issue requiring step 2)
 */
export declare const deduper: (input?: NestedObject) => NestedObject | null;
//# sourceMappingURL=deduper.d.ts.map