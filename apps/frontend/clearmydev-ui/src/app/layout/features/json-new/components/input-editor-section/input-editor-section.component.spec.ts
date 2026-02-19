import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditorSectionComponent } from './input-editor-section.component';

describe('InputEditorSectionComponent', () => {
  let component: InputEditorSectionComponent;
  let fixture: ComponentFixture<InputEditorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEditorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEditorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
