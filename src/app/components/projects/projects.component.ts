import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Stock Market Predictor',
      desc: 'A Machine Learning model that predicts stock movements using historical trends and sentiment analysis.',
      img: 'assets/images/project2.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Quiz App (Microservices Architecture)',
      desc: 'An end-to-end quiz platform built using Spring Boot microservices, Eureka Registry, and Angular frontend.',
      img: 'assets/images/quizproject.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Person Manager App (SpringBoot AWS DynamoDB)',
      desc: 'Built using Spring Boot, this Application manages person records with AWS DynamoDB as the backend database.',
      img: 'assets/images/project1.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'AI Stock Market Predictor',
      desc: 'A Machine Learning model that predicts stock movements using historical trends and sentiment analysis.',
      img: 'assets/images/project2.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Quiz App (Microservices Architecture)',
      desc: 'An end-to-end quiz platform built using Spring Boot microservices, Eureka Registry, and Angular frontend.',
      img: 'assets/images/project1.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Data Science Portfolio',
      desc: 'A collection of data science projects built with Python, ML, and statistical analysis.',
      img: 'assets/images/project1.png',
      demo: '#',
      github: '#'
    }
  ];

}
