import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  @Input() parentForm : FormGroup;
  scrollBottom : boolean;

  constructor() { }

  ngOnInit() {
    this.scrollBottom = false;
   }

  scroll(terms) {
    if (terms.scrollTop === (terms.scrollHeight - terms.offsetHeight)) {
      this.scrollBottom = true;
    }
  }

}
