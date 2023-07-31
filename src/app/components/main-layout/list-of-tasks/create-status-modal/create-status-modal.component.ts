import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StatusModel } from 'src/app/models/StatusModel';
import { StatusService } from 'src/app/services/status.service';
import { EditListModal } from '../../edit-list-modal/edit-list-modal.component';


@Component({
  selector: 'app-create-status-modal',
  templateUrl: './create-status-modal.component.html'
})
export class CreateStatusModalComponent {

  @Input()
  statusName!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<EditListModal>,
    private statusService: StatusService) {
  }

  onFinishCreateStatus() {
    const newStatus: StatusModel = {
      id: 0,
      statusName: this.statusName,
      listOfTasksId: this.data.currentListData.id
    };
    this.statusService.createStatus(newStatus).subscribe(() => {
      this.matDialogRef.close();
    });
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}


