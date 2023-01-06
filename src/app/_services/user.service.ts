import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../_interfaces/IUser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalVariableService} from "./global-variable.service";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private afAuth: AngularFireAuth,
              private http: HttpClient,
              private header: GlobalVariableService,
              private router: Router) {
  }

  userLogin(username: string, password: string): boolean {
    let ok: boolean = false;

    setTimeout(() => {
      this.afAuth.signInWithEmailAndPassword(username, password)
        .then(() => {
          // code to handle successful login
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              user.getIdToken().then(accesToken => {
                localStorage.setItem('access_token', accesToken);
                localStorage.setItem('isLoggedin', "true");
                localStorage.setItem('uid', user.uid);

                this.getUser(user.uid).subscribe((userData) => {
                  localStorage.setItem("photoUrl", userData.photoURL!);
                  localStorage.setItem("USER_ROLE", userData.userRole);
                  localStorage.setItem("name", userData.name);
                })

              }).then(() => {
                this.router.navigate(['/profile/dashboard']);
                ok = true;
              })
            }
          })
          ok = true;
        })
        .catch(() => {
          ok = false;
        });
    }, 0)

    return ok;
  }

  userRegister(registerForm: FormGroup): boolean {
    let ok: boolean = true;

    let uid: any, name: any, userRole: any;

    setTimeout(() => {
      this.afAuth.createUserWithEmailAndPassword(registerForm.value.email, registerForm.value.password)
        .then(() => {
          // code to handle successful register
          this.userLogin(registerForm.value.email, registerForm.value.password);
          this.afAuth.currentUser.then((user) => {
            registerForm.value.uid = user?.uid;
            uid = registerForm.value.uid
            name = registerForm.value.name
            userRole = registerForm.value.userRole

            user?.getIdToken().then(token => {
              localStorage.setItem('access_token', token);
              this.saveUser({
                uniqueId: uid,
                name: name,
                userRole: userRole,
                photoURL: '',
              }).subscribe((data) => {
                console.log(data)
              })
            })

          })
        }).catch(() => {
        ok = false;
      });
    }, 0)

    return ok;
  }

  userLogout() {
    this.afAuth.signOut();
    localStorage.clear();
  }

  getUser(uid: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/user/${uid}`, {headers: this.header.getHeaderOptions()})
  }

  saveUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/user/save`, user, {headers: this.header.getHeaderOptions()})
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

  getLocalStorage(keyValue: string) {
    return localStorage.getItem(keyValue)
  }

}
