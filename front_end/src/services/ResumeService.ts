import { Resume } from "../interfaces/resume";

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
                    jobs: body.jobs
                };
                return resume;
            } catch {
                console.log("resume data could not be parsed");
            }
        });
};
