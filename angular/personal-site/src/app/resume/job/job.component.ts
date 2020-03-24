import { Component, OnInit, Input } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() company: string;
  @Input() dateRange: string;
  @Input() title: string;
  @Input() accomplishments: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
