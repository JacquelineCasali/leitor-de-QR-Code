import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDetailComponent } from './members-detail.component';

describe('MembersDetailComponent', () => {
  let component: MembersDetailComponent;
  let fixture: ComponentFixture<MembersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
