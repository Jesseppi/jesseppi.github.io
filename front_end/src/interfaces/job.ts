import { ImageDetail } from "./image";

export interface Job {
    period: string;
    organisation: JobOrganisation;
    position: string;
    description: string[];
    achievements?: string[];
    image?: ImageDetail;
}

export interface JobOrganisation {
    name: string;
    location: string;
}


