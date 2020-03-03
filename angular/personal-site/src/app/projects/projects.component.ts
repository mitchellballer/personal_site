import { Component, OnInit, NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  landing = "Welcome to the projects page";
  constructor() { }

  ngOnInit(): void {
  }

}
