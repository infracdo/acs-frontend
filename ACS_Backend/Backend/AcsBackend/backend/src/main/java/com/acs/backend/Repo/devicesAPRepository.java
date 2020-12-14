package com.acs.backend.Repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Query;

import com.acs.backend.Entity.devices_access_point;

import java.util.List;


@Repository
public interface devicesAPRepository extends CrudRepository<devices_access_point, Long> {
    @Query("SELECT d FROM devices_access_point d WHERE d.serial_num=?1")
    List<devices_access_point> findBySerialNumEquals(String serial_num);
}
