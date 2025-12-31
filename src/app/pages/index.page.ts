import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';

@Component({
  selector: 'app-home',
  template: `
    <app-hero>
      <h1>👋&nbsp;Hello, I'm <a href="https://www.linkedin.com/in/BarkerLevi/" target="_blank" rel="noopener noreferrer">Levi</a></h1>
      <p>I've been creating websites and applications for {{yearsOfExperience}}+ years, and am a 
        <a href="https://www.credly.com/badges/b681b049-4b29-4754-95ec-3c420ae76201/public_url" target="_blank">Google-certified UX designer</a>. 
      </p>
      <p>
        <small><em>This website is built with performance, accessibility, and maintainability in mind.  Check out the <a href="/manifest">manifest</a> to learn more about how it was made.</em></small>
      </p>
      <button class="outline" disabled>💬&nbsp;Connect</button>
    </app-hero>
  `,
  imports: [HeroComponent],
})
export default class Home {

  readonly yearsOfExperience = new Date().getFullYear() - 2016;

  onCallToActionClicked() {
    alert('Call to action button clicked!');
  }
}
