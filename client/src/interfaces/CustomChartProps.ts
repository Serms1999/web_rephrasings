import {IChartData} from "./ChartData";

export interface ICustomChartProps {
    data: IChartData[],
    clickHandlers: (() => void)[]
}