 import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  // @HostBinding('class') styleClass;
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private rendered: Renderer2) {}

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    // if (!this.isOpen) {
    //   this.open();
    // } else {
    //   this.close();
    // }
    // this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  // private close() {
  //   this.removeClass('open');
  // }
  //
  // private open() {
  //   this.addClass('open');
  // }
  //
  // private removeClass(className: string) {
  //   this.rendered.removeClass(this.elRef.nativeElement, className);
  // }
  //
  // private addClass(className: string) {
  //   this.rendered.addClass(this.elRef.nativeElement, className);
  // }
}
