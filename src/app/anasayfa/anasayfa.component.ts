import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css'
})
export class AnasayfaComponent {



  constructor(private dataService: DataService, private router: Router) { }

  goHesaplar(){
    this.router.navigate(['/hesapgörüntüle']);

  }

  logout() {
      this.router.navigate(['']);

  }

  goHesapekle(){
    this.router.navigate(['/hesapekle']);
  }

  goHesapsil(){
    this.router.navigate(['/hesapsil']);

  }
  goBakiye(){
    this.router.navigate(['/bakiyeler']);
  }


}
