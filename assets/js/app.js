(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  const i18n = {
    ru: {
      appTitle: "Генератор robots.txt для WordPress",
      appSubtitle: "Соберите корректный robots.txt за минуты",
      heroTitle: "Создайте идеальный robots.txt для WordPress",
      heroSub: "Умный генератор с поддержкой Google, Yandex, Bing и AI-краулеров. Выберите нужные параметры и получите готовый файл за секунды.",
      badgeFree: "Бесплатно",
      sectionSetup: "Настройки",
      sectionOutput: "Результат",
      labelSiteUrl: "Адрес сайта (https://example.com)",
      hintSiteUrl: "Введите HTTPS-адрес, нужен для Host/Yandex и Sitemap",
      labelEngines: "Целевые поисковые системы",
      engineAll: "Все",
      labelSecurity: "Уровень безопасности",
      secLow: "Низкий (минимальные запреты)",
      secRec: "Рекомендуется (баланс индекс/безопасность)",
      secHigh: "Высокий (строже; риск пропуска ресурсов)",
      hintSecurity: "Строже правила могут помешать индексации ресурсов темы/плагинов",
      labelPlugins: "Плагины WordPress",
      hintPlugins: "Служебные страницы (корзина/оформление) лучше скрыть из индекса",
      labelSitemap: "Добавить Sitemap",
      hintSitemap: "Если используете Yoast/RankMath — обычно sitemap_index.xml",
      labelAdvanced: "Дополнительно",
      optYandexHost: "Директива Host для Yandex",
      optCrawlDelay: "Crawl-delay (Bing/Yandex)",
      optYandexClean: "Yandex Clean-param (utm_* и др.)",
      labelAiBlock: "Блокировать AI-краулеры",
      hintAiBlock: "GPTBot, ClaudeBot, CCBot и другие AI-боты",
      btnGenerate: "Сгенерировать",
      btnReset: "Сброс",
      btnCopy: "Копировать",
      btnDownload: "Скачать",
      disclaimer: "Важно: чрезмерные ограничения могут ухудшить индексацию. Проверяйте правила в Google Search Console и Яндекс.Вебмастер.",
      devBy: "Разработчик",
      orderDev: "Заказать разработку",
      seoTitle: "Генератор robots.txt для WordPress — онлайн инструмент | GLOBUS.studio",
      seoDesc: "Умный генератор robots.txt для WordPress: Google, Yandex, Bing. Уровни безопасности, карта сайта, поддержка плагинов. Быстро и бесплатно.",
      seoHeading: "Как составить идеальный robots.txt для WordPress",
      seoIntro: "Правильный robots.txt помогает поисковым системам эффективнее обходить сайт, экономить краулинговый бюджет и избегать индексации служебных страниц. Ниже — практические советы и частые вопросы.",
      seoBest: "Лучшие практики",
      seoBest1: "Не закрывайте CSS/JS ассеты темы и плагинов — иначе ухудшится рендеринг и оценка качества страниц.",
      seoBest2: "Закрывайте административные и персональные разделы (wp-admin, корзина/checkout), чтобы не засорять индекс.",
      seoBest3: "Добавляйте корректный Sitemap для быстрой переиндексации и обнаружения новых страниц.",
      seoBest4: "Используйте умеренный уровень ограничений («Рекомендуется») и проверяйте файл в Search Console/Вебмастере.",
      faqHeading: "FAQ",
      faqQ1: "Нужно ли добавлять директиву Host для Яндекса?",
      faqA1: "Host помогает указать основное зеркало — добавляйте, если используете Яндекс и у сайта есть зеркала с www/без www.",
      faqQ2: "Можно ли закрыть /wp-content/ и /wp-includes/?",
      faqA2: "Не рекомендуется — там находятся необходимые стили и скрипты. Строгое закрытие может повредить индексации.",
      faqQ3: "Что такое Crawl-delay и когда его использовать?",
      faqA3: "Директива замедляет скорость краулинга для отдельных ботов (например Bing/Yandex). Используйте, если сервер перегружается от обхода.",
    },
    en: {
      appTitle: "robots.txt Generator for WordPress",
      appSubtitle: "Build a proper robots.txt in minutes",
      heroTitle: "Build the perfect robots.txt for WordPress",
      heroSub: "Smart generator supporting Google, Yandex, Bing, and AI crawlers. Configure your settings and get a ready file in seconds.",
      badgeFree: "Free",
      sectionSetup: "Setup",
      sectionOutput: "Output",
      labelSiteUrl: "Site URL (https://example.com)",
      hintSiteUrl: "Enter HTTPS site URL. Used for Host and Sitemap",
      labelEngines: "Target search engines",
      engineAll: "All",
      labelSecurity: "Security level",
      secLow: "Low (minimal blocks)",
      secRec: "Recommended (balanced)",
      secHigh: "High (stricter; may block assets)",
      hintSecurity: "Stricter rules can hurt indexing of theme/plugin assets",
      labelPlugins: "WordPress plugins",
      hintPlugins: "Utility pages (cart/checkout) are better kept out of index",
      labelSitemap: "Add Sitemap",
      hintSitemap: "For Yoast/RankMath it is usually sitemap_index.xml",
      labelAdvanced: "Advanced",
      optYandexHost: "Yandex Host directive",
      optCrawlDelay: "Crawl-delay (Bing/Yandex)",
      optYandexClean: "Yandex Clean-param (utm_* etc.)",
      labelAiBlock: "Block AI crawlers",
      hintAiBlock: "GPTBot, ClaudeBot, CCBot and other AI bots",
      btnGenerate: "Generate",
      btnReset: "Reset",
      btnCopy: "Copy",
      btnDownload: "Download",
      disclaimer: "Note: overly strict rules can harm indexing. Validate in Search Console and Yandex.Webmaster.",
      devBy: "Built by",
      orderDev: "Hire us",
      seoTitle: "robots.txt Generator for WordPress — online tool | GLOBUS.studio",
      seoDesc: "Smart robots.txt generator for WordPress: Google, Yandex, Bing. Security levels, sitemap, plugin-aware. Fast and free.",
      seoHeading: "How to craft a perfect robots.txt for WordPress",
      seoIntro: "A proper robots.txt guides crawlers, saves crawl budget, and avoids indexing utility pages. Below are practical tips and FAQs.",
      seoBest: "Best practices",
      seoBest1: "Do not block theme/plugin CSS/JS assets — this degrades rendering and quality signals.",
      seoBest2: "Block administrative and personal areas (wp-admin, cart/checkout) to keep the index clean.",
      seoBest3: "Add a correct Sitemap to speed up reindexing and discovery.",
      seoBest4: "Use a balanced restrictions level (Recommended) and verify in Search Console.",
      faqHeading: "FAQ",
      faqQ1: "Should I add Yandex Host?",
      faqA1: "Host helps specify the main mirror. Add it when using Yandex and you have www/non-www mirrors.",
      faqQ2: "Can I block /wp-content/ and /wp-includes/?",
      faqA2: "Not recommended — they contain required CSS/JS. Strict blocking harms indexing.",
      faqQ3: "What is Crawl-delay and when to use it?",
      faqA3: "It slows crawl rate for specific bots (e.g., Bing/Yandex). Use if crawling overloads your server.",
    }
  };

  const state = {
    lang: (new URLSearchParams(location.search).get('lang'))
       || localStorage.getItem('lang')
       || ((navigator.language||'').toLowerCase().startsWith('ru') ? 'ru' : 'en')
    , autoSitemap: true
  };

  function setLang(lang){
    state.lang = lang;
    try { localStorage.setItem('lang', lang); } catch(e) {}
    document.documentElement.lang = lang;

    // Swap UI text
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = i18n[lang][key];
      if (typeof dict === 'string') {
        if (el.tagName === 'INPUT' && el.type === 'submit') el.value = dict;
        else el.textContent = dict;
      }
    });

    // Update SEO meta
    document.title = i18n[lang].seoTitle;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', i18n[lang].seoDesc);
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', i18n[lang].appTitle + ' — GLOBUS.studio');
    const ogDesc = $('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', i18n[lang].seoDesc);

    // Hreflang + canonical: canonical на языковую версию, чтобы обе версии попадали в индекс
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    const altRu = $('#altRu');
    const altEn = $('#altEn');
    const canonical = $('#canonicalLink');
    const ogUrl = $('#ogUrl');

    const baseUrl = new URL(location.href);
    baseUrl.searchParams.delete('lang');
    const ruUrl = new URL(baseUrl.toString()); ruUrl.searchParams.set('lang','ru');
    const enUrl = new URL(baseUrl.toString()); enUrl.searchParams.set('lang','en');

    // Canonical = текущая языковая версия
    const selfUrl = lang === 'ru' ? ruUrl : enUrl;
    canonical && canonical.setAttribute('href', selfUrl.toString());
    ogUrl && ogUrl.setAttribute('content', selfUrl.toString());

    altRu && altRu.setAttribute('href', ruUrl.toString());
    altEn && altEn.setAttribute('href', enUrl.toString());
    const altDefault = $('#altDefault');
    altDefault && altDefault.setAttribute('href', enUrl.toString());

    // Toggle pressed state and oat styling on language buttons
    $('#langRu')?.setAttribute('aria-pressed', lang==='ru' ? 'true' : 'false');
    $('#langRu')?.classList.toggle('outline', lang !== 'ru');
    $('#langEn')?.setAttribute('aria-pressed', lang==='en' ? 'true' : 'false');
    $('#langEn')?.classList.toggle('outline', lang !== 'en');
    const langSwitch = $('#langSwitch');
    if (langSwitch) langSwitch.setAttribute('aria-label', lang==='ru' ? 'Переключение языка' : 'Language switch');

    // Update JSON-LD
    renderJsonLd();
  }

  function renderJsonLd(){
    const faqs = [
      { q: i18n[state.lang].faqQ1, a: i18n[state.lang].faqA1 },
      { q: i18n[state.lang].faqQ2, a: i18n[state.lang].faqA2 },
      { q: i18n[state.lang].faqQ3, a: i18n[state.lang].faqA3 },
    ];

    const ldApp = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: i18n[state.lang].appTitle,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: location.origin + location.pathname,
      offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
      author: { "@type": "Organization", name: "GLOBUS.studio", url: "https://globus.studio" },
      inLanguage: state.lang
    };

    const ldFaq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    };

    const graph = { "@graph": [ldApp, ldFaq] };
    let el = document.getElementById('ldJson');
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'ldJson';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(graph);
  }

  function normalizeUrl(u){
    try { return new URL(u).origin; } catch(e){ return ''; }
  }

  function isHttpsUrl(u){
    try { const x = new URL(u); return x.protocol === 'https:'; } catch(e){ return false; }
  }

  function defaultSitemap(u){
    const origin = normalizeUrl(u);
    if (!origin) return '';
    return origin + '/sitemap_index.xml';
  }

  function readForm(){
    const siteUrl = $('#siteUrl').value.trim();
    const engines = $$('#engines input[type="checkbox"]').filter(i=>i.checked).map(i=>i.value);
    const security = $('#security').value;
    const plugins = $$('#plugins input[type="checkbox"]').filter(i=>i.checked).map(i=>i.value);
    const addSitemap = $('#addSitemap').checked;
    const sitemapUrl = $('#sitemapUrl').value.trim();
    const useYandexHost = $('#useYandexHost').checked;
    const crawlDelayVal = $('#crawlDelay').value.trim();
    const crawlDelay = crawlDelayVal === '' ? NaN : parseInt(crawlDelayVal, 10);
    const yandexClean = $('#yandexClean').checked;
    const blockAi = $('#blockAi').checked;
    return { siteUrl, engines, security, plugins, addSitemap, sitemapUrl, useYandexHost, crawlDelay, yandexClean, blockAi };
  }

  function buildRules({security, plugins}){
    const lines = [];
    // Baseline recommended for WordPress
    lines.push('Disallow: /wp-admin/');
    lines.push('Allow: /wp-admin/admin-ajax.php');

    if (security === 'low') {
      lines.push('Disallow: /wp-login.php');
      lines.push('Disallow: /readme.html');
    }
    if (security === 'rec') {
      lines.push('Disallow: /wp-login.php');
      lines.push('Disallow: /readme.html');
      lines.push('Disallow: /?s=');
      lines.push('Disallow: /search/');
    }
    if (security === 'high') {
      lines.push('Disallow: /wp-includes/');
      lines.push('Disallow: /wp-content/cache/');
      lines.push('Disallow: /wp-json/');
      lines.push('Disallow: /xmlrpc.php');
      lines.push('Disallow: /?s=');
      lines.push('Disallow: /search/');
      lines.push('Disallow: /author/');
      lines.push('Disallow: /*?replytocom=*');
    }

    // Plugin-aware suggestions (deduplicate common rules)
    const pluginRules = new Set();
    if (plugins.includes('woocommerce')) {
      pluginRules.add('Disallow: /cart/');
      pluginRules.add('Disallow: /checkout/');
      pluginRules.add('Disallow: /my-account/');
      pluginRules.add('Disallow: /*add-to-cart=*');
    }

    if (plugins.includes('edd')) {
      pluginRules.add('Disallow: /cart/');
      pluginRules.add('Disallow: /checkout/');
      pluginRules.add('Disallow: /purchase-confirmation/');
      pluginRules.add('Disallow: /*edd_action=*');
    }
    pluginRules.forEach(r => lines.push(r));

    return lines;
  }

  function buildRobots(){
    const t = i18n[state.lang];
    const cfg = readForm();

    const origin = normalizeUrl(cfg.siteUrl);
    const engines = cfg.engines.length ? cfg.engines : ['all'];
    const useWildcard = engines.includes('all') || engines.length === 0;

    const blocks = [];

    const rules = buildRules(cfg);

    const header = [
      `# robots.txt generated by GLOBUS.studio`,
      `# ${new Date().toISOString()}`,
      `# https://globus.studio`
    ];

    const hasCrawlDelay = !Number.isNaN(cfg.crawlDelay) && cfg.crawlDelay > 0;

    if (useWildcard) {
      const block = ['User-agent: *', ...rules];
      if (hasCrawlDelay) block.push(`Crawl-delay: ${cfg.crawlDelay}`);
      blocks.push(block);
    } else {
      engines.forEach(ua => {
        const block = [`User-agent: ${ua}`, ...rules];
        if (hasCrawlDelay) block.push(`Crawl-delay: ${cfg.crawlDelay}`);
        blocks.push(block);
      });
    }

    // AI crawlers block
    if (cfg.blockAi) {
      const aiBots = ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'CCBot', 'Bytespider', 'anthropic-ai', 'Google-Extended', 'FacebookBot', 'PerplexityBot'];
      const aiBlock = aiBots.map(bot => `User-agent: ${bot}`).concat(['Disallow: /']);
      blocks.push(aiBlock);
    }

    // Yandex Host and Clean-param only if Yandex is targeted or wildcard
    const targetsY = useWildcard || engines.includes('Yandex');

    const tail = [];
    if (cfg.addSitemap) {
      const sm = cfg.sitemapUrl || defaultSitemap(cfg.siteUrl);
      if (sm) tail.push(`Sitemap: ${sm}`);
    }
    if (targetsY && cfg.useYandexHost && origin) {
      tail.push(`Host: ${origin.replace('https://','').replace('http://','')}`);
    }
    if (targetsY && cfg.yandexClean) {
      tail.push(`Clean-param: utm_source&utm_medium&utm_campaign&utm_term&utm_content&yclid&gclid`);
    }

    // Build final string; avoid spreading a joined string (would split into chars)
    const blocksStr = blocks.map(b => b.join('\n')).join('\n\n');
    const out = [
      ...header,
      '',
      blocksStr,
      '',
      ...tail
    ].join('\n');

    return out.trim() + '\n';
  }

  function generate(){
    // Validate HTTPS site URL first
    const siteInput = $('#siteUrl');
    const val = siteInput.value.trim();
    const ok = isHttpsUrl(val);
    siteInput.setAttribute('aria-invalid', ok ? 'false' : 'true');
    const siteField = siteInput.closest('[data-field]');
    if (siteField) siteField.setAttribute('data-field', ok ? '' : 'error');
    if (!ok) {
      siteInput.focus();
      $('#robotsPreview').textContent = '';
      return;
    }

    const robots = buildRobots();
    $('#robotsPreview').textContent = robots;
    try { localStorage.setItem('robots_state', JSON.stringify(readForm())); } catch(e) {}
  }

  function restore(){
    try {
      const saved = JSON.parse(localStorage.getItem('robots_state')||'null');
      if (!saved) return;
      $('#siteUrl').value = saved.siteUrl || '';
      $$('#engines input[type="checkbox"]').forEach(i=> i.checked = saved.engines?.includes(i.value) || (i.value==='all' && (saved.engines?.includes('all')||saved.engines?.length===0)) );
      $('#security').value = saved.security || 'rec';
      $$('#plugins input[type="checkbox"]').forEach(i=> i.checked = saved.plugins?.includes(i.value));
      $('#addSitemap').checked = !!saved.addSitemap;
      $('#sitemapUrl').value = saved.sitemapUrl || '';
      $('#useYandexHost').checked = !!saved.useYandexHost;
      $('#crawlDelay').value = saved.crawlDelay || '';
      $('#yandexClean').checked = !!saved.yandexClean;
      $('#blockAi').checked = !!saved.blockAi;
    } catch(e) {}
  }

  function copyToClipboard(){
    const txt = $('#robotsPreview').textContent;
    navigator.clipboard?.writeText(txt).then(()=>{
      toast(state.lang==='ru' ? 'Скопировано' : 'Copied');
    }).catch(()=>{
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = txt; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast(state.lang==='ru' ? 'Скопировано' : 'Copied'); } catch(e) {}
      document.body.removeChild(ta);
    });
  }

  function downloadFile(){
    const blob = new Blob([$('#robotsPreview').textContent], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'robots.txt';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  function toast(msg){
    if (typeof ot !== 'undefined' && ot.toast) {
      ot.toast(msg, '', { variant: 'success', duration: 1500 });
    }
  }

  function initTheme(){
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') document.body.setAttribute('data-theme', 'dark');
      else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.setAttribute('data-theme', 'dark');
    } catch(e) {}
    updateThemeIcon();
  }

  function toggleTheme(){
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
      try { localStorage.setItem('theme', 'light'); } catch(e) {}
    } else {
      document.body.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('theme', 'dark'); } catch(e) {}
    }
    updateThemeIcon();
  }

  function updateThemeIcon(){
    const btn = $('#themeToggle');
    if (!btn) return;
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '\u2600' : '\u263E';
  }

  function initEvents(){
    $('#langRu').addEventListener('click', ()=> setLang('ru'));
    $('#langEn').addEventListener('click', ()=> setLang('en'));
    $('#themeToggle')?.addEventListener('click', toggleTheme);

    $('#siteUrl').addEventListener('input', (e)=>{
      const val = e.target.value.trim();
      const sm = $('#sitemapUrl');
      const httpsOk = isHttpsUrl(val);
      e.target.setAttribute('aria-invalid', (!httpsOk && val.length>0) ? 'true' : 'false');
      const siteField = e.target.closest('[data-field]');
      if (siteField) siteField.setAttribute('data-field', (!httpsOk && val.length>0) ? 'error' : '');
      // Auto-update sitemap if it's currently auto-generated or empty
      const currentDefault = defaultSitemap(val);
      if (httpsOk) {
        if (state.autoSitemap || !sm.value) {
          sm.value = currentDefault;
          state.autoSitemap = true;
        }
      }
      generate();
    });

    $('#addSitemap').addEventListener('change', ()=>{
      $('#sitemapUrl').disabled = !$('#addSitemap').checked;
      generate();
    });

    $('#sitemapUrl').addEventListener('input', (e)=>{
      const v = e.target.value.trim();
      // If user clears the field, re-enable auto mode; otherwise stop auto updates
      state.autoSitemap = v === '';
      generate();
    });

    // Engines: if "all" is checked, uncheck others; if any other checked, uncheck all
    $('#engines').addEventListener('change', (e)=>{
      if (e.target.type === 'checkbox') {
        const all = $$('#engines input[value="all"]')[0];
        const others = $$('#engines input[type="checkbox"]').filter(i=>i.value!=="all");
        if (e.target.value === 'all' && e.target.checked) {
          others.forEach(i=> i.checked = false);
        } else if (others.some(i=>i.checked)) {
          all.checked = false;
        }
      }
      generate();
    });

    $('#btnGenerate').addEventListener('click', generate);
    $('#btnCopy').addEventListener('click', copyToClipboard);
    $('#btnDownload').addEventListener('click', downloadFile);
    $('#btnReset').addEventListener('click', ()=>{ try { localStorage.removeItem('robots_state'); } catch(e){} location.reload(); });

    // Advanced section listeners
    $('#useYandexHost').addEventListener('change', generate);
    $('#crawlDelay').addEventListener('input', generate);
    $('#yandexClean').addEventListener('change', generate);
    $('#blockAi').addEventListener('change', generate);

    // Plugins and security listeners
    $$('#plugins input[type="checkbox"]').forEach(i=> i.addEventListener('change', generate));
    $('#security').addEventListener('change', generate);
  }

  function init(){
    initTheme();
    setLang(state.lang);
    restore();
    // Prefill sitemap if possible
    if (isHttpsUrl($('#siteUrl').value)) {
      const sm = $('#sitemapUrl');
      if (!sm.value) {
        sm.value = defaultSitemap($('#siteUrl').value);
        state.autoSitemap = true;
      } else {
        // If sitemap matches default for current domain, keep auto mode
        state.autoSitemap = (sm.value === defaultSitemap($('#siteUrl').value));
      }
    }
    $('#addSitemap').dispatchEvent(new Event('change'));
    generate();

    $('#buildInfo').textContent = 'Build: ' + (window.__BUILD_TIME__ || 'dev');
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    initEvents();
    init();
  });
})();
