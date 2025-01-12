import { Idb } from "./type/Idb";
export declare const update: <T>(idb: Idb<T>, key: IDBValidKey, mapper: (value: T | undefined) => T | Promise<T>, initial?: T | undefined) => Promise<T>;
