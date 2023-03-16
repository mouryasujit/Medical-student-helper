import React from "react";

import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Catcard from "./Catcard";
import Cards from "./Data";

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="my-10 w-5/4 mx-auto ">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            background: "gray",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            marginRight: "1rem",
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            background: "gray",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 5,
            minWidth: 768,
          },
        ]}
        speed={600}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {Cards.map((card) => {
          return <Catcard items={card} key={card.id} />;
        })}
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
