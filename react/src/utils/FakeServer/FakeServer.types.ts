export type TFakeServerConfig<T> = {
    timeout: number;
    result: TResponse<T>;
}

export type TResponse<T> = {
    status: number;
    body: T | null;
}
