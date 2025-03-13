import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Torquato IT';
}
