import { Component,Input } from '@angular/core';

@Component({
 selector: 'app-home1',
 templateUrl: './home1.component.html',
 styleUrls: ['./home1.component.css']
})
export class HomeComponent1 {
    @Input() title: string;
    constructor() {}
    
}