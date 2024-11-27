import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  template: `
    <div class="page-header">
      <h2>Item Management</h2>
    </div>
    <p>Manage items in your inventory.</p>
    <div>
      <a class="btn" href="items/search-items">Search Items</a>
      <a class="btn" href="items/create-item">Create Item</a>
      <a class="btn" href="items/read-item">Read Item</a>
      <a class="btn" href="items/update-item">Update Item</a>
      <a class="btn" href="items/delete-item">Delete Item</a>
      <a class="btn" href="items/list-items">List All Items</a>
    </div>

  `,
  styles: `
  .btn {
    background-color: #D8AEF0;
    border: 1px solid purple;
    color: black;
    padding: 10px 24px;
    width: 50%;
    display: block;
    margin: auto;
  }

  .btn:hover {
    background-color: #e2c4f2;
  }

  p {
    text-align: left;
    margin: 20px;
  }
  `
})

export class ItemsComponent {

}
