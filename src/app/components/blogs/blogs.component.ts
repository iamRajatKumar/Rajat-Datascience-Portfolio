import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  blogs = [
    {
      title: 'My Journey from Full-Stack Developer to Data Science',
      desc: 'How I transitioned from building web applications to working with data, ML, and analytics.',
      platform: 'Medium',
      link: 'https://medium.com/@YOUR_MEDIUM_USERNAME/journey-fullstack-to-data-science'
    },
    {
      title: 'Understanding Machine Learning Basics with Python',
      desc: 'A beginner-friendly explanation of ML concepts with real-world examples.',
      platform: 'Medium',
      link: 'https://medium.com/@YOUR_MEDIUM_USERNAME/machine-learning-basics-python'
    },
    {
      title: 'Angular Best Practices for Clean & Scalable Apps',
      desc: 'Lessons learned while building large-scale Angular applications.',
      platform: 'Medium',
      link: 'https://medium.com/@YOUR_MEDIUM_USERNAME/angular-best-practices'
    }
  ];

}
