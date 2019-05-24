export class UserModel  {
    Id: number;
    Username: string;
    password: string | null;
    Email: string;
    Status: number;
    Roles: RolesModel []
}

export class RolesModel {
    Id: number;
    Role: string;
}

