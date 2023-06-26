import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../_interfaces/IUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalVariableService} from "./global-variable.service";
import {FormGroup} from "@angular/forms";
import {IUserExtended} from "../_interfaces/IUserExtended";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = environment.apiUrl;
  public userInfo: any = {};

  constructor(private afAuth: AngularFireAuth,
              private http: HttpClient,
              private header: GlobalVariableService,
              private globalVariable: GlobalVariableService,
              private router: Router) {
  }

  async userLogin(username: string, password: string): Promise<boolean> {
    return await this.afAuth.signInWithEmailAndPassword(username, password)
      .then(async () => {
        // code to handle successful login
        return await new Promise<boolean>((resolve) => {
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              user.getIdToken().then(accessToken => {
                localStorage.setItem('access_token', accessToken);
                localStorage.setItem('refresh_token', user.refreshToken);
                localStorage.setItem('isLogged', "true");
                this.globalVariable.setUId(user.uid);

                this.getUser(user.uid).subscribe((userData: IUser) => {
                  localStorage.setItem("photoUrl", userData.photoURL!);
                  localStorage.setItem("USER_ROLE", userData.userRole);
                  localStorage.setItem("name", userData.name);
                })

              }).then(() => {
                this.router.navigate(['/profile/dashboard']);
                resolve(true);
              }).catch(() => {
                resolve(false)
              })
            }
            resolve(false)
          })

        });
      })
      .catch(() => {
        return false;
      });
  }

  async userRegister(registerForm: FormGroup): Promise<boolean> {
    let ok: boolean = true;

    let uid: any, name: any, userRole: any;

    await this.afAuth.createUserWithEmailAndPassword(registerForm.value.email, registerForm.value.password)
      .then(() => {
        // code to handle successful register
        this.afAuth.currentUser.then((user) => {
          registerForm.value.uid = user?.uid;
          uid = registerForm.value.uid
          name = registerForm.value.name
          userRole = "User"

          user?.getIdToken().then(token => {
            localStorage.setItem('access_token', token);
            this.saveUser({
              id: null,
              uniqueId: user?.uid,
              name: name,
              userRole: userRole,
              photoURL: '',
              courseArr: [{}]
            }).subscribe()
          })
        })
        this.userLogin(registerForm.value.email, registerForm.value.password);
      }).catch(() => {
        ok = false;
      });

    return ok;
  }

  userLogout() {
    this.afAuth.signOut().then(() => {
      this.userInfo = {};
      localStorage.clear()
    });
  }

  getCurrentUser() {
    const uid = this.globalVariable.getUId();
    if (uid != null) {
      return this.http.get<IUser>(`${this.apiUrl}/user/${uid}`, {headers: this.header.getHeaderOptions()})
    }
    return null;
  }

  getUser(uid: string): Observable<IUser> {
    if(!uid) return {} as Observable<IUser>;
    if (!this.userInfo[uid]) {
      this.userInfo[uid] = this.http.get<IUser>(`${this.apiUrl}/user/${uid}`, {headers: this.header.getBaseHeaderOptions()})
    }
    return this.userInfo[uid];
  }

  refreshUserToken() {
    return this.http.post(`https://securetoken.googleapis.com/v1/token?key=${environment.firebase.apiKey}`,
      {
        grant_type: 'refresh_token',
        refresh_token: `${localStorage.getItem('refresh_token')}`
      },
      {headers: new HttpHeaders({"Content-Type": "application/json"})}).toPromise()
      .then(res => {
        if (res != undefined) {
          // Value [0] should stand for access token
          localStorage.setItem('access_token', Object.values(res)[0])
        }
      })
  }

  saveUser(user: IUserExtended): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/user/save`, user, {headers: this.header.getHeaderOptions()})
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

  addCourseToUser(courseId: string) {
    return this.http.put<IUser>(`${this.apiUrl}/user/${courseId}`, localStorage.getItem("uid"))
  }

  getLocalStorage(keyValue: string) {
    return localStorage.getItem(keyValue)
  }

}
