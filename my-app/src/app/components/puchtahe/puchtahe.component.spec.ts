import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchtaheComponent } from './puchtahe.component';

describe('PuchtaheComponent', () => {
  let component: PuchtaheComponent;
  let fixture: ComponentFixture<PuchtaheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuchtaheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuchtaheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
