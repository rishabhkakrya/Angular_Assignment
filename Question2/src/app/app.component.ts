import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { XComponent } from './x/x.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild("placeholder", { read: ViewContainerRef }) placeholder: ViewContainerRef;

  onClick() {
    const xCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      XComponent
    );
    const hostViewContainerRef = this.placeholder;
    //hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(xCmpFactory);
  }
}
