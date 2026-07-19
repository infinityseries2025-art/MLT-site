/**
 * MLT — файл настроек сайта
 * Меняйте тексты, ссылки и контакты здесь — после сохранения обновите страницу в браузере.
 * При деплое на Firebase Hosting положите этот файл рядом с index.html (в папке public/).
 */
window.MLT_CONFIG = {
  siteTitle: "MLT — Esports Platform",

  /**
   * Раньше здесь был ключ Google reCAPTCHA. Он убран: у части
   * посетителей (особенно из РФ) скрипт Google reCAPTCHA не грузился,
   * из-за чего капча никогда не появлялась, а форма регистрации/заявки
   * на турнир никогда не пропускала отправку — сайт выглядел
   * «сломанным». Теперь капча простая (пример на сложение) и считается
   * прямо в браузере, без обращения к внешним серверам — настраивать
   * тут больше ничего не нужно.
   */
  recaptcha: {
    siteKey: "",
  },

  brand: {
    name: "MLT",
    subtitle: "ESPORTS PLATFORM",
  },

  /** Главная — заголовок и описание */
  hero: {
    eyebrow: "MLT · Esports League Platform",
    titleLine1: "Турниры, статистика",
    titleLine2: "и матчи",
    titleAccent: "в одном месте",
    description:
      "Платформа лиги MLT: расписание матчей, автоматическая статистика игроков и команд, турнирные сетки и рейтинги. Всё обновляется само — админ вносит только результат.",
  },

  /** Страница «Контакты» */
  contacts: {
    pageTitle: "Контакты",
    heading: "Связаться с нами",
    intro:
      "По вопросам турниров, регистрации команд, партнёрства и технической поддержки — напишите нам удобным способом или заполните форму ниже.",
    email: "mltcs2tournament@gmail.com",
    emailLabel: "Email",
    telegram: "https://t.me/MLT_CS2",
    telegramLabel: "Telegram",
    telegramHandle: "@mlt_esports",
    formTitle: "Обратная связь",
    formNote: "Сообщение попадёт администратору сайта.",
    submitButton: "Отправить сообщение",
    nameLabel: "Ваше имя",
    namePlaceholder: "Как к вам обращаться",
    emailLabel: "Email для ответа",
    emailPlaceholder: "you@example.com",
    messageLabel: "Сообщение",
    messagePlaceholder: "Опишите ваш вопрос или предложение",
  },

  /** Ссылки на соцсети (футер и контакты) */
  social: {
    telegram: "https://t.me/MLT_CS2",
    twitch: "https://www.twitch.tv/mlt_cs2",
    vk: "https://vk.ru/mlt_cs2",
  },

  footer: {
    copyright: "All rights reserved — MLT",
  },

  /** Навигация — названия разделов */
  navigation: {
    home: "Главная",
    matches: "Матчи",
    rankings: "Рейтинги",
    tournaments: "Турниры",
    news: "Новости",
    contacts: "Контакты",
    admin: "Админ-панель",
    login: "Войти",
  },

  /** Кнопки и действия */
  buttons: {
    seeMatches: "Смотреть матчи",
    tournaments: "Турниры",
    allMatches: "Все матчи →",
    fullRankings: "Весь рейтинг →",
    allNews: "Все новости →",
    registerTeam: "Зарегистрировать команду",
    backToMatches: "← Ко всем матчам",
    backToRankings: "← К рейтингам",
    backToTournaments: "← Ко всем турнирам",
    createTeam: "Создать команду",
    editProfile: "Редактировать профиль игрока",
    logout: "Выйти из аккаунта",
  },

  /** Таблицы и списки */
  tables: {
    topPriority: "Приоритет №1",
    upcomingMatches: "Ближайшие матчи",
    top3Teams: "Топ-3 команды",
    latestNews: "Последние новости",
    upcoming: "Ожидаются",
    live: "В эфире",
    results: "Результаты",
    teams: "Команды",
    players: "Игроки",
  },

  /** Пустые состояния */
  emptyStates: {
    noUpcomingMatches: "Нет предстоящих матчей",
    noLiveMatches: "Сейчас нет матчей в эфире",
    noResults: "Пока нет результатов",
    noNews: "Пока нет новостей",
    noTournaments: "Пока нет турниров",
    noFinishedTournaments: "Пока нет завершённых турниров",
    noPlayerMatches: "У этого игрока пока нет матчей",
    noTeamMatches: "Пока нет завершённых матчей",
  },
};
