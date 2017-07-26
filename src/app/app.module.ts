    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';
    import { NgModule } from '@angular/core';
    import { AppRoutingModule } from './app-routing.module';
    import { MaterializeModule } from 'angular2-materialize';

    import { Angular2TokenService } from 'angular2-token';
    import {AuthService} from "./services/auth.service";
    import {AuthGuard} from "./guards/auth.guard";

    import { AppComponent } from './app.component';
    import { HomeComponent } from './home/home.component';
    import { ToolbarComponent } from './toolbar/toolbar.component';
    import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
    import { LoginFormComponent } from './login-form/login-form.component';
    import { RegisterFormComponent } from './register-form/register-form.component';
    import { AboutComponent } from './about/about.component';
    import { QuizComponent } from './quiz/quiz.component';
    import { FooterComponent } from './footer/footer.component';
import { MailingListFormComponent } from './mailing-list-form/mailing-list-form.component';

    @NgModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ToolbarComponent,
        AuthDialogComponent,
        LoginFormComponent,
        RegisterFormComponent,
        AboutComponent,
        QuizComponent,
        FooterComponent,
        MailingListFormComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterializeModule
        ],
      providers: [Angular2TokenService, AuthService, AuthGuard],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
