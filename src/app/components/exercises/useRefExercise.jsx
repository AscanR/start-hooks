import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const ref = useRef();
    const [name, setName] = useState("Блок");
    const handleClick = () => {
        // blockRef.current.children[0].innerText = "text";
        setName("Текст");
        ref.current.style.width = "150px";
        ref.current.style.height = "80px";
    };
    return (
          <CollapseWrapper title="Упражнение">
              <p className="mt-3">
                  У вас есть блок, у которого заданы ширина и высота. Добавьте
                  кнопку, при нажатии которой изменятся следующие свойства:
              </p>
              <ul>
                  <li>Изменится содержимое блока на &quot;text&quot;</li>
                  <li>высота и ширина станут равны 150 и 80 соответственно</li>
              </ul>
              <div
                    ref={ref}
                    onClick={handleClick}
                    className="bg-primary d-flex flex-row justify-content-center align-items-center rounded btn"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
              >
                  <small>{name}</small>
              </div>
          </CollapseWrapper>
    );
};

export default UseRefExercise;
