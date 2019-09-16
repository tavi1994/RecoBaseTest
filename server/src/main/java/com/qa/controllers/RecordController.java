package com.qa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qa.models.Record;
import com.qa.repository.RecordRepository;

@RestController
@CrossOrigin()

public class RecordController {

	@Autowired
	private RecordRepository repository;

	@RequestMapping(value = "record", method = RequestMethod.GET)

	public List<Record> listAllRecords() {
		return repository.findAll();
	}

	@RequestMapping(value = "record", method = RequestMethod.POST)

	public Record addRecords(@RequestBody Record record) {
		return repository.saveAndFlush(record);
	}

	@Transactional
	@RequestMapping(value = "record/{id}", method = RequestMethod.PUT)
	public Record updateRecord(@PathVariable Long id, @RequestBody Record record) {
		Record existing = repository.findOne(id);
		existing.setRecord(record);
		return existing;
	}

	@RequestMapping(value = "record/{id}", method = RequestMethod.GET)
	public Record getRecord(@PathVariable Long id) {
		return repository.findOne(id);
	}

	@RequestMapping(value = "record/{id}", method = RequestMethod.DELETE)
	public Boolean deleteRecord(@PathVariable Long id) {
		Record existing = repository.findOne(id);
		repository.delete(existing);
		return true;
	}
}
