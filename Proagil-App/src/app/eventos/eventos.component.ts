import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
//chama a função acima, retorna da api
  getEventos(){
    this.http.get('http://localhost:5000/api/values').subscribe(Response =>{
      this.eventos = Response;
    }, error=>{
      console.log(error);
    }    

    ) ;    
  }

}
