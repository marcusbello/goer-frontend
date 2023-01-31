import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroTitle:string = "Create Short .NG URL";
  heroText:string = "Free, fast and easy to remember URL shortener service, create and share your .ng short link with a single click.";
  heroBtn:string = "Get Started";
  constructor() { }

  ngOnInit(): void {
  }

}
