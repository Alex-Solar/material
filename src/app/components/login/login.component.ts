import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = fb.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'atorres' && password == 'admin123'){
      // ir a dashboard
      this.fakeLoading ();
    } else {
      // Msje Error
      this.error();
      this.form.reset ();
    }

  }

  error() {
    this._snackBar.open('Usuario o Contraseña ingresados son incorrectos', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      //Redireccionar a dashboard
      this.router.navigate(['/dashboard']);
    }, 1500)
  }

}
