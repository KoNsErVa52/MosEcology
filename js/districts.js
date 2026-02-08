const modal = document.getElementById('districtModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const modalHeader = document.getElementById('modalHeader');
        function openDistrictModal(districtId) {
            const district = districtData[districtId];
            if (!district) return;
            
            modalTitle.textContent = district.title;
            
            if (districtId.startsWith('dirty2025')) {
                modalHeader.classList.add('negative');
            } else {
                modalHeader.classList.remove('negative');
            }
            
            const statsHtml = Object.entries(district.stats).map(([key, value]) => {
                const label = key.replace(/([А-Я])/g, ' $1').trim();
                const statClass = districtId.startsWith('dirty2025') ? 'negative' : '';
                return `
                    <div class="stat-item">
                        <span class="stat-label">${label}:</span>
                        <span class="stat-value ${statClass}">${value}</span>
                    </div>
                `;
            }).join('');
            
            modalContent.innerHTML = `
                <div class="district-image-container">
                    <img src="${district.image}" alt="${district.name}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                </div>
                <p><strong>Район:</strong> ${district.name}</p>
                <p>${district.description}</p>
                <div class="modal-stats">
                    <h4 style="grid-column: 1 / -1; margin-bottom: 15px; color: #2e7d32;">Экологические показатели 2025:</h4>
                    ${statsHtml}
                </div>
                <p><strong>Рекомендации:</strong> ${getRecommendations2025(districtId)}</p>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeDistrictModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        document.querySelectorAll('.rating-number').forEach(number => {
            number.addEventListener('click', function() {
                const districtId = this.getAttribute('data-district');
                openDistrictModal(districtId);
            });
            
            number.addEventListener('mouseenter', function() {
                const districtId = this.getAttribute('data-district');
                const district = districtData[districtId];
                if (district) {
                    this.title = `Нажмите для информации о районе ${district.name} (2025)`;
                }
            });
        });
        document.querySelectorAll('.term-card, .term-card-small').forEach(card => {
            card.addEventListener('click', function() {
                const termId = this.getAttribute('data-term');
                openTermModal(termId);
            });
            
            card.addEventListener('mouseenter', function() {
                const termId = this.getAttribute('data-term');
                const term = termData[termId];
                if (term) {
                    this.title = `Нажмите для подробного определения термина "${term.title}"`;
                }
            });
        });
        document.querySelector('.close-modal').addEventListener('click', closeDistrictModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeDistrictModal();
            }
        });
        document.querySelector('.close-term-modal').addEventListener('click', closeTermModal);
        termModal.addEventListener('click', function(e) {
            if (e.target === termModal) {
                closeTermModal();
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (modal.classList.contains('active')) {
                    closeDistrictModal();
                }
                if (termModal.classList.contains('active')) {
                    closeTermModal();
                }
            }
        });
        function getRecommendations2025(districtId) {
            if (districtId.startsWith('clean2025')) {
                return "Продолжать развивать зеленую инфраструктуру, внедрять энергоэффективные технологии, развивать велоинфраструктуру и вовлекать жителей в экологические программы.";
            } else {
                return "Необходимы срочные меры: модернизация промышленных объектов, увеличение зеленых насаждений, строительство шумозащитных экранов, развитие общественного транспорта, жесткий контроль за выбросами.";
            }
        }
