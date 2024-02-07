import { Component } from '@angular/core';
import { GadgetsService } from '../shared/gadgets.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-gadgets-list',
  templateUrl: './gadgets-list.component.html',
  styleUrl: './gadgets-list.component.scss'
})
export class GadgetsListComponent {
  Gadget:any=[];
  searchForm!: FormGroup;
  
  constructor (public gs : GadgetsService,private fb:FormBuilder,private route:Router) {}

  ngOnInit()  {
    this.loadGadgets();
    this.searchForm=this.fb.group({
      searchText:[]
    })
  }
  // redirectAddGadget(){
  //   this.route.navigate(['/create-gadgets'])
  // }
  onSearchTextChange(event:any){
    console.log('event fired');
   
    this.searchForm.controls['searchText'].valueChanges
    .pipe(debounceTime(500))
    .subscribe(()=> {
      console.log('');
     
      if(this.searchForm.controls['searchText'].value.length > 2){
        const searchedBooks = this.Gadget?.filter((b:any) => b.name.toLowerCase().startsWith(event.target.value))
        console.log('searchedBooks', searchedBooks);
        this.Gadget = searchedBooks;
      }
      if(this.searchForm.controls['searchText'].value.length == 0){
        this.Gadget =this.loadGadgets();
      }
    })
  }

  loadGadgets() {
    return this.gs.getGadgets().subscribe((data:{})=>{
      this.Gadget = data ;
    });
  }

  deleteGadget(id:any)  {
    if(window.confirm('Are you sure , you want to delete ?')) {
      this.gs.deleteGadgets(id).subscribe((data)=>{
        this.loadGadgets();
      });
    }
  }
}
