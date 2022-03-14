import { TFakeServerConfig, TResponse } from "./FakeServer.types";
import { fakeError, initialConfig } from "./FakeServer.utils";

export class FakeServer {
    static registeredServersMap: Map<string, FakeServer> = new Map();
    
    static register(route: string, config?: TFakeServerConfig) {
        if (FakeServer.registeredServersMap.has(route)) FakeServer.unregister(route);
        
        const server = new FakeServer(config);
        FakeServer.registeredServersMap.set(route, server);
    }
    
    static unregister(route: string) {
        FakeServer.registeredServersMap.delete(route);
    }
    
    static fetch(route: string): Promise<TResponse> {
        const server: FakeServer | undefined = FakeServer.registeredServersMap.get(route);

        return server ? server.fetch() : Promise.reject(fakeError);
    }

    _config: TFakeServerConfig = initialConfig;
    
    constructor(config?: TFakeServerConfig) {
        if (config) this._config = config;
    }

    fetch = (): Promise<TResponse> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._config.result);
            }, this._config.timeout);
        });
    }
}
