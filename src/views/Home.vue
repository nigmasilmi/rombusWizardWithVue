<template>
  <div>
    <ul class="mainList">
      <li class="navBtns">
        <router-link to="/admin">Soy administrador</router-link>
      </li>
      <li class="navBtns">
        <router-link to="/wizard"
          >Busco ayuda profesional para mi proyecto</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "../db.js";
export default {
  name: "home",
  data: function() {
    return {
      proyecto: null
    };
  },
  mounted() {
    db.collection("proyectos")
      .doc("GlM047LzsIA5VfSOW2Ft")
      .get()
      .then(snapshot => {
        this.proyecto = snapshot.data().titulo;
      });
  }
};
</script>
