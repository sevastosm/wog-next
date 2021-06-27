import React from "react";
import  ListItem from "./listitem/ListItem"
// import styles from "./Playlist.module.scss"

export default function ({sermons}) {

  if (!sermons) return null
  return (
    <div
      cellSpacing={0}
      cellPadding={5}
      border={0}
      width="100%"
    >
      {sermons.map((sermon) => {
        return (
          <ListItem listItem={sermon} />
        );
      })}
    </div>
  );
}
