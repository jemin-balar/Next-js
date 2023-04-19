import React from "react";

const Dummy = () => {
  return (
    <>
      {/* <style jsx global> */}
      <style jsx>
        {`
          .dummy {
            background: yellow;
            color: red;
          }
        `}
      </style>
      <div className="dummy">hey i am dummy components my global css</div>
    </>
  );
};

export default Dummy;
