import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private page_number: number;
  private base_url: string;

  constructor(
    private http_client_instance: HttpClient
  ) {
    this.page_number = -10;
    this.base_url = "https://api.github.com";
  }

  public getUsers(): any {
    this.page_number += 10;
    return this.http_client_instance.get(this.base_url + `/users?since=` + this.page_number + `&per_page=10`);
  }

  public getUserDetail(user: string): any {
    return this.http_client_instance.get(this.base_url + `/users/` + user);
  }

}
