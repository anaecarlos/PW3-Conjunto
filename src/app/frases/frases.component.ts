import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {

  frases: string[] = ["Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
  "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!",
  "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
  "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
  "Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!",
  "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
  "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
  "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",
  "Cada dia traz uma nova oportunidade para cultivar a gratidão e lutar pelo que se quer!",
  "A gratidão é uma grande aliada do sucesso!"
];

fraseSelecionada : string = '';

constructor() {
  this.selecionarFraseAleatoria();
}

selecionarFraseAleatoria(): void {
const indice = Math.floor(Math.random() * this.frases.length);
this.fraseSelecionada = this.frases [indice];
}
}
/* constructor - independecia da frase*/
