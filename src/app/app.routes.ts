import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'demo1', loadComponent: () => import('./shared/feature/demo1/demo1.component'), 
        data: { title: 'Hello Demo 1'}
    },
    { path: 'demo2', loadComponent: () => import('./shared/feature/demo2/demo2.component') },
    { path: 'uikit', loadComponent: () => import('./shared/feature/uikit/uikit.component'),
        children:[
        { path: 'accordion', loadComponent: () => import('./shared/feature/uikit/accordion-demo.component') },
        { path: 'alert', loadComponent: () => import('././shared/feature/uikit/alert-demo.component') },
        { path: 'dropdown', loadComponent: () => import('./shared/feature/uikit/dropdown-demo.component') },
        { path: 'phone', loadComponent: () => import('./shared/feature/uikit/phone-demo.component') },
        { path: 'timeline', loadComponent: () => import('./shared/feature/uikit/timeline-demo.component') },
    ]
     },
    { path: 'demo3', loadComponent: () => import('./shared/feature/demo3/demo3.component') },
    { path: 'product/:productId', loadComponent: () => import('./shared/feature/product/product.component') },

    // {path: '', component: Demo1Component},
    { path: '', redirectTo: 'demo1', pathMatch: 'full'},



];
