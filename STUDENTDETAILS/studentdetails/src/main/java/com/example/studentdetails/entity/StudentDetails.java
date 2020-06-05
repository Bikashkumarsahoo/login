package com.example.studentdetails.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.example.studentdetails.dto.AddressDTO;

@Entity
@Table(name = "studentsdetails")
public class StudentDetails {

	@Id
	@GeneratedValue
	long id;	
	@Column
	@NotNull
	String name;
	@Column
	String phoneno;
	@Column
	String emailid;
	@Column
	String companyname;
	@Column
	@NotNull
	String password;
	@OneToMany(fetch = FetchType.LAZY,
	        cascade = CascadeType.ALL)
	@JoinColumn(name="studid")
	List<Address> address;

	public StudentDetails()
	{
		super();
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

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
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


	
}
