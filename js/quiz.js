        // НОВОЕ: Модальное окно для терминов
        const termModal = document.getElementById('termModal');
        const termModalTitle = document.getElementById('termModalTitle');
        const termModalContent = document.getElementById('termModalContent');

        // Функция открытия модального окна для терминов
        function openTermModal(termId) {
            const term = termData[termId];
            if (!term) return;
            
            termModalTitle.textContent = term.title;
            
            // Формируем содержимое модального окна
            let examplesHtml = '';
            if (term.examples && term.examples.length > 0) {
                examplesHtml = `
                    <div class="term-modal-example">
                        <h4>Примеры:</h4>
                        <ul>
                            ${term.examples.map(example => `<li>${example}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            termModalContent.innerHTML = `
                <p><strong>Определение:</strong> ${term.fullDefinition}</p>
                ${examplesHtml}
                <p><strong>Категория:</strong> <span class="term-category">${term.category}</span></p>
                <p style="margin-top: 20px; font-style: italic; color: #666;">Нажмите на другие термины на странице, чтобы узнать их определения!</p>
            `;
            
            termModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Функция закрытия модального окна для терминов
        function closeTermModal() {
            termModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
function initializeQuizSelector() {
            const quizSelector = document.getElementById('quizSelector');
            quizSelector.innerHTML = `
                <button class="quiz-selector-btn active" data-quiz="general">Общая экология Москвы</button>
                <button class="quiz-selector-btn" data-quiz="waste">Переработка отходов</button>
                <button class="quiz-selector-btn" data-quiz="forest">Экология леса</button>
            `;
            
            document.querySelectorAll('.quiz-selector-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.quiz-selector-btn').forEach(b => {
                        b.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    
                    currentQuiz = this.getAttribute('data-quiz');
                    
                    switch(currentQuiz) {
                        case 'waste':
                            currentQuizData = quizDataWaste;
                            break;
                        case 'forest':
                            currentQuizData = quizDataForest;
                            break;
                        default:
                            currentQuizData = quizDataGeneral;
                    }
                    
                    initializeQuiz();
                });
            });
            
            initializeQuiz();
        }
        function initializeQuiz() {
            const quizContainer = document.getElementById('quizContent');
            quizContainer.innerHTML = `
                <div class="quiz-card">
                    <div class="quiz-progress">
                        <div class="question-counter" id="questionCounter">Вопрос 1 из ${currentQuizData.length}</div>
                        <div class="quiz-progress-bar">
                            <div class="quiz-progress-fill" id="quizProgress"></div>
                        </div>
                        <div style="font-weight: bold; color: #2e7d32;">Счет: <span id="quizScore">0</span>/${currentQuizData.length}</div>
                    </div>
                    
                    <div class="quiz-question" id="quizQuestion"></div>
                    
                    <div class="quiz-options" id="quizOptions"></div>
                    
                    <button class="quiz-button" id="nextButton" disabled>Далее</button>
                    
                    <div id="quizExplanation" style="display: none;"></div>
                </div>
                
                <div id="quizResults" style="display: none;"></div>
            `;
            
            currentQuestion = 0;
            score = 0;
            userAnswers = [];
            isAnswerLocked = false;
            loadQuestion();
        }
        function loadQuestion() {
            const question = currentQuizData[currentQuestion];
            const quizQuestion = document.getElementById('quizQuestion');
            const quizOptions = document.getElementById('quizOptions');
            const nextButton = document.getElementById('nextButton');
            const quizProgress = document.getElementById('quizProgress');
            const quizScore = document.getElementById('quizScore');
            const quizExplanation = document.getElementById('quizExplanation');
            const questionCounter = document.getElementById('questionCounter');
            
            isAnswerLocked = false;
            
            questionCounter.textContent = `Вопрос ${currentQuestion + 1} из ${currentQuizData.length}`;
            quizQuestion.textContent = question.question;
            quizOptions.innerHTML = '';
            nextButton.disabled = true;
            quizExplanation.style.display = 'none';
            
            quizProgress.style.width = `${((currentQuestion) / currentQuizData.length) * 100}%`;
            quizScore.textContent = score;
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option';
                optionElement.innerHTML = `
                    <span class="quiz-option-label">${String.fromCharCode(65 + index)}</span>
                    ${option}
                `;
                
                optionElement.addEventListener('click', () => {
                    if (!isAnswerLocked) {
                        selectOption(index, optionElement);
                    }
                });
                quizOptions.appendChild(optionElement);
            });
            
            if (userAnswers[currentQuestion] !== undefined) {
                const optionElement = quizOptions.children[userAnswers[currentQuestion]];
                optionElement.classList.add('selected');
                nextButton.disabled = false;
                nextButton.textContent = currentQuestion < currentQuizData.length - 1 ? 'Далее' : 'Завершить викторину';
            }
        }
        function selectOption(selectedIndex, optionElement) {
            const question = currentQuizData[currentQuestion];
            const options = document.querySelectorAll('.quiz-option');
            const nextButton = document.getElementById('nextButton');
            
            options.forEach(option => {
                option.classList.remove('selected');
            });
            
            optionElement.classList.add('selected');
            
            userAnswers[currentQuestion] = selectedIndex;
            
            nextButton.disabled = false;
            nextButton.textContent = currentQuestion < currentQuizData.length - 1 ? 'Далее' : 'Завершить викторину';
            
            document.getElementById('questionCounter').textContent = `Вопрос ${currentQuestion + 1} из ${currentQuizData.length}`;
            
            nextButton.onclick = () => {
                if (!isAnswerLocked) {
                    isAnswerLocked = true;
                    
                    options.forEach(option => {
                        option.classList.add('disabled');
                        option.style.cursor = 'not-allowed';
                    });
                    
                    const quizExplanation = document.getElementById('quizExplanation');
                    
                    if (selectedIndex === question.correct) {
                        score++;
                    }
                    
                    quizExplanation.style.display = 'block';
                    quizExplanation.innerHTML = `
                        <div class="quiz-explanation">
                            <h4>${selectedIndex === question.correct ? '✅ Правильно!' : '❌ Неправильно'}</h4>
                            <p>${question.explanation}</p>
                            <p><strong>Правильный ответ:</strong> ${question.options[question.correct]}</p>
                        </div>
                    `;
                    
                    document.getElementById('quizScore').textContent = score;
                    
                    document.getElementById('quizProgress').style.width = `${((currentQuestion + 1) / currentQuizData.length) * 100}%`;
                    
                    nextButton.textContent = currentQuestion < currentQuizData.length - 1 ? 'Следующий вопрос' : 'Показать результаты';
                    nextButton.onclick = () => {
                        if (currentQuestion < currentQuizData.length - 1) {
                            currentQuestion++;
                            loadQuestion();
                        } else {
                            showResults();
                        }
                    };
                }
            };
        }
        function showResults() {
            const quizContainer = document.getElementById('quizContent');
            const percentage = Math.round((score / currentQuizData.length) * 100);
            
            let feedback = '';
            if (percentage >= 90) {
                feedback = 'Отличный результат! Вы настоящий эксперт в экологии Москвы!';
            } else if (percentage >= 70) {
                feedback = 'Хороший результат! Вы хорошо разбираетесь в экологических вопросах столицы.';
            } else if (percentage >= 50) {
                feedback = 'Неплохой результат! Есть что повторить, но основы вы знаете.';
            } else {
                feedback = 'Есть над чем поработать! Рекомендуем изучить материалы на нашем сайте.';
            }
            
            let resultsHtml = `
                <div class="quiz-results">
                    <h3>Результаты викторины</h3>
                    <div class="quiz-score">${score}/${currentQuizData.length}</div>
                    <div class="quiz-feedback">${feedback}</div>
                    
                    <div class="quiz-explanation">
                        <h4>Детализация ответов:</h4>
            `;
            
            currentQuizData.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                resultsHtml += `
                    <div style="margin-bottom: 15px; padding: 10px; border-left: 4px solid ${isCorrect ? '#2e7d32' : '#c62828'};">
                        <p><strong>Вопрос ${index + 1}:</strong> ${question.question}</p>
                        <p><strong>Ваш ответ:</strong> ${question.options[userAnswer]} ${isCorrect ? '✅' : '❌'}</p>
                        ${!isCorrect ? `<p><strong>Правильный ответ:</strong> ${question.options[question.correct]}</p>` : ''}
                    </div>
                `;
            });
            
            resultsHtml += `
                    </div>
                    
                    <button class="quiz-button" onclick="initializeQuiz()" style="margin-top: 20px;">Пройти викторину еще раз</button>
                </div>
            `;
            
            quizContainer.innerHTML = resultsHtml;
        }
        const imageUrls = [
            "https://images.unsplash.com/photo-1570654621852-9c6a34cce5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ];
        document.addEventListener('DOMContentLoaded', function() {
            const galleryImages = document.querySelectorAll('.gallery-item img');
            galleryImages.forEach((img, index) => {
                if (index < imageUrls.length) {
                    img.src = imageUrls[index];
                }
            });
            
            setTimeout(() => {
                document.querySelectorAll('.rating-number').forEach((number, index) => {
                    setTimeout(() => {
                        number.style.opacity = '1';
                        number.style.transform = 'scale(1)';
                    }, index * 50);
                });
            }, 500);
            
            document.querySelectorAll('.problem-btn.nav-link').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    if (this.getAttribute('data-page') === 'problems') {
                        e.preventDefault();
                        const page = this.getAttribute('data-page');
                        const navLinks = document.querySelectorAll('.nav-link');
                        navLinks.forEach(link => link.classList.remove('nav-active'));
                        this.classList.add('nav-active');
                        
                        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                        document.getElementById(page).classList.add('active');
                        
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            const currentPage = window.location.hash ? window.location.hash.substring(1) : 'home';
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('nav-active'));
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            if (document.getElementById(currentPage)) {
                document.getElementById(currentPage).classList.add('active');
                document.querySelector(`[data-page="${currentPage}"]`).classList.add('nav-active');
            } else {
                document.getElementById('home').classList.add('active');
                document.querySelector('[data-page="home"]').classList.add('nav-active');
            }
        });
        document.querySelectorAll('.rating-number').forEach(number => {
            number.style.opacity = '0';
            number.style.transform = 'scale(0.5)';
            number.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
