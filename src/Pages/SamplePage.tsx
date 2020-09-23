import { RouteComponentProps } from "react-router-dom";
import React from 'react';

export interface PropsI { }

export interface StateI { }

/**
 * Индексная страница
 */
export class SamplePage extends React.Component<RouteComponentProps<PropsI>, StateI> {

    constructor(props: RouteComponentProps<PropsI>) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className="container">
                SamplePage
            </div>
        )
    }

}
