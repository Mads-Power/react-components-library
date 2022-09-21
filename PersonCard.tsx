import React, { useState } from "react";

interface Props {
  name: string;
  height: string;
}

const PersonCard: React.FunctionComponent<Props> = ({ name, height }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>{name}</button>
      {open && <div>{height}</div>}

      {/* <div className="card">
        <img src="../assets/darth-vader.png" alt="Avatar" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{height}</p>
        </div>
      </div> */}
    </div>
  );
};

export default PersonCard;
