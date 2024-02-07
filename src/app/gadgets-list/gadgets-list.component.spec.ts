import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsListComponent } from './gadgets-list.component';

describe('GadgetsListComponent', () => {
  let component: GadgetsListComponent;
  let fixture: ComponentFixture<GadgetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GadgetsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GadgetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
