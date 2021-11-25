import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';
import { UIService } from '../Shared/ui.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private elementRef: ElementRef, private uiService: UIService) { }

  openNav: boolean = false;
  onTop: boolean = true;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const nav = this.elementRef.nativeElement.children;
    this.onTop = window.pageYOffset < nav[0].clientHeight;
    nav[0].style.background = window.pageYOffset > nav[0].clientHeight ? 'linear-gradient(#090910, #09091033)' : '#090910';
  }


  ngOnInit(): void {
    // fromEvent(window, 'scroll').pipe().subscribe((e: Event) => { //RxJs approach for handling an event
    //   console.log('event: ', e)
    //   const nav = this.elementRef.nativeElement.children;
    //   this.onTop = window.pageYOffset < nav[0].clientHeight;
    //   nav[0].style.background = window.pageYOffset > nav[0].clientHeight ? '#4a224d80' : '#4a224d';
    // })
    this.uiService.openSideNav.subscribe((open: any) => {
      this.openNav = open;
    })
  }

  hover(event: string) {
    const nav = this.elementRef.nativeElement.children;
    nav[0].style.background = !this.onTop && event === 'out' ? 'linear-gradient(#090910, #09091033)' : '#090910';
  }

  openSidenav() {
    this.openNav = !this.openNav
    this.uiService.openSideNav.next(this.openNav);
  }
}
