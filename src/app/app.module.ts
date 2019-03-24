import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TaskManagerComponent } from './componentes/task-manager/task-manager.component';
import { TaskListComponent } from './componentes/task-manager/task-list/task-list.component';
import { TaskFormComponent } from './componentes/task-manager/task-form/task-form.component';
import { TaskDetailsComponent } from './componentes/task-manager/task-details/task-details.component';
import { TaskItemComponent } from './componentes/task-manager/task-list/task-item/task-item.component';
import { LoginComponent } from './componentes/login/login.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskManagerComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    TaskItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
