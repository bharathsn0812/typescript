type Roles = "admin" | "user" | "guest";
interface RolePermissions {
    canRead: boolean;
    canWrite: boolean;
}

const rolePermissions: Record<Roles, RolePermissions> = {
    admin: { canRead: true, canWrite: true },
    user: { canRead: true, canWrite: false },
    guest: { canRead: false, canWrite: false }
};