import { PersonaService } from './../../services/persona.service';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  @ViewChild('btnClose', {static: true}) btnClose: ElementRef; // Sacado de Domini Code para simular la función de un botón.

  constructor(private servicio : PersonaService) { } // Inyección de dependencias.

  aYnPattern = "^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{1,24}[\s]*)+$"; 

  ngOnInit() {
  }

  onEditPersona(personaForm : NgForm) : void { // Método para lograr editar el registro seleccionado (adaptado de la aplicación 'BookStore').
    this.servicio.updatePerson(personaForm.value).subscribe(data => { // Suscribimos ya que updatePerson es un observable.
      window.location.reload();
    })
   personaForm.resetForm(); // Resetear los campos del formulario.
    this.btnClose.nativeElement.click(); // Evento 'click' asignado al botón nuevo.
  }

}
