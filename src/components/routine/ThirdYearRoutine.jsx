import "./RoutineTable.css";

export default function ThirdYearRoutine() {
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
            <td className="day" rowSpan="2">Monday</td>
            <td>CN</td>
            <td>ICS</td>
            <td colSpan="2">NLP / ServiceNow</td>
            <td className="lunch" rowSpan="10">L</td>
            <td>ICS</td>
            <td>CC&amp;IOT</td>
            <td>SComp / GT</td>
            <td rowSpan="10" className="mentor">
              Mentoring
            </td>
          </tr>

          <tr>
            <td>RD (LG 4.7)</td>
            <td>MBS (LG 4.7)</td>
            <td colSpan="2">MDey / PBL (LG 4.7)</td>
            <td>BD (LG 4.7)</td>
            <td>Saikat Dutt (LG 4.7)</td>
            <td>SGH / AVC (LG 4.7)</td>
          </tr>

          {/* Tuesday */}
          <tr>
            <td className="day" rowSpan="2">Tuesday</td>
            <td>CN</td>
            <td>CC&amp;IOT</td>
            <td>ESP VI</td>
            <td>ICS</td>
            <td>ESP VI</td>
            <td>CC&amp;IOT</td>
            <td>CN</td>
          </tr>

          <tr>
            <td>SUBH (LG 4.7)</td>
            <td>SJ (LG 4.7)</td>
            <td>TaB (LG 4.7)</td>
            <td>KS (LG 4.7)</td>
            <td>MG (LG 4.7)</td>
            <td>KK (LG 4.7)</td>
            <td>D. Sobya (LG 4.7)</td>
          </tr>

          {/* Wednesday */}
          <tr>
            <td className="day" rowSpan="2">Wednesday</td>
            <td>NLP / ServiceNow</td>
            <td>GEN AI</td>
            <td colSpan="2">
              Gr A: CN Lab (SuBh+PB)
              <br />
              IT Lab 2
            </td>

            <td colSpan="2">
              Gr A: ICS Lab (PC+RD)
              <br />
              IT Lab 4
            </td>

            <td>GEN AI</td>
          </tr>

          <tr>
            <td>RNB / PBL (LG 4.7)</td>
            <td>SGH (LG 4.7)</td>

            <td colSpan="2">
              Gr B: CC&amp;IOT Lab (AB+KS)
              <br />
              IT Lab 8
            </td>

            <td colSpan="2">
              Gr B: IPM Lab (SSG+SD)
              <br />
              IT Lab 3
            </td>

            <td>KD (LG 4.7)</td>
          </tr>

          {/* Thursday */}
          <tr>
            <td className="day" rowSpan="2">Thursday</td>

            <td colSpan="2">SDP VI</td>

            <td colSpan="2">
              Gr A: CC&amp;IOT Lab (AB+KS)
              <br />
              IT Lab 8
            </td>

            <td>CN</td>

            <td colSpan="2">
              Gr A: IPM Lab (SSG+MG)
              <br />
              IT Lab 3
            </td>
          </tr>

          <tr>
            <td colSpan="2">SHT (LG 4.7)</td>

            <td colSpan="2">
              Gr B: CN Lab (SuBh+PB)
              <br />
              IT Lab 2
            </td>

            <td>RD (LG 4.7)</td>

            <td colSpan="2">
              Gr B: ICS Lab (PC+RD)
              <br />
              IT Lab 4
            </td>
          </tr>

          {/* Friday */}
          <tr>
            <td className="day" rowSpan="2">Friday</td>

            <td colSpan="2">PPT</td>

            <td>SComp / GT</td>

            <td>SComp / GT</td>

            <td>GEN AI</td>

            <td>CC</td>

            <td>CC</td>
          </tr>

          <tr>
            <td colSpan="2">Science Auditorium</td>

            <td>SUBH / SDB (LG 4.7)</td>

            <td>SGH / SDB</td>

            <td>SGH</td>

            <td>MG</td>

            <td>MG</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}