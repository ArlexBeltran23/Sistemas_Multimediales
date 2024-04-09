import { Component, inject } from '@angular/core';
import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public FB = inject(FormBuilder);
  public ruta: string = 'login';
  public FormLogin: FormGroup = this.FB.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['',[Validators.required, Validators.minLength(8)]],
  })
  errorMessage: string = '';
  user?: SocialUser;
  loggedIn?: boolean;
  loading: boolean = false;
  constructor(
    private authService: SocialAuthService,
    private auth: AuthService,
    private router: Router
  ) {}

  //Funcion que valida el correo y el tipo de usuario para mostrar elementos visuales
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (!user || this.loading) return;

      this.loading = true;

      const { email } = user;

      //Funcion para peticiones http asincronas
      this.auth.authUser(email).subscribe({
        next: (res) => {
          this.loading = false;
          this.router.navigate(['home']);
        },
        error: (e) => {
          this.loading = false;
          if (e.error.code === '404') {
            this.mostrarAlertaError('¡Oops!', e.error.message);
          } else {
            this.mostrarAlertaError(
              'Error en el servidor',
              'Por favor intenta de nuevo en unas horas.'
            );
          }
        },
      });
    });
  }

  //Alerta de error
  mostrarAlertaError(title: string, msj: string) {
    Swal.fire({
      title: title,
      text: msj,
      icon: 'error',
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'mi-clase-boton-ok',
      },
    }).then((result) => {});
  }
 

  isInvalidField(field: string): boolean | null {
    return (
      this.FormLogin.controls[field].errors &&
      this.FormLogin.controls[field].touched
    );
  }


  getFieldError(field: string): string | null {
    if (!this.FormLogin.controls[field]) return null;

    const errors = this.FormLogin.controls[field].errors || {};

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

  rutaChanges(Ruta:string){
    this.ruta = Ruta;
}

loguearse(){
  this.loading = true;
  this.auth.inciarSesion(this.FormLogin.value).subscribe({
    next: (resp) => {
      this.loading = false
      Swal.fire('Ingreso exitoso', 'Usuario ingresado correctamente', 'success');
      this.router.navigate(['home']);
    },
    error: (err) => {
      this.loading = false 
      Swal.fire('Error', 'Usuario no existente porfavor registrate', 'error'); 
    }
  })
}
}
