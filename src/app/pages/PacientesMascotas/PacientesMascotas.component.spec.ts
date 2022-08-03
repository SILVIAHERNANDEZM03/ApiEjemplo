import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesMascotasComponent } from './PacientesMascotas.component';

describe('PostsComponent', () => {
  let component: PacientesMascotasComponent;
  let fixture: ComponentFixture<PacientesMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
