import * as React from "react";
import ResumeBlock, { ResumeBlockType } from "../resumeDetailBlock";
import Heading, { HeadingLevel } from "../heading";
import List, { ListType } from "../list";
import { Job, JobOrganisation, ImageDetail } from "../../../../interfaces";
import { getJobsMock } from "../../../../serviceMocks/jobs";

import { returnGearLogo } from "../../../../staticAssets/gearLogoSvg";

export const renderJobAndImage = (image: ImageDetail, children: (classes: string[]) => JSX.Element) => {
    let classes: string[] = [];
    if (image) {
        classes.push("inlineBlock");
        let imageBlockClasses = [...classes, "resumeJobImage"];
        return (
            <div className="flexRowSpaceBetween">
                <ResumeBlock
                    blockType={ResumeBlockType.section}
                    classes={imageBlockClasses}>
                    {image.imageAlt !== "Gear logo"
                        ? <img alt={image.imageAlt} src={image.imageUrl} />
                        : returnGearLogo()}
                </ResumeBlock>
                {children(classes)}
            </div>);
    } else {
        return (children(classes));
    }
};

export const renderJobBlock = (organisation: JobOrganisation, position: string, description: string[], achievements: string[], classes: string[]) => {
    classes.push("resumeJobBlock");
    classes.push("inlineBlock");
    return (
        <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={classes ?? []} key={position ?? null}>
            <Heading
                level={HeadingLevel.h4}
                value={`${organisation?.name}${organisation?.location?.city ? `, ${organisation?.location?.city}` : ""}${organisation?.location?.state ? `, ${organisation?.location?.state}` : ""}`}
                uppercase={false}
                classes={["ralewayTitle"]} />
            <Heading level={HeadingLevel.h4} value={position ?? null} uppercase={true} classes={["jobDescription"]} />
            {/* {description && description?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))} */}
            {getDescriptionParagraphs(description)}
            {achievements &&
                <div>
                    <Heading level={HeadingLevel.h4} value="Achievements" uppercase={true} />
                    <List listType={ListType.unordered} listItems={achievements} />
                </div>
            }
        </ResumeBlock>
    );
};

export const getDescriptionParagraphs = (description: string[]): JSX.Element[] => {
    {
        if (description.length < 1) return null;
        let array: JSX.Element[]  = [];
        let paragraph = "";
        description.forEach((line, index) => {
            if (line !== "") {
                paragraph = paragraph.concat(" ", ` ${line}`);
            } else {
                array.push(<p key={index}>{paragraph}</p>);
            }
        });
        return array;
    }
};

export const renderJobBlocks = (jobs: Job[]) => {
    return (jobs.map(({ period, organisation, position, description, achievements, image }) => (
        <div className="flexColumn" key={`${period}${position}`}>
            <hr />
            <ResumeBlock blockType={ResumeBlockType.section} classes={["resumeJobPeriodHeader"]}>
                <Heading level={HeadingLevel.h5} value={period} uppercase={false} />
            </ResumeBlock>
            {/* {renderJobAndImage(image, (classes: string[]) => renderJobBlock(organisation, position, description, achievements, classes))} */}
            {renderJobBlock(organisation, position, description, achievements, [])}

        </div>
    )));
};
