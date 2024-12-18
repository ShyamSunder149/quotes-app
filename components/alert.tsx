import { MouseEventHandler } from "react";

export default function Alert(props: { message: string, onClose: MouseEventHandler }) {
  return (
    <div className="flex justify-center items-center fixed z-1 top-0 left-0 w-full h-full bg-black bg-opacity-55" role="alert">
      <div className="flex flex-col justify-center border border-black rounded-lg items-center bg-white p-5 gap-4 border-radius-5 text-center">
        {props.message + "!!"} <br />
        <button className="px-1  border border-black rounded-md" onClick={props.onClose}>
          close
        </button>
      </div>
    </div>
  )
}
