import { LineContainer, DateAndDescription } from "./linesStyle";

export default function Lines({ entries }) {
    const { date, description, value } = entries;
    return (
        <LineContainer>
            <DateAndDescription>
                <span>{date}</span>
                <span>{description}</span>
            </DateAndDescription>
            <span>{value.slice(0, -2) + "," + value.slice(-2)}</span>
        </LineContainer>
    );
}
