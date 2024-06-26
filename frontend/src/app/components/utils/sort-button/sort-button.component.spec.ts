import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SortButtonComponent} from './sort-button.component';

describe('SortButtonComponent', () => {
  let component: SortButtonComponent;
  let fixture: ComponentFixture<SortButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortButtonComponent]
    });
    fixture = TestBed.createComponent(SortButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
