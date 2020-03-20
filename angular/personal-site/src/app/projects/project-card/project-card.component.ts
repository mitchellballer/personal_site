import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() name: string;
  @Input() subTitle: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
