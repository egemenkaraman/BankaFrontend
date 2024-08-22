import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HesaplarComponent } from './hesaplar/hesaplar.component';
import { HesapekleComponent } from './hesapekle/hesapekle.component';
import { HesapsilComponent } from './hesapsil/hesapsil.component';
import { BakiyelerComponent } from './bakiyeler/bakiyeler.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'anasayfa', component: AnasayfaComponent },
    { path: 'hesapgörüntüle', component: HesaplarComponent },
    { path: 'hesapekle', component: HesapekleComponent },
    { path: 'hesapsil', component: HesapsilComponent },
    { path: 'bakiyeler', component: BakiyelerComponent },


    { path: '**', redirectTo: '' }
];
