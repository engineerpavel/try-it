import { Component, OnInit } from '@angular/core';
import {AdviceService} from '../../services/advice.service';
import {Observable} from 'rxjs';
import {AdviceDto} from '../../models/advice.dto';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public advice: Observable<string>;

  constructor(private adviceService: AdviceService) { }

  ngOnInit(): void {
      this.advice = this.adviceService.getRandomAdvice().pipe(
        map((obj) => obj.slip.advice)
      );
  }

}
