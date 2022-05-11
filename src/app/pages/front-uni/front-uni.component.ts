import {AfterViewInit, Component, OnInit} from '@angular/core';
import {University} from '../../university';
import {UniServiceService} from '../../Service/uni-service.service';
import {UniRequest} from '../../uni-request';
import noUiSlider from "nouislider";
import { countries } from 'src/app/country-data-store';

@Component({
  selector: 'app-front-uni',
  templateUrl: './front-uni.component.html',
  styleUrls: ['./front-uni.component.scss']
})
export class FrontUniComponent implements OnInit {

  listUniversity!: University[]
  university!: University;
  score!:any;
  rate: boolean = false;
  EditUni:University
  public countries:any = countries



  pageNumber:any = 0;
  pageSize:any = 4;
  SortBy:any;
  Type:any = "ASC";
  DefaultSort:any = "universityName";

  NumberOfElements:number;
  pagination = Array;


  constructor(private uniService: UniServiceService) { }

  ngOnInit(): void {


    this.getAllUniversityFront();
    //this.Sort(this.DefaultSort, this.Type);
    //this.getAllUniversityFront();




    this.university = {
      score: null,
      idUniversityOffer:null,
      universityName: null,
      location: null,
      duration: null,
      tuitionFee: null,
      startDate: null,
      type: null,
      domain: null,
      language: null,
      image:null,
      learnType:null,
      code:null
    }
    this.EditUni = {
      score: null,
      idUniversityOffer:null,
      universityName: null,
      location: null,
      duration: null,
      tuitionFee: null,
      startDate: null,
      type: null,
      domain: null,
      language: null,
      image:null,
      learnType:null,
      code:null
    }


  }

  getAllUniversityFront()
  {

    this.uniService.getAllUniversity().subscribe((res) => {
      this.listUniversity = res
      this.listUniversity.forEach(x => (this.getRating(x.idUniversityOffer)))
      this.listUniversity.forEach(x => x.code = (countries.find(z => z.name == x.location).code).toLowerCase())
      this.NumberOfElements = Math.ceil((this.listUniversity.length)/4)
      console.log(this.listUniversity.length)
      console.log(this.NumberOfElements)
      this.Sort(this.DefaultSort, this.Type);
    })

  }




  getRating(idUniversity: any)
  {
    return this.uniService.Rating(idUniversity).subscribe((res) => {
     this.listUniversity.forEach((x) => {
       if (x.idUniversityOffer === idUniversity){
         if(isNaN(res as number))
         {
           x.score = 0
         }
         else
         {
           //(Math.round(res * 100) / 100).toFixed(2);
           x.score = res
           x.score = (Math.round(x.score * 100) / 100).toFixed(2);
         }

       }
     })
    })
  }

  RateUniOff(score: any)
  {

    let id = this.EditUni.idUniversityOffer

    console.log(this.EditUni.idUniversityOffer)
    this.uniService.RateUni(id, score).subscribe(() => this.getAllUniversityFront())
    console.log(score)
    console.log(id)
    this.EditUni.idUniversityOffer = null;

  }

  FindUni(idUniversityOffer : any){
    console.log(idUniversityOffer)
    this.rate = true;
    this.EditUni = this.listUniversity.find(x => x.idUniversityOffer === idUniversityOffer)
    console.log(this.EditUni.idUniversityOffer)
  }

  Sort(SortBy:any,Type:any)
  {
    this.Type = Type;
    this.SortBy = SortBy;
    this.uniService.Sort(this.pageNumber,this.pageSize,SortBy,Type).subscribe((res) => {
      this.listUniversity = res
      this.listUniversity.forEach(x => this.getRating(x.idUniversityOffer))
      this.listUniversity.forEach(x => x.code = (countries.find(z => z.name == x.location).code).toLowerCase())
      //this.NumberOfElements = Math.ceil((this.listUniversity.length)/4)
      console.log(this.listUniversity.length)
      console.log(this.NumberOfElements)

    })
  }

  PaginationEngine(page:any)
  {
    if(this.pageNumber != page)
    {
      this.pageNumber = page;
      this.Sort(this.SortBy,this.Type);
      console.log(this.Type)
      console.log(this.SortBy)
      console.log(this.pageNumber)
      console.log(this.pageSize)

    }
    else
    {
      this.Sort(this.SortBy,this.Type)
      console.log(this.Type)
      console.log(this.SortBy)
      console.log(this.pageNumber)
      console.log(this.pageSize)

    }
  }










}
