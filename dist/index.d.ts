export declare const Idbs: {
    add: <T>(idb: import("./type/Idb").Idb, key: IDBValidKey, value: T) => Promise<IDBValidKey>;
    put: <T>(idb: import("./type/Idb").Idb<T>, key: IDBValidKey, value: T) => Promise<IDBValidKey>;
    get: <T>(idb: import("./type/Idb").Idb<T>, query: import("./type/IdbQuery").IdbQuery, initial?: T | ((() => T) | (() => Promise<T>)) | undefined) => Promise<T | undefined>;
    list: <K extends IDBValidKey>(idb: import("./type/Idb").Idb, query?: IDBValidKey | IDBKeyRange | null, count?: number) => Promise<K[]>;
    remove: <T>(idb: import("./type/Idb").Idb, query: import("./type/IdbQuery").IdbQuery) => Promise<T | undefined>;
    update: <T>(idb: import("./type/Idb").Idb<T>, key: IDBValidKey, mapper: (value: T | undefined) => T | Promise<T>, initial?: T | undefined) => Promise<T>;
};
export * from "./type/Idb";
export * from "./type/IdbValidValue";
export * from "./type/IdbQuery";
