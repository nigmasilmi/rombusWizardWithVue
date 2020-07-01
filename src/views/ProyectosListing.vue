<template>
  <div>
    <div class="logoutClass clickeable" @click="adminLogout()">
      Cerrar sesión de administrador
    </div>
    <h3 class="mainList">
      Bienvenido Administrador, a continuación sus opciones de gestión:
    </h3>
    <h4 class="mainList clickable" @click="displayTheList()">
      Ver lista de proyectos ingresados
    </h4>
    <h4 class="mainList clickable">Ver cartera de clientes</h4>
    <div v-if="showTheList" class="projectListWrapper">
      <div v-for="proyecto in proyectosTodos" v-bind:key="proyecto.id">
        <div class="projectWrapper">
          <h2>{{ proyecto.titulo }}</h2>
          <h2>{{ proyecto.area }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "Proyectos",
  data: function() {
    return {
      showTheList: false
    };
  },
  props: ["proyectosTodos"],
  methods: {
    displayTheList: function() {
      this.showTheList = !this.showTheList;
    },
    adminLogout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style></style>
