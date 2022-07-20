import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  selectedButton = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectHome(buttonName: string) {
    this.selectedButton = buttonName;
  }

  onSelectViewProducts(buttonName: string) {
    this.selectedButton = buttonName;
  }

  onSelectAddProducts(buttonName: string) {

    this.selectedButton = buttonName;
  }

}
