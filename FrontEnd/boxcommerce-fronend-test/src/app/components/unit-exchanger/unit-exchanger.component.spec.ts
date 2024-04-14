import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitExchangerComponent } from './unit-exchanger.component';

describe('UnitExchangerComponent', () => {
  let component: UnitExchangerComponent;
  let fixture: ComponentFixture<UnitExchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitExchangerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitExchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
