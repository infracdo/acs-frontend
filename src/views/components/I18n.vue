<template>
<v-container>
  <v-card>
  <v-data-table
    :headers="headers"
    :items="ssid"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-row no-gutters class="mx-4">
        <v-col
            cols="4"
            md="4"
        >
        <v-autocomplete
        :items="group_list"
        v-model="editedItem.parent"
        hide-selected
        hint="Select Group"
        persistent-hint
        dense
        @input="ssidlist"
        ></v-autocomplete>
        </v-col>
        </v-row>
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
                    <v-subheader>WLAN ID</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-select
                        :items="wlanid"
                        v-model="editedItem.wlan_id"
                        outlined
                        dense
                        ></v-select>
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
                        :items="['Bridge', 'Nat']"
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
                        v-if="editedItem.forward_mode=='Bridge'"
                    >
                    <v-subheader>VLAN ID</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                        v-if="editedItem.forward_mode=='Bridge'"
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
                        :items="['Open', 'WPA-PSK', 'WPA-PSK2']"
                        v-model="editedItem.encryption_mode"
                        outlined
                        dense
                        ></v-select>
                    </v-col>
                    </v-row>
                    <v-row no-gutters v-if="editedItem.encryption_mode!='Open'">
                    <v-col
                        cols="1"
                        md="1"
                    >
                    <v-subheader>Password</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.passphrase"
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
                    <v-subheader>Limit by SSID</v-subheader>
                    </v-col>
                    <v-col
                        cols="4"
                        md="4"
                    >
                        <v-switch
                        v-model="editedItem.limitless"
                        ></v-switch>
                    </v-col>
                    </v-row>
                    <v-row no-gutters v-if="editedItem.limitless">
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
                    <v-row no-gutters v-if="editedItem.auth">
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
                    <v-row no-gutters v-if="editedItem.auth">
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
                    <v-row no-gutters v-if="editedItem.auth">
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
                    <v-row no-gutters v-if="editedItem.auth">
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
  </v-card>
  
  <v-card class="mt-4">
  <v-expansion-panels
    multiple
  >
  <v-expansion-panel>
  <v-expansion-panel-header>Advance Settings(Optional)</v-expansion-panel-header>
  <v-expansion-panel-content>
  <v-data-table
    :headers="cliheaders"
    :items="command_list"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>CLI Commands</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog
          max-width="800px"
          v-model="cdialog"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Command
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Command</span>
            </v-card-title>

            <v-card-text>
                    <v-row no-gutters>
                    <v-col
                        cols="4"
                        md="4"
                    >
                    <v-subheader>Model</v-subheader>
                    </v-col>
                    <v-col
                        cols="8"
                        md="8"
                    >
                        <v-select
                        v-model="citems.model"
                        :items="['AP520(W2)', 'AP520-I(G2)', 'AP630(IDA2)']"
                        small-chips
                        outlined
                        dense
                        ></v-select>
                    </v-col>
                    </v-row>
                    <v-row no-gutters>
                    <v-col
                        cols="4"
                        md="4"
                    >
                    <v-subheader>Description</v-subheader>
                    </v-col>
                    <v-col
                        cols="8"
                        md="8"
                    >
                        <v-text-field
                        v-model="citems.description"
                        required
                        outlined
                        dense
                        ></v-text-field>
                    </v-col>
                    </v-row>
                    <v-row no-gutters>
                    <v-col
                        cols="4"
                        md="4"
                    >
                    <v-subheader>Command</v-subheader>
                    </v-col>
                    </v-row>
                    <v-row no-gutters class="mx-4">
                    <v-col
                        cols="12"
                        md="12"
                    >
                        <v-textarea
                        v-model="citems.command"
                        rows="9"
                        outlined
                        densed
                        ></v-textarea>
                    </v-col>
                    </v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="cclose"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="csave"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="cdialogDelete" max-width="500px">
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
        @click="ceditItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="cdeleteItem(item)"
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
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
  </v-card>
</v-container>
</template>

