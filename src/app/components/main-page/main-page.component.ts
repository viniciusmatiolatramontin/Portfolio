import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectListComponent } from "../project-list/project-list.component";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { FaqComponent } from '../faq/faq.component';
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  imports: [ProjectListComponent, MatCardModule, MatTabsModule, SocialMediaComponent, MatTreeModule, FaqComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {

}
