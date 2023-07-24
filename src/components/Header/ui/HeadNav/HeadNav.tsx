import React, { useState } from "react";
import Button from "@src/components/Button/Button";

const HeadNav = () => {
  const [activeButton, setActiveButton] = useState("private");
  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <>
      <Button
        active={activeButton === "private"}
        onClick={() => handleButtonClick("private")}
        type="head"
      >
        Частный клиент
      </Button>
      <Button
        active={activeButton === "business"}
        onClick={() => handleButtonClick("business")}
        type="head"
      >
        Бизнес клиент
      </Button>
    </>
  );
};
export default HeadNav;
