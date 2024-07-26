import { Component, inject, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { LiveMatchComponent } from '../../components/live-match/live-match.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, LiveMatchComponent, HttpClientModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})
export class LiveComponent implements OnInit {
  constructor(private service: ApiCallService, private toast: ToastrService) {}
  liveMatches: any;
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  reload() {
    this.loadLiveMatches();
    console.log(1);

    this.toast.info('Data has been refreshed', 'Reloaded successfully');
  }

  loadLiveMatches() {
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
