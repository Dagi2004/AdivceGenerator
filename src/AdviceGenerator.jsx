import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AdviceGenerator = () => {
  const [data, setData] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const advicedata = await response.json();

      console.log(data, adviceNumber);
      setData(advicedata.slip.advice);
      setAdviceNumber(advicedata.slip.id);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAdvice();
  });

  return (
    <>
      <div className="bg-darkBlue p-20 px-20 mx-auto  ">
        <div className="px-10 rounded-md bg-lightGray mx-auto p-4 max-w-md text-lightwhite  ">
          <h4 className="text-lightGreen mb-3 mt-2 font-bold">
            Advice##{adviceNumber}
          </h4>
          <p className="text-center ">{data}</p>

          <hr className="w-58 mt-4 text-lightwhite"></hr>

          <div className="flex flex-row justify-center mx-auto -mb-7  ">
            <button onClick={fetchAdvice}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1714/1714307.png"
                alt="sasasa"
                className="rounded-full px-2 p-2 bg-lightGreen mt-2 mx-auto w-17 h-12 hover:bg-darkGreen shadow=darkGreen-xl"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdviceGenerator;
