import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesosComponent } from './Pesos.component';

describe('PostsComponent', () => {
  let component: PesosComponent;
  let fixture: ComponentFixture<PesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
