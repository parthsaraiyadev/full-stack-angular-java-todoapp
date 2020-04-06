package com.parth.rest.example.webservice.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@CrossOrigin(origins="http://localhost:4200")
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList();
	
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter,"Parth","Learn angular", new Date(),false));
		todos.add(new Todo(++idCounter,"Parth","Learn spring boot", new Date(),false));
		todos.add(new Todo(++idCounter,"Parth","Learn react navtive", new Date(),false));
		todos.add(new Todo(++idCounter,"Parth","Learn android", new Date(),false));
		todos.add(new Todo(++idCounter,"Parth","Learn Java", new Date(),false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo==null) return null;
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
}
