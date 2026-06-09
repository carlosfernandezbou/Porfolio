import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactItems = [
    { icon: '✉', label: 'Email', value: 'carlosfb2005@gmail.com', href: 'mailto:carlosfb2005@gmail.com', external: false },
    { icon: '☎', label: 'Teléfono', value: '+34 692 913 506', href: 'tel:+34692913506', external: false },
    { icon: 'in', label: 'LinkedIn', value: 'carlos-fernández-bou', href: 'https://www.linkedin.com/in/carlos-fern%C3%A1ndez-bou-7b0218335/', external: true },
    { icon: '⬡', label: 'GitHub', value: 'carlosfernandezbou', href: 'https://github.com/carlosfernandezbou', external: true }
  ];
}
