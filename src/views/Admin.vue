<template>
  <div>
    <form class="loginFormClass">
      <div class="formLevel">
        <h1 class="defTitleText">Admin panel</h1>
        <h2 class="autoCompleteInstructions">
          Por favor ingresa tu email y contraseña del sitio
        </h2>
      </div>
      <div class="formLevel">
        <div v-if="error">{{ error }}</div>
      </div>
      <div class="formLevel">
        <label class="autoCompletePlaceholder" for="userEmailId">Email</label>
        <input type="email" id="userEmailId" v-model="userEmail" />
        <label class="autoCompletePlaceholder" for="userPassId"
          >Contraseña</label
        >
        <input type="password" id="userPassId" v-model="userPass" />
      </div>
    </form>
    <div class="logInSubmitBox">
      <button
        class="loginSubmitBtnClass autoCompletePlaceholder"
        type="submit"
        @click.prevent="logInWithFirebase()"
      >
        Ingresar
      </button>
    </div>
    <div class="goBackText">
      <router-link to="/" class="goBackText">
        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
        <span>volver</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "AdminPanel",
  components: {
    FontAwesomeIcon
  },
  data: function() {
    return {
      userPass: "",
      userEmail: "",
      error: ""
    };
  },
  methods: {
    logInWithFirebase: function() {
      const info = {
        email: this.userEmail,
        password: this.userPass
      };
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("proyectos");
          },
          error => {
            this.error = error.message;
          }
        );
    }
  }
};
</script>
