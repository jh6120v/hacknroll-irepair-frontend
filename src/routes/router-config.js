import { lazy } from 'react';
import { waitingRouteComponent } from '../commons/utils';
import Chat from './chat';

const IRepair = lazy(() => import('./i-repair'));
const Register = lazy(() => import('./register'));
const Pay = lazy(() => import('./pay'));

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
        component: Chat,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/register',
        component: waitingRouteComponent(Register),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/pay',
        component: waitingRouteComponent(Pay),
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
