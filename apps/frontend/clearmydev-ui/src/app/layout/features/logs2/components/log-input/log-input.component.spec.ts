import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInputComponent } from './log-input.component';

describe('LogInputComponent', () => {
  let component: LogInputComponent;
  let fixture: ComponentFixture<LogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
