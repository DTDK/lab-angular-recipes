import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoodsService {

BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getFoods(): Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
    .toPromise()
    .then((result: Response) => result.json())
  }

  getFood(paquitaId): Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/dishes/${paquitaId}`)
      .toPromise()
      .then((result: Response) => result.json())
  }

  getIngredients(){
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .toPromise()
      .then((result: Response) => result.json())
  }

}
