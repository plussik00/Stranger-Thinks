        const adBanner = document.getElementById('adBanner');
        const closeAd = document.getElementById('closeAd');
        const kinderImage = document.getElementById('kinderImage');
        const adQuestion = document.getElementById('adQuestion');
        const adContent = document.getElementById('adContent');
        const yesButton = document.getElementById('yesButton');
        const registrationForm = document.getElementById('registrationForm');
        const submitButton = document.getElementById('submitButton');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        
        // Обработчик закрытия баннера
        closeAd.addEventListener('click', function() {
            adBanner.classList.add('collapsed');
        });
        
        // Обработчик нажатия на изображение киндера
        kinderImage.addEventListener('click', function() {
            adQuestion.textContent = "Хотите купить киндер?";
            adContent.style.display = 'block';
            registrationForm.style.display = 'none';
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
        });
        
        // Обработчик нажатия на кнопку "ДА!"
        yesButton.addEventListener('click', function() {
            adContent.style.display = 'none';
            registrationForm.style.display = 'block';
        });
        
        // Обработчик отправки формы
        submitButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const age = parseInt(document.getElementById('age').value);
            
            // Проверяем введенные данные
            if (!username || !age) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            // Скрываем форму
            registrationForm.style.display = 'none';
            
            // Проверяем возраст
            if (age >= 21) {
                // Показываем сообщение об успехе
                successMessage.style.display = 'block';
                
                // Через 5 секунд показываем новое предложение
                setTimeout(function() {
                    successMessage.style.display = 'none';
                    adQuestion.textContent = "Хотите еще один киндер?";
                    adContent.style.display = 'block';
                }, 5000);
            } else {
                // Показываем сообщение об ошибке
                errorMessage.style.display = 'block';
                
                // Через 5 секунд возвращаемся к началу
                setTimeout(function() {
                    errorMessage.style.display = 'none';
                    adQuestion.textContent = "Хотите купить киндер?";
                    adContent.style.display = 'block';
                }, 5000);
            }
            
            // Очищаем поля формы
            document.getElementById('username').value = '';
            document.getElementById('age').value = '';
        });
        
        // Автоматическое сворачивание баннера через 10 секунд
        setTimeout(function() {
            if (!adBanner.classList.contains('collapsed')) {
                adBanner.classList.add('collapsed');
            }
        }, 10000);