import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffInputComponent } from './diff-input.component';

describe('DiffInputComponent', () => {
  let component: DiffInputComponent;
  let fixture: ComponentFixture<DiffInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
