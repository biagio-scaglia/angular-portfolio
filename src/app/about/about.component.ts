import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutData = {
    title: "Chi ",
    subtitle: "Sviluppatore Web Full Stack con una passione per la creazione di esperienze digitali eccezionali",
    description: [
      "Sono un ragazzo autodidatta con una solida esperienza nello sviluppo web e nella programmazione.",
      "Mi sono specializzato nell'implementazione di soluzioni innovative finalizzate al miglioramento dell'esperienza degli utenti.",
      "La mia passione per l'innovazione digitale mi ha spinto a esplorare costantemente nuove sfide nel campo tecnologico, e sono sempre alla ricerca di opportunità che mi consentano di ampliare le mie conoscenze e competenze."
    ],
    experience: [
  {
    title: "Consulente AI",
    period: "2024",
    company: "Consorzio Artemide",
    description: "Supporto nell'adozione di soluzioni AI per la digitalizzazione, ottimizzazione dei flussi e generazione contenuti AI-based.",
    icon: "fas fa-robot"
  },
  {
    title: "Redattore e Game Reviewer",
    period: "2025 - Presente",
    company: "NextPlayer.it",
    description: "Scrittura di articoli professionali, recensioni, anteprime e news a tema Nintendo, con focus su Mario e contenuti originali.",
    icon: "fas fa-pen-nib"
  },
  {
    title: "Content Creator e Collaboratore",
    period: "2018 - Presente",
    company: "Plaion & DeAgostini (via italian_sonic_fanpage)",
    description: "Creazione di contenuti social, reel, news e promozione ufficiale per giochi e prodotti brandizzati Sonic.",
    icon: "fas fa-bullhorn"
  },
  {
    title: "Apprendimento Autodidatta",
    period: "2018 - presente",
    company: "Online",
    description: "Studio intensivo di sviluppo e UX/UI design tramite progetti personali e piattaforme e-learning.",
    icon: "fas fa-graduation-cap"
  }
],

    socialLinks: [
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
      { icon: "fas fa-envelope", url: "#" }
    ]
  };

  highlightKeywords(text: string): string {
    const keywords = ['autodidatta', 'soluzioni innovative', 'passione per l\'innovazione digitale', 'ampliare le mie conoscenze e competenze'];
    keywords.forEach(keyword => {
      text = text.replace(new RegExp(keyword, 'g'), `<span class="font-semibold text-blue-600">${keyword}</span>`);
    });
    return text;
  }
}