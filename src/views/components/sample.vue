<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="device"
    :search="search"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Devices</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
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
              New Device
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
                    <v-subheader>Serial Number</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.serial_number"
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
                    <v-subheader>Parent Group</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-select
                        :items="group_list"
                        v-model="editedItem.forward_mode"
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
                    <v-subheader>Device Alias</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.device_name"
                        required
                        outlined
                        dense
                        ></v-text-field>
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
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Device_name',
          align: 'start',
          sortable: false,
          value: 'device_name',
        },
        { text: 'Serial number', value: 'serial_number' },
        { text: 'Mac address', value: 'mac_address' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      group_list: [],
      serial_list: [],
      device: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        status: true,
        activated: '',
        date_created: '',
        date_modified: '',
        group_name: '',
        location: '',
        mac_address: '',
        parent: '',
        serial_number: '',
      },
      defaultItem: {
        status: true,
        activated: '',
        date_created: '',
        date_modified: '',
        group_name: '',
        location: '',
        mac_address: '',
        parent: '',
        serial_number: '',
      },
    }),

    computed: {
      formTitle () {
      http
        .get("/getgroup")
        .then(response => {
          var i, x = new Array();
          for (i in response.data) {
            x[i] = response.data[i].parent+'/'+response.data[i].group_name;
          };
          this.group_list = x;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        return this.editedIndex === -1 ? 'New Device' : 'Edit Device'
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
        .get("/getdevice")
        .then(response => {
          this.device = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      editItem (item) {
        this.editedIndex = this.device.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.device.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.device.splice(this.editedIndex, 1)
        this.closeDelete()
        http
            .delete("/deletedevice/" + this.editedItem.id)
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
          Object.assign(this.device[this.editedIndex], this.editedItem)
            http
              .put("/updatedevice/" + this.editedItem.id, this.editedItem)
              .then(response => {
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
        } else {
          this.device.push(this.editedItem)
            http
                .post("/adddevice", this.editedItem)
                .then(response => {
                console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
        }
        this.close()
      },
    },
  }
</script>