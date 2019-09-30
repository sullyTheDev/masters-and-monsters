import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errors: any;
  form: FormGroup;
  constructor(private authService: AuthService, private router: Router, private snackbarService: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  loginClicked() {
    if (!this.form.invalid) {
      this.email = this.form.get('email').value;
      this.password = this.form.get('password').value;
      this.authService.loginWithEmailAndPassword(this.email, this.password).subscribe(user => {
        if (user) {
          this.router.navigate(['/dashboard'], {state: null});
        } else {
          this.errors = {login: 'invalid email or password'};
        }
      }, () => {
        this.errors = {login: 'invalid email or password'};
        this.snackbarService.open('invalid email or password', null, {duration: 5000});
        this.form.reset({email: this.email});
      });
    }
  }
}
