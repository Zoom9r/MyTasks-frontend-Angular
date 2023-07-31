import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ListOfTasksModel } from "src/app/models/ListOfTasksModel";
import { StatusModel } from "src/app/models/StatusModel";
import { TaskModel } from "src/app/models/TaskModel";
import { GlobalService } from "src/app/services/global.service";
import { ListOfTasksService } from "src/app/services/list-of-tasks.service";
import { StatusService } from "src/app/services/status.service";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: 'app-delete-list-modal',
  templateUrl: './delete-list-modal.component.html',
})
export class DeleteListModal {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<DeleteListModal>,
    private statusService: StatusService,
    private taskService: TaskService,
    private globalService: GlobalService,
    private listSevice: ListOfTasksService) {
  }

  async deleteAllListTasks(list: ListOfTasksModel): Promise<any> {
    return list.tasks.map((task: TaskModel) => { this.taskService.deleteTask(task.id).subscribe() });
  }

  async deleteAllListStatuses(list: ListOfTasksModel): Promise<any> {
    return list.statuses.map((status: StatusModel) => { this.statusService.deleteStatus(status.id).subscribe() });
  }

  onFinishDeleteList() {

    this.deleteAllListTasks(this.data.list).then(() => {
      this.deleteAllListStatuses(this.data.list).then(() => {
        if (this.data.list.id == this.globalService.currentListData.value.id) {
          this.globalService.setCurrentListData(new ListOfTasksModel());
        }
        this.listSevice.deleteList(this.data.list.id).subscribe();
        this.matDialogRef.close();
      })
    })
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}

