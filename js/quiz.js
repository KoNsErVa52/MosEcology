const quizDataGeneral = [
            {
                question: "Какой район Москвы считается самым экологически чистым в 2025 году?",
                options: [
                    "Митино",
                    "Куркино", 
                    "Ясенево",
                    "Крылатское"
                ],
                correct: 1,
                explanation: "Куркино сохраняет лидерство как самый экологически чистый район Москвы с 68% территории, занятой зелеными насаждениями и самым низким уровнем загрязнения воздуха."
            },
            {
                question: "Какой источник загрязнения воздуха является основным в районе Капотня?",
                options: [
                    "Транспортные развязки",
                    "Московский нефтеперерабатывающий завод",
                    "Строительные площадки", 
                    "ТЭЦ"
                ],
                correct: 1,
                explanation: "Московский нефтеперерабатывающий завод - основной источник загрязнения воздуха в районе Капотня, что делает его самым экологически неблагополучным районом Москвы."
            },
            {
                question: "Сколько процентов территории Москвы занято зелеными насаждениями в 2025 году?",
                options: [
                    "35%",
                    "48%",
                    "60%", 
                    "42%"
                ],
                correct: 1,
                explanation: "По данным на 2025 год, 48% территории Москвы занято зелеными насаждениями, что является одним из самых высоких показателей среди мегаполисов мира."
            },
            {
                question: "Какой проект помогает улучшать качество воздуха в Москве?",
                options: [
                    "Строительство новых автомагистралей",
                    "Переход общественного транспорта на электробусы",
                    "Увеличение парковочных мест",
                    "Расширение промышленных зон"
                ],
                correct: 1,
                explanation: "Переход общественного транспорта на электробусы значительно снижает выбросы вредных веществ в атмосферу. В 2025 году более 45% автобусов в Москве - электробусы."
            },
            {
                question: "Что означает термин 'тепловой остров' в экологии города?",
                options: [
                    "Остров тепла в холодном климате",
                    "Повышенная температура в центре города по сравнению с пригородами",
                    "Тепловая электростанция в городе", 
                    "Место для отдыха с подогреваемыми бассейнами"
                ],
                correct: 1,
                explanation: "'Тепловой остров' - это явление, когда температура в центре города на 5-7°C выше, чем в пригородах, из-за плотной застройки, асфальта и недостатка зеленых насаждений."
            },
            {
                question: "Какой процент отходов в Москве отправляется на переработку в 2025 году?",
                options: [
                    "10%",
                    "40%",
                    "25%", 
                    "60%"
                ],
                correct: 2,
                explanation: "В 2025 году 25% отходов Москвы отправляется на переработку. Цель города - достичь 50% к 2030 году."
            },
            {
                question: "Какой район Москвы показал самый значительный экологический прогресс в 2025 году?",
                options: [
                    "Марьино",
                    "Некрасовка",
                    "Люблино", 
                    "Печатники"
                ],
                correct: 1,
                explanation: "Некрасовка поднялась на 15 позиций в экологическом рейтинге благодаря рекультивации промзон и созданию новых парков площадью 25 га."
            },
            {
                question: "Что такое 'вертикальное озеленение'?",
                options: [
                    "Посадка высоких деревьев",
                    "Озеленение фасадов зданий и стен",
                    "Создание парков на холмах", 
                    "Выращивание растений в горшках на балконах"
                ],
                correct: 1,
                explanation: "Вертикальное озеленение - это технология озеленения фасадов зданий и стен, которая помогает улучшать качество воздуха, снижает температуру и шум в городами."
            },
            {
                question: "Какой из этих районов находится в числе самых загрязненных в 2025 году?",
                options: [
                    "Куркино",
                    "Капотня",
                    "Митино", 
                    "Ясенево"
                ],
                correct: 1,
                explanation: "Капотня остается самым экологически неблагополучным районом Москвы из-за Московского нефтеперерабатывающего завода и высокого уровня промышленных выбросов."
            },
            {
                question: "Какая программа по озеленению реализуется в Москве?",
                options: [
                    "Программа 'Сто парков'",
                    "Программа 'Миллион деревьев'",
                    "Программа 'Зеленый город'", 
                    "Программа 'Экодворы'"
                ],
                correct: 1,
                explanation: "Программа 'Миллион деревьев' реализуется в Москве с 2013 года. В рамках программы ежегодно высаживаются десятки тысяч деревьев и кустарников во всех районах города."
            }
        ];

        // НОВОЕ: Викторина по отходам (10 вопросов)
        const quizDataWaste = [
            {
                question: "Какой пластик НЕ подлежит переработке в Москве?",
                options: [
                    "PET (1)",
                    "HDPE (2)",
                    "PVC (3)", 
                    "PP (5)"
                ],
                correct: 2,
                explanation: "Пластик с маркировкой PVC (3) - поливинилхлорид - не перерабатывается в большинстве пунктов приема из-за сложности процесса и выделения токсичных веществ."
            },
            {
                question: "Сколько лет требуется для разложения пластиковой бутылки?",
                options: [
                    "10-20 лет",
                    "50-100 лет",
                    "200-300 лет", 
                    "450-500 лет"
                ],
                correct: 3,
                explanation: "Пластиковая бутылка разлагается 450-500 лет, в то время как стекло - более 1000 лет, а алюминиевая банка - 200-500 лет."
            },
            {
                question: "Что нужно сделать с пластиковой бутылкой перед сдачей на переработку?",
                options: [
                    "Вымыть и смять",
                    "Разбить на мелкие кусочки",
                    "Покрасить в другой цвет", 
                    "Ничего не делать"
                ],
                correct: 0,
                explanation: "Пластиковые бутылки нужно вымыть от остатков содержимого и смять, чтобы уменьшить объем и облегчить транспортировку."
            },
            {
                question: "Куда сдать использованные батарейки в Москве?",
                options: [
                    "В обычный мусорный контейнер",
                    "В специальные пункты приема",
                    "Закопать в землю", 
                    "Выбросить в канализацию"
                ],
                correct: 1,
                explanation: "Батарейки содержат тяжелые металлы и должны сдаваться в специальные пункты приема. Их нельзя выбрасывать в обычный мусор."
            },
            {
                question: "Какой процент москвичей сортирует отходы в 2025 году?",
                options: [
                    "15%",
                    "35%",
                    "60%", 
                    "85%"
                ],
                correct: 2,
                explanation: "По данным на 2025 год, около 60% москвичей регулярно сортируют отходы. Цель города - достичь 80% к 2030 году."
            },
            {
                question: "Что такое 'компостирование'?",
                options: [
                    "Сжигание мусора",
                    "Переработка органических отходов в удобрение",
                    "Закапывание отходов в землю", 
                    "Переплавка пластика"
                ],
                correct: 1,
                explanation: "Компостирование - это естественный процесс разложения органических отходов (пищевых, растительных) с помощью микроорганизмов, в результате которого получается ценное удобрение."
            },
            {
                question: "Какой материал разлагается быстрее всего?",
                options: [
                    "Стекло",
                    "Пластик",
                    "Бумага", 
                    "Алюминий"
                ],
                correct: 2,
                explanation: "Бумага разлагается за 2-6 месяцев, в то время как пластик - сотни лет, стекло - более 1000 лет, алюминий - 200-500 лет."
            },
            {
                question: "Что такое парниковый эффект?",
                options: [
                    "Охлаждение атмосферы из-за отражения солнца",
                    "Задержка тепла атмосферой, благодаря парниковым газам",
                    "Защита от ультрафиолета озоновым слоем", 
                    "Снижение углекислого газа из-за фотосинтеза"
                ],
                correct: 1,
                explanation: "Это процесс, при котором парниковые газы в атмосфере (углекислый газ, метан, водяной пар и др.) поглощают и переизлучают тепловое излучениея."
            },
            {
                question: "Сколько экотехнопарков работает в Московской области?",
                options: [
                    "2",
                    "5",
                    "8", 
                    "12"
                ],
                correct: 2,
                explanation: "В Московской области работает 8 современных экотехнопарков, которые перерабатывают до 50% отходов Москвы."
            },
            {
                question: "Что НЕЛЬЗЯ выбрасывать в контейнер для стекла?",
                options: [
                    "Бутылки",
                    "Керамику и фарфор",
                    "Стеклянные банки", 
                    "Стеклянные стаканы"
                ],
                correct: 1,
                explanation: "В контейнер для стекла нельзя выбрасывать керамику, фарфор, хрусталь и зеркала, так как они имеют другой химический состав и мешают переработке стекла."
            }
        ];

        // НОВОЕ: Викторина по экологии леса (10 вопросов)
        const quizDataForest = [
            {
                question: "Какой лесной массив является самым большим в Москве?",
                options: [
                    "Лосиный Остров",
                    "Битцевский лес",
                    "Измайловский парк", 
                    "Царицынский парк"
                ],
                correct: 0,
                explanation: "Лосиный Остров - самый большой лесной массив в Москве, его площадь составляет более 100 квадратных километров, часть находится в черте города, часть - в Московской области."
            },
            {
                question: "Какое дерево является самым распространенным в московских лесах?",
                options: [
                    "Липа",
                    "Дуб",
                    "Берёза", 
                    "Ель"
                ],
                correct: 0,
                explanation: "Липа является самым распространенным деревом в московских лесах и парках, занимая около 30% всех зеленых насаждений города."
            },
            {
                question: "Сколько особо охраняемых природных территорий (ООПТ) в Москве?",
                options: [
                    "50",
                    "80",
                    "120", 
                    "150"
                ],
                correct: 2,
                explanation: "В Москве насчитывается 120 особо охраняемых природных территорий (ООПТ), включая национальные парки, природные заказники и памятники природы."
            },
            {
                question: "Что такое 'лесопарковый пояс' Москвы?",
                options: [
                    "Кольцо парков вокруг центра города",
                    "Зеленые зоны вдоль рек",
                    "Леса и парки в границах МКАД", 
                    "Защитная зона лесов вокруг города"
                ],
                correct: 3,
                explanation: "Лесопарковый пояс Москвы - это защитная зона лесов вокруг города, созданная для улучшения экологической обстановки, защиты от шума и пыли, а также для отдыха горожан."
            },
            {
                question: "Какое животное является символом Лосиного Острова?",
                options: [
                    "Медведь",
                    "Волк",
                    "Лось", 
                    "Олень"
                ],
                correct: 2,
                explanation: "Лось является символом национального парка 'Лосиный Остров'. Эти животные действительно обитают в парке, хотя увидеть их удается не часто."
            },
            {
                question: "Какую функцию НЕ выполняют городские леса?",
                options: [
                    "Очистка воздуха",
                    "Защита от шума",
                    "Производство древесины", 
                    "Место для отдыха"
                ],
                correct: 2,
                explanation: "Городские леса не предназначены для производства древесины. Их основные функции: экологическая (очистка воздуха, защита от шума), рекреационная (отдых) и эстетическая."
            },
            {
                question: "Что такое 'сухостой' в лесу?",
                options: [
                    "Молодые деревья",
                    "Засохшие, но стоящие деревья",
                    "Поваленные деревья", 
                    "Кустарники"
                ],
                correct: 1,
                explanation: "Сухостой - это засохшие, но еще стоящие деревья. Они являются важной частью лесной экосистемы, служа домом для многих видов насекомых, птиц и мелких животных."
            },
            {
                question: "Какая программа по озеленению Москвы была запущена в 2013 году?",
                options: [
                    "'Зеленый щит'",
                    "'Миллион деревьев'",
                    "'Чистый лес'", 
                    "'Возрождение парков'"
                ],
                correct: 1,
                explanation: "Программа 'Миллион деревьев' была запущена в Москве в 2013 году. За время ее реализации высажены миллионы деревьев и кустарников во всех районах города."
            },
            {
                question: "Что такое 'экомониторинг' лесов?",
                options: [
                    "Спутниковое наблюдение за лесами",
                    "Система наблюдения за состоянием лесных экосистем",
                    "Контроль за вырубкой деревьев", 
                    "Учет животных в лесу"
                ],
                correct: 1,
                explanation: "Экомониторинг лесов - это система регулярных наблюдений за состоянием лесных экосистем, включая оценку здоровья деревьев, биоразнообразия, загрязнения почвы и воздуха."
            },
            {
                question: "Какой вредитель представляет наибольшую опасность для московских лесов?",
                options: [
                    "Ясеневая изумрудная златка",
                    "Майский жук",
                    "Тля", 
                    "Гусеницы"
                ],
                correct: 0,
                explanation: "Ясеневая изумрудная златка является наиболее опасным вредителем, среди наблюдаемых в городе Москве, заселяющая насаждения Ясеня и вызывающая их быстую гибель."
            }
        ];
        //Модальное окно для терминов
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
