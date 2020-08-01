import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Diego Prystupczuk';
  nombreRaro: string = 'diEgO PRysTupczuK';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje: number = 0.234;
  salario:number= 53000.30;
  fecha:Date = new Date();
  activar:boolean = true;

  idioma:string = 'es';
  videoUrl : string = 'https://www.youtube.com/embed/id-li947Vgw';

  valorPromesa = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
      resolve('llego la data');
    },4500);
  });

  cancion = {
    nombre: 'El Final Es En Donde Partí',
    artista: 'La Renga',
    disco:'Despedazado por mil partes',
    links:{
      letra:'https://www.letras.com/la-renga/360290/',
      youtube: 'https://www.youtube.com/watch?v=Ffd4mxYicbs',
      spotify:''
    }
  }
}
