import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroSectionComponent } from './app-hero-section.component';

describe('AppHeroSectionComponent', () => {
  let component: AppHeroSectionComponent;
  let fixture: ComponentFixture<AppHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
