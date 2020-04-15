import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Todo} from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() todoList: Array<Todo>;

  countCompletedTasks(): number {
    const completedTasksList = this.todoList.filter(todo => todo.isCompleted);
    const completedTasksCount = completedTasksList.length / this.todoList.length;
    return completedTasksCount;
  }
}
