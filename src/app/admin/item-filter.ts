import { PipeTransform, Pipe } from '@angular/core';
import { item } from '../item';

@Pipe ({

    name: 'myitemFilter'
    
    })

export class ItemFilter implements PipeTransform{

transform(items:item[],searchTerm:string):item[]
{
if(!items || !searchTerm){
return items;
}
return items.filter(items => items.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1)
}

}