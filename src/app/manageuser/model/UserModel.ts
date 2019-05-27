export class UserModel  {
    Id: number = 0;
    Username: string = '';
    password: string | null = '';
    Email: string = '';
    Status: number = 0;
    Roles: RolesModel [] = []
}

export class RolesModel {
    Id: number;
    Role: string;
}

