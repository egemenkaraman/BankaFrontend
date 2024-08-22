import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { bankaEntity } from '../bankaEntity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hesaplar',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './hesaplar.component.html',
  styleUrl: './hesaplar.component.css'
})
export class HesaplarComponent implements OnInit{
  kullanicilar: bankaEntity[] = [];
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe(
      (data: bankaEntity[]) => {
        this.kullanicilar = data;
        console.log(data);
      

      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/anasayfa']);
  }
}