import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  private texts = ['Full Stack Developer', 'DAW + DAM Graduate'];
  private ti = 0; private ci = 0; private deleting = false;
  private timer: any;

  ngOnInit() { this.type(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  private type() {
    const t = this.texts[this.ti];
    if (!this.deleting) {
      this.typedText = t.slice(0, ++this.ci);
      if (this.ci === t.length) { this.deleting = true; this.timer = setTimeout(() => this.type(), 1800); return; }
    } else {
      this.typedText = t.slice(0, --this.ci);
      if (this.ci === 0) { this.deleting = false; this.ti = (this.ti + 1) % this.texts.length; }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 50 : 80);
  }
}
