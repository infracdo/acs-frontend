package com.acs.backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class devices {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long id;
    private String serial_num;
    private String model;
    private String manufacturer;
    private String oui;
    private String hardware_ver;
    private String root_fs_ver;
    private String firmware_ver;
    private String ap_mode;
    private String mac_address;
    private String os_type;
    private String host_name;
    private String max_users;
    private String ip;
    private String last_reboot;
    private String last_boot;
    private String root_data_model;
    private String web_auth;
    private String group_path;

    public Long get_device_Id(){
        return id;
    }
    public String get_device_SN(){
        return serial_num;
    }
    public String get_device_Model(){
        return model;
    }
    public String get_device_Manufacturer(){
        return manufacturer;
    }
    public String get_device_OUI(){
        return oui;
    }
    public String get_device_Hardware_Ver(){
        return hardware_ver;
    }
    public String get_device_RootFS_Ver(){
        return root_fs_ver;
    }
    public String get_device_Firmware_Ver(){
        return firmware_ver;
    }
    public String get_device_AP_Mode(){
        return ap_mode;
    }
    public String get_device_MAC_ADD(){
        return mac_address;
    }
    public String get_device_OS_Type(){
        return os_type;
    }
    public String get_device_Hostname(){
        return host_name;
    }
    public String get_device_Max_Users(){
        return max_users;
    }
    public String get_IP(){
        return ip;
    }
    public String get_device_Last_Reboot(){
        return last_reboot;
    }
    public String get_device_Last_Boot(){
        return last_boot;
    }
    public String get_device_Root_Data_Model(){
        return root_data_model;
    }
    public String get_device_Web_Auth(){
        return web_auth;
    }
    public String get_device_Group_Path(){
        return group_path;
    }

}
