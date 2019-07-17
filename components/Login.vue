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

export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: ""
    }
  }
}
</script>

