import { Component } from '@angular/core';
import {
  Container,
  MoveDirection,
  OutMode,

} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { ParticlesComponent } from "../../../components/particles/particles/particles.component";

@Component({
  selector: 'app-home',
  imports: [NgxParticlesModule, ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
