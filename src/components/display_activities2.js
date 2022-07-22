import React,{useEffect,useState} from "react";
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import moment from 'moment'
import Moment from 'react-moment'
import 'moment-timezone'
import Recordw from './display_record'
import './display.css'
import {PaymentElement} from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./Checkout";
import StripeCheckout from 'react-stripe-checkout'
import { toast } from "react-toastify";
import Success from './SuccessMessage';
import { useHistory } from "react-router-dom";
 
 const current = new Date();
 const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


const stripePromise = loadStripe('pk_test_51LLtUVSIEGave4jgJ8Bjr8DuujKlGxodtrMpYZxLRyC7qJtEpdl8ctp3Vfm5AVAXyDxqVsV6dcV4ckUyuaaRcuQH00DGyFrKx8');


var start_time=0;
var Arrival_Time=0;
var b=0;
var datenew=0,day=0;
//var j=0;
var location="";
var travel_time=0;
var counter=0;
var lastCurrtime='';
var lastActivityTime='';
var end_date="";
var tk="";


window.counter = 1;

function Activity_view(){

 
  const [Name, setName]=useState('');
  const [Hotel,setHotel]=useState([]);
  const [Temp,settemp]=useState([]);
  const [Act,Setactivities]=useState('');
  const [Activity_total,Setactivity_total]=useState('');
  const [Mode,SetMode]=useState('');
  const [ModeDetails,setModeDetails]=useState('');
  const [Details,getModeDetails]=useState('');
  const [checkin_time,getcheckin_time]=useState('');
  const [time,set_time]=useState('');
  const [timingsn,settimings]=useState([]);
  const [j,setStarttime]=useState();
  const [total,SetTotal]=useState();

  const [records, setRecords] = useState([]);
  //const [counter, setCounter] = useState(0);

  const history=useHistory();


  const current = new Date();
  //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const curr_date=`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`

  //get username
  useEffect(() => {

    Axios.get("http://localhost:3001/temp").then((response) => {
      //console.log("inside temp");
      setName(response.data[0].username);
      //console.log("inside temp :" + Name);
    });
  }, []);

//get list of user selected activities
  useEffect(() => {
    if (Name === '') return;
    //console.log("Inside functions");
    Axios.post("http://localhost:3001/get_activities", {
      username:Name,
    }).then((response) => {
      //console.log("inside response ")
      //console.log(response);
      var Activities=response.data;
      Setactivities(Activities[0].activities);
      console.log("Activities aa : " , Activities[0].activities);
    });
}, [Name]);

//get hotel details of the user
useEffect(() => {
  if (Name === '') return;
  //console.log("Inside Hotel");
  Axios.post("http://localhost:3001/get_accomodation_details", {
    username:Name,
  }).then((response) => {
    //console.log("inside hotel details")
    console.log("Hotellll :" , response.data[0]);
    setHotel(response.data[0]);

  });
}, [Name]);

/*
useEffect(() => {
  if (Name === '') return;
  console.log("Inside transport");
  Axios.post("http://localhost:3001:3001/get_transport_details", {
    username:Name,
  }).then((response) => {
    console.log("inside transport details")
    console.log(response);
    //setHotel(response.data[0]);
    //var Activities=response.data;
    //Setactivities(Activities[0].activities);
    //console.log(Activities[0].activities);
    //seperate_activities(Activities[0].activities);
  });
}, [Name]);
*/

//get details of each activity
useEffect(() => {
    if (Act === '') return;
    //console.log(Act);
    var newString = Act.split(",");
    //console.log("newString is : " +newString);
    
    //Capture promises of all requests to read the data
    var promises = [];
    var i;
    
    for(i=0;i<newString.length;i++){
      console.log("iteration" + i);
      console.log(newString[i]);
      const myobject={
        activity:newString[i],
      }
      
      promises.push(Axios.post("http://localhost:3001/get_activities_details",myobject)
      .then((res) => res.data[0]));
    }

    Promise.all(promises)
    .then((data) => {
        settemp(data)
        console.log("Got data", data)
    })
    .catch((e)=>console.error(e));
}, [Act]);


//get the mode of travel and travel details
useEffect(() => {
  if (Name === '') return;
  //console.log("Inside Travel Mode name is : "+Name);
  Axios.post("http://localhost:3001/get_travel_mode", {
    username:Name,
  }).then((response) => {
    //console.log("inside travel details")
    console.log("mode is " , response.data[0].Mode);
    SetMode(response.data[0].Mode);
    console.log("OOOOO " , Mode);
    if(response.data[0].Mode==="Flight"){
      Axios.post("http://localhost:3001/get_flight", {
        username:Name,
      }).then((response) => {
        console.log("QQQQQ   : " , response.data[0]);

        setModeDetails(response.data[0]);
        var airline=response.data[0].Airlines;
        var FlightClass=response.data[0].FlightClass;
        var State=response.data[0].State;
        var date=response.data[0].Date;
        Axios.post("http://localhost:3001/get_flight_details", {
        airline:airline,
        class:FlightClass,
        state:State,
        date:date,
      }).then((response) => {
        //console.log(response.data[0]);
        getModeDetails(response.data[0]);

      }); 
    }); 
    }
    else if(response.data[0].Mode==="Bus"){
      Axios.post("http://localhost:3001/get_bus", {
        username:Name,
      }).then((response) => {
        console.log("BBBBBB : " ,response);
        setModeDetails(response.data[0]);
        var date=response.data[0].Date1;
        //var temp=moment.utc('2019-11-03T05:00:00.000Z').format('MM/DD/YYYY');
        
        var State=response.data[0].State;
        Axios.post("http://localhost:3001/get_bus_details", {
        date:date,
        state:State,
      }).then((response) => {
        //console.log(response.data[0]);
        getModeDetails(response.data[0]);

        }); 
      }); 
    }
    else if(response.data[0].Mode==="Train"){
      Axios.post("http://localhost:3001/get_train", {
        username:Name,
      }).then((response) => {
        //console.log(response.data[0]);
        setModeDetails(response.data[0]);
        var date=response.data[0].Date;
        var State=response.data[0].State;
        var tclass=response.data[0].Class;
        var dest=response.data[0].Destination;
        Axios.post("http://localhost:3001/get_train_details", {
        date:date,
        state:State,
        tclass:tclass,
        dest:dest,
      }).then((response) => {
        console.log("TTTTTTT   :" , response);
        getModeDetails(response.data[0]);
        }); 
      }); 
    }
 
  });
}, [Name]);
 // console.log("outside");

 useEffect(()=>{
  /*var i=0;
  var city=Hotel.Hotel_City;
  var timings=[];
  
    const ActivityNames = Temp.map(activity => activity.Activity_Name);
  const places = Temp.map(activity => activity.Activity_City);
    console.log("Activities are : " , ActivityNames);
    console.log("Places are : " ,places);
  for(i=0;i<=Temp.length;i++){
    var act=ActivityNames[i];
    Axios.post("http://localhost:3001:3001/get_travel_time", {
      act:act,
      place:city,
    }).then((response) => {
      console.log("new try output is " , response);
      var jes=response.data[0];
      for (var key in jes) {
        if (jes.hasOwnProperty(key)) {
          //console.log(key); // 'a'
          console.log(jes[key]);
          const p=jes[key];
          console.log("p is  : " + p);
          timings.push(p);
        }
      }
    });
    city=places[i];
  }
  console.log("Timings array is  : " , timings);
  settimings(timings);
  console.log("Timings state : " , timingsn);*/
 },[Temp,Hotel])

 //useEffect(()=>{
  //var dst=ModeDetails.Destination;
  //console.log("new temp " , Temp);
  // Axios.post("http://localhost:3001:3001/get_destination", {
  //       dst:dst,
  //       hotel:hotel,
  //     }).then((response) => {
  //       console.log("response of get destination is" , response);
  //       console.log("Time is : " ,response.data[0]);
  //       var temp=response.data[0];
  //       console.log("temp is  : ", temp);
  //       //getModeDetails(response.data[0]);
  //       for (var key in temp) {
  //         if (temp.hasOwnProperty(key)) {
  //           console.log(key); // 'a'
  //           console.log(temp[key]); // 'hello'
  //           getduration(temp[key])
  //         }
  //       }   
  //       console.log("Duration is "+duration);
  //       }); 


 //},[ModeDetails,Temp])


 useEffect(()=>{
  if (ModeDetails === '') return;
  if (Hotel === '') return;
  var dst=ModeDetails.Destination;
  const hotel=Hotel.Hotel_Name;
  Axios.post("http://localhost:3001/get_destination", {
        dst:dst,
        hotel:hotel,
      }).then((response) => {
        console.log("response of get destination is" , response);
        console.log("Time is : " ,response.data[0]);
        var temp=response.data[0];
        //console.log("temp is  : ", temp);
        //getModeDetails(response.data[0]);
        for (var key in temp) {
          if (temp.hasOwnProperty(key)) {
            //console.log(key); // 'a'
            //console.log(temp[key]); // 'hello'
            getcheckin_time(temp[key])
            //time=temp[key];
          }
        }   
        console.log("checkin_time is "+checkin_time);
        }); 


 },[ModeDetails,Hotel])


 
 useEffect(() => {
  console.log("Temp timing:", Temp);

  var city=Hotel.Hotel_City;
  
  let promises = Temp.map(e => {
    const act = e.Activity_Name;
    const cty = city;

    city = e.Activity_City; //Update next city in activity chain
    return Axios.post("http://localhost:3001/get_travel_time", {
      act:act,
      place:cty
    });
  });

  Promise.all(promises)
  .then(responses => responses.map(response => Object.entries(response.data[0]).flat()[1]))
  .then(timings => {
    let curr_time = moment(j,'YYYY-MM-DD H:mm:ss');
    return timings.map((t, i, a) => {
      const tDiff = moment.duration(t, "HH:mm:ss");
      const act_time = i >=1 ? Temp[i-1].Activity_Time : 0;
      curr_time = curr_time.add(tDiff).add(act_time, 'hours');
      ///check curr_time > 18:00, curr_time = curr_time.add(12 'hours')
      const hours=moment(curr_time,"HH:mm").format('HH');
       console.log("Hours : " + hours);
      if(hours>=18){
           console.log("Inside if")
           //var mtime=moment(curr_time,'HH:mm').subtract(tDiff).subtract(act_time,'hours');
           var ntime=moment(curr_time,"HH:mm").add(12,'hours');
           console.log("ntime : "+ntime);
           curr_time=ntime;
           //curr_time=moment(ntime).format('YYYY-MM-DD H:mm:ss A');
          console.log("curr time after change : " + curr_time.format('YYYY-MM-DD H:mm:ss A'));
          }
      console.log("AAAA", act_time, curr_time.format('YYYY-MM-DD H:mm:ss A'));
      lastCurrtime=curr_time;
      return curr_time.format('YYYY-MM-DD H:mm:ss A');
    });
  })
  .then(datetimes => datetimes.map((elem, i, a) => {
    let curr_time = moment(elem, 'YYYY-MM-DD H:mm:ss A');
    return {
      ActDate: curr_time.format('YYYY-MM-DD H:mm:ss A'),
      TravelTime: curr_time.format('H:mm A'),
      ActDay: get_day(curr_time.day())
    }}
  ))
  .then(acts_timing => {
    setRecords(Temp.map((e,i,a) => {
      lastActivityTime=e.Activity_Time;
      return {
        Activity_Name: e.Activity_Name,
        Activity_City: e.Activity_City,
        day: acts_timing[i].ActDay,
        date: acts_timing[i].ActDate,
        travel_time: acts_timing[i].TravelTime
      };
    }))
  });


    /*var act=ActivityNames[i];
    Axios.post("http://localhost:3001:3001/get_travel_time", {
      act:act,
      place:city,
    }).then((response) => {
      console.log("new try output is " , response);
      var jes=response.data[0];
      for (var key in jes) {
        if (jes.hasOwnProperty(key)) {
          //console.log(key); // 'a'
          console.log(jes[key]);
          const p=jes[key];
          console.log("p is  : " + p);
          timings.push(p);
        }
      }
    });
    city=places[i];
  }
  console.log("Timings array is  : " , timings);
  settimings(timings);
  console.log("Timings state : " , timingsn);
*/
    

    var total=0;
    var i;
    for(i=0;i<Temp.length;i++){
      total=total+Temp[i].Price;
      //console.log("total is : "+total);
    }
    //console.log(total);
    Setactivity_total(total);

}, [Temp,j]);

useEffect(()=>{
  var arrival_date=Details.Arrival_Date;
  var Arrival_Time=Details.Arrival_Time;
 
  //console.log("Arrivaln Time new : " + Arrival_Time);

  var temp_hours=moment(Arrival_Time,"HH:mm").format('hh');

  //console.log("Arrivaln temp_hours : ", temp_hours);

  var temp=moment.utc(arrival_date).format('YYYY-MM-DD');

  const datenew=moment(temp).add(temp_hours,'hours').format('YYYY-MM-DD H:mm:ss A');

  //console.log("Arrivaln datenew : " + datenew);

  setStarttime(moment(datenew).add(checkin_time,'HH:mm:ss').format('YYYY-MM-DD H:mm:ss A'));

},[Details,checkin_time]);

useEffect(()=>{
  let grand_total=0;
  const a_total=Activity_total;
  const t_traveller=ModeDetails.Traveller;
  const t_price=Details.Price;
  const t_total=(t_traveller*t_price);
  const h_days=Hotel.Days;
  const h_price=Hotel.Hotel_Price;
  const h_total=(h_days*h_price);
  grand_total=a_total+t_total+h_total
  console.log("JJJJJ  " + grand_total +" " +  a_total + " " + t_total + " " + h_total );
  SetTotal(grand_total);


},[Activity_total,ModeDetails,Details,Hotel]);

// useEffect(() => {
//   Axios.post("http://localhost:3001:3001/get_travel_time", {
//     act:activity,
//     place:pl,
//   }).then((response) => {
//     //console.log("response of get travel time is" , response.data[0]);
//     // console.log("Time is : " ,response.data[0]);
//      const x=response.data[0];
//      console.log("temp is  : ", x);
//      //alert("welcome");
//     for (var key in x) {
//     if (x.hasOwnProperty(key)) {
//          console.log("hello" + x[key]);
//           set_time(x[key]); // 'hello'
//        }
//      }   
//     // console.log("Duration is "+duration);
//     });
  

// }, [time]);

const get_day=(num)=>{
  let day;
  if(num==7){
    day="Sunday";
  }
  else if(num==1){
    day="Monday";
  }
  else if(num==2){
    day="Tuesday";
  }
  else if(num==3){
    day="Wednesday"
  }
  else if(num==4){
    day="Thursday"
  }
  else if(num==5){
    day="Friday"
  }
  else if(num==6){
    day="Saturday"
  }
return day;
}


// //increase counter
// const increase = () => {
//   setCounter(count => count + 1);
// };


const generate_iternary=()=>{
  console.log("inside iternary");
  const i=0;
  
  var arrival_date=Details.Arrival_Date;
  const Arrival_Time2=Details.Arrival_Time;

  console.log("Arrivaln Time 2 : " + Arrival_Time2);
  
  var Departure_Time=Details.Departure_Time;
   var Departure_Date=Details.Departure_Date;

   //console.log("NNNNNN : " + Departure_Date + " " , Details);

  var temp_hours=moment(Arrival_Time2,"HH:mm").format('HH');

console.log("Arrivaln_time 2: temp_hours  " + temp_hours);

  //console.log("arrival date : " + arrival_date);
  var temp=moment.utc(arrival_date).format('YYYY-MM-DD');

  console.log("Arrivaln : temp : " + temp);

  var dpdate=moment.utc(Departure_Date).format('YYYY-MM-DD');

  //console.log('QQQQ : ' + dpdate);
  var temp_hours2=moment(Departure_Time,"HH:mm").format('hh:mm');


  var datenew2=moment(dpdate).add(temp_hours2,'hh:mm').format('YYYY-MM-DD H:mm:ss A');

  //console.log('BBBBB : ' + datenew2);

   const datenew=moment(temp).add(temp_hours,'hours').format('YYYY-MM-DD H:mm:ss A');

   console.log("Arrivaln : datenew : "+datenew);
  // j=moment(datenew).add(checkin_time,'HH:mm:ss').format('YYYY-MM-DD H:mm:ss A');
  //console.log("j is : " + j);
 
  const date = moment(temp); // Thursday Feb 2015
  const a = date.day();
  
//console.log('usingMoment: date.day() ==> ',a);
const day=get_day(a);

//console.log("Day is : " +day);
  const start_date = moment(temp);
  //console.log("start date : "+temp);
  //console.log("Day : " +temp.isoWeekday());

  console.log("new Arrival_Time : " + Arrival_Time2);
  var atime=moment(Arrival_Time2,"HH:mm").format('HH:mm A');

  console.log("New atime : " + atime);
  start_time=moment(atime,"HH:mm").add(checkin_time,'hh:mm').format('HH:mm A');
  var dtime=moment(Departure_Time,"HH:mm").format('hh:mm A');
  var temp_hours=moment(Arrival_Time,"HH:mm").format('HH');
  //console.log("temp hours : "+temp_hours);

  var date_with_time=date.add(16,'hours').format('YYYY-MM-DD H:mm:ss A');
  //console.log("date with time : "+date_with_time);

  var t_hours=gethours(date_with_time);
  //console.log("new t_hours : " +t_hours);

  //console.log("Start Time : " + start_time);
  const new1=date.add(4,'hours').format('HH:mm');
  const mday=moment(new1).format('YYYY-MM-DD');
  const nday=moment(mday);
  //console.log("new date : "+mday);
  //console.log("new day is: " +nday.day());
  const new_time=moment(new1,"HH:mm").format('HH:mm');
  //console.log("New Time : " + new_time);
  //console.log("before record");
  b=0;
  location=Hotel.Hotel_City;

  counter=0;
  // console.log("Timing 1 : " ,timingsn[0]);
  // console.log("Timing 2 : " ,timingsn[1]);
  // console.log("Timing 3 : " ,timingsn[2]);
  var timing1=timingsn[0];
  console.log("timing1 : "+timing1);
  var new_t=moment(timing1,'HH:mm:ss').format('HH:mm:ss');
  console.log("new t is : " + new_t);
  
    travel_time=moment(start_time,"HH:mm").add(new_t,'HH:mm:ss').format('HH:mm A');
    //console.log("Travel time 1 is : "+travel_time);

    //console.log("last curr time : " + moment(lastCurrtime).format('HH:mm:ss A'));
    console.log("last activity time : " + moment(lastActivityTime,'HH:mm:ss').format('HH:mm:ss'));
    const lastCurrTime= moment(lastCurrtime).format('YYYY-MM-DD HH:mm:ss A');
    console.log("Last current time : " + lastCurrTime);

    const newCheckout=moment(lastCurrTime).add(checkin_time,'HH:mm:ss');
    console.log("last checkout time : " + newCheckout);
    end_date=newCheckout.format('YYYY-MM-DD HH:mm:ss A');
    console.log("end_date : " + end_date);


  var checkOut_time=moment(lastCurrtime,'HH:mm:ss A').add(moment(lastActivityTime,'HH:mm:ss').format('HH:mm:ss'));;
  console.log("checkout time : " +checkOut_time.format('HH:mm:ss A'));

  const z=moment(checkOut_time).day();
  const new_day=get_day(z);

return(
  <>
    <Recordw activity="Departure" day={day} place={Details.Departure_From+", "+Details.Departure_State} date={datenew2} time={dtime}/>
    <Recordw activity="Arrival" day={day} place={ModeDetails.Destination} date={datenew} time={atime}/>
    <Recordw activity="Check in" day={day} place={Hotel.Hotel_Name+", " + Hotel.Hotel_City} date={j} time={start_time}/>
    
    {j && records.map(activity => 
      <Recordw 
        activity={activity.Activity_Name} 
        day={activity.day} 
        place={activity.Activity_City} 
        date={activity.date} time={activity.travel_time} 
        //{...changetime(activity.Activity_Time)} 
        //{...incrementCounter(counter)}
        //{...getday(j)} 
        //{...getdate(j,activity.Activity_Time)}
        // {...gettraveltime(activity.Activity_Name,location,activity.Activity_City)}
        
    />)}
    <Recordw activity="Check Out" day={new_day} place={Hotel.Hotel_Name+", " + Hotel.Hotel_City} date={checkOut_time.format('YYYY-MM-DD HH:mm:ss A')} time={checkOut_time.format('HH:mm A')}/>

      

     
  
  </>
);


};

// function getday(){
//   const date = moment(temp); // Thursday Feb 2015
//   const a = date.day();
  
// console.log('usingMoment: date.day() ==> ',a);
// const day=get_day(a);

// }

async function incrementCounter(count){
  //var a=count;
  console.log("Inside incrementCounter function ");
  console.log("length is : "+timingsn.length);
  console.log("Count is  1 : " + count);
  console.log("Counter is : " + counter);

  if(checkin_time!=null && timingsn[counter]!=null && timingsn.length!=0 && count<timingsn.length-1){
  console.log("counter changed from " +counter);
  counter=count+1;
  console.log("counter changed to " + counter);
  }


  console.log("Count is 2 : " + count);
  console.log("Counter is : " + counter);
}

async function gettraveltime(activity,pl,city){
  console.log("in gettraveltime : "+activity + " " + pl + " " +city)
  var c='';
  var m='';
  Axios.post("http://localhost:3001/get_travel_time", {
    act:activity,
    place:pl,
  }).then((response) => {
    //console.log("response of get travel time is" , response.data[0]);
    // console.log("Time is : " ,response.data[0]);
     const x=response.data[0];
     console.log("x is  : ", x);
     //alert("welcome");
    for (var key in x) {
    if (x.hasOwnProperty(key)) {
         console.log("hello" + x[key]);
         c=x[key] // 'hello'
         m=moment(x[key],"H:mm").format('HH:mm');
         console.log("m is : "+m);
         console.log("Travel time 2 is : "+travel_time);
         travel_time=moment(travel_time,"HH:mm").add(m,'hh:mm').format('HH:mm A');
         console.log("Travel time 3 is : "+travel_time);
       }
     }   
    //console.log("Duration is "+duration);
    });
    var temp_time=moment(travel_time,"HH:mm").add(m,'hh:mm').format('HH:mm A');
    travel_time=temp_time;
    console.log("travel time : " + travel_time);
    console.log("Location Before : "+ location);
    location=city;
    //console.log("The value of c is : "+c);
    console.log("Location After : "+ location);
    window.counter=window.counter+1;
    console.log("windows.counter value after update is : " + window.counter);
  
}

function getdate(date,h){
  //console.log("date received : " + date + "hours received : " +h);
  var temp=moment(date,'YYYY-MM-DD H:mm:ss').add(h,'hours').format('YYYY-MM-DD H:mm:ss A');
  //console.log("j value before : "+j)
  j=temp;
  //console.log("After change value of j : " + j);
}

function getday(date){
  const temp = moment(date);
  const a = temp.day();
  day=get_day(a);
}

function gethours(date1){
  //var date_with_time=date.add(16,'hours').format('YYYY-MM-DD H:mm:ss A');
  console.log("In get hours : "+date1);
  var temp=moment(date1,'YYYY-MM-DD H:mm:ss').format('HH');
  return temp;

}

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1200, // Specify amount here
//   currency: "usd",// Specify currency here
//   customer: customer.id, // Specify customer id
//   setup_future_usage: 'off_session', // Include this if you plan to charge card off session (where user is not involved like recurring payments)
// });

async function changetime(Time,activity,pl,city){
  //setCounter(counter+1);
  console.log("Value of counter brfore : " + counter);
  var wq=window.counter;
  console.log("The value of counter : "+counter);
var xamp=timingsn[counter];
console.log("xamp is : " + xamp);
var tr=moment(xamp,'HH:mm:ss').format('HH:mm:ss');
console.log("tr is : " + tr);
  //console.log("Value of o after : "+o);

  var c=0;
  //console.log("Time received : " +Time)
  console.log("before  change travel time : " +travel_time);
  var new_time=moment(travel_time,"HH:mm A").add(Time,'hours').format('HH:mm A');
  console.log("After change new time : " + new_time);
 // console.log("from timingsn : "+timingsn[v]);
  var new_time2=moment(new_time,"HH:mm").add(tr,'HH:mm:ss').format('HH:mm A')
  console.log("After change new time 2 : " + new_time2);
  //var t_time=  gettraveltime(activity,pl,city);
  
  //console.log("in changetime : " + t_time);
  var hours=moment(new_time2,"HH:mm").format('HH');
  if(hours>=20){
    console.log("Inside if")
    var ntime=moment(travel_time,"HH:mm").add(14,'hours').format('HH:mm A');
    travel_time=ntime;
  }
  else{
    
  travel_time=new_time2;}
  //gettraveltime(activity,pl,city);
  console.log("after final change travel time : " +travel_time);
}

var product= {
  name:"Tour Package",
  price:total,
  description : "Enjoy Your Tour"
}

async function addBooking(){
  console.log("inside addbooking : " + Name + " " + curr_date + " " + " " + moment(end_date,'YYYY-MM-DD').format('YYYY-MM-YY') + " " + total);
  await Axios.post("http://localhost:3001/addBooking", {
        name: Name,
        book_date:curr_date,
        total:total,
        t_id:tk,
        //date:newDate(),
        start_date:moment.utc(Details.Departure_Date).format('YYYY-MM-DD'),
        end_date:moment.utc(end_date,'YYYY-MM-DD').format('YYYY-MM-DD'),
        }).then((response) => {
          console.log(response);
          // setLoginStatus({message: "Personal Details is successfull"});
          // console.log(loginStatus);
        });
      };

async function handleToken(token, addresses) {
  console.log("Token : " , token)
  const response=await Axios.post("http://localhost:3001/checkout", {
       token:token,
       product:product,
   })

   tk=token.id;

  console.log(response.status)

  if (response.status === 200) {
    await addBooking();
    toast("Success! Check email for details", { type: "success" });
    history.push('/success');
  } else {
    toast("Something went wrong", { type: "error" });
  }
}

  return (
  <>
      
       <div className="my_table_container ">
       <center>
       <div className="Hotel_table overflow-auto">
        <h2 className="Hotel_title">Hotel Details</h2>
       <table className="table">
            <thead className="Hotel_head">
                <tr>
                    <th>Hotel ID</th>
                    <th>Hotel Name</th>
                    <th>Hotel Price</th>
                    <th>No of Days</th>
                    <th>No of Nights</th>
               </tr>
            </thead>
            <tbody className="Hotel_body">
                        <td>{Hotel.Hotel_ID}</td>
                        <td>{Hotel.Hotel_Name}</td>
                        <td>{Hotel.Hotel_Price}</td>
                        <td>{Hotel.Days}</td>
                        <td>{Hotel.Nights}</td>
            </tbody>
        </table>
    </div>
    </center>
    </div>
    <br/><br/>

    <div className="my_table_container ">
    <center>
    <div className="travel_table overflow-auto">
        <h2 className="travel_title">Travel Details</h2>
         <div align="center">
          <h4>Mode Of Transport :{Mode}</h4>
          </div>
        <table className="table">
       
           <thead className="travel_head">
                <tr>
                    <th>Date</th>
                    <th>Boarding Stop</th>
                    <th>Destination</th>
                    <th>No of Travellers</th>
                    <th>From</th>
               </tr>
            </thead>
            <tbody className="travel_body">
                        <td>{moment(Details.Departure_Date).format('YYYY-MM-DD')}</td>
                        <td>{ModeDetails.Boarding}</td>
                        <td>{ModeDetails.Destination}</td>
                        <td>{ModeDetails.Traveller}</td>
                        <td>{ModeDetails.State}</td>
            </tbody>
        </table>
          {console.log("Details are : " , Details)}

        <div className="overflow-auto">
        <table className="table overflow-auto" >
           <thead className="travel_head">
                <tr>
                    <th>Name</th>
                    <th>Departure_Date</th>
                    <th>Departure_State</th>
                    <th>Departure_Time</th>
                    <th>Class</th>
                    <th>Price</th>
                    <th>Arrival Date</th>
                    <th>Arrival Time</th>
               </tr>
            </thead>
            <tbody className="travel_body">
              {console.log("hhhh : " , Details)}
                        <td>{Details.Name}</td>
                        <td>{moment.utc(Details.Departure_Date).format('YYYY-MM-DD')}</td>
                        <td>{Details.Departure_State}</td>
                        <td>{Details.Departure_Time}</td>
                        <td>{Details.Class}</td>
                        <td>{Details.Price}</td>
                        <td>{moment.utc(Details.Arrival_Date).format('YYYY-MM-DD')}</td>
                        <td>{moment(Details.Arrival_Time,'HH:mm:ss').format('HH:mm:ss A')}</td>
            </tbody>
        </table>
        </div>
        </div>
        </center>
    </div>

    <div className="my_table_container">
        <center>
        <div className="iternary_table overflow-auto">
        <p className="iternary_title">Iternary</p>
          <table className="table">
            <thead className="iternary_head" font-family= "Lato-Regular">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Day</th>
                <th>Activity</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody class="iternary_body">
            {generate_iternary()}
            </tbody>
          </table>
        </div>
        <br/><br/>
        <center>
          <p className="iternary_title">Grand Total: <i class="fa-solid fa-indian-rupee-sign"></i> {total} </p>
        <div className="form-group container">
          <StripeCheckout
          className="center"
          stripeKey="pk_test_51LLtUVSIEGave4jgJ8Bjr8DuujKlGxodtrMpYZxLRyC7qJtEpdl8ctp3Vfm5AVAXyDxqVsV6dcV4ckUyuaaRcuQH00DGyFrKx8"
          token={handleToken}
          amount={total *100}
          name={product.name}
          billingAddress
          shippingAddress
          currency='INR'
          />
          </div>
        </center>
         </center>
      </div>        
    </>)
}
export default Activity_view;