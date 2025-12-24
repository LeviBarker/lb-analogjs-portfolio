import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';

@Component({
  selector: 'app-home',
  template: `
    <app-hero>
      <h1>Welcome to my meta-framework-powered semantic HTML website.</h1>
      <p>This is the home page of our AnalogJS application.</p>
    </app-hero>
  `,
  imports: [HeroComponent],
})
export default class Home {
  onCallToActionClicked() {
    alert('Call to action button clicked!');
  }
}
