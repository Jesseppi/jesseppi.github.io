import * as React from "react";
import { getEducationHistory } from "../../../../serviceMocks/education";
import { returnGearLogo } from "../../../../staticAssets/gearLogoSvg";
import Heading, { HeadingLevel } from "../heading";

import ResumeBlock, { ResumeBlockType } from "../resumeDetailBlock";

export const renderEducationBlocks = () => {
    let educationArray = getEducationHistory();
    let classes: string[] = [];
    classes.push("inlineBlock");
    let imageBlockClasses = [...classes, "resumeJobImage"];
    return (educationArray.map(({ period, gpa, certification, institution, image }) => (
        <div className="flexColumn" key={`${period}${institution}`} >
            <ResumeBlock blockType={ResumeBlockType.section}>
                <Heading level={HeadingLevel.h5} value={period} uppercase={false} />
            </ResumeBlock>
            <div className="flexRowSpaceBetween">
                <ResumeBlock blockType={ResumeBlockType.section} classes={imageBlockClasses}>{image.altText !== "Gear logo" ? <img alt={image.altText} src={image.url} /> : returnGearLogo()}</ResumeBlock>
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock", "oneHundredPercentViewWidth"]}>
                    <Heading level={HeadingLevel.h4} value={`${institution.institution}, ${institution.location}`} uppercase={false} classes={["ralewayTitle"]} />
                    <Heading level={HeadingLevel.h4} value={certification} uppercase={true} />
                    {gpa && <Heading level={HeadingLevel.h4} value={`GPA: ${gpa}`} uppercase={true} />}
                </ResumeBlock>
            </div>
        </div>)
    ));
}