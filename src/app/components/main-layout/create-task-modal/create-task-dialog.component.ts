import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ListOfTasksModel } from "src/app/models/ListOfTasksModel";
import { ListOfTasksService } from "src/app/services/list-of-tasks.service";
import { StatusModel } from "src/app/models/StatusModel";
import { TaskService } from "src/app/services/task.service";

@Component({
    selector: 'app-create-task-dialog-modal',
    templateUrl: './create-task-dialog.component.html',
    styleUrls: ['./create-task-dialog.component.scss'],
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