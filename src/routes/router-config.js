import { lazy } from 'react';
import { waitingRouteComponent } from '../commons/utils';

const IRepair = lazy(() => import('./i-repair'));
const Chat = lazy(() => import('./chat'));

const DEFAULT_SCENE_CONFIG = {
    enter: 'page-fade-in',
    exit: 'page-fade-out'
};

export const RouterConfig = [
    {
        path: '/',
        component: waitingRouteComponent(IRepair),
        exact: true
    },
    {
        path: '/chat',
        component: waitingRouteComponent(Chat),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    }
];

export const getSceneConfig = (location) => {
    const matchedRoute = RouterConfig.find((config) => new RegExp(`^${config.path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};
