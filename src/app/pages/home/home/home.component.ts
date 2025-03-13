import { Component, HostListener } from '@angular/core';
import {
  Container,
  MoveDirection,
  OutMode,

} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { ParticlesComponent } from "../../../components/particles/particles/particles.component";
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  imports: [NgxParticlesModule, ParticlesComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = document.getElementById('services');
    if (element) {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight * 0.75) {
        element.classList.add('show');
      }
    }
  }


}
