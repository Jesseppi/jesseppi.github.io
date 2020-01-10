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

class ResumeBlock extends React.Component<ResumeBlockProps> {
    static defaultProps: Partial<ResumeBlockProps> = {
        rightJustifiedBlock: false
    };

    render() {
        let classNames: string[] = [];
        if (this.props.blockType === ResumeBlockType.detail) classNames.push("resumeDetailBlock");
        if (this.props.blockType === ResumeBlockType.section) classNames.push("resumeSectionBlock");
        if (!this.props.rightJustifiedBlock) classNames.push("leftContent");
        if (this.props.rightJustifiedBlock) classNames.push("rightContent");

        if (this.props.classes !== undefined) {
            this.props.classes.map((className: string) => {
                classNames.push(className);
            });
        }
        return (

            <div className={classNames.join(" ")}>
                {this.props.children}
            </div>

        );
    }
}

export default ResumeBlock;
export { ResumeBlockType };
