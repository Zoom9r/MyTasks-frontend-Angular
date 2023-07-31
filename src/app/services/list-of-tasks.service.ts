import { Injectable } from "@angular/core";
import { ListOfTasksModel } from "../models/ListOfTasksModel";
import { ListOfTasksModelDto } from "../models/ListOfTasksModelDto";
import { HttpClient } from "@angular/common/http";
import { Observable, from, map } from "rxjs";
import { GlobalService } from "./global.service";


@Injectable({
  providedIn: 'root'
})
export class ListOfTasksService {

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
  }

  getAllListsNames(): Observable<ListOfTasksModelDto[]> {
    return this.httpClient.get<ListOfTasksModelDto[]>('https://localhost:7129/listoftasks').pipe(map(data => {
      this.globalService.setAllListNames(data);
      return data;
    }))
  }

  getListDataById(listOfTasksId: number): Observable<ListOfTasksModel> {
    return this.httpClient.get<ListOfTasksModel>(`https://localhost:7129/listoftasks/${listOfTasksId}`);
  }

  getAndSetListDataById(listOfTasksId: number): Observable<ListOfTasksModel> {
    return this.httpClient.get<ListOfTasksModel>(`https://localhost:7129/listoftasks/${listOfTasksId}`).pipe(map(data => {
      this.globalService.setCurrentListData(data);
      return data;
    }))
  }

  createList(listOfTasksModel: ListOfTasksModel) {
    return this.httpClient.post('https://localhost:7129/listoftasks', listOfTasksModel);
  }

  editList(listOfTasksModel: ListOfTasksModel) {
    return this.httpClient.put('https://localhost:7129/listoftasks', listOfTasksModel);
  }

  deleteList(listId: number) {
    return this.httpClient.delete(`https://localhost:7129/listoftasks/${listId}`);
  }

}