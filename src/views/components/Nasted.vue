<template>
  <v-container class="fill-height">
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="headline">Add SSID</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="SSID"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Vlan ID"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['Bridge', 'NAT']"
                  label="Forward mode"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-switch
                  v-model="closeOnClick"
                  label="Rate limit by ssid"
                ></v-switch>
                <v-select
                  :items="['Open', 'WPA-PSK', 'WPA-PSK2', 'WPA-Enterprise(802.1x']"
                  label="Encryption Mode"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Up-link KB/s"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Down-link KB/s"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-switch
                  v-model="closeOnClick"
                  label="Auth"
                ></v-switch>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Portal Server URL"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Portal IP"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Gateway ID"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-checkbox
                  v-model="checkbox"
                  label="Seamless online"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="say('hallo')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Nasted',
  props: {
    nestedLevel: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
  .tile {
    margin: 5px;
    border-radius: 4px;
  }
  .tile:hover {
    background: green;
  }
  .tile:active {
    background: yellow;
  }
</style>
