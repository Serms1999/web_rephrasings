import {useCallback, useState} from "react";
import {Cell, Pie, PieChart, Sector} from "recharts";
import {ICustomChartProps} from "../interfaces/CustomChartProps";
import "../css/CustomChart.css";
import {COLORS} from "./ExamEnd";

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill={fill}
            >{value}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        </g>
    );
};

const CustomChart = ({ data, clickHandlers }: ICustomChartProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        // @ts-ignore
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    const onPieClick = useCallback(
        // @ts-ignore
        (_, index) => {
            clickHandlers[index]();
        },
        [clickHandlers]
    )

    return (
        <PieChart className="pieChart" width={400} height={400}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
                onClick={onPieClick}
            >
                {
                    data.map((_, index) =>
                        (<Cell key={index} fill={index === 0 ? COLORS.CORRECT : COLORS.INCORRECT} />
                        )
                    )
                }
            </Pie>
        </PieChart>
    );
}

export default CustomChart;
