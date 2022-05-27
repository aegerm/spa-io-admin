import { Component, OnInit } from '@angular/core';
import { faDeskpro, faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faDesktop, faHome, faMicrochip, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faHome = faChartBar;
  faUser = faUser;
  faDevice = faDesktop;
  faConfigDevice = faMicrochip;

  constructor() { }

  ngOnInit(): void {
  }

}
