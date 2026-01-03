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
      img: 'assets/images/PersonManagerApp.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Expense Calculator App',
      desc: 'A Expense Calculator App developed in Smalltalk programming language based on Pure OOPs concept.',
      img: 'assets/images/ExpenseCalculator.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      desc: 'While working as a Fullstack developer I have created this website for my personal use.',
      img: 'assets/images/PortfolioImg.png',
      demo: '#',
      github: '#'
    },
    {
      title: 'Todo App',
      desc: 'Developed a Todo Application using Angular for frontend and Node.js with SpringBoot for backend.',
      img: 'assets/images/TodoList.jpg',
      demo: '#',
      github: '#'
    }
  ];

}
