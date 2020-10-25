import { Resume } from "../interfaces/resume";
import { Job } from "../interfaces/job";

export const GetResume = () => {
    return fetch("/api/v1/resume/1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(json => {
            try {
                let body = json.body;
                let resume: Resume = {
                    resumeId: body.resumeId,
                    userId: body.userId,
                    personalInformation: {
                        name: body.name,
                        email: body.email,
                        linkedIn: body.linkedIn,
                        personalSummary: body.personalSummary
                    },
                    jobs: getJobsData(body.jobs)
                };
                return resume;
            } catch {
                console.log("resume data could not be parsed");
            }
        });
};

const getJobsData = (data: any) => {
    return data.map((job: { startDate: any; endDate: any; organisation: any; position: any; description: any; achievements: any; image: any; }) => {
        return {
            period: getJobPeriod(job.startDate, job.endDate),
            organisation: job.organisation,
            position: job.position,
            description: getJobDescription(job.description),
            achievements: job.achievements,
            image: job.image
        };
    });
};

const getJobDescription = (description: any) => {
    if (description.length < 1) return null;
    let array: string[] = [];
    let paragraph = "";
    Object.keys(description).forEach(key => {
        let line = description[key];
        if (line !== "U+000A") {
            paragraph = paragraph.concat(" ", ` ${line}`);
        } else {
            array.push(paragraph);
            paragraph = "";
        }
    });
    array.push(paragraph);
    return array;
};

const getJobPeriod = (start: any, end: any) => {
    const dateFormatter = new Intl.DateTimeFormat("default", { month: "short" });
    let startDate = start ? new Date(Date.parse(start)) : null;
    let endDate = end ? new Date(Date.parse(end)) : null;
    let startBlock = startDate ? `${dateFormatter.format(startDate.getMonth())} ${startDate.getFullYear()}` : null;
    let endBlock = startDate ? `${dateFormatter.format(endDate.getMonth())} ${endDate.getFullYear()}` : null;
    return startDate ? `${startBlock} - ${endBlock} ` : `${endBlock} `;
};
