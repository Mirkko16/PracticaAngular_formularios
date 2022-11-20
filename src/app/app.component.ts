import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    nombre = 'Nombre...';
    apellido='Apellido...';
    direccion='Direccion...';
    telefono='Tel...';

    getNombre(nombre:string)
    {
      return nombre;
    }
    getApellido(apellido:string)
    {
      return apellido;
    }
    getDireccion(direccion:string)
    {
      return  direccion;
    }
    getTelefono(telefono:string)
    {
      return telefono;
    }

    


}
