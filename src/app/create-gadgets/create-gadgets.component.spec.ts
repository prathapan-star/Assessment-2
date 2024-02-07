import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGadgetsComponent } from './create-gadgets.component';

describe('CreateGadgetsComponent', () => {
  let component: CreateGadgetsComponent;
  let fixture: ComponentFixture<CreateGadgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGadgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
