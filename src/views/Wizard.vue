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
          <div class="errors">
            <div v-if="errors.length">
              <b class="errors">Por favor corrije los siguientes errores:</b>
              <ul>
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>
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
        <div class="continueBtn" @click="checkForm">continuar</div>
      </div>
    </div>
    <!-- importar componentes acá -->
    <div v-if="stepTwo">
      <paso-dos
        :stepsFromParent="this.steps"
        @passData="addProperties"
      ></paso-dos>
    </div>
    <div v-if="stepThree">
      <paso-tres :stepsFromParent="this.steps"></paso-tres>
    </div>
  </div>
</template>
<script>
import PasoDos from "@/components/PasoDos.vue";
import PasoTres from "@/components/PasoTres.vue";
export default {
  name: "wizard",
  components: {
    PasoDos,
    PasoTres
  },
  data: function() {
    return {
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      tituloProyectoIn: null,
      descriptProyectoIn: null,
      categoriaIn: null,

      errors: [],
      steps: [
        { number: "1/4", name: "definición" },
        { number: "2/4", name: "especialidad" },
        { number: "3/4", name: "datos adicionales" },
        { number: "4/4", name: "tipo de prestación" }
      ]
    };
  },
  computed: {
    proyectoEnCreacion: function() {
      return {
        area: "",
        categoria: "",
        ciudad: "",
        cliente: "",
        comentarios: "",
        descripcion: this.descriptProyectoIn,
        email_cliente: "",
        habilidades: [],
        imgUrl: "",
        modoAtn: "",
        pais: "",
        presupuesto: 0,
        subcategoria: "",
        telefono_cliente: "",
        titulo: this.tituloProyectoIn
      };
    }
  },
  methods: {
    checkForm: function(event) {
      if (this.tituloProyectoIn && this.descriptProyectoIn) {
        this.stepOne = false;
        this.stepTwo = true;
        return true;
      }
      this.errors = [];

      if (!this.tituloProyectoIn) {
        this.errors.push("Se requiere un título para el proyecto");
      }
      if (!this.descriptProyectoIn) {
        this.errors.push(
          'Tu visión del proyecto es importante, por favor rellena el campo "descripción"'
        );
      }

      event.preventDefault();
    },
    addProperties: function(skillsArr, catego, subcatego, area) {
      this.proyectoEnCreacion.habilidades = skillsArr;
      this.proyectoEnCreacion.categoria = catego;
      this.proyectoEnCreacion.subcategoria = subcatego;
      this.proyectoEnCreacion.area = area;
      this.stepTwo = false;
      this.stepThree = true;
    }
  }
};
</script>
