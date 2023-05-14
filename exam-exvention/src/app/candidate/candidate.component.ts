import { Component } from '@angular/core';
import { CandidateService } from './service/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  candidates: any;
  formModal: any;
  searchText = '';
  filteredData = [];

  constructor(private candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCandidate();

  }
  getCandidate() {
    this.candidateService.getCandidate().subscribe(data =>{
      this.candidates = data;
      console.log(this.candidates);

    })
  }

  search() {
    console.log(this.searchText);
    // this.candidates.filter(c => )

  }

  goPageCandidate2(){
    this.router.navigate(['candidate2']);
  }
}
