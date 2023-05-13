import { Component } from '@angular/core';
import { PresidentService } from '../president/service/president.service';
@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.css']
})
export class PresidentComponent {
  presidents: any;
  constructor(private PresidentService: PresidentService) { }

  ngOnInit(): void {
    this.getPresident();
  }
  getPresident() {
    this.PresidentService.getPresident().subscribe(data =>{
      this.presidents = data;
      console.log(this.presidents);
    })
  }
}
