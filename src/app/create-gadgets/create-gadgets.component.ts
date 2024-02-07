import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { GadgetsService } from '../shared/gadgets.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-create-gadgets',
  templateUrl: './create-gadgets.component.html',
  styleUrl: './create-gadgets.component.scss'
})
export class CreateGadgetsComponent {

  @Input() gadgetDetails = {name:'',price:'',img:'',desc:''}
  registrationForm!:FormGroup;
  constructor (public gs : GadgetsService , public router : Router ,private fb:FormBuilder)  {}
  ngOnInit()  {
    this.registrationForm=this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      desc:['',Validators.required],
      img:['',Validators.required]
    })
  }
  addGadget(dataGadget : any )  {
    this.gs.createGadgets(this.gadgetDetails).subscribe((data:{}) => {
      this.router.navigate(['/gadgets-list']);
    });
  }
}