import {Pipe, PipeTransform} from 'angular2/core';
import {ParentPipe} from './customParent.pipe';

@Pipe({name: 'customLowercase'})
export class CustomLowercase extends ParentPipe implements PipeTransform {}

