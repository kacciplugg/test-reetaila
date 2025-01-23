import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherNavbarComponent } from '../othernavbar/othernavbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pending',
  imports: [CommonModule, OtherNavbarComponent, FooterComponent],
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css',
})
export class PendingComponent {}
