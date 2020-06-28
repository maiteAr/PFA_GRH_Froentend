import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateFonctionComponent } from './create-fonction/create-fonction.component';
import { FonctionDetailsComponent } from './fonction-details/fonction-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FonctionListComponent } from './fonction-list/fonction-list.component';
import { UpdateFonctionComponent } from './update-fonction/update-fonction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { CreateAbsenceComponent } from './create-absence/create-absence.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { AbsenceDetailsComponent } from './absence-details/absence-details.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { PermissionDetailsComponent } from './permission-details/permission-details.component';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { JoursListComponent } from './jours-list/jours-list.component';
import { JoursFormComponent } from './jours-form/jours-form.component';
import { JoursUpdateComponent } from './jours-update/jours-update.component';
import { RetraiteListComponent } from './retraite-list/retraite-list.component';
import { RetraiteFormComponent } from './retraite-form/retraite-form.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotreFormComponent } from './notre-form/notre-form.component';

const routes: Routes = [
  // { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addemployee', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'fonctions', component: FonctionListComponent },
  { path: 'addfonction', component: CreateFonctionComponent },
  { path: 'fonctions/details/:id', component: FonctionDetailsComponent },
  { path: 'fonctions/update/:id', component: UpdateFonctionComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'addservice', component: CreateServiceComponent },
  { path: 'services/details/:id', component: ServiceDetailsComponent },
  { path: 'services/update/:id', component: UpdateServiceComponent },
  { path: '', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'absences', component: AbsenceListComponent },
  { path: 'addabsence', component: CreateAbsenceComponent },
  { path: 'absences/update/:id', component: UpdateAbsenceComponent },
  { path: 'absences/details/:id', component: AbsenceDetailsComponent },
  { path: 'demandes', component: DemandeListComponent },
  { path: 'adddemande', component: CreateDemandeComponent },
  { path: 'permissions', component: PermissionListComponent },
  { path: 'addpermission', component: CreatePermissionComponent },
  { path: 'organigramme', component: OrganigrammeComponent },
  { path: 'promotions', component: PromotionListComponent },
  { path: 'addpromotion', component: CreatePromotionComponent },
  { path: 'jour_feriers', component: JoursListComponent },
  { path: 'addjour_feriers', component: JoursFormComponent },
  { path: 'jour_feriers/update/:id', component: JoursUpdateComponent },
  { path: 'retraites', component: RetraiteListComponent },
  { path: 'addretraite', component: RetraiteFormComponent },
  { path: 'notes', component: NoteListComponent },
  { path: 'addnote', component: NotreFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
