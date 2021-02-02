<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="device"
    :search="search"
    item-key="serial_number"
    :single-select="singleSelect"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
           <v-app-bar-nav-icon
              v-bind="attrs"
              v-on="on"
          >
        </v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="actions(index)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

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
            <v-alert
              :value="alert"
              transition="fade-transition"
              dense
              outlined
              type="error"
            >"Serial number Already Exist"</v-alert>


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
                        :disabled="editedIndex!=-1"
                        required
                        outlined
                        dense
                        @focus="alert=false"
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
                        v-model="editedItem.parent"
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
        <v-dialog v-model="dialogcli" max-width="600px">
          <v-layout column class="fill-height">
          <v-card min-height="500" max-width="600" max-height="500" dark>
            <v-card-title class="headline">{{cliheader}}</v-card-title>
            <v-card-text >
                        <v-textarea
                        rows="17"
                        v-model="code"
                        readonly
                        densed
                        outlined
                        no-resize
                        ></v-textarea>
            </v-card-text>
          </v-card>
          <v-card>
                    <v-row no-gutters class="mx-4">
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-text-field
                        v-model="getcode"
                        required
                        outlined
                        dense
                        class="mt-2"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="1"
                        md="1"
                    >
                    <v-btn color="blue darken-1" text @click="sendcode(getcode)" class="mt-2">send code</v-btn>
                    </v-col>
                    </v-row>
          </v-card>
          </v-layout>
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
        @click="opencli(item)"
      >
        mdi-console
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
import config from "@/http-config";
  export default {
    data: () => ({
      singleSelect: false,
      alert: false,
      selected: [],
      search: '',
      code: '',
      cliheader: '',
      cliserial: '',
      apname: 'acs#',
      getcode: '',
      dialog: false,
      dialogDelete: false,
      dialogcli: false,
      headers: [
        { text: 'Status', value: 'status' },
        {
          text: 'Device_name',
          align: 'start',
          sortable: false,
          value: 'device_name',
        },
        { text: 'Serial number', value: 'serial_number' },
        { text: 'Parent', value: 'parent' },
        { text: 'Mac address', value: 'mac_address' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      group_list: [],
      serial_list: [],
      device: [],
      items: [
        { title: 'restart' },
        { title: 'move' },
        { title: 'delete' },
      ],
      editedIndex: -1,
      editedItem: {
        id: '',
        status: 'offline',
        device_name: '',
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
        id: '',
        status: 'offline',
        device_name: '',
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
      actions (index) {
        if(index==2){
          var i, x = new Array();
          for (i in this.selected) {
        this.device.splice(this.device.indexOf(this.selected[i]), 1)
        this.closeDelete()
        http
            .delete("/deletedevice/" + this.selected[i].id)
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
            console.log(this.selected[i].id);
          };

        }
        else if(index==0){
          var i, x = new Array();
          for (i in this.selected) {
        config
            .get("/Reboot/"+this.selected[i].serial_number)
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
            console.log(this.selected[i].id);
          };

        }
      },
      opencli (item) {
        this.dialogcli = true;
        this.code = '',
        this.cliserial = item.serial_number;
        if(item.device_name==null) this.cliheader= item.serial_number;
        else this.cliheader= item.device_name;
      },
      sendcode (text) {
      config
        .post("/WebCli/"+this.cliserial+", " + text, "'{,exec,0,0,0,}'")
        .then(response => {
          this.code += response.data.content; // JSON are parsed automatically.
          this.apname=response.data.mode_tip
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
         console.log(this.cliserial);
        this.code += this.apname + text + "\n";
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
              this.close()

        } else {
          var i, x = new Array(), c=true;
          
          for (i in this.device) {
            if(this.device[i].serial_number==this.editedItem.serial_number){
              c=false;
            }
          }
          if(c){
          this.device.push(this.editedItem)
            http
                .post("/adddevice", this.editedItem)
                .then(response => {
                console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
               this.close()
          }else this.alert=true;
        }
      },
    },
  }
</script>