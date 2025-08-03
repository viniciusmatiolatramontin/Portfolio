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
          content: "Na minha pré-adolescencia eu já tinha um pouco de noção de que eu queria trabalhar com TI, só não sabia bem em que área. Comecei tentando desenvolver games com a Unity" + 
          " mas desisti de entrar nessa área por conta da falta de boas oportunidades no mercado de trabalho brasileiro. Após isso já no fim do ensino médio decidi tentar estudar" +
          " mais sobre desenvolvimento Front-End, e após algumas complicações iniciais decidi migrar para o Back-End, onde tive bem mais facilidade e também onde desenvolvi a maior parte dos" +
          " conhecimentos que tenho hoje em dia. Uns meses antes de começar o estágio na Senior Sistemas eu também decidi aprimorar mais os meus conhecimentos em Front-End (além dos" +
          " conhecimentos que eu já havia obtido na faculdade claro) para ter mais chances de ser aprovado no processo seletivo."
        }
      ]
    },
    {
      content: "Por que você decidiu cursar Ciência da Computação e não outros cursos como Sistemas de Informação?",
      children: [
        {
          content: 'Esses 2 cursos tem pouca diferença porém o foco mais científico do curso de Ciência da computação foi algo que me interessou bastante, além de algumas matérias bem' + 
          ' interessantes como "Compiladores" que só estavam no curso de Ciência da Computação na FURB.'
        }
      ]
    },
    {
      content: "O que é Codename 7?",
      children: [
        {
          content: 'Codename 7 foi o meu primeiro grande projeto desenvolvido com Java, com o intuito de aplicar meus conhecimentos em POO (Programação Orientada a Objetos) ' +
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
          content: "Tenho mais experiência com Back-End. Porém também tenho um bom conhecimento em Front-End, tanto que atuei em diversas tasks no Front-End dos projetos em" + 
          " que trabalho na Senior Sistemas."
        }
      ]
    },
  ]

  childrenAccessor = (node: Node) => node.children ?? [];

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;
}
