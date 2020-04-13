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

interface Percents {
  percentOfCompletedTasks: number;
  percentOfUncompletedTasks: number;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() todoList: Array<Todo>;

  countCompletedTasks(): Percents{
    const completedTasksList = this.todoList.filter(todo => todo.isCompleted);
    const percentOfCompletedTasks = Math.round((completedTasksList.length / this.todoList.length) * 100);
    const percentOfUncompletedTasks = (100 - Math.round((completedTasksList.length / this.todoList.length) * 100));
    return {percentOfCompletedTasks, percentOfUncompletedTasks};
  }
}
