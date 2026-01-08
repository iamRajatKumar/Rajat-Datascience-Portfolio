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
      title: 'AI Tools Are Transforming How We Work — But Are They Also Making Us Less Creative?',
      desc: 'An exploration of the impact of AI tools on creativity in various professions, Making us Less Creative',
      platform: 'Medium',
      image: 'assets/blogs/AIblogimg.png',
      link: 'https://medium.com/@Iamrajatkumar/ai-tools-are-transforming-how-we-work-but-are-they-also-making-us-less-creative-a60b55830b28'
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
    },
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
