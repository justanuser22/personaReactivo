import { Persona } from '../entidades/persona';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  public punteroPersona : Persona = { // Puntero para poder acceder a c/u de las variables (UTIL en el modal de 'editar').
  }

  miUrl: string = 'http://localhost:9000/api/v1/persona/'; // URL para poder conectarnos.

  getAllPersons() : Observable<Persona[]>  { // Método para traer todos los registros en nuestra base de datos.                                          
    try {                                    // Método implementado en 'persona.ts' de PersonaComponent.
      return this.http.get<Persona[]>(this.miUrl); // Uso del método get correspondiente a http.
    } catch (e) {
      console.log('ERROR', e);
    } 
  }

  getOnePerson(id: number) : Observable<Persona> { // Método para traer los registros de un determinada 'persona' (obviamente perteneciente a nuestra BD).
    try {                                          // Método implementado en 'edit-persona.ts'.
      return this.http.get<Persona>(this.miUrl + id); // Uso del método get correspondiente a http.
    } catch (e) {
      console.log('ERROR', e);
    }
   
  }

  addPerson(persona: Persona) : Observable<Persona>  { // Método para lograr meter nuevos valores y crear un nuevo registro.
    try {                                              // Método implementado en 'agregar-persona.ts'.
      return this.http.post<Persona>(this.miUrl, persona); // Uso del método post correspondiente a http.
    } catch (e) {
      console.log('ERROR', e);
    }
  
  }

  updatePerson(persona: Persona) : Observable<Persona> { // Método para actualizar los campos de un registro ya existente.
    try {                                                // Método implementado en 'edit-persona.ts'.
      let idPersona = persona.id; // Guardo el valor de la id en esta nueva variable.
      return this.http.put<Persona>(this.miUrl + idPersona,persona); // Uso del método put correspondiente a http.
    } catch (e) {
      console.log('ERROR', e);
    }
    
  }

  deletePerson(id: number) : Observable<any> { // Método para borrar registro/s ya existente/s. Método implementado en 'persona.ts'
    try {
      return this.http.delete(this.miUrl + id); // Uso del método delete correspondiente a http.
    } catch (e) {
      console.log('ERROR', e);
    }
    
  }
}

