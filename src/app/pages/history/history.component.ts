import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { LiveMatchComponent } from '../../components/live-match/live-match.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LiveMatchComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  constructor(private service: ApiCallService) {}
  allMatchesDB: any;
  ngOnInit(): void {
    this.loadAllMatches();
    console.log(this.allMatchesDB);
  }

  private loadAllMatches() {
    this.service.getAllMatches().subscribe(
      (data) => {
        this.allMatchesDB = data;
      },
      (error) => {
        console.error('Error fetching matches from API', error);
      }
    );
  }
}
