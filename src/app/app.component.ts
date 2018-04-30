import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from '../dominio/Personagem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  personagens: Personagem[] = [];

  ngOnInit(): void {
    this.getPersonagens();
  }
  constructor(private http: HttpClient){}

  getPersonagens(){
    this.http.get("https://rickandmortyapi.com/api/character/")
      .subscribe(retorno => {
        if(retorno.results){
          this.personagens = retorno.results;
        }else {
          this.personagens = [];
        }
      })
  }

}
