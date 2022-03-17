export type TUser = {
    name: string;
    role: ERole;
}

export enum ERole {
    USER = 'user',
    ADMIN = 'admin',
}

export enum EAuthKey {
    USER = 'USER',
}