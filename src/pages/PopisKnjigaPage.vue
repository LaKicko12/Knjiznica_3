<template>
  <q-page padding>
    <!-- Naslov i popratni tekst -->
    <div class="text-center q-mb-md">
      <h1>Popis knjiga</h1>
      <p>Pregled svih dostupnih knjiga u knjižnici.</p>
    </div>

    <!-- Tablica s podacima knjiga -->
    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
      :filter="filter"
    >
    </q-table>
  </q-page>
</template>

<script>
export default {
  setup() {
    // Podaci o knjigama (bez slika)
    const books = [
      {
        id: 1,
        naslov: '1984',
        autor: 'George Orwell',
        opis: 'Distopijski roman koji prikazuje totalitarnu budućnost pod nadzorom Velikog Brata.',
        slika: '',
        stanje: 4
      },
      {
        id: 2,
        naslov: 'Na Drini ćuprija',
        autor: 'Ivo Andrić',
        opis: 'Roman o istoriji i sudbinama ljudi koji žive uz most na Drini, od osmanskog perioda do XX veka.',
        slika: '',
        stanje: 3
      },
      {
        id: 3,
        naslov: 'Harry Potter i Kamen mudraca',
        autor: 'J.K. Rowling',
        opis: 'Prva knjiga iz serijala o mladom čarobnjaku Harryju Potteru koji kreće na svoje čarobnjačko obrazovanje.',
        slika: '',
        stanje: 8
      },
      {
        id: 4,
        naslov: 'Mali princ',
        autor: 'Antoine de Saint-Exupéry',
        opis: 'Priča o mladom princu koji putuje kroz svemir i susreće razne likove koji mu pomažu da shvati životne vrijednosti.',
        slika: '',
        stanje: 5
      },
      {
        id: 5,
        naslov: 'Gospodar prstenova: Prstenova družina',
        autor: 'J.R.R. Tolkien',
        opis: 'Prva knjiga iz trilogije koja prati putovanje Froda Bagginsa i njegovih prijatelja da unište prsten moći.',
        slika: '', 
        stanje: 2
      }
    ];

    // Kolone za tablicu
    const columns = [
      { name: 'id', label: 'ID', align: 'left', field: 'id' },
      { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov' },
      { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
      { name: 'opis', label: 'Opis', align: 'left', field: 'opis' },
      { name: 'slika', label: 'Slika', align: 'center', field: 'slika', format: val => '' }, // Bez prikaza slike
      { name: 'stanje', label: 'Stanje', align: 'center', field: 'stanje' }
    ];

    // Filtriranje (opcionalno)
    const filter = '';

    return {
      books,
      columns,
      filter
    };
  }
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}

.text-center {
  text-align: center;
}

.q-mb-md {
  margin-bottom: 20px;
}

.q-table {
  margin-top: 20px;
}
</style>




