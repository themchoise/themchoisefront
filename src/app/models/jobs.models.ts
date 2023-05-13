export class JobsClass{

    constructor(public id:number,
         public company:string, 
         public job_title:string,
          public job_desc: string,
          public year_start:number,
          public year_end:number){}

    getData(){
        return{
            id:this.id,
            company:this.company,
            job_title:this.job_title,
            job_desc:this.job_desc,
            year_start:this.year_start,
            year_end:this.year_end
        }
    }
    newJob(){
        return{      
            company:'',
            job_title:'',
            job_desc:'',
            year_start:0,
            year_end:0
        }
    }
}