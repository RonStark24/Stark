import { LightningElement, api } from 'lwc';

export default class ModalPopup extends LightningElement {
  @api isModalOpen = false; // Expose property to parent component

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
    this.dispatchEvent(new CustomEvent('close')); // Dispatch close event to parent
  }

  // Function for handling 'Yes' action
  handleYes() {
    this.dispatchEvent(new CustomEvent('yes')); // Dispatch 'yes' event to parent
    this.closeModal();
  }

  // Function for handling 'No' action
  handleNo() {
    this.dispatchEvent(new CustomEvent('no')); // Dispatch 'no' event to parent
    this.closeModal();
  }
}