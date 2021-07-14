import {AfterViewInit, Component, OnChanges, OnInit,} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { HelloForm } from './ReactScript';
import HelloForm from "./ReactScript"
import HelloFormProps from "./ReactScript"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit{
  title = 'RATestAngular';
  model: Person = {
    personName: ''
};


  public rootId = 'hello-form-root';
  private hasViewLoaded = false;

  ngOnChanges() {
    this.renderComponent();
  }

  ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    if(!this.hasViewLoaded){return}
  }

  props props: HelloFormProps = {
    this.model.personName
  };

  ngOnInit(): void {
  }

  ReactDOM.render{
    React.createElement(HelloForm, props)
  };
}

export interface Person{
  personName: string;
}
