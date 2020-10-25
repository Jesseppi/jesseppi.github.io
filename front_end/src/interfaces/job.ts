import { ImageDetail } from "./image";

export interface Job {
    period: string;
    organisation: JobOrganisation;
    position: string;
    description: string[];
    achievements?: string[];
}

export interface Location {
    state?: string;
    city?: string;
    country?: string;
}

export interface JobOrganisation {
    name: string;
    location: Location;
    logo?: ImageDetail;
}
