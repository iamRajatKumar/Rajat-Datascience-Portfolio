import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuOpen = false;
  isScrolled = false;

  constructor() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Smooth scroll to selected section
  scrollToSection(id: string) {
    this.closeMenu(); // close mobile menu

    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80; // adjust if needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Header shadow on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  // ESC closes menu (accessibility)
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event) {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }
}
