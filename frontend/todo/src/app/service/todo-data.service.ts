import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http: HttpClient) { }

  retreiveAllTodos(username){
      return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retreiveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username,id,todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,id,todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos/`,todo);
  }
}
