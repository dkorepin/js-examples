import { TFakeServerConfig, TResponse } from "./FakeServer.types";

export const fakeError: TResponse = {
    status: 404,
    body: "error",
};

export const fakeSuccess: TResponse = {
    status: 200,
    body: "success",
};

export const initialConfig: TFakeServerConfig = {
    timeout: 1000,
    result: fakeSuccess,
};