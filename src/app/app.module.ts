import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { ListOfTasksComponent } from './components/main-layout/list-of-tasks/list-of-tasks.component';
import { DeleteStatusModalComponent } from './components/main-layout/list-of-tasks/delete-status-modal/delete-status-modal.component';
import { EditStatusModalComponent } from './components/main-layout/list-of-tasks/edit-status-modal/edit-status-modal.component';
import { TaskService } from './services/task.service';
import { ListOfTasksService } from './services/list-of-tasks.service';
import { StatusService } from './services/status.service';
import { GlobalService } from './services/global.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {  MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreateListModalComponent } from './components/main-layout/create-list-modal/create-list-modal.component';
import { CreateStatusModalComponent } from './components/main-layout/list-of-tasks/create-status-modal/create-status-modal.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DeleteListModal } from './components/main-layout/delete-list-modal/delete-list-modal.component';
import { EditListModal } from './components/main-layout/edit-list-modal/edit-list-modal.component';
import { EditTaskFormModalComponent } from './components/main-layout/list-of-tasks/edit-task-form/edit-task-form.component';
import { CreateTaskDialogComponent } from './components/main-layout/create-task-modal/create-task-dialog.component';
import { DragDropModule, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreateListModalComponent,
    CreateStatusModalComponent,
    EditStatusModalComponent,
    ListOfTasksComponent,
    DeleteStatusModalComponent,
    DeleteListModal,
    EditListModal,
    EditTaskFormModalComponent,
    CreateTaskDialogComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    NgIf,
    NgFor,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonToggleModule,
    DragDropModule, CdkDropList, NgFor, CdkDrag
  ],
  providers: [GlobalService, TaskService, ListOfTasksService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
