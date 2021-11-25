import { AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterContentInit {

  modalOpened: boolean = false;
  planSelected: string | undefined = '';

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
  }

  toggleModal(plan?: string) {
    this.planSelected = plan;
    this.modalOpened = !this.modalOpened;
  }

  redirect() {
    this.router.navigate(['signup']);
  }

}
