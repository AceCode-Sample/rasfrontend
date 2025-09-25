import { useState, useRef, useEffect } from "react";

function RFIDInput({ onScan }) {
  const [rfid, setRfid] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.trim();

    if (value.length >= 10) {
      onScan(value);
      setRfid("");
    } else {
      setRfid(value);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={rfid}
      onChange={handleChange}
      placeholder="Scan RFID"
      autoFocus
    />
  );
}
const RFID_Focus = () => {
  const handleScan = (rfid) => {
    console.log("RFID Scanned:", rfid);
  };

  return (
    <div>
      <h2>RFID Scanner</h2>
      <RFIDInput onScan={handleScan} />
    </div>
  );
};
export default RFID_Focus;
