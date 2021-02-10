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
        item-value="editedItem.parent[0]"
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
              @click="editedItem.wlan_id=wlanid[0]"
            >
              New SSID
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
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
                        :disabled="formTitle!='New SSID'"
                        v-model="editedItem.wlan_id"
                        :label="editedItem.wlan_id.toString()"
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
                        :rules="ssidRules"
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
                        :rules="[v => (v || '').length >= 8 || 'Password too short']"
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
                        :rules="portalRules"
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
                        :rules="ipRules"
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
          </v-form>

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
                :disabled="!valid || !!!editedItem.ssid"
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
    :items="command"
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
                        :items="['ALL','AP520(W2)', 'AP520-I(G2)', 'AP630(IDA2)']"
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
              <v-btn color="blue darken-1" text @click="ccloseDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="cdeleteItemConfirm">OK</v-btn>
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
      valid: false,
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
        { text: 'wlan ID', value: 'wlan_id' },
        { text: 'Encryption Mode', value: 'encryption_mode' },
        { text: 'Portal url', value: 'portal_url' },
        { text: 'Gateway ID', value: 'gateway_id' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      cliheaders: [
        { text: 'Model', value: 'model' },
        { text: 'Description', value: 'description' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      group_list: [],
      ssidList: [],
      group_parent: '',
      ssid: [],
      all_ssid: [],
      device: [],
      all_device: [],
      device: [],
      all_device: [],
      wlanid: [],
      all_command: [],
      command: [],
      editedIndex: -1,
      cIndex: -1,
      editedItem: {
        id: '',
        wlan_id: '',
        ssid: '',
        forward_mode: 'Bridge',
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
        forward_mode: 'Bridge',
        encryption_mode: 'Open',
        portal_url: '',
        vlan_id: 1,
        uplink: 14400,
        downlink: 14400,
        limitless: false,
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
      ssidRules: [
        v => !!v || 'SSID is required',
      ],
      portalRules: [
        v => !!v || 'url is required',
        v => /.+\..+/.test(v) || 'url must must be valid',
      ],
      ipRules: [
        v => !!v || 'IP is required',
        v => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || 'ip must must be valid',
      ],
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
          console.log(this.all_ssid[0].parent);
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
          this.all_command = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        for (var i = 1; i <= 32; i++) {
            this.wlanid.push(i);
        }
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
        this.cIndex = this.command.indexOf(item)
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
        var i;
        http
            .delete("/deletessid/" + this.editedItem.id)
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
        for (i in this.device) {
          config
              .get("/DeleteObject/"+this.device[i].serial_number+", Device.WiFi.SSID."+this.editedItem.wlan_id+".")
              .then(response => {
              console.log(response.data);
              })
              .catch(e => {
              console.log(e);
              });
        }

      },

      cdeleteItem (item) {
        this.cIndex = this.command.indexOf(item)
        this.citems = Object.assign({}, item)
        this.cdialogDelete = true
      },

      cdeleteItemConfirm () {
        this.command.splice(this.cIndex, 1)
        this.ccloseDelete()
        http
            .delete("/deletecommand/" + this.citems.id)
            .then(response => {
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
      },

      close () {
        this.valid = false;
        this.$refs.form.resetValidation()
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
          var i, x = new Array(), y = new Array(), z = new Array();
          for (i in this.all_ssid) {
            if(this.editedItem.parent.startsWith(this.all_ssid[i].parent)){
              x[i] = this.all_ssid[i];
              this.wlanid.splice(this.wlanid.indexOf(this.all_ssid[i].wlan_id), 1)
              this.ssidList.push(this.all_ssid[i].ssid)
            }
          };
          this.ssidRules.push(v => this.ssidList.indexOf(v) < 0|| 'SSID already exist');
          for (i in this.all_device) {
            if(this.editedItem.parent.includes(this.all_device[i].parent)) y[i] = this.all_device[i];
          };
          for (i in this.all_command) {
            if(this.editedItem.parent.includes(this.all_command[i].parent)) z[i] = this.all_command[i];
          };
          this.ssid = x;
          this.device = y;
          this.command = z;
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
          this.citems.parent = this.editedItem.parent
          Object.assign(this.command[this.cIndex], this.citems)
            http
              .put("/updatecommand/" + this.citems.id, this.citems)
              .then(response => {
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
                console.log("hehe");
              });
        } else {
          this.citems.parent = this.editedItem.parent
          var input_command= this.citems.command.split(/\n/g);
          var i, x = new Array(), body = '{';

          for (i in input_command) {
            if(input_command[i]!='!') body += ', Command: ' + input_command[i];
          };

          body += ',}';
          
          
          console.log("command: " + body);
          //var body = "'{,Device.WiFi.SSID."+"5"+".SSID:"+"notNewSSID"+",Device.WiFi.SSID."+"5"+".LowerLayers:1&2,Device.WiFi.SSID.5.X_WWW-RUIJIE-COM-CN_IsHidden:false,Device.WiFi.SSID."+"5"+".X_WWW-RUIJIE-COM-CN_FowardType:Bridge,Device.WiFi.SSID.5.X_WWW-RUIJIE-COM-CN_VLANID:1,Device.WiFi.AccessPoint.5.Security.ModeEnabled:WPA2-Personal,Device.WiFi.AccessPoint.5.Security.KeyPassphrase:StudyInScarlet123,}'"
          this.command.push(this.citems)
            http
                .post("/addcommand", this.citems)
                .then(response => {
                this.command = response.data
                console.log(response.data);
                })
                .catch(e => {
                //console.log(e);
                });
          for (i in this.device) {
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
          this.all_ssid.push(this.editedItem)
          console.log(body);
          console.log(abody);
          var i;
            http
                .post("/addssid", this.editedItem)
                .then(response => {
                //console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
          for (i in this.device) {
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