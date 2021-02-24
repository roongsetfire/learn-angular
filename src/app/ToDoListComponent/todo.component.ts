import { Component,Input } from '@angular/core';

@Component({
 selector: 'app-todo',
 templateUrl: './todo.component.html',
 styleUrls: ['./todo.component.css']
})
export class ToDo {
    @Input() task: string; // 1234
    
    arraytask = ['Breakfast','Coffee'];
    constructor() {}
    addtask() {
        
        this.arraytask.push(this.task) 
        this.task = '';
    }
    deletetask(x){
        this.arraytask = this.arraytask.filter(item => item!== x); 
    }

}