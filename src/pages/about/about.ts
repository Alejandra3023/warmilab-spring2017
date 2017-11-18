import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

nombre: string = "Aleja Carrasco";
ocupacion: string = "Student";
edad: number = 16
adjetive: string = "universe"

datos: any = {
 nombre: "Aleja Carrasco",
 ocupacion: "student",
 adjetive: "universe",
 edad: 16

};

origen: string = "Lima, Peru";
email: string = "acarrascoalayo1@gmail.com";
telefono: number = 952876008;

personalinfo: any = {
origen: "Lima, Peru",
email: "acarrascoalayo1@gmail.com",
telefono: 952876008

};


  constructor(public navCtrl: NavController) {

  }

}
