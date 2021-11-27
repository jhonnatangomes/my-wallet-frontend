import { LineStyle, DateAndDescription, Value } from './linesStyle';
import dayjs from 'dayjs';

export default function Line({ entries }) {
    const { date, description, value } = entries;
    const valueString = value.toString().replace('-', '').replace('.', ',');
    return (
        <LineStyle>
            <DateAndDescription>
                <span>{dayjs(date).format('DD/MM')}</span>
                <span>{description}</span>
            </DateAndDescription>
            <Value positive={value > 0}>{valueString}</Value>
        </LineStyle>
    );
}
