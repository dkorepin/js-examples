import { TFakeServerConfig, TResponse } from "./FakeServer.types";
import { fakeError, initialConfig } from "./FakeServer.utils";

export class FakeServer<T> {
    static registeredServersMap: Map<string, FakeServer<any>> = new Map();
    
    static register<T>(route: string, config?: TFakeServerConfig<T>) {
        if (FakeServer.registeredServersMap.has(route)) FakeServer.unregister(route);
        
        const server = new FakeServer(config);
        FakeServer.registeredServersMap.set(route, server);
    }
    
    static unregister(route: string) {
        FakeServer.registeredServersMap.delete(route);
    }
    
    static fetch<T>(route: string): Promise<TResponse<T>> {
        const server: FakeServer<T> | undefined = FakeServer.registeredServersMap.get(route);

        return server ? server.fetch() : Promise.reject(fakeError);
    }

    _config: TFakeServerConfig<T> = initialConfig as unknown as TFakeServerConfig<T>;
    
    constructor(config?: TFakeServerConfig<T>) {
        if (config) this._config = config;
    }

    fetch = (): Promise<TResponse<T>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._config.result);
            }, this._config.timeout);
        });
    }
}
