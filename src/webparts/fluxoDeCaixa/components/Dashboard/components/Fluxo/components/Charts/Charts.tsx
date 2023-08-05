import * as React from 'react';
import { IChartProps } from './IChartsProps';
import { VictoryChart, VictoryPie, VictoryTooltip, VictoryLegend } from 'victory';

const ChartReceita: React.FunctionComponent<IChartProps> = (props) => {

    return (
        <React.Fragment>
            <VictoryPie
                padAngle={2}
                innerRadius={100}
                data={props.data}
                colorScale={["#00A86B", "#F4364C"]}
                animate={{ duration: 1000 }}
                labelComponent={
                    <VictoryTooltip
                        style={{ fill: "#fff" }}
                        flyoutStyle={{ fill: "rgba(0, 0, 0, 0.75)", stroke: "transparent" }}
                    />
                }
            />
        </React.Fragment>
    )

}

export default ChartReceita