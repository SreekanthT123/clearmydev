import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffOutputComponent } from './diff-output.component';

describe('DiffOutputComponent', () => {
  let component: DiffOutputComponent;
  let fixture: ComponentFixture<DiffOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
