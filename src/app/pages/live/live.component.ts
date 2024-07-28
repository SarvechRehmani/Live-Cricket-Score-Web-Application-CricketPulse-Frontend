import {
  ChangeDetectorRef,
  Component,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
export class LiveComponent implements OnInit, OnDestroy {
  constructor(
    private service: ApiCallService,
    private toast: ToastrService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}
  liveMatches: any;
  intervalId: any;
  ngOnInit(): void {
    this.loadLiveMatches();

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.loadLiveMatches();
          this.cdr.markForCheck();
        });
      }, 5000);
    });
  }

  reloadClass: any;
  reload() {
    this.reloadClass = 'fa-spin';
    this.loadLiveMatches();
    console.log(1);

    this.toast.info('Data has been refreshed', 'Reloaded successfully');
    this.reloadClass = '';
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

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
