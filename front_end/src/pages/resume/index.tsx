import * as React from "react";
import ResumeBlock, { ResumeBlockType } from "./components/resumeDetailBlock";
import Heading, { HeadingLevel } from "./components/heading";
import List, { ListType } from "./components/list";
import "./index.less";

import { getJobsMock } from "../../serviceMocks/jobs";
import { getEducationHistory } from "../../serviceMocks/education";
import { returnGearLogo } from "../../staticAssets/gearLogoSvg";
import { technicalSkills } from "../../serviceMocks/technicalSkills";

interface JobOrganisation {
    name: string;
    location: string;
}

interface ImageDetail {
    imageUrl: string;
    imageAlt: string;
}

interface Job {
    period: string;
    organisation: JobOrganisation;
    position: string;
    description: string[];
    achievements?: string[];
    image?: ImageDetail;
}

interface EducationInstitution {
    institution: string;
    location: string;
}

interface EducationItem {
    institution: EducationInstitution;
    certification: string;
    gpa?: string;
    period: string;
    image?: ImageDetail;
}

function renderJobAndImage(image: ImageDetail, children: (classes: string[]) => JSX.Element) {
    let classes: string[] = [];
    if (image) {
        classes.push("inline");
        let imageBlockClasses = [...classes, "resumeJobImage"];
        return (
            <div className="flexRowSpaceBetween">
                <ResumeBlock blockType={ResumeBlockType.section} classes={imageBlockClasses}>{image.imageAlt !== "Gear logo" ? <img alt={image.imageAlt} src={image.imageUrl} /> : returnGearLogo() }</ResumeBlock>
                {children(classes)}
            </div>);
    } else {
        return (children(classes));
    }

}

function renderJobBlock(organisation: JobOrganisation, position: string, description: string[], achievements: string[], classes: string[]) {
    classes.push("resumeJobBlock");
    return (
        <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={classes} key={position}>
            <Heading level={HeadingLevel.h4} value={`${organisation.name}, ${organisation.location}`} uppercase={false} classes={["ralewayTitle"]} />
            <Heading level={HeadingLevel.h4} value={position} uppercase={true} classes={["jobDescription"]} />
            {description && description?.map(paragraph => (
                <p>{paragraph}</p>
            ))}
            {achievements &&
                <div>
                    <Heading level={HeadingLevel.h4} value="Achievements" uppercase={true} />
                    <List listType={ListType.unordered} listItems={achievements} />
                </div>
            }
        </ResumeBlock>
    );
}

function renderJobBlocks() {
    let jobsArray = getJobsMock();
    return (jobsArray.map(({ period, organisation, position, description, achievements, image }) => (
        <div className="flexColumn" key={`${period}${position}`}>
            <ResumeBlock blockType={ResumeBlockType.section}>
                <Heading level={HeadingLevel.h5} value={period} uppercase={false} />
            </ResumeBlock>
            {renderJobAndImage(image, (classes: string[]) => renderJobBlock(organisation, position, description, achievements, classes))}

        </div>
    )));
}

function renderEducationBlocks() {
    let educationArray = getEducationHistory();
    let classes: string[] = [];
    classes.push("inline");
    let imageBlockClasses = [...classes, "resumeJobImage"];
    return (educationArray.map(({ period, gpa, certification, institution,image }) => (
        <div className="flexColumn" key={`${period}${institution}`} >
            <ResumeBlock blockType={ResumeBlockType.section}>
                <Heading level={HeadingLevel.h5} value={period} uppercase={false} />
            </ResumeBlock>
            <div className="flexRowSpaceBetween">
                <ResumeBlock blockType={ResumeBlockType.section} classes={imageBlockClasses}>{image.imageAlt !== "Gear logo" ? <img alt={image.imageAlt} src={image.imageUrl} /> : returnGearLogo()}</ResumeBlock>
            <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock", "oneHundredPercentViewWidth"]}>
                <Heading level={HeadingLevel.h4} value={`${institution.institution}, ${institution.location}`} uppercase={false} classes={["ralewayTitle"]} />
                <Heading level={HeadingLevel.h4} value="Bachelor of Information Technology with Distinction" uppercase={true} />
                {gpa && <Heading level={HeadingLevel.h4} value={`GPA: ${gpa}`} uppercase={true} />}
            </ResumeBlock>
            </div>
        </div>)
    ));
}

class ResumePage extends React.Component {
    render() {
        return (
            <div id="resumeContainer" className="mainContainer flexColumn">
                <div id="resumeTitle" className="rightContent oneHundredPercentViewWidth" >
                    <Heading level={HeadingLevel.h1} value="Curruculum Vitae" uppercase={true} />
                </div>
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeDetailBlock", "resumePersonalDetails", "oneHundredPercentViewWidth"]}>
                    <Heading level={HeadingLevel.h3} value="Jesse Cunningham-Creech" uppercase={true} classes={["nameTitle"]} />
                    <div><Heading level={HeadingLevel.h3} value="M" uppercase={true} classes={["inline"]} /><Heading level={HeadingLevel.h3} value="0400 012 803" uppercase={true} classes={["inline", "marginLeft20px"]} /></div>
                    <div><Heading level={HeadingLevel.h3} value="E" uppercase={true} classes={["inline"]} /><Heading level={HeadingLevel.h3} value="jesse.creech@gmail.com" uppercase={true} link="mailto:jesse.creech@gmail.com" classes={["inline", "marginLeft20px"]} /></div>
                    <Heading level={HeadingLevel.h3} value="www.linkedin.com/in/jesse-creech" uppercase={true} link="http://www.linkedin.com/in/jesse-creech" classes={["marginLeft32px"]} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeCopyBlock"]}>
                    <p>I am a full stack web developer with a good knowledge of core OO principles. I have extensive knowledge of the enterprise software development life cycle as well as previous expertise in front end UX design. I aspire to be a key member of a high performing development team, utilising the latest technologies and development practises. I look for opportunities that will challenge me so that I can continuously improve as a developer, whilst working on projects that I find fascinating.</p>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section} classes={["sectionTitle"]} >
                    <Heading level={HeadingLevel.h3} value="Technical Skills" uppercase={true} />
                </ResumeBlock>
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock", "oneHundredPercentViewWidth", "flexRow", "flexWrap"]}>
                    {technicalSkills.map(skill => (
                        <div className="resumeTechnicalSkillItem">{`>> ${skill}`}</div>
                    ))}
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section} classes={["sectionTitle"]} >
                    <Heading level={HeadingLevel.h3} value="Employment" uppercase={true} />
                </ResumeBlock>

                {renderJobBlocks()}

                <ResumeBlock blockType={ResumeBlockType.section} classes={["sectionTitle"]}>
                    <Heading level={HeadingLevel.h3} value="Education" uppercase={true} />
                </ResumeBlock>

                {renderEducationBlocks()}
            </div >);
    }
}

export default ResumePage;
export { Job, EducationItem, EducationInstitution };
