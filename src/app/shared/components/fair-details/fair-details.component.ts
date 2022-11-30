import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { mainArray } from '../../model/model';
import { MainArrayService } from '../../services/main-array.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  obj!:mainArray|undefined;
  id: string= '62f109714936110009fa61cc';
  constructor(private mainArrayService: MainArrayService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(
    (myParams:Params)=>{
      this.id = myParams['id']
      this.obj = this.mainArrayService.getSingleObj(this.id)
    }
    )
    this.router.navigate(['/fair-list', this.id])
  }

}
