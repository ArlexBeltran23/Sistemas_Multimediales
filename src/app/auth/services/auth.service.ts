import { LoginSend, RegisterSend } from './../interfaces/RegisterSend.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
// import { environment } from 'src/environments/environments';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environments';
import { LoginStatus } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user?: User;
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private AuthService: SocialAuthService
  ) {}

  //Devuelve el objeto de usuario
  get user(): User | undefined {
    return this._user;
  }

  /**
   * Trae el usuario almacenado en el SessionStorage
   * @returns User si está almacenado
   */
  getStorageUserData(): User | undefined {
    const user = sessionStorage.getItem('user');

    if (!user) return undefined;
    this._user = JSON.parse(user);

    return JSON.parse(user);
  }

  /**
   * Verifica si el usaurio se encuentra autenticado.
   * @returns boolean
   */
  authUserLogged(): Observable<boolean> {
    if (this.getStorageUserData()) {
      return of(true);
    }
    return of(false);
  }

  /**
   * Realiza la validación de que el usuario existe, registra el usuario en el sessionStorage y lo almacena en memoria
   * @param email email del usuario a validar
   * @returns Observable<user>
   */

  /**
   * Cerrar sesión usuario, validando que el menú administrativo no quede abierto.
   * @return void
   */
  logOut(): void {
    this._user = undefined;
    sessionStorage.removeItem('user');

    //Cerramos el drawer en caso de que quede abierto.
    this.AuthService.signOut();
  }

  authUser(email: string): Observable<LoginStatus> {
    const url = `${this.apiUrl}/Auth/login`;
    return this.http.post<LoginStatus>(url, { email }).pipe(
      tap((res) => {
        const user: User = {
          email: res.email,
          rol: res.rol,
          token: res.token,
        };
        sessionStorage.setItem('user', JSON.stringify(user));
        this._user = user;
      })
    );
  }

  RegistrarUsuario(formRegister: RegisterSend){
    return this.http.post(`http://127.0.0.1:8000/api/register`, formRegister)
  }

  inciarSesion(formlogin: LoginSend){
  return this.http.post(`http://127.0.0.1:8000/api/login`, formlogin)
  }
}
