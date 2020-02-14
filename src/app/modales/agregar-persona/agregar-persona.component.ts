import { PersonaService } from './../../services/persona.service';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent implements OnInit {

  aYnPattern = "^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{1,24}[\s]*)+$"; // Pattern que nos servirá para validar nuestro formulario.
 

  createFormGroup() { // Método para crear nuestro formulario reactivo!
    return new FormGroup({ // Nuevo FormGroup...
      apellido: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.aYnPattern)
      ]),
      nombre: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.aYnPattern)
      ]),
      dni: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
       
      ])
    });
  }

   personaFrom: FormGroup; // Objeto del FormGroup


  constructor(private servicio : PersonaService) { // Inyección de dependencia.
    this.personaFrom = this.createFormGroup(); // Asignamos el objeto a este método.
   }


   ngOnInit() {
  }

   onSaveForm() { // Método para poder guardar en el modal los nuevos datos (siempre y cuando cumplan con las condiciones).
     this.servicio.addPerson(this.personaFrom.value).subscribe(data => {
      window.location.reload();
     })
   }

   limpiarModal() { // Resetea los campos del modal cuando queramos crear nuevamente otro registro.
     this.personaFrom.reset();
   }


  

  

}
