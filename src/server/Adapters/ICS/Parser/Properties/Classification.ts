import Property from "../Property";
import {Parameters} from "../../Parameters";

export default class Classification extends Property<string | 'PUBLIC' | 'PRIVATE' | 'CONFIDENTIAL', {}> {
    public readonly key = 'CLASS';
}