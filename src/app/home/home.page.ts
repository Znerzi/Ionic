import { Component, OnInit } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
  };

  skills = [
    { name: 'Ionic Framework', level: 0.95, color: 'primary' },
    { name: 'Angular / TypeScript', level: 0.90, color: 'secondary' },
    { name: 'Capacitor Runtime Native Bridges', level: 0.85, color: 'tertiary' },
    { name: 'Node.js & REST APIs', level: 0.80, color: 'success' }
  ];

  projects = [
    {
      title: 'E-Commerce Mobile Ecosystem',
      subtitle: 'Ionic, NgRx, Stripe Integration',
      description: 'A lightning-fast storefront system operating multi-threaded state syncing via local database persistence caches.',
      image: 'https://unsplash.com'
    },
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
