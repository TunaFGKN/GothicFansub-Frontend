import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangakaComponent } from './mangaka.component';

describe('MangakaComponent', () => {
  let component: MangakaComponent;
  let fixture: ComponentFixture<MangakaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangakaComponent]
    });
    fixture = TestBed.createComponent(MangakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
