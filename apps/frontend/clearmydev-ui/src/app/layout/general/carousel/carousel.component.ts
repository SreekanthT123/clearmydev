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
      icon: '1.svg',
      title: 'Stop debugging blindly.',
      description: 'ClearMyDev turns confusing errors, messy logs, and unclear code changes into plain-English explanations. Spend less time searching forums and more time actually fixing problems.',
    },
    {
      icon: '2.svg',
      title: 'Your AI debugging assistant — not another chatbot.',
      description: 'Instead of asking generic questions to an AI, paste real development data: stack traces, logs, diffs, and incidents. ClearMyDev understands context and explains what actually went wrong and what to check next.',
    },
    {
      icon: '3.svg',
      title: 'From confusion to clarity in seconds.',
      description: 'Whether you are a junior stuck on an error or a senior reviewing a production issue, ClearMyDev helps you quickly identify the likely cause and the next step — without guessing.',
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
    }, 5000); // Change every 3 seconds
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
