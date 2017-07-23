import { Component } from '@angular/core';

@Component({
    selector : 'app-sample-title',
    templateUrl : 'title.component.html',
    styleUrls : [
        'title.component.css'
    ]
})
export class Title {

    title : string = 'Sample App Title';
    
}