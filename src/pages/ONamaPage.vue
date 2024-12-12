<template>
  <q-page padding>
    <!-- Q-Card za prikaz naslovne slike i naslova "O nama" -->
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="https://www.rijeka.hr/wp-content/uploads/2023/12/Nova-knji%C5%BEnica-4-901x600.jpg">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">
            O nama
          </div>
        </q-img>
      </q-card-section>
      <!-- Q-Card sekcija za tekstualni sadržaj stranice -->
      <q-card-section class="text-h4 text-justify">
        {{ o_nama }}
      </q-card-section>
    </q-card>

    <!-- Dodatne kartice za informacije o knjižnici ili timu (iz prijašnjeg primjera) -->
    <q-card bordered class="my-card q-mb-md">
      <q-card-section>
        <h2>Naša misija</h2>
        <p>
          Naša knjižnica posvećena je pružanju širokog izbora knjiga i resursa za sve ljubitelje čitanja. Ponosni smo na našu uslugu rezervacija i podršku članovima.
        </p>
      </q-card-section>
    </q-card>

    <q-card bordered class="my-card q-mb-md">
      <q-card-section>
        <h2>Naš tim</h2>
        <p>
          Naš stručni tim uključuje knjižničare i informatičke stručnjake, koji s ljubavlju rade na očuvanju i promociji knjiga.
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      o_nama: 'Gradska knjižnica Rijeka središnja je narodna knjižnica grada Rijeke i matična knjižnica za narodne i školske knjižnice Primorsko-goranske županije. Ona je informacijsko, obrazovno, kulturno, komunikacijsko i socijalno središte Rijeke i okolice usmjereno prema novom stvaralaštvu, održivom razvoju i kvaliteti razvoja zajednice i čitateljske kulture.'
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>

