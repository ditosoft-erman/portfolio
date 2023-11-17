import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {



ngOnInit() {
   AOS.init();
}
}
