import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { User } from 'src/app/modelos/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  nameForm!: string;
  contraseniaForm!:string;
  
  @Output()
  enviarFormEvent: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }


  enviarForm(formulario:NgForm){
    this.enviarFormEvent.emit(new User (
      formulario.form.value.name,
      formulario.form.value.contrasenia
    ))

  }
}
