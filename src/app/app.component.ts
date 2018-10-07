import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm : FormGroup;
  termsForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.termsForm = this.formBuilder.group({
      accept: [false, [Validators.requiredTrue]]
    });
  }

  login() {
    // This could be improved.
    if (!this.loginForm.valid || !this.termsForm.valid)
      return false;

    const { email, password } = this.loginForm.value;

    this.http.post('http://localhost:3000/api/login', { email, password })  
      .subscribe(response => {
        console.log(response);
      });
  }
}
