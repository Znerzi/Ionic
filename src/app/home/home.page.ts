
    {
      title: 'E-Commerce Mobile Ecosystem',
      subtitle: 'Ionic, NgRx, Stripe Integration',
      description: 'A lightning-fast storefront system operating multi-threaded state syncing via local database persistence caches.',
      image: 'https://unsplash.com'
    },
    {
      title: 'Crypto Analytics Pulse App',
      subtitle: 'Capacitor, RxJS WebSockets, Chart.js',
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
