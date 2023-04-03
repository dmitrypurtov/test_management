import { makeAutoObservable } from "mobx";
import UserApiClient from "../../apis/user/UserApiClient";

class UserStore {
  username: string = "";
  email: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  loadFirst() {
    let userApi: UserApiClient = new UserApiClient();
    userApi
      .getById(1)
      .then((data) => {
        console.log(data);
        this.username = data.username;
        this.email = data.email;
      })
      .catch((err) => {
        console.log("Error:" + err);
      });
  }

  get() {}

  get getContact() {
    return this.username + " " + this.email;
  }
}

const user = new UserStore();

export default user;
