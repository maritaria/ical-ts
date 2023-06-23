
import {lines2tree} from "icalts";
import ICSParser from "../src/server/Adapters/ICS/ICSParser";
import {readSample} from "./util/readSample";
import {sortedJSONKeysReplacer} from "./util/sortedJSONKeysReplacer";


describe('Parse ICS to JSON file', () => {
    const samples = [
        'blank_description.ics',
        'blank_line_end.ics',
        'blank_line_mid.ics',
        'daily_recur.ics',
        'day_long_recur_yearly.ics',
        'duration_instead_of_dtend.ics',
        'forced_types.ics',
        'google_birthday.ics',
        'minimal.ics',
        'multiple_rrules.ics',
        'only_dtstart_date.ics',
        'only_dtstart_time.ics',
        'parserv2.ics',
        'recur_instances.ics',
        'recur_instances_finite.ics',
        'utc_negative_zero.ics'
    ];

    const parser = new ICSParser();
    it.each(samples)('Parses ICS and matches JSON snapshot `%s`', async sample => {
        const sampleData = await readSample(sample);
    });
});