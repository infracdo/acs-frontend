package com.acs.backend.Repo;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;
//import org.springframework.data.repository.Repository;
//import org.springframework.data.repository.PagingAndSortingRepository;
//import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.acs.backend.Entity.devices;


@Repository
public interface devicesRepository extends CrudRepository<devices, Long>{
   @Query("SELECT d FROM devices d WHERE d.serial_num=?1")
   List<devices> findBySerialNumEquals(String serial_num);

   @Query("SELECT d.group_path FROM devices d WHERE d.serial_num=?1")
   List<devices> getGroupPathBySerialNumEquals(String serial_num);
}
