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
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>SSID</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-spacer />
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Forward mode</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-spacer />
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>VLAN ID</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Encryption Mode</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-select
                  :items="['Open', 'WPA-PSK', 'WPA-PSK2', 'WPA-Enterprise(802.1x']"
                  outlined
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Limit by SSID</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-switch
                  v-model="closeOnClick"
                ></v-switch>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Uplink</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-spacer />
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Downlink</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Auth</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-switch
                  v-model="closeOnClick"
                ></v-switch>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Portal URL</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Portal IP</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Gateway ID</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-text-field
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                cols="1"
                md="1"
              >
              <v-subheader>Seamless Online</v-subheader>
              </v-col>
              <v-col
                cols="4"
                md="4"
              >
                <v-checkbox
                  v-model="checkbox"
                ></v-checkbox>
              </v-col>
            </v-row>
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
