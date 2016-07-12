/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';

describe('Component: Categories', () => {
  it('should create an instance', () => {
    let component = new CategoriesComponent();
    expect(component).toBeTruthy();
  });
});
