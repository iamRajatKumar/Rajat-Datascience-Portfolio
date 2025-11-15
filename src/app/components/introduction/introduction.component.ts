import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-introduction',
  standalone: false,
  templateUrl: './introduction.component.html',
  styleUrl :'./introduction.component.scss'
})

export class IntroductionComponent implements AfterViewInit {
  @ViewChild('tsparticles', { static: true })
  particlesContainer!: ElementRef<HTMLDivElement>;

  async ngAfterViewInit(): Promise<void> {
    // Load the slim bundle (shapes, movers, updaters, etc.)
    await loadSlim(tsParticles);

    await tsParticles.load({
      id: this.particlesContainer.nativeElement.id,
      options: {
        background: {
          color: '#0f172a',
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80
          },
          color: {
            value: '#38bdf8',
          },
          links: {
            enable: true,
            distance: 150,
            color: '#38bdf8',
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: {
              default: 'bounce',
            },
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      },
    });
  }
}
