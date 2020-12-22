package com.acs.backend.Repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.acs.backend.Entity.devices_ssid;

import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface devicesSSIDRepository extends CrudRepository<devices_ssid, Long> {
    @Query("SELECT d FROM devices_ssid d WHERE d.serial_num=?1")
    List<devices_ssid> findBySerialNumEquals(String serial_num);

    @Query("SELECT d FROM devices_ssid d WHERE d.ssid=?1")
    List<devices_ssid> findBySSID(String ssid);
}
