export const overlayFn = (
  type: string,
  isModalOpen: boolean,
  setIsModalOpen: (boolean: boolean) => void,
) => {
  const dialog = document.querySelector('#dialogBox') as HTMLDialogElement;
  const secondDialog = document.querySelector(
    '#secondDialogBox',
  ) as HTMLDialogElement;

  if (type === 'item') {
    if (isModalOpen) {
      dialog.style.animation = 'fade-out 500ms forwards';
      setIsModalOpen(false);
      setTimeout(() => {
        dialog.close();
      }, 500);
    } else {
      dialog.style.animation = 'fade-in 500ms forwards';
      setIsModalOpen(true);
      dialog.showModal();
    }
  }
  if (type === 'category') {
    if (isModalOpen) {
      secondDialog.style.animation = 'fade-out 500ms forwards';
      setIsModalOpen(false);
      setTimeout(() => {
        secondDialog.close();
      }, 500);
    } else {
      secondDialog.style.animation = 'fade-in 500ms forwards';
      setIsModalOpen(true);
      secondDialog.showModal();
    }
  }
};

export const overlayManagerFn = (
  type: string,
  id: string,
  isModalOpen: boolean,
  setIsModalOpen: (boolean: boolean) => void,
) => {
  const deleteBox = document.querySelector(
    `#trashBox${id}`,
  ) as HTMLDialogElement;
  const editBox = document.querySelector(`#editBox${id}`) as HTMLDialogElement;

  if (type === 'delete') {
    if (isModalOpen) {
      deleteBox.style.animation = 'fade-out 500ms forwards';
      setIsModalOpen(false);
      setTimeout(() => {
        deleteBox.close();
      }, 500);
    } else {
      deleteBox.style.animation = 'fade-in 500ms forwards';
      setIsModalOpen(true);
      deleteBox.showModal();
    }
  }

  if (type === 'edit') {
    if (isModalOpen) {
      editBox.style.animation = 'fade-out 500ms forwards';
      setIsModalOpen(false);
      setTimeout(() => {
        editBox.close();
      }, 500);
    } else {
      editBox.style.animation = 'fade-in 500ms forwards';
      setIsModalOpen(true);
      editBox.showModal();
    }
  }
};
