import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionPersonasClientesComponent } from './RelacionPersonasClientes.component';

describe('PostsComponent', () => {
  let component: RelacionPersonasClientesComponent;
  let fixture: ComponentFixture<RelacionPersonasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionPersonasClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionPersonasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
