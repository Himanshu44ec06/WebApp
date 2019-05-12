export interface UserModel  {
    Id: number;
    Username: string;
    password: string | null;
    Email: string;
    Status: number;
    Roles: RolesModel []
}

export interface RolesModel {
    Id: number;
    Role: string;
}

