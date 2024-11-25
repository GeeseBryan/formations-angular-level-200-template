import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'component-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

public textToSearch = new FormControl<string|null>(null);

public search: string = '';

  public onSearch(): void {
    const value = this.textToSearch.value;
    this.search = value ? value : '';
    console.log(this.search);
  }
}
