import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { LiveMatchComponent } from '../../components/live-match/live-match.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, LiveMatchComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})
export class LiveComponent implements OnInit {
  constructor(private service: ApiCallService) {}

  liveMatches: any;
  ngOnInit(): void {
    this.loadLiveMatches();

    setInterval(() => this.loadLiveMatches(), 1000);
  }

  private loadLiveMatches() {
    this.service.getLiveMatches().subscribe(
      (data: any) => {
        this.liveMatches = data.matchList;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
