import * as React from "react";
import { IBodyProps } from "./IBodyProps";
import FluxoDeCaixa from "../FluxoCaixa/FluxoDeCaixa";

const Body: React.FunctionComponent<IBodyProps> = (props) => {

    const { tabSelected } = props;

    return (
        <div>
            { tabSelected === "TabListFluxoCaixa" && <FluxoDeCaixa /> }
        </div>
    )

}

export default Body