import "./RoutineTable.css";

export default function FourthYearRoutine() {
  return (
    <div className="routine-container">
      <table className="routine-table">
        <thead>
          <tr>
            <th>DAY</th>
            <th>09:30-10:20</th>
            <th>10:20-11:10</th>
            <th>11:10-12:00</th>
            <th>12:00-12:50</th>
            <th>12:50-01:40</th>
            <th>01:40-02:30</th>
            <th>02:30-03:20</th>
            <th>03:20-04:10</th>
            <th>04:10-05:00</th>
          </tr>
        </thead>

        <tbody>
          {/* Monday */}
          <tr>
            <td className="day">Monday</td>

            <td>Advanced AI</td>
            <td>HCI</td>
            <td colSpan="2">ESP VIII</td>

            <td className="lunch" rowSpan="5">
              LUNCH
            </td>

            <td>SSIC</td>
            <td>GC</td>
            <td>GC</td>

            <td rowSpan="5" className="mentor">
              Mentoring
            </td>
          </tr>

          {/* Tuesday */}
          <tr>
            <td className="day">Tuesday</td>

            <td>Advanced AI</td>
            <td>SSIC</td>
            <td>HCI</td>
            <td>HCI</td>

            <td colSpan="2">SDP VIII</td>

            <td>CL & IPR</td>
          </tr>

          {/* Wednesday */}
          <tr>
            <td className="day">Wednesday</td>

            <td>Advanced AI</td>
            <td>GC</td>
            <td>Bio Informatics</td>
            <td>Bio Informatics</td>

            <td colSpan="2">PROJECT</td>

            <td>PROJECT</td>
          </tr>

          {/* Thursday */}
          <tr>
            <td className="day">Thursday</td>

            <td>SSIC</td>
            <td>PROJECT</td>
            <td>CL & IPR</td>
            <td>PROJECT</td>

            <td colSpan="3">PROJECT</td>
          </tr>

          {/* Friday */}
          <tr>
            <td className="day">Friday</td>

            <td>CL & IPR</td>
            <td>Bio Informatics</td>

            <td colSpan="2">PROJECT</td>

            <td colSpan="3">PROJECT</td>
          </tr>

          {/* Faculty Details */}
          <tr>
            <td
              colSpan="10"
              style={{
                textAlign: "left",
                padding: "20px",
                background: "#f8fbff",
                fontWeight: "500",
                lineHeight: "2",
              }}
            >
         
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}