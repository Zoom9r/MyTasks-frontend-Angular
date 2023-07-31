import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ListOfTasksModel } from "src/app/models/ListOfTasksModel";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, NgIf } from '@angular/common';
import { ListOfTasksService } from "src/app/services/list-of-tasks.service";
import { TaskModel } from "src/app/models/TaskModel";
import { StatusModel } from "src/app/models/StatusModel";
import { FormControl, FormsModule } from "@angular/forms";
import { TaskService } from "src/app/services/task.service";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: 'app-create-task-dialog-modal',
    templateUrl: './create-task-dialog.component.html',
    styleUrls: ['./create-task-dialog.component.scss'],
    //standalone: true,
    // imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule, NgFor, MatCardModule]
})
export class CreateTaskDialogComponent {

    @Input()
    taskName: string | undefined;
    taskDescription: string | undefined;
    selectedList: ListOfTasksModel = new ListOfTasksModel();
    selectedStatus: StatusModel = new StatusModel();

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private matDialogRef: MatDialogRef<CreateTaskDialogComponent>,
        private listService: ListOfTasksService,
        private taskService: TaskService) {
    }

    onFinishCreateTask() {
        const createTask: any = {
            title: this.taskName,
            description: this.taskDescription,
            listOfTasksId: this.selectedList.id != 0 ? this.selectedList.id : this.data.currentList.id,
            statusId: this.selectedStatus.id
        };
        this.taskService.createTask(createTask).subscribe(() => {
            this.matDialogRef.close();
        });
    }

    onListSelected(listid: number) {
        this.listService.getListDataById(listid).subscribe((data) => {
            this.selectedList = data;
        });
    }

    onStatusSelected(status: StatusModel) {
        this.selectedStatus = status;
    }

    onCloseClick() {
        this.matDialogRef.close();
    }

}