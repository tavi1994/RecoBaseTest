package com.qa.repository;

import com.qa.models.Record;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository
        extends JpaRepository<Record, Long> {
}



