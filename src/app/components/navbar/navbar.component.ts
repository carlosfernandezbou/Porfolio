import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeSection = 'home';
  links = [
    { id: 'home', label: 'inicio' },
    { id: 'about', label: 'sobre mí' },
    { id: 'projects', label: 'proyectos' },
    { id: 'experience', label: 'experiencia' },
    { id: 'contact', label: 'contacto' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    this.activeSection = current;
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
