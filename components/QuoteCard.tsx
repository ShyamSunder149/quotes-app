"use client"
import Alert from "@/components/alert";
import { useState } from "react";

export default function QuoteCard(props: { quote: string, name: string }) {

  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  function showAlertWithMessage(message: string) {
    setAlertMessage(message);
    setShowAlert(true);
  }

  function closeAlert() {
    setShowAlert(false);
  }

  function copyToClipboard(quoteString: string) {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(quoteString)
        .then(() => { showAlertWithMessage("Quote Copied") })
        .catch((err) => console.error("Some Error Occured : ", err));
    }
  }

  return (
    <div className="block flex-col border border-black-700 rounded-lg p-6">
      {props.quote} <br />
      <div className="relative flex flex-row align-bottom items-center justify-center text-center p-5 gap-4">
        <span className="float-right text-sm"> - {props.name}</span>
        <button className="border border-black rounded-lg p-3" onClick={() => copyToClipboard(props.quote + " - " + props.name)}>Copy Quote</button>
      </div>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

