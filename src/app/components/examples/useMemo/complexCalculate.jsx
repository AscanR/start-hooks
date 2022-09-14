import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("Run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const btnColor = otherState ? "primary" : "secondary";
    const fact = useMemo(() => runFactorial(value), [value]);
    useEffect(() => {
        console.log("render btnColor");
    }, [btnColor]);
    return (
          <>
              <CardWrapper>
                  <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                  <Divider/>
                  <p>Value: {value}</p>
                  <p>Result factorial: {fact}</p>
                  <button className="btn btn-primary m-2" onClick={() => setValue(prevState => prevState + 10)}>
                      Increment
                  </button>
                  <button className="btn btn-primary m-2" onClick={() => setValue(prevState => prevState - 10)}>
                      Decrement
                  </button>
              </CardWrapper>
              <CardWrapper>
                  <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                  <button className={"btn m-2 btn-" + btnColor} onClick={() => setOtherState(prevState => !prevState)}>
                      Change color
                  </button>
              </CardWrapper>
          </>
    );
};

export default ComplexCalculateExample;
