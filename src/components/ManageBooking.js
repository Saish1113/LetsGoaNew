import ReactDeleteRow from 'react-delete-row';
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment'

// ...

const Book = () => {

    const [Bookings,SetBookings] = useState([]);
    const [Name,setName] = useState('');

      //get username
  useEffect(() => {

    Axios.get("http://localhost:3001/temp").then((response) => {
      //console.log("inside temp");
      setName(response.data[0].username);
      //console.log("inside temp :" + Name);
    });
  }, []);


    useEffect(()=>{
        Axios.post("http://localhost:3001/get_bookings", {
            username:Name,
          }).then((response) => {
            //console.log("inside response ")
            console.log(response.data);
            SetBookings(response.data);
            console.log("length is  : " + Bookings.length)
          });
      }, [Name]);


async function deleteBookings(Id){
    alert(Id);
    var t=window.confirm(`Are you sure you want to delete ?`)
    console.log(t);
    if(t){
     Axios.post("http://localhost:3001/delete_booking", {
        id:Id,
      }).then((response) => {
        //console.log("inside response ")
        console.log(response);
        //SetBookings(response.data);
      });
    return true}
      else
    return false;
}

 if(Bookings.length==0){
    return(
        <center>
        <p align="center" className='iternary_title'>No bookings Done Yet...!!!!</p>
        </center>
    )
 }
 else{
  return (
    <center>
    <table className="table">
        <thead className='iternary_head'>
            <tr>
                <th scope="col">Booking Date</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Total Price</th>
            </tr>
        </thead>
        <tbody className='iternary_body'>
            { Bookings.map((item, i) => { return (
            <ReactDeleteRow 
            key={i} 
            data={item} 
            onDelete={ item => { return deleteBookings(item.Booking_Id) }}  
            deleteElement={ <i className="fas fa-trash-alt" /> }
            iconClassName='text-danger'
            >
                <td>{moment.utc(item.Booking_Date).format('YYYY-MM-DD')}</td>
                <td>{moment.utc(item.Start_date).format('YYYY-MM-DD')}</td>
                <td>{moment.utc(item.End_Date).format('YYYY-MM-DD')}</td>
                <td>{item.Total_Price}</td>
            </ReactDeleteRow>
            )}) }
        </tbody>
    </table>
    </center>
  );
}
}

export default Book;