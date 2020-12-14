package com.acs.backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class devices_authentication {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String serial_num;
    private Integer ssid_alias;
    private String authentication_mode;
    private String wifidog_portal_ip;
    private String wifidog_portal_url;
    private String wifidog_portal_redirectmode;
    private String wifidog_gatewayId;
    private String wifidog_offdetect_enabled;
    private String sta_perception_enabled;
    
    public Long get_authentication_id(){
        return id;
    }
    public String get_authentication_serial_num(){
        return serial_num;
    }
    public Integer get_authentication_ssid_alias(){
        return ssid_alias;
    }
    public String get_authentication_mode(){
        return authentication_mode;
    }
    public String get_authentication_wifidog_portal_ip(){
        return wifidog_portal_ip;
    }
    public String get_authentication_wifidog_portal_url(){
        return wifidog_portal_url;
    }
    public String get_authentication_wifidog_portal_redirectmode(){
        return wifidog_portal_redirectmode;
    }
    public String get_authentication__wifidog_gatewayId(){
        return wifidog_gatewayId;
    }
    public String get_authentication_wifidog_offdetect_enabled(){
        return wifidog_offdetect_enabled;
    }
    public String get_authentication_sta_perception_enabled(){
        return sta_perception_enabled;
    }
    


    public void set_authentication_serial_num(String serial_num){
        this.serial_num = serial_num;
    }
    public void set_authentication_ssid_alias(Integer ssid_alias){
        this.ssid_alias = ssid_alias;
    }
    public void set_authentication_mode(String authentication_mode){
        this.authentication_mode = authentication_mode;
    }
    public void set_authentication_wifidog_portal_ip(String wifidog_portal_ip){
        this.wifidog_portal_ip = wifidog_portal_ip;
    }
    public void set_authentication_wifidog_portal_url(String wifidog_portal_url){
        this.wifidog_portal_url = wifidog_portal_url;
    }
    public void set_authentication_wifidog_portal_redirectmode(String wifidog_portal_redirectmode){
        this.wifidog_portal_redirectmode = wifidog_portal_redirectmode;
    }
    public void set_authentication__wifidog_gatewayId(String wifidog_gatewayId){
        this.wifidog_gatewayId = wifidog_gatewayId;
    }
    public void set_authentication_wifidog_offdetect_enabled(String wifidog_offdetect_enabled){
        this.wifidog_offdetect_enabled = wifidog_offdetect_enabled;
    }
    public void set_authentication_sta_perception_enabled(String sta_perception_enabled){
        this.sta_perception_enabled = sta_perception_enabled;
    }

}
