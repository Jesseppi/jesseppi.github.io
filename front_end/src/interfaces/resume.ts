import { PersonalInformation } from "./personalInformation";
import {Job} from "./job";

export interface Resume {
    userId?: number;
    resumeId?: number;
    personalInformation?: PersonalInformation;
    jobs?: Job[];
}
