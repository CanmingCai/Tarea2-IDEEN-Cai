<template>
  <BBSHeaderRegister/>

  <h1 style="color: #384FFE; text-align: center; margin-top: 8%" >Registrar una cuenta</h1>

  <v-card class="mx-auto px-6 py-8" max-width="50%" >

      <div style="text-align: center;">
        <form>
          <input type="text" placeholder="Nombre completo" v-model="nombre" required >
          <input type="text" placeholder="Matricula" v-model="matricula" required >
          <input type="email" placeholder="Correo institucional" v-model="email" required >
          <input type="email" placeholder="Correo personal" v-model="emailPersonal" required >
          <input type="password" placeholder="Contraseña" v-model="password" required >
          <input type="password" placeholder="Confirmar contraseña" v-model="passwordConfirmar" required >
          <input type="checkbox" id="checkbox" v-model="term"  required/>
          <br>
          <label for="checkbox">Acepto terminos y condiciones</label>
          <br><br>
          <v-btn
              block
              color="#384FFE"
              size="large"
              type="submit"
              variant="elevated"
              @click="Register"
          >
            <div style="color: white">Iniciar sesion</div>
          </v-btn>

        </form>
      </div>

  </v-card>
  </template>

<script setup>
import {getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import { collection} from "firebase/firestore"
import {ref} from "vue";
import {useRouter} from "vue-router";
import BBSHeaderRegister from "@/components/HeaderRegister.vue";

    const email = ref("");
    const password = ref("");
    const nombre = ref("");
    const matricula = ref("");
    const emailPersonal = ref("");
    const router = useRouter()
    const Register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          .then(() => {
            console.log("Usuario creado");
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