import { Component, OnInit } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  logoGithub,
  logoLinkedin,
  mailOutline,
  codeSlashOutline,
  layersOutline,
  phonePortraitOutline,
  rocketOutline,
  openOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PercentPipe]
})
export class HomePage implements OnInit {

  profile = {
    name: 'Alex Developer',
    title: 'Full-Stack Mobile Engineer',
    bio: 'Crafting high-performance cross-platform mobile experiences using modern web ecosystems and native runtime bridges.',
    avatar: 'https://ionicframework.com',
    email: 'alex@example.com',
    github: 'https://github.com',
      description: 'Low-latency pricing engine dashboard streaming multi-tier telemetry tracking tokens natively across iOS and Android platforms.',
      image: 'https://unsplash.com'
    }
  ];

  constructor() {
    addIcons({
      logoGithub,
      logoLinkedin,
      mailOutline,
      codeSlashOutline,
      layersOutline,
      phonePortraitOutline,
      rocketOutline,
      openOutline
    });
  }

  ngOnInit() {}

  contactMe() {
    window.open(`mailto:${this.profile.email}`, '_blank');
  }
}
