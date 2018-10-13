package com.cg.service;

import java.util.List;

import com.cg.bean.BookingDetails;
import com.cg.bean.Hotel;
import com.cg.exception.HotelException;

public interface BookingService {

	List<Hotel> getHotelList();

	boolean addBookingDetails(BookingDetails detail) throws HotelException;

	Hotel getHotel(int hotelId);

}