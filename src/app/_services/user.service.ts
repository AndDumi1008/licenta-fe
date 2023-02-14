import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../_interfaces/IUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  async userLogin(username: string, password: string): Promise<boolean> {
    let ok: boolean = false;

    await this.afAuth.signInWithEmailAndPassword(username, password)
      .then(() => {
        // code to handle successful login
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            user.getIdToken().then(accesToken => {
              localStorage.setItem('access_token', accesToken);
              localStorage.setItem('refresh_token', user.refreshToken);
              localStorage.setItem('isLoggedin', "true");
              localStorage.setItem('uid', user.uid);

              this.getUser(user.uid).subscribe((userData: IUser) => {
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
      })
      .catch(() => {
        ok = false;
      });

    return ok;
  }

  async userRegister(registerForm: FormGroup): Promise<boolean> {
    let ok: boolean = true;

    let uid: any, name: any, userRole: any;

    await this.afAuth.createUserWithEmailAndPassword(registerForm.value.email, registerForm.value.password)
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

    return ok;
  }

  userLogout() {
    this.afAuth.signOut();
    localStorage.clear();
  }

  getUser(uid: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/user/${uid}`, {headers: this.header.getHeaderOptions()})
  }

  refreshUserToken() {
    return this.http.post(`https://securetoken.googleapis.com/v1/token?key=${environment.firebase.apiKey}`,
      {
        grant_type: 'refresh_token',
        refresh_token: `${localStorage.getItem('refresh_token')}`
      },
      {headers: new HttpHeaders({"Content-Type": "application/json"})}).toPromise()
      .then(res => {
        console.log("res: ", res)
        if (res != undefined) {
          // Value [0] should stand for access token
          localStorage.setItem('access_token', Object.values(res)[0])
        }
      })
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
