package com.acs.backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class devices_ssid {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String serial_num;
    private Integer ssid_alias;
    private String ssid;
    private String bsid;
    private String bsid_status;
    private String lowerlayers;
    private String isHidden;
    private String forward_type;
    private Integer vlan_id;


    public Long get_ssid_id(){
        return id;
    }
    public String get_ssid_serial_num(){
        return serial_num;
    }
    public String get_ssid_ssid(){
        return ssid;
    }
    public String get_ssid_bsid(){
        return bsid;
    }
    public String get_ssid_bsid_status(){
        return bsid_status;
    }
    public  Integer get_ssid_alias(){
        return ssid_alias;
    }
    public String get_ssid_lowerlayers(){
        return lowerlayers;
    }
    public String get_ssid_isHidden(){
        return isHidden;
    }
    public String get_ssid_ForwardType(){
        return forward_type;
    }
    public Integer get_ssid_VlanId(){
        return vlan_id;
    }

    public void set_ssid_ssid(String ssid){
        this.ssid = ssid;
    }
    public void set_ssid_lowerlayers(String lowerlayes){
        this.lowerlayers = lowerlayes;
    }
    public void set_ssid_isHidden(String isHidden){
        this.isHidden = isHidden;
    }
    public void set_ssid_ForwardType(String forward_type){
        this.forward_type = forward_type;
    }
    public void set_ssid_VlanId(Integer vlan_id){
        this.vlan_id = vlan_id;
    }
}
