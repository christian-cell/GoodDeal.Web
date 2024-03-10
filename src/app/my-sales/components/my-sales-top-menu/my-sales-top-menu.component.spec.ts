import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalesTopMenuComponent } from './my-sales-top-menu.component';

describe('MySalesTopMenuComponent', () => {
  let component: MySalesTopMenuComponent;
  let fixture: ComponentFixture<MySalesTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySalesTopMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySalesTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
