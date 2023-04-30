import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BradcrumsComponent } from './bradcrums/bradcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BradcrumsComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [BradcrumsComponent, SidebarComponent, HeaderComponent],
})
export class SharedModule {}
