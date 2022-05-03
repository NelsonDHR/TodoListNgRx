import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('comprar arroz'),
  new Todo('salvar a pepe'),
  new Todo('vender limonada')
  
];

export const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state,{texto}) => [...state,new Todo( texto )]),
  on(actions.toggleAll, (state) => {

    return state.map( todo => {
      return{
      ...todo,
      completado: !todo.completado
    }
    }
  )
  }),
  on(actions.clearCompleted, (state) => {

    return state.filter( todo=> !todo.completado
    
  )
  }),
  on(actions.toggle, (state,{id}) => {

    return state.map( todo => {
   
    if(todo.id===id){
    return{
      ...todo,
      completado: !todo.completado
    }
    }else{
      return todo;
    }
  })
}),
on(actions.deleteTodo, (state,{id}) => {return state.filter(todo => todo.id !== id)}),//filter devuelve nuevo array quitando la ccoincidencia con el oarametro pasado
on(actions.edit, (state,{id,texto}) => {

  return state.map( todo => {
 
  if(todo.id===id){
  return{
    ...todo,
    texto: texto
  }
  }else{
    return todo;
  }
})
})
);


export function todoReducer(state: Todo[] | undefined, action: Action){
    return  _todoReducer(state,action);
  };