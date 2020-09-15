import * as React from "react";
import ResumeBlock, { ResumeBlockType } from "./components/resumeDetailBlock";
import Heading, { HeadingLevel } from "./components/heading";
import List, { ListType } from "./components/list";
import "./index.less";

import { EducationItem, EducationInstitution, Job, JobOrganisation, ImageDetail } from "../../interfaces";
import { technicalSkills } from "../../serviceMocks/technicalSkills";

import { renderJobBlocks } from "./components/job";
import { renderEducationBlocks } from "./components/education";
import { GetResume } from "../../services/ResumeService";

const ResumePage: React.FunctionComponent = () => {
    const [resumeData, setResumeData] = React.useState(null);

    React.useEffect(() => {
        GetResume().then(body => setResumeData(body));
    }, []);

    return (
        <div id="resumeContainer" className="mainContainer flexColumn">
            <div id="resumeTitle" className="rightContent oneHundredPercentViewWidth" >
                <Heading level={HeadingLevel.h1} value="Curruculum Vitae" uppercase={true} />
            </div>
            <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeDetailBlock", "resumePersonalDetails", "oneHundredPercentViewWidth"]}>
                <Heading level={HeadingLevel.h3} value="Jesse Cunningham-Creech" uppercase={true} classes={["nameTitle"]} />
                <div><Heading level={HeadingLevel.h3} value="E" uppercase={true} classes={["inlineBlock"]} /><Heading level={HeadingLevel.h3} value="hello@jessec.dev" uppercase={true} link="mailto:hello@jessec.dev" classes={["inlineBlock", "marginLeft20px"]} /></div>
                <Heading level={HeadingLevel.h3} value="www.linkedin.com/in/jesse-creech" uppercase={true} link="http://www.linkedin.com/in/jesse-creech" classes={["marginLeft32px"]} />
            </ResumeBlock>

            <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeCopyBlock"]}>
                <p>I am a full stack web developer with a good knowledge of core OO principles. I have extensive knowledge of the enterprise software development life cycle as well as previous expertise in front end UX design. I aspire to be a key member of a high performing development team, utilising the latest technologies and development practises. I look for opportunities that will challenge me so that I can continuously improve as a developer, whilst working on projects that I find fascinating.</p>
            </ResumeBlock>

            <ResumeBlock blockType={ResumeBlockType.section} classes={["sectionTitle"]} >
                <Heading level={HeadingLevel.h3} value="Technical Skills" uppercase={true} />
            </ResumeBlock>
            <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock", "oneHundredPercentViewWidth", "flexRow", "flexWrap"]}>
                {technicalSkills.map((skill, index) => (
                    <div className="resumeTechnicalSkillItem" key={index}>{`>> ${skill}`}</div>
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
};

export default ResumePage;
export { Job, EducationItem, EducationInstitution };
