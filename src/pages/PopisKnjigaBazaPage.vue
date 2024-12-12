<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        separator="horizontal"
        title="Popis knjiga"
        title-class="text-h4 text-bold text-red-9"
        :rows="books"
        :columns="columns"
        row-key="id"
        table-class="text-black"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px"
        table-header-class="bg-red-2"
        bordered
        flat
        square
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span v-if="col.name != 'slika' && col.name != 'opis'">
                {{ col.value }}
              </span>
              <div v-if="col.name == 'opis'">
                <div class="tbl_opis">
                  {{ props.row.opis }}
                </div>
              </div>
              <q-img
                :src="props.row.slika"
                v-if="col.name == 'slika'"
                size="100px"
                class="shadow-10"
              >
              </q-img>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

const style1 = {
  fontSize: "18px",
};

const style2 = {
  fontSize: "24px",
};

const columns = [
  {
    name: "id",
    label: "id",
    field: "id",
    align: "left",
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: "naslov",
    label: "naslov",
    field: "naslov",
    align: "left",
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: "autor",
    label: "autor",
    field: "autor",
    align: "left",
    style: style1,
    headerStyle: style2,
  },
  {
    name: "opis",
    label: "opis",
    field: "opis",
    align: "left",
    style: style1,
    headerStyle: style2,
  },
  {
    name: "slika",
    label: "slika",
    field: "slika",
    align: "center",
    style: style1,
    headerStyle: style2,
  },
  {
    name: "stanje",
    label: "stanje",
    field: "stanje",
    align: "center",
    style: style1,
    headerStyle: style2,
  },
];

export default {
  setup() {
    const books = ref([]);
    const pagination = ref({
      rowsPerPage: 10,
    });

    const loadBooks = async () => {
      try {
        const result = await axios.get("http://localhost:3000/api/knjige/");

        // Check if result.data is an array directly
        if (Array.isArray(result.data)) {
          console.log("Received books:", result.data);
          books.value = result.data; // Update the books list
          // Check if the first book exists before accessing it
          if (books.value.length > 0) {
            console.log("First book id:", books.value[0].id); // Safely log the first book's id
          } else {
            console.error("No books found.");
          }
        } else {
          console.error(
            "API response is not in the expected format:",
            result.data
          );
        }
      } catch (error) {
        console.error("Error loading books:", error);
      }
    };

    // Load books when component is mounted
    onMounted(() => {
      loadBooks();
    });

    return {
      columns,
      books,
      pagination,
    };
  },
};
</script>
