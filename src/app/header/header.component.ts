import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories = ['Static Website', 'Web Design', 'Digital Planner', "Kid's Books", 'Digital Journal', 'E-books'];
}
