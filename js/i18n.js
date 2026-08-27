/* Translation dictionaries and the language switcher. */
window.DM = window.DM || {};

(function (DM) {
  'use strict';

  var STORAGE_KEY = 'davamodern_lang';
  var DEFAULT_LANG = 'ru';

  var translations = {
    ru: {
      nav_services: "Услуги",
      nav_how: "Как работает",
      nav_faq: "FAQ",
      nav_tg: "Telegram",
      hero_badge: "Онлайн 24/7 — гарант сделок в Telegram",
      hero_sub: "Telegram Garant",
      hero_desc: "Безопасные сделки с криптой и Telegram-подарками через надёжного гаранта",
      hero_btn_primary: "Написать в Telegram",
      hero_btn_ghost: "Как это работает",
      trust_deals: "500+ закрытых сделок",
      trust_speed: "Ответ в течение 10 минут",
      trust_reviews: "Отзывы в открытом канале",
      services_kicker: "Услуги",
      services_title: "Три направления, одна ответственность",
      services_lead: "Средства и подарки держит гарант, пока обе стороны не подтвердят условия.",
      card1_title: "Гарант сделок",
      card1_desc: "Сопровождаю сделку от договорённости до перевода. Проверяю обе стороны, фиксирую условия и держу средства до закрытия.",
      card2_title: "Обмен крипты",
      card2_desc: "TON, USDT и основные монеты по актуальному курсу. Комиссия и сумма к получению известны до старта обмена.",
      card3_title: "Telegram-подарки",
      card3_desc: "Покупка, продажа и передача подарков и коллекционных NFT. Проверяю подлинность и историю владения перед передачей.",
      how_kicker: "Как работает",
      how_title: "Четыре шага до закрытой сделки",
      step1_title: "Заявка",
      step1_desc: "Пишете в Telegram, описываете сделку и вторую сторону.",
      step2_title: "Условия",
      step2_desc: "Фиксируем сумму, сроки и комиссию в общем чате.",
      step3_title: "Депозит",
      step3_desc: "Средства или подарок остаются у гаранта до подтверждения.",
      step4_title: "Передача",
      step4_desc: "Обе стороны получают своё, сделка закрывается.",
      faq_kicker: "FAQ",
      faq_title: "Частые вопросы",
      faq_lead: "Не нашли ответ — напишите в Telegram, отвечаю лично.",
      faq1_q: "Как устроена работа гаранта?",
      faq1_a: "Создаём общий чат, где я фиксирую условия сделки. Покупатель переводит средства мне, продавец передаёт подарок или крипту. После подтверждения обеих сторон я закрываю сделку и отправляю средства получателю.",
      faq2_q: "Сколько стоит услуга гаранта?",
      faq2_a: "Комиссия зависит от суммы и типа сделки, обсуждается до старта и не меняется по ходу. Ориентир по вашей сделке назову сразу после первого сообщения.",
      faq3_q: "С какими криптовалютами работаете?",
      faq3_a: "TON, USDT (TRC-20 и TON), BTC и ETH. По другим монетам — уточняйте в личных сообщениях, чаще всего вариант находится.",
      faq4_q: "Как проверяется подлинность подарка?",
      faq4_a: "Смотрю историю владения, номер экземпляра и атрибуты подарка перед передачей. Если что-то не сходится, сделка не идёт дальше депозита.",
      faq5_q: "Что будет, если сделка сорвётся?",
      faq5_a: "Депозит возвращается отправителю в полном объёме. Средства не уходят второй стороне, пока условия не выполнены.",
      cta_title: "Твои нервы стоят дорого,<br>а деньги — ещё дороже",
      cta_lead: "Проводи сделки через гаранта",
      cta_btn: "Связаться в Telegram",
      footer_services: "Услуги",
      footer_how: "Как работает",
      footer_faq: "FAQ",
      footer_tg: "Telegram",
      copyright: "© 2026 DavaModern — Telegram Garant"
    },
    en: {
      nav_services: "Services",
      nav_how: "How it works",
      nav_faq: "FAQ",
      nav_tg: "Telegram",
      hero_badge: "Online 24/7 — Telegram Garant Deals",
      hero_sub: "Telegram Garant",
      hero_desc: "Secure crypto & Telegram gift deals with a trusted guarantor",
      hero_btn_primary: "Contact via Telegram",
      hero_btn_ghost: "How it works",
      trust_deals: "500+ closed deals",
      trust_speed: "Reply within 10 minutes",
      trust_reviews: "Reviews in open channel",
      services_kicker: "Services",
      services_title: "Three Services, One Responsibility",
      services_lead: "Funds and gifts are held safely by the guarantor until both parties confirm conditions.",
      card1_title: "Garant Deals",
      card1_desc: "Guiding your deal from agreement to transfer. Verifying both parties, fixing terms, and holding funds until completion.",
      card2_title: "Crypto Exchange",
      card2_desc: "TON, USDT, and major coins at live rates. Commission and final payout amount are fixed before starting.",
      card3_title: "Telegram Gifts",
      card3_desc: "Buy, sell, and transfer Telegram gifts and collectible NFTs. Verifying authenticity and ownership history prior to transfer.",
      how_kicker: "How it works",
      how_title: "Four steps to a completed deal",
      step1_title: "Request",
      step1_desc: "Message on Telegram and describe your deal and counterparty.",
      step2_title: "Terms",
      step2_desc: "We fix the amount, deadline, and fee in a group chat.",
      step3_title: "Deposit",
      step3_desc: "Funds or gifts are held by the guarantor until confirmation.",
      step4_title: "Transfer",
      step4_desc: "Both parties receive their assets, and the deal is closed.",
      faq_kicker: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_lead: "Didn't find an answer? Send a message on Telegram, I reply personally.",
      faq1_q: "How does the guarantor process work?",
      faq1_a: "We create a group chat where I record the deal terms. The buyer transfers funds to me, and the seller sends the gift or crypto. After both sides confirm, I finalize the deal and release funds to the recipient.",
      faq2_q: "How much does the guarantor service cost?",
      faq2_a: "The fee depends on the deal size and type, agreed upon upfront, and never changes mid-way. I'll state your exact rate right after your first message.",
      faq3_q: "Which cryptocurrencies do you accept?",
      faq3_a: "TON, USDT (TRC-20 and TON), BTC, and ETH. For other tokens, ask in DMs — we almost always find a solution.",
      faq4_q: "How is gift authenticity verified?",
      faq4_a: "I verify ownership history, edition number, and gift attributes prior to transfer. If anything doesn't match, the deal does not proceed.",
      faq5_q: "What happens if a deal fails?",
      faq5_a: "The deposit is returned to the sender in full. Funds are never released to the counterparty unless all terms are met.",
      cta_title: "Your peace of mind is expensive,<br>and your money is worth even more",
      cta_lead: "Conduct your deals through a trusted guarantor",
      cta_btn: "Contact on Telegram",
      footer_services: "Services",
      footer_how: "How it works",
      footer_faq: "FAQ",
      footer_tg: "Telegram",
      copyright: "© 2026 DavaModern — Telegram Garant"
    }
  };

  DM.i18n = {
    translations: translations,

    apply: function (lang) {
      if (!translations[lang]) lang = DEFAULT_LANG;
      var dict = translations[lang];
      document.documentElement.lang = lang;

      DM.setClass('.lang-btn', 'active', function (btn) {
        return btn.getAttribute('data-lang') === lang;
      });

      DM.each('[data-i18n]', function (el) {
        var value = dict[el.getAttribute('data-i18n')];
        if (value) DM.setContent(el, value);
      });

      DM.storage.set(STORAGE_KEY, lang);
    },

    init: function () {
      var self = this;
      DM.on('.lang-btn', 'click', function () {
        self.apply(this.getAttribute('data-lang'));
      });
      this.apply(DM.storage.get(STORAGE_KEY, DEFAULT_LANG));
    }
  };
})(window.DM);
