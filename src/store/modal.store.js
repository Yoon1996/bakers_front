import { createSlice } from '@reduxjs/toolkit'


const modalInitialState = {
    modalType: "",
    isModalOpen: false,
}

export const { name, actions, reducer: modalReducer } = createSlice({
    name: 'modal',
    initialState: modalInitialState,
    reducers: {
        openModal: (state, action) => {
            // const { modalType } = action.payload;
            // state.modalType = modalType;
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
    }
})



export const { openModal, closeModal } = actions
export const selectModal = (state) => state.modal;