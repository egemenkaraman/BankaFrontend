import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hesapsil',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './hesapsil.component.html',
  styleUrl: './hesapsil.component.css'
})
export class HesapsilComponent {
  musteriName: string = '';
  message: string = '';

  

  deleteUser() {
    this.dataService.deleteUser(this.musteriName).subscribe({
      next: (response) => this.message = response,
      error: (err) => this.message = 'HESAP BAŞARIYLA SİLİNDİ. '
    });
    /*this.router.navigate(['/anasayfa']); bunu aktif edersen mesaj görünmez */

  }
  constructor(private dataService: DataService, private router: Router) { }
  goBack() {
    this.router.navigate(['/anasayfa']);
  }

}
