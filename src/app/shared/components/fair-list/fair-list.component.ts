import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mainArray } from '../../model/model';
import { MainArrayService } from '../../services/main-array.service';

@Component({
  selector: 'app-fair-list',
  templateUrl: './fair-list.component.html',
  styleUrls: ['./fair-list.component.scss']
})
export class FairListComponent implements OnInit {
  mainArray!:mainArray[]
  id: string = '62f109714936110009fa61cc'
  constructor(private mainArrayService: MainArrayService, private router : Router) { }

  ngOnInit(): void {
    this.mainArray = this.mainArrayService.getMainArray()
  }
  goToFairDetails(){
    // this.router.navigate(['/fairDetails', this.mainArrayService.getSingleObj(this.id)])
  }
}
