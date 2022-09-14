import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };
    const withoutCallBack = useRef(0);
    const withCallBack = useRef(0);

    // Without Callback
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallBack.current++;
    }, [validateWithoutCallback]);

    // With Callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
          <CardWrapper>
              <SmallTitle>Example</SmallTitle>
              <p>Without callback: {withoutCallBack.current}</p>
              <p>With callback: {withCallBack.current}</p>
              <label htmlFor="email" className='form-label m-2'>Email</label>
              <input
                    value={data.email || ""}
                    type="email"
                    name='email'
                    className='form-control m-2'
                    id='email'
                    onChange={handleChange}/>
              <Divider/>
          </CardWrapper>
    );
};

export default UseCallBackExample;
