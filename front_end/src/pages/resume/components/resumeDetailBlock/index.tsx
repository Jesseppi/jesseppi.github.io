import * as React from "react";

enum ResumeBlockType {
    detail,
    section
}

interface ResumeBlockProps {
    blockType: ResumeBlockType;
    rightJustifiedBlock?: boolean;
    classes?: string[];
}

export const ResumeBlock: React.FunctionComponent<ResumeBlockProps> = ({ blockType, rightJustifiedBlock = false, classes, children }) => {

    let classNames: string[] = [];

    if (blockType === ResumeBlockType.detail) classNames.push("resumeDetailBlock");
    if (blockType === ResumeBlockType.section) classNames.push("resumeSectionBlock");
    if (!rightJustifiedBlock) classNames.push("leftContent");
    if (rightJustifiedBlock) classNames.push("rightContent");

    if (classes !== undefined) {
        classes.map((className: string) => {
            classNames.push(className);
        });
    }
    return (

        <div className={classNames.join(" ")}>
            {children}
        </div>
    );
};

export default ResumeBlock;
export { ResumeBlockType };
