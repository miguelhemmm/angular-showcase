import { AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterContentInit {

  modalOpened: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
  }

  toggleModal(plan?: string) {
    console.log('opened: ', plan)
    this.modalOpened = !this.modalOpened;
  }

}
