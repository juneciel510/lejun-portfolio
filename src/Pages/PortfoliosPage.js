import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

//const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

const allButtons = () => {
  let buttonSet = new Set(["All"]);
  let unionSet = portfolios.map((item) => buttonSet.add(...item.category));
  return [...[...unionSet][0]];
};
console.log("allButtons", allButtons);

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);
  console.log("button", button);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    //const filteredData = portfolios.filter(item => item.category === button);
    //modify filter function then one portfolio can fall into multiple categories
    const filteredData = portfolios.filter((item) =>
      item.category.includes(button)
    );

    console.log("filteredData", filteredData);

    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
