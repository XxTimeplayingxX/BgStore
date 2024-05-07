import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosRenderComponent } from './favoritos-render.component';

describe('FavoritosRenderComponent', () => {
  let component: FavoritosRenderComponent;
  let fixture: ComponentFixture<FavoritosRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritosRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritosRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
