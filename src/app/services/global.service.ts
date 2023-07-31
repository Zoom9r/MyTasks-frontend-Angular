import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListOfTasksModel } from '../models/ListOfTasksModel';
import { ListOfTasksModelDto } from '../models/ListOfTasksModelDto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public allListNames = new BehaviorSubject<ListOfTasksModelDto[]>([new ListOfTasksModelDto()]);
  public currentListData = new BehaviorSubject<ListOfTasksModel>(new ListOfTasksModel());

  constructor() { }

  setAllListNames(names: ListOfTasksModelDto[]) {
    this.allListNames.next(names);
  }

  setCurrentListData(data: ListOfTasksModel) {
    this.currentListData.next(data);
  }
}