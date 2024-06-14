import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PackagesComponent } from "./packages/packages.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SubscribeCoursesComponent } from './subscribe-courses/subscribe-courses.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, PackagesComponent, WelcomeComponent, SubscribeCoursesComponent, TeamComponent, FooterComponent]
})
export class AppComponent {
  title = 'Visa2fly-website';
}
