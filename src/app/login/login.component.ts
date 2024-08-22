import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginStatus: string = '';

  constructor(private dataService: DataService, private router: Router) { }
  login() {
    this.dataService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login response:', response);  // Yanıtı konsola yazdır
        if (response === 'Login Success') {
          this.loginStatus = response;
          this.router.navigate(['/anasayfa']); 
        } else {
          this.loginStatus = 'KULLANICI ADI VEYA ŞİFRE HATALI';
          console.log('Login failed: Response did not indicate success.');
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginStatus = 'Login Failed';
        console.log('Error details:', err);  // Hata detaylarını konsola yazdır
      }
    });
  }
  
}