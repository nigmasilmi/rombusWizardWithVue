<template>
  <div>
    <div class="aboutForm" v-if="stepOne">
      <div class="step">
        <span class="surroundStep">{{ steps[0].number }}</span>
        <span class="stepTitle">{{ steps[0].name }}</span>
      </div>
      <div class="content">
        <p class="interacPpal">Cuéntanos de qué trata tu proyecto</p>
        <p class="subTextInterPpal">
          ¡Explica brevemente en qué consiste tu necesidad y en 4 pasos tendrás
          un plan a tu medida!
        </p>
        <form class="content">
          <label class="indOverBoxForm" for="tituloInFormId"
            >Ponle un título fácil, que indique tu requerimiento *</label
          >
          <input
            v-model="tituloProyectoIn"
            type="text"
            id="tituloInFormId"
            required
          />
          <label for="descripInFormId" class="indOverBoxForm"
            >Agrega un párrafo que nos ayude a entender lo que necesitas o el
            objetivo que deseas lograr</label
          >
          <textarea
            class="indOverBoxForm placeholderBoxForm"
            v-model="descriptProyectoIn"
            id="descripInFormId"
            cols="30"
            rows="10"
            required
            placeholder="Descripción del proyecto"
            aria-placeholder="Descripción del proyecto"
          ></textarea>
        </form>
        <div class="continueBtn" @click="goToStep2">continuar</div>
      </div>
    </div>
    <!-- importar componentes acá -->
    <div v-if="stepTwo">
      <paso-dos :stepsFromParent="this.steps"></paso-dos>
    </div>
  </div>
</template>
<script>
import PasoDos from "@/components/PasoDos.vue";
export default {
  name: "wizard",
  componenmts: {
    PasoDos
  },
  data: function() {
    return {
      stepOne: true,
      stepTwo: false,
      tituloProyectoIn: "",
      descriptProyectoIn: "",
      steps: [
        { number: "1/4", name: "definición" },
        { number: "2/4", name: "especialidad" },
        { number: "3/4", name: "datos adicionales" },
        { number: "4/4", name: "tipo de prestación" }
      ],
      currentProy: {
        area: "",
        categoria: "",
        ciudad: "",
        cliente: "",
        comentarios: "",
        titulo: this.titulo,
        descripcion: this.tituloProyectoIn
      }
    };
  },
  methods: {
    goToStep2: function() {
      this.stepOne = false;
      this.stepTwo = true;
    }
  },
  components: {
    PasoDos
  }
};
</script>
