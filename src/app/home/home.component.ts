import { Component, OnInit } from '@angular/core';
import {GalleryComponent} from '../gallery'
import {CategoriesComponent} from '../categories'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [GalleryComponent, CategoriesComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
