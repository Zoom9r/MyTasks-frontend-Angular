import { Component, OnInit } from '@angular/core';
import { ListOfTasksModel } from 'src/app/models/ListOfTasksModel';
import { GlobalService } from 'src/app/services/global.service';
import { CreateStatusModalComponent } from './create-status-modal/create-status-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { ListOfTasksService } from 'src/app/services/list-of-tasks.service';
import { StatusModel } from 'src/app/models/StatusModel';
import { DeleteStatusModalComponent } from './delete-status-modal/delete-status-modal.component';
import { EditStatusModalComponent } from './edit-status-modal/edit-status-modal.component';
import { EditTaskFormModalComponent } from './edit-task-form/edit-task-form.component';


@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.scss'],
})
export class ListOfTasksComponent implements OnInit {

  currentListData: ListOfTasksModel = new ListOfTasksModel();

  constructor(public globalService: GlobalService,
    private matdialog: MatDialog,
    private taskService: TaskService,
    private listOfTasksService: ListOfTasksService) {
  }

  ngOnInit() {
    this.globalService.currentListData.subscribe((data) => {
      this.currentListData = data;
    })
  }

  refreshListData() {
    return this.listOfTasksService.getAndSetListDataById(this.globalService.currentListData.value.id).subscribe();
  }

  onOpenCreateStatusModal() {
    if (this.currentListData.id != 0) {
      const dialogRef = this.matdialog.open(CreateStatusModalComponent,
        {
          data: {
            currentListData: this.currentListData
          }
        });
      dialogRef.afterClosed().subscribe(() => {
        this.refreshListData();
      });
    }
  }

  onOpenEditStatusModal(status: StatusModel) {
    const dialogRef = this.matdialog.open(EditStatusModalComponent,
      {
        data: {
          status: status,
          listData: this.currentListData
        }
      });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshListData();
    });
  }

  onOpenDeleteStatusModal(status: StatusModel) {
    this.listOfTasksService.getAndSetListDataById(this.globalService.currentListData.value.id).subscribe(() => {
      let dialogRef = this.matdialog.open(DeleteStatusModalComponent,
        {
          data: {
            status: status,
            currentList: this.currentListData
          }
        });
      dialogRef.afterClosed().subscribe(() => {
        this.refreshListData();
      });
    })

  }

  onOpenEditTaskModal(taskId: number, status: StatusModel) {
    let dialogRef = this.matdialog.open(EditTaskFormModalComponent,
      {
        data: {
          taskId: taskId,
          currentStatus: status,
          currentList: this.currentListData
        }
      });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshListData();
    });
  }

  onDeleteTask(id: any) {
    console.log("id", id);
    this.taskService.deleteTask(id).subscribe(() => {
      this.refreshListData();
    });
  }
}

