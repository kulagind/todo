import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {TaskChangerInterface} from './task/task.component';

export interface Todo {
  text: string;
  isCompleted: boolean;
  isEdited: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  angularLogoUrl = "https://logodix.com/logo/1964196.png";

  todoList: Todo[] = [
    {
      text: 'Your first task for today',
      isCompleted: true,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    },
    {
      text: 'Your second task for today',
      isCompleted: false,
      isEdited: false
    }
  ];

  addNewTask(newTodo: Todo): void {
    this.todoList.unshift(newTodo);
  }

  removeTask(index: number): void {
    this.todoList.splice(index, 1);
  }

  changeTask({index, text}: TaskChangerInterface) {
    this.todoList[index].text = text;
  }
}
