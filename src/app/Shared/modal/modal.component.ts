import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  template: `
  <div class="backdrop"></div>
<ng-content (clickOutside)="closeModal()"></ng-content>
  `
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    console.log("closed from modal")
  }

}
