import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import toolReducer from '../store';
import { Tool as ToolComponent, type ToolProps } from './Tool';

const store = configureStore({
    reducer: {
        tool: toolReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ToolWrapper(props: ToolProps) {
    return (
        <ReduxProvider store={store}>
            <ToolComponent {...props} />
        </ReduxProvider>
    );
}