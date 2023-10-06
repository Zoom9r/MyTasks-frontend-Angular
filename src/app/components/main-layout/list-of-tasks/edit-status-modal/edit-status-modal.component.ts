import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StatusModel } from 'src/app/models/StatusModel';
import { StatusService } from 'src/app/services/status.service';
import { EditListModal } from '../../edit-list-modal/edit-list-modal.component';


@Component({
  selector: 'app-edit-status-modal',
  templateUrl: './edit-status-modal.component.html',
})
export class EditStatusModalComponent {

  @Input()
  editedStatusName!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<EditListModal>,
    private statusService: StatusService) {
  }

  onFinishEditStatus() {
    const editedStatus: StatusModel = {
      id: this.data.status.id,
      statusName: this.editedStatusName,
      listOfTasksId: this.data.status.listOfTasksId
    };
    this.statusService.editStatus(editedStatus).subscribe(() => {
      this.matDialogRef.close();
    });
  }

  ngOnDestroy() {
    this.matDialogRef.close();
  }

  onCloseClick() {
    this.matDialogRef.close();
  }
}


