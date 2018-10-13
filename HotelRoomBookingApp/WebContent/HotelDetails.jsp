<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
	<head>
		<title>Select Hotel</title>
		<style>
			td {
				text-align: center;
			}
			
			table {
				border-collapse: collapse;
			}
		</style>
	</head>
	<body style="background-color: pink">
	
		<c:choose>
			<c:when test="${hotelList.size()>0 }">
				<table border="2" align="center" bgcolor="#EFC8C8">
					<tr>
						<td><b>ID</td>
						<td><b>Name</b></td>
						<td><b>Rating</b></td>
						<td><b>Rate</b></td>
						<td><b>Available Rooms</b></td>
					</tr>
					<c:forEach items="${hotelList}" var="hotel">
						<tr>
							<td>${hotel.id}</td>
							<td><a href="submitHotel.obj?hotelId=${hotel.id}
							&hotelName=${hotel.name}&hotelRating=${hotel.rating}
							&hotelRate=${hotel.rate}&availableRooms=
							${hotel.availableRooms}">${hotel.name}</a></td>
							<td>${hotel.rating}</td>
							<td>${hotel.rate}</td>
							<td>${hotel.availableRooms}</td>
						</tr>
					</c:forEach>
				</table>
				<br>
				<h3 align="center"><b>Click a Hotel name to start Booking</b></h3>
			</c:when>
			<c:otherwise>
				<h3>
					<center>No Data Found</center>
				</h3>
			</c:otherwise>
		</c:choose>
		<br>
		<br>
	</body>
</html>