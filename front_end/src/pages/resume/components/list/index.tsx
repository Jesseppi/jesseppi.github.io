import * as React from "react";

enum ListType {
    unordered,
    ordered
}

interface ListProps {
    listType: ListType;
    listItems: any[];
    itemClasses?: string[];
    listClasses?: string[];
}

class List extends React.Component<ListProps> {

    constructor(props: ListProps) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }

    renderItems() {
        return (
            this.props.listItems.map((item, index) => {
                return (<li key={index}>{item}</li>);
            })
        );
    }

    render() {
        let itemClasses: string[] = [];
        let listClasses: string[] = [];
        if (this.props.itemClasses !== undefined) {
            this.props.itemClasses.map((className: string) => {
                itemClasses.push(className);
            });
        }

        if (this.props.listClasses !== undefined) {
            this.props.listClasses.map((className: string) => {
                listClasses.push(className);
            });
        }
        return (
            <div>
                {this.props.listType === ListType.unordered &&
                    <ul className={listClasses.join(" ")}>
                        {this.renderItems()}
                    </ul>
                }
                {this.props.listType === ListType.ordered &&
                    <ol className={listClasses.join(" ")}>
                        {this.renderItems()}
                    </ol>
                }
            </div>
        );
    }
}

export default List;
export { ListType };
