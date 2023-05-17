import { Component } from '@angular/core';
import { PopupService } from './service/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  name :any;
  text :any;

  constructor(private popupService: PopupService) {}

  ngOnInit() {

  }

  sendForm() {
    this.popupService.postFormData(this.name, this.text).subscribe(res => {

    })
  }

}
