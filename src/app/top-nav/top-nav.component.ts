import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { UIService } from '../Shared/ui.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private elementRef: ElementRef, private uiService: UIService) { }

  openNav: boolean = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const nav = this.elementRef.nativeElement.children;
    nav[0].style.opacity = window.pageYOffset > nav[0].clientHeight ? '50%' : '100%';

    }

  ngOnInit(): void {
  }

  openSidenav() {
    this.openNav = !this.openNav
    this.uiService.openSideNav.next(this.openNav);
  }
}
