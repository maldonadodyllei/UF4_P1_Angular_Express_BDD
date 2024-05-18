import { Component, AfterViewInit, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
/*
  private scrollTimer: any;
  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      //quiero que cuando el usuario pare de hacer el scroll, se ejecute el console log
      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        console.log('El usuario dejó de hacer scroll');
      }, 100);
    });
  }
  
  private alreadyScrolled = false;
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
      const videos: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.video, .contDoubleVideo');
  
      videos.forEach((video: HTMLElement) => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5 && !this.alreadyScrolled) {
              setTimeout(() => {
                window.scrollTo({ 
                  top: video.offsetTop, behavior: 'smooth'
                });
                this.alreadyScrolled = true;
  
                // Restablecer alreadyScrolled a false después de 2 segundos
                setTimeout(() => {
                  this.alreadyScrolled = false;
                }, 2000);
              }, 2000);
            }
          });
        }, { threshold: 0.5 });
  
        observer.observe(video);
      });
    }
*/

  playVideo(video: HTMLVideoElement) {
    video.play();
  }

  stopVideo(video: HTMLVideoElement) {
    video.classList.add('fade-out');
    video.pause();
    setTimeout(() => {
      video.currentTime = 0;
      video.classList.remove('fade-out'); // Quitar clase después de detener el video
      video.classList.add('fade-in'); // Agregar clase para iniciar la animación de aparición
      setTimeout(() => {
        video.classList.remove('fade-in'); // Quitar clase después de la animación de aparición
      }, 300); // Duración de la animación de aparición
    }, 100);
  }
}
