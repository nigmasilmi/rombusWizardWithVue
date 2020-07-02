<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view :theUser="user" :proyectos="proyectosTodos" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import db from "./db.js";
export default {
  name: "app",
  components: {
    Navigation
  },
  data: function() {
    return {
      user: null,
      proyectosTodos: [],
      proyectoTestFromFirebase: null
    };
  },
  mounted() {
    db.collection("proyectos")
      .doc("GlM047LzsIA5VfSOW2Ft")
      .get()
      .then(snapshot => {
        this.proyectoTestFromFirebase = snapshot.data().titulo;
      });
    db.collection("proyectos")
      .get()
      .then(querySnapshot => {
        this.proyectosTodos = querySnapshot.docs.map(doc => doc.data());

        // do something with documents
      });
  }
};
</script>

<style>
/* COLORS
white ::: rgb(255 255 255) #ffffff
turquoise-blue::: rgb(0 162 194) #00a2c2
nice-blue::: rgb(14 118 188) #0e76bc
dark-blue-grey:::  rgb(18 58 64) #123a40
tealish::: rgb(36 164 180) #24a4b4
berry::: rgb(159 31 99) #9f1f63
tomato-red::: rgb(208 29 0) #d01d00
butterscotch ::: rgb(252 176 64) #fcb040
squash ::: rgb(243 154 24) #f39a18
brownish-grey ::: rgb(102 102 102) #666666
warm-grey ::: rgb(136 133 133) #888585
purplish-grey ::: rgb(87 85 89) #575559
almost-black ::: rgb(10 17 26) #0a111a

*/

/* VARIABLES */

:root {
  --font-family: "Open Sans", sans-serif;

  --marketing-color: #d01d00;
  --design-color: #fcb040;
  --campaign-color: #0e76bc;
  --coding-color: #9f1f63;
}

/* FONTS RULES */

body {
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  margin-bottom: 20%;
}

#root {
  width: 100%;
}

.interacPpal {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 31px;
  line-height: 8px;
  color: #0a111a;
}

.subTextInterPpal {
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: 300;
  line-height: 4px;
  color: #0a111a;
}
.chosenSpecText {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  color: #fff;
}

.defTitleText {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #0a111a;
}

.servicePriceRangeText {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #0a111a;
}

.stepInnerText {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  color: #fff;
}

.subSpecChosenText {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  color: #fff;
}

.stepTitle {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 36px;
  color: #07a0c0;
  text-transform: uppercase;
}

.autoCompleteInstructions {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 34px;
  color: #0a111a;
}

.autoCompletePlaceholder {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 94px;
  letter-spacing: 1.8px;
  color: #999;
}
.goBackText {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 33px;
  color: #00a2c2;
  text-decoration: none;
}
.goBackText span {
  margin-left: 1%;
}

/* HEADER */

header {
  display: flex;
  align-items: center;
  background-color: #123a40;
}

header img {
  width: 24%;
  margin-left: 7%;
  padding: 1%;
}

nav ul {
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;
}

nav a,
nav a:visited {
  text-decoration: none;
  color: #fff;
}

