import { Component } from '@angular/core';
import { Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-introduction',
  standalone: false,
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

  // Particle options (tweak colors/speed/links to taste)
  particlesOptions: any = {
    background: { color: { value: '#ffffff' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 3 }
      }
    },
    particles: {
      color: { value: '#ff6a00' },
      links: {
        color: '#ff6a00',
        distance: 120,
        enable: true,
        opacity: 0.45,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.0,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'bounce' }
      },
      number: { value: 65, density: { enable: true, area: 900 } },
      opacity: { value: 0.55 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  // Initialize particles engine — use any to avoid cross-package typing issues
  async particlesInit(engine: any): Promise<void> {
    await loadFull(engine as any);
  }

  // Called after particles are loaded
  onParticlesLoaded(container: Container | undefined): void {
    // debug: console.log('particles container', container);
  }

  // Resume download: point to /assets/resume.pdf (place your resume there)
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Rajat_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
