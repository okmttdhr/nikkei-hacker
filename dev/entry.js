import $ from 'jquery';

import {getQuery} from './query';
import {logSelection, getSelection} from './selection';

const body = $('body');
const textDefault = '無料で読む';
const textLoading = '読込中';
const styleNhLink = {
  'padding': '10px',
  'background-color': '#0a385b',
  'border': '1px solid #0a385b',
  'opacity': '1',
  'color': '#fff',
  'white-space': 'nowrap',
  'text-align': 'center',
  'text-decoration': 'none',
  'position': 'absolute',
  'z-index': '99999',
};
const styleNhLinkHover = {
  'opacity': '0.8',
};
const nhLink = $('<a id="nhLink" target="_blank"></a>').text(textDefault).css(styleNhLink);

function addReadFreeBtn() {
  const {pathname, host} = window.location;
  if (host !== 'www.nikkei.com' || pathname.split('/')[1] !== 'article') return;
  const btn = $(`<a href="" onclick="" class="cmnc-button" target="_blank"></a>`)
    .html('<span class="cmn-icon_member">［有料会員限定］</span>&nbsp;' + textDefault);
  const text = $('h1.cmn-article_title .cmnc-middle').text();
  getQuery(text)
    .then((query) => {
      btn.attr({'href': 'https://www.google.co.jp/#q=' + query + '&tbm=nws'});
      $('.cmnc-open_article').append(btn);
    });
}

body.append(nhLink);
body.ready(() => {
  addReadFreeBtn();
});
body.on('mouseup', (e) => {
  const text = getSelection();
  if (text !== '') {
    logSelection(text, e.pageX, e.pageY);
    nhLink
      .css({
        'top': e.pageY + 20 + 'px',
        'left': e.pageX + 20 + 'px',
      })
      .text(textLoading)
      .show();
    getQuery(text)
      .then((query) => {
        nhLink
          .attr({'href': 'https://www.google.co.jp/#q=' + query + '&tbm=nws'})
          .text(textDefault);
      });
  } else {
    nhLink.hide();
  }
});
body.on('mouseup', '#nhLink', (e) => {
  e.stopPropagation();
});
body.on('mouseover', '#nhLink', () => {
  nhLink.css(styleNhLinkHover);
});
body.on('mouseleave', '#nhLink', () => {
  nhLink.css(styleNhLink);
});
