import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

/*
 * Users Service
 */
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private user_detail;
  private user: string;

  private edit: boolean;
  private should_save: boolean;

  constructor(
    private user_service_instance: UserService,
    private activated_route_instance: ActivatedRoute
  ) {
    this.edit = false;
    this.should_save = true;
  }

  ngOnInit() {

    this.activated_route_instance.queryParams.subscribe((params) => {
      this.user = params.user;
    });

    this.user_service_instance.getUserDetail(this.user).subscribe((data) => {
      // this.users = data;
      this.user_detail = data;
    });
  }

  shouldSave(): void {
    if (this.user_detail.name.replace(/''/g, "") == "") {
      this.should_save = false;
    }
    else {
      this.should_save = true;
    }
  }

  saveDetails(): void {
    this.edit = false;
  }

}
