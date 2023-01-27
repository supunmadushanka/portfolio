import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [{ "category": "Ruby on Rails", "cod": "proj-1", "date": "Dec 18, 2020", "github": "https://github.com/StyvenSoft/friends-contapp", "title": "Friends Contapp", "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-tem.appspot.com/o/FriendApp.png?alt=media&token=09b92546-e91c-44a8-96c5-68a3d6ef0a1e", "web": "https://friends-contapp.herokuapp.com" }, { "category": "Laravel web App", "cod": "proj-2", "date": "Dec 5, 2020", "github": "https://github.com/StyvenSoft/postwi-app", "title": "Postwi App", "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-tem.appspot.com/o/Postwi.png?alt=media&token=9b9ff02f-7b42-4769-ab34-1f1b4babeebd", "web": "https://postwi-app.herokuapp.com" }, { "category": "MERN Stack", "cod": "proj-3", "date": "Apr 17, 2020", "github": "https://github.com/StyvenSoft/Events-Site", "title": "Events Site", "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-tem.appspot.com/o/EventApp.png?alt=media&token=08b3a2b9-1137-4474-946d-0d6c2be7147e", "web": "http://events-site.styvensoft.vercel.app" }];

  constructor(private http: HttpClient) {

  }

}
