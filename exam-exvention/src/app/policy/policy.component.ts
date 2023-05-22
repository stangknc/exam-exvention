import { Component } from '@angular/core';
import { PolicyService } from '../policy/service/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {
  policys: any;
  srchPolicys: any;
  checkVal: any;


  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.getPolicy();
  }

  getPolicy() {
    this.policyService.getPolicy().subscribe(data =>{
      this.policys = data;
      this.srchPolicys = this.policys;
    })
  }

  search(event: any) {
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.checkVal = this.srchPolicys = this.policys.filter((e: any) =>
        e.name.includes(val)
      );
    }
    else {
      this.srchPolicys = this.policys;
    }
  }

}
