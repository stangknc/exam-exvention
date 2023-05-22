import { Component } from '@angular/core';
import { PopupService } from './service/popup.service';
import { Popup } from './popup';

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
    let dataPost: Popup;
    dataPost = {
      'member': this.name,
      'message': this.text
    }

    this.popupService.postFormData(dataPost).subscribe(res => {

    })
  }

}
