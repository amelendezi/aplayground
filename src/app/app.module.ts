import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Title, Paragraph } from './sample';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule        
    ],
    providers : [         
    ],    
    declarations: [
        AppComponent,
        Paragraph,
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
