import { Directive,ElementRef,HostListener} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private element : ElementRef) { }

  @HostListener("mouseenter")
  mouseEnter(){
    this.changeColor("red");
  }

  @HostListener("mouseleave")
  mouseLeave(){
    this.changeColor(null);
  }

  
 

  changeColor(color:any){
    this.element.nativeElement.style.color = color;
  }

}
