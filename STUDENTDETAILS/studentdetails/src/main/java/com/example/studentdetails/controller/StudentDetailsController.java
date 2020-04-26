package com.example.studentdetails.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.example.studentdetails.dto.StudentDetailsDTO;
import com.example.studentdetails.entity.StudentDetails;
import com.example.studentdetails.service.StudentDetailsService;


@CrossOrigin
@RestController
public class StudentDetailsController {
    @Bean
	public WebMvcConfigurer corsConfigurer()
	{
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*");
			}
		};
	}
    
	@Autowired
	StudentDetailsService studentDetailsService;
	

	@GetMapping(value = "/students/studentdetails", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<StudentDetailsDTO> getStudentDetails() {

		List<StudentDetailsDTO> studentsList= studentDetailsService.getStudent();
		return studentsList;
	}
	
	@GetMapping(value = "/students/studentdetailsbyId/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<StudentDetails> getStudentDetailsById(@PathVariable long id) {

		Optional<StudentDetails> students= studentDetailsService.getStudentbyId(id);
		return students;
	}
	
	@PostMapping(value ="/students/createStudentDetails", consumes= MediaType.APPLICATION_JSON_VALUE)
	public String createStudentDetails(@RequestBody StudentDetailsDTO studentDetailsDTO)
	{
		try {
			if(studentDetailsService.createStudent(studentDetailsDTO))
			{
				return "successfully signed up";
			}
		}
		catch (Exception e)
		{
			return "Emailid already registered";
		}
	
		return "not successfull";
	}
	
	@GetMapping(value ="/students/deleteStudentDetails/{id}", consumes= MediaType.APPLICATION_JSON_VALUE)
	public String deleteStudentDetails(@PathVariable long id)
	{
		return studentDetailsService.deleteStudentbyId(id);
	}
	
	@PostMapping(value ="/students/updateStudentDetails/{id}", consumes= MediaType.APPLICATION_JSON_VALUE)
	public void updateStudentDetails(@PathVariable long id,@RequestBody StudentDetailsDTO studentDetailsDTO)
	{
		Optional<StudentDetails> student = studentDetailsService.updateDetails(id,studentDetailsDTO);
	}
		
	@GetMapping(value ="/students/loginStudent/{email}/{password}")
	public Integer login(@PathVariable String email, @PathVariable String password)
	{
		if(studentDetailsService.loginStudent(email, password))
		{
			return 1;
		}
		else 
			return 0;

	}
}
