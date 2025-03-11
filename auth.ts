type Role = keyof typeof ROLES;

type Permissions = (typeof ROLES)[Role][number];

const ROLES = {
  ADMIN: [
    "all"
  ],
  TURISMO: [
    "view:comments",
    "view:posts",
    "view:users",
    "create:comments",
    "create:posts",
  ],
  PRESUPESTOS: [
    "view:comments",
    "view:posts",
    "view:users",
    "create:comments",
    "create:posts",
    "aaa",
  ],
} as const;

export function hasPermission(
  user: { id: number; role: Role },
  permission: Permissions
) {
  return (ROLES[user.role] as readonly Permissions[]).includes(permission);
}