.navBtns {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  flex-shrink: 0;
  color: #fff;
  list-style: none;
  margin-right: 5%;
  border: 1px solid #123a40;
  padding: 3%;
  border-radius: 10px;
  transition: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

nav ul li:hover {
  background-color: #24a4b4;
  border: 1px solid #24a4b4;
}

.profilePic {
  display: flex;
  width: 13%;
  padding: 1%;
  align-items: center;
}

.backgroundClass {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.mainList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  text-transform: uppercase;
}
.mainList li {
  list-style: none;
  border: 2px solid #0a111a;
  border-radius: 10px;
  margin: 3% auto;
}

.mainList li a,
.mainList li a:visited {
  color: #0a111a;
  text-decoration: none;
}
.clickable {
  cursor: pointer;
  color: #00a2c2;
}
/* LOGIN FORM */
.loginFormClass {
  width: 70%;
  margin: 3% auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formLevel {
  border-bottom: 1px solid #999;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.loginFormClass input[type="email"],
.loginFormClass input[type="password"] {
  width: 70%;
  margin: -3% auto 3% auto;
}

.loginSubmitBtnClass {
  width: 22%;
  height: 3em;
  border: none;
  background-color: #24a4b4;
  cursor: pointer;
  color: #0a111a;
  text-align: center;
}

.logInSubmitBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.indOverBoxForm {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  color: #0a111a;
}

.placeholderBoxForm {
  font-size: 12px;
}

/* WIZARD FORMS */

.aboutForm {
  display: grid;
  grid-template-columns: 20% 70%;
  grid-gap: 13%;
  margin-top: 2%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 7.2%;
}
.step {
  margin-top: 32%;
  margin-left: 32%;
}
.surroundStep {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #07a0c0;
  color: #fff;
  font-size: 14px;
  padding: 4%;
  margin-right: 6%;
}

.aboutForm input[type="text"],
#descripInFormId {
  width: 130%;
}
.aboutForm input[type="text"] {
  height: 3em;
  margin-bottom: 2%;
}
p .subTextInterPpal {
  margin-top: -3%;
}

.errors {
  font-family: var(--font-family);
  font-size: 16px;
  color: var(--coding-color);
}

.errors ul li {
  list-style: none;
}

/* COMMON ASSETS */
.continueBtn {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  background-color: #00a2c2;
  color: #fff;
  width: 14em;
  height: 2em;
  text-align: center;
  padding-top: 0.7em;
  margin-top: 1em;
  align-self: self-end;
  margin-right: 18%;
  cursor: pointer;
}

/* AREA COMPONENTS */

.areasBtns {
  display: flex;
  justify-content: space-evenly;
}
.areasBtnList {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 2%;
  margin-left: -13%;
}
.areasBtnList li {
  list-style: none;
  width: 8em;
  height: 8em;
  background-color: #fff;
  color: #575559;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
}
.brightMeMkt {
  background-color: #d01d00 !important;
  color: #fff !important;
}

.brightMeDesign {
  background-color: #fcb040 !important;
  color: #fff !important;
}

.brightMeCampaign {
  background-color: #0e76bc !important;
  color: #fff !important;
}

.brightMeCode {
  background-color: #9f1f63 !important;
  color: #fff !important;
}

.areaIconText {
  font-size: 12px;
  line-height: 16px;
  margin-top: 1em;
}

.awIcon {
  margin-top: 1.5em;
  font-size: 32px;
}

/* DROPDOWNS */

.ddWrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #575559;
  width: 33%;
  background-color: #fff;
  padding-bottom: 2%;
  margin-left: 32.6%;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
}
.ddWrapper ul {
  margin-left: -3%;
}

.ddWrapper ul li {
  text-decoration: none;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  margin-left: -4%;
  margin-bottom: -6%;
  padding: 0.5% 0 0.5% 0;
}

.onIt {
  background-color: #d01d00;
  color: #fff;
}
.onItDaddy {
  background-color: #d01d00;
  color: #fff;
}

.leaving {
  background-color: #fff;
  color: #575559;
}

.subCatClass {
  position: absolute;
  bottom: -2%;
  left: 32%;
}

/* ADDITIONAL SKILLS */

.skillsAddFormWrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 32%;
  padding-bottom: 12%;
}

.skillsForm input[type="text"] {
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
  border: 0;
  height: 2.5em;
  width: 24em;
}
.skillsForm button[type="submit"] {
  border: solid 1px #d2d2d1;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
  background-color: #666666;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.95px;
  margin-left: 4px;
  height: 3em;
}
.skillsBullets {
  display: flex;
}

.skillsBullets ul {
  display: flex;
  margin-left: -3.2em;
}

.skillsBullets ul li {
  flex-wrap: nowrap;
  padding: 1em;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.876);
  font-size: 10px;
  -webkit-clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
}
.skillsBullets4Mkt {
  flex-wrap: nowrap;
  padding: 1em;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.876);
  font-size: 10px;
  -webkit-clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  background-color: var(--marketing-color);
}

.skillsBullets4Des {
  background-color: var(--design-color);
}

.skillsBullets4Camp {
  background-color: var(--campaign-color);
}

.skillsBullets4Code {
  background-color: var(--coding-color);
}
.deleteSkill {
  color: #666;
  background-color: #fff;
  width: 1em;
  height: 1em;
  display: inline-block;
  z-index: 2;
  position: relative;
  top: -0.5em;
  left: 0.7em;
  border: solid 1px #c4c4c3;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  font-weight: 200;
  line-height: 1em;
  cursor: pointer;
}
</style>
