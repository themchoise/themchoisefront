export class EducationClass{

    constructor(public id:number,
         public academy:string, 
         public title:string,
          public year_start: number,
          public year_end:number,
          public description:string){}

    getData(){
        return{
            id:this.id,
            academy:this.academy,
            title:this.title,
            year_start:this.year_start,
            year_end:this.year_end,
            description:this.description
        }
    }
}