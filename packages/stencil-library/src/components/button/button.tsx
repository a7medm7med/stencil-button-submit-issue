import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plant-button',
  shadow: true,
  formAssociated: true
})
export class Button {

 /**
	 * The type of form submission associated with the button.
	 */
	@Prop({reflect: true}) type: "button" | "reset" | "submit" = 'button';

  render() {
    return (
      <Host>
        <button type={this.type}>
          <slot />
        </button>
      </Host>
    );
  }
}
