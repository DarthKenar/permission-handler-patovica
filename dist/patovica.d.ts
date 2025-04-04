export type Role = keyof typeof ROLES;
export type PatovicaPermissions = (typeof ROLES)[Role][number];
export declare const ALL = "all_permissions";
export declare const ROLES: {
    readonly ADMIN: readonly ["all_permissions"];
};
export declare class Patovica<T extends Record<string, readonly string[]>, Role extends keyof T = keyof T, Permissions extends T[Role][number] = T[Role][number]> {
    private ROLES;
    constructor(config: T);
    hasPermission(user: {
        role: Role;
    }, permission: Permissions): boolean;
}
