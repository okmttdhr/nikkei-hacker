import $ from 'jquery';

import getQuery from './getQuery';

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
};
const styleNhLinkHover = {
  'opacity': '0.8',
};
const nhLink = $('<a id="nhLink" target="_blank"></a>').text(textDefault).css(styleNhLink);

function logSelection(selection, x, y) {
  console.log('"' + selection + '" was selected at x=' + x + ', y=' + y);
}

function getSelection() {
  let selection = '';
  if (window.getSelection) {
    selection = window.getSelection();
  } else if (document.selection) {
    selection = document.selection.createRange();
  }
  return selection.toString();
}

function addReadFreeBtn() {
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
