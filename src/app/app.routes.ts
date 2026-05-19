import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Admin } from './admin/admin';
import { Dashboard } from './user/dashboard/dashboard';
import { ClassList } from './user/classes/class-list';
import { TrainerList } from './user/trainers/trainer-list/trainer-list';
import { authGuard } from './auth/auth-guard';
import { userGuardGuard } from './user-guard-guard';
import { adminGuardGuard } from './admin-guard-guard';
import { Payment } from './user/payment/payment';
import { Unauthorized } from './unauthorized/unauthorized';
import { Plans } from './user/plans/plans';
import { Home } from './landing/home/home'

export const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home',component:Home},
  {path:'home',component:Home,},
   
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'userdashboard',component:Dashboard},
    {path:'unauthorized',component:Unauthorized},
    {
      path : 'user',
      component: Dashboard,
      canActivate : [authGuard,userGuardGuard],
      children:[
        {path:'classes',component:ClassList},
        {path:'trainers',component:TrainerList},
        {path:'payment',component:Payment},
        {path:'plans',component:Plans}
      ]
    },
    {
  path: 'admin',
  component:Admin,
  canActivate: [authGuard,adminGuardGuard],
   children:[
    {path:'',loadComponent:()=>import('./admin/admin-dashboard/admin-dashboard').then(m=>m.AdminDashboard)},
      {path:'adminDashboard',loadComponent:()=>import('./admin/admin-dashboard/admin-dashboard').then(m=>m.AdminDashboard)},
    {path:'memberAdd',loadComponent:()=>import('./admin/member/member-add/member-add').then(m=>m.MemberAdd)},
    {path:'memberList',loadComponent:()=>import('./admin/member/member-list/member-list').then(m=>m.MemberList)},
    {path:'trainerAdd',loadComponent:()=>import('./admin/trainer/trainer-create/trainer-create').then(m=>m.TrainerCreate)},
    {path:'trainerList',loadComponent:()=>import('./user/trainers/trainer-list/trainer-list').then(m=>m.TrainerList)},
{path:'classAdd',loadComponent:()=>import('./admin/classes/class-create').then(m=>m.ClassCreate)},
{path:'classList',loadComponent:()=>import('./user/classes/class-list').then(m=>m.ClassList)},
{path:'paymentList',loadComponent:()=>import('./admin/payment/payment-list/payment-list').then(m=>m.PaymentList)}

 ]
  /* loadComponent: () =>
    import('./admin/admin').then(m => m.Admin)
   }
     */
    }
]
