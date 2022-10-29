import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import{Product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Angie';
  age = 18;
  img ='https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
 register = {
 name: '',
 email: '',
 password: ''
 }
 person = {
  name : 'Leticia',
  age :18,
  avatar :'https://www.w3schools.com/howto/img_avatar.png'

 }

 names: string[] = ['Angie','Andrea', 'Yuli', 'Paola'];
 newName = '';
 box = {
  width: 100,
  height: 100,
  background: 'red'
 };

  products: Product[] = [
    {
      name: 'Moda Europea',
      price: 565,
      image: './assets/img/1.jpg'
    },
    {
      name: 'Moda Estadounidense',
      price: 1002,
      image: './assets/img/2.jpg'
    },
    {
      name: 'Moda Colombiana',
      price: 1326,
      image: './assets/img/3.jpg'
    },
    {
      name: 'Moda Africana',
      price: 10002,
      image: './assets/img/4.jpg'
    },
    {
      name: 'Moda francesa',
      price: 10012,
      image: './assets/img/5.jpg'
    },
    {
      name: 'Moda italiana',
      price: 3002,
      image: './assets/img/6.jpg'
    }


  ]
 toggleButton(){
  this.btnDisabled = !this.btnDisabled;
 }
 increasAge(){
 this.person.age += 1;
 }
 onScroll (event: Event){
const element = event.target as HTMLElement;
console.log(element.scrollTop);
 }
 changeName(event:Event){
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
 }
 addName(){
  this.names.push(this.newName);
  this.newName= '';
 }
 deleteName(index: number){
  this.names.splice(index,1)

 }
 onRegister(){
  console.log(this.register)
 }
}
