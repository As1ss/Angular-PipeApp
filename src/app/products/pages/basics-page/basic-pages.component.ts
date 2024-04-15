import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {

  public nameLower:string="alexis";
  public nameUpper:string="ALEXIS";
  public nameTitle:string="aLeXiS lOpeZ";


  public customDate:Date = new Date();

}
