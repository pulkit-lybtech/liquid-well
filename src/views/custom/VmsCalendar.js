import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const times = [1, 2, 3, 4, 5, 6, 7, 8];

function Calendar() {
  // STATES 
  const [selectedTime, setSelectedTime] = React.useState(new Array(7).fill(0));
  const [selectedDay, setSelectedDay] = React.useState(new Array(7).fill(0));

  const timeInt = 9;

  

  const dayTimeHandler = e => {
    // alert(times[i], j)
    console.log(e)
    e.target.className = 'bg  bg-primary '
  }

  return (
    <div className="calendar">
      <div className="card">
        <div className="card-body">
          <h5 className="card-subtitle h6">
            Please select what time of the day, you will be available.
          </h5>

          <table className="table table mt-3 table-bordered table-striped ">
            <thead className="border-bottom">
              <tr>
                <th style={{ width: "100px" }}> &nbsp; </th>
                {days.map((day) => {
                  return <th  key={day}> {day} </th>;
                })}
              </tr>
            </thead>
            <tbody>
              {times.map((time, timeInd) => {
                return (
                  <tr key={time}>
                    	<td> {((time + timeInt) < 10) ? ((time + timeInt) > 12 ? time + ":00 AM" : time +":00 PM ") : (time )+ ":00 AM"    } </td>
                    {
                      selectedDay.map((item,timeInd)=> {
                        return(
                          <td className="p-0">
                            <div onClick={e => dayTimeHandler(e)} className={ ( item ===   0 ) ? "bg bg-warning " : "bg bg-success" }>
                              &nbsp;
                              
                            </div>
                          </td>
                        )
                      })
                    }
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex py-2">
            <button className="btn px-5 btn-primary">
              Save 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;