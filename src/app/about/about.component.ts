import { Component, OnInit } from '@angular/core';
import { UIService } from '../Shared/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private uiService: UIService) { }

  ngOnInit(): void {
  }

  getCoins() {
    this.uiService.getCoins().subscribe(data => {
      console.log(data)
    })
  }
}
