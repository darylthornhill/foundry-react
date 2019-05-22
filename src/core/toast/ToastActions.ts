export const CREATE_TOAST = 'CREATE_TOAST';
export const DELETE_TOAST = 'DELETE_TOAST';

export const createToast = (type, message, title): Function => {
    return (dispatch): void => {
        dispatch({
            type: CREATE_TOAST,
            payload: {
                toast: {
                    id: generateID(),
                    type,
                    message,
                    title
                }
            }
        });
    };
};

export const deleteToast = (id): Function => {
    return (dispatch): void => {
        dispatch({
            type: DELETE_TOAST,
            payload: {
                id
            }
        });
    };
};

const generateID = (): string => {
    function s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
