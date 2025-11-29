import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {

  certificates = [
    {
      title: 'Data Science (CampusX)',
      provider: 'CampusX',
      date: '2024',
      description: 'Completed the Data Science course covering Python, statistics, and ML fundamentals.',
      image: 'assets/certs/campusx-datascience.png',
      viewUrl: 'https://example.com/campusx-certificate', // optional: public verification URL
      file: 'assets/certs/campusx-datascience.pdf',
      downloadName: 'CampusX_DataScience_Certificate.pdf'
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      date: '2025',
      description: 'AWS foundational cloud knowledge — compute, storage, networking, security, and pricing.',
      image: 'assets/certs/aws-cloud-practitioner.png',
      viewUrl: 'https://example.com/aws-certificate', // optional
      file: 'assets/certs/aws-cloud-practitioner.pdf',
      downloadName: 'AWS_Cloud_Practitioner_Certificate.pdf'
    },
    {
      title: 'Microsoft: Java Certification',
      provider: 'Microsoft',
      date: '2020',
      description: 'Java programming certification demonstrating core Java skills.',
      image: 'assets/certs/microsoft-java.png',
      viewUrl: 'https://example.com/microsoft-java', // optional
      file: 'assets/certs/microsoft-java.pdf',
      downloadName: 'Microsoft_Java_Certificate.pdf'
    },
    {
      title: 'Agile Fundamentals',
      provider: 'Coursera / Other',
      date: '2023',
      description: 'Course on Agile principles, Scrum, and teamwork best practices.',
      image: 'assets/certs/agile-fundamentals.png',
      file: 'assets/certs/agile-fundamentals.pdf',
      downloadName: 'Agile_Fundamentals_Certificate.pdf'
    },
    {
      title: 'Agile Fundamentals',
      provider: 'Coursera / Other',
      date: '2023',
      description: 'Course on Agile principles, Scrum, and teamwork best practices.',
      image: 'assets/certs/agile-fundamentals.png',
      file: 'assets/certs/agile-fundamentals.pdf',
      downloadName: 'Agile_Fundamentals_Certificate.pdf'
    },
    {
      title: 'Agile Fundamentals',
      provider: 'Coursera / Other',
      date: '2023',
      description: 'Course on Agile principles, Scrum, and teamwork best practices.',
      image: 'assets/certs/agile-fundamentals.png',
      file: 'assets/certs/agile-fundamentals.pdf',
      downloadName: 'Agile_Fundamentals_Certificate.pdf'
    }
  ];

  // Download helper - creates a temporary link and triggers a download
  downloadCert(filePath: string | undefined, filename?: string): void {
    if (!filePath) return;
    const a = document.createElement('a');
    a.href = filePath;
    a.download = filename || '';
    // If using Angular dev server, ensure file is in /src/assets and path is correct.
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
