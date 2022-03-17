import { TFakeServerConfig, TResponse } from "./FakeServer.types";

export const fakeError: TResponse<string> = {
    status: 404,
    body: "error",
};

export const fakeSuccess: TResponse<string> = {
    status: 200,
    body: "success",
};

export const initialConfig: TFakeServerConfig<string> = {
    timeout: 1000,
    result: fakeSuccess,
};