import { Component, OnInit } from '@angular/core';

/*
 * Users Service
 */
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-users-list-with-filtration',
  templateUrl: './users-list-with-filtration.component.html',
  styleUrls: ['./users-list-with-filtration.component.scss']
})
export class UsersListWithFiltrationComponent implements OnInit {

  public users;
  public ordered_users;

  public search_key: string;
  public user_order: string;
  public loader: boolean;

  public new_user_name: string;
  public new_user_name_status: boolean;

  public new_user_profile_pic;

  constructor(
    private user_service_instance: UserService
  ) {

    this.users = this.ordered_users = [];
    this.user_order = "default";

    this.new_user_name_status = this.loader = false;
    this.new_user_profile_pic = this.new_user_name = "";
  }

  ngOnInit() {
    this.user_service_instance.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onScroll() {
    this.loader = true;
    this.user_service_instance.getUsers().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.users.push(data[i]);
      }
      this.loader = false;
    });
  }

  public onChangeSearch(): void {
    this.ordered_users.length = 0;
    if (this.search_key == "") {
      return;
    }
    else {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].login.match(this.search_key)) {
          this.ordered_users.push(this.users[i]);
        }
      }
    }
  }

  public userOrderChange(order: string): void {
    this.user_order = order;

    this.ordered_users = [...this.users];

    switch (this.user_order) {
      case 'default':
        if (!this.search_key) {
          this.ordered_users.length = 0;
        }
        else {
          this.onChangeSearch();
        }
        break;
      case 'ascending':
        if (this.search_key) {
          this.onChangeSearch();
        }
        this.ordered_users = this.ordered_users.sort((a, b) => {
          if (b.login > a.login) { return -1; }
          if (b.login < a.login) { return 1; }
          return 0;
        });
        break;
      case 'descending':
        if (this.search_key) {
          this.onChangeSearch();
        }
        this.ordered_users = this.ordered_users.sort((a, b) => {
          if (b.login < a.login) { return -1; }
          if (b.login > a.login) { return 1; }
          return 0;
        });
        break;
      default:
        break;
    }
    return;
  }

  public addUser(): void {
    this.users.splice(0, 0, {
      "login": this.new_user_name,
      "avatar_url": <File>this.new_user_profile_pic
    });
    this.new_user_profile_pic = this.new_user_name = "";
    this.new_user_name_status = false;
    document.getElementById("close_btn").click()
    return;
  }

  checkUserName(): void {
    if (this.new_user_name.replace(/\s/g, "") == "") {
      this.new_user_name_status = false;
    }
    else {
      this.new_user_name_status = true;
    }
    return;
  }

  userProfilePic(files): void {
    files = files.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.new_user_profile_pic = reader.result;
    }
  }

}
