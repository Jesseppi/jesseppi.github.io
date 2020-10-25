import { EducationItem, EducationInstitution } from "../pages/resume";

function getEducationHistory(): EducationItem[] {
    let educationArray: EducationItem[] = [
        {
            institution: {
                location: "Brisbane, QLD",
                institution: "Queensland University of Technology"
            },
            certification: "Bachelor of Information Technology with Distinction",
            gpa: "6.5",
            period: "2013 - 2015",
            image : {
                url: "https://media-exp1.licdn.com/dms/image/C560BAQHfZJ-ruroCLw/company-logo_100_100/0?e=1596067200&v=beta&t=PM3OW3YJR_EhzVWfCyVQ9wvhWQBYqe1srL-kOEA9csQ",
                altText: "QUT logo"
            }
        },
        {
            institution: {
                location: "Brisbane, QLD",
                institution: "Shillington College"
            },
            certification: "Certificate Iv in Design",
            period: "2009",
            image:
            {
                url: "https://media-exp1.licdn.com/dms/image/C4D0BAQFqqsMczoSTUg/company-logo_100_100/0?e=1596067200&v=beta&t=duv93nPZ5DFo4bDXPX2R4lCF_O0FJISOesxH3gv5moc",
                altText: "Shillington Education logo"
            }
        },
        {
            institution: {
                location: "Brisbane, QLD",
                institution: "Queensland University of Technology"
            },
            certification: "Bachelor of Business (Accounting / Professional Accounting)",
            gpa: "5.25",
            period: "2005 - 2008",
            image: {
                url: "https://media-exp1.licdn.com/dms/image/C560BAQHfZJ-ruroCLw/company-logo_100_100/0?e=1596067200&v=beta&t=PM3OW3YJR_EhzVWfCyVQ9wvhWQBYqe1srL-kOEA9csQ",
                altText: "QUT logo"
            }
        },
    ];
    return educationArray;
}

export { getEducationHistory };
