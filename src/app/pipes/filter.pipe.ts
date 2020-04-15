import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "../app.component";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform{

  transform(tasks: Array<Todo>, search: string = ''): Array<Todo> {
    if (!search.trim()) {
      return tasks;
    }

    return tasks.filter(task => task.text.toLowerCase().includes(search.trim().toLowerCase()));
  }

}
