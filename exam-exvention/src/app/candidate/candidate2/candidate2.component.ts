import { Component } from '@angular/core';
import { Candidate2Service } from '../candidate2/service/candidate2.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/popup/popup/popup.component';

@Component({
  selector: 'app-candidate2',
  templateUrl: './candidate2.component.html',
  styleUrls: ['./candidate2.component.css']
})
export class Candidate2Component {

  constructor(private candidate2Service: Candidate2Service,
    private router: Router,
    private dialogRef : MatDialog
  ) {}

  candidates: any;
  srchCandidates: any;
  checkVal: any;

  ngOnInit(): void {
    this.getCandidate2();

  }

  getCandidate2() {
    this.candidate2Service.getCandidate2().subscribe(data =>{
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

  goPageCandidate(){
    this.router.navigate(['candidate']);
  }

  openDialog(){
    this.dialogRef.open(PopupComponent);
  }

}
