import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaContactosComponent } from './ficha-contactos.component';

describe('FichaContactosComponent', () => {
  let component: FichaContactosComponent;
  let fixture: ComponentFixture<FichaContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaContactosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
