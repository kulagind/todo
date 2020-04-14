import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Todo} from '../app.component';

export interface TaskChangerInterface {
  index: number;
  text: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // реагирует только на изменение полей с декоратором Input
  encapsulation: ViewEncapsulation.None // Делает стили данной компоненты глобальными
})
export class TaskComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;
  @Output() onTaskRemove: EventEmitter<number> = new EventEmitter<number>();
  @Output() onTaskChange: EventEmitter<TaskChangerInterface> = new EventEmitter<TaskChangerInterface>();

  // ViewChild - ссылка на dom-элемент текущ. компоненты. ContentChild - ссылка на дом элемент другой компоненты.
  @ViewChild('changeTaskInput', {static: false}) inputRef: ElementRef;

  toggleComplete() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  removeTask() {
    this.onTaskRemove.emit(this.index);
  }

  editTask() {
    this.todo.isEdited = true;
    setTimeout(() => { this.inputRef.nativeElement.focus(); }, 100);
  }

  changeTask(newText: string) {
    if (newText.length > 0) {
      this.onTaskChange.emit({index: this.index, text: newText});
    }
    this.todo.isEdited = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
