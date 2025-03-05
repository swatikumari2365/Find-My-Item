import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsLostComponent } from './items-lost.component';

describe('ItemsLostComponent', () => {
  let component: ItemsLostComponent;
  let fixture: ComponentFixture<ItemsLostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsLostComponent]
    });
    fixture = TestBed.createComponent(ItemsLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
