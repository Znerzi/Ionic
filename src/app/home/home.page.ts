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
    { name: 'Node.js
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
