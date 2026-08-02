import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubmitCard } from './admin-submit-card';

describe('AdminSubmitCard', () => {
  let component: AdminSubmitCard;
  let fixture: ComponentFixture<AdminSubmitCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSubmitCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSubmitCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
