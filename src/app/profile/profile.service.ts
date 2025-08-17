import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Capital Marketing',
      role: 'Full Stack Developer ',
      desc: 'Developed web based application for TMX Group Limited which is a canadian financial services company that operates equity,fixed income,derivatives, and energy markets exchanges',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular,Java,SQL'
    },
    {
      id: 2,
      title: 'Gym app',
      role: 'Frontend Developer',
      desc: 'Project aimed at organizing all activities of Gym.People can view details about gym,programs,membership plans,trainers etc',
      imgUrl: 'assets/images/z4.gif',
      tech: 'ReactJs',
      LiveDemo:"https://gymappfrontend.vercel.app/"
    },
    {
      id: 3,
      title: 'Math game',
      role: 'Frontend Developer',
      desc: 'Number Rush is a fast-paced math game where you get 5 cards and use math operations and grouping to match a target card. Race against the clock to solve the challenge and post your high score!',
      imgUrl: 'assets/images/z7.gif',
      tech: 'ReactJs',
      LiveDemo:"https://game-app-one-nu.vercel.app/"
    },
    {
      id: 4,
      title: 'Distributed File System',
      role: 'Frontend Developer',
      desc: 'Full-stack file storage application offers a comprehensive solution for organizations to manage and store their files efficiently. It includes features such as secure file uploads, advanced file management, and role-based authorization, ensuring that only authorized users can access specific files',
      imgUrl: 'assets/images/z10.gif',
      tech: 'NextJs',
      LiveDemo:"https://file-drive-ashy.vercel.app/"
    },
    {
      id: 5,
      title: 'Toll Calculator',
      role: 'Frontend Developer',
      desc: 'Application allows users to calculate toll charges and gather detailed toll information for their journey between two cities. Whether you are traveling by car, bus, truck, or multi-axle vehicle, this app helps you plan your route, identify toll plazas, and determine the specific toll rates applicable to your vehicle type',
      imgUrl: 'assets/images/z9.gif',
      tech: 'ReactJs',
      LiveDemo:"https://toll-calculator-app-tan.vercel.app/"
    },
    {
      id: 6,
      title: 'Book app',
      role: 'Frontend Developer',
      desc: 'Simple book app where user is able to create and delete list of books and see all available books',
      imgUrl: 'assets/images/z3.gif',
      tech: 'Angular'
    },
   
    {
      id: 7,
      title: 'CarParking App',
      role: 'FullStack Developer',
      desc: 'Designed to book slots for parking in advance.User have facility to book slots,end booking,view all bookings. Two portals are available admin and user.Admin can add slots,add vehicle,add locations and view all bookings.',
      imgUrl: 'assets/images/z5.gif',
      tech: 'Angular,Nodejs,SQL'
    },
    
    {
      id: 8,
      title: 'Employee App',
      role: 'FullStack Developer',
      desc: 'Designed for HR professionals to  manage details of the employees.User can add,edit,delete and view employee details',
      imgUrl: 'assets/images/z6.gif',
      tech: 'Angular,Java,SQL'
    },
    {
      id: 9,
      title: 'Home Health Provisioning System',
      role: 'Frontend Developer',
      desc: 'Project aimed at providing better online medical consultation and hospital management facilities',
      imgUrl: 'assets/images/z2.gif',
      tech: 'PHP and MS SQL '
    },
    
    


    
  ]
  about2 = `Full Stack Developer with 4+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 7+ All versions, Nextjs, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, PHP, Bootstrap, MongoDB and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "assets/Volga_Resume_04-03-2025.pdf"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 7+, REACT JS, NEXT JS',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS, PHP, Python',
      'progress': '50%'
    },
    {
      'id': '3',
      'skill': 'JAVA, JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'HTML, CSS, SASS, SCSS',
      'progress': '90%'
    },
    {
      'id': '5',
      'skill': 'MySQL',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'AJAX, GIT, JIRA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2018',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering,Computer Science',
      'info': `Completed B.Tech in Computer Engineering with 7.85 CGPA.`,
      'institution': 'School Of Engineering, CUSAT'
    },
    {
      'id': '2',
      'from_to_year': '2012 - 2014',
      'education': 'Higher Secondary',
      'stream': 'Bio Maths',
      'institution': 'St.Teresa\'s C.G.H.S.S ',
      'info': `Completed my high school with 95%.`
    },
    {
      'id': '3',
      'from_to_year': '2011 - 2012',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'St.Mary\'s C.G.H.S.S ',
      'info': `
Completed my Secondary school with 95%.`
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Nuvento',
      location: 'Kerala, India',
      timeline: 'Feb 2024 - Aug 2024 ',
      role: 'FRONTEND DEVELOPER',
      work: `Technologies : React , Nodejs .

Developed responsive user interfaces for airline client (Air India) applications using React.js . 

Implemented interactive maps and geolocation features to enhance user experience and navigation within airline booking systems .

Managed language localization using i18n frameworks to support multilingual content for global airline client applications .

Automated unit tests for React components, Redux actions, and utility functions, achieving 95%+ code coverage and identifying critical bugs early in the development cycle 



  `
    },
    
    {
      id: 2,
      company: 'Lyve Global',
      location: 'Abudhabi, UAE',
      timeline: 'Sep 2023 - Nov 2023',
      role: 'SOFWARE ENGINEER (FULL STACK DEVELOPER)',
      work: `Technologies : React , Nodejs , MongoDB .

Collaborated with cross-functional teams to design, develop, and deliver robust web applications using Node.js, TypeScript, and React . 

Integrated POS from customer system to our product Radyes by building and maintaining APIs and backend services using advanced concepts in Node.js, TypeScript, and Javascript 

  `
    },
    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Chennai,India',
      timeline: 'Jan 2020 - Apr 2023',
      role: 'System Engineer (Full Stack Developer)',
      work: `Technologies : Angular , React , Java , SQL .

Developed highly visible web apps for banking and financial services using Angular7, React, Node, TypeScript and backend interface with Java .

Added persistant sorting, saving users several minutes of time after upating data .

Involved in schema validation and response generation in XML using Java .

Automated the creation and data loading of an AWS DynamoDB table .

Worked closely with customers in a tight feedback loop to validate the analytics product offering .

Built extensive test coverage for all new features which reduced the number of customer complaints .

Worked within an agile team and helped prioritize and scope feature requests to ensure that the biggest impact features were worked on first 
  `
    },


  ]

    // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  
}
