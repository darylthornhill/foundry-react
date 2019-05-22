import * as actions from './ToastActions';

export interface IToastItem {
    id: string;
    type: 'info';
    message: string;
    title: string;
}

interface IActionPayload {
    type: string;
    payload: {
        toast: IToastItem;
    };
}

/**
 * Set up state
 * @param {*} state
 * @param {*} action
 */
export default (
    state = {
        toastList: []
    },
    action: IActionPayload
) => {
    switch (action.type) {
        case actions.CREATE_TOAST: {
            let toastList: IToastItem[] = state.toastList.slice(0);
            toastList.push(action.payload.toast);

            return {
                ...state,
                toastList
            };
        }
        case actions.DELETE_TOAST: {
            let toasts: IToastItem[] = state.toastList.slice(0);
            let index = toasts.findIndex((x) => x.id == action.payload.toast.id);

            if (index > -1) {
                toasts.splice(index, 1);
            }

            return {
                ...state,
                toastList: toasts
            };
        }
    }
    return state;
};
