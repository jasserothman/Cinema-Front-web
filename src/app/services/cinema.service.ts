import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host="http://localhost:8080";
  public Cinemas;

  constructor(private http: HttpClient) {   }
  public getVilles(){
    return this.http.get(this.host+"/villes");
  }

  getCinemas(v){
  return this.http.get(v._links.cinemas.href)

  }
  getSalles(c){
    return this.http.get(c.l_inks.salles.href)
  }
  getProjections(salle){
    let url=salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1")
  }
}
