<template>

    <v-app-bar color="#384FFE">
    
          <img src="../assets/logoTec.png" >

          <v-col class="text-right" >
            <v-btn><router-link active-class="active" to="/login" style="color: #ffffff">Login</router-link></v-btn>
            <v-btn><router-link active-class="active" to="/registrar" style="color: #ffffff">Register</router-link></v-btn>
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



</style>