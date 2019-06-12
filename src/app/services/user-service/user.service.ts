import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private page_number: number;
  constructor(
    private http_client_instance: HttpClient
  ) {
    this.page_number = -10;
  }

  public getUsers(): any {
    this.page_number += 10;
    return this.http_client_instance.get(`https://api.github.com/users?since=` + this.page_number + `&per_page=10`);
    // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options = new RequestOptions({ headers: headers });
    // var params = { token: localStorage.getItem('jwt'), blog_id: id };
    // return this.http.post(this.api_url + "v2/get_blog_detail_by_id", params, options)
    //   .map((response: Response) => {
    //     return response.json();
    //   });
  }

  public getUserDetail(user: string): any {
    return this.http_client_instance.get(`https://api.github.com/users/` + user);
  }

}