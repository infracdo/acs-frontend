package com.acs.backend.Repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Query;

import com.acs.backend.Entity.devices_authentication;

import java.util.List;

@Repository
public interface devicesAuthenticationRepository extends CrudRepository<devices_authentication, Long> {
    @Query("SELECT d FROM devices_authentication d WHERE d.serial_num=?1")
    List<devices_authentication> findBySerialNumEquals(String serial_num);
}
