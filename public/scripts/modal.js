export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')

    const concelButton = document.querySelector('.button.cancel')

    concelButton.addEventListener('click', close)


    function open(){
        //funcionalidade de atribuir a classe active para a modal

        modalWrapper.classList.add('active')
    }
    function close(){
        //funcionalidade de remover a classe active da modal
        modalWrapper.classList.remove('active')

    }

    return{
        open,
        close
    }
}