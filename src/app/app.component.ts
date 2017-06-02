import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	myForm;

	ngOnInit(){
		this.myForm = new FormGroup({
			decimal: new FormControl(""),
			binary: new FormControl(""),
			octal: new FormControl(""),
			hexa: new FormControl(""),
		});
	}

	// listen for change on the decimal fild
	decChange(oldVal, newVal){
		if (newVal != "") {
			this.myForm.patchValue({binary: parseInt(newVal, 10).toString(2)});
			this.myForm.patchValue({octal: parseInt(newVal, 10).toString(8)});
			this.myForm.patchValue({hexa: parseInt(newVal, 10).toString(16).toUpperCase()});
		}else{
			this.myForm.patchValue({binary: ""});
			this.myForm.patchValue({octal: ""});
			this.myForm.patchValue({hexa: ""});
		}
	}
}
