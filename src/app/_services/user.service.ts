import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  userLogin(username: string, password: string): boolean {
    let ok: boolean = true;

    setTimeout(() => {
      this.afAuth.signInWithEmailAndPassword(username, password)
        .then(() => {
          // code to handle successful login
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              user.getIdToken().then(accesToken => {
                localStorage.setItem('access_token', accesToken);
                localStorage.setItem('isLoggedin', "true")

                localStorage.setItem("photoUrl", <string>user?.photoURL);
                localStorage.setItem("userName", <string>user?.displayName);

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
    }, 0)

    return ok;
  }

  userRegister(username: string, password: string): boolean {
    let ok: boolean = true;

    setTimeout(() => {
      this.afAuth.createUserWithEmailAndPassword(username, password)
        .then(() => {
          // code to handle successful register
          this.userLogin(username, password)
        }).catch(() => {
        ok = false;
      });
    }, 0)

    return ok;

  }

}
