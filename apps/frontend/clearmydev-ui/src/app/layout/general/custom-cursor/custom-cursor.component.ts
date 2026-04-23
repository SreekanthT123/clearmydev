import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  NgZone,
  OnDestroy
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css'
})
export class CustomCursorComponent implements AfterViewInit, OnDestroy {

  @ViewChild('cursor') cursor!: ElementRef<HTMLDivElement>;
  @ViewChild('follower') follower!: ElementRef<HTMLDivElement>;

  private mouseX = 0;
  private mouseY = 0;
  private posX = 0;
  private posY = 0;

  private hoverElements: Element[] = [];

  constructor(private zone: NgZone, private router: Router) {}

  ngAfterViewInit() {

    // ---- MOUSE TRACKING (outside Angular) ----
    this.zone.runOutsideAngular(() => {

      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.cursor.nativeElement.style.transform =
          `translate(${this.mouseX}px, ${this.mouseY}px)`;
      });

      this.animateFollower();
    });

    // ---- ATTACH HOVER EVENTS AFTER EVERY NAVIGATION ----
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.attachHoverEvents(), 0);
      });

    // initial load
    this.attachHoverEvents();
  }

  private animateFollower() {
    this.posX += (this.mouseX - this.posX) * 0.15;
    this.posY += (this.mouseY - this.posY) * 0.15;

    this.follower.nativeElement.style.transform =
      `translate(${this.posX}px, ${this.posY}px)`;

    requestAnimationFrame(() => this.animateFollower());
  }

  // 🔥 THIS IS THE IMPORTANT PART
  private attachHoverEvents() {

    // remove old listeners first
    this.hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', this.onEnter);
      el.removeEventListener('mouseleave', this.onLeave);
    });

    // find clickable elements
    this.hoverElements = Array.from(
      document.querySelectorAll('a, button, [role="button"], .hover-target')
    );

    this.hoverElements.forEach(el => {
      el.addEventListener('mouseenter', this.onEnter);
      el.addEventListener('mouseleave', this.onLeave);
    });
  }

  private onEnter = () => {
    this.follower.nativeElement.style.width = '50px';
    this.follower.nativeElement.style.height = '50px';
  };

  private onLeave = () => {
    this.follower.nativeElement.style.width = '32px';
    this.follower.nativeElement.style.height = '32px';
  };

  ngOnDestroy() {
    this.hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', this.onEnter);
      el.removeEventListener('mouseleave', this.onLeave);
    });
  }
}