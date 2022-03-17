import { ERole, TUser } from "../../utils";
import { TFakeServerConfig } from "../../utils/FakeServer/FakeServer.types";

export const loginData: TFakeServerConfig<TUser>= {
    timeout: 1000,
    result: {
        body: {
            name: 'test',
            role: ERole.USER,
        },
        status: 200,
    }
}