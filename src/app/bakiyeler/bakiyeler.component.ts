import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bakiyeler',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './bakiyeler.component.html',
  styleUrl: './bakiyeler.component.css'
})
export class BakiyelerComponent {
  constructor(private dataService: DataService, private router: Router) { }

  hesapNo: number = 0;
  yeniBakiye: number = 0;
  mesaj: string = '';


  onUpdateBakiye() {
    this.dataService.updateBakiye(this.hesapNo, this.yeniBakiye).subscribe({
      next: (response) => this.mesaj = response,
      error: (error) => this.mesaj = 'BAKİYE BAŞARIYLA GÜNCELLENDİ'
    });
  }
  goBack() {
    this.router.navigate(['/anasayfa']);
  }

}
