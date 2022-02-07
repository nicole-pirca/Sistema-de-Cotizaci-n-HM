import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearUserComponent } from './ruta-crear-user.component';

describe('RutaCrearUserComponent', () => {
  let component: RutaCrearUserComponent;
  let fixture: ComponentFixture<RutaCrearUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
