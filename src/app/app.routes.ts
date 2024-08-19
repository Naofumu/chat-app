import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    {
        path: 'auth', component: AuthComponent,
    },
    {
        path: 'message', component: ChatComponent,
    },
    {
        path: '',
        redirectTo: '/auth', pathMatch: 'full'
    },
];
