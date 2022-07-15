import { ComponentFixture, TestBed } from '@angular/core/testing';

import { photosComponents} from './photos.component';

describe('photosComponent', () => {
  let component: photosComponents;
  let fixture: ComponentFixture<photosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ photosComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(photosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
