import { useState, useEffect } from "react";
import "./Network.css";
const Networkaddress = ({ value }) => {
  const [address, setAddress] = useState("");
  const [iptype, setIpType] = useState();

  useEffect(() => {
    if (value === "ipv4") {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          setAddress(data);
          setIpType(true);
        });
    } else if (value === "ipv6") {
      fetch("https://api64.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          setIpType(false);
          setAddress(data);
        });
    }
  }, []);
  return (
    <div className="ip-card">
      {iptype === true ? (
        <>
          <h2>Public IPv4: </h2>
          <h3>{address.ip}</h3>
        </>
      ) : (
        iptype === false && (
          <>
            <h2>Public IPv6: </h2>
            <h3>{address.ip}</h3>
          </>
        )
      )}
    </div>
  );
};
export default Networkaddress;
