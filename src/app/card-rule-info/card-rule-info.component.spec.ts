import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRuleInfoComponent } from './card-rule-info.component';

describe('CardRuleInfoComponent', () => {
  let component: CardRuleInfoComponent;
  let fixture: ComponentFixture<CardRuleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRuleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRuleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
