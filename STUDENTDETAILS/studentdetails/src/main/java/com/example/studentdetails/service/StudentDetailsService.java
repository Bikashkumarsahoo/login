package com.example.studentdetails.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentdetails.dto.StudentDetailsDTO;
import com.example.studentdetails.entity.StudentDetails;
import com.example.studentdetails.repository.StudentDetailsRepository;

@Service
public class StudentDetailsService {

	@Autowired
	StudentDetailsRepository studentDetailsRepo;
	public void createStudent(StudentDetailsDTO studentDetailsDTO)
	{
		System.out.println(3);
		StudentDetails student= studentDetailsDTO.createEntity();
		System.out.println(student.getAddress());
		studentDetailsRepo.save(student);
	}
	
	public List<StudentDetailsDTO> getStudent()
	{
		List<StudentDetails> students = studentDetailsRepo.findAll(); 
		List<StudentDetailsDTO> studentList= new ArrayList<StudentDetailsDTO>();
		for(StudentDetails studentsEntity: students)
		{
			StudentDetailsDTO studentDTO= new StudentDetailsDTO();
			studentDTO.setAddress(studentsEntity.getAddress());
			studentDTO.setCity(studentsEntity.getCity());
			studentDTO.setCompanyname(studentsEntity.getCompanyname());
			studentDTO.setCountry(studentsEntity.getCountry());
			studentDTO.setEmailid(studentsEntity.getEmailid());
			studentDTO.setState(studentsEntity.getState());
			studentDTO.setName(studentsEntity.getName());
			studentDTO.setId(studentsEntity.getId());
			studentDTO.setPhoneno(studentsEntity.getPhoneno());
			studentList.add(studentDTO);
		}
		return studentList; 
	}
}
