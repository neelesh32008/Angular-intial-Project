import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AuthGuard } from "./guards/auth.guard";
import { AppMainComponent } from "./layout/app.main.component";
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: "profile",
        loadChildren: () => import('./Profile/Profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
    ]
  },

  { path: "404", component: AppNotfoundComponent },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  { path: "**", redirectTo: "/404" }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
  scrollPositionRestoration: "enabled"
});
