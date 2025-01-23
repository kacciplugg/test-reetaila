import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['build', 'grow', 'thrive'],
        typeSpeed: 50,
        backSpeed: 20,
        showCursor: false,
        // cursorChar: '|',
        loop: true,
      };

      // const typed = new Typed('.typed', options);
    }
  }

  slides = [
    {
      content:
        '<div class="w-full"><div class="w-full mb-20"><div class="bg-primary h-auto p-8 sm:text-base text-sm text-white rounded-3xl"> Testimony Main 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</div><div class="float-right flex items-center space-x-4 mt-4"><div class="text-right"><p class="sm:text-base text-sm">Testifier Name</p><p class="text-xs">Testifier Business and Post</p></div><div class="w-10 h-10 testimonial1 rounded-full"></div></div></div><div class="w-full mt-16"><div class="bg-primary h-auto p-8 sm:text-base text-sm text-white rounded-3xl"> Testimony Main 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</div><div class="float-left flex items-center space-x-4 mt-4"><div class="w-10 h-10 testimonial2 rounded-full"></div><div class="text-left"><p class="sm:text-base text-sm">Testifier Name</p><p class="text-xs">Testifier Business and Post</p></div></div></div></div>',
    },
    {
      content:
        '<div class="w-full"><div class="w-full mb-20"><div class="bg-primary h-auto p-8 sm:text-base text-sm text-white rounded-3xl"> Testimony Main 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</div><div class="float-right flex items-center space-x-4 mt-4"><div class="text-right"><p class="sm:text-base text-sm">Testifier Name</p><p class="text-xs">Testifier Business and Post</p></div><div class="w-10 h-10 testimonial3 rounded-full"></div></div></div><div class="w-full mt-16"><div class="bg-primary h-auto p-8 sm:text-base text-sm text-white rounded-3xl"> Testimony Main 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</div><div class="float-left flex items-center space-x-4 mt-4"><div class="w-10 h-10 testimonial4 rounded-full"></div><div class="text-left"><p class="sm:text-base text-sm">Testifier Name</p><p class="text-xs">Testifier Business and Post</p></div></div></div></div>',
    },
    // Add more slides as needed
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
