import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-match',
  standalone: true,
  imports: [],
  templateUrl: './live-match.component.html',
  styleUrl: './live-match.component.css',
})
export class LiveMatchComponent {
  @Input() match: any;
}
