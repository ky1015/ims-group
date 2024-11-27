import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class= "page-header">
      <h2>Home Page</h2>
    </div>
    <div class="home-wrapper">
      <h4> Welcome to your inventory management! <h4>
        <div class="home-link"><a href="/items">Items</a></div>
        <div class="home-link"><a href="/suppliers">Suppliers</a></div>
    <p><strong>Server message:</strong> {{ serverMessage }}</p>
  `,
  styles: `
  .home-wrapper {
    display: block;
  }

  .home-link {
    display: inline-block;
    height: 120px;
    width: 200px;
    background: #D8AEF0;
    margin: 10px;
    text-align: center;
    padding-top: 80px;
  }
  `
})
export class HomeComponent {

  serverMessage: string;

  constructor(private http: HttpClient) {
    this.serverMessage = '';

    // Simulate a server request that takes 2 seconds to complete
    setTimeout(() => {
      this.http.get(`${environment.apiBaseUrl}/api`).subscribe({
        next: (res: any) => {
          this.serverMessage = res['message'];
        },
        error: (err) => {
          this.serverMessage = 'Error loading server message';
        }
      });
    }, 2000);
  }
}
