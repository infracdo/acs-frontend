<template>
  <v-data-table
    :headers="headers"
    :items="ssid"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>SSID</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="1000px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New SSID
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
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
                        v-model="editedItem.ssid"
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
                        <v-select
                        :items="['bridge', 'nat']"
                        v-model="editedItem.forward_mode"
                        outlined
                        dense
                        ></v-select>
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
                        v-model="editedItem.vlan_id"
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
                        v-model="editedItem.encryption_mode"
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
                        v-model="editedItem.limit"
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
                        v-model="editedItem.uplink"
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
                        v-model="editedItem.downlink"
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
                        v-model="editedItem.auth"
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
                        v-model="editedItem.portal_url"
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
                        v-model="editedItem.portal_ip"
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
                        v-model="editedItem.gateway_id"
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
                        v-model="editedItem.seamless"
                        ></v-checkbox>
                    </v-col>
                    </v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import http from "@/http-common";

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'SSID',
          align: 'start',
          sortable: false,
          value: 'ssid',
        },
        { text: 'Encryption Mode', value: 'encryption_mode' },
        { text: 'Portal url', value: 'portal_url' },
        { text: 'Vlan ID', value: 'vlan_id' },
        { text: 'Gateway ID', value: 'gateway_id' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      ssid: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        ssid: '',
        forward_mode: '',
        encrption_mode: '',
        portal_url: '',
        vlan_id: 0,
        uplink: 0,
        downlink: 0,
        limit: false,
        auth: false,
        portal_ip: '',
        gateway_id: '',
        seamless: false,
      },
      defaultItem: {
        ssid: '',
        forward_mode: 'bridge',
        encrption_mode: 'Open',
        portal_url: '',
        vlan_id: 1,
        uplink: 14400,
        downlink: 14400,
        limit: false,
        auth: false,
        portal_ip: '',
        gateway_id: '',
        seamless: false,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New SSID' : 'Edit SSID'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
      http
        .get("/getssid")
        .then(response => {
          this.ssid = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      editItem (item) {
        this.editedIndex = this.ssid.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.ssid.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.ssid.splice(this.editedIndex, 1)
        this.closeDelete()
        http
            .delete("/deletessid/" + this.editedItem.id)
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.ssid[this.editedIndex], this.editedItem)
        } else {
          this.ssid.push(this.editedItem)
        }

        http
            .post("/addssid", this.editedItem)
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
        this.close()
      },
    },
  }
</script>