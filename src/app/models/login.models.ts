export class LoginClass{

    constructor(public username:string, public password:string){}

    getData(){
        return{
            login:this.username,
            password:this.password
        }
    }
}