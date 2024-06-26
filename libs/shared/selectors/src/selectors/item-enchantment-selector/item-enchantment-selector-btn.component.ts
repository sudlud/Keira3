import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ItemEnchantmentSelectorModalComponent } from './item-enchantment-selector-modal.component';
import { BaseSelectorBtnComponent } from '../base-selector/base-selector-btn.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'keira-item-enchantment-selector-btn',
  templateUrl: '../base-selector/base-selector-btn.component.html',
  styleUrls: ['../base-selector/base-selector-btn.component.scss'],
  standalone: true,
})
export class ItemEnchantmentSelectorBtnComponent extends BaseSelectorBtnComponent {
  protected readonly modalComponentClass = ItemEnchantmentSelectorModalComponent;
}
