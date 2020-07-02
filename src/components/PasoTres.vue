<template>
  <div>
    <div class="aboutForm">
      <div class="step stepTitle">
        <span class="surroundStep">{{ stepsFromParent[2].number }}</span
        >{{ stepsFromParent[2].name }}
      </div>
      <div class="content">
        <p class="interacPpal">Agrega información valiosa</p>
        <p class="subTextInterPpal">
          Puedes adjuntar un archivo o imagen que describa tu proyecto o un
          ejemplo de referencia.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PasoDos",
  data: function() {
    return {};
  },
  props: ["stepsFromParent"],
  methods: {}
};
</script>
<style scoped></style>
