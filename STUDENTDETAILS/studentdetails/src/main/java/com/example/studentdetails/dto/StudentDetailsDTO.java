package com.example.studentdetails.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.example.studentdetails.entity.StudentDetails;

public class StudentDetailsDTO {

	long id;	
	String name;
	String address;
	String emailid;
	String phoneno;
	String city;
	String state;
	String country;
	String companyname;
	
	public StudentDetailsDTO()
	{
		super();
	}
	
	public StudentDetailsDTO(long id,String name,String address,String phoneno,String city,String state,String country,String companyname,
			String emailid)
	{
		this();
		this.id=id;
		this.companyname=name;
		this.address=address;
		this.phoneno=phoneno;
		this.emailid=emailid;
		this.city=city;
		this.state=state;
		this.country=country;
		this.companyname=companyname;		
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
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

	@Override
	public String toString() {
		return "StudentDetailsDTO [name=" + name + ", address=" + address + ", phoneno=" + phoneno
				+ ", emailid=" + emailid + ", city=" + city + ", state=" + state + ", country=" + country +
				", companyname=" + companyname +"]";
	}
	
	public StudentDetails createEntity()
	{
		System.out.println(2);
		StudentDetails student= new StudentDetails();
		student.setId(this.id);
		student.setAddress(this.address);
		student.setCity(this.city);
		student.setCompanyname(this.companyname);
		student.setName(this.name);
		student.setEmailid(this.emailid);
		student.setPhoneno(this.phoneno);
		student.setCountry(this.country);
		return student;
	}
}
