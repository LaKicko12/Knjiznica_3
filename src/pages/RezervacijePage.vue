<template>
  <q-page class="q-pa-md">
    <h1>Rezervacije</h1>
    <q-table
      :rows="rezervacije"
      :columns="columns"
      row-key="rezervacija_id"
    />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'RezervacijePage',
  setup() {
    const rezervacije = ref([]);
    const columns = [
      { name: 'naslov_knjige', label: 'Naslov knjige', field: 'naslov_knjige' },
      { name: 'autor_knjige', label: 'Autor knjige', field: 'autor_knjige' },
      { name: 'korisnik', label: 'Korisnik', field: 'korisnik' },
      { name: 'datum_rezervacije', label: 'Datum rezervacije', field: 'datum_rezervacije' }
    ];

    const fetchRezervacije = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/rezervirane_knjige');
        rezervacije.value = response.data;
      } catch (error) {
        console.error('Greška pri dohvaćanju rezervacija:', error);
      }
    };

    onMounted(() => {
      fetchRezervacije();
    });

    return { rezervacije, columns };
  }
};
</script>

