import styles from './style.scss';
import $ from 'jquery'

console.log('hi');

$('body').on('mouseup', function(e){
  console.log('mouseup');
  let selection = '';
  if (window.getSelection) {
    selection = window.getSelection();
  } else if (document.selection) {
    selection = document.selection.createRange();
  }
  if (selection.toString() !== '') {
    console.log('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
        
  }
});
