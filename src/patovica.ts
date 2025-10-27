export type Role = keyof typeof ROLES;

export type PatovicaPermissions = (typeof ROLES)[Role][number];

export const ALL = "all_permissions";

export const ROLES = {
  ADMIN: [ALL],
} as const;

export class Patovica<
  T extends Record<string, readonly string[]>,
  Role extends keyof T = keyof T,
  Permissions extends T[Role][number] = T[Role][number]
> {
  ROLES: T;

  constructor(config: T) {
    this.ROLES = config;
  }

  hasPermission(
    user: { role?: Role; roles?: Role[] },
    permission: Permissions
  ): boolean {
    
    // Validation: at least one must be provided
    if (!user.role && !user.roles) {
      throw new Error("Either 'role' or 'roles' must be provided");
    }

    // Validation: both cannot be provided at the same time
    if (user.role && user.roles) {
      throw new Error("Cannot provide both 'role' and 'roles' at the same time");
    }

    // Single role (backwards compatible)
    if (user.role) {
      return (
        this.ROLES[user.role].includes(permission) ||
        this.ROLES[user.role].includes(ALL)
      );
    }

    // Multiple roles - returns true if ANY role has the permission
    if (user.roles) {
      return user.roles.some(
        (role) =>
          this.ROLES[role].includes(permission) ||
          this.ROLES[role].includes(ALL)
      );
    }

    return false;
  }
}