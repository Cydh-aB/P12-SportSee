import React, { useState, useEffect } from "react";
import {
    XAxis,
    YAxis,
    Tooltip,
    Line,
    LineChart,
    ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import SessionsToolType from "./AverageSessionToolType";
import { fetchAverageSession } from "../../Data/API";

/**Style**/

const StyleContainer = styled.div.attrs({className: 'SessionGraph'})`
position: relative;
width: 258px;
height: 263px;
display: flex;
flex-direction: column;
justify-content: space-between;
background: #ff0000;
box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
border-radius: 5px;

h2{
  position: absolute;
  font-weight: 500;
  font-size: 15px;
  padding: 30px 33px 0 34px;
  color: #FFFFFF;
  opacity: 50%;
  width: 147px;
}
`
/****/

/**
 * Built component from recharts, display daily activity from the data
 * @component
 */

export default function UserAverageSession() { 
  const [data, setData] = useState([])

  useEffect(() => {
    fetchAverageInfo()
  }, [])

  async function fetchAverageInfo() {
    const data = await fetchAverageSession()
    setData(data)
  }
  return (
    <StyleContainer>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1} 
             onMouseMove={(e) => {
                let div = document.querySelector('.SessionGraph')
                if (e.isTooltipActive === true) {
                  let windowWidth = div.clientWidth
                  let mouseXpercentage = Math.round(
                    (e.activeCoordinate.x / windowWidth) * 100
                  )
                  // @ts-ignore
                  div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1) 100%)`
                } else {
                  div.style.background = ""
                }
              }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip wrapperStyle={{ outline: "none" }} content={<SessionsToolType />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyleContainer>
  );
}