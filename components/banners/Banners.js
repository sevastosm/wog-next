import React from "react";
import { useGlobalState } from "../AppContext";
import AppContext from "../AppContext";
import { route } from "../../constants";
import { applicationLang } from "../../utils";
import Link from "next/link";


let customList = [];

export default function Banners() {
  const { state } = useGlobalState();
  const data  = state.series.Data;

  console.log('------------state.series.Data-----------------------',state.series.Data)

  const series =  React.useCallback(
    () => { data.map((serie) => {
    if (serie.ID === 13) {
      customList.push(serie);
    }
    if (serie.ID === 6) {
      serie.Series.map((seriey) => {
        if (seriey.ID === 110) {
          customList.push(seriey);
        }
      });
    }
    if (serie.ID === 9) {
      serie.Series.map((seriey) => {
        if (seriey.ID === 121 || seriey.ID === 92 || seriey.ID === 67) {
          customList.push(seriey);
        }
      });
    }
  })},
  [data],);






  const handleClick = (id) => localStorage.setItem("lang", id);
  return (
    <AppContext.Consumer>
      {(appState) => (
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            {customList.map((listItem) => {
              return (
                <div key={listItem.ID} className="d-flex banner">
                  <a href="">{listItem.Name}</a>
                </div>
              );
            })}
            {/* More Series */}
            <div className="banner d-flex">
              <Link
                onClick={() => handleClick(applicationLang())}
                href={`/sermons`}
                id="ctl00_main_adv1 button"
              >
                All Series
                {/* {listItem.Name} */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}

// onClick={appState.actions.tonggleAllSeries}
