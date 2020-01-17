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
            period: "2013 - 2015"
        },
        {
            institution: {
                location: "Brisbane, QLD",
                institution: "Shillington College"
            },
            certification: "Certificate Iv in Design",
            period: "2009"
        },
        {
            institution: {
                location: "Brisbane, QLD",
                institution: "Queensland University of Technology"
            },
            certification: "Bachelor of Business (Accounting / Professional Accounting)",
            gpa: "5.25",
            period: "2005 - 2008"
        },
    ];
    return educationArray;
}

export { getEducationHistory };
