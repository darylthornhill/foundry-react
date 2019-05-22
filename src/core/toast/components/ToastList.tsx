import * as React from 'react';
import Transition from 'react-addons-css-transition-group';

import { IToastItem } from '../ToastReducer';

import ToastItem from './ToastItem.js';

export interface IToastItem {
    id: string;
    type: 'info';
    message: string;
    title: string;
}

interface state {
    toastList: IToastItem[];
}

export default class ToastList extends React.Component<any, state> {
    constructor(props) {
        super(props);

        this.state = {
            toastList: []
        };
    }

    /*
     * Render
     */
    render() {
        return (
            <div className="toast-container">
                <Transition component="div" transitionName="_a_toast-pop" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {this.props.toastList.map((toast, i) => (
                        <ToastItem
                            key={i}
                            id={toast.id}
                            type={toast.type}
                            title={toast.title}
                            message={toast.message}
                            destroyCallback={this.props.deleteToast}
                        />
                    ))}
                </Transition>
            </div>
        );
    }
}
