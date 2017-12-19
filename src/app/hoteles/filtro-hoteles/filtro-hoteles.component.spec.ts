import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHotelesComponent } from './filtro-hoteles.component';

describe('FiltroHotelesComponent', () => {
  let component: FiltroHotelesComponent;
  let fixture: ComponentFixture<FiltroHotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroHotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
