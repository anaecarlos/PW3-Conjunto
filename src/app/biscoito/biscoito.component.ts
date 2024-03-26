import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  @Input () imagem: string = '';
  @Input () imagem2: string = '';
  @Output() evento = new EventEmitter<string>();

  Imagematual: string = 'assets/biscoito.png';

  Quebrarimagem(): void{
    if (this.Imagematual === this.imagem) {
      this.Imagematual = this.imagem2;
    } else {
      this.Imagematual
    }
    this.evento.emit(this.Imagematual);
  }

  Reiniciarimagem(): void{
    if (this.Imagematual === this.imagem2){
      this.Imagematual = this.imagem
    }
    else{
      this.Imagematual
    }
  }
  }
