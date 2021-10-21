import { Line, DateAndDescription, Value } from "./linesStyle";
import dayjs from "dayjs";

export default function Lines({ entries }) {
    const { date, description, value } = entries;
    const valueString = value.toString().replace("-", "");
    return (
        <Line>
            <DateAndDescription>
                <span>{dayjs(date).format("DD/MM")}</span>
                <span>{description}</span>
            </DateAndDescription>
            <Value positive={value > 0}>
                {valueString.slice(0, -2) + "," + valueString.slice(-2)}
            </Value>
        </Line>
    );
}
