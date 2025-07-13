import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { Node } from '../../interfaces/node.interface';

@Component({
  selector: 'faq',
  imports: [ MatCardModule, MatTabsModule, MatTreeModule, MatIconModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  dataSource: Node[] = [
    {
      content: "Quando você decidiu que queria atuar profissionalmente na área de TI?",
      children: [
        {
          content: ""
        }
      ]
    },
    {
      content: "Por que você decidiu cursar Ciência da Computação e não outros cursos como Sistemas de Informação?",
      children: [
        {
          content: ""
        }
      ]
    },
    {
      content: "O que é Codename 7?",
      children: [
        {
          content: 'Codename 7 foi o meu primeiro grande projeto desenvolvido com Java, como o intuito de aplicar meus conhecimentos em POO (Programação Orientada a Objetos) ' +
          'e Lógica de Programação, trata-se de um jogo SHMUP do estilo Space Shooter (gênero conhecido popularmente como "jogo de navinha"), que desenvolvi utilizando o ' +
          'framework LibGDX e assets do site OpenGameArt, se você quiser jogá-lo você pode baixar o executável em https://vinymt.itch.io/codename-7 (o jogo precisa de Java 14 ' +
          'ou alguma versão mais recente para ser executado).'
        }
      ]
    },
    {
      content: "Você tem mais experiência com Back-End ou Front-End?",
      children: [
        {
          content: ""
        }
      ]
    },
  ]

  childrenAccessor = (node: Node) => node.children ?? [];

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;
}
