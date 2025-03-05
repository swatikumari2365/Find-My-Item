import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFoundComponent } from './items-found.component';

describe('ItemsFoundComponent', () => {
  let component: ItemsFoundComponent;
  let fixture: ComponentFixture<ItemsFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsFoundComponent]
    });
    fixture = TestBed.createComponent(ItemsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
