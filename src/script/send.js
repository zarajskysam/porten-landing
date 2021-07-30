// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    $(".popup_loading").addClass('visible');
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // Ебанный internet explorer 11
            
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                $(".popup_loading").removeClass('visible');
                $(".popup_success").addClass('visible');
                
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
}

let wrapper = document.querySelector(".popup_success");
wrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup_success') || e.target.classList.contains('popup_success_wrapper_close')) {
        $(".popup_success").removeClass("visible");
    }
});