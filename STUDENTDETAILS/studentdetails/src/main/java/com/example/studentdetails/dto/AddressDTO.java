package com.example.studentdetails.dto;
public class AddressDTO {
	
	Integer addressid;	
	String addressline1;
	String addressline2;
	String city;
	String state;
	String country;
	
	public AddressDTO()
	{
		super();
	}
	public AddressDTO(Integer addressid,String addressline1,String addressline2,String city,String state,String country)
	{
		this();
		this.addressid=addressid;
		this.addressline1=addressline1;
		this.addressline2=addressline2;
		this.city=city;
		this.state=state;
		this.country=country;
	}
	
	public Integer getAddressid() {
		return addressid;
	}
	public void setAddressid(Integer addressid) {
		this.addressid = addressid;
	}
	public String getAddressline1() {
		return addressline1;
	}
	public void setAddressline1(String addressline1) {
		this.addressline1 = addressline1;
	}
	public String getAddressline2() {
		return addressline2;
	}
	public void setAddressline2(String addressline2) {
		this.addressline2 = addressline2;
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
	
	
}
