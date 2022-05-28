function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// testing
// hiển thị tắt chỉnh sửa danh mục
// const editBtns = document.querySelectorAll('.edit_DM')
// const modal_edit = document.querySelector('.modal_edit');
// const modal_close = document.querySelector('.close');
// function showEditDM() {
//     modal_edit.classList.add('open')
// }

// function hideEditDM() {
//     modal_edit.classList.remove('open')
// }

// for (const edit_Btn of editBtns) {
//     edit_Btn.addEventListener('click', showEditDM)
// }

// modal_close.addEventListener('click', hideEditDM)

