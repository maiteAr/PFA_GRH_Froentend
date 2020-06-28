import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FonctionListComponent } from './fonction-list/fonction-list.component';
import { CreateFonctionComponent } from './create-fonction/create-fonction.component';
import { FonctionDetailsComponent } from './fonction-details/fonction-details.component';
import { FonctionServiceService } from './fonction-service.service';
import { UpdateFonctionComponent } from './update-fonction/update-fonction.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { CreateAbsenceComponent } from './create-absence/create-absence.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';
import { AbsenceDetailsComponent } from './absence-details/absence-details.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';
import { PermissionDetailsComponent } from './permission-details/permission-details.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { ChartsModule } from 'ng2-charts';
import { NoteListComponent } from './note-list/note-list.component';
import { NotreFormComponent } from './notre-form/notre-form.component';
import { EchellonFormComponent } from './echellon-form/echellon-form.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JoursListComponent } from './jours-list/jours-list.component';
import { JoursFormComponent } from './jours-form/jours-form.component';
import { RetraiteFormComponent } from './retraite-form/retraite-form.component';
import { RetraiteListComponent } from './retraite-list/retraite-list.component';
import { JoursUpdateComponent } from './jours-update/jours-update.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    FonctionListComponent,
    CreateFonctionComponent,
    FonctionDetailsComponent,
    UpdateFonctionComponent,
    CalendarComponent,
    DashboardComponent,
    ServiceListComponent,
    CreateServiceComponent,
    UpdateServiceComponent,
    ServiceDetailsComponent,
    AbsenceListComponent,
    DemandeListComponent,
    AnnonceListComponent,
    PermissionListComponent,
    CreatePermissionComponent,
    CreateAbsenceComponent,
    CreateDemandeComponent,
    CreateAnnonceComponent,
    AnnonceDetailsComponent,
    AbsenceDetailsComponent,
    DemandeDetailsComponent,
    PermissionDetailsComponent,
    UpdateAbsenceComponent,
    UpdateAnnonceComponent,
    OrganigrammeComponent,
    CreatePromotionComponent,
    UpdatePromotionComponent,
    PromotionListComponent,
    NoteListComponent,
    NotreFormComponent,
    EchellonFormComponent,
    JoursListComponent,
    JoursFormComponent,
    RetraiteFormComponent,
    RetraiteListComponent,
    JoursUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,UiSwitchModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,ChartsModule
  ],
  providers: [FonctionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
