package com.example.studentdetails.service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.studentdetails.dto.StudentDetailsDTO;
import com.example.studentdetails.entity.Address;
import com.example.studentdetails.entity.StudentDetails;
import com.example.studentdetails.repository.StudentDetailsRepository;

@Service
public class StudentDetailsService {

	@Autowired
	StudentDetailsRepository studentDetailsRepo;
	public boolean createStudent(StudentDetailsDTO studentDetailsDTO) throws Exception
	{
		try
		{
			StudentDetails student= new StudentDetails();
			student.setId(studentDetailsDTO.getId());
			student.setCompanyname(studentDetailsDTO.getCompanyname());
			student.setPassword(studentDetailsDTO.getPassword());
			student.setName(studentDetailsDTO.getName());
			student.setEmailid(studentDetailsDTO.getEmailid());
			student.setPhoneno(studentDetailsDTO.getPhoneno());
			List<Address> addressList = studentDetailsDTO.getAddress();
			List<Address> adrlist = new LinkedList();
			for(Address address:addressList)
			{
				Address addressAdd = new Address();
				addressAdd.setAddressid(address.getAddressid());
				addressAdd.setAddressline1(address.getAddressline1());
				addressAdd.setAddressline2(address.getAddressline2());
				addressAdd.setCity(address.getCity());
				addressAdd.setState(address.getState());
				addressAdd.setCountry(address.getCountry());
				adrlist.add(addressAdd);
			}
			student.setAddress(adrlist);
			studentDetailsRepo.saveAndFlush(student);
			return true;
		}
		catch(Exception e)
		{
			throw e;
		}


	}
	
	public List<StudentDetailsDTO> getStudent()
	{
		List<StudentDetails> students = studentDetailsRepo.findAll(); //fetch student details list
		List<StudentDetailsDTO> studentList= new ArrayList<StudentDetailsDTO>();// convert student details DTO LIST
		
		for(StudentDetails studentsEntity: students)
		{
			StudentDetailsDTO studentDTO= new StudentDetailsDTO();
			
			studentDTO.setAddress(studentsEntity.getAddress());
			studentDTO.setCompanyname(studentsEntity.getCompanyname());
			studentDTO.setEmailid(studentsEntity.getEmailid());
			studentDTO.setName(studentsEntity.getName());
			studentDTO.setId(studentsEntity.getId());
			studentDTO.setPhoneno(studentsEntity.getPhoneno());
			studentDTO.setPassword(studentsEntity.getPassword());	
			studentList.add(studentDTO);
		}
		return studentList; 
	}
	
	public Optional<StudentDetails> getStudentbyId(long id)
	{
		Optional<StudentDetails> student= studentDetailsRepo.findById(id);
		return student;
	}
	
	public String deleteStudentbyId(long id)
	{
		try {
			studentDetailsRepo.deleteById(id);
			return "delete success with id "+id;
				
		}
		catch(Exception e ) 
		{
			return e.getMessage();
		}
	}
	
	public Optional<StudentDetails> updateDetails(long id, StudentDetailsDTO studentDetailsDTO)
	{
		Optional<StudentDetails> student= studentDetailsRepo.findById(id);
		student.get().setAddress(studentDetailsDTO.getAddress());
		student.get().setCompanyname(studentDetailsDTO.getCompanyname());
		student.get().setEmailid(studentDetailsDTO.getEmailid());
		student.get().setName(studentDetailsDTO.getName());
		student.get().setPhoneno(studentDetailsDTO.getPhoneno());
		student.get().setPassword(studentDetailsDTO.getPassword());	
		//student details save in database
		studentDetailsRepo.save(student.get());
		return student;
	}
	
	public boolean loginStudent(String emailid, String password)
	{
		List<StudentDetails> studentslist = studentDetailsRepo.findAll();
		for(StudentDetails student:studentslist)
		{
			if(student.getEmailid().equals(emailid) && student.getPassword().equals(password))
			{
//				StudentDetailsDTO studentDetails=new StudentDetailsDTO();
//				studentDetails.setAddress(student.getAddress());
//				studentDetails.setCity(student.getCity());
//				studentDetails.setCompanyname(student.getCompanyname());
//				studentDetails.setCountry(student.getCountry());
//				studentDetails.setEmailid(student.getEmailid());
//				studentDetails.setId(student.getId());
//				studentDetails.setPassword(student.getPassword());
//				studentDetails.setPhoneno(student.getPhoneno());
//				studentDetails.setState(student.getState());
//				studentDetails.setName(student.getName());
				return true;
			}
		}
		return false;
	}
}
