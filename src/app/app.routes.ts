import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'auth', component: AuthComponent,
    },
    {
        path: 'chat', component: ChatComponent,
    },
    {
        path: '',
        redirectTo: '/auth', pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
