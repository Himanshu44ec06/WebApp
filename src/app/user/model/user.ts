/* Defines the user entity */
export interface User {
    id: number;
    userName: string;
    token: string;
    roles: Roles [ ];
}

export  interface  Roles {
    id: number;
    token: string;
    moduleId: string;
}
