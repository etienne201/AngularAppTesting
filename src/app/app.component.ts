import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp Jest and cypress';
// tslint:disable-next-line: typedef
getUrl()
{
  return 'url(\'../assets/images/images.jpg\')';
}
}