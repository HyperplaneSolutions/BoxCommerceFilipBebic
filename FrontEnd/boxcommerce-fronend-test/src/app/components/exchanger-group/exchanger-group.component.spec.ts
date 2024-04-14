import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerGroupComponent } from './exchanger-group.component';

describe('ExchangerGroupComponent', () => {
  let component: ExchangerGroupComponent;
  let fixture: ComponentFixture<ExchangerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangerGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchangerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
