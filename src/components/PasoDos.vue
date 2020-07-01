<template>
  <div>
    <div class="aboutForm">
      <div class="step stepTitle">
        <span class="surroundStep">{{ stepsFromParent[1].number }}</span
        >{{ stepsFromParent[1].name }}
      </div>
      <div class="content">
        <p class="interacPpal">Selecciona el área profesional adecuada</p>
        <p class="subTextInterPpal">
          Elige el servicio que enfoca tu necesidad principal:
        </p>
        <div class="areasBtns">
          <ul class="areasBtnList">
            <li
              @click="showMarketingDD()"
              :class="{ brightMe: showMarketingBool }"
            >
              <div class="awIcon">
                <font-awesome-icon icon="binoculars"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Estrategia y Marketing
              </div>
            </li>
            <li>
              <div class="awIcon">
                <font-awesome-icon icon="eye"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Diseño y Creatividad
              </div>
            </li>
            <li>
              <div class="awIcon">
                <font-awesome-icon icon="thumbs-up"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Publicidad y Campañas
              </div>
            </li>
            <li>
              <div class="awIcon">
                <font-awesome-icon icon="code"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Programación y Tecnología
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <eym-drop v-if="showMarketingBool"></eym-drop>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EymDrop from "./DropdownMarketing";
export default {
  name: "PasoDos",
  components: {
    FontAwesomeIcon,
    EymDrop
  },
  data: function() {
    return {
      showMarketingBool: false
    };
  },
  props: ["stepsFromParent"],
  methods: {
    showMarketingDD: function() {
      this.showMarketingBool = !this.showMarketingBool;
    }
  }
};
</script>
<style></style>
