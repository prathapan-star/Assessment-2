import { Component } from '@angular/core';
import { GadgetsService } from '../shared/gadgets.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-gadgets',
  templateUrl: './edit-gadgets.component.html',
  styleUrl: './edit-gadgets.component.scss'
})
export class EditGadgetsComponent {
  id = this.actRoute.snapshot.params['id'];
  gadgetData!: FormGroup;
  constructor(
    public gs: GadgetsService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.gadgetData = this.fb.group({
      id: [],
      name: [],
      price: [],
      desc: [],
      img: []
    })
    console.log('this.actroute.snapshot.params["id"]', this.actRoute.snapshot.params['id'])
    this.gs.getGadget(this.id).subscribe((data: any) => {
      console.log('Data', data);

      this.gadgetData.setValue(data);
    })
  }
  updateGadget(){
    if(window.confirm('Are you sure , you want to update ?')){
      this.gs.updateGadgets(this.id,this.gadgetData.value).subscribe(data => {
        this.router.navigate(['gadgets-list']);
    })
  }
}
}
