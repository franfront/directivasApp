import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es obligatorio';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set mensaje(value: string) {
    this._mensaje = value;
    this.setMensaje();
  }

  @Input() set valido(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setEstilo();

    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    // const { color, mensaje } = changes;

    // if(mensaje){
    //   const newMensaje = mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = newMensaje;

    // }
    // if(color){
    //   const newColor = color.currentValue;
    //   this.htmlElement.nativeElement.style.color = newColor;

    // }
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
