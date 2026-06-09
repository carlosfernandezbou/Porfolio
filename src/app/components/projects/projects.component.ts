import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  emoji: string;
  status: 'wip' | 'done';
  statusLabel: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'NorvexisGRC',
      emoji: '🔒',
      status: 'done',
      statusLabel: 'Casi terminado',
      description: 'Aplicación de gestión de GRC (Governance, Risk & Compliance). Permite a organizaciones gestionar sus procesos de gobernanza, evaluar riesgos y garantizar el cumplimiento normativo desde una plataforma centralizada e intuitiva.',
      tags: ['.NET', 'Angular', 'CosmosDB', 'Azure'],
      githubUrl: 'https://github.com/carlosfernandezbou'
    },
    {
      name: 'CryptoBit',
      emoji: '₿',
      status: 'wip',
      statusLabel: 'En progreso',
      description: 'Proyecto final de grado. Aplicación para visualizar monedas digitales que permite consultar precios y datos de criptomonedas en tiempo real, con funcionalidad de transferencias entre cuentas de Ethereum de prueba. Integración con la blockchain de Ethereum mediante wallets simuladas.',
      tags: ['Java', 'React', 'Spring Boot', 'MongoDB', 'Web3 / ETH'],
      githubUrl: 'https://github.com/carlosfernandezbou'
    },
  ];
}
