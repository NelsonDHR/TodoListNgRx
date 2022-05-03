import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: validFilters): Todo[] {
    switch(filtro.filtro){
        case 'Completed':
          return todos.filter(todo=> todo.completado);
        case 'Active':
          return todos.filter(todo => !todo.completado);
        default:
          return todos;
    }
  }

}
