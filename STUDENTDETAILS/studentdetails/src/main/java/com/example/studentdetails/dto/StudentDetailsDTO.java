package com.example.studentdetails.dto;
import java.util.List;


import com.example.studentdetails.entity.Address;
import com.example.studentdetails.entity.StudentDetails;

public class StudentDetailsDTO {

	long id;	
	String name;
	String emailid;
	String phoneno;
	String companyname;
	String password;
	List<Address> address;
	
	public StudentDetailsDTO()
	{
		super();
	}
	
	public StudentDetailsDTO(long id,String companyname,String emailid,String password, List<Address> address,String phoneno)
	{
		this();
		this.id=id;
		this.companyname=name;
		this.address=address;
		this.phoneno=phoneno;
		this.emailid=emailid;
		this.companyname=companyname;	
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	
	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "StudentDetailsDTO [name=" + name + ", address=" + address + ", phoneno=" + phoneno
				+ ", emailid=" + emailid + ", companyname=" + companyname +"]";
	}
	
	public StudentDetails createEntity()
	{
		StudentDetails student= new StudentDetails();
		student.setId(this.id);
		student.setAddress(this.address);
		student.setCompanyname(this.companyname);
		student.setName(this.name);
		student.setEmailid(this.emailid);
		student.setPhoneno(this.phoneno);
		student.setPassword(this.password);
		return student;
	}
}
