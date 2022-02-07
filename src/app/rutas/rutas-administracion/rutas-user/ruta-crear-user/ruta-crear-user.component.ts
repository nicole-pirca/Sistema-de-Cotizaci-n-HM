import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelos/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-ruta-crear-user',
  templateUrl: './ruta-crear-user.component.html',
  styleUrls: ['./ruta-crear-user.component.css']
})
export class RutaCrearUserComponent implements OnInit {

  constructor(private readonly _userService: UserService,) { }

  ngOnInit(): void {
  }

  addUser(user: User) {
    this._userService.addUser(user).subscribe(() => {
      console.log('REGISTRADO',user);
    }, error => { console.error('ERROR', error) });
  }

}
