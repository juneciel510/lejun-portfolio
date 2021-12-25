import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = () => {
  //merge all portfolio Category into an array
  let portfolioCategory = ["All"];
  portfolios.forEach((item) => {
    portfolioCategory = portfolioCategory.concat(item.category);
  });
  //get the unique value for this array
  portfolioCategory = [...new Set(portfolioCategory)];
  return portfolioCategory;
};

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

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
