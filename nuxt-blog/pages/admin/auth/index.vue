<template>
  <section class="auth">
    <div class="container">
      <form class="auth-form" @submit.prevent="onSubmit">
        <AppInput v-model="user.email" type="email"> Login: </AppInput>

        <AppInput v-model="user.password" type="password"> Password: </AppInput>

        <div class="controls">
          <AppButton>Login</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // message: null,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // this.message = 'Submited!'

      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>

<style lang="scss">
.auth {
  text-align: center;

  .title {
    color: #fff;
  }

  .auth-form {
    max-width: 580px;
    margin: 0 auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>
