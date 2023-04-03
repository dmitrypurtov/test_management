import CounterStore from "../components/counter/Counter.store"
import UserStore from "../components/user/User.store"

class AppStore {
    counter = CounterStore;
    user = UserStore;
}

export default AppStore;