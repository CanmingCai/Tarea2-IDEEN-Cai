<template>

    <v-app-bar color="#384FFE">
    
          <img src="../assets/logoTec.png" >

          <v-col class="text-right" >
            <v-btn><router-link active-class="active" to="/home" style="color: #ffffff">Inicio</router-link></v-btn>
            <v-btn><router-link active-class="active" to="/ask" style="color: #ffffff">Materia</router-link></v-btn>
            <v-btn><router-link active-class="active" to="/" style="color: #ffffff">Salir</router-link></v-btn>
          </v-col>
    </v-app-bar>
  <router-view></router-view>






</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header{
  display: flex;
  height: 50px;
  background-color: #384FFE;
  color: #ffffff;

}
.box{
  display: flex;
  align-items: center;
}
h1{
  display: flex;
  align-items: center;
  font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  padding: 0px 20px;
}
img{
  width: 120px;
  height: 40px;

}

nav {
  display: flex;
  align-items: center;
  margin: 0px 40px;
  font:16px Arial, Helvetica, sans-serif;
}
nav a{
  padding: 0 15px;
  width: 32px;
  text-decoration:none;
  color: #ffffff;
  font-size: 16px;
  font-weight: normal;
  opacity: 0.9;
}

nav a:hover {
  opacity: 1;
}

.active {
  color: #608bd2;
  pointer-events: none;
  opacity: 1;
}

/*搜索框*/

.text{
  height: 22px;
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 3px 16px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.text:focus{
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
.button{
  width: 60px;
  height: 30px;
  font-size: 14px;
  margin-right: 35px;
  border: 1px solid #608bd2;
  background-color: #608bd2;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.contents{
  display: flex;
  justify-content: center;
}
.content{
  display: flex;
  width: 1400px;
  height: 1400px;
  /*background-color: #f0f2f3;*/
}
</style>