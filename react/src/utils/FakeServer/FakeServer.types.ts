export type TFakeServerConfig = {
    timeout: number;
    result: TResponse;
}

export type TResponse = {
    status: number;
    body: any;
}
