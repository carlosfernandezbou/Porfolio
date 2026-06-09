import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories = [
    {
      label: 'Lenguajes de Programación',
      skills: [
        { name: 'Java', featured: true },
        { name: 'C#', featured: true },
        { name: 'JavaScript', featured: true },
        { name: 'Php', featured: true },
      ]
    },
    {
      label: 'Frameworks & Tecnologías',
      skills: [
        { name: '.NET', featured: true },
        { name: 'Spring Boot', featured: true },
        { name: 'Spring Cloud', featured: true }, 
        { name: 'Angular', featured: true },
        { name: 'React', featured: true },
        { name: 'Symfony', featured: true },
      ]
    },
    {
      label: 'DevOps & Herramientas',
      skills: [
        { name: 'Docker', featured: true }, 
        { name: 'AWS', featured: true },
        { name: 'GitHub', featured: true }, 
        { name: 'Azure', featured: true },
        { name: 'Kafka (básico)', featured: true },
      ]
    },
    {
      label: 'IDE & Tools',
      skills: [
        { name: 'Visual Studio Code', featured: true },
        { name: 'IntelliJ IDEA', featured: true },
      ]
    },
    {
      label: 'Otros',
      skills: [
        { name: 'Microsoft Office', featured: true },
      ]
    }
  ];
}
