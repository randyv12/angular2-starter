import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'parentPipe'})
export class ParentPipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    return value.toLowerCase();
  }
}
