<template>
  <div>
    <h3>Login Here bro</h3>
    <input type="text" name="email" />
    <input type="password" name="password" />
    <button @click="signIn"></button>
  </div>
</template>

<style lang="scss">
h3 {
  color: green;
}
</style>


<script>
import { auth } from "~/plugins/firebase.js"
import { PerformanceObserver } from "perf_hooks"
export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signIn: () => {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log("Logged in with user as ", user)
        },
        (err) => {
          console.log("Error as ", err)
        }
      )
    }
  },
  watch: {
    user(user) {
      if (user) {
        console.log("User already exists")
      }
    }
  }
}
</script>

