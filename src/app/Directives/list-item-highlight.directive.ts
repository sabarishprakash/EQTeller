import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appListItemHighlight]'
})
export class ListItemHighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'border-color', 'teal');
    this.renderer.addClass(this.eleRef.nativeElement, 'borderColour');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#00338E');
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', '#00338E');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#00338E');
  }
}
