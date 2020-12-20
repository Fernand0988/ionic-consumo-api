import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // obterDados(): Promise<any> {
  //   // return this.http.get('https://api.spoonacular.com/food/wine/recommendation?wine=merlot&number=20&apiKey=ae33a073db18425fa9df11331978f12d').toPromise();
  //   return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/am/municipios`).toPromise();
  // }
  obterDados(): Promise<any> {
    // Acabou a cota, kkkkk
    // return this.http.get('https://api.spoonacular.com/food/wine/recommendation?wine=merlot&number=20&apiKey=ae33a073db18425fa9df11331978f12d').toPromise();
    // return this.http.get('https://api.spoonacular.com/food/wine/recommendation?wine=merlot&number=20&apiKey=55b2b3424cb2465aa2a4ce2277ca5e93').toPromise();
    return this.http.get('assets/json/data.json').toPromise();
  }
}
