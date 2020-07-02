<template>
  <div>
    <div class="ddWrapper">
      <ul v-for="(item, key) in categorias" :key="item.id">
        <li
          @mouseover="highlightMe($event, key)"
          @mouseleave="turnMeOff($event)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="ddWrapper subCatClass" v-if="thereAreSubs && holdTheDoor">
      <ul v-for="(sub, index) in subcategorias" :key="index">
        <li
          @mouseover="highlightMeCat($event)"
          @mouseleave="turnMeOffCat($event)"
        >
          {{ sub }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CampaignCategorias from "../campaign.json";
export default {
  name: "CampaignUp",
  data: function() {
    return {
      categorias: CampaignCategorias,
      thereAreSubs: false,
      subcategorias: [],
      holdTheDoor: false
    };
  },

  methods: {
    highlightMe: function(event, index) {
      event.target.setAttribute("class", "onIt");
      if (this.categorias[index].subcategories != "null") {
        this.subcategorias = this.categorias[index].subcategories;
        this.thereAreSubs = true;
        this.holdTheDoor = true;
      } else {
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
    },
    turnMeOffCat: function(event) {
      event.target.setAttribute("class", "leaving");
    }
  }
};
</script>
<style scoped>
.skillsBullets ul li,
.onIt {
  background-color: var(--campaign-color);
}
</style>
