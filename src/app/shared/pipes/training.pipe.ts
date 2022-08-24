import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'training'
})
export class TrainingPipe implements PipeTransform {

  transform(value: any, args: string): string {
    if(args=='type')
    {
      
    switch(value)
    {
      case 0:{
        return 'Training';
        break;
      }
      case 1:{
        return 'Internship';
        break;
      }
      case 2:{
        return 'Course';
        break;
      }
      default:{
        return null;
      }
    }
  }
  else if(args=='medium')
  {
    switch(value)
    {
      case 0:{
        return 'Online';
        break;
      }
      case 1:{
        return 'Offline';
        break;
      }
      case 2:{
        return 'Online/Offline';
        break;
      } 
      default:{
        return null;
      }
    }
  }
  else{
    return null;
  }
     

  }

}
