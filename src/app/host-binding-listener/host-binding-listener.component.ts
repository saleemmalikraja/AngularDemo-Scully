import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-host-binding-listener]',
  templateUrl: './host-binding-listener.component.html',
  styleUrls: ['./host-binding-listener.component.css']
})
export class HostBindingListenerComponent implements OnInit {
  possibleColors = [
    `red`, `green`, `blue`
  ];
  elementRef;
  render;

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('mouseover') onMouseOver() {
    this.borderColor = '5px solid green';
  }
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
    this.elementRef = el;
    this.render = renderer;
  }

  ngOnInit() {
    const part = this.elementRef.nativeElement.querySelector('.host-class');
    this.renderer.setStyle(part, 'backgroundColor', 'gray');
  }
}
