package com.example.studentdetails.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentdetails.dto.StudentDetailsDTO;
import com.example.studentdetails.service.StudentDetailsService;

@RestController
@CrossOrigin
public class StudentDetailsController {

	@Autowired
	StudentDetailsService studentDetailsService;
	
	@GetMapping(value = "/students/studentdetails", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<StudentDetailsDTO> getStudentDetails() {

		List<StudentDetailsDTO> studentsList= studentDetailsService.getStudent();
		return studentsList;
	}
	
	@PostMapping(value ="/students/createStudentDetails", consumes= MediaType.APPLICATION_JSON_VALUE)
	public void createStudentDetails(@RequestBody StudentDetailsDTO studentDetailsDTO)
	{
		System.out.println(studentDetailsDTO.getName());
		studentDetailsService.createStudent(studentDetailsDTO);
	}
}
