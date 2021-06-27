import React from "react";
import { program } from "../mocks/data";

// import AppContext from "./AppContext";

let list = program.Data;
export default function Program (){
  return (
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            <div>{list.DatesAndName[0].DateName}</div>
            <div>{list.DatesAndName[0].Date }</div>

            {list.Timetable.map((listItem, index) => {
                let s = listItem.Date
                let s1 = s.substring(s.indexOf("T")+1);
                s1.trim();
              return (
                <span key={index} className="d-flex flex-column">
                <span dangerouslySetInnerHTML={{__html:listItem.Text}} />
                </span>
              );
            })}

          </div>
        </div>
  );
};
