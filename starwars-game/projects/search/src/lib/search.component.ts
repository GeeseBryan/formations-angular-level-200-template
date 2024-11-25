import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'component-search',
  imports: [ ReactiveFormsModule ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true
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
