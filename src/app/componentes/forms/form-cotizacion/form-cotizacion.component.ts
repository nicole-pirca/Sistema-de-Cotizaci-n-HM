import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cotizador } from 'src/app/modelos/cotizacion';

interface Evento {
  value:string;
  viewValue: string;
} 
interface Lugar {
  value:string;
  viewValue: string;
}

@Component({
  selector: 'app-form-cotizacion',
  templateUrl: './form-cotizacion.component.html',
  styleUrls: ['./form-cotizacion.component.css']
})
export class FormCotizacionComponent implements OnInit {

  

  @Input()
  cotizadorEdit!: Cotizador;

  @Output()
  enviarFormEvent: EventEmitter<Cotizador> = new EventEmitter<Cotizador>();

  eventos: Evento[] = [ {value: 'bodas', viewValue: 'Bodas'},
                        {value: 'bautizo', viewValue: 'Bautizo'},
                        {value: '15 años', viewValue: '15 Años'},
                        {value: 'grado', viewValue: 'Grado'},
                        {value: 'otro', viewValue: 'Otro'}];


  lugares: Lugar[] = [ {value: 'domicilio', viewValue: 'Domicilio'},
                        {value: 'salones', viewValue: 'Salones'},
                        {value: 'haciendas', viewValue: 'Haciendas'},
                        {value: 'hogares', viewValue: 'Hogares'},
                        {value: 'otro', viewValue: 'Otro'}];

/* Variables del formulario */

  tipoEventoForm!: string;
  lugarEventoForm!:string;
  fechaEventoForm!: string;
  numPersonasForm!: number;
  nombreForm!: string;
  telefonoForm!: string;
  correoForm!: string;
  cuidadForm!: string;
  mensajeForm!: string;



  constructor() { }

  ngOnInit(): void {
    if(this.cotizadorEdit){
      this.llenarForm();
    }
  }

  enviarForm(formulario:NgForm){
    this.enviarFormEvent.emit(
      new Cotizador(
        formulario.form.value.tipoEvento,
        formulario.form.value.lugaEvento,
        this.convert(formulario.form.value.fechaEvento),
        formulario.form.value.numPersonas,
        formulario.form.value.nombre,
        formulario.form.value.telefono,
        formulario.form.value.correo,
        formulario.form.value.cuidad,
        formulario.form.value.mensaje,
      )
      
    );
  }
  llenarForm(){
    this.tipoEventoForm = this.cotizadorEdit.tipoEvento;
    this.lugarEventoForm = this.cotizadorEdit.lugaEvento;
    this.fechaEventoForm = this.convert(this.cotizadorEdit.fechaEvento);
    this.numPersonasForm = this.cotizadorEdit.numPersonas;
    this.nombreForm = this.cotizadorEdit.nombre;
    this.telefonoForm = this.cotizadorEdit.telefono;
    this.correoForm = this.cotizadorEdit.correo;
    this.cuidadForm = this.cotizadorEdit.cuidad;
    this.mensajeForm = this.cotizadorEdit.mensaje;
  }

  convert(fecha: string) {
    var date = new Date(fecha),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

}
