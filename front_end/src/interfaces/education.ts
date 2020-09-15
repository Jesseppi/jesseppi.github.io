import { ImageDetail } from "./image";

export interface EducationInstitution {
    institution: string;
    location: string;
}

export interface EducationItem {
    institution: EducationInstitution;
    certification: string;
    gpa?: string;
    period: string;
    image?: ImageDetail;
}
