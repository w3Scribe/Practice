/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './../app/__root'
import { Route as PageImport } from './../app/page'
import { Route as HomePageImport } from './../app/home/page'
import { Route as AboutPageImport } from './../app/about/page'

// Create/Update Routes

const PageRoute = PageImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HomePageRoute = HomePageImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any)

const AboutPageRoute = AboutPageImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof PageImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutPageImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomePageImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof PageRoute
  '/about': typeof AboutPageRoute
  '/home': typeof HomePageRoute
}

export interface FileRoutesByTo {
  '/': typeof PageRoute
  '/about': typeof AboutPageRoute
  '/home': typeof HomePageRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof PageRoute
  '/about/': typeof AboutPageRoute
  '/home/': typeof HomePageRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/home'
  id: '__root__' | '/' | '/about/' | '/home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  PageRoute: typeof PageRoute
  AboutPageRoute: typeof AboutPageRoute
  HomePageRoute: typeof HomePageRoute
}

const rootRouteChildren: RootRouteChildren = {
  PageRoute: PageRoute,
  AboutPageRoute: AboutPageRoute,
  HomePageRoute: HomePageRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about/",
        "/home/"
      ]
    },
    "/": {
      "filePath": "page.tsx"
    },
    "/about/": {
      "filePath": "about/page.tsx"
    },
    "/home/": {
      "filePath": "home/page.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
