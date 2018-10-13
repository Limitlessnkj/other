package com.cg.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cg.bean.BookingDetails;
import com.cg.bean.Hotel;
import com.cg.exception.HotelException;

@Transactional
@Repository
public class BookingDaoImpl implements BookingDao {

	@PersistenceContext
	private EntityManager eManager;
	
	@Override
	public List<Hotel> getHotelList() {
		
		String qry = "SELECT hotel FROM Hotel hotel";
		TypedQuery<Hotel> query = eManager.createQuery(qry, Hotel.class);
		List<Hotel> deptList = query.getResultList();
		return deptList;
	}

	@Override
	public boolean addBookingDetails(BookingDetails detail) throws HotelException {

		boolean success = false;
		try {
			eManager.persist(detail);
			success = true;
		} catch (Exception e) {
			// log error
			throw new HotelException("Can not update database");
		}
		return success;
	}

	@Override
	public Hotel getHotel(int hotelId) {

		String qStr = "SELECT hotel FROM Hotel hotel WHERE hotel.id = :id";
		TypedQuery<Hotel> query = eManager.createQuery(qStr, Hotel.class);
		query.setParameter("id", hotelId);
		Hotel hotel = query.getSingleResult();
		
		// must exist
		
		//Hotel hotel = eManager.find(Hotel.class, hotelId);
		return hotel;
	}

}
