import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
  isModalOpen = false; // Track modal open state

  // Open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Handle closing the modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Handle the 'Yes' action from the child modal
  handleYes() {
    // Add your logic for the 'Yes' action
    console.log('Yes clicked');
    this.closeModal();
  }

  // Handle the 'No' action from the child modal
  handleNo() {
    // Add your logic for the 'No' action
    console.log('No clicked');
    this.closeModal();
  }
}