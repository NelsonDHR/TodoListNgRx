import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filter/filter.actions';
import * as actions from 'src/app/filter/filter.actions'
import {clearCompleted} from 'src/app/todos/todo.actions'


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  filtroActual: validFilters={filtro:'All'};
  filtros:validFilters[]=[{filtro:'All'},{filtro:'Completed'},{filtro:'Active'}];

  pending: number = 0;
  constructor(private store:Store<AppState>) { }
  
  ngOnInit(): void {
  /*   this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro) */

    this.store.subscribe(state =>{
      this.filtroActual=state.filtro;
      this.pending = state.todos.filter(todo => !todo.completado).length
    })
  }

  cambiarFiltro(filtro:validFilters){
    console.log(filtro.filtro);

    this.store.dispatch(actions.setFilter({filtro: filtro}));


  }

  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }

}
