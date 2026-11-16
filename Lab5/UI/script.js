var user = 'Иванов Иван'; 

let ObjInf = [
    {
        id: '1',
        description: 'Поступление куртки кожаной по накладной №145',
        createdAt: new Date('2021-03-05T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_1.jpg',
        article: 'АТ-001',
        productType: 'одежда',
        price: 250.0
    },
    {
        id: '2',
        description: 'Поступление сумки женской по накладной №146',
        createdAt: new Date('2021-03-06T11:30:00'),
        author: 'Петров Петр',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_2.jpg',
        article: 'КГ-045',
        productType: 'кожгалантерея',
        price: 120.0
    },
    {
        id: '3',
        description: 'Регистрация дисконтной карты для клиента',
        createdAt: new Date('2021-03-07T12:15:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'CARD-12345',
        productType: 'услуга',
        price: 0.0
    },
    {
        id: '4',
        description: 'Поступление партии джинсов классических',
        createdAt: new Date('2021-03-08T09:00:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'АТ-002',
        productType: 'одежда',
        price: 90.0
    },
    {
        id: '5',
        description: 'Поступление туфель мужских кожаных',
        createdAt: new Date('2021-03-09T14:20:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'ОБ-101',
        productType: 'обувь',
        price: 180.0
    },
    {
        id: '6',
        description: 'Поступление носков мужских спортивных',
        createdAt: new Date('2021-03-10T08:30:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'ЧН-301',
        productType: 'чулочно-носочные изделия',
        price: 5.0
    },
    {
        id: '7',
        description: 'Выдача дисконтной карты Сидоровой А.П.',
        createdAt: new Date('2021-03-11T15:40:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'CARD-54321',
        productType: 'услуга',
        price: 0.0
    },
    {
        id: '8',
        description: 'Поступление пальто демисезонного женского',
        createdAt: new Date('2021-03-12T10:10:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'АТ-003',
        productType: 'одежда',
        price: 320.0
    },
    {
        id: '9',
        description: 'Поступление кроссовок молодежных',
        createdAt: new Date('2021-03-13T16:00:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'ОБ-102',
        productType: 'обувь',
        price: 150.0
    },
    {
        id: '10',
        description: 'Поступление кошельков кожаных',
        createdAt: new Date('2021-03-14T11:00:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'КГ-046',
        productType: 'кожгалантерея',
        price: 45.0
    },
    {
        id: '11',
        description: 'Поступление колготок женских капроновых',
        createdAt: new Date('2021-03-15T13:20:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'ЧН-302',
        productType: 'чулочно-носочные изделия',
        price: 12.0
    },
    {
        id: '12',
        description: 'Регистрация карты клиента Смирнова В.В.',
        createdAt: new Date('2021-03-16T10:00:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'CARD-98765',
        productType: 'услуга',
        price: 0.0
    },
    {
        id: '13',
        description: 'Поступление свитеров шерстяных',
        createdAt: new Date('2021-03-17T12:40:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'АТ-004',
        productType: 'одежда',
        price: 110.0
    },
    {
        id: '14',
        description: 'Поступление ботинок зимних мужских',
        createdAt: new Date('2021-03-18T09:30:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'ОБ-103',
        productType: 'обувь',
        price: 220.0
    },
    {
        id: '15',
        description: 'Поступление ремней кожаных',
        createdAt: new Date('2021-03-19T14:10:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'КГ-047',
        productType: 'кожгалантерея',
        price: 35.0
    },
    {
        id: '16',
        description: 'Поступление гольфов детских',
        createdAt: new Date('2021-03-20T11:00:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'ЧН-303',
        productType: 'чулочно-носочные изделия',
        price: 8.0
    },
    {
        id: '17',
        description: 'Поступление курток зимних пуховиков',
        createdAt: new Date('2021-03-21T10:00:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'АТ-005',
        productType: 'одежда',
        price: 400.0
    },
    {
        id: '18',
        description: 'Поступление туфель женских модельных',
        createdAt: new Date('2021-03-22T15:20:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'ОБ-104',
        productType: 'обувь',
        price: 160.0
    },
    {
        id: '19',
        description: 'Поступление перчаток кожаных',
        createdAt: new Date('2021-03-23T09:40:00'),
        author: 'Иванов Иван',
        photoLink: '',
        article: 'КГ-048',
        productType: 'кожгалантерея',
        price: 50.0
    },
    {
        id: '20',
        description: 'Регистрация карты клиента Васильева О.Н.',
        createdAt: new Date('2021-03-24T16:00:00'),
        author: 'Петров Петр',
        photoLink: '',
        article: 'CARD-11111',
        productType: 'услуга',
        price: 0.0
    }
];

class SalesCollection {
    constructor(objs) {
        this._ObjIn = [];
        this.restore(objs);
    }

    save() {
        try {
            localStorage.setItem('sales_objects', JSON.stringify(this._ObjIn));
        } catch (e) {
            console.error('Ошибка сохранения:', e);
        }
    }

    restore(defaultObjs) {
        try {
            const savedData = localStorage.getItem('sales_objects');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                this._ObjIn = parsed.map(item => ({
                    ...item,
                    createdAt: new Date(item.createdAt)
                }));
            } else {
                this._ObjIn = [];
                if (Array.isArray(defaultObjs)) {
                    defaultObjs.forEach(item => {
                        if (this._validateObj(item)) {
                            this._ObjIn.push({
                                ...item,
                                createdAt: new Date(item.createdAt)
                            });
                        }
                    });
                }
                this.save();
            }
        } catch (e) {
            console.error('Ошибка восстановления:', e);
            this._ObjIn = [];
            if (Array.isArray(defaultObjs)) {
                defaultObjs.forEach(item => {
                    if (this._validateObj(item)) {
                        this._ObjIn.push({
                            ...item,
                            createdAt: new Date(item.createdAt)
                        });
                    }
                });
            }
            this.save();
        }
    }

    _validateObj(obj) {
        if (!obj || typeof obj !== 'object') return false;
        if (typeof obj.id !== 'string' || obj.id.trim() === '') return false;
        if (typeof obj.description !== 'string' || obj.description.length >= 200 || obj.description.trim() === '') return false;
        if (!(obj.createdAt instanceof Date) && isNaN(new Date(obj.createdAt))) return false;
        if (typeof obj.author !== 'string' || obj.author.trim() === '') return false;
        if (obj.photoLink !== undefined && typeof obj.photoLink !== 'string') return false;
        return true;
    }

    getObjs(skip = 0, top = 10, filterConfig = {}) {
        let result = [...this._ObjIn];

        if (filterConfig && typeof filterConfig === 'object' && Object.keys(filterConfig).length > 0) {
            result = result.filter(item => {
                return Object.keys(filterConfig).every(key => {
                    if (!item.hasOwnProperty(key)) return false;
                    if (typeof filterConfig[key] === 'string' && typeof item[key] === 'string') {
                        return item[key].toLowerCase().includes(filterConfig[key].toLowerCase());
                    }
                    return item[key] === filterConfig[key];
                });
            });
        }
        result.sort((a, b) => a.id.localeCompare(b.id, undefined, {numeric: true}));
        return result.slice(skip, skip + top);
    }

    getObj(id) {
        if (typeof id !== 'string') return null;
        return this._ObjIn.find(item => item.id === id) || null;
    }

    validateObj(obj) {
        return this._validateObj(obj);
    }

    addObj(obj) {
        if (!this._validateObj(obj)) return false;
        if (this.getObj(obj.id)) return false;

        const newObj = {
            ...obj,
            createdAt: new Date(obj.createdAt)
        };

        this._ObjIn.push(newObj);
        this.save();
        return true;
    }

    editObj(id, obj) {
        if (typeof id !== 'string' || !obj || typeof obj !== 'object') return false;
        
        const targetIndex = this._ObjIn.findIndex(item => item.id === id);
        if (targetIndex === -1) return false;

        const currentObj = this._ObjIn[targetIndex];

        const updatedObj = {
            ...currentObj,
            ...obj,
            id: currentObj.id,
            author: currentObj.author,
            createdAt: currentObj.createdAt
        };

        if (!this._validateObj(updatedObj)) return false;

        this._ObjIn[targetIndex] = updatedObj;
        this.save();
        return true;
    }

    removeObj(id) {
        if (typeof id !== 'string') return false;
        const initialLength = this._ObjIn.length;
        this._ObjIn = this._ObjIn.filter(item => item.id !== id);
        
        if (this._ObjIn.length < initialLength) {
            this.save();
            return true;
        }
        return false;
    }

    addAll(objs) {
        const invalidObjs = [];
        if (!Array.isArray(objs)) return [];

        objs.forEach(item => {
            if (!this.addObj(item)) {
                invalidObjs.push(item);
            }
        });
        return invalidObjs;
    }

    clear() {
        this._ObjIn = [];
        this.save();
    }
}

const salesModel = new SalesCollection(ObjInf);

class SalesView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(objs, currentUserName) {
        if (!this.container) return;
        this.container.innerHTML = '';

        if (!objs || objs.length === 0) {
            this.container.innerHTML = '<p>Информация не найдена.</p>';
            return;
        }

        objs.forEach(item => {
            const itemElement = document.createElement('article');
            itemElement.className = 'list-item';
            const dateStr = new Date(item.createdAt).toLocaleString();
            
            const canModify = currentUserName && currentUserName === item.author;

            itemElement.innerHTML = `
                <div>
                    <strong>ID: ${item.id}</strong> | ${item.description} <br>
                    <small>Автор: ${item.author} | Дата: ${dateStr} | Артикул: ${item.article || 'Н/Д'}</small>
                </div>
                <div class="item-actions">
                    ${canModify ? `<button class="btn sm" data-id="${item.id}">Редактировать</button>` : ''}
                    ${canModify ? `<button class="btn sm danger" data-id="${item.id}">Удалить</button>` : ''}
                </div>
            `;
            this.container.appendChild(itemElement);
        });
    }
}

const invoicesView = new SalesView('invoices-container');

function updateUI() {
    const currentObjs = salesModel.getObjs(0, 20);
    invoicesView.render(currentObjs, user);
}

function addObj(obj) {
    const success = salesModel.addObj(obj);
    if (success) { updateUI(); console.log('Добавлено!'); }
    return success;
}

function removeObj(id) {
    const success = salesModel.removeObj(id);
    if (success) { updateUI(); console.log('Удалено!'); }
    return success;
}

function editObj(id, obj) {
    const success = salesModel.editObj(id, obj);
    if (success) { updateUI(); console.log('Изменено!'); }
    return success;
}

(function() {
    let state = {
        skip: 0,
        top: 10, 
        currentFilter: {}
    };

    document.addEventListener('DOMContentLoaded', () => {
        initAuthUI();
        initEventListeners();
        renderList(true);
    });

    
    function initAuthUI() {
        const loginForm = document.getElementById('login-form');
        const loginInput = document.getElementById('login-input');
        const authContainer = document.getElementById('auth-container');
        const userInfo = document.getElementById('user-info');
        const usernameDisplay = document.getElementById('username-display');
        const logoutBtn = document.getElementById('logout-btn');

        const savedUser = sessionStorage.getItem('current_user');
        if (savedUser) {
            user = savedUser;
        }

        if (user) {
            if (loginForm) loginForm.style.display = 'none';
            if (userInfo) userInfo.style.display = 'flex';
            if (usernameDisplay) usernameDisplay.textContent = `👤 ${user}`;
        } else {
            if (loginForm) loginForm.style.display = 'flex';
            if (userInfo) userInfo.style.display = 'none';
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = loginInput.value.trim();
                if (name) {
                    user = name;
                    sessionStorage.setItem('current_user', user);
                    initAuthUI();
                    renderList();
                    console.log('Успешный вход под именем:', user);
                }
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                user = null;
                sessionStorage.removeItem('current_user');
                initAuthUI();
                renderList();
                console.log('Выход из системы');
            });
        }
    }

    function renderList(reset = false) {
        if (reset) {
            state.skip = 0;
        }
        const objs = salesModel.getObjs(state.skip, state.top, state.currentFilter);
        invoicesView.render(objs, user);

        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            const totalFiltered = salesModel.getObjs(0, 1000, state.currentFilter).length;
            if (state.skip + state.top >= totalFiltered) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }
    }

    function initEventListeners() {
        const addForm = document.getElementById('add-item-form');
        if (addForm) {
            addForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const id = document.getElementById('add-id').value.trim();
                const article = document.getElementById('add-article').value.trim();
                const productType = document.getElementById('add-type').value;
                const description = document.getElementById('add-desc').value.trim();

                const newObj = {
                    id: id,
                    description: description,
                    createdAt: new Date(),
                    author: user || 'Гость',
                    photoLink: '',
                    article: article,
                    productType: productType,
                    price: 100.0
                };

                const success = salesModel.addObj(newObj);
                if (success) {
                    alert('Объект успешно создан и сохранен в localStorage!');
                    addForm.reset();
                    renderList(true);
                } else {
                    alert('Ошибка: объект не прошел валидацию или такой ID уже существует!');
                }
            });
        }

        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    state.currentFilter.description = query;
                } else {
                    delete state.currentFilter.description;
                }
                renderList(true);
            });
        }

        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                state.top += 10; 
                renderList();
            });
        }

        const container = document.getElementById('invoices-container');
        if (container) {
            container.addEventListener('click', (e) => {
                if (e.target.classList.contains('danger')) {
                    const id = e.target.getAttribute('data-id');
                    if (id && confirm('Точно удалить этот элемент?')) {
                        salesModel.removeObj(id);
                        renderList();
                    }
                } else if (e.target.classList.contains('sm') && !e.target.classList.contains('danger')) {
                    const id = e.target.getAttribute('data-id');
                    if (id) {
                        const newDesc = prompt('Введите новое описание (до 200 символов):');
                        if (newDesc !== null) {
                            salesModel.editObj(id, { description: newDesc });
                            renderList();
                        }
                    }
                }
            });
        }

        const filterSelect = document.getElementById('filter-select');
        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => {
                const val = e.target.value;
                if (val && val !== 'Все виды') {
                    state.currentFilter.productType = val;
                } else {
                    delete state.currentFilter.productType;
                }
                renderList(true);
            });
        }
    }

    window.addObj = function(obj) {
        const success = salesModel.addObj(obj);
        if (success) { renderList(true); console.log('Добавлено!'); }
        return success;
    };

    window.removeObj = function(id) {
        const success = salesModel.removeObj(id);
        if (success) { renderList(); console.log('Удалено!'); }
        return success;
    };

    window.editObj = function(id, obj) {
        const success = salesModel.editObj(id, obj);
        if (success) { renderList(); console.log('Изменено!'); }
        return success;
    };

})();