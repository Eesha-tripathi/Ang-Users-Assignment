import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() hoverColor: string = "yellow";
  constructor(private eleRef: ElementRef) { 
    //eleRef.nativeElement.style.backgroundColor='blue';
  }
  ngOnInit(): void
  {
    fetch('').then(response=>response.json).then(data=> console.log(data));
  }

  setbgColor(color: string)
  {
    this.eleRef.nativeElement.style.backgroundColor=color;
  }
  @HostListener('mouseenter')
  onmouseenter()
  {
    this.setbgColor(this.hoverColor);
  }
  @HostListener('mouseleave')
  onmouseleave()
  {
    this.setbgColor("white");
  }
  
}
