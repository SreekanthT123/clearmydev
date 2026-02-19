import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  currentSlide = 0;
  private intervalId: any;

  slides = [
    {
      icon: '🚀',
      title: 'Slide 1',
      description: 'This is the first slide with some awesome content',
    },
    {
      icon: '⚡',
      title: 'Slide 2',
      description: 'This is the second slide with amazing features',
    },
    {
      icon: '🎯',
      title: 'Slide 3',
      description: 'This is the third slide with incredible benefits',
    },
  ];
ngOnInit() {
    this.startAutoRotate();
  }

  ngOnDestroy() {
    this.stopAutoRotate();
  }

  startAutoRotate() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change every 3 seconds
  }

  stopAutoRotate() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    // Reset the auto-rotate timer when manually navigating
    this.stopAutoRotate();
    this.startAutoRotate();
  }
}
