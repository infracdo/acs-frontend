package com.acs.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.acs.backend.Entity.devices;
import com.acs.backend.Entity.devices_access_point;
import com.acs.backend.Entity.devices_ssid;
import com.acs.backend.Entity.devices_authentication;


import com.acs.backend.Repo.devicesRepository;
import com.acs.backend.Repo.devicesSSIDRepository;
import com.acs.backend.Repo.devicesAPRepository;
import com.acs.backend.Repo.devicesAuthenticationRepository;

@RestController
@RequestMapping(path = "/devices")
public class DevicesController {
    @Autowired
    private devicesRepository devicesRepo;

    @Autowired
    private devicesAPRepository devicesAPRepo;
    
    @Autowired
    private devicesSSIDRepository devicesSSID_Repo;
    
    @Autowired
    private devicesAuthenticationRepository devicesAuth_repo;

   @GetMapping(value="/Info/all")
    public @ResponseBody Iterable<devices> getAlldevices() {
        return devicesRepo.findAll();
    }
 
    @GetMapping(value = "/SSID/all")
    public @ResponseBody Iterable<devices_ssid> getAllssid(){
        return devicesSSID_Repo.findAll();
    }

    @GetMapping(value = "/AP/all")
    public @ResponseBody Iterable<devices_access_point> getAllap(){
        return devicesAPRepo.findAll();
    }

    @GetMapping(value = "/Authentication/all")
    public @ResponseBody Iterable<devices_authentication> getAllAuthentication(){
        return devicesAuth_repo.findAll();
    }

    @PostMapping(value = "/Authentication/add")
    public @ResponseBody String addAuthentication(@RequestParam String serial_num, @RequestParam Integer ssid_alias, @RequestParam String authentication_mode, @RequestParam String wifidog_portal_ip, @RequestParam String wifidog_portal_url, @RequestParam String wifidog_portal_redirectmode, @RequestParam String wifidog_gatewayId, @RequestParam String wifidog_offdetect_enabled, @RequestParam String sta_perception_enabled)
    {
        devices_authentication auth = new devices_authentication();
        auth.set_authentication_serial_num(serial_num);
        auth.set_authentication_ssid_alias(ssid_alias);
        auth.set_authentication_mode(authentication_mode);
        auth.set_authentication_wifidog_portal_ip(wifidog_portal_ip);
        auth.set_authentication_wifidog_portal_url(wifidog_portal_url);
        auth.set_authentication_wifidog_portal_redirectmode(wifidog_portal_redirectmode);
        auth.set_authentication__wifidog_gatewayId(wifidog_gatewayId);
        auth.set_authentication_wifidog_offdetect_enabled(wifidog_offdetect_enabled);
        auth.set_authentication_sta_perception_enabled(sta_perception_enabled);
        devicesAuth_repo.save(auth);
        return "Added New Authentication";
    }

    @PostMapping(value = "/SSID/add")
    public @ResponseBody String addSSID( @RequestParam String ssid, @RequestParam String lowerlayers, @RequestParam String isHidden, @RequestParam String forward_type, @RequestParam Integer vlan_id)
    {
        devices_ssid newssid = new devices_ssid();
        newssid.set_ssid_ssid(ssid);
        newssid.set_ssid_lowerlayers(lowerlayers);
        newssid.set_ssid_isHidden(isHidden);
        newssid.set_ssid_ForwardType(forward_type);
        newssid.set_ssid_VlanId(vlan_id);
        devicesSSID_Repo.save(newssid);
        return "Added New SSID";

    }
    
    @GetMapping(value = "/AP/{SN}")
    public @ResponseBody String getAPbySN(@RequestParam String SN){
        System.out.println(SN);
        return SN;
        //return devicesAPRepo.findBySerialNumEquals(SN);
    }
    @GetMapping(value = "/Info/SN")
    public @ResponseBody List<devices> SearchBySN() {
        List<devices> test = devicesRepo.findBySerialNumEquals("G1LQAJU086581");
        System.out.println(test);
        return devicesRepo.findBySerialNumEquals("G1LQAJU086581");
    }
    
}
