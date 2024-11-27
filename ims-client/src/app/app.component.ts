import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <div class="top-banner">
      <h1><a href="#">Inventory Management System</a></h1>
    </div>
      <main>
        <section>
          <router-outlet />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 MEAN Stack Project</p>
      </footer>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      text-align: center;
      padding: 0;
      margin: 0 auto;
    }

    header, footer {
      background-color: #f8f9fa;
      padding: 10px 0;
    }

    nav ul {
      list-style-type: none;
      padding: 0;
    }

    nav ul li {
      display: inline;
      margin-right: 10px;
    }

    main {
      flex: 1;
    }
    .top-banner {
      background: #D8AEF0;
      height: 75px;
    }

    .top-banner h1 {
      font-family: "Old Standard TT", serif;
      text-align: center;
    }

    .top-banner a {
      text-decoration: none;
      color: black;
    }
  `
})
export class AppComponent {
  title = 'ets-client';

  bannerText= '';
}
