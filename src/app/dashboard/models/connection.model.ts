export class ConnectionModel {
    username: string = "";
    password: string = "";

    constructor(usernameForm: string, passwordForm: string) {
        this.username = usernameForm;
        this.password = passwordForm;
    }
}