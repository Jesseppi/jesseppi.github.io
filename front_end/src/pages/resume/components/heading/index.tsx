import * as React from "react";

enum HeadingLevel {
    h1,
    h2,
    h3,
    h4,
    h5
}

interface HeadingProps {
    level: HeadingLevel;
    uppercase: boolean;
    value: string;
    link?: string;
    classes?: string[];
}

class Heading extends React.Component<HeadingProps> {
    static defaultProps: Partial<HeadingProps> = {
        uppercase: false
    };

    constructor(props: HeadingProps) {
        super(props);

        this.renderHeaderHtml = this.renderHeaderHtml.bind(this);
    }

    renderHeaderHtml(props: HeadingProps): JSX.Element {
        let classNames: string[] = [];
        if (this.props.classes !== undefined) {
            this.props.classes.map((className: string) => {
                classNames.push(className);
            });
        }

        let classesString = classNames.join(" ");

        switch (props.level) {
            case HeadingLevel.h1:
                return (
                    <h1 className={classesString}>{props.uppercase ? props.value.toUpperCase() : props.value}</h1>
                );
                break;
            case HeadingLevel.h2:
                return (
                    <h2 className={classesString}>{props.uppercase ? props.value.toUpperCase() : props.value}</h2>
                );
                break;
            case HeadingLevel.h3:
                return (
                    <h3 className={classesString}>{props.uppercase ? props.value.toUpperCase() : props.value}</h3>
                );
                break;
            case HeadingLevel.h4:
                return (
                    <h4 className={classesString}>{props.uppercase ? props.value.toUpperCase() : props.value}</h4>
                );
                break;
            case HeadingLevel.h5:
                return (
                    <h5 className={classesString}>{props.uppercase ? props.value.toUpperCase() : props.value}</h5>
                );
                break;
            default:
                return (
                    <h1 className={classesString}>{props.value}</h1>
                );
                break;
        }
    }

    renderHtml(props: HeadingProps): JSX.Element {
        if (props.link !== undefined) {
            return (
                <a href={this.props.link}>{this.renderHeaderHtml(props)}</a>
            );
        } else {
            return (this.renderHeaderHtml(props));
        }

    }

    render() {
        return (
            this.renderHtml(this.props)
        );
    }
}

export default Heading;
export { HeadingLevel };
