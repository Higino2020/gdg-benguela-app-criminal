import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadaoComponent } from './cidadao.component';

describe('CidadaoComponent', () => {
  let component: CidadaoComponent;
  let fixture: ComponentFixture<CidadaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
