import { RouteComponentProps } from "react-router-dom";
import React, { Fragment } from 'react';
import { fSetParamA } from "../Module/SampleModule/Action";
import { connect, ConnectedProps } from 'react-redux';
import { StoreStateI } from "../Module/Store/Store";

const mapState = (state: StoreStateI) => ({
    nParamA: state.SampleModule.nParamA,
});

export const mapDispatchToProps = {
    fSetParamA: fSetParamA,
}

/**
 * Типы для редакса
 */
const connector = connect(mapState, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsI = PropsFromRedux & {}

export interface StateI { }

/**
 * Индексная страница
 */
class SamplePage extends React.Component<PropsI, StateI> {


    componentDidMount() {
        console.log(this.props);

    }

    render() {
        return (
            <Fragment>
                <div>{this.props.nParamA}</div>
                <button onClick={() => this.props.fSetParamA(10)}>Нажать</button>
            </Fragment>
        )
    }
}


export default connector(SamplePage);