import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit, OnDestroy {
  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}
  intervalId: any;
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
          this.cdr.markForCheck();
        });
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  images = [
    { image: 'assets/images/1.jpg', title: 'BABAR AND VIRAT' },
    { image: 'assets/images/2.jpg', title: 'BABAR AZAM' },
    { image: 'assets/images/3.jpg', title: 'BABAR AND RIZWAN' },
    { image: 'assets/images/4.jpg', title: 'PAKISTAN TEAM' },
    // Add more slides as needed
  ];

  selectedIndex = 0;

  nextSlide() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }
}
