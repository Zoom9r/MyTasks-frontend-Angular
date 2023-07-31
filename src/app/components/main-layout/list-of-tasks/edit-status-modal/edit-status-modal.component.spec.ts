import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditStatusModalComponent } from './edit-status-modal.component';

describe('EditStatusModalComponent', () => {
  let component: EditStatusModalComponent;
  let fixture: ComponentFixture<EditStatusModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStatusModalComponent]
    });
    fixture = TestBed.createComponent(EditStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
