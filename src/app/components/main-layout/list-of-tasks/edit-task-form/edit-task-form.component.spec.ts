import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTaskFormModalComponent } from './edit-task-form.component';

describe('EditTaskFormComponent', () => {
  let component: EditTaskFormModalComponent;
  let fixture: ComponentFixture<EditTaskFormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskFormModalComponent]
    });
    fixture = TestBed.createComponent(EditTaskFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
