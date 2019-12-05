import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from './roles.interface';

@Injectable()
export class MainService {
  rolesUrl = 'http://127.0.0.1:8000/api/v1/roles';

  constructor(private http: HttpClient) {
  }

  getRoles() {
    return this.http.get<Role>(this.rolesUrl);
  }
}
