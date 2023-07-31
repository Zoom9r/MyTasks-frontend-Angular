import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteStatusModalComponent } from './delete-status-modal.component';

describe('DeleteStatusModalComponent', () => {
  let component: DeleteStatusModalComponent;
  let fixture: ComponentFixture<DeleteStatusModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteStatusModalComponent]
    });
    fixture = TestBed.createComponent(DeleteStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
