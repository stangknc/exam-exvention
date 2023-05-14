import { Component } from '@angular/core';
import { Candidate2Service } from '../candidate2/service/candidate2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate2',
  templateUrl: './candidate2.component.html',
  styleUrls: ['./candidate2.component.css']
})
export class Candidate2Component {

  constructor(private candidate2Service: Candidate2Service,
    private router: Router
  ) {}

  candidates: any;

  ngOnInit(): void {
    this.getCandidate2();

  }

  getCandidate2() {
    this.candidate2Service.getCandidate2().subscribe(data =>{
      this.candidates = data;
      console.log(this.candidates);

    })
  }

  goPageCandidate(){
    this.router.navigate(['candidate']);
  }

}
