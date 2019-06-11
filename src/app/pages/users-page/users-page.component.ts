import { Component, OnInit } from '@angular/core';

/*
 * Users Service
 */
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  private users: [];

  constructor(
    private user_service_instance: UserService
  ) {

  }

  ngOnInit() {
    this.user_service_instance.getUsers().subscribe((data) => {
      this.users = data;
      console.log("data: ", data)
    });
  }

}
