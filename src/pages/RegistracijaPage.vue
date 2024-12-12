<template>
  <q-page padding>
    <!-- Naslov i popratni tekst -->
    <div class="text-center q-mb-md">
      <h1>Registracija</h1>
      <p>Unesite svoje podatke kako biste se registrirali u sustav.</p>
    </div>

    <!-- Formu za registraciju -->
    <q-form @submit="submitForm">
      <q-input
        v-model="formData.ime"
        label="Ime"
        filled
        required
      />
      <q-input
        v-model="formData.prezime"
        label="Prezime"
        filled
        required
      />
      <q-input
        v-model="formData.korisnickoIme"
        label="Korisničko ime"
        filled
        required
      />
      <q-input
        v-model="formData.email"
        label="Email"
        filled
        type="email"
        required
      />
      <q-input
        v-model="formData.lozinka"
        label="Lozinka"
        filled
        type="password"
        required
      />

      <q-btn label="Potvrdi" type="submit" color="primary" class="full-width q-mt-md" />
    </q-form>
  </q-page>
</template>

<script>
export default {
  setup() {
    // Početni podaci za formu
    const formData = {
      ime: '',
      prezime: '',
      korisnickoIme: '',
      email: '',
      lozinka: ''
    };

    // Funkcija za slanje forme
    const submitForm = () => {
      // Ovdje ide kod za spremanje podataka, npr. API poziv
      console.log('Podaci su poslani:', formData);
      // Nakon slanja možeš očistiti formu ili prikazati obavijest
    };

    return {
      formData,
      submitForm
    };
  }
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.q-mb-md {
  margin-bottom: 20px;
}

.q-btn {
  width: 100%;
}
</style>

