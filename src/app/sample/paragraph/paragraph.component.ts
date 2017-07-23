import { Component } from '@angular/core';

@Component({
    selector: 'app-sample-paragraph',
    templateUrl : 'paragraph.component.html',
    styles : [
        'paragraph.component.css'
    ]    
})
export class Paragraph {

    paragraph : string = 'This is a sample paragraph for this sample Angular application.';

}