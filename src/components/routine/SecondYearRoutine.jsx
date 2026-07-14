import "./RoutineTable.css";

export default function SecondYearRoutine() {
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

          <tr>
            <td className="day">Monday</td>
            <td>ESP IV</td>
            <td>F&A(M1)</td>
            <td>F&A(M1)</td>
            <td rowSpan="2" className="lunch">LUNCH</td>
            <td>COA Lab</td>
            <td>COA Lab</td>
            <td>AIML</td>
            <td rowSpan="10" className="mentor">
              Mentoring
            </td>
          </tr>

          <tr>
            <td className="day"></td>
            <td>ARC (LG 2.1)</td>
            <td>AB (LG 2.1)</td>
            <td>PSP (LG 2.1)</td>
            <td>AIML Lab</td>
            <td>AIML Lab</td>
            <td>SSG (LG 2.1)</td>
          </tr>

          <tr>
            <td className="day">Tuesday</td>
            <td>AIML Lab</td>
            <td>DM</td>
            <td>AP(OOP)</td>
            <td rowSpan="2" className="lunch">LUNCH</td>
            <td>DAA</td>
            <td>AP(OOP) Lab</td>
            <td>AP(OOP) Lab</td>
          </tr>

          <tr>
            <td className="day"></td>
            <td>COA Lab</td>
            <td>AVC</td>
            <td>SWB</td>
            <td>SSB</td>
            <td>DAA Lab</td>
            <td>DAA Lab</td>
          </tr>

          <tr>
            <td className="day">Wednesday</td>
            <td>SDP IV</td>
            <td>DM</td>
            <td>AP(OOP)</td>
            <td rowSpan="2" className="lunch">LUNCH</td>
            <td>AP(OOP)</td>
            <td>DM</td>
            <td>COA</td>
          </tr>

          <tr>
            <td className="day"></td>
            <td>LG 2.1</td>
            <td>AVC</td>
            <td>SDB</td>
            <td>SJ</td>
            <td>AKM</td>
            <td>KS</td>
          </tr>

          <tr>
            <td className="day">Thursday</td>
            <td>PPT</td>
            <td>DAA Lab</td>
            <td>DAA Lab</td>
            <td rowSpan="2" className="lunch">LUNCH</td>
            <td>COA</td>
            <td>DAnalytics</td>
            <td>AIML</td>
          </tr>

          <tr>
            <td className="day"></td>
            <td>Science Auditorium</td>
            <td>AP(OOP) Lab</td>
            <td>AP(OOP) Lab</td>
            <td>SMU</td>
            <td>SDas</td>
            <td>KD</td>
          </tr>

          <tr>
            <td className="day">Friday</td>
            <td>DAnalytics</td>
            <td>F&A(M1)</td>
            <td>DAA</td>
            <td rowSpan="2" className="lunch">LUNCH</td>
            <td>AIML</td>
            <td>DAA</td>
            <td>EVS</td>
          </tr>

          <tr>
            <td className="day"></td>
            <td>KD</td>
            <td>AB</td>
            <td>SWB</td>
            <td>RNB</td>
            <td>PBL</td>
            <td>SD</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}