import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todosComponents} from './todos.component';

describe('todosComponent', () => {
  let component: todosComponents;
  let fixture: ComponentFixture<todosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ todosComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(todosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
