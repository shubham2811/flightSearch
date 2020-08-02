import { Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
    },
];

export const RoutingModule = RouterModule.forRoot(routes);
