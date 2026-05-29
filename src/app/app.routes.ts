import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Admin } from './admin/admin';
import { Dashboard } from './user/dashboard/dashboard';
import { TrainerList } from './user/trainers/trainer-list/trainer-list';
import { authGuard } from './auth/auth-guard';
import { userGuardGuard } from './user-guard-guard';
import { adminGuardGuard } from './admin-guard-guard';
import { Payment } from './user/payment/payment';
import { Unauthorized } from './unauthorized/unauthorized';
import { Plans } from './user/plans/plans';
import { Home } from './landing/home/home'
import { ClassBookingList } from './user/classes/class-booking-list/class-booking-list';
import { UserHome } from './user/user-home/user-home';
import { ClassAvailableList } from './user/classes/class-available-list/class-available-list';

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
      component: UserHome,
      canActivate : [authGuard,userGuardGuard],
      children:[
        {path:'',loadComponent:()=>import('./user/dashboard/dashboard').then(m=>m.Dashboard)},
        {path:'userdashboard',component:Dashboard},
        {path:'bookedClasses',component:ClassBookingList},
        {path:'availableClasses',component:ClassAvailableList},
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
{path:'classList',loadComponent:()=>import('./user/classes/class-available-list/class-available-list').then(m=>m.ClassAvailableList)},
{path:'classBookingList',loadComponent:()=>import('./user/classes/class-booking-list/class-booking-list').then(m=>m.ClassBookingList)},
{path:'paymentList',loadComponent:()=>import('./admin/payment/payment-list/payment-list').then(m=>m.PaymentList)},
{path:'attendance',loadComponent:()=>import('./admin/attendance/attendance').then(m=>m.Attendance)},
{path:'bookedClassList',loadComponent:()=>import('./admin/classes/class-booking-list/class-booking-list').then(m=>m.ClassBookingList)}

 ]
  /* loadComponent: () =>
    import('./admin/admin').then(m => m.Admin)
   }
     */
    }
]
