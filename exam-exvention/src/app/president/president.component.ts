import { Component } from '@angular/core';
import { PresidentService } from '../president/service/president.service';
@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.css']
})
export class PresidentComponent {
  presidents: any;
  constructor(private presidentService: PresidentService) { }

  ngOnInit(): void {
    this.getPresident();
  }
  getPresident() {
    this.presidentService.getPresident().subscribe(data =>{
      this.presidents = data;
      console.log(this.presidents);
    })
  }
}
