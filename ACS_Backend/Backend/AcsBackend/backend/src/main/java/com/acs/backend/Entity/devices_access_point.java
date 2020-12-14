package com.acs.backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class devices_access_point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String serial_num;
    private Integer access_point_num;
    private String exist_status;
    private String security_mode_enabled;

    public Long get_devAP_id(){
        return id;
    }
    public String get_devAP_serial_num(){
        return serial_num;
    }
    public Integer get_devAP_access_point_num(){
        return access_point_num;
    }
    public String get_devAP_exist_status(){
        return exist_status;
    }
    public String get_devAP_security_mode(){
        return security_mode_enabled;
    }
}
