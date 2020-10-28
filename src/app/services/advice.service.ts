import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdviceDto} from '../models/advice.dto';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  public getRandomAdvice(): Observable<AdviceDto> {
    return this.http.get<AdviceDto>(`https://api.adviceslip.com/advice`);
  }
}
