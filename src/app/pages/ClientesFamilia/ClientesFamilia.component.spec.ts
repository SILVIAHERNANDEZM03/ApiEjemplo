import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFamiliaComponent } from './ClientesFamilia.component';

describe('PostsComponent', () => {
  let component: ClientesFamiliaComponent;
  let fixture: ComponentFixture<ClientesFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesFamiliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
