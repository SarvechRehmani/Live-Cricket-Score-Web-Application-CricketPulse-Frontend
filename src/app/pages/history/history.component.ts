import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { LiveMatchComponent } from '../../components/live-match/live-match.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LiveMatchComponent, HttpClientModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  constructor(private service: ApiCallService) {}
  allMatchesDB: any;
  ngOnInit(): void {
    this.loadAllMatches();
  }

  private loadAllMatches() {
    this.service.getAllMatches().subscribe(
      (data: any) => {
        this.allMatchesDB = data.matchList;
      },
      (error) => {
        console.error('Error fetching matches from API', error);
      }
    );
  }
}
