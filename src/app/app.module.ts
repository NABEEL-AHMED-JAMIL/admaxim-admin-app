import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}  from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatInputModule, MatListModule
 } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import{ItemFilter} from '../app/admin/item-filter';
import { Admin2Component } from './admin2/admin2.component';
import { Form4Component } from './form4/form4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragListComponent } from './drag-list/drag-list.component';
// import { ItemSearchComponent } from './item-search/item-search.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DynamicFormComponent } from '../app/dynamic-form/dynamic-form.component';
import { QuestionDynamicComponent } from './dynamic-form/question-dynamic.component';
import { ChildDynamicComponent } from './dynamic-form/child-dynamic.component';
import { TablePracticeComponent } from './table-practice/table-practice.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { APiComponent } from './api/api.component';

import {   fakeBackendProvider } from '../app/admin/fake-back-end';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor} from '../app/admin/JwtInterceptor';
const appRoutes: Routes = [
  {path: '',redirectTo:'/form4',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component:  AdminComponent},
  { path: 'admin2', component:  Admin2Component},
  { path: 'form4', component:  Form4Component},
  { path: 'dragdrop', component:  DragDropComponent},
  { path: 'draglist', component:  DragListComponent},
  {path: 'Dynamic',component:DynamicFormComponent},
  {path:'table',component:TablePracticeComponent},
  {path:'api',component:APiComponent},
  {path: "**",component:PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ItemFilter,
    Admin2Component,
    Form4Component,
    PageNotFoundComponent,
    DragDropComponent,
    DragListComponent,
    DynamicFormComponent,
    QuestionDynamicComponent,
    ChildDynamicComponent,
    TablePracticeComponent,
    APiComponent,
  
  ],
  imports: [
    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatListModule,
    DragDropModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
   
  ],
  
 
  exports:[
    MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    

    // provider used to create fake backend
    fakeBackendProvider


  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
