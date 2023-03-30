import { React } from "react";

export default function Navbar(props) {
    const { changeLangToJa, changeLangToEn } = props;

    return (
    <div>
        <button onClick={changeLangToJa}>日本語</button>
        <button onClick={changeLangToEn}>English</button>
    </div>
    )
}
