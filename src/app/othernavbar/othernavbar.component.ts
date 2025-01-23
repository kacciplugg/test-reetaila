import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-othernavbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './othernavbar.component.html',
  styleUrl: './othernavbar.component.css',
})
export class OtherNavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
