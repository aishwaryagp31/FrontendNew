import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes,RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes =[
  { path:'',component:LoginFormComponent},
  // { path:'',redirectTo:'app-login-form', pathMatch:'full'},
  { path:'app-login-form',component: LoginFormComponent},
  { path:'app-register-form', component:RegisterFormComponent},
  { path:'app-ticket-form',component:TicketFormComponent},
  { path:'app-ticket',component:TicketComponent},
  { path:'app-ticket-detail/:id',component:TicketDetailComponent}
  
 ]

 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TicketComponent,
    TicketFormComponent,
    TicketDetailComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
