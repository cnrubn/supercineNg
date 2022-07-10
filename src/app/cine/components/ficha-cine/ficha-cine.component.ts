import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/cine-interfaces';

@Component({
  selector: 'app-ficha-cine',
  templateUrl: './ficha-cine.component.html',
  styleUrls: ['./ficha-cine.component.css']
})
export class FichaCineComponent implements OnInit {

  @Input() ficha!: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
