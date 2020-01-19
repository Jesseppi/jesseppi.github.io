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
                imageUrl: "https://media-exp1.licdn.com/dms/image/C560BAQHfZJ-ruroCLw/company-logo_100_100/0?e=1587600000&v=beta&t=Kz559YWI591UzPXL2DroGQpEk6mwFROQVfuxKd61dog",
                imageAlt: "QUT logo"
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
                imageUrl: "https://media-exp1.licdn.com/dms/image/C4D0BAQFqqsMczoSTUg/company-logo_100_100/0?e=1587600000&v=beta&t=lr_-uzqOlgIYiFs0Qd5LcVWVZ6iOv_2uzMtNg8ix-G4",
                imageAlt: "Shillington Education logo"
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
                imageUrl: "https://media-exp1.licdn.com/dms/image/C560BAQHfZJ-ruroCLw/company-logo_100_100/0?e=1587600000&v=beta&t=Kz559YWI591UzPXL2DroGQpEk6mwFROQVfuxKd61dog",
                imageAlt: "QUT logo"
            }
        },
    ];
    return educationArray;
}

export { getEducationHistory };
