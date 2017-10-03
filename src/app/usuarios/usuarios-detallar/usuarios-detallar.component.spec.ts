import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetallarComponent } from './usuarios-detallar.component';

describe('UsuariosDetallarComponent', () => {
  let component: UsuariosDetallarComponent;
  let fixture: ComponentFixture<UsuariosDetallarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosDetallarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetallarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
