import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Actions, AppStore } from "angular2-redux";
import { UserService } from "../api/UserService";
import { userTypes } from "./userTypes";

@Injectable()
export class userActions extends Actions {

  constructor(private userService:UserService, appStore:AppStore) {
    super(appStore);
  }

  private requestUser() {
    return { type: userTypes.REQUEST };
  }

  fetchUser(login, password) {
    return (dispatch) => {
      dispatch(this.requestUser());
      this.userService.get(login, password)
        .map(result =>  dispatch(this.receiveUser(result)))
        .subscribe();
    };
  }

  receiveUser(user) {
    return {
      type: userTypes.RECEIVE_USER,
      user
    }
  }

}
