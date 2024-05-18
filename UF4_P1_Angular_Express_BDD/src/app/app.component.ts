import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateTitleBasedOnRoute(event.url);
    });
  }

  private updateTitleBasedOnRoute(url: string): void {
    let title = 'Aston Martin | '; 
    switch (url) {
      case '/home':
        title += 'Inicio';
        break;
      case '/admin':
        title += 'Administrar';
        break;
      case '/models':
        title += 'Modelos';
        break;
      default:
        title += 'Angular';
    }
    document.title = title;
  }
}
