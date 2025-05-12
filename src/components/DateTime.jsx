import { useEffect, useState } from "react";

export const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const getDate = date.toLocaleDateString();
      const getTime = date.toLocaleTimeString();
      setDateTime(`${getDate} - ${getTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};
