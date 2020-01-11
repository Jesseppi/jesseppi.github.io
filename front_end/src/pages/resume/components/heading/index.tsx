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
}

class Heading extends React.Component<HeadingProps> {
    static defaultProps: Partial<HeadingProps> = {
        uppercase: false
    };

    constructor(props: HeadingProps) {
        super(props);

        this.renderHeaderHtml = this.renderHeaderHtml.bind(this);
    }

    renderHeaderHtml(props: HeadingProps) {
        switch (props.level) {
            case HeadingLevel.h1:
                return(
                    <h1>{props.uppercase ? props.value.toUpperCase() : props.value }</h1>
                );
                break;
            case HeadingLevel.h2:
                return (
                    <h2>{props.uppercase ? props.value.toUpperCase() : props.value}</h2>
                );
                break;
            case HeadingLevel.h3:
                return (
                    <h3>{props.uppercase ? props.value.toUpperCase() : props.value}</h3>
                );
                break;
            case HeadingLevel.h4:
                return (
                    <h4>{props.uppercase ? props.value.toUpperCase() : props.value}</h4>
                );
                break;
            case HeadingLevel.h5:
                return (
                    <h5>{props.uppercase ? props.value.toUpperCase() : props.value}</h5>
                );
                break;
            default:
                return (
                    <h1>{props.value}</h1>
                );
                break;
        }
    }

    render() {
        return (
            this.renderHeaderHtml(this.props)
        );
    }
}

export default Heading;
export { HeadingLevel };
