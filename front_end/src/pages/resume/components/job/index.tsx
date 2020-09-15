import * as React from "react";
import ResumeBlock, { ResumeBlockType } from "../resumeDetailBlock";
import Heading, { HeadingLevel } from "../heading";
import List, { ListType } from "../list";
import { EducationItem, EducationInstitution, Job, JobOrganisation, ImageDetail } from "../../../../interfaces";
import { getJobsMock } from "../../../../serviceMocks/jobs";

import { returnGearLogo } from "../../../../staticAssets/gearLogoSvg";

export const renderJobAndImage = (image: ImageDetail, children: (classes: string[]) => JSX.Element) => {
    let classes: string[] = [];
    if (image) {
        classes.push("inlineBlock");
        let imageBlockClasses = [...classes, "resumeJobImage"];
        return (
            <div className="flexRowSpaceBetween">
                <ResumeBlock blockType={ResumeBlockType.section} classes={imageBlockClasses}>{image.imageAlt !== "Gear logo" ? <img alt={image.imageAlt} src={image.imageUrl} /> : returnGearLogo()}</ResumeBlock>
                {children(classes)}
            </div>);
    } else {
        return (children(classes));
    }

}

export const renderJobBlock = (organisation: JobOrganisation, position: string, description: string[], achievements: string[], classes: string[]) => {
    classes.push("resumeJobBlock");
    return (
        <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={classes} key={position}>
            <Heading level={HeadingLevel.h4} value={`${organisation.name}, ${organisation.location}`} uppercase={false} classes={["ralewayTitle"]} />
            <Heading level={HeadingLevel.h4} value={position} uppercase={true} classes={["jobDescription"]} />
            {description && description?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
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

export const renderJobBlocks = () => {
    let jobsArray = getJobsMock();
    return (jobsArray.map(({ period, organisation, position, description, achievements, image }) => (
        <div className="flexColumn" key={`${period}${position}`}>
            <hr />
            <ResumeBlock blockType={ResumeBlockType.section} classes={["resumeJobPeriodHeader"]}>
                <Heading level={HeadingLevel.h5} value={period} uppercase={false} />
            </ResumeBlock>
            {renderJobAndImage(image, (classes: string[]) => renderJobBlock(organisation, position, description, achievements, classes))}

        </div>
    )));
}
