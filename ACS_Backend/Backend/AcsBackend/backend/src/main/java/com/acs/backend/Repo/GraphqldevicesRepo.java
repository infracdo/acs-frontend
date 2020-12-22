package com.acs.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.acs.backend.Entity.devices;

public interface GraphqldevicesRepo extends JpaRepository<devices, Long> {
    
}
