<template>
  <q-page padding>
    <!-- content  naslov autor opis slika stanje -->
    <div class="q-pa-md" style="max-width: 400px">

<q-form

  class="q-gutter-md"
>
  <q-input filled  v-model="naslov" label="Naslov knjige " hint="Naslov knjige"  />
  <q-input filled  v-model="autor" label="Autor " />
  <q-input filled  v-model="opis" label="Opis " />
  <q-input filled  v-model="slika" label="URL " />
  <q-input filled  v-model="stanje" label="Stanje " />



  <div>
    <q-btn label="Submit" type="submit" color="primary" @click="insertBooks()"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
  </q-page>
</template>

<script>

import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const naslov = ref(null)
    const autor = ref(null)
    const opis = ref(null)
    const slika = ref(null)
    const stanje = ref(null)

    return {
      naslov,
      autor,
      opis,
      slika,
      stanje


    }
  },
  methods: {
    async insertBooks() {
      const formData={
        "naslov":this.naslov,
        "autor":this.autor,
        "opis":this.opis,
        "slika":this.slika,
        "stanje":this.stanje
      }
      await axios.post('http://localhost:3000/api/unos_knjiga/', formData)
        .then(result => {
          console.log(result.data)

        })
        .catch(error => {
          console.error(error)
        })
    },
  }
}

</script>