<script>
import http from "@/http-common";
import config from "@/http-config";

  export default {
    data: () => ({
      cdialog: false,
      dialog: false,
      dialogDelete: false,
      cdialogDelete: false,
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
      cliheaders: [
        { text: 'Model', value: 'model' },
        { text: 'Description', value: 'description' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      group_list: [],
      group_parent: '',
      ssid: [],
      all_ssid: [],
      device: [],
      all_device: [],
      wlanid: [],

      command_list: [],
      editedIndex: -1,
      cIndex: -1,
      editedItem: {
        id: '',
        wlan_id: '',
        ssid: '',
        forward_mode: '',
        encryption_mode: 'Open',
        passphrase: '',
        portal_url: '',
        vlan_id: 1,
        uplink: 0,
        downlink: 0,
        limitless: false,
        auth: false,
        portal_ip: '',
        parent: '',
        gateway_id: '',
        seamless: false,
      },
      defaultItem: {
        wlan_id: '',
        ssid: '',
        forward_mode: 'bridge',
        encryption_mode: 'Open',
        portal_url: '',
        vlan_id: 1,
        uplink: 14400,
        downlink: 14400,
        limitless: false,
        parent: '/apollo',
        auth: false,
        portal_ip: '',
        gateway_id: '',
        seamless: false,
      },
      citems: {
        model: '',
        description: '',
        command: '',
        parent: '',
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
      cdialog (val) {
        val || this.cclose()
      },
      cdialogDelete (val) {
        val || this.ccloseDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        for (var i = 1; i <= 32; i++) {
            this.wlanid.push(i);
        }
      http
        .get("/getdevice")
        .then(response => {
          this.all_device = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      http
        .get("/getssid")
        .then(response => {
          this.all_ssid = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
      http
        .get("/getcommand")
        .then(response => {
          this.command_list = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      wlanid_array () {

        for (var i = 1; i < 32; i++) {
            this.wlanid.push(i);
        }
      },

      editItem (item) {
        this.editedIndex = this.ssid.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      ceditItem (item) {
        this.cIndex = this.command_list.indexOf(item)
        this.citems = Object.assign({}, item)
        this.cdialog = true
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
        config
            .get("/DeleteObject/G1LQCLC017117, Device.WiFi.SSID."+this.editedItem.wlan_id+".")
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });

      },

      cdeleteItem (item) {
        this.cIndex = this.command_list.indexOf(item)
        this.citems = Object.assign({}, item)
        this.cdialogDelete = true
      },

      cdeleteItemConfirm () {
        this.command_list.splice(this.cIndex, 1)
        this.ccloseDelete()
        http
            .delete("/deletecommand/" + this.editedItem.id)
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

      ccloseDelete () {
        this.cdialogDelete = false
        this.$nextTick(() => {
          this.citems = Object.assign({}, this.defaultItem)
          this.cIndex = -1
        })
      },

      ssidlist () {
          var i, x = new Array(), y = new Array();
          for (i in this.all_ssid) {
            if(this.all_ssid[i].parent.includes(this.editedItem.parent)) x[i] = this.all_ssid[i];
          };
          for (i in this.all_device) {
            if(this.all_device[i].parent.includes(this.editedItem.parent)) y[i] = this.all_device[i];
          };
          this.ssid = x;
          this.device = y;
      },
      cclose () {
        this.cdialog = false
        this.$nextTick(() => {
          this.citems = Object.assign({}, this.defaultItem)
          this.cIndex = -1
        })
      },
      csave () {
        if (this.cIndex > -1) {
          Object.assign(this.command_list[this.cIndex], this.citems)
            http
              .put("/updatecommands/" + this.citems.id, this.citems)
              .then(response => {
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
        } else {

          var input_command= this.citems.command.split(/\n/g);
          var i, x = new Array(), body = '{';

          for (i in input_command) {
            if(input_command[i]!='!') body += ', Command: ' + input_command[i];
          };

          body += ',}';
          
          
          console.log("command: " + body);
          //var body = "'{,Device.WiFi.SSID."+"5"+".SSID:"+"notNewSSID"+",Device.WiFi.SSID."+"5"+".LowerLayers:1&2,Device.WiFi.SSID.5.X_WWW-RUIJIE-COM-CN_IsHidden:false,Device.WiFi.SSID."+"5"+".X_WWW-RUIJIE-COM-CN_FowardType:Bridge,Device.WiFi.SSID.5.X_WWW-RUIJIE-COM-CN_VLANID:1,Device.WiFi.AccessPoint.5.Security.ModeEnabled:WPA2-Personal,Device.WiFi.AccessPoint.5.Security.KeyPassphrase:StudyInScarlet123,}'"
          this.command_list.push(this.citems)
          console.log(body);
          for (i in this.device) {
            http
                .post("/addcommand", this.citems)
                .then(response => {
                this.command_list = response.data
                console.log(response.data);
                })
                .catch(e => {
                //console.log(e);
                });
            config
                .post("/Command/"+this.device[i].serial_number, body)
                .then(response => {
                console.log(response.data);
                console.log("bodysent" + body);
                })
                .catch(e => {
                console.log(e);
                });
          }

        }
        this.cclose()
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.ssid[this.editedIndex], this.editedItem)
            http
              .put("/updatessid/" + this.editedItem.id, this.editedItem)
              .then(response => {
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
        } else {
          var v = this.editedItem.wlan_id;
          var entype = '', passkey = this.editedItem.passphrase;
          var vid = this.editedItem.vlan_id;
          if(this.editedItem.encryption_mode=='Open'){
            entype = 'None'
            passkey = 'null'
          }
          else if(this.editedItem.encryption_mode=='WPA-PSK') entype = 'WPA-Personal'
          else entype = 'WPA2-Personal'
          if(this.editedItem.forward_mode=='Nat'){
            vid = 'null'
          }
          var body = "'{,Device.WiFi.SSID."+v+".SSID:"+this.editedItem.ssid+",Device.WiFi.SSID."+v+".LowerLayers:1&2,Device.WiFi.SSID."+v+".X_WWW-RUIJIE-COM-CN_IsHidden:false,Device.WiFi.SSID."+v+".X_WWW-RUIJIE-COM-CN_FowardType:"+this.editedItem.forward_mode+",Device.WiFi.SSID."+v+".X_WWW-RUIJIE-COM-CN_VLANID:"+vid+",Device.WiFi.AccessPoint."+v+".Security.ModeEnabled:"+entype+",Device.WiFi.AccessPoint."+v+".Security.KeyPassphrase:"+passkey+",}'"
          var abody = "'{,WiFiDog,"+this.editedItem.portal_ip+","+this.editedItem.portal_url+",js,"+this.editedItem.gateway_id+",true,true}'"
          this.ssid.push(this.editedItem)
          console.log(body);
          console.log(abody);
          var i;
          for (i in this.device) {
            http
                .post("/addssid", this.editedItem)
                .then(response => {
                //console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
            config
                .post("/AddSSID/"+this.device[i].serial_number+", "+v, body)
                .then(response => {
                console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
            config
                .post("/AddAuth/"+this.device[i].serial_number+", "+v, abody)
                .then(response => {
                //console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
          }

        }
        this.close()
      },
    },
  }
</script>