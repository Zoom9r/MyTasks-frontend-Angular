import { Component, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ListOfTasksModel } from "src/app/models/ListOfTasksModel";
import { ListOfTasksService } from "src/app/services/list-of-tasks.service";


@Component({
    selector: 'app-create-list-modal.component',
    templateUrl: './create-list-modal.component.html'
})
export class CreateListModalComponent {

    @Input()
    listName!: string;

    constructor(private matDialogRef: MatDialogRef<CreateListModalComponent>,
        private listService: ListOfTasksService) {
    }

    onFinishCreateList() {
        const newList: ListOfTasksModel = {
            id: 0,
            listName: this.listName,
            statuses: [],
            tasks: []
        };
        this.listService.createList(newList).subscribe({
            next() { }, error() { }, complete: () => {
                this.matDialogRef.close();
            }
        })
    }

    onCloseClick() {
        this.matDialogRef.close();
    }

}