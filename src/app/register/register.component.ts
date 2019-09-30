import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  errors: any;
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: MatSnackBar,
    private fireStore: AngularFirestore
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  registerUser() {
    if (!this.form.invalid) {
      this.email = this.form.get('email').value;
      this.password = this.form.get('password').value;
      this.authService
        .registerWithEmailAndPassword(this.email, this.password)
        .subscribe(
          user => {
            if (user) {
              const userModel: User = {authId: user.user.uid, name: user.user.email};
              this.router.navigate(['/dashboard'], { state: null });
              this.fireStore.doc<User>(`users/${user.user.uid}`).set(userModel);
            } else {
              this.errors = {
                login:
                  'We are unable to create your account as this time, please try again later.'
              };
            }
          },
          x => {
            const snackbarRef = this.snackbarService.open(x.message, 'login', {
              duration: 5000
            });
            this.form.reset();
            snackbarRef.onAction().subscribe(() => {
              this.router.navigate(['/login']);
            });
          }
        );
    }
  }
}
