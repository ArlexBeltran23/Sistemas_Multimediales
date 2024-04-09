import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public loading = false;
  public value = ''; 
  public FB = inject(FormBuilder);
  public authService = inject(AuthService);
  public FormRegister: FormGroup = this.FB.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
  })
  AuthService: any;
  router: any;
  constructor() { }

  ngOnInit() {
  }

  isInvalidField(field: string): boolean | null {
    return (
      this.FormRegister.controls[field].errors &&
      this.FormRegister.controls[field].touched
    );
  }


  getFieldError(field: string): string | null {
    if (!this.FormRegister.controls[field]) return null;

    const errors = this.FormRegister.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'pattern':
          return 'Debe ingresar un formato válido';
        case 'minlength':
          return `Mínimo ${errors[key].requiredLength} caracteres.`;
        case 'maxlength':
          return `Máximo ${errors[key].requiredLength} caracteres.`;
        case 'min':
          return `El valor debe ser mayor a  ${errors[key].min}.`;
      }
    }

    return null;
  }

  RegistrarUsuario(){
    this.loading = true;
    this.authService.RegistrarUsuario(this.FormRegister.value).subscribe({
      next: (resp) => {
       this.loading = false
       Swal.fire('Registro exitoso', 'Usuario registrado correctamente', 'success');
      this.router.navigate(['Admin']);
      },
      error: (err) => {
       this.loading = false 
       Swal.fire('Error', err.error.msg, 'error'); 
      }
    })
  }
}
