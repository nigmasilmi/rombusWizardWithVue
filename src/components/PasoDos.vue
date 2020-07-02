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
              :class="{ brightMeMkt: showMarketingBool }"
            >
              <div class="awIcon">
                <font-awesome-icon icon="binoculars"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Estrategia y Marketing
              </div>
            </li>
            <li
              @click="showDesign()"
              :class="{ brightMeDesign: showDesignBool }"
            >
              <div class="awIcon">
                <font-awesome-icon icon="eye"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Diseño y Creatividad
              </div>
            </li>
            <li
              @click="showCampaign()"
              :class="{ brightMeCampaign: showCampaignBool }"
            >
              <div class="awIcon">
                <font-awesome-icon icon="thumbs-up"></font-awesome-icon>
              </div>
              <div class="areaIconText">
                Publicidad y Campañas
              </div>
            </li>
            <li @click="showCode()" :class="{ brightMeCode: showCodeBool }">
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
    <eym-drop
      v-if="showMarketingBool"
      @addCatFromDD="addCatSubCatAndArea"
    ></eym-drop>
    <design-drop v-if="showDesignBool"></design-drop>
    <campaign-up v-if="showCampaignBool"></campaign-up>
    <code-up v-if="showCodeBool"></code-up>
    <div
      class="skillsAddFormWrapper"
      v-if="
        showMarketingBool || showDesignBool || showCampaignBool || showCodeBool
      "
    >
      <form class="skillsForm">
        <label class="autoCompleteInstructions" for="extraSkills"
          >Si lo deseas, puedes agregar hasta 5 habilidades que consideres
          necesarias.</label
        ><br />
        <input
          type="text"
          name=""
          id="extraSkills"
          autocomplete="true"
          v-model="skillInput"
        />
        <button type="submit" @click.prevent="addSkill">Agregar+</button>
      </form>
      <div class="skillsBullets">
        <ul v-for="skill in skillsAdded" :key="skill.id">
          <span @click="notReally(skill.id)" class="deleteSkill">x</span>
          <li :class="skillsColor">{{ skill.name }}</li>
        </ul>
      </div>
      <div
        class="continueBtn"
        @click="$emit('passData', skillsAdded, categoria, subcategoria, area)"
      >
        continuar
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EymDrop from "./DropdownMarketing";
import DesignDrop from "./DropdownDesign";
import CampaignUp from "./DropdownCampaign";
import CodeUp from "./DropdownCode";

export default {
  name: "PasoDos",
  components: {
    FontAwesomeIcon,
    EymDrop,
    DesignDrop,
    CampaignUp,
    CodeUp
  },
  data: function() {
    return {
      showMarketingBool: false,
      showDesignBool: false,
      showCampaignBool: false,
      showCodeBool: false,
      skillInput: "",
      skillsAdded: [],
      indexGenerator: 0,
      categoria: null,
      subcategoria: null,
      area: null
    };
  },
  computed: {
    skillsColor() {
      return {
        skillsBullets4Mkt: this.showMarketingBool,
        skillsBullets4Des: this.showDesignBool,
        skillsBullets4Camp: this.showCampaignBool,
        skillsBullets4Code: this.showCodeBool
      };
    }
  },
  props: ["stepsFromParent"],
  methods: {
    showMarketingDD: function() {
      this.showMarketingBool = !this.showMarketingBool;
      (this.showDesignBool = false),
        (this.showCampaignBool = false),
        (this.showCodeBool = false);
    },
    showDesign: function() {
      this.showDesignBool = !this.showDesignBool;
      (this.showMarketingBool = false),
        (this.showCampaignBool = false),
        (this.showCodeBool = false);
    },
    showCampaign: function() {
      this.showCampaignBool = !this.showCampaignBool;
      (this.showDesignBool = false),
        (this.showMarketingBool = false),
        (this.showCodeBool = false);
    },
    showCode: function() {
      this.showCodeBool = !this.showCodeBool;
      (this.showDesignBool = false),
        (this.showMarketingBool = false),
        (this.showCampaignBool = false);
    },
    addSkill: function() {
      this.skillsAdded.push({ id: this.indexGenerator, name: this.skillInput });
      this.skillInput = "";
      this.indexGenerator++;
    },
    notReally: function(index) {
      this.skillsAdded.splice(index, 1);
    },
    addCatSubCatAndArea: function(selectedCat, selectedSubCat, selectedArea) {
      console.log("se lo trae", selectedCat, selectedSubCat);
      this.categoria = selectedCat;
      this.subcategoria = selectedSubCat;
      this.area = selectedArea;
    }
  }
};
</script>
<style></style>
