import React from "react";

const Schedule = ({ games }) => {
  return (
    <>
      {games.map((game) => {
        const { id, team, where, date, time } = game;
        return (
          <article key={id} className="game-container">
            <div className="game">
              <h3>{team}</h3>
              <h5>{where}</h5>
              <p>
                {date} {time}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Schedule;
