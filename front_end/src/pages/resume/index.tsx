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
import { Resume } from "../../interfaces/resume";
import { PersonalInformation } from "../../interfaces/personalInformation";

const ResumePage: React.FunctionComponent = () => {
    const [resumeData, setResumeData] = React.useState<Resume>(null);

    React.useEffect(() => {
        GetResume().then((body: Resume) => setResumeData(body));
    }, []);

    const renderPersonalInformation = React.useMemo(() => {
        if (!resumeData?.personalInformation ?? null) return null;
        return getPersonalInformationContent(resumeData.personalInformation);
    }, [resumeData?.personalInformation]);

    const renderJobs = React.useMemo(() => {
        if (!resumeData?.jobs ?? null) return null;
        return renderJobBlocks(resumeData.jobs);
    }, [resumeData?.jobs]);

    return (
        <div id="resumeContainer" className="mainContainer flexColumn">
            <div id="resumeTitle" className="rightContent oneHundredPercentViewWidth" >
                <Heading level={HeadingLevel.h1} value="Curruculum Vitae" uppercase={true} />
            </div>
            {renderPersonalInformation}

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

            {renderJobs}

            <ResumeBlock blockType={ResumeBlockType.section} classes={["sectionTitle"]}>
                <Heading level={HeadingLevel.h3} value="Education" uppercase={true} />
            </ResumeBlock>

            {renderEducationBlocks()}
        </div >);
};

const getPersonalInformationContent = (personalInformation: PersonalInformation) => {
    return (
        <ResumeBlock blockType={ResumeBlockType.detail}
            rightJustifiedBlock={true}
            classes={["resumeDetailBlock",
                "resumePersonalDetails",
                "oneHundredPercentViewWidth"]}>
            <Heading
                level={HeadingLevel.h3}
                value={personalInformation.name}
                uppercase={true} classes={["nameTitle"]} />
            {personalInformation?.email && <div>
                <Heading
                    level={HeadingLevel.h3}
                    value="E"
                    uppercase={true}
                    classes={["inlineBlock"]} />
                <Heading
                    level={HeadingLevel.h3}
                    value={personalInformation.email}
                    uppercase={true}
                    link="mailto:hello@jessec.dev"
                    classes={["inlineBlock", "marginLeft20px"]} />
            </div>}
            {personalInformation?.linkedIn &&
                <Heading
                    level={HeadingLevel.h3}
                    value={personalInformation.linkedIn}
                    uppercase={true}
                    link={personalInformation.linkedIn}
                    classes={["marginLeft32px"]} />}
            {personalInformation?.personalSummary &&
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeCopyBlock"]}>
                    {personalInformation?.personalSummary.map(item => <p>{item}</p>)}
                </ResumeBlock>}
        </ResumeBlock>
    );
};

const getJobContent = (personalInformation: PersonalInformation) => {
    return (
        <ResumeBlock blockType={ResumeBlockType.detail}
            rightJustifiedBlock={true}
            classes={["resumeDetailBlock",
                "resumePersonalDetails",
                "oneHundredPercentViewWidth"]}>
            <Heading
                level={HeadingLevel.h3}
                value={personalInformation.name}
                uppercase={true} classes={["nameTitle"]} />
            {personalInformation?.email && <div>
                <Heading
                    level={HeadingLevel.h3}
                    value="E"
                    uppercase={true}
                    classes={["inlineBlock"]} />
                <Heading
                    level={HeadingLevel.h3}
                    value={personalInformation.email}
                    uppercase={true}
                    link="mailto:hello@jessec.dev"
                    classes={["inlineBlock", "marginLeft20px"]} />
            </div>}
            {personalInformation?.linkedIn &&
                <Heading
                    level={HeadingLevel.h3}
                    value={personalInformation.linkedIn}
                    uppercase={true}
                    link={personalInformation.linkedIn}
                    classes={["marginLeft32px"]} />}
            {personalInformation?.personalSummary &&
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeCopyBlock"]}>
                    {personalInformation?.personalSummary.map((item, index) => <p key={index}>{item}</p>)}
                </ResumeBlock>}
        </ResumeBlock>
    );
};

export default ResumePage;
export { Job, EducationItem, EducationInstitution };
