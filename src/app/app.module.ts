import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { IngresoComponent } from './paginas/ingreso/ingreso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './paginas/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'ingreso',
    component: IngresoComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
];

@NgModule({
  declarations: [AppComponent, FooterComponent, MenuComponent, RegistroComponent, IngresoComponent, PerfilComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes),ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
