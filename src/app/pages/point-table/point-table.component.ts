import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  constructor(private service: ApiCallService) {}
  pointTable: any;
  tableHeading: any;
  ngOnInit(): void {
    this.service.getPointTable().subscribe(
      (data: any) => {
        this.pointTable = data;
        this.tableHeading = [...this.pointTable[0]];
        console.log(this.pointTable);
        console.log(this.tableHeading);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
