import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';
import {CustomLowercase} from './customLowercase.pipe';
import {ParentPipe} from './customParent.pipe';

@Component({
    selector: 'simplebind',
    templateUrl: 'app/simplebind/simplebind.html',
    directives: [ChildComponent],
    pipes: [CustomLowercase, ParentPipe]

})
export class SimplebindComponent {

    public foo = 'TESTING';
    private myname: string;

    constructor() {
        this.myname = 'Simple';
    }
}
