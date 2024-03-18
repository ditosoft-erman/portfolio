import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
})
export class FirstSectionComponent implements OnInit {
  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    if (!this.isMobile) {
      this.isMenuOpen = false; // Open menu on desktop
    }
  }

  ngOnInit() {
    this.checkScreenSize(); // Check screen size initially
    AOS.init();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
