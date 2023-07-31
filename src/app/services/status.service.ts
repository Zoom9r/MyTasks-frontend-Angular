import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StatusModel } from "../models/StatusModel";


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpClient: HttpClient) {
  }

  getAllStatuses(): Observable<StatusModel[]> {
    return this.httpClient.get<StatusModel[]>('https://localhost:7129/status');
  }

  editStatus(statusModel: StatusModel) {
    return this.httpClient.put('https://localhost:7129/status', statusModel);
  }

  createStatus(statusModel: StatusModel) {
    return this.httpClient.post('https://localhost:7129/status', statusModel);
  }

  deleteStatus(statusId: number) {
    return this.httpClient.delete(`https://localhost:7129/status/${statusId}`);
  }

}