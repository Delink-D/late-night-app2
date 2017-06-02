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

	bin = 0;
	oct = 0;
	hex = 0;

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

	// // listening to change on the binary fild
	binChange(oldVal, newVal){
		this.bin = this.bin + 1;
		if (this.bin == 1) {
			if (newVal != "") {
				this.myForm.patchValue({decimal: parseInt(newVal, 2).toString(10)});
			}else{
				this.myForm.patchValue({decimal: ""});
			}
			this.bin = 0;
		}
	}
}
