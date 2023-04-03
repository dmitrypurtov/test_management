import { observer } from "mobx-react";
import { Component } from "react";

import store from "./Counter.store";
import styles from "./Counter.module.css";
import userStore from "../../components/user/User.store";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.bg}>Counter title</h1>

        <h3>User: {userStore.username}</h3>

        <h3>Count: {store.count}</h3>
        <h3>Count x2: {store.getCountx2}</h3>
        <button onClick={(e) => store.decrement()}>-1</button>
        <button onClick={(e) => store.increment()}>+1</button>
      </div>
    );
  }
}

export default observer(Counter);
