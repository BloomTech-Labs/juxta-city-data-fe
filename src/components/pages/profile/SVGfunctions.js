import { anime } from "react-anime";
let current = null;
const handleSubmitFocus = (e) => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: -2421,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "522 3000",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };
  const handleTextFocus = (e) => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: e.target.dataset.strokedashoffset,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: e.target.dataset.strokedasharray,
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };
  export {
    handleSubmitFocus,
    handleTextFocus
  }