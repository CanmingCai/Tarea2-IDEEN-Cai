<template>
  <BBSHeaderRegister/>

  <h1 style="color: #384FFE; text-align: center; margin-top: 8%" >Iniciar seccion</h1>

  <v-card class="mx-auto px-6 py-8" max-width="50%" >

    <div style="text-align: center;">
      <div>
        <p><input type="email" placeholder="Correo institucional" v-model="email" required ></p>
        <p><input type="password" placeholder="Contraseña" v-model="password" required ></p>
        <br><br>
        <v-btn
            block
            color="#384FFE"
            size="large"
            type="submit"
            variant="elevated"
            @click = "Signin"
        >
          <div style="color: white">Iniciar sesion</div>
        </v-btn>

      </div>
    </div>

  </v-card>
</template>

<script setup>
import {getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { collection} from "firebase/firestore"
import {ref} from "vue";
import {useRouter} from "vue-router";
import BBSHeaderRegister from "@/components/HeaderRegister.vue";

const email = ref("");
const password = ref("");
const router = useRouter()

const Signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(() => {
        console.log("Usuario iniciado")
        router.push("/home")
      })
      .catch((error) =>{
        console.log(error.code);
        alert(error.message);
      })

  collection("users").add({
    "nombre" : nombre.value,
    "matricula" : matricula.value,
    "emailPersonal" : emailPersonal.value
  })

}





</script>

<style scoped>


input {
  width: 80%;
  height: 32px;
  border-radius: 4px;
  list-style: none;
  outline-color: rgb(153, 153, 255);
  border: 2px solid #384FFE;
  align-items: center;
  margin-top: 2%;
}

</style>