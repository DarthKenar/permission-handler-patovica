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
  private ROLES: T;

  constructor(config: T) {
    this.ROLES = config;
  }

  hasPermission(user: { role: Role }, permission: Permissions): boolean {
    return (
      this.ROLES[user.role].includes(permission) ||
      this.ROLES[user.role].includes(ALL)
    );
  }
}

// const patovica = new Patovica({
//   ADMIN: [ALL],
//   TURISMO: ["view:comments"],
// } as const);

// const user = { id: 1, role: "TURISMO" as Role };

// console.log(patovica.hasPermission(user, 'view:comments')); // true
