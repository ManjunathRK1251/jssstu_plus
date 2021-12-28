import React from "react";
import CountUp from "react-countup";

import "./jssstu.css";
import "./SVGs.css";
import "./Counter.css";

export default function Jssstu() {
    return (
        <div className="Full-logo">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="209"
                    height="55"
                    fill="none"
                    viewBox="0 0 209 55"
                    className="left1"
                >
                    <path
                        fill="#F9813A"
                        d="M190.282 55H-45V0h235.282L209 27.496 190.282 55z"
                    />
                </svg>
                <div className="countPartL1-txt">Area in acres</div>
                <div className="countPartL1">
                    <p>
                        <CountUp start={0} end={102} duration={2} />
                    </p>
                </div>
            </div>
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="209"
                    height="55"
                    fill="none"
                    viewBox="0 0 209 55"
                    className="left2"
                >
                    <path
                        fill="#F9813A"
                        d="M190.282 55H-45V0h235.282L209 27.496 190.282 55z"
                    />
                </svg>
                <div className="countPartL2-txt">Faculty</div>
                <div className="countPartL2">
                    <p>
                        <CountUp start={0} end={250} duration={2} />+
                    </p>
                </div>
            </div>

            <div class="logo">
                <p className="jssstu">JSSSTU</p>
                <div className="moto">
                    <p>
                        <span class="E">E</span>ducate
                    </p>
                    <p>
                        <span class="E">E</span>levate
                    </p>
                    <p>
                        <span class="E">E</span>nlighten
                    </p>
                </div>
            </div>

            <div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="209"
                        height="55"
                        fill="none"
                        viewBox="0 0 209 55"
                        className="right1"
                    >
                        <path
                            fill="#F9813A"
                            d="M190.282 55H-45V0h235.282L209 27.496 190.282 55z"
                        />
                    </svg>
                    <div className="countPartR1-txt">Students</div>
                    <div className="countPartR1">
                        <p>
                            <CountUp start={0} end={5500} duration={2} />+
                        </p>
                    </div>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="209"
                        height="55"
                        fill="none"
                        viewBox="0 0 209 55"
                        className="right2"
                    >
                        <path
                            fill="#F9813A"
                            d="M190.282 55H-45V0h235.282L209 27.496 190.282 55z"
                        />
                    </svg>
                    <div className="countPartR2-txt">Alumni Strength</div>
                    <div className="countPartR2">
                        <p>
                            <CountUp start={0} end={25000} duration={2} />+
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
