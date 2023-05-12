import { Component } from '@angular/core';
import { PolicyService } from '../policy/service/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {
  policys: any;
  constructor(private PolicyService: PolicyService) { }

  ngOnInit(): void {
    this.getPolicy();
  }
  getPolicy() {
    this.PolicyService.getPolicy().subscribe(data =>{
      this.policys = data;
    })
  }

}
