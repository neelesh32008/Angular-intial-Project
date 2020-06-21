import {
  Injectable
} from "@angular/core";
import {
  BehaviorSubject,
  Observable
} from "rxjs";
import {
  User
} from "../models/user";
import {
  HttpClient
} from "@angular/common/http";
import {
  mergeMap,
  map,
  tap
} from "rxjs/operators";

const TOKEN = "TOKEN";
const USER = "user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  header: {
    Authorization: string
  };

  constructor(private httpClient: HttpClient) {
    this.user.next(this.getUser());
  }

  public logout() {
    this.removeToken();
    this.removeUser();
  }

  public subscribe(token: string, plan: string): Observable<any> {
    return this.httpClient.post(`/api/users/me/subscribe`, {
      token,
      plan
    });
  }

  public setUser(user: User): void {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public removeUser() {
    localStorage.removeItem(USER);
  }

  public getUser(): User {
    try {
      const stringUser = localStorage.getItem(USER);
      return JSON.parse(stringUser) as User;
    } catch {
      return {} as User;
    }
  }

  public setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  public removeToken(): void {
    localStorage.removeItem(TOKEN);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  public isLoggedIn() {
    return localStorage.getItem(TOKEN) != null;
  }

  public updateUser(user) {
    return this.httpClient
      .patch(`/api/users/me`, user)
      .pipe(tap((result: User) => this.setUser(result)));
  }


  public getAllUsers(): Observable<any> {
    return this.httpClient.get(`api/users`);
  }

}