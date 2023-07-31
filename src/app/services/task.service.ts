import { HttpClient } from "@angular/common/http";
import { TaskModel } from "../models/TaskModel";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  getAlltasks(): Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>('https://localhost:7129/tasks');
  }

  createTask(taskModel: TaskModel) {
    return this.httpClient.post('https://localhost:7129/tasks', taskModel);
  }

  deleteTask(taskId: any) {
    return this.httpClient.delete(`https://localhost:7129/tasks/${taskId}`);
  }

  editTask(taskModel: TaskModel) {
    return this.httpClient.put('https://localhost:7129/tasks', taskModel);
  }

}