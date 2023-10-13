import { useState } from "react";
import { MenuItemModel } from "../../models/MenuItemModel";
//import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import classes from "./BeerSlider.module.scss";
import React from "react";

type BeerSliderProps = {
  beers: MenuItemModel[];
};

const BeerSlider = (props: BeerSliderProps) => {
  const [beerMinIndex, setBeerMinIndex] = useState<number>(0);
  //   const [beerMaxIndex, setBeerMaxIndex] = useState<number>(3);
  const [iteration, setIteration] = useState<number>(0);

  //   const showNext = () => {
  //     if (beerMaxIndex > props.beers.length) {
  //       setBeerMinIndex(0);
  //       setBeerMaxIndex(3);
  //     } else {
  //       setBeerMinIndex(beerMinIndex + 3);
  //       setBeerMaxIndex(beerMaxIndex + 3);
  //     }
  //   };

  const showNext = () => {
    setBeerMinIndex((index) => {
      if (index === props.beers.length - 1) return 0;
      return index + 1;
    });
  };

//   const showPrev = () => {
//     setBeerMinIndex((index) => {
//       if (index === 0) return props.beers.length - 1;
//       return index - 1;
//     });
//   };

  const intervalChange = () => {
    setTimeout(() => {
      showNext();
      setIteration((prevState) => prevState + 1);
    }, 5000);
  };

  React.useEffect(() => {
    intervalChange();
  }, [iteration]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.sliderDiv}>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {props.beers.map((item: MenuItemModel) => {
            return (
              <div
                className={classes.beerSlider}
                style={{ translate: `${-100 * beerMinIndex}%` }}
              >
                  <div className={classes.beerItem}>
                    <div>
                      <img
                        src={item.image}
                        className={classes.articleImage}
                        // style={{ height: "600px", width: "350px" }}
                      />
                    </div>
                    <div className={classes.circle}>
                      0.5L/{item.Price_0_5}
                    </div>
                    <div className={classes.description}>
                      <h1 className={classes.beerTitle}>{item.Name}</h1>
                      <h2 className={classes.data}>0.3 L/{item.Price_0_3}</h2>
                      <h2 className={classes.data}>0.5 L/{item.Price_0_5}</h2>
                      <h3 className={classes.data}>
                        Proizvodi: {item.Producer}
                      </h3>
                      <div></div>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button
        className={classes.sliderButton}
        style={{ left: 0 }}
        onClick={showPrev}
      >
        <ArrowBigLeft />
      </button>
      <button
        className={classes.sliderButton}
        style={{ right: 0 }}
        onClick={showNext}
      >
        <ArrowBigRight />
      </button> */}
    </div>
  );
};

export default BeerSlider;
