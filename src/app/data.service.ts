import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bankaEntity } from './bankaEntity';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASEurl = 'http://localhost:8080/api/v1';
  public hesapsilUrl = `${this.BASEurl}/delete`; 

  constructor(private http: HttpClient) {} 

login(username: string, password: string): Observable<string> {
  const loginUrl = `${this.BASEurl}/loginUser`; // BASEurl'in sonuna '/login' ekliyoruz
  return this.http.post<string>(loginUrl, { username, password }, { responseType: 'text' as 'json' });
}
getAllUsers(): Observable<bankaEntity[]> {
  const hesaplarURL = `${this.BASEurl}/kullanicilar`;
  return this.http.get<bankaEntity[]>(hesaplarURL);
}

addUser(banka: bankaEntity): Observable<bankaEntity> {
  const hesapekleUrl = `${this.BASEurl}/ekle`;
  return this.http.post<bankaEntity>(hesapekleUrl, banka);
}

deleteUser(musteriName: string): Observable<string> {
  const hesapsilUrl = `${this.BASEurl}/delete`;
  return this.http.post<string>(this.hesapsilUrl, null, {
    params: { musteriName }
  });
}

updateBakiye(hesapNo: number, yeniBakiye: number): Observable<string> {
  /*const bakiyeUrl = `${this.BASEurl}/updateBakiye`; */
  return this.http.get<string>(`${this.BASEurl}/updateBakiye/${hesapNo}?yeniBakiye=${yeniBakiye}`);
}

}
