import { LightningElement } from 'lwc';

export default class ModalPopup extends LightningElement {
    isModalOpen = false;

    // Open the modal
    openModal() {
        this.isModalOpen = true;
    }

    // Close the modal
    closeModal() {
        this.isModalOpen = false;
    }

    // Handle "Yes" button click
    handleYes() {
        // Perform the required action for the offboarding process here
        this.isModalOpen = false; // Close the modal after action
    }
}