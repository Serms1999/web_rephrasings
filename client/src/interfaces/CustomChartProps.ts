import {IChartData} from "./ChartData.ts";

export interface ICustomChartProps {
    data: IChartData[],
    clickHandlers: (() => void)[]
}