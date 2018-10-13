package com.cg.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.cg.bean.BookingDetails;
import com.cg.bean.Hotel;
import com.cg.exception.HotelException;
import com.cg.service.BookingService;


/*******************************************************************************************************
 * Class Name :  HotelController
 * Creation Date : 21/09/2018 
 * HotelRoomBookingApplication - Author : Neeraj jain 
 * Description : Acts as Controller for the Complete Application
 ********************************************************************************************************/
//Use of Controller annotation to make this class as controller 
@Controller
public class HotelController {
//to auto wire the booking service
	@Autowired
	private BookingService bookingService;
	
	@RequestMapping("/homePage")
	public String goHome(Model model) {
		System.out.println("Returning to Home page...");
		return "index";
	}
	//Request mapper  for showing of department
	@RequestMapping("/selectHotel")
	public String showHotel(Model model) {
		System.out.println("Selecting Hotel...");
		List<Hotel> hotelList = bookingService.getHotelList();
		hotelList.forEach(System.out::println);
		model.addAttribute("hotelList", hotelList);
		
		return "HotelDetails";
	}
	
	@RequestMapping("/submitHotel")
	public String submithotel(@RequestParam("hotelId") int id,
			@RequestParam("hotelName") String name,
			@RequestParam("hotelRating") String rating,
			@RequestParam("hotelRate") double rate,
			@RequestParam("availableRooms") int rooms, Model model) {
		
		Hotel hotel = new Hotel(id, name, rating, rate, rooms);
		System.out.println("Selected Hotel is: " + hotel);
		
		
		model.addAttribute("hotel", hotel);
		model.addAttribute("bookingDetail", new BookingDetails());
		
		return "HotelBooking";
		
	}
	//Request mapper  for registering of booking
	@RequestMapping("/bookHotel")
	public String register(@Valid @ModelAttribute("bookingDetail") BookingDetails detail,
			BindingResult bindingResult, Model model) {
		
		boolean success = false;
		System.out.println("Booking Hotel...");
		boolean hasError = bindingResult.hasErrors();
		System.out.println("Has Error: " + hasError);
		//Using if-else to check for validation errors
		if(hasError) {
			
			return "HotelBooking";
		}
		else {	
			
			try {
				success = bookingService.addBookingDetails(detail);
			} catch (HotelException e) {
				System.out.println(e.getMessage());
			}
			System.out.println("Registered Student: " + detail);
			if (success) {
				System.out.println("Success...");
				Hotel hotel = bookingService.getHotel(detail.getHotelId());
				System.out.println(hotel);
				model.addAttribute("details", detail);
				model.addAttribute("hotel", hotel);
				return "BookingConfirmation";
			}
		}
		
		return "BookingFailure";
	}
	
	@ExceptionHandler(Exception.class)
	public ModelAndView handleError(Exception e) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("err", e);
		mav.setViewName("error");
		return mav;
	}
}
