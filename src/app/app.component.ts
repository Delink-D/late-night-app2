import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	form;

	ngOnIt(){
		this.form = new FormGroup({
			decimal: new FormControl(""),
			binary: new FormControl(""),
			octal: new FormControl(""),
			hexa: new FormControl(""),
		});
	}
}
