import {Pipe} from 'angular2/core';

@Pipe({name: 'customLowercase'})
export class CustomLowercase {
  transform(value: any, args: Array<any>): string {
    return value.toLowerCase();
  }
}

