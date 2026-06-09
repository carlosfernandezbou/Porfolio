import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  items = [
    {
      period: '04/2026 — 07/2026',
      role: 'Desarrollador Full Stack',
      company: 'Centogene GmbH · Prácticas',
      description: 'Desarrollo de aplicaciones en entorno empresarial internacional, trabajando con tecnologías Full Stack modernas dentro del sector biotecnológico.'
    },
    {
      period: '03/2025 — 06/2025',
      role: 'Desarrollador Full Stack',
      company: 'Hiberus Tecnología · Prácticas',
      description: 'Participación en proyectos de desarrollo web y software en una de las principales consultoras tecnológicas de España, con stack basado en Java, Spring Boot y Angular.'
    },
    {
      period: '03/2023 — 06/2023',
      role: 'Técnico Microinformático',
      company: 'Ayuntamiento de Catarroja · Prácticas',
      description: 'Soporte técnico, mantenimiento de sistemas y redes en el entorno de administración pública local.'
    },
    
  ];
}
