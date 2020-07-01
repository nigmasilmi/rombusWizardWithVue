<template>
<div>
  <div class="ddWrapper">
    <ul v-for="(item, key) in categorias" :key="item.id">
      <li @mouseover="highlightMe($event, key)" @mouseleave="turnMeOff($event)">
        {{ item.name }}
      </li>
    </ul>
  </div>
    <div class="ddWrapper subCatClass" v-if="thereAreSubs && holdTheDoor">
      <ul v-for="(sub, index) in subcategorias" :key="index">
        <li  @mouseover="highlightMe($event, key)" @mouseleave="turnMeOffCat($event)">
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
      holdTheDoor: false
    };
  },

  methods: {
    highlightMe: function(event, key) {
      event.target.setAttribute("class", "onIt");
     if(this.categorias[key].subcategories != "null"){
         this.subcategorias = this.categorias[key].subcategories;
         this.thereAreSubs = true;
         this.holdTheDoor = true;
     }else{
         document.querySelectorAll('.onIt').forEach(element => {
             element.setAttribute("class", "leaving");
         });
         event.target.setAttribute("class", "onIt");
         this.holdTheDoor= false;
     }
    },
    turnMeOff: function(event) {
        if(this.holdTheDoor){
            return;
        }else{
            event.target.setAttribute("class", "leaving");
            this.thereAreSubs = false;
        }
   
  },
    turnMeOffCat: function(event) {
            event.target.setAttribute("class", "leaving");
        
   
  }

  },
  
};
</script>
