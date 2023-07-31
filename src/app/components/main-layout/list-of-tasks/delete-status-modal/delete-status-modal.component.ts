import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskModel } from 'src/app/models/TaskModel';
import { StatusService } from 'src/app/services/status.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-delete-status-modal',
  templateUrl: './delete-status-modal.component.html',
  styleUrls: ['./delete-status-modal.component.scss']
})
export class DeleteStatusModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<DeleteStatusModalComponent>,
    private statusService: StatusService,
    private taskService: TaskService) {
  }

  async statusTasksDelete(): Promise<any> {
    return this.data.currentList.tasks.map((task: TaskModel) => {
      if (task.statusId == this.data.status.id) {
        this.taskService.deleteTask(task.id).subscribe();
      }
    });
  }

  onFinishDeleteStatus() {
    this.statusTasksDelete().then(() => {
      this.statusService.deleteStatus(this.data.status.id).subscribe();
    });
    this.matDialogRef.close();
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}


