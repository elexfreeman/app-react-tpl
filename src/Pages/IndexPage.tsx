import { RouteComponentProps } from "react-router-dom";
import React from 'react';

export interface IndexPagePropsI { }

export interface IndexPageStateI { }

/**
 * Индексная страница
 */
export class IndexPage extends React.Component<RouteComponentProps<IndexPagePropsI>, IndexPageStateI> {

    constructor(props: RouteComponentProps<IndexPagePropsI>) {
        super(props);
        this.state = {};
    }



    public render() {
        return (
            <div className="container">
                IndexPage
            </div>
        )
    }

}
