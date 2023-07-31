import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListOfTasksModel } from 'src/app/models/ListOfTasksModel';
import { StatusModel } from 'src/app/models/StatusModel';
import { TaskModel } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.scss'],
})
export class EditTaskFormModalComponent {

  @Input()
  editedTaskName!: string;
  editedTaskDescription!: string;

  selectedStatus: StatusModel = new StatusModel();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<EditTaskFormModalComponent>,
    private taskService: TaskService) {
  }

  onStatusSelected(status: StatusModel){
    this.selectedStatus = status;

  }

  onFinishEditTask() {
    const editedTask: TaskModel = {
      id: this.data.taskId,
      title: this.editedTaskName,
      description: this.editedTaskDescription,
      statusId: this.selectedStatus.id != 0 ? this.selectedStatus.id : this.data.currentStatus.id,
      status: new StatusModel(),
      listOfTasksId: this.data.currentList.id,
      listOfTasks: new ListOfTasksModel()
    };
    this.taskService.editTask(editedTask).subscribe(() => {
      this.matDialogRef.close();
    });
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}

