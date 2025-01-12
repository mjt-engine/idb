import { Idb } from "./type/Idb";
export declare const put: <T>(idb: Idb<T>, key: IDBValidKey, value: T) => Promise<IDBValidKey>;
