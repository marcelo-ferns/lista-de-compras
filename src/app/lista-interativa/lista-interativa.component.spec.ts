import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInterativaComponent } from './lista-interativa.component';

describe('ListaInterativaComponent', () => {
  let component: ListaInterativaComponent;
  let fixture: ComponentFixture<ListaInterativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInterativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInterativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
