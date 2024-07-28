import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-match',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-match.component.html',
  styleUrl: './upcoming-match.component.css',
})
export class UpcomingMatchComponent {
  @Input() series: any;
}
