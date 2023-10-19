import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: "/lazy-layout/*",
    to: "/lazy-layout/",
    Component: LazyLayout,
    name: "Lazy-Layout"
  },
  {
    path: "lazy2",
    to: "/lazy2",
    Component: NoLazy,
    name: "Lazy-2"
  },
]