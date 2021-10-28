import { Component, OnInit } from '@angular/core';
import { UIService } from '../Shared/ui.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isOpen: boolean = false;

  constructor(private uiService: UIService ) { }

  ngOnInit(): void {
    this.uiService.openSideNav.subscribe((open: any) => {
      this.isOpen = open
    })
  }

  closeNav() {
    this.uiService.openSideNav.next(false);

  }

}
