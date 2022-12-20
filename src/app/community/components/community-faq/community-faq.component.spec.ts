import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFaqComponent } from './community-faq.component';

describe('CommunityFaqComponent', () => {
  let component: CommunityFaqComponent;
  let fixture: ComponentFixture<CommunityFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
