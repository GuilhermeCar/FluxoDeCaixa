import * as React from 'react';
import ChartReceita from "./components/Charts/Charts";
import { makeResetStyles, tokens } from '@fluentui/react-components';
import { VictoryLegend } from 'victory';

const useStackClassName = makeResetStyles({
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingHorizontalS,
    marginTop: tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadow8Brand,
    height: "200px",
    width: "500px"
  });

const Fluxo: React.FunctionComponent = () => {

    const data = [
        { x: "Entrada", y: 35 },
        { x: "Saida", y: 40 },
    ]

    return (
        <div className={useStackClassName()}> 
            <div style={{ width: "50%", height: "100%"}}>
                <ChartReceita data={data}/>
            </div>
            <div style={{ width: "45%", height: 200 }}>
                <VictoryLegend
                    orientation="vertical"
                    symbolSpacer={5}
                    gutter={20}
                    data={[
                        { name: "Entrada", symbol: { fill: "#00A86B" } }, 
                        { name: "Saída", symbol: { fill: "#F4364C" } }
                    ]}
                />
            </div>
        </div>
    );

}

export default Fluxo