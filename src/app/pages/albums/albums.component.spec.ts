import { ComponentFixture, TestBed } from '@angular/core/testing';

import { albumsComponents} from './albums.component';

describe('albumsComponent', () => {
  let component: albumsComponents;
  let fixture: ComponentFixture<albumsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ albumsComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(albumsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
