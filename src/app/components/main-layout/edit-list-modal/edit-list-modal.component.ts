import { Component, Input, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ListOfTasksModel } from "src/app/models/ListOfTasksModel";
import { ListOfTasksService } from "src/app/services/list-of-tasks.service";


@Component({
  selector: 'app-edit-list-modal',
  templateUrl: './edit-list-modal.component.html',
})
export class EditListModal {

  @Input()
  editedListName!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matDialogRef: MatDialogRef<EditListModal>, private listService: ListOfTasksService) {
  }

  onFinishEditList() {
    const editedList: ListOfTasksModel = {
      id: this.data.listId,
      listName: this.editedListName,
      statuses: [],
      tasks: []
    };

    this.listService.editList(editedList).subscribe({
      next() { }, error() { }, complete: () => {
        this.matDialogRef.close();
      }
    })
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}