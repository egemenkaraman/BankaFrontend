import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { bankaEntity } from '../bankaEntity';

@Component({
  selector: 'app-hesapekle',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './hesapekle.component.html',
  styleUrl: './hesapekle.component.css'
})
export class HesapekleComponent implements OnInit {
  banka!: bankaEntity;
  userForm: FormGroup; 

  constructor(private fb: FormBuilder,private dataService: DataService, private router: Router) {
    this.userForm = this.fb.group({
      musteriHesapNo: ['', Validators.required],
      musteriName: ['', Validators.required],
      musteriSurname: ['', Validators.required],
      musteriBakiye: ['', Validators.required],
      musteriAge: ['', Validators.required],
      musteriTcNo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.onSubmit();
  }
  goBack() {
    this.router.navigate(['/anasayfa']);
  }




  onSubmit() {
    if (this.userForm.valid) {
      const banka: bankaEntity = this.userForm.value;
      this.dataService.addUser(banka).subscribe({
        next: (response) => {
          console.log('User added successfully', response);
          this.router.navigate(['/anasayfa']);

        },
        error: (error) => {
          console.error('Error adding user', error);
        }
      });
    }
  }



}
