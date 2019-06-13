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


  private users;
  private ordered_users;

  private search_key: string;
  private user_order: string;
  private loader: boolean;

  private new_user_name: string;
  private new_user_name_status: boolean;

  constructor(
    private user_service_instance: UserService
  ) {

    this.users = this.ordered_users = [];
    this.user_order = "default";

    this.loader = false;
    this.new_user_name = "";
    this.new_user_name_status = false;
  }

  ngOnInit() {
    this.user_service_instance.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onScroll() {

    console.log("onScroll()");
    this.loader = true;

    this.user_service_instance.getUsers().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.users.push(data[i]);
        // console.log(data[i]); 
      }
      this.loader = false;
      // this.users.push(data[0]);
      // console.log("data: ", this.users)
    });
  }

  private onChangeSearch(): void {
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

  private userOrderChange(order: string): void {
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
        // this.ordered_users = [...this.users];
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

  private addUser(): void {

    if (true) {
      this.users.splice(0, 0, {
        "login": this.new_user_name,
        "avatar_url": ""
      });
      this.new_user_name = "";
      this.new_user_name_status = false;
    }
    else {
      ;
    }

    console.log("addUser");
    // window.basicModal.hide();
  }

  checkUserName(): void {
    if (this.new_user_name.replace(/\s/g, "") == "") {
      this.new_user_name_status = false;
    }
    else {
      this.new_user_name_status = true;
    }
  }

}
