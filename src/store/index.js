import { createStore } from "vuex";
//firebase imports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action called");
      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Error creating user");
      }
    },

    async login(context, { email, password }) {
      console.log("login action called");
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Error  user");
      }
    },
    async logout(context) {
      console.log("logout action");

      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});
onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChanged");
  store.commit("setUser", user);
  store.commit("setAuthIsReady", true);
  store.state.authIsReady = true;
});
export default store;
