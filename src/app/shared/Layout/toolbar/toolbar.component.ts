import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public productosCarrito = "10"
  constructor() { }

  ngOnInit() {
  }

}
