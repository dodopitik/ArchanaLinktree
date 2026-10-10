"use client";

const ANDROID_PACKAGE = "com.shopee.id";

export default function ShopeeLink({ href, children }) {
  function handleClick(event) {
    if (!/android/i.test(navigator.userAgent)) return;

    event.preventDefault();
    const webPath = href.replace(/^https?:\/\//, "");
    const fallback = encodeURIComponent(href);
    window.location.assign(
      `intent://${webPath}#Intent;scheme=https;package=${ANDROID_PACKAGE};S.browser_fallback_url=${fallback};end`,
    );
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}