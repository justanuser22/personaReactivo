import { PersonaService } from './../services/persona.service';
import { Persona } from './../entidades/persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[] = []; // Objeto de tipo array para lograr guardar los datos.

  constructor(private servicio: PersonaService, private router: Router) { // Inyecciones de dependencias.
    this.getAll(); // Llamo al método getAll().
    
  }

  ngOnInit() {
  }

  getAll() { // Este es el método que traerá todos los datos de los registros de la BD para luego alojarlos en la tabla.
   this.servicio.getAllPersons().subscribe((data)=> { // Como es un observable nos debemos de suscribir.
   this.personas = data;
   console.log(this.personas);
   });
  }

  delete(id: number) { // Para borrar...
  const opcion = confirm('¿Desea eliminar este registro?');
  if (opcion) {
    this.servicio.deletePerson(id).subscribe((data)=> { // Observable por lo tanto suscribimos.
      alert('Registro eliminado');
      window.location.reload();
    });
  } else {
    alert('Registro no eliminado');
  }
}

onPreUpdate(persona : Persona) { // Método que saqué de Domini Code para poder traer los datos de los campos de manera fácil.
  console.log('PERSONA' , persona);
  this.servicio.punteroPersona = Object.assign({}, persona); // Uso del método assign para poder alojar en los campos los datos ya existentes de la BD.
}
  



}
