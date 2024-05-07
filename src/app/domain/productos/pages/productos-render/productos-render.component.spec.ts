import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosRenderComponent } from './productos-render.component';

describe('ProductosRenderComponent', () => {
  let component: ProductosRenderComponent;
  let fixture: ComponentFixture<ProductosRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
