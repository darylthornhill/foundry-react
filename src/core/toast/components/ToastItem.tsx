import * as React from 'react';

export interface IToastItemProps {
    type: 'info';
    className: string;
    id: string | number;
    title: string;
    message: string;
    destroyCallback?: Function;
}

export default class ToastItem extends React.Component<IToastItemProps, {}> {
    static defaultProps = {
        type: 'info',
        className: ''
    };

    private toastTimer?: number = undefined;
    private toastTimeout: number = 10000;

    constructor(props) {
        super(props);
    }

    /*
     * Lifecycle events
     */
    componentDidMount() {
        this.toastTimer = window.setTimeout(() => {
            this.destroyToast();
        }, this.toastTimeout);
    }

    /*
     * Logic
     */
    destroyToast = () => {
        if (typeof this.props.destroyCallback === 'function') {
            this.props.destroyCallback(this.props.id);
        }
    };

    /*
     * User-driven events
     * @prefix handle_
     */
    handle_destroy = (e) => {
        e.preventDefault();

        window.clearTimeout(this.toastTimer);

        this.destroyToast();
    };

    render() {
        return (
            <div key="toast" className={'toast toast_' + this.props.type + ' ' + this.props.className}>
                <h2 className="toast-title type-label">{this.props.title ? this.props.title : this.props.type}</h2>
                <div className="toast_body type-body">{this.props.message}</div>
                <svg viewBox="0 0 32 32" width="18" height="18" className="toast-close" onClick={this.handle_destroy}>
                    <use xlinkHref={'#icon-cross'} />
                </svg>
            </div>
        );
    }
}
