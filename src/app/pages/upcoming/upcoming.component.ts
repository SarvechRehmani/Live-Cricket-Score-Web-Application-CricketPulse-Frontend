import { Component, OnInit } from '@angular/core';
import { LiveMatchComponent } from '../../components/live-match/live-match.component';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { UpcomingMatchComponent } from '../../components/upcoming-match/upcoming-match.component';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [UpcomingMatchComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css',
})
export class UpcomingComponent implements OnInit {
  constructor(private service: ApiCallService) {}
  upcomingSeries: any;
  ngOnInit(): void {
    this.service.getUpcomingMatches().subscribe(
      (data: any) => {
        this.upcomingSeries = data.upcomingSeries;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
