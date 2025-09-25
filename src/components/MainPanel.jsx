import { useRef, useEffect, useState } from "react";
import "./MainPanel.css";
import defaultQRCode from "./assets/defaultQRCode.png";
import defaultProfile from "./assets/defaultProfile.png";
import HeaderPanel from "./Header";

import testData from "./assets/testData.json"

const MainPanel = () => {
  const [rfidNum, getRfidNum] = useState();
  
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();


  const data = testData.find((i) => i.RFID === rfidNum);

  return (
    <div>
      <HeaderPanel />
      <div className="mainPanel">

        {data ? (
          <div className="studentPicturePanel">
            <img src={data.Image} />
          </div>
        ) : ("")}

        <div className="studentInfoPanel">
          <div className="studentInfoPanel_top">
            <div className="studentInfoPanel_top_header">
              <div className="studentInfoPanel_top_header_tag">
                <span class="material-symbols-sharp">smart_card_reader</span>
                <p>RFID INFO:</p>
              </div>
              <input onChange={(e) => getRfidNum(e.target.value)} />
              <p></p>
            </div>
            {data ? (
              <div className="studentInfoPanel_top_content">
                <p className="pName"> {data.Fullname} </p>

                <p className="pPosition"> {data.Position} </p>
                <p className="pSection"> {data.Section} </p>
              </div>
            ) : (
              <div className="studentInfoPanel_top_message">
                <p> SCAN YOUR RFID</p>
              </div>
            )}

            <hr />
            <br />
          </div>

          {data ? (
            <div className="studentInfoPanel_middle">
              <div className="studentInfoOthers">
                <div className="studentInfoOthersA">
                  <p> INFORMATION </p>
                </div>
                <div className="studentInfoOthersB">
                  <div className="studentInfoOthersB_list">
                    <hr />
                    <div className="studentInfoOthersB_list_item">
                      <span class="material-symbols-sharp">18_up_rating</span>
                      <p> {"AGE: " + data.Age} </p>
                      <span class="material-symbols-sharp">female</span>
                      <p> {data.Sex}</p>
                    </div>
                    <div className="studentInfoOthersB_list_item">
                      <span class="material-symbols-sharp">location_on</span>
                      <p> {data.Address} </p>
                    </div>
                    <div className="studentInfoOthersB_list_item">
                      <span class="material-symbols-sharp">groups</span>
                      <p> {data.Club} </p>
                    </div>
                    <div className="studentInfoOthersB_list_item">
                      <span class="material-symbols-sharp">
                        person_raised_hand
                      </span>
                      <p> {data.Adviser} </p>
                    </div>
                    <div className="studentInfoOthersB_list_item">
                      <span class="material-symbols-sharp">id_card</span>
                      <p> {data.ID_Tag}</p>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="studentInfoOthersC">
                  <label>
                    <span class="material-symbols-sharp">qr_code</span>
                    <p>SCAN QR CODE</p>
                  </label>
                  <img src={data.QR} alt="" />
                </div>
              </div>
            </div>
          ) : (" ")}

          {data ? (
            <div className="studentInfoPanel_bottom">
              <div className="studentIO_Status">
                <p> STATUS : </p>
                <p title="green_IN"> IN </p>
                <p title="green_OUT"> OUT </p> 
              </div>

              <div className="studentIO_Time">
                <p>TIME: {hour} : {minute}</p>
              </div>
            </div>
          ) : ("")}
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
