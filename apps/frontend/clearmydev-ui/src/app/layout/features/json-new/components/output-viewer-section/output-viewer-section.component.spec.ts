import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputViewerSectionComponent } from './output-viewer-section.component';

describe('OutputViewerSectionComponent', () => {
  let component: OutputViewerSectionComponent;
  let fixture: ComponentFixture<OutputViewerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputViewerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputViewerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
