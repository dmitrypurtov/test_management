import { observer } from "mobx-react";
import { Component } from "react";

import store from "./User.store";
import styles from "./User.module.css";

class User extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.bg}>User title</h1>
        <p>UserName: {store.username}</p>
        <p>Email: {store.email}</p>
        <p>Contact: {store.getContact}</p>
        <button onClick={(e) => store.loadFirst()}>Get loadFirst</button>
      </div>
    );
  }
}

export default observer(User);
