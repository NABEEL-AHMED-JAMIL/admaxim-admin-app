import { DatePipe } from '@angular/common';
import { MatDatepicker } from '@angular/material';


export class item{
    
    
Startdate:string;
mdate:string;
email: string;
SelectRole:string;
Note:string;

constructor(mdate:string,email:string,Startdate:string,SelectRole:string,Note:string) { 
this.SelectRole=SelectRole;
this.Startdate=Startdate;   
this.mdate=mdate;
this.email=email;
this.Note=Note;
}


}



