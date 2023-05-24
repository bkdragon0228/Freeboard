import React, { useState } from 'react'
import ReplyWriteUI from "./ReplyWrite.presenter"

export default function ReplyWrite() {
    const [reply, setReply] = useState<string>("");

    const handleRelply : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setReply(e.currentTarget.value);
        console.log(reply);
    }
  return (
    <ReplyWriteUI handleRelply={handleRelply}/>
  )
}
