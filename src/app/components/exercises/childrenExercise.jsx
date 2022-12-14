import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const ChildrenExercise = () => {
    const FormComponent = ({ children }) => {
        return React.Children.map(children, (child, index) => {
            return (<>
                {index + 1}<Component/>
            </>);
        });
    };
    FormComponent.propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    };
    return (
          <CollapseWrapper title="Упражнение">
              <p className="mt-3">
                  У вас есть компоненты Списка. Вам необходимо к каждому из них
                  добавить порядковый номер, относительно того, как они
                  располагаются на странице. Вы можете использовать как{" "}
                  <code>React.Children.map</code> так и{" "}
                  <code>React.Children.toArray</code>
              </p>
              <Divider/>
              <FormComponent>
                  <Component/>
                  <Component/>
                  <Component/>
              </FormComponent>
          </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
