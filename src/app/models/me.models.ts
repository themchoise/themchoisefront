export class MePersona{
    /*
    nombre: string;
    apellido: string;

    constructor(nombre:string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    */

    constructor(private id:number, public nombre:string, public apellido:string, public about_me:string){}
    
 
        
    getData(){
        return{
            id: this.apellido,
            login:this.nombre,
            password:this.apellido,
            about_me:this.about_me
        }
    }

}