import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Optional: quick facts to render in template
  highlights = [
    '4+ years of experience as a Full Stack Developer',
    'Currently working as a Senior Software Engineer at Wipro',
    'Strong in Angular, React, Spring Boot, Microservices & AWS',
    'Transitioning into Data Science with a focus on ML & MLOps',
  ];

  learning = [
    'Deepening my understanding of statistics and machine learning',
    'Building end-to-end data science projects in Python',
    'Writing about my learning journey through blogs and tutorials',
  ];
}
