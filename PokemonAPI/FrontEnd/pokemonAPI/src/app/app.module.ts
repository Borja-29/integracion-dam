import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './pokemon/pokemon.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PokemonPrimeraGenComponent } from './pokemon-primera-gen/pokemon-primera-gen.component';
import { PokemonSegundaGenComponent } from './pokemon-segunda-gen/pokemon-segunda-gen.component';
import { PokemonTerceraGenComponent } from './pokemon-tercera-gen/pokemon-tercera-gen.component';
import { PokemonCuartaGenComponent } from './pokemon-cuarta-gen/pokemon-cuarta-gen.component';
import { PokemonQuintaGenComponent } from './pokemon-quinta-gen/pokemon-quinta-gen.component';
import { PokemonSextaGenComponent } from './pokemon-sexta-gen/pokemon-sexta-gen.component';
import { PokemonSeptimaGenComponent } from './pokemon-septima-gen/pokemon-septima-gen.component';
import { PokemonOctavaGenComponent } from './pokemon-octava-gen/pokemon-octava-gen.component';
import { PokemonNovenaGenComponent } from './pokemon-novena-gen/pokemon-novena-gen.component';

const routes: Routes = [
  {path: '', redirectTo: '/pokemon/primeraGeneracion', pathMatch: 'full'},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokemon/primeraGeneracion', component: PokemonPrimeraGenComponent},
  {path: 'pokemon/segundaGeneracion', component: PokemonSegundaGenComponent},
  {path: 'pokemon/terceraGeneracion', component: PokemonTerceraGenComponent},
  {path: 'pokemon/cuartaGeneracion', component: PokemonCuartaGenComponent},
  {path: 'pokemon/quintaGeneracion', component: PokemonQuintaGenComponent},
  {path: 'pokemon/sextaGeneracion', component: PokemonSextaGenComponent},
  {path: 'pokemon/septimaGeneracion', component: PokemonSeptimaGenComponent},
  {path: 'pokemon/octavaGeneracion', component: PokemonOctavaGenComponent},
  {path: 'pokemon/novenaGeneracion', component: PokemonNovenaGenComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonComponent,
    PokemonPrimeraGenComponent,
    PokemonSegundaGenComponent,
    PokemonTerceraGenComponent,
    PokemonCuartaGenComponent,
    PokemonQuintaGenComponent,
    PokemonSextaGenComponent,
    PokemonSeptimaGenComponent,
    PokemonOctavaGenComponent,
    PokemonNovenaGenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
