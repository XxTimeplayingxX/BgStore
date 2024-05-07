import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRenderComponent } from './not-found-render.component';

describe('NotFoundRenderComponent', () => {
  let component: NotFoundRenderComponent;
  let fixture: ComponentFixture<NotFoundRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
