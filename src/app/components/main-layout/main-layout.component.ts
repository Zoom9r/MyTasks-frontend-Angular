import { Component, Input } from '@angular/core';
import { ListOfTasksModel } from 'src/app/models/ListOfTasksModel';
import { ListOfTasksModelDto } from 'src/app/models/ListOfTasksModelDto';
import { GlobalService } from 'src/app/services/global.service';
import { ListOfTasksService } from 'src/app/services/list-of-tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateListModalComponent } from './create-list-modal/create-list-modal.component';
import { EditListModal } from './edit-list-modal/edit-list-modal.component';
import { DeleteListModal } from './delete-list-modal/delete-list-modal.component';
import { CreateTaskDialogComponent } from './create-task-modal/create-task-dialog.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {

  allListNames: ListOfTasksModelDto[] = [new ListOfTasksModelDto];
  currentListData: ListOfTasksModel = new ListOfTasksModel();
  @Input()
  editedListName: string | undefined;

  constructor(private listService: ListOfTasksService, private globalService: GlobalService, public matDialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchAllListNames();
    this.globalService.allListNames.subscribe((data) => {
      this.allListNames = data;
    });
    this.globalService.currentListData.subscribe((data) => {
      this.currentListData = data;
    });
  }

  fetchAllListNames() {
    this.listService.getAllListsNames().subscribe();
  }

  fetchCurrentListData(id: number) {
    this.listService.getAndSetListDataById(id).subscribe();
  }

  openCreatelistModal() {
    const dialogRef = this.matDialog.open(CreateListModalComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.fetchAllListNames();
    });
  }

  openEditListModal(id: number): void {
    const dialogRef = this.matDialog.open(EditListModal, {
      data: {
        listId: id
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchAllListNames();
    }
    );
  }

  openDeleteListModal(listId: number): void {
    this.listService.getListDataById(listId).subscribe((data) => {
      const dialogRef = this.matDialog.open(DeleteListModal, {
        data: {
          list: data
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        this.fetchAllListNames();
      });
    });
  }

  onOpenCreateTaskModal() {
    let dialogRef = this.matDialog.open(CreateTaskDialogComponent,
      {
        data: {
          allListNames: this.allListNames,
          currentList: this.currentListData
        },
      });
    dialogRef.afterClosed().subscribe(() => {
      if (this.currentListData.id != 0) {
        this.fetchCurrentListData(this.currentListData.id);
      }
    }
    );
  }
}


