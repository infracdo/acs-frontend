<template>
  <v-container class="container--fluid grid-list-md">

    <v-row align="center">

      <v-col
        cols="12"
        sm="8"
        offset-sm="2"
        class="text-center"
      >
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-right">
              {{ props.item.calories }}
            </td>
            <td class="text-right">
              {{ props.item.fat }}
            </td>
            <td class="text-right">
              {{ props.item.carbs }}
            </td>
            <td class="text-right">
              {{ props.item.protein }}
            </td>
            <td class="text-right">
              {{ props.item.iron }}
            </td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { locales } from '@/locale';
import { headers, desserts } from '@/api/mock_table';
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'I18n',
  components: {
    AppWidget,
  },
  data: () => ({
    locales,
    headers,
    desserts,
  }),
  computed: {
    ...mapGetters([
      'locale',
    ]),
  },
  methods: {
    async setLocale(locale) {
      await this.$store.dispatch('SetLocale', { locale });
    },
  },
};
</script>
