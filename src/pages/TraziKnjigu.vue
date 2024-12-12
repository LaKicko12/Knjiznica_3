<template>
  <q-page padding>
    <!-- Naslov i popratni tekst -->
    <div class="text-center q-mb-md">
      <h1>Traži knjigu</h1>
      <p>Pretražite knjige prema autoru ili naslovu.</p>
    </div>

    <!-- Input za pretraživanje -->
    <q-input
      v-model="searchQuery"
      label="Unesite naziv ili autora"
      debounce="300"
      clearable
      @input="filterBooks"
    />

    <!-- Checkbox za pretraživanje po autoru ili naslovu -->
    <div class="q-mb-md">
      <q-checkbox
        v-model="searchByTitle"
        label="Pretražuj po naslovu"
        color="primary"
        :true-value="true"
        :false-value="false"
      />
      <q-checkbox
        v-model="searchByAuthor"
        label="Pretražuj po autoru"
        color="primary"
        :true-value="true"
        :false-value="false"
      />
    </div>

    <!-- Tablica s rezultatima pretraživanja -->
    <q-table
      :rows="filteredBooks"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Podaci o knjigama
      books: [
        { id: 1, naslov: '1984', autor: 'George Orwell', opis: 'Distopijski roman o totalitarnoj budućnosti.', stanje: 4 },
        { id: 2, naslov: 'Na Drini ćuprija', autor: 'Ivo Andrić', opis: 'Roman o mostu na Drini.', stanje: 3 },
        { id: 3, naslov: 'Harry Potter', autor: 'J.K. Rowling', opis: 'Čarobnjački svijet Harryja Pottera.', stanje: 8 },
        { id: 4, naslov: 'Mali princ', autor: 'Antoine de Saint-Exupéry', opis: 'Priča o Malom princu.', stanje: 5 },
        { id: 5, naslov: 'Gospodar prstenova', autor: 'J.R.R. Tolkien', opis: 'Povijest o Prstenu moći.', stanje: 2 }
      ],
      // Postavke za pretraživanje
      searchQuery: '',
      searchByTitle: true,
      searchByAuthor: false,
      filteredBooks: [],
      columns: [
        { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov' },
        { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
        { name: 'opis', label: 'Opis', align: 'left', field: 'opis' },
        { name: 'stanje', label: 'Stanje', align: 'center', field: 'stanje' }
      ]
    };
  },
  methods: {
    filterBooks() {
      // Ako nema unosa, prikazuje sve knjige
      if (!this.searchQuery) {
        this.filteredBooks = this.books;
        return;
      }

      // Filtriranje prema odabranom načinu
      this.filteredBooks = this.books.filter(book => {
        const searchTerm = this.searchQuery.toLowerCase();
        if (this.searchByTitle && this.searchByAuthor) {
          return book.naslov.toLowerCase().includes(searchTerm) || book.autor.toLowerCase().includes(searchTerm);
        }
        if (this.searchByTitle) {
          return book.naslov.toLowerCase().includes(searchTerm);
        }
        if (this.searchByAuthor) {
          return book.autor.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    }
  },
  mounted() {
    // Početno filtriranje pri učitavanju stranice
    this.filteredBooks = this.books;
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
