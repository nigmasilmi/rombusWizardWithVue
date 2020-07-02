<template>
  <div>
    <div
      style="background-color:#fff; margin-left: 32%;"
      v-if="!notSelectedYet"
    >
      <span
        class="autoCompleteInstructions"
        style="font-size:12px; font-weight:bold;"
        >{{ selectedCat }}
        {{ selectedSubCat ? "/" + selectedSubCat + " " : " " }} añadidas
      </span>
    </div>
    <div class="ddWrapper" v-if="notSelectedYet">
      <ul v-for="(item, key) in categorias" :key="item.id">
        <li
          @mouseenter="highlightMe($event, key)"
          @mouseleave="turnMeOff($event)"
          @click="$emit('addCatFromDD', selectedCat, selectedSubCat, area)"
          @mouseup="selectThisOne"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="ddWrapper subCatClass" v-if="thereAreSubs && holdTheDoor">
      <ul v-for="(sub, index) in subcategorias" :key="index">
        <li
          @mouseenter="highlightMeCat($event)"
          @mouseleave="turnMeOffCat($event)"
          @click="$emit('addCatFromDD', selectedCat, selectedSubCat, area)"
          @mouseup="selectThisOne"
        >
          {{ sub }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import MarketingCategorias from "../estrat_mark.json";
export default {
  name: "EymDrop",
  data: function() {
    return {
      categorias: MarketingCategorias,
      thereAreSubs: false,
      subcategorias: [],
      holdTheDoor: false,
      selectedCat: "",
      selectedSubCat: "",
      notSelectedYet: true,
      area: "Estrategia y Marketing"
    };
  },

  methods: {
    highlightMe: function(event, index) {
      event.target.setAttribute("class", "onIt");
      this.selectedSubCat = "";
      if (this.categorias[index].subcategories != "null") {
        this.selectedCat = "";
        this.selectedCat = event.target.innerText;
        this.subcategorias = this.categorias[index].subcategories;
        this.thereAreSubs = true;
        this.holdTheDoor = true;
      } else {
        console.log("entra al else");
        this.selectedCat = event.target.innerText;
        this.selectedSubCat = "";
        document
          .querySelectorAll(".ddWrapper>ul>li")
          .forEach(element => element.setAttribute("class", "leaving"));
        event.target.setAttribute("class", "onIt");
        this.thereAreSubs = false;
        this.holdTheDoor = false;
      }
      // this.holdTheDoor = false;
    },

    turnMeOff: function(event) {
      if (this.holdTheDoor && this.thereAreSubs) {
        return;
      } else {
        event.target.setAttribute("class", "leaving");
      }
    },

    highlightMeCat: function(event) {
      event.target.setAttribute("class", "onIt");
      this.selectedSubCat = event.target.innerText;
    },
    turnMeOffCat: function(event) {
      event.target.setAttribute("class", "leaving");
    },
    selectThisOne: function() {
      this.notSelectedYet = false;
      this.holdTheDoor = false;
      setTimeout(() => (this.notSelectedYet = true), 3000);
    }
  }
};
</script>
<style scoped>
.skillsBullets ul li,
.onIt {
  background-color: var(--marketing-color);
}
</style>
