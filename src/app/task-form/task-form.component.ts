import {Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Todo} from '../app.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  newText = '';

  @Output() onInputChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTaskAdd: EventEmitter<Todo> = new EventEmitter<Todo>();
  @ViewChild('inputNewTask', {static: false}) inputRef: ElementRef;

  inputWasChanged() {
    this.onInputChange.emit(this.newText);
  }

  addNewTask(newTaskText: string): void {
    const task: Todo = {
      text: newTaskText,
      isCompleted: false,
      isEdited: false
    };

    this.onTaskAdd.emit(task);
    this.newText = '';
  }

  // insertSomeText(event) {
  //   this.newText = event.target.value;
  // }
}
