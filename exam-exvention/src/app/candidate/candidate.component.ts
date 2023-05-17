import { Component } from '@angular/core';
import { CandidateService } from './service/candidate.service';
import { Router } from '@angular/router';
import { PopupComponent } from '../shared/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  candidates: any;
  formModal: any;
  srchCandidates: any;
  checkVal: any;

  constructor(private candidateService: CandidateService,
    private router: Router,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCandidate();

  }
  getCandidate() {
    this.candidateService.getCandidate().subscribe(data =>{
      this.candidates = data;
      this.srchCandidates = this.candidates;
    })
  }

  search(event: any) {
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.checkVal = this.srchCandidates = this.candidates.filter((e: any) =>
        e.name === val ||
        e.education === val ||
        e.position === val ||
        e.worked === val );
    }
    else {
      this.srchCandidates = this.candidates;
    }
  }

  goPageCandidate2(){
    this.router.navigate(['candidate2']);
  }

  openDialog(){
    this.dialogRef.open(PopupComponent);
  }
}
