import { useState, useEffect } from "react";

interface IUseTextAnimationProps {
    toRotate : string[];
}

export default function useTextAnimation ({
    toRotate
}: IUseTextAnimationProps
) {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500);
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(250);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }

    return {
        text
    }
}