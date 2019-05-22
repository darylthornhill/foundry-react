import * as React from 'react';
import ToastList from './components/ToastList';

const addToast = (type: 'success' | 'error' | 'warning', message: string | JSX.Element) => {};

// switch this over to context api.
export default {
    component: () => <ToastList />
};
