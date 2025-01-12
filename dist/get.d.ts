import { Idb } from "./type/Idb";
import { IdbQuery } from "./type/IdbQuery";
type Producer<T> = (() => T) | (() => Promise<T>);
export declare const get: <T>(idb: Idb<T>, query: IdbQuery, initial?: T | Producer<T> | undefined) => Promise<T | undefined>;
export {};
