import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  welcome = "Welcome to the about page";
  
  constructor() { }

  ngOnInit(): void {
  }

}
