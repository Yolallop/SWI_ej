
// ==UserScript==
// @name         Zara - Ocultar Chaquetas
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Oculta productos de chaquetas en Zara.
// @author       Tu Nombre
// @match        https://www.zara.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const hideJackets = () => {
        const products = document.querySelectorAll('div.product-card');
        products.forEach(product => {
            const titleElement = product.querySelector('div.product-card__name');
            if (titleElement && titleElement.innerText.toLowerCase().includes('chaqueta')) {
                product.style.display = 'none';
            }
        });
    };

    hideJackets();

    const observer = new MutationObserver(hideJackets);
    observer.observe(document.body, { childList: true, subtree: true });
})();
