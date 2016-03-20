import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'simplebind',
    templateUrl: 'app/simplebind/simplebind.html',
    directives: [ChildComponent]

})
export class SimplebindComponent {

    public bar = new Date(2015, 1, 1);
    private myname: string;

    constructor() {
        this.myname = 'Simple';
    }
}
